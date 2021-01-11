<template>
  <div>
    <BInputGroup>
      <div :class="classDiv">
        {{ label }} 
        <input
          :type="type || 'text'"
          :placeholder="placeholder || ''"
          :name="name || ''"
          :class="classInp || ''"
          :value="value"
          @input="$emit('input', $event.target.value)"
        />
      </div>
    </BInputGroup>
  </div>
</template>

<script>
import { BInputGroup } from "bootstrap-vue";

export default {
  name: "Input",
  components: {
    BInputGroup,
  },
  props: {
    value: String,
    type: String,
    placeholder: String,
    name: String,
    classInp: String,
    classDiv: String,
    label: String
  },
};
</script>

<style>
</style>