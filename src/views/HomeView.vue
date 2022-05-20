<template>
  <main class="main">
    <div class="container">
      <user-input />
      <div v-show="rate" class="converted-amount">
        {{ GET_AMOUNT }}{{ targetCurrency }}
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import UserInput from "@/components/UserInput.vue";
export default {
  name: "HomeView",
  components: {
    UserInput,
  },
  computed: {
    ...mapState(["curentCurrency", "targetCurrency", "rate"]),
    ...mapGetters(["GET_AMOUNT"]),
  },
  methods: {
    ...mapActions(["FETCH_CURRENCY_LIST", "FETCH_RATE"]),
  },
  mounted() {
    this.FETCH_CURRENCY_LIST();
  },
};
</script>
