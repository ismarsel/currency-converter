<template>
  <section class="currency-list__section">
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
<style lang="scss" scoped>
.currency-list {
  &__section {
    max-width: 900px;
    margin: 0 auto;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(auto, 1fr);
    gap: 1em;
    list-style: none;
  }
}
</style>
