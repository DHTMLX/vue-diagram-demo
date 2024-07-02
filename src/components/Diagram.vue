<script>
import "@dhx/trial-diagram/codebase/diagram.min.css";
import { DiagramEditor } from "@dhx/trial-diagram";

export default {
  props: ["data"],
  data() {
    return {
      diagram: null,
    };
  },
  mounted() {
    this.diagram = new DiagramEditor(this.$refs.cont, {
      type: "default"
    });
    this.diagram?.parse(this.data);
  },
  unmounted() {
    this.diagram.destructor();
    this.$refs.cont.innerHTML = "";
  },
};
</script>

<template>
  <div ref="cont" style="width: 100%; height: 100%"></div>
</template>
