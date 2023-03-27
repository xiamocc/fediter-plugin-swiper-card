/**
 * @description plugin test
 * @author wangfupeng
 */

import { DomEditor } from '@wangeditor/editor'
import createEditor from '../utils/create-editor'
import withLinkCard from '../../src/module/plugin'
import { SwiperCardElement } from '../../src/index'

describe('swiper-card plugin', () => {
  const editor = withLinkCard(createEditor())
  const swiperCard: SwiperCardElement = {
    type: 'swiper-card',
    imgs: '["https://news-bos.cdn.bcebos.com/mvideo/log-news.png"]',
    children: [{ text: '' }],
  }

  it('isVoid', () => {
    expect(editor.isVoid(swiperCard)).toBe(true)
  })

  it('如果 swiper-card 是 editor 最后一个 elem，会追加一个 paragraph', () => {
    editor.insertNode(swiperCard)
    const elemLength = editor.children.length
    const lastElem = editor.children[elemLength - 1]
    expect(DomEditor.getNodeType(lastElem)).toBe('paragraph')
  })
})
