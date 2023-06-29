import { createApp } from "vue";
import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend.vue";

//createApp(App).mount("#app");

const app = createApp(App);

app.component(FriendContact, "friend-contact");
app.component(NewFriend, "new-friend");

app.component("friend-contact", FriendContact);
app.component("new-friend", NewFriend);

app.mount("#app");
