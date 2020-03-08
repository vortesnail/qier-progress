<p align="center">
  <a href="https://github.com/vortesnail/qier-progress">
    <img width="271" src="https://cdn.nlark.com/yuque/0/2020/png/341314/1581180114750-bcd1cc60-0847-49e0-96bd-da4e76901f87.png#align=left&display=inline&height=24&name=%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202020-02-09%2000.39.47.png&originHeight=226&originWidth=2560&size=340990&status=done&style=none&width=271">
  </a>
</p>

<h1 align="center">Slim progress bars for anywhere you want to use</h1>
<div align="center">

[![npm version](https://img.shields.io/npm/v/qier-progress)](https://www.npmjs.com/package/qier-progress) [![package size](https://img.shields.io/bundlephobia/minzip/qier-progress)](https://www.npmjs.com/package/qier-progress) 
[![download](https://img.shields.io/npm/dw/qier-progress)](https://www.npmjs.com/package/qier-progress) [![Build Status](https://travis-ci.org/vortesnail/qier-progress.svg?branch=master)](https://travis-ci.org/vortesnail/qier-progress) [![Coverage Status](https://coveralls.io/repos/github/vortesnail/qier-progress/badge.svg?branch=master)](https://coveralls.io/github/vortesnail/qier-progress?branch=master) [![LICENSE](https://img.shields.io/npm/l/qier-progress)](https://github.com/vortesnail/qier-progress/blob/master/LICENSE) 


[简体中文](./READM-zh-CN.md) &#124; English

</div>

## Introduction

`qier-progress` is a progress bar. It can be used for some watting time like jump links, request data, and load or upload files and images to give us feedback and reduce our anxiety. Also if you have used [nprogress](https://github.com/rstacruz/nprogress), then you must know what I am talking about ~

💃[check demo](https://vortesnail.github.io/qier-progress/)

## Quick Start
#### 🛠 Install
```javascript
npm install --save qier-progress
```

#### 📦 Use
Firstly, import module in Vue, React, Angular wherever es6 module is supported .
```javascript
import QProgress from 'qier-progress'
```

Secondly, create instance.
```javascript
const qprogress = new QProgress()
```

Thirdly, simply call `start()` and `finish()` to control the progress bar.
```javascript
qprogress.start()
qprogress.finish()
```

## Advanced usage
#### 📌 Set progress value:
Use `.set(n)` to set a progress percentage, where ![](https://cdn.nlark.com/yuque/__latex/7b8b965ad4bca0e41ab51de7b31363a1.svg#card=math&code=n&height=12&width=10) is a number between `0..1` .
```javascript
qprogress.set(0.0)     // same as .start()
qprogress.set(0.6)
qprogress.set(1.0)     // same as .finish()
```

#### 🎢 Increase manually:
Use `.inc(n)` to increment the progress bar, but it will stop increasing after reaching the threshold, means it will never reach `100%` .
```javascript
qprogress.inc()
qprogress.inc(0.2)	// specific value you want
```

#### 🥣 Forced finished:
Use `.finish()` to unmount the progress var, of course, there will also have an end process animation.
```javascript
qprogress.finish()
```

#### 🧮 Get current progress value:
Use `.status` to get current value ![](https://cdn.nlark.com/yuque/__latex/7b8b965ad4bca0e41ab51de7b31363a1.svg#card=math&code=n&height=12&width=10) where is a number between `0..1` .
```javascript
qprogress.status
```

## Configuration
#### 🤔 How to customize
When creating an instance, you can customize some parameters like this：
```javascript
const qprogress = new QProgress({
  minimum: 0.08,
  height: 3,
  color: '#17829f'
})
```

#### 📕 Configuration list
| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| `minimum` | Minimum percentage used upon starting. | number(0..1) | 0.12 |
| `height` | Progress bar's height, unit is `px` . | number | 2 |
| `color` | Progress bar's color, support RGB. | string | '#1890ff' |
| `colorful` | Colorful mode switch. | boolean | true |
| `easing` | Css transition property `time-function` . | string | 'ease' |
| `speed` | Css transition property `duration` , unit is `ms` . | number | 400 |
| `trickle` | Automatic incrementing behavior switch. | boolean | true |
| `trickleSpeed` | Automatic incrementing speed, means increment interval, unit is `ms` . | number | 400 |
| `parentNode` | Specify this to change the parent container. | Element &#124; string | 'body' |


## Contribution
Welcome to participate in this project, please read [CONTRIBUTING](ssd) carefully.

## Inspiration and purpose
First of all, I am a beginner of `typescript` . When I enjoy the convenience brought by [nprogress](https://github.com/rstacruz/nprogress), I hope that I can learn a little bit from it, so I retyped this plugin using `typescript`  and added some other features. I learned a lot of coding knowledge in the process, and finally I sincerely thank the [nprogress contributors](https://github.com/rstacruz/nprogress/graphs/contributors) very much, respect!

## About me
[![Github.svg](https://cdn.nlark.com/yuque/0/2020/svg/341314/1581188387396-7788bf71-e189-4c34-bcaa-eaa5b0055497.svg#align=left&display=inline&height=24&name=Github.svg&originHeight=32&originWidth=32&size=2534&status=done&style=none&width=24)](https://github.com/vortesnail) [![juejin-02.svg](https://cdn.nlark.com/yuque/0/2020/svg/341314/1581188386963-d8bc6ee6-b3f4-47f8-b53c-5bd493c890b4.svg#align=left&display=inline&height=24&name=juejin-02.svg&originHeight=32&originWidth=32&size=884&status=done&style=none&width=24)](https://juejin.im/user/5da573d3f265da5b8a5168a6) [![哔哩哔哩.svg](https://cdn.nlark.com/yuque/0/2020/svg/341314/1581188388001-39360fed-b53a-47db-8b83-cff8126561da.svg#align=left&display=inline&height=24&name=%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9.svg&originHeight=32&originWidth=32&size=6080&status=done&style=none&width=24)](https://space.bilibili.com/80755916) [![知乎.svg](https://cdn.nlark.com/yuque/0/2020/svg/341314/1581188354814-5e2956ab-2895-4f09-b788-7c5175160e41.svg#align=left&display=inline&height=24&name=%E7%9F%A5%E4%B9%8E.svg&originHeight=32&originWidth=32&size=2265&status=done&style=none&width=24)](https://www.zhihu.com/people/vortesnail)

## License
[MIT](./LICENSE)
