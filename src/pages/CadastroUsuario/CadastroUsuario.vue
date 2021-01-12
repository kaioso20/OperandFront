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
          <Input type="text" label="Nome:" v-model.trim="data.nome" />
          <Input
            type="email"
            v-model="data.email"
            placeholder="eren.yeager@gmail.com"
            label="E-mail:"
            :disabled="!!this.data._id"
            :removeSpaces="true"
          />
          <Input
            type="text"
            placeholder="(00) 0 0000-0000"
            label="Celular:"
            v-mask="mask"
            v-model="data.celular"
          />
          <div v-if="data._id && editarSenha">
            <Input
              type="password"
              label="Senha Atual:"
              v-model="data.senhaAtual"
              :removeSpaces="true"
              autocomplete="on"
            />
          </div>
          <div v-if="!data._id || (data._id && editarSenha)">
            <Input
              type="password"
              label="Senha:"
              v-model="data.senha"
              :removeSpaces="true"
              autocomplete="on"
            />
            <Input
              type="password"
              label="Confirme senha:"
              v-model="data.cSenha"
              :removeSpaces="true"
              autocomplete="on"
            />
          </div>
          <div class="mt10">
            <div v-if="data._id" class="mb10">
              <Button
                :label="
                  editarSenha ? 'Cancelar edição de senha' : 'Editar senha'
                "
                variant="info"
                :onClickFunction="trocaSenha"
              ></Button>
            </div>
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

import Button from "./../../components/Button";
import Input from "./../../components/Input";
import AlertErro from "./../../components/AlertErro";
import { maskPhone } from "../../utils/masks";

export default {
  name: "CadastroUsuario",
  created() {
    const _id = this.$router.currentRoute.params._id;

    if (_id) {
      const { celular, email, nome, senha } = this.$store.getters[
        "usuario/pickOneUserById"
      ]({
        _id,
      });
      this.data = {
        _id,
        nome,
        celular,
        email,
        oldSenha: senha,
      };
    }
  },
  data() {
    return {
      errors: [],
      mask: maskPhone,
      data: {
        _id: "",
        nome: "",
        email: "",
        celular: "",
        senha: "",
        cSenha: "",
        senhaAtual: "",
        oldSenha: "",
      },
      editarSenha: false,
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
    validations: function () {
      this.errors = [];
      let formErrors = [];

      if (!this.data.nome) {
        formErrors.push("Necessita de um nome");
      }

      if (this.data.nome && this.data.nome.length < 4) {
        formErrors.push("Nome necessita de pelo menos 4 caracteres");
      }

      if (!this.data.email) {
        formErrors.push("Necessita de um email");
      } else if (!this.data._id) {
        const possuiEmail = this.$store.getters["usuario/findUserByEmail"]({
          email: this.data.email,
        });

        if (possuiEmail) {
          formErrors.push("Este e-mail já está cadastrado no sistema");
        }
      }

      if (!this.data.celular) {
        formErrors.push("Necessita de celular");
      } else if (this.data.celular && this.data.celular.length < 16) {
        formErrors.push("Celular inválido");
      }

      if (!this.data._id || this.editarSenha) {
        if (!this.data.senha) {
          formErrors.push("Necessita de uma senha");
        }

        if (this.editarSenha && this.data.oldSenha !== this.data.senhaAtual) {
          formErrors.push("Senha atual incorreta");
        } else if (this.data.senha !== this.data.cSenha) {
          formErrors.push("Senhas não são idênticas");
        } else if (this.editarSenha && this.data.oldSenha === this.data.senha) {
          formErrors.push("Senha é a mesma da antiga");
        }
      }

      this.errors = formErrors;

      if (formErrors.length) return false;

      return true;
    },
    trocaSenha: function () {
      this.editarSenha = !this.editarSenha;
    },
    saveUser: function () {
      if (!this.validations()) return;

      var { _id, nome, email, celular, senha } = this.data;

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
      if (!this.data._id) this.data.email = "";
      this.data.celular = "";
      this.data.senha = "";
      this.data.cSenha = "";
      this.data.senhaAtual = "";
    },
  },
};
</script>