### 一套基于 Vue 2.x 桌面 UI 框架

#### npm 下载

```
  npm i -S moli-element
```

#### yarn 下载

```
  yarn add moli-element
```

## 使用方式

#### 全局

```js
import moli from "moli-element";
import "moli-element/lib/styles/index.css";
```

#### 按需引入

##### 借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。

##### 首先，安装 babel-plugin-component：

```
  npm install babel-plugin-component -D
```

##### 然后，将 .babelrc 修改为：

```
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "moli-element",
        "styleLibraryName": "styles"
      }
    ]
  ]
}
```
