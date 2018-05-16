# NasPasteBin: 星云PasteBin

[![Build Status](https://travis-ci.org/kun368/NasPasteBin.svg?branch=master)](https://travis-ci.org/kun368/NasPasteBin)
[![Language](https://img.shields.io/badge/language-javascript-blue.svg)](https://github.com/kun368/NasPasteBin)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/kun368/NasPasteBin)

#### [系统地址](http://paste.zzkun.com)

#### [NAS-DAPP开发者注册](https://incentive.nebulas.io/cn/signup.html?invite=OILxo)


## 简介

**基于NAS智能合约的去中心化PasteBin服务，构建永久保存、不可篡改的PasteBin服务系统**

本网站旨在用作各方之间短期交流的粘贴信息（特别是程序代码）。 所有提交的数据都被视为公开信息。 与大多数PasteBin网站不同，本站提交的数据保证是永久的，并且记录在星云区块链上不可篡改。

NasPasteBin解决了传统PasteBin服务中无法承诺永久保存，无法承诺不可篡改代码的弊端。

## Snapshot

![](http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-16/45747890.jpg)

![](http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-16/96758929.jpg)

![](http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-16/46934645.jpg)

![](http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-16/99545496.jpg)

![](http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-16/97276753.jpg)

![](http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-16/26066554.jpg)

## Nebulas智能合约

[查询合约](https://explorer.nebulas.io/#/address/n22gG1rJ2YrGE3UhCwQZ1cMfbzxvGDDkUW8)

```javascript
'use strict';

var Item = function (text) {
    if (text) {
        var o = JSON.parse(text);
        this.id = o.id;
        this.hash = o.hash;
        this.createTime = o.createTime;
        this.createAddr = o.createAddr;
        this.nickname = o.nickname;
        this.type = o.type;
        this.content = o.content;
    } else {
        this.id = '';
        this.hash = '';
        this.createTime = 0;
        this.createAddr = '';
        this.nickname = '';
        this.type = '';
        this.content = '';
    }
};
Item.prototype = {
    toString: function () {
        return JSON.stringify(this);
    },
};


var NasFloater = function () {
    LocalContractStorage.defineMapProperty(this, "repo", {
        parse: function (text) {
            return new Item(text);
        },
        stringify: function (o) {
            return o.toString();
        }
    });
    LocalContractStorage.defineProperty(this, "counter", {
        stringify: function (obj) {
            return obj.toString();
        },
        parse: function (str) {
            return new BigNumber(str);
        }
    });
};

NasFloater.prototype = {
    init: function () {
        this.counter = new BigNumber(1);
    },

    addItem: function (nickname, type, content) {
        var item = new Item();
        item.id = this.counter.toString();
        item.hash = Blockchain.transaction.hash;
        item.createTime = Blockchain.transaction.timestamp * 1000;
        item.createAddr = Blockchain.transaction.from;
        item.nickname = nickname;
        item.type = type;
        item.content = content;
        this.repo.put(item.hash, item);
        this.counter = this.counter.plus(1);
        return item;
    },

    getItem: function (hash) {
        var item = this.repo.get(hash);
        if (!item) {
            throw new Error("not exist.");
        }
        return item;
    }
};
module.exports = NasFloater;

```

---

> 使用文档

使用:

* 启动调试服务: `npm start`
* 构建 dist: `npm run build`

目录结构:

* react-router @4.x 默认采用 hashHistory 的单页应用
* 入口文件: `src/index.js`
* 导航配置: `src/menuConfig.js`
* 路由配置: `src/routerConfig.js`
* 路由入口: `src/router.jsx`
* 布局文件: `src/layouts`
* 通用组件: `src/components`
* 页面文件: `src/pages`
