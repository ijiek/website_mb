<template>
  <v-app>
    <navbar />

    <appfooter />
  </v-app>
</template>

<script>
import appfooter from "@/components/appfooter.vue";
import navbar from "@/components/navbar.vue";
export default {
  name: "App",
  components: {
    appfooter,
    navbar,
  },
  data() {
    return {
      e6: 1,
    };
  },
};
</script>

<style>
</style>