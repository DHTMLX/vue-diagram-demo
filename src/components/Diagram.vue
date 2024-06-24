<script>
import "@dhx/trial-diagram/codebase/diagram.min.css";
import { DiagramEditor } from "@dhx/trial-diagram";

export default {
  props: ["data"],

  mounted() {
    new DiagramEditor(this.$refs.cont, {
      type: "default"
    });
  },
  unmounted() {
    this.$refs.cont.innerHTML = "";

  },
};
</script>

<template>
  <div ref="cont" style="width: 100%; height: 100%"></div>
</template>
