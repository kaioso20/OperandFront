<template>
  <div>
    <div :class="classDiv">
      <BRow>
        <BCol sm="3">
          <div class="label">{{ label }}</div> </BCol
        ><BCol sm="9">
          <input
            :type="type"
            :placeholder="placeholder"
            :name="name"
            :disabled="disabled"
            :class="classInp"
            :value="value"
            :autocomplete="autocomplete"
            @input="$emit('input', $event.target.value)"
            v-on="removeSpaces ? { keydown: onRemoveSpaces } : {}"
          />
        </BCol>
      </BRow>
    </div>
  </div>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

export default {
  name: "Input",
  components: {
    BRow,
    BCol,
  },
  methods: {
    onRemoveSpaces: function (params) {
      if (params.code === "Space") params.preventDefault();
    },
  },
  props: {
    value: String,
    type: String,
    placeholder: String,
    name: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    classDiv: {
      type: String,
      default: "estilizacaoCampo01",
    },
    classInp: {
      type: String,
      default: "width100p form-control",
    },
    label: String,
    removeSpaces: {
      type: Boolean,
      default: false,
    },
    autocomplete: {
      type: String,
      default: "off",
    },
  },
};
</script>

<style>
</style>