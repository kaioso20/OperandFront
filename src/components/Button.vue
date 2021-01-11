<template>
  <BButton
    size="sm"
    :disabled="disabled"
    :type="type"
    :variant="variant"
    v-on="type !== 'submit' ? { click: () => onClickFunction() } : {}"
    class="buttonBoots"
  >
    {{ label }}
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
    label: String,
    variant: {
      type: String,
      default: 'primary'
    },
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onClickFunction: Function,
  },
};
</script>

<style >
.buttonBoots {
  margin-right: 10px;
}
</style>