<template>
  <div>
    <div :class="classe" role="alert">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertErro",
  props: {
    error: String,
    classe: String,
  },
};
</script>

<style>
</style>