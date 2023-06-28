const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish course",
      courseGoalA: "Master course",
      courseGoalB: "Learn course",
      vueLink: "https://vuejs.org/",
      courseGoalHTML: "<h2 style='color:red'>Master course<h2>",
    };
  },
  methods: {
    outputGoal() {
      const randomNuber = Math.random();
      if (randomNuber < 0.5) {
        // return this.courseGoalA;
        return this.courseGoalHTML;
      } else {
        // return this.courseGoalB;
        return this.courseGoalHTML;
      }
    },
  },
});

app.mount("#user-goal");
