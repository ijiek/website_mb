<template>
  <v-app v-breathing-colors="sample">
    <navbar />
    <v-col>
      <v-row>
        <v-col>
          <!-- <v-spacer /> -->
          <v-row align="center" justify="center">
            <v-col cols="8">
              <v-card>
                <v-toolbar>
                  <v-toolbar-title> Contact Page </v-toolbar-title>
                </v-toolbar>

                <v-card-text>
                  <form ref="form" @submit.prevent="sendEmail">
                    <v-row align="center" justify="center">
                      <v-col cols="8">
                        <v-text-field
                          name="text"
                          v-model="name"
                          placeholder="Enter your name"
                          label="Name"
                          outlined
                          autofocus
                        />
                      </v-col>
                      <v-col cols="8">
                        <v-text-field
                          type="email"
                          name="email"
                          v-model="email"
                          placeholder="Enter your email"
                          label="Email"
                          outlined
                        />
                      </v-col>
                      <v-col cols="8">
                        <v-textarea
                          name="message"
                          v-model="message"
                          placeholder="Enter your message"
                          label="Message"
                          outlined
                        />
                      </v-col>
                    </v-row>
                    <v-card-actions>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn v-bind="attrs" v-on="on" @click="clearFields">
                            Clear
                          </v-btn>
                        </template>
                        <span>Click to Clear fields</span>
                      </v-tooltip>
                      <v-spacer />
                      <v-btn color="green" type="submit" value="send">
                        submit
                      </v-btn>
                    </v-card-actions>
                  </form>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
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
      //vue breathing colours
      sample: {
        colors: [
          "#303F9F",
          "#0D47A1",
          "#0288D1",
          "#0097A7",
          "#00796B",
          "#388E3C",
          "#689F38",
          "#AFB42B",
          "#689F38",
          "#388E3C",
          "#00796B",
          "#0097A7",
          "#0288D1",
          "#0D47A1",
        ],
        interval: 3000,
        transition: {
          duration: 6000,
        },
      },
    };
  },
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
    clearFields() {
      (this.name = ""), (this.email = ""), (this.message = "");
    },
  },
};
</script>


<style scoped >
</style>