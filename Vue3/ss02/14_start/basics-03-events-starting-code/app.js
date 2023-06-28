const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmName: "",
    };
  },
  methods: {
    // add() {
    //   this.counter++;
    // },
    // reduce() {
    //   this.counter--;
    // },
    add(number) {
      this.counter += number;
    },
    reduce(number) {
      this.counter -= number;
    },
    setName(event, secondName) {
      this.name = event.target.value + secondName;
    },
    submitForm(event) {
      event.preventDefault();
      alert("Submit Form");
    },
    show() {
      alert("OK");
    },
    confirmInput() {
      this.confirmName = this.name;
    },
  },
});

app.mount("#events");
