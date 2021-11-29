<template>
  <v-app>
    <navbar />
    <v-parallax height="10" src="../assets/lightblue.png" alt="gray background">
    </v-parallax>
    <!-- auckland photo -->
    <v-parallax
      height="1000"
      src="../assets/1155096.jpg"
      alt="teal gradient background"
    >
    </v-parallax>
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