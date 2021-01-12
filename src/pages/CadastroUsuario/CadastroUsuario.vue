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
          <div v-if="data._id && editarSenha">
            <Input
              type="password"
              label="Senha Atual:"
              v-model="data.senhaAtual"
            />
          </div>
          <div v-if="!data._id || (data._id && editarSenha)">
            <Input type="password" label="Senha:" v-model="data.senha" />
            <Input
              type="password"
              label="Confirme senha:"
              v-model="data.cSenha"
            />
          </div>
          <div class="mt10">
            <Button label="Salvar" type="submit"></Button>
            <Button
              label="Limpar Campos"
              variant="secondary"
              :onClickFunction="limparCampos"
            ></Button>
            <div v-if="data._id" class="mt10">
              <Button
                :label="
                  editarSenha ? 'Cancelar edição de senha' : 'Editar senha'
                "
                variant="info"
                :onClickFunction="trocaSenha"
              ></Button>
            </div>
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
import { Mascaras } from "../../utils/masks";

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
      mask: Mascaras,
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

      if (!this._id || this.editarSenha) {
        if (!this.senha) {
          formErrors.push("Necessita de uma senha");
        }

        if (this.senha !== this.cSenha) {
          formErrors.push("Senhas não são idênticas");
        } else if (this.editarSenha && this.data.oldSenha === this.senha) {
          formErrors.push("Senha é a mesma da antiga");
        }

        if (this.editarSenha && this.data.oldSenha !== this.data.senhaAtual) {
          formErrors.push("Senha atual incorreta");
        }
      }

      if (!this.nome) {
        formErrors.push("Necessita de um nome");
      }

      if (this.nome && this.nome.length < 4) {
        formErrors.push("Nome necessita de pelo menos 4 caracteres");
      }

      if (!this.email) {
        formErrors.push("Necessita de um email");
      } else if (!this._id) {
        const possuiEmail = this.$store.getters["usuario/findUserByEmail"]({
          email: this.email,
        });

        if (possuiEmail) {
          formErrors.push("Este email já está cadastrado no sistema");
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
      this.data.email = "";
      this.data.celular = "";
      this.data.senha = "";
      this.data.cSenha = "";
    },
  },
};
</script>