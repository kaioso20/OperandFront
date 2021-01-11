<template>
  <div class="container">
    <div class="mt10">
      <Button
        label="Voltar para Listagem"
        :onClickFunction="redirectToList"
      ></Button>
      <div v-if="errors.length > 0">
        <div v-for="error in errors" :key="error">
          <AlertErro :error="error" classe="alert alert-danger"></AlertErro>
        </div>
      </div>
      <form @submit.prevent="saveUser">
        <div>
          <BRow>
            <Input
              type="text"
              classInp="form-control"
              classDiv="col-sm-12"
              label="Nome:"
              v-model="data.nome"
            />
          </BRow>
        </div>
        <div>
          <BRow>
            <Input
              type="email"
              v-model="data.email"
              placeholder="Eren.Yeager@gmail.com"
              classInp="form-control"
              classDiv="col-sm-12"
              label="E-mail:"
            />
          </BRow>
        </div>
        <div>
          <BRow>
            <Input
              type="text"
              placeholder="(00) 00000-0000"
              classInp="form-control celularMask"
              classDiv="col-sm-12"
              label="Celular:"
              v-model="data.celular"
            />
          </BRow>
        </div>
        <div>
          <BRow>
            <Input
              type="password"
              classInp="form-control"
              classDiv="col-sm-12"
              label="Senha:"
              v-model="data.senha"
            />
          </BRow>
        </div>
        <div>
          <BRow>
            <Input
              type="password"
              classInp="form-control"
              classDiv="col-sm-12"
              label="Confirme senha:"
              v-model="data.cSenha"
            />
          </BRow>
        </div>
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
</template>

<script>
import Button from "./../../components/Button";
import Input from "./../../components/Input";
import AlertErro from "./../../components/AlertErro";
import { BRow } from "bootstrap-vue";

import store from "./../../store";

export default {
  name: "CadastroUsuario",
  created() {
    const _id = this.$router.currentRoute.params._id;

    if (_id) {
      const { celular, email, nome } = this.$store.getters.pickOneUserById({
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
    BRow,
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
      const { _id, nome, email, celular, senha, cSenha } = this.data;

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

      if (this.errors.length) {
        return;
      }

      if (_id) {
        store.commit("editUser", {
          user: { _id, nome, email, celular, senha },
        });
        this.redirectToList();
        return;
      }

      store.commit("incrementUser", {
        user: { _id: Math.random(), nome, email, celular, senha },
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