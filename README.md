# wangEditor 链接卡片 插件

[English Documentation](./README-en.md)

## 介绍

[wangEditor](https://www.wangeditor.com/) 链接卡片 插件。

## 安装

```shell
yarn add @wangeditor/plugin-link-card
```

## 使用

### 注册到编辑器

```js
import { Boot } from '@wangeditor/editor'
import swiperCardModule from '@xiamocc/plugin-swiper-card'

// 注册。要在创建编辑器之前注册，且只能注册一次，不可重复注册。
Boot.registerModule(swiperCardModule)
```

### 配置

编辑器配置

```ts
// 无需配置
```

然后创建编辑器和工具栏，会用到 `editorConfig` 。具体查看 wangEditor 文档。

### 显示 HTML

一个 link-card 节点产出的 HTML 格式如下

```html
<div data-w-e-type='swiper-card' data-w-e-is-void data-imgs='${imgsStr}'></div>
```

## 其他

支持 i18n 多语言
