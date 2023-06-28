const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      tmpCount: 0,
      // fullname: "",
      lastname: "",
    };
  },
  watch: {
    // name(newValue, oldValue) {
    //   if (newValue === "") {
    //     this.fullname = "";
    //   }
    //   this.fullname = newValue + " " + this.lastname;
    // },
    // lastname(newValue, oldValue) {
    //   if (newValue === "") {
    //     this.fullname = "";
    //   }
    //   this.fullname = this.name + " " + newValue;
    // },
  },
  computed: {
    fullname() {
      console.log("Running");
      if (this.name === "" || this.lastname === "") {
        return "";
      }
      return this.name + " " + this.lastname;
    },
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
    outputFullname() {
      console.log("Running");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "END.";
    },
  },
});

app.mount("#events");
