/**
 * @description link-card element
 * @author wangfupeng
 */

import { SlateText } from '@wangeditor/editor'

type EmptyText = {
  text: ''
}
export type SwiperCardElement = {
  type: 'swiper-card'
  imgs?: string
  children: EmptyText[] // void 元素必须有一个空 text
}

// wangEditor 内部的 link elem
export type SwiperElement = {
  type: 'swiper-item'
  url: string
  target?: string
  children: SlateText[]
}
