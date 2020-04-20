<p align="center">
  <a href="https://github.com/vortesnail/qier-progress">
    <img width="271" src="https://cdn.nlark.com/yuque/0/2020/png/341314/1581180114750-bcd1cc60-0847-49e0-96bd-da4e76901f87.png#align=left&display=inline&height=24&name=%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202020-02-09%2000.39.47.png&originHeight=226&originWidth=2560&size=340990&status=done&style=none&width=271">
  </a>
</p>

<h1 align="center">一个优美且简洁进度条显示工具</h1>
<div align="center">

[![npm version](https://img.shields.io/npm/v/qier-progress)](https://www.npmjs.com/package/qier-progress) [![package size](https://img.shields.io/bundlephobia/minzip/qier-progress)](https://www.npmjs.com/package/qier-progress) 
[![download](https://img.shields.io/npm/dm/qier-progress)](https://www.npmjs.com/package/qier-progress) [![Build Status](https://travis-ci.org/vortesnail/qier-progress.svg?branch=master)](https://travis-ci.org/vortesnail/qier-progress) [![Coverage Status](https://coveralls.io/repos/github/vortesnail/qier-progress/badge.svg?branch=master)](https://coveralls.io/github/vortesnail/qier-progress?branch=master) [![LICENSE](https://img.shields.io/npm/l/qier-progress)](https://github.com/vortesnail/qier-progress/blob/master/LICENSE) 

[English](./README.md) &#124; 简体中文

</div>

## 介绍

`qier-progress` 用于缓解用户焦虑的进度条，它优美且简单，在你的网页发送请求或跳转网站的时候使用它吧！当然，还可以用于一些文件上传或加载场景。如果你知道 [nprogress](https://github.com/rstacruz/nprogress)，那你对这个插件就更不会陌生了。

💃[check demo](https://vortesnail.github.io/qier-progress/)

## 基本使用
#### 🛠 安装
```javascript
npm install --save qier-progress
```

#### 📦 使用
首先, 从你的文件中引入插件。
```javascript
import QProgress from 'qier-progress'
```

再者，创建一个实例对象（可传入一个对象用于自定义参数，下面讲到）。
```javascript
const qprogress = new QProgress()
```

最后，在合适的位置启动它，再在你想的位置结束它吧～
```javascript
qprogress.start()
qprogress.finish()
```

## 高级使用
#### 📌 设定当前进度条位置：
使用`.set(n)` 进行设置 ![](https://cdn.nlark.com/yuque/__latex/7b8b965ad4bca0e41ab51de7b31363a1.svg#card=math&code=n&height=12&width=10) 的值在 `0..1` 之间。
```javascript
qprogress.set(0.0)     // same as .start()
qprogress.set(0.6)
qprogress.set(1.0)     // same as .finish()
```

#### 🎢 自定义快进：
使用 `.inc(n)` 增加进度, 但是它在 `.finish()` 执行之前永远不会达到 `100%` 。
```javascript
qprogress.inc()
qprogress.inc(0.2)	// specific value you want
```

#### 🥣 强制结束：
使用 `.finish()` 强制结束，很好理解，就是在你想结束的位置执行它，不然永远存在进度条。
```javascript
qprogress.finish()
```

#### 🧮 获取当前进度位置
使用 `.status` 获取当前进度位置，可用于一些你喜欢的判断， ![](https://cdn.nlark.com/yuque/__latex/7b8b965ad4bca0e41ab51de7b31363a1.svg#card=math&code=n&height=12&width=10) 的范围在 `0..1` 之间.
```javascript
qprogress.status
```

## 传入参数定义
#### 🤔 我们如何自定义进度条？
在创建实例的时候，我们可以传入一个对象自定义实例对象的一些属性，比如开始最小值、进度条高度、颜色等：
```javascript
const qprogress = new QProgress({
  minimum: 0.08,
  height: 3,
  color: '#17829f'
})
```

#### 📕 参数说明
| 参数 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `minimum` | 启动时使用的最小百分比。 | number(0..1) | 0.12 |
| `height` |  进度条的高度，单位为 `px` 。 | number | 2 |
| `color` | 进度条的颜色，支持RGB。 | string | '#1890ff' |
| `colorful` | 是否彩色模式的开关。 | boolean | true |
| `easing` | Css transition 属性的 `time-function` 。 | string | 'ease' |
| `speed` | Css transition 属性的 `duration` , 单位为 `ms` 。 | number | 400 |
| `trickle` | 是否自动递增行为的开关。 | boolean | true |
| `trickleSpeed` | 自动递增的速度，表示递增间隔，单位为 `ms` 。 | number | 400 |
| `parentNode` | 指定此项可更改父容器。 | Element &#124; string | 'body' |


## 参与贡献
非常欢迎各位参与此项目，你可以对代码进行改进，功能的增加或者最主要的，添加测试！在此之前请仔细阅读 [CONTRIBUTING](ssd) 。

## Inspiration and purpose
这个项目最直接的灵感就是 [nprogress](https://github.com/rstacruz/nprogress), 参照了大量其源码，并决定用 `typescript` 进行重构，并增加了一些其他的特性。非常感谢 [nprogress 的贡献者们](https://github.com/rstacruz/nprogress/graphs/contributors) 给予我一个学习的机会～

## 关于我
[![Github.svg](https://cdn.nlark.com/yuque/0/2020/svg/341314/1581188387396-7788bf71-e189-4c34-bcaa-eaa5b0055497.svg#align=left&display=inline&height=24&name=Github.svg&originHeight=32&originWidth=32&size=2534&status=done&style=none&width=24)](https://github.com/vortesnail) [![juejin-02.svg](https://cdn.nlark.com/yuque/0/2020/svg/341314/1581188386963-d8bc6ee6-b3f4-47f8-b53c-5bd493c890b4.svg#align=left&display=inline&height=24&name=juejin-02.svg&originHeight=32&originWidth=32&size=884&status=done&style=none&width=24)](https://juejin.im/user/5da573d3f265da5b8a5168a6) [![哔哩哔哩.svg](https://cdn.nlark.com/yuque/0/2020/svg/341314/1581188388001-39360fed-b53a-47db-8b83-cff8126561da.svg#align=left&display=inline&height=24&name=%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9.svg&originHeight=32&originWidth=32&size=6080&status=done&style=none&width=24)](https://space.bilibili.com/80755916) [![知乎.svg](https://cdn.nlark.com/yuque/0/2020/svg/341314/1581188354814-5e2956ab-2895-4f09-b788-7c5175160e41.svg#align=left&display=inline&height=24&name=%E7%9F%A5%E4%B9%8E.svg&originHeight=32&originWidth=32&size=2265&status=done&style=none&width=24)](https://www.zhihu.com/people/vortesnail)

## License
[MIT](./LICENSE)
