<template>
  <v-app>
    <form ref="form" @submit.prevent="sendEmail">
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message"></textarea>
      <input type="submit" value="Send" />
    </form>

    <v-row align="center" justify="center">
      <v-col cols="8">
        <v-text-field
          type="text"
          v-model="name"
          placeholder="Enter your name"
          label="Name"
        />
      </v-col>
      <v-col cols="8">
        <v-text-field
          type="email"
          v-model="email"
          placeholder="Enter your email"
          label="Email"
        />
      </v-col>
      <v-col cols="8">
        <v-textarea
          type="message"
          v-model="message"
          placeholder="Enter your message"
          label="Message"
        />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_mqfrcro",
          "template_8ck9kum",
          this.$refs.form,
          "user_5lPKDBFnmuWEIvUBn2EIY"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>