<template>
  <v-app>
    <navbar />
    <v-parallax height="20" src="../assets/lightblue.png" alt="gray background">
    </v-parallax>
    <!-- auckland photo -->
    <v-parallax
      height="1200"
      src="../assets/1155096.jpg"
      alt="teal gradient background"
    >
      <!-- start of lazy scrolldown -->
      <v-responsive min-height="20vh"></v-responsive>

      <v-responsive class="overflow-y-auto" max-height="1140">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thick mb-4">Events Database</h1>
        </v-col>
        <v-lazy
          v-model="isActive"
          :options="{
            threshold: 1,
          }"
          min-height="200"
          transition="fade-transition"
        >
          <v-timeline :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item color="cyan lighten-3" fill-dot right>
              <v-card>
                <v-card-title class="cyan lighten-3">
                  <!-- <v-icon dark size="42" class="mr-4"> mdi-music-note </v-icon> -->
                  <h2 class="display-1 white--text font-weight-light">
                    Events Database
                  </h2>
                </v-card-title>
                <v-container>
                  <v-row>
                    <v-col cols="8">
                      <v-card-text>
                        <h3>What is Events Database?</h3>
                        <br />
                        Events Database is a web application made to organise
                        bike races. You can keep a list of active ongoing races,
                        archived races, and riders which can be viewed on the
                        dashboard.
                        <br />
                        <br />
                        With events database you can also store information on
                        riders/competitors such as their name, birthday, school
                        etc. This is all also displayed on its on page.
                        <br />
                        <br />
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-timeline-item>
            <!-- second timeline item -->
            <v-timeline-item color="blue accent-3" fill-dot left small>
              <v-card>
                <v-card-title class="blue accent-3 justify-end">
                  <h2 class="display-1 mr-4 white--text font-weight-light">
                    Race Dashboard
                  </h2>
                  <!-- <v-icon dark size="42"> mdi-music-box-multiple </v-icon> -->
                </v-card-title>
                <v-container>
                  <v-img
                    src="../assets/racedashboard.png"
                    aspect-ratio="1.7"
                    contain
                  />
                </v-container>
              </v-card>
            </v-timeline-item>
            <!-- third timeline item -->
            <v-timeline-item color="blue accent-3" fill-dot right small>
              <v-card>
                <v-card-title class="blue accent-3 justify-end">
                  <h2 class="display-1 mr-4 white--text font-weight-light">
                    Rider Dashboard
                  </h2>
                  <!-- <v-icon dark size="42"> mdi-music-box-multiple </v-icon> -->
                </v-card-title>
                <v-container>
                  <v-img
                    src="../assets/ridersdashboard.png"
                    aspect-ratio="1.7"
                    contain
                  />
                </v-container>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-lazy>
      </v-responsive>
    </v-parallax>
    <!-- break -->
    <v-parallax height="50" src="../assets/lightblue.png" alt="gray background">
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