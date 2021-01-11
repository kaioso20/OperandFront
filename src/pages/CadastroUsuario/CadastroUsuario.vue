<template>
  <div class="container">
    <div class="mt10">
      <Button
        label="Voltar para Listagem"
        :onClickFunction="redirectToList"
      ></Button>
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
import { BRow } from "bootstrap-vue";

import store from "./../../store";

export default {
  name: "CadastroUsuario",
  data() {
    return {
      data: {
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
  },
  methods: {
    redirectToList: function () {
      window.location.href = "/#/";
      return;
    },
    saveUser: function () {
      const { nome, email, celular, senha, cSenha } = this.data;
      if (senha !== cSenha) return;
      store.commit("incrementUser", { user: { _id: Math.random(), nome, email, celular, senha } });
      this.redirectToList();
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