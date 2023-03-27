/**
 * @description render elem test
 * @author wangfupeng
 */

import createEditor from '../utils/create-editor'
import renderElemConf from '../../src/module/render-elem'
import { SwiperCardElement } from '../../src/index'

describe('swiper-card render-elem', () => {
  const editor = createEditor()
  const swiperCard: SwiperCardElement = {
    type: 'swiper-card',
    imgs: '["https://news-bos.cdn.bcebos.com/mvideo/log-news.png"]',
    children: [{ text: '' }],
  }

  it('type', () => {
    expect(renderElemConf.type).toBe('swiper-card')
  })

  it('render elem', () => {
    const vnode = renderElemConf.renderElem(swiperCard, null, editor) as any
    expect(vnode.sel).toBe('div')
    expect(vnode.data.props.contentEditable).toBe(false)

    // const itemVnode = vnode.children[0]
    // expect(itemVnode.text).toBe('["https://news-bos.cdn.bcebos.com/mvideo/log-news.png"]')
  })
})
