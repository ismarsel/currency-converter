<template>
  <user-input /> <br />
  {{ amount }} <br />
  {{ curentCurrency }} <br />
  {{ targetCurrency }} <br />
  {{ GET_AMOUNT }}
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
    ...mapState(["amount", "curentCurrency", "targetCurrency", "rate"]),
    ...mapGetters(["GET_AMOUNT"]),
  },
  methods: {
    ...mapActions(["FETCH_CURRENCY_LIST", "FETCH_RATE"]),
  },
  mounted() {
    this.FETCH_CURRENCY_LIST();
    this.FETCH_RATE();
  },
};
</script>
