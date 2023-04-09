/**
 * @description render elem
 * @author wangfupeng
 */

import { h, VNode } from 'snabbdom'
import { DomEditor, IDomEditor, SlateElement } from '@wangeditor/editor'
import { SwiperCardElement } from './custom-types'
import Base64 from '../utils/base'
import { v4 as uuidv4 } from 'uuid'

function renderSwiperCard(elem: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode {
  const selected = DomEditor.isNodeSelected(editor, elem) // 当前节点是否选中
  const { imgs, mode } = elem as SwiperCardElement
  const itemNode: VNode[] = []
  const base = new Base64()
  const imgsStr: string = imgs ? base.decode(imgs) : '[]'
  const imgsArr: Array<string> = JSON.parse(imgsStr)
  const uuid = uuidv4()

  // 循环生成容器
  let num = 0
  for (const img of imgsArr) {
    const image: VNode =
      mode !== 'list'
        ? h('img', {
            props: { className: 'w-e-textarea-swiper-card-img', src: img },
          })
        : h('img', {
            props: { className: 'w-e-textarea-swiper-card-img', src: img },
            dataset: {
              index: String(num),
            },
            on: {
              click: (e: any) => {
                const index = e.target.dataset.index
                editor.emit('clickSwiperCard', index, imgsArr)
              },
            },
          })
    num++
    itemNode.push(image)
  }
  const ilength = itemNode.length
  const style: any = {
    width:
      ilength > 0 && mode !== 'list'
        ? `${100 * ilength}%`
        : `calc(${450 * ilength}px + ${12 * ilength + 12}px)`,
  }
  if (!ilength && mode !== 'list') {
    style['display'] = 'grid'
    style['placeItems'] = `center`
  }
  // 轮播容器部分
  const swiperContainer = h(
    'div',
    {
      props: {
        className: 'w-e-textarea-swiper-card-swiper-container',
      },
      dataset: {
        uuid,
        index: '0',
      },
      style: style,
    },
    ilength > 0 ? itemNode : '暂无图片'
  )
  // 轮播按钮部分
  const swiperButton = h(
    'div',
    {
      props: {
        className: 'w-e-textarea-swiper-card-swiper-button',
      },
    },
    [
      h(
        'div',
        {
          props: {
            className: 'w-e-textarea-swiper-card-swiper-button-prev',
          },
          on: {
            click: () => {
              const alength: number = itemNode.length
              const swiper: any = document.querySelector(
                `.w-e-textarea-swiper-card-swiper-container[data-uuid="${uuid}"]`
              )
              let index = swiper.dataset.index
              if (index < 1) {
                index = alength - 1
              } else {
                index--
              }
              swiper.style.left = index * -100 + '%'
              swiper.dataset.index = index
            },
          },
        },
        '‹'
      ),
      h(
        'div',
        {
          props: {
            className: 'w-e-textarea-swiper-card-swiper-button-index',
          },
          on: {
            click: () => {
              const swiper: any = document.querySelector(
                `.w-e-textarea-swiper-card-swiper-container[data-uuid="${uuid}"]`
              )
              const index = swiper.dataset.index
              editor.emit('clickSwiperCard', index, imgsArr)
            },
          },
        },
        ``
      ),
      h(
        'div',
        {
          props: {
            className: 'w-e-textarea-swiper-card-swiper-button-next',
          },
          on: {
            click: () => {
              const alength: number = itemNode.length
              const swiper: any = document.querySelector(
                `.w-e-textarea-swiper-card-swiper-container[data-uuid="${uuid}"]`
              )
              let index = swiper.dataset.index
              if (index >= alength - 1) {
                index = 0
              } else {
                index++
              }
              swiper.style.left = index * -100 + '%'
              swiper.dataset.index = index
            },
          },
        },
        '›'
      ),
    ]
  )

  const child = [swiperContainer]
  if (imgsArr.length && mode !== 'list') {
    child.push(swiperButton)
  }
  const className = `w-e-textarea-swiper-card-container ${mode === 'list' ? 'list' : ''}`
  // 主容器
  const vnode = h(
    'div',
    {
      props: {
        contentEditable: false,
        className: className,
      },
      dataset: {
        selected: selected ? 'true' : '', // 标记为 选中
      },
      on: {
        mousedown: event => event.preventDefault(),
      },
    },
    child
  )

  return vnode
}

const conf = {
  type: 'swiper-card', // 节点 type ，重要！！！
  renderElem: renderSwiperCard,
}

export default conf
