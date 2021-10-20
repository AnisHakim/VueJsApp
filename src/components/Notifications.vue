<template>
  <div id="notifications">
    <div v-for="notification in notifications" :key="notification">
      <b-alert variant="success" show> {{ notification.message }}</b-alert>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: ["notifications"],
};
</script>