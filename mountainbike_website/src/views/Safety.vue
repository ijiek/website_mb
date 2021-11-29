<template>
  <v-app v-breathing-colors="sample">
    <navbar />
    <v-col>
      <v-row>
        <!-- left side of page -->
        <v-col cols="6">
          <v-row>
            <v-col md="12">
              <v-stepper v-model="e6" vertical>
                <v-stepper-step
                  :complete="e6 > 1"
                  step="1"
                  color="red darken-1"
                >
                  Be aware
                  <small
                    >always be aware of your surroundings and check for any
                    traffic</small
                  >
                </v-stepper-step>

                <!-- first stepper -->

                <v-stepper-content step="1">
                  <v-img
                    src="../assets/wellingtontraffic.jpg"
                    aspect-ratio="1.7"
                  />

                  <v-btn depressed color="red darken-1" @click="e6 = 2">
                    Continue
                  </v-btn>
                </v-stepper-content>

                <!-- second stepper -->

                <v-stepper-step
                  :complete="e6 > 2"
                  step="2"
                  color="yellow darken-1"
                >
                  Be safe
                </v-stepper-step>

                <v-stepper-content step="2">
                  <v-img
                    src="../assets/bikandcarshareroad.jpg"
                    aspect-ratio="1.7"
                  />
                  <v-btn depressed color="yellow darken-1" @click="e6 = 3">
                    Continue
                  </v-btn>
                </v-stepper-content>

                <!-- third stepper -->

                <v-stepper-step
                  :complete="e6 > 3"
                  step="3"
                  color="green darken-1"
                >
                  Be prepared
                  <small
                    >make sure to wear the right helmet and that your bike
                    gears, brakes, etc is working properly</small
                  >
                </v-stepper-step>

                <v-stepper-content depressed step="3">
                  <v-img src="../assets/boyinmidair.jpg" aspect-ratio="1.7" />
                  <!-- <v-btn color="red darken-1" @click="e6 = 4"> Continue </v-btn> -->
                </v-stepper-content>
              </v-stepper>
            </v-col>
          </v-row>
          <v-spacer />
        </v-col>
        <!-- ride side of page -->
        <v-col cols="6">
          <v-card>
            <v-toolbar>
              <v-toolbar-title> Bike Safely </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              In 2019 there were 604 minor injury crashes, 191 serious injury
              crashes and 13 fatal crashes.

              <a
                href="https://www.transport.govt.nz/statistics-and-insights/safety-annual-statistics/sheet/cycling-crashes"
              >
                Source
              </a>
              <br />
              <br />
              Although cycling is a fun activity it does pose some dangers. In
              order to prevent casualties it is important for both drivers and
              cyclist to be aware of each other and share the road.

              <br />
              <br />
              Click on the links below for some resources from on how to stay
              safe on the road
              <br />
              <br />
              1)
              <a
                href="https://www.nzta.govt.nz/assets/Walking-Cycling-and-Public-Transport/docs/safety-tips-for-cyclists-and-motorists-on-urban-roads-mps.pdf"
              >
                Cycling on urban roads (NZTA)
              </a>
              <br />
              <br />
              2)
              <a
                href="https://www.nzta.govt.nz/assets/Uploads/safety-tips-for-cyclists-and-motorists-on-rural-roads-mps.pdf"
              >
                Cycling on rural roads (NZTA)
              </a>
              <br />
              <br />

              3)
              <a
                href="https://www.evocycles.co.nz/blog/how-to-choose-the-right-bike-helmet"
              >
                Choosing the right helmet
              </a>
              <br />
              <br />
              4)
              <a
                href="https://www.bikeexchange.co.nz/blog/choosing-the-right-bike-bicycle-buying-advice"
              >
                Choosing the right Bike
              </a>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
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
      sample: {
        colors: [
          "#F5F5F5",
          "#EEEEEE",
          "#E0E0E0",
          "#BDBDBD",
          "#757575",
          "#616161",
          "#424242",
          "#CFD8DC",
          "#212121",
          //   "#388E3C",
          //   "#00796B",
          //   "#0097A7",
          //   "#0288D1",
          //   "#0D47A1",
        ],
        interval: 1000,
        transition: {
          duration: 6000,
        },
      },
    };
  },
};
</script>

<style>
</style>
