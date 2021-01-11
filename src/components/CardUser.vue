<template>
  <div>
    <BCard class="eachCard">
      <BCardHeader>
        <BCardTitle class="titleCard">{{ user.nome }}</BCardTitle>
        <BCardSubTitle v-if="user.celular || user.email" class="subtitleCard">
          <div class="montserrat300I">E-mail: {{ user.email }}</div>
          <div class="montserrat300I">Celular: {{ user.celular }}</div>
        </BCardSubTitle>
      </BCardHeader>
      <BCardFooter>
        <Button
          texto="Editar Usuário"
          :isPrimary="true"
          :disabled="false"
          :onClickFunction="() => editarUsuario(user.email)"
        ></Button>
        <Button
          texto="Remover Usuário"
          :isPrimary="false"
          :disabled="false"
          :onClickFunction="() => removerUsuario(user.email)"
        ></Button
      ></BCardFooter>
    </BCard>
  </div>
</template>

<script>
import { BCard, BCardHeader, BCardTitle, BCardSubTitle } from "bootstrap-vue";
import Button from "./../components/Button";

export default {
  name: "CardUser",
  components: {
    BCard,
    BCardHeader,
    BCardTitle,
    BCardSubTitle,
    Button,
  },
  props: {
    user: Object,
  },
  methods:{
    removerUsuario: function(email){
      console.log(email)
    },
    editarUsuario: function(email){
      console.log(email)
    },
  }
};
</script>

<style>

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