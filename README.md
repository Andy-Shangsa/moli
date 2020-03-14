<p align="center">
    <a>
        <img width="200" src="./assets/logo.png">
    </a>
</p>

<h1>
MoliUI
    <h3>A lightweight Vue.js UI toolkit</h3>
</h1>

# Install

Run the command below in your terminal to install limeUI first

```
npm install moli-ui --save
```

# Usage

## Global Use

Import in your entry script file and register it

```javascript
import MoliUI from "moli-ui";
import "lime-ui/lib/styles/lime-ui.css";

Vue.use(MoliUI);
```

### Example

```html
<m-button>click</m-button>
```

## On-demand Loading

Firstly, you should install `babel-plugin-component` in your project.

```
npm install babel-plugin-component
```

Configure your `.babelrc` file like this

```json
{
  "plugins": [
    [
      "component",
      {
        "libraryName": "moli-ui",
        "libDir": "lib",
        "styleLibrary": {
          "name": "styles",
          "base": false, // no base.css file
          "path": "[module].css"
        }
      }
    ]
  ]
}
```

The you can import component on demand, and you don't need to care about importing styles, the babel plugin will do it automaticly.

```javascript
import Vue from "vue";
import { Button } from "moli-ui";

Vue.component(Button.name, Button);
```
