<template>
  <div class="container">
    <div class="mt10">
      <Button
        texto="Cadastrar Novo Usuário"
        :isPrimary="true"
        :disabled="false"
        :OnClickFunction="RedirectToCad"
      ></Button>
    </div>
    <div v-if="Users.length > 0">
      <div v-for="User in Users" :key="User.email">
        <CardUser :user="User"></CardUser>
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
  methods:{
    RedirectToCad: function(){
      window.location.href = '/#/cadastro'
    }
  },
  data() {
    return {
      Users: [
        {
          Email: "marcus@gmail.com",
          Nome: "Reiner",
          Celular: "(41) 99897.3325",
        },
        {
          Email: "marcus@gmail.com",
          Nome: "Mikassa Arkeman",
          Celular: "(41) 99897.3325",
        },
        {
          Email: "marcus@gmail.com",
          Nome: "Eren Yeager",
          Celular: "(41) 99897.3325",
        },
      ],
    };
  },
};
</script>