<template>
  <div class="container">
    <div class="mt10">
      <Button
        label="Cadastrar Novo Usuário"
        :onClickFunction="redirectToCad"
      ></Button>
    </div>
    <div v-if="users.length > 0">
      <div v-for="user in users" :key="user._id">
        <CardUser :user="user"></CardUser>
      </div>
    </div>
    <div v-else>
      <hr />
      <h2 class="h2Else">Não existe nenhum Usuário registrado</h2>
    </div>
  </div>
</template>

<script>
import "./ListaUsuarios.css";
import Button from "../../components/Button";
import CardUser from "../../components/CardUser";

export default {
  name: "ListaUsuarios",
  components: {
    Button,
    CardUser,
  },
  methods: {
    redirectToCad: function () {
      this.$router.push(`/cadastro`)
    },
  },
  computed: {
    users: function () {
      return this.$store.getters['usuario/todos']
    } 
  },
};
</script>