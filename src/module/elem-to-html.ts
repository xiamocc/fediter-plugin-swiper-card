/**
 * @description elem to html
 * @author wangfupeng
 */

import { SlateElement } from '@wangeditor/editor'
import { SwiperCardElement } from './custom-types'
// 生成 html 的函数
function swiperCardToHtml(elem: SlateElement, childrenHtml: string): string {
  const { imgs = '' } = elem as SwiperCardElement
  const html = `<div data-w-e-type="swiper-card" data-w-e-is-void data-imgs="${imgs}"></div>`
  return html
}

// 配置
const conf = {
  type: 'swiper-card', // 节点 type ，重要！！！
  elemToHtml: swiperCardToHtml,
}

export default conf
