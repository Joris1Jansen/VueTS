<template>
  <base-card>
    <section>
      <h3 class="font-bold text-2xl">Welcome to Incentro</h3>
      <p class="text-gray-600 pt-2 mb-4">Sign up to join!</p>
    </section>
    <input-fields></input-fields>
  </base-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import InputFields from "./components/InputFields.vue";
import BaseButton from "../../../components/BaseButton/BaseButton.vue";

export default defineComponent({
  components: {
    InputFields,
    BaseButton,
  },
  data() {
    return {};
  },
});
</script>
