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
          label="Editar Usuário"
          :disabled="false"
          :onClickFunction="() => editarUsuario(user._id)"
        ></Button>
        <Button
          label="Remover Usuário"
          variant="danger"
          :disabled="false"
          :onClickFunction="() => removerUsuario(user._id)"
        ></Button
      ></BCardFooter>
    </BCard>
  </div>
</template>

<script>
import { BCard, BCardHeader, BCardTitle, BCardSubTitle } from "bootstrap-vue";
import Button from "../components/Button";

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
  methods: {
    removerUsuario: function (_id) {
      const confirmation = confirm("Deseja mesmo remover o usuário?");
      if (confirmation) this.$store.commit("usuario/removeUser", { _id });
    },
    editarUsuario: function (_id) {
      this.$router.push({ name: "Cadastro", params: { _id } });
    },
  },
};
</script>

<style>
.montserrat300I {
  font-family: "Montserrat", sans-serif;
}
.subtitleCard {
  font-size: 10px;
  margin: 5px auto;
}
.h2Else {
  text-align: center;
}
.eachCard {
  margin: 20px auto;
  background: linear-gradient(
    90deg,
    rgba(238, 238, 238, 1) 0%,
    rgba(249, 249, 249, 1) 41%,
    rgba(255, 255, 255, 0) 64%
  );
}
.card-header,
.card-footer {
  background: none !important;
}
.titleCard {
  font-family: "Merriweather", serif;
}
</style>