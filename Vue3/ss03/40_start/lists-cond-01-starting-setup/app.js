const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
    getKeyGoal(value, idx) {
      return value + "_" + idx;
    },
  },
});

app.mount("#user-goals");
