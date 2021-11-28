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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus a massa quis leo auctor faucibus ac cursus nunc.
                  Curabitur id lacus commodo, rutrum velit ac, luctus neque.
                  Etiam cursus tincidunt ante, quis commodo neque ultrices ut.
                  Morbi malesuada aliquet nunc a tempus. Donec dictum arcu non
                  libero rhoncus tincidunt nec non ante. Duis imperdiet arcu et
                  metus iaculis, ac ullamcorper ex gravida. Nulla consequat
                  lorem non velit viverra viverra. Aenean malesuada viverra
                  risus vitae venenatis. Aliquam in rutrum leo. Praesent eget
                  feugiat eros.
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