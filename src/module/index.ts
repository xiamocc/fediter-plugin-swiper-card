/**
 * @description module entry
 * @author wangfupeng
 */

import { IModuleConf } from '@wangeditor/editor'
import withSwiperCard from './plugin'
import renderElemConf from './render-elem'
import elemToHtmlConf from './elem-to-html'
import parseHtmlConf from './parse-elem-html'

const module: Partial<IModuleConf> = {
  editorPlugin: withSwiperCard,
  renderElems: [renderElemConf],
  elemsToHtml: [elemToHtmlConf],
  parseElemsHtml: [parseHtmlConf],
}

export default module
