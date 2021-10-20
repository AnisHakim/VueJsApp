<template>
  <div id="create-person">
    <h1>Create Person</h1>

    <p>
      <router-link :to="{ name: 'all_persons' }">Return to persons</router-link>
    </p>
    <notification v-bind:notifications="notifications"></notification>

    <form v-on:submit.prevent="addPerson">
      <div class="form-group">
        <label name="first_name">First Name</label>
        <input
          type="text"
          class="form-control"
          required
          v-model="person.firstName"
          id="person_id"
        />
      </div>

      <div class="form-group">
        <label name="last_name">Last Name</label>
        <input
          type="text"
          class="form-control"
          v-model="person.lastName"
          id="last_name"
          required
        />
      </div>

      <div class="form-group">
        <label name="person_email">Email</label>
        <input
          type="email"
          class="form-control"
          v-model="person.email"
          id="person_email"
          required
        />
      </div>

      <div class="form-group">
        <label name="person_address">Address</label>
        <input
          type="text"
          class="form-control"
          v-model="person.address"
          id="person_address"
          required
        />
      </div>

      <div class="form-group">
        <button class="btn btn-primary">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Notification from "./Notifications";
export default {
  data() {
    return {
      person: {
        avatar: "https://cdn.fakercloud.com/avatars/kolmarlopez_128.jpg",
      },
      notifications: [],
    };
  },
  methods: {
    addPerson: async function () {
      try {
        await axios.post("http://localhost:3000/person", this.person).then(
          () => {
            this.notifications.push({
              type: "success",
              message: "person created successfully",
            });
          },
          () => {
            this.notifications.push({
              type: "error",
              message: "person not created",
            });
          }
        );
      } catch (error) {
        console.error(error);
      }
    },
  },
  components: {
    notification: Notification,
  },
};
</script>