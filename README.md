# Kamus Besar Bahasa Indonesia

## ⚡ **Installation**
[![NPM INSTALL](http://img.shields.io/badge/npm-install-blue.svg?style=flat&logo=npm)](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) ![NODE JS](http://img.shields.io/badge/Node-JS-teal.svg?style=flat&logo=node.js)
```
$ npm i kbbi-scraper
```
## 🔰 **Usage**
```js
const kbbi = require('kbbi-scraper');

(async () => {
    let query = 'pohon';

    kbbi(query).then(res => {
        console.log(res);
    }).catch(console.error());
})()

```
## 😃 **Thank You For Visiting!**
* [`Buy Me A Coffee☕ ~ Saweria`](https://saweria.co/Natsu062)
