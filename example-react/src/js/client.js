import ReactDOM from "react-dom";
import React, { Component } from "react";

import EditorJs from "react-editor-js";

import { EDITOR_JS_TOOLS } from "./constants";

class ReactEditor extends Component {
  render() {
    return (
      <EditorJs
        tools={EDITOR_JS_TOOLS}
        data={{
          time: 1556098174501,
          blocks: [
            {
              type: "paragraph",
              data: {
                text:
                  "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
              }
            },
          ],
          version: "2.12.4"
        }}
      />
    );
  }
}

ReactDOM.render(<ReactEditor />, document.getElementById("root"));
