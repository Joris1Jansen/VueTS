<template>
  <form @submit.prevent="submitForm">
    <div class="mb-6 pt-3 rounded bg-gray-200">
      <label
        class="block text-gray-700 text-sm font-bold mb-2 ml-3"
        for="voorletter"
        >Voorletter *</label
      >
      <input
        type="text"
        id="voorletter"
        v-model.trim="voorletter"
        class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
      />
    </div>

    <div class="mb-6 pt-3 rounded bg-gray-200">
      <label
        class="block text-gray-700 text-sm font-bold mb-2 ml-3"
        for="tussenvoegsel"
        >Tussenvoegsel</label
      >
      <input
        type="text"
        id="tussenvoegsel"
        v-model.trim="tussenvoegsel"
        class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
      />
    </div>

    <div class="mb-6 pt-3 rounded bg-gray-200">
      <label
        class="block text-gray-700 text-sm font-bold mb-2 ml-3"
        for="achternaam"
        >Achternaam *</label
      >
      <input
        type="text"
        id="achternaam"
        v-model.trim="achternaam"
        class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
      />
    </div>

    <div class="mb-6 pt-3 rounded bg-gray-200">
      <label
        class="block text-gray-700 text-sm font-bold mb-2 ml-3"
        for="postcode"
        >Postcode *</label
      >
      <input
        type="text"
        id="postcode"
        v-model.trim="postcode"
        class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
      />
    </div>

    <div class="mb-6 pt-3 rounded bg-gray-200">
      <label
        class="block text-gray-700 text-sm font-bold mb-2 ml-3"
        for="huisnummer"
        >Huisnummer *</label
      >
      <input
        type="text"
        id="huisnummer"
        v-model.trim="huisnummer"
        class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
      />
    </div>

    <div class="mb-6 pt-3 rounded bg-gray-200">
      <label
        class="block text-gray-700 text-sm font-bold mb-2 ml-3"
        for="straatnaam"
        >Straatnaam *</label
      >
      <input
        type="text"
        id="straatnaam"
        v-model.trim="straatnaam"
        class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
      />
    </div>

    <div class="mb-6 pt-3 rounded bg-gray-200">
      <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="stad"
        >Stad *</label
      >
      <input
        type="text"
        id="stad"
        v-model.trim="stad"
        class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
      />
    </div>

    <div class="mb-6 pt-3 rounded bg-gray-200">
      <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email"
        >E-mail *</label
      >
      <input
        type="email"
        id="email"
        v-model.trim="email"
        class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
      />
      <p v-if="v$.email.required && v$.email.$dirty" class="text-red-500">
        Email is required
      </p>
    </div>

    <div class="flex justify-end mb-4">
      <p class="text-md text-purple-600 hover:text-purple-700">
        PS * is verplicht
      </p>
    </div>
    <base-button title="Become an Incentronaut"></base-button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "../../../../store/index";
import useValidate from "@vuelidate/core";
import { emailValidations } from "../../../../validators/email";

import BaseButton from "../../../../components/BaseButton/BaseButton.vue";

export default defineComponent({
  components: {
    BaseButton,
  },
  data() {
    return {
      v$: useValidate(),
      voorletter: "",
      tussenvoegsel: "",
      achternaam: "",
      postcode: "",
      huisnummer: "",
      straatnaam: "",
      stad: "",
      email: "",
    };
  },
  validations() {
    return {
      email: emailValidations,
    };
  },
  methods: {
    async submitForm() {
      const store = useStore();
      store.dispatch("isLoading/setLoading");
      const formIsValid = await this._validateAll();
      if (formIsValid) {
        alert("Je bent aangemeld!");
      }
      setTimeout(() => {
        store.dispatch("isLoading/setLoading");
      }, 2000);
    },
    _validateAll() {
      this.v$.$touch();
      return !this.v$.$invalid;
    },
  },
});
</script>
