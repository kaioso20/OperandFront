// @input="setName($event.target.value)"
// https://vuelidate.js.org/#sub-without-v-model

<template>
  <div>
    <div :class="classDiv">
      <BRow>
        <BCol sm="3">
          <div class="label">{{ label }}</div> </BCol
        ><BCol sm="9">
          <input
            :type="type || 'text'"
            :placeholder="placeholder || ''"
            :name="name || ''"
            :class="classInp || ''"
            :value="value"
            @input="$emit('input', $event.target.value)"
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
  props: {
    value: String,
    type: String,
    placeholder: String,
    name: String,
    classDiv: { type: String, default: "estilizacaoCampo01" },
    classInp: {type: String, default: 'width100p form-control'},
    label: String,
  },
};
</script>

<style>
</style>