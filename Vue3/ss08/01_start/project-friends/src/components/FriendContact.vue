<template>
  <li>
    <!-- <h2>{{ name }} {{ friendIsFavorite === "1" ? "(Favorite)" : "" }}</h2> -->
    <!-- <h2>{{ name }} {{ friendIsFavorite ? "(Favorite)" : "" }}</h2> -->
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite()">Toggle Favorite</button>
    <button @click="toggleDetails()">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong> {{ phoneNumber }}</li>
      <li><strong>Email: </strong> {{ emailAddress }}</li>
    </ul>

    <button @click="$emit('delete-contact', id)">Delete</button>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  emits: ["delete-contact"],
  props: {
    id: {
      type: String,
      required: true,
    },
    // name: String,  => It's okay
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    // isFavorite: {
    //   type: String,
    //   required: false,
    //   default: "0",
    //   validator: function (value) {
    //     return value === "1" || value === "0";
    //   },
    //   // default: function () {},  =>> is okay
    // },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function (value) {
      //   return value === "1" || value === "0";
      // },
      // default: function () {},  =>> is okay
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      // friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    // toggleFavorite() {
    //   if (this.friendIsFavorite === "1") {
    //     this.friendIsFavorite = "0";
    //   } else {
    //     this.friendIsFavorite = "1";
    //   }
    // },

    // toggleFavorite() {
    //   this.friendIsFavorite = !this.friendIsFavorite;
    // },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
