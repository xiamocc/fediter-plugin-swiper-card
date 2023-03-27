/**
 * @description parse elem html
 * @author wangfupeng
 */

import { DOMElement } from '../utils/dom'
import { IDomEditor, SlateDescendant, SlateElement } from '@wangeditor/editor'
import { SwiperCardElement } from './custom-types'

function parseHtml(
  elem: DOMElement,
  children: SlateDescendant[],
  editor: IDomEditor
): SlateElement {
  const imgs = elem.getAttribute('data-imgs') || ''
  return {
    type: 'swiper-card',
    imgs,
    children: [{ text: '' }], // void node 必须有一个空白 text
  } as SwiperCardElement
}

const parseHtmlConf = {
  selector: 'div[data-w-e-type="swiper-card"]',
  parseElemHtml: parseHtml,
}

export default parseHtmlConf
