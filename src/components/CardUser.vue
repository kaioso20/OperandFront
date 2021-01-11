<template>
  <div>
    <BCard class="eachCard">
      <BCardHeader>
        <BCardTitle class="titleCard">{{ User.Nome }}</BCardTitle>
        <BCardSubTitle v-if="User.Celular || User.Email" class="subtitleCard">
          <div class="montserrat300I">E-mail: {{ User.Email }}</div>
          <div class="montserrat300I">Celular: {{ User.Celular }}</div>
        </BCardSubTitle>
      </BCardHeader>
      <BCardFooter>
        <Button
          texto="Editar Usuário"
          :isPrimary="true"
          :disabled="false"
        ></Button>
        <Button
          texto="Remover Usuário"
          :isPrimary="false"
          :disabled="false"
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
    User: Object,
  },
};
</script>