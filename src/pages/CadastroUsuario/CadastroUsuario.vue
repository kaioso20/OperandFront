<template>
  <div class="container">
    <div class="mt10">
      <Button
        texto="Voltar para Listagem"
        :isPrimary="true"
        :disabled="false"
        :OnClickFunction="RedirectToList"
      ></Button>
    </div>
    Aqui será a página de Cadastro/Edição
  </div>
</template>

<script>
import Button from "./../../components/Button";
export default {
  name: "CadastroUsuario",
  components: { Button },
  methods: {
    RedirectToList: function () {
      window.location.href = "/#/";
    },
  },
};
</script>