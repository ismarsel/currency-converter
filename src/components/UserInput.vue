<template>
  <div class="input-wrapper">
    <input
      v-model.trim="value"
      @input="this.matchName = FIND_CURRENCY_NAME(value)"
      type="text"
      class="input"
      :class="{ shake: validate }"
      placeholder="10 RUB in USD"
      tabindex="1"
    />
    <p v-if="validate" class="validate-msg">исправьте данные</p>
    <div v-if="matchName && value" class="match-names">
      <span
        v-for="(name, index) in matchName"
        :key="index"
        class="match-names__item"
      >
        {{ name }}
      </span>
    </div>
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
      validate: false,
    };
  },
  watch: {
    value(newValue) {
      this.value = newValue.toUpperCase();
      const pattern = /(\d+)\s+(\D{3})\s+[iI][nN]\s+(\D{3})/;
      if (pattern.test(newValue)) {
        this.validate = false;
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
        this.validate = true;
        this.value = this.value.slice(match[1].length);
        return inputString;
      }
      this.GET_USER_INPUTS({ quantity, curentCurrency, targetCurrency });
    },
    hideValidate() {
      this.validate = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.input-wrapper {
  position: relative;
}
.input {
  width: 250px;
  height: 50px;
  padding-left: 5px;
  font-size: 20px;
  border-color: transparent;
  border-radius: 4px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  &:focus {
    border: #0c804c 2px solid;
  }
}
.match-names {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  &__item:not(:last-child) {
    padding-right: 10px;
  }
}
.validate-msg {
  margin-top: -30px;
  font-size: 0.8em;
  letter-spacing: 1.8px;
  color: #80140c;
}
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
  outline: #80140c 2px solid;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
