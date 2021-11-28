<template>
  <footer>
    <v-footer class="font-weight-medium">
      <v-col class="text-center" cols="12">
        Copyright © {{ new Date().getFullYear() }} —
        <strong>Naya Mugot</strong> —
        <v-btn @click="openEmail" icon>
          <v-icon> mdi-email-newsletter </v-icon>
        </v-btn>
      </v-col>
    </v-footer>
  </footer>
</template>

<script>
export default {
  methods: {
    openEmail() {
      window.open("https://forms.gle/7412ncHUmyRz5Fhc9");
    },
  },
};
</script>

<style>
</style>