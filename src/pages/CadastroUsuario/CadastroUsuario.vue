<template>
  <div class="container">
    <div class="mt10">
      <Button
        texto="Voltar para Listagem"
        :isPrimary="true"
        :disabled="false"
        :onClickFunction="redirectToList"
      ></Button>
      <form @submit.prevent="saveUser">
        <div>
          <BRow>
            <Input
              type="text"
              classInp="form-control"
              classDiv="col-sm-12"
              nomeDoCampo="Nome:"
              v-model="data.Nome"
            />
          </BRow>
        </div>
        <div>
          <BRow>
            <Input
              type="email"
              v-model="data.Email"
              placeholder="Eren.Yeager@gmail.com"
              classInp="form-control"
              classDiv="col-sm-12"
              nomeDoCampo="E-Mail:"
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
              nomeDoCampo="Celular:"
              v-model="data.Celular"
            />
          </BRow>
        </div>
        <div>
          <BRow>
            <Input
              type="password"
              classInp="form-control"
              classDiv="col-sm-12"
              nomeDoCampo="Senha:"
              v-model="data.Senha"
            />
          </BRow>
        </div>
        <div>
          <BRow>
            <Input
              type="password"
              classInp="form-control"
              classDiv="col-sm-12"
              nomeDoCampo="Confirme Senha:"
              v-model="data.CSenha"
            />
          </BRow>
        </div>
        <div class="mt10">
          <Button
            texto="Salvar"
            type="submit"
            :isPrimary="true"
            :onClickFunction="() => {}"
          ></Button>
          <Button
            texto="Limpar Campos"
            :isPrimary="false"
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

export default {
  name: "CadastroUsuario",
  data() {
    return {
      data: {
        Nome: "",
        Email: "",
        Celular: "",
        Senha: "",
        CSenha: "",
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
    },
    saveUser: function () {
      const { Nome, Email, Celular, Senha, CSenha } = this.data;
      console.table([Nome, Email, Celular, Senha, CSenha]);
    },
    limparCampos: function () {
      console.log(1);
      this.data.Nome = "";
      this.data.Email = "";
      this.data.Celular = "";
      this.data.Senha = "";
      this.data.CSenha = "";
    },
  },
};
</script>