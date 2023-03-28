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
import Base64 from '../src/utils/base'
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
const base = new Base64()
const imgsStr: string = base.encode(JSON.stringify(imgs))
// const linkCardHtml = `<div data-w-e-type='swiper-card' data-w-e-is-void data-imgs='WyJodHRwOi8vZnVzaW9uLXNvdXJjZS5mdXNpb24uY29tOjE4MDEvZnVzaW9uLXNvdXJjZS92aXJ0dWFsL2J1c2luZXNzX3RlbXBsYXRlL+aWh+aho+aWh+S7tui1hOaWmTHvvIjlhbPogZTvvIkvdGVzdDEuanBnIiwiaHR0cDovL2Z1c2lvbi1zb3VyY2UuZnVzaW9uLmNvbToxODAxL2Z1c2lvbi1zb3VyY2UvdmlydHVhbC9idXNpbmVzc190ZW1wbGF0ZS/mlofmoaPmlofku7botYTmlpkx77yI5YWz6IGU77yJL3Rlc3QyLmpwZyIsImh0dHA6Ly9mdXNpb24tc291cmNlLmZ1c2lvbi5jb206MTgwMS9mdXNpb24tc291cmNlL3ZpcnR1YWwvYnVzaW5lc3NfdGVtcGxhdGUv5paH5qGj5paH5Lu26LWE5paZMe+8iOWFs+iBlO+8iS90ZXN0My5qcGciLCJodHRwOi8vZnVzaW9uLXNvdXJjZS5mdXNpb24uY29tOjE4MDEvZnVzaW9uLXNvdXJjZS92aXJ0dWFsL2J1c2luZXNzX3RlbXBsYXRlL+aWh+aho+aWh+S7tui1hOaWmTHvvIjlhbPogZTvvIkvdGVzdDQuanBnIiwiaHR0cDovL2Z1c2lvbi1zb3VyY2UuZnVzaW9uLmNvbToxODAxL2Z1c2lvbi1zb3VyY2UvdmlydHVhbC9idXNpbmVzc190ZW1wbGF0ZS/mlofmoaPmlofku7botYTmlpkx77yI5YWz6IGU77yJL3Rlc3Q1LmpwZyIsImh0dHA6Ly9mdXNpb24tc291cmNlLmZ1c2lvbi5jb206MTgwMS9mdXNpb24tc291cmNlL3ZpcnR1YWwvYnVzaW5lc3NfdGVtcGxhdGUv5paH5qGj5paH5Lu26LWE5paZMe+8iOWFs+iBlO+8iS90ZXN0Ni5qcGciLCJodHRwOi8vZnVzaW9uLXNvdXJjZS5mdXNpb24uY29tOjE4MDEvZnVzaW9uLXNvdXJjZS92aXJ0dWFsL2J1c2luZXNzX3RlbXBsYXRlL+aWh+aho+aWh+S7tui1hOaWmTHvvIjlhbPogZTvvIkvdGVzdDcuanBnIiwiaHR0cDovL2Z1c2lvbi1zb3VyY2UuZnVzaW9uLmNvbToxODAxL2Z1c2lvbi1zb3VyY2UvdmlydHVhbC9idXNpbmVzc190ZW1wbGF0ZS/mlofmoaPmlofku7botYTmlpkx77yI5YWz6IGU77yJL3Rlc3Q4LmpwZyIsImh0dHA6Ly9mdXNpb24tc291cmNlLmZ1c2lvbi5jb206MTgwMS9mdXNpb24tc291cmNlL3ZpcnR1YWwvYnVzaW5lc3NfdGVtcGxhdGUv5paH5qGj5paH5Lu26LWE5paZMe+8iOWFs+iBlO+8iS90ZXN0OS5qcGciLCJodHRwOi8vZnVzaW9uLXNvdXJjZS5mdXNpb24uY29tOjE4MDEvZnVzaW9uLXNvdXJjZS92aXJ0dWFsL2J1c2luZXNzX3RlbXBsYXRlL+aWh+aho+aWh+S7tui1hOaWmTHvvIjlhbPogZTvvIkvdGVzdDEwLmpwZyIsImh0dHA6Ly9mdXNpb24tc291cmNlLmZ1c2lvbi5jb206MTgwMS9mdXNpb24tc291cmNlL3ZpcnR1YWwvYnVzaW5lc3NfdGVtcGxhdGUv5paH5qGj5paH5Lu26LWE5paZMe+8iOWFs+iBlO+8iS90ZXN0MTEuanBnIiwiaHR0cDovL2Z1c2lvbi1zb3VyY2UuZnVzaW9uLmNvbToxODAxL2Z1c2lvbi1zb3VyY2UvdmlydHVhbC9idXNpbmVzc190ZW1wbGF0ZS/mlofmoaPmlofku7botYTmlpkx77yI5YWz6IGU77yJL3Rlc3QxMi5qcGciLCJodHRwOi8vZnVzaW9uLXNvdXJjZS5mdXNpb24uY29tOjE4MDEvZnVzaW9uLXNvdXJjZS92aXJ0dWFsL2J1c2luZXNzX3RlbXBsYXRlL+aWh+aho+aWh+S7tui1hOaWmTHvvIjlhbPogZTvvIkvdGVzdDEzLmpwZyIsImh0dHA6Ly9mdXNpb24tc291cmNlLmZ1c2lvbi5jb206MTgwMS9mdXNpb24tc291cmNlL3ZpcnR1YWwvYnVzaW5lc3NfdGVtcGxhdGUv5paH5qGj5paH5Lu26LWE5paZMe+8iOWFs+iBlO+8iS90ZXN0MTQuanBnIiwiaHR0cDovL2Z1c2lvbi1zb3VyY2UuZnVzaW9uLmNvbToxODAxL2Z1c2lvbi1zb3VyY2UvdmlydHVhbC9idXNpbmVzc190ZW1wbGF0ZS/mlofmoaPmlofku7botYTmlpkx77yI5YWz6IGU77yJL3Rlc3QxNS5qcGciXQ=='></div>`
const linkCardHtml = `<div data-w-e-type='swiper-card' data-w-e-is-void data-imgs='${imgsStr}'></div>`

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
editor.on('clickSwiperCard', (index: string, imgs: Array<string>) => {
  console.log('clickSwiperCard', index, imgs)
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
