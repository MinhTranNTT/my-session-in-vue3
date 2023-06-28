import { createApp } from "vue";
import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";

//createApp(App).mount("#app");

const app = createApp(App);

app.component(FriendContact, "friend-contact");

app.mount("#app");
