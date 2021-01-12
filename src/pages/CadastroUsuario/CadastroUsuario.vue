<template>
  <div>
    <div class="container">
      <div class="mt10">
        <Button
          label="Voltar para Listagem"
          :onClickFunction="redirectToList"
        ></Button>
      </div>
    </div>
    <div class="boxColor">
      <div class="boxCenter">
        <div v-if="errors.length > 0">
          <div v-for="error in errors" :key="error">
            <AlertErro :error="error" classe="alert alert-danger"></AlertErro>
          </div>
        </div>
        <form @submit.prevent="saveUser">
          <Input type="text" label="Nome:" v-model="data.nome" />
          <Input
            type="email"
            v-model="data.email"
            placeholder="Eren.Yeager@gmail.com"
            label="E-mail:"
          />
          <Input
            type="text"
            placeholder="(00) 0 0000-0000"
            label="Celular:"
            v-mask="mask"
            v-model="data.celular"
          />
          <Input type="password" label="Senha:" v-model="data.senha" />
          <Input
            type="password"
            label="Confirme senha:"
            v-model="data.cSenha"
          />
          <div class="mt10">
            <Button label="Salvar" type="submit"></Button>
            <Button
              label="Limpar Campos"
              variant="secondary"
              :onClickFunction="limparCampos"
            ></Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import "./CadastroUsuario.css";

// import { required, minLength } from "vuelidate/lib/validators";

import Button from "./../../components/Button";
import Input from "./../../components/Input";
import AlertErro from "./../../components/AlertErro";
import { Mascaras } from "../../utils/masks";

export default {
  name: "CadastroUsuario",
  created() {
    const _id = this.$router.currentRoute.params._id;

    if (_id) {
      const { celular, email, nome } = this.$store.getters[
        "usuario/pickOneUserById"
      ]({
        _id,
      });
      this.data = {
        _id,
        nome,
        celular,
        email,
      };
    }
  },
  data() {
    return {
      errors: [],
      mask: Mascaras,
      data: {
        _id: "",
        nome: "",
        email: "",
        celular: "",
        senha: "",
        cSenha: "",
      },
    };
  },
  components: {
    Button,
    Input,
    AlertErro,
  },
  methods: {
    redirectToList: function () {
      this.$router.go(-1);
    },
    saveUser: function () {
      this.errors = [];
      var { _id, nome, email, celular, senha, cSenha } = this.data;

      if (!_id) {
        if (!senha) {
          this.errors.push("Necessita de uma senha");
        }

        if (senha !== cSenha) {
          this.errors.push("Senhas não são idênticas");
        }
      }

      if (!nome) {
        this.errors.push("Necessita de um nome");
      }

      if (!email) {
        this.errors.push("Necessita de um email");
      }

      if (this.errors.length) return

      const method = _id ? "usuario/editUser" : "usuario/incrementUser";

      _id = !_id ? Math.random() : _id;

      this.$store.commit(method, {
        user: { _id, nome, email, celular, senha },
      });

      this.redirectToList();
      return;
    },
    limparCampos: function () {
      this.data.nome = "";
      this.data.email = "";
      this.data.celular = "";
      this.data.senha = "";
      this.data.cSenha = "";
    },
  },
};
</script>