<script>
import Diagram from "./components/Diagram.vue";
import { getData } from "./data";

export default {
  components: { Diagram },
  data() {
    return {
      data: getData(),
    };
  },
};
</script>

<template>
  <Diagram :data="data"  />
</template>
