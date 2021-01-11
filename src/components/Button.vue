<template>
  <BButton
    size="sm"
    :disabled="disabled || false"
    :type="type ? type : 'button'"
    :variant="isPrimary ? 'primary' : 'danger'"
    @click="onClickFunction"
    class="buttonBoots"
  >
    {{ texto }}
  </BButton>
</template>

<script>
import { BButton } from "bootstrap-vue";

export default {
  name: "Button",
  components: {
    BButton,
  },
  props: {
    texto: String,
    isPrimary: Boolean,
    type: String,
    disabled: Boolean,
    onClickFunction: Function,
  },
};
</script>

<style >
.buttonBoots {
  margin-right: 10px;
}
</style>