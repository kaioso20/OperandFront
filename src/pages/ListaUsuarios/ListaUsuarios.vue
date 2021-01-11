<template>
  <div class="container">
    <div class="mt10">
      <Button
        texto="Cadastrar Novo Usuário"
        :isPrimary="true"
        :onClickFunction="redirectToCad"
      ></Button>
    </div>
    <div v-if="users.length > 0">
      <div v-for="user in users" :key="user.email">
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
import Button from "./../../components/Button";
import CardUser from "./../../components/CardUser";

export default {
  name: "ListaUsuarios",
  components: {
    Button,
    CardUser,
  },
  methods: {
    redirectToCad: function () {
      window.location.href = "/#/cadastro";
    },
  },
  data() {
    return {
      users: [
        {
          email: "Reiner@gmail.com",
          nome: "Reiner",
          celular: "(41) 99897.3325",
        },
        {
          email: "Mikassa@gmail.com",
          nome: "Mikassa Arkeman",
          celular: "(41) 99897.3325",
        },
        {
          email: "Eren.Yeager@gmail.com",
          nome: "Eren Yeager",
          celular: "(41) 99897.3325",
        },
      ],
    };
  },
};
</script>