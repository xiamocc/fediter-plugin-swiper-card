/**
 * @description examples entry
 * @author wangfupeng
 */

import {
  IDomEditor,
  createEditor,
  createToolbar,
  Boot,
  IEditorConfig,
  i18nChangeLanguage,
} from '@wangeditor/editor'
import module from '../src/index'
// 注册
Boot.registerModule(module)

// i18nChangeLanguage('en')

// 编辑器配置
const editorConfig: Partial<IEditorConfig> = {
  readOnly: true,
  onChange(editor: IDomEditor) {
    const html = editor.getHtml()
    // @ts-ignore
    document.getElementById('text-html').value = html
    const contentStr = JSON.stringify(editor.children, null, 2)
    // @ts-ignore
    document.getElementById('text-json').value = contentStr
  },
  // hoverbarKeys: {
  //   link: {
  //     menuKeys: ['editLink', 'unLink', 'viewLink', 'convertToLinkCard'],
  //   },
  // },
}
const imgs: Array<string> = [
  'https://www.pp3.cn/uploads/allimg/200710/14-200G00Z321.jpg',
  'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/01/0F/ChMkJ1bKwuqINV7jAAfKPRrmn_cAALGvAJv4_8AB8pV398.jpg',
  'https://www.yulumi.cn/gl/uploads/allimg/201128/162003D24-2.jpg',
]
const imgsStr: string = btoa(JSON.stringify(imgs))
const linkCardHtml = `<div data-w-e-type="swiper-card" data-w-e-is-void data-imgs="${imgsStr}"></div>`

// 创建编辑器
const editor = createEditor({
  selector: '#editor-container',
  config: editorConfig,
  // content: [
  //   {
  //     // @ts-ignore
  //     type: 'paragraph',
  //     children: [{ text: 'hello world' }],
  //   },
  //   {
  //     // @ts-ignore
  //     type: 'link-card',
  //     title: '网页标题网页标题网页标题',
  //     link: 'https://zhuanlan.zhihu.com/',
  //     iconImgSrc: '',
  //     children: [{ text: '' }],
  //   },
  // ],
  html: `<p>hello&nbsp;world</p>${linkCardHtml}`,
  // html: `<p>hello&nbsp;<a href="http://news.baidu.com/" target="_blank">百度新闻</a>&nbsp;world</p>`,
})
editor.on('clickSwiperCard', (e: any) => {
  console.log('clickSwiperCard', e)
})
const toolbar = createToolbar({
  editor,
  selector: '#toolbar-container',
  config: {},
})

// @ts-ignore 为了便于调试，暴露到 window
window.editor = editor
// @ts-ignore
window.toolbar = toolbar
