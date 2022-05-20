<template>
  <section class="currency-list__section">
    <div class="container">
      <h1 class="currency-list__title">Обменный курс:</h1>
      <h2 class="currency-list__subtitle">1 {{ curentCurrency }}</h2>
      <ul class="currency-list__list">
        <li
          v-for="(key, value) in rates"
          :key="key"
          class="currency-list__list-item"
        >
          {{ key }} {{ value }} {{ GET_CURRENSY_NAME(value) }}
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "CurrencyList",
  computed: {
    ...mapState(["curentCurrency", "rates"]),
    ...mapGetters(["GET_CURRENSY_NAME"]),
  },
};
</script>
