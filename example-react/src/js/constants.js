// import Embed from "@editorjs/embed";
// import Table from "@editorjs/table";
// import List from "@editorjs/list";
// import Warning from "@editorjs/warning";
// import Code from "@editorjs/code";
// import LinkTool from "@editorjs/link";
// import Image from "@editorjs/image";
// import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
// import Marker from "@editorjs/marker";
// import CheckList from "@editorjs/checklist";
// import Delimiter from "@editorjs/delimiter";
// import InlineCode from "@editorjs/inline-code";
// import SimpleImage from "@editorjs/simple-image";
import AlignmentTuneTool from "../../../dist/bundle";
import AnchorBlockTune from "../../../example/dist/anchor";

export const EDITOR_JS_TOOLS = {
  anyTuneName: {
    class: AlignmentTuneTool,
    config: {
      default: "right",
      blocks: {
        header: "center",
        list: "right"
      }
    }
  },
  anchorTune: AnchorBlockTune,
  header: {
    class: Header,
    tunes: ["anyTuneName", "anchorTune"]
  },
  quote: {
    class:Quote,
    tunes: ["anchorTune"]
  }
};
