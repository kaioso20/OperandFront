<template>
  <BButton
    size="sm"
    :disabled="disabled"
    :variant="(isPrimary ? 'primary' : 'danger')"
    @click="OnClickFunction"
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
    disabled: Boolean,
    OnClickFunction: Function,
  },
};
</script>

<style >
.buttonBoots{
    margin-right: 10px;
}
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');

.montserrat300I{
    font-family: 'Montserrat', sans-serif;

}
.subtitleCard{
    font-size: 10px;
    margin: 5px auto;
}
.h2Else{
    text-align: center;
}
.eachCard{
    margin: 20px auto;
    background: linear-gradient(90deg, rgba(238,238,238,1) 0%, rgba(249,249,249,1) 41%, rgba(255,255,255,0) 64%);
}
.card-header, 
.card-footer{
    background: none !important;
}
.titleCard{
    font-family: 'Merriweather', serif;
}
</style>