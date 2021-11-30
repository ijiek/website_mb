<template>
  <nav>
    <div class="navbar_main">
      <v-app-bar class="navbar_main">
        <v-container fluid>
          <v-row justify="center" align="center" class="navbar_main">
            <!-- <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }"> -->
            <v-btn to="/" v-bind="attrs" v-on="on" plain>
              <!-- <h1>Cycling Website</h1> -->
              <h1>Mountain Biking Website</h1>
            </v-btn>
            <!-- </template>
              <span>Go back to home </span>
            </v-tooltip> -->
            <!-- <v-spacer /> -->
            <v-btn to="/safety" text>
              Safety
              <v-icon>mdi-map-marker-multiple</v-icon>
            </v-btn>

            <v-btn to="/events" text>
              Events
              <v-icon>mdi-bike-fast</v-icon>
            </v-btn>

            <v-btn to="/contact" text>
              Contact Page
              <v-icon>mdi-note-edit-outline</v-icon>
            </v-btn>
          </v-row>
        </v-container>
      </v-app-bar>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>