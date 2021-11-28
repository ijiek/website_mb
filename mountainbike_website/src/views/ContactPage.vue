<template>
  <v-app>
    <navbar />
    <v-col>
      <v-row>
        <v-col>
          <v-row align="center" justify="center">
            <v-col cols="8">
              <v-card>
                <v-toolbar>
                  <v-toolbar-title> Contact Page </v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <!-- <v-form ref="form" @submit.prevent="sendEmail"> -->
                  <v-row align="center" justify="center">
                    <v-col cols="8">
                      <v-text-field
                        v-model="name"
                        placeholder="Enter your emanameil"
                        label="Name"
                      />
                    </v-col>
                    <v-col cols="8">
                      <v-text-field
                        v-model="email"
                        placeholder="Enter your email"
                        label="Email"
                      />
                    </v-col>
                    <v-col cols="8">
                      <v-textarea
                        v-model="message"
                        placeholder="Enter your message"
                        label="Message"
                      />
                    </v-col>
                  </v-row>
                  <!-- </v-form> -->
                </v-card-text>
                <v-card-actions>
                  <v-btn @click="sendEmail"> Submit </v-btn>
                  <!-- <input type="submit" value="Send" /> -->
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
    <!-- <form>
      <label>Name</label>
      <input type="text" v-model="name" name="name" placeholder="Your Name" />
      <label>Email</label>
      <input
        type="email"
        v-model="email"
        name="email"
        placeholder="Your Email"
      />
      <label>Message</label>
      <textarea
        name="message"
        v-model="message"
        cols="30"
        rows="5"
        placeholder="Message"
      >
      </textarea>

      <input type="submit" value="Send" />
    </form> -->
    <appfooter />
  </v-app>
</template>

<script>
import emailjs from "emailjs-com";
import appfooter from "@/components/appfooter.vue";
import navbar from "@/components/navbar.vue";
export default {
  name: "ContactUs",
  components: {
    appfooter,
    navbar,
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_mqfrcro",
          "template_8ck9kum",
          e.target,
          "user_5lPKDBFnmuWEIvUBn2EIY",
          {
            name: this.name,
            email: this.email,
            message: this.message,
          }
        );
        console.log("worked");
      } catch (error) {
        console.log({ error });
      }
    },
  },
};

// export default {
//   name: "App",
//
//   data() {
//     return {
//       e6: 1,
//     };
//   },
// };
</script>


<style scoped >
</style>