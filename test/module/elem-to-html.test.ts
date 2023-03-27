/**
 * @description elem-to-html test
 * @author wangfupeng
 */

import elemToHtmlConf from '../../src/module/elem-to-html'
import { SwiperCardElement } from '../../src/index'

describe('swiper-card elem-to-html', () => {
  const imgs = '["https://news-bos.cdn.bcebos.com/mvideo/log-news.png"]'
  const SwiperCard: SwiperCardElement = {
    type: 'swiper-card',
    imgs: '["https://news-bos.cdn.bcebos.com/mvideo/log-news.png"]',
    children: [{ text: '' }],
  }

  it('type', () => {
    expect(elemToHtmlConf.type).toBe('swiper-card')
  })

  it('elem to html', () => {
    const html = elemToHtmlConf.elemToHtml(SwiperCard, '')
    expect(html).toBe(
      `<div data-w-e-type="swiper-card" class="editer-swiper" data-w-e-is-void data-imgs="["https://news-bos.cdn.bcebos.com/mvideo/log-news.png"]">
    <div class="swiper-item">
      <img src="https://news-bos.cdn.bcebos.com/mvideo/log-news.png" />
    </div>
  </div>`
    )
  })
})
