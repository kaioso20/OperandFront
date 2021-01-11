<template>
  <BTable
    variant="dark"
    :items="item"
  >
  </BTable>
</template>

<script>
import { BTable } from "bootstrap-vue";
export default {
  name: "Button",
  components: {
    BTable,
  },
  props: {
      item: Array
  },
};
</script>