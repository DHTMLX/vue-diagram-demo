<script>
import DiagramEditor from "./components/DiagramEditor.vue";
import { getData } from "./data";

export default {
  components: { DiagramEditor },
  data() {
    return {
      data: getData()
    };
  }
};
</script>

<template>
  <DiagramEditor :data="data"  />
</template>
