<template>
  <div>
    <p>
      <router-link :to="{ name: 'create_person' }" class="btn btn-primary"
        >Create Person</router-link
      >
    </p>
    <div class="form-group">
      <input
        type="text"
        name="search"
        v-model="personSearch"
        placeholder="Search persons"
        class="form-control"
        v-on:keyup="searchPerson"
      />
    </div>
    <div class="grid grid-cols-4 gap-4">
      <div
        v-for="user in persons"
        :key="user.id"
        class="bg-white rounded-lg p-6 shadow"
      >
        <img class="h-16 w-16 rounded-full mx-auto" :src="user.avatar" />
        <div class="text-center">
          <h2 class="text-lg">
            {{ `${user.firstName} ${user.lastName}` }}
          </h2>
          <div class="text-purple-600 text-sm">{{ user.email }}</div>
          <div class="text-gray-600 text-sm">{{ user.address }}</div>

          <router-link :to="{ name: 'edit_person', params: { id: user.id } }"
            ><b-button class="myBtn" variant="warning"
              >Update</b-button
            ></router-link
          >
          <b-button variant="danger" v-on:click="deletePerson(user.id)"
            >Delete</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      persons: [],
      originalPersons: [],
      personSearch: "",
    };
  },
  created: function () {
    this.getPersons();
  },

  methods: {
    getPersons: async function () {
      try {
        const res = await axios.get("http://localhost:3000/person");
        this.persons = res.data;
        this.originalPersons = res.data;
      } catch (error) {
        console.error(error);
      }
    },
    searchPerson: function () {
      if (this.personSearch == "") {
        this.persons = this.originalPersons;
        return;
      }
      var searchedPersons = [];
      for (var i = 0; i < this.originalPersons.length; i++) {
        var personFirstName =
          this.originalPersons[i]["firstName"].toLowerCase();
        var personLastName = this.originalPersons[i]["lastName"].toLowerCase();
        var personEmail = this.originalPersons[i]["email"].toLowerCase();
        if (
          personFirstName.indexOf(this.personSearch.toLowerCase()) >= 0 ||
          personLastName.indexOf(this.personSearch.toLowerCase()) >= 0 ||
          personEmail.indexOf(this.personSearch.toLowerCase()) >= 0
        ) {
          searchedPersons.push(this.originalPersons[i]);
        }
      }
      this.persons = searchedPersons;
    },
    deletePerson: async function (id) {
      try {
        await axios.delete(`http://localhost:3000/person/${id}`).then(() => {
          this.getPersons();
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.form-group {
  margin: 10px 0;
}
.myBtn {
  margin: 10px;
}
</style>