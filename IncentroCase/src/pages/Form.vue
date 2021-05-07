<template>
  <base-spinner v-if="isLoading"></base-spinner>
  <Header />
  <incentro-form></incentro-form>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "../store/index";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import IncentroForm from "./components/IncentroForm/IncentroForm.vue";

export default defineComponent({
  components: {
    Header,
    Footer,
    IncentroForm,
  },
  computed: {
    isLoading() {
      const store = useStore();
      return store.state.isLoading.loadingStatus;
    },
  },
});
</script>
