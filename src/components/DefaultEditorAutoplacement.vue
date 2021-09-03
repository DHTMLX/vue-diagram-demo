<template>
  <div class="dhx_sample-container">
    <div class="dhx_sample-widget" ref="editor"></div>
  </div>
</template>

<script>
import fromCDN from "from-cdn";
import { autoPlaceData } from "../../public/static/data";
export default {
  name: "DefaultEditorAutoplacement",
  data: () => ({
    editor: null,
  }),
  mounted() {
    fromCDN([
      "https://cdn.dhtmlx.com/diagram/pro/edge/diagramWithEditor.js",
      "https://cdn.dhtmlx.com/diagram/pro/edge/diagramWithEditor.css",
    ]).then(() => {
      // eslint-disable-next-line no-undef
      this.editor = new dhx.DiagramEditor(this.$refs.editor, {
        type: "default",
        autoplacement: {
          mode: "direct",
        },
      });
      this.editor.parse(autoPlaceData);
    });
  },
};
</script>
