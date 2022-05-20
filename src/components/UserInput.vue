<template>
  <input
    v-model.trim="value"
    @input="this.matchName = FIND_CURRENCY_NAME(value)"
    type="text"
    class="input"
    placeholder="10 RUB in USD"
    tabindex="1"
  />
  <div v-if="matchName && value" class="match-names">
    <span
      v-for="(name, index) in matchName"
      :key="index"
      class="match-names__item"
    >
      {{ name }}
    </span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "UserInput",
  data() {
    return {
      value: "",
      matchName: "",
    };
  },
  watch: {
    value(newValue) {
      this.value = newValue.toUpperCase();
      const pattern = /(\d+)\s+(\D{3})\s+[iI][nN]\s+(\D{3})/;
      if (pattern.test(newValue)) {
        this.parseUserInput();
      }
    },
  },
  computed: {
    ...mapGetters(["FIND_CURRENCY_NAME"]),
    tootoo() {
      return console.log(this.value);
    },
  },
  methods: {
    ...mapActions(["GET_USER_INPUTS"]),
    parseUserInput() {
      const pattern = /(\d+)\s+(\D{3})\s+[iI][nN]\s+(\D{3})/;
      const match = this.value.match(pattern);
      const [inputString, quantity, curentCurrency, targetCurrency] = match;
      if (quantity == 0) {
        this.value = this.value.slice(match[1].length);
        return inputString;
      }
      this.GET_USER_INPUTS({ quantity, curentCurrency, targetCurrency });
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  width: 250px;
  height: 50px;
  font-size: 20px;
  border-color: transparent;
  border-radius: 4px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
}
.match-names {
  &__item:not(:last-child) {
    padding-right: 10px;
  }
}
</style>
