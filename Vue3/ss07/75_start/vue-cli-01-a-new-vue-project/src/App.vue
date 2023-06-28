<template>
  <section>
    <header><h1>App template</h1></header>
    <ul>
      <friend-contact />
      <friend-contact />
    </ul>
  </section>
</template>

<script>
import FriendContact from "./components/FriendContact.vue";
export default {
  components: { FriendContact },
  data() {
    return {
      friends: [
        {
          id: "minh",
          name: "Minh Tran",
          phone: "012312312",
          email: "tvhminh@gmail.com",
        },
        {
          id: "obana",
          name: "Brack Obana",
          phone: "01239992",
          email: "obana@gmail.com",
        },
      ],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
</style>
