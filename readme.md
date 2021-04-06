![](https://badgen.net/badge/Editor.js/v2.20/blue)

# Text Alignment tune tool for Editor.js
You can add text alignment to any block.

![gif](https://user-images.githubusercontent.com/2194021/113724462-562c5300-972d-11eb-9cb7-198c78ca5f94.gif)

### required
- editor.js v2.20

## Installation

### Install via NPM

Get the package

```shell
npm i --save editorjs-paragraph-with-alignment
```

Include module at your application

```javascript
const Paragraph = require('editorjs-paragraph-with-alignment');
```

### Download to your project's source dir

1. Upload folder `dist` from repository
2. Add `dist/bundle.js` file to your page.

### Load from CDN

`https://cdn.jsdelivr.net/npm/editorjs-paragraph-with-alignment@2.0.0`

## usage

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
      class:AlignmentBlockTune,
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