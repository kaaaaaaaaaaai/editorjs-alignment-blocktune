![](https://badgen.net/badge/Editor.js/v2.22.3/blue)

# Text Alignment tune tool for Editor.js
You can add text alignment to any block.

![image](https://user-images.githubusercontent.com/2194021/113727385-0c913780-9730-11eb-836e-c536b6c19f23.gif)

If you can help, please push the Star button :)

### required
- editor.js v2.22.3 ↑

## Installation

### Install via NPM

Get the package

```shell
npm i --save editorjs-text-alignment-blocktune
```

Include module at your application

```javascript
const AlignmentTuneTool = require('editorjs-text-alignment-blocktune');
```

### Download to your project's source dir

1. Upload folder `dist` from repository
2. Add `dist/bundle.js` file to your page.

### Load from CDN

`https://cdn.jsdelivr.net/npm/editorjs-text-alignment-blocktune@latest`

## usage
and look [editor.js document](https://editorjs.io/configuration#block-tunes-connection)
```
tool:{
    list: {
      class: List,
      inlineToolbar: true,
    },
    header: {
      class: Header,
      tunes: ['anyTuneName'],
    },
    paragraph: {
      class: Paragraph,
      inlineToolbar: false,
      tunes: ['anyTuneName'],
    },
    anyTuneName: {
      class:AlignmentTuneTool,
      config:{
        default: "right",
        blocks: {
          header: 'center',
          list: 'right'
        }
      },
    }
}
```

## Config Params


| Field | Type     | Description        |
| ----- | -------- | ------------------ |
| default | `string` | "left"/"center"/"right", If not set, it will be "left".|
| blocks | `object` | Default alignment can be set for each block |
