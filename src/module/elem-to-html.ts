/**
 * @description elem to html
 * @author wangfupeng
 */

import { SlateElement } from '@wangeditor/editor'
import { SwiperCardElement } from './custom-types'
import Base64 from '../utils/base'
// 生成 html 的函数
function swiperCardToHtml(elem: SlateElement, childrenHtml: string): string {
  const { imgs = '' } = elem as SwiperCardElement
  console.log(elem)
  console.log(imgs)
  const base = new Base64()
  const imgsStr: string = imgs ? base.decode(imgs) : '[]'
  const imgsArr: Array<string> = JSON.parse(imgsStr)
  let temp: string = ''
  for (const img of imgsArr) {
    temp += `<img src="${img}" />`
  }
  const html = `<div data-w-e-type="swiper-card" class="editer-swiper" data-w-e-is-void data-imgs="${imgs}">
    <div class="swiper-item">
      ${temp}
    </div>
  </div>`
  return html
}

// 配置
const conf = {
  type: 'swiper-card', // 节点 type ，重要！！！
  elemToHtml: swiperCardToHtml,
}

export default conf
