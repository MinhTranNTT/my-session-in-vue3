<template>
  <!-- <section>
    <header><h1>App template</h1></header>
    <ul>
      <friend-contact
        name="Minh Tran"
        phone-number="012312312"
        email-address="tvhminh@gmail.com"
        is-favorite="1"
      />
      <friend-contact
        name="Brack Obana"
        phone-number="01239992"
        email-address="obana@gmail.com"
        is-favorite="0"
      />
    </ul>
  </section> -->

  <!-- <section>
    <header><h1>App template</h1></header>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus(friend.id)"
      />
    </ul>
  </section> -->

  <section>
    <header><h1>App template</h1></header>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
      />
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
          isFavorite: true,
        },
        {
          id: "obana",
          name: "Brack Obana",
          phone: "01239992",
          email: "obana@gmail.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      const identyFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      identyFriend.isFavorite = !identyFriend.isFavorite;
      console.log(identyFriend);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
</style>
