<template>
  <input
    v-model="value"
    type="text"
    class="input"
    placeholder="10 RUB in USD"
  />
</template>

<script>
export default {
  name: "UserInput",
  data() {
    return {
      value: "",
      amount: null,
      curentCurrency: "",
      targetCurrency: "",
      valid: "",
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
  methods: {
    parseUserInput() {
      const pattern = /(\d+)\s+(\D{3})\s+[iI][nN]\s+(\D{3})/;
      const match = this.value.match(pattern);
      console.log(match);
      this.amount = Number(match[1]);
      this.curentCurrency = match[2].toUpperCase();
      this.targetCurrency = match[3].toUpperCase();
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
</style>
