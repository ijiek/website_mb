<template>
  <v-app>
    <navbar />
    <v-parallax height="10" src="../assets/grayphoto.png" alt="gray background">
    </v-parallax>

    <!-- mountain bike parallax photo 1 -->
    <v-parallax
      height="1000"
      src="../assets/mbphoto1.jpg"
      alt="mountain biking"
    >
      <v-responsive min-height="10vh"></v-responsive>
      <v-responsive class="overflow-y-auto" max-height="1145">
        <v-lazy
          v-model="isActive"
          :options="{
            threshold: 0.5,
          }"
          min-height="200"
          transition="fade-transition"
        >
          <!-- Start of scroll down -->
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h1 class="display-1 font-weight-thick mb-4">
                Cycling in Central Hawkes Bay
              </h1>
            </v-col>

            <!-- Content goes here -->

            <v-col class="text-center" cols="12">
              <v-card class="mx-auto" max-width="450">
                <v-card-text>
                  Central Hawkes Bay has the perfect climate for a range of
                  outdoor activities such as tramping, hunting, fishing and
                  cycling. There are a number of bike trails in the area and
                  there is also a family friendly bike club that people can
                  join.
                  <br />
                  At
                  <a href="https://www.cyclingchb.co.nz/join"> Cycling CHB </a>
                  they run Tuesday evening races around CHB from 6:00pm till
                  dark, and anyone is free and welcome to join.
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <!-- <v-responsive height="200vh" class="text-center pa-2"></v-responsive> -->
        </v-lazy>
      </v-responsive>
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
};
</script>

<style>
</style>