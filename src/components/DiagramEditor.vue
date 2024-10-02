<script>
import "@dhx/trial-diagram/codebase/diagram.min.css";
import { DiagramEditor } from "@dhx/trial-diagram";

export default {
  props: ["data"],

  mounted() {
    this.diagram_editor = new DiagramEditor(this.$refs.container, {
      type: "default"
    });
    this.diagram_editor.parse(this.data);
  },

  unmounted() {
    this.diagram_editor.destructor();
  }
};
</script>

<template>
  <div ref="container" class="widget"></div>
</template>
