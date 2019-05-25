# 一个 Vue UI框架

[![Build Status](https://travis-ci.org/wfcsm/lunz-zyc.svg?branch=master)](https://travis-ci.org/wfcsm/lunz-zyc)

## 介绍

这是在我学习Vue过程中做的的一个UI框架

## 开始使用

1. 添加css 样式

使用本框架前，请在css中开启 border-box

```
*,*::before,*::after{box-sizing: border-box;}
```
IE8及以上浏览器都支持此样式
你还需设置默认颜色变量(后续会改为scss)

```
:root {
        --button-height: 32px;
        --font-size:14px;
        --button-bg:white;
        --button-active-bg:#eee;
        --border-radius:4px;
        --color:#999;
        --border-color:#999;
        /* --border-color-hover:#666; */
        --border-color-hover:red;
    }
```
IE 15 及以上支持此样式

2. 安装 lunz-zyc
```
npm install --save lunz-zyc
```

3.引入lunz
```
import {Button,ButtonGroup,Icon} from "lunz-zyc"
import 'lunz-zyc/dist/index.css'

export default {
  name: 'app',
  components: {
    HelloWorld,
    "g-button":Button
  }
}
```
4.引入svg symbol

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码


