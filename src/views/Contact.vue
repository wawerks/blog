<template>
  <v-container class="custom-container mt-10">
    <!-- Centered Header "Contact Me" -->
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="text-center header-title mt-5">Contact Me</h1>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="text-h5 text-center">Online Inquiry</v-card-title>
          <v-card-subtitle class="text-center">
            Michelle Pais Group
          </v-card-subtitle>
          <v-card-text>
            <v-form @submit.prevent="submitForm">
              <v-text-field v-model="form.name" label="Name" required></v-text-field>
              <v-text-field v-model="form.email" label="Email" required></v-text-field>
              <v-text-field v-model="form.phone" label="Phone" required></v-text-field>
              <v-select
                v-model="form.interest"
                :items="interests"
                label="Select An Interest"
                required
              ></v-select>
              <v-textarea v-model="form.message" label="Message" rows="3"></v-textarea>
              <v-btn color="primary" class="mt-3" block @click="submitForm">Submit</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="8" md="6">
        <v-card class="pa-5">
          <v-card-subtitle class="text-h6">Contact Details</v-card-subtitle>
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Email: rhowinlumales.com</v-list-item-title>
                <v-list-item-subtitle>Phone: (991) 607-3108</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Address: </v-list-item-title>
                <v-list-item-subtitle>Kinamlutan Purok - 1</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Province:</v-list-item-title>
                <v-list-item-subtitle>Butuan City, Agusan Del Norte Philippines</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Office:</v-list-item-title>
                <v-list-item-subtitle>College Of Computing and Information Sciences</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <!-- Footer Section -->
    <v-row justify="center" class="footer">
      <v-col cols="12" class="text-center">
        <!-- Social Media Icons -->
        <div class="social-icons mb-4">
          <a href="https://github.com/wawerks" target="_blank">
            <v-icon class="mx-2" style="color: #181C14;">mdi-github</v-icon>
          </a>
          <a href="https://www.linkedin.com/in/rhowin-lumales-b891152ab/" target="_blank">
            <v-icon class="mx-2" style="color: #181C14;">mdi-linkedin</v-icon>
          </a>
          <a href="https://www.instagram.com/rhowingg/" target="_blank">
            <v-icon class="mx-2" style="color: #181C14;">mdi-instagram</v-icon>
          </a>
        </div>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      interests: ["General Inquiry", "Web Development", "Web Application", "Full Stack Developer"],
      // Bind form data to these properties
      form: {
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
      }
    };
  },
  methods: {
    // Method to handle form submission
    submitForm() {
      // Show alert
      alert("Submitted");

      // Clear form
      this.form.name = '';
      this.form.email = '';
      this.form.phone = '';
      this.form.interest = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
/* Background color for the v-container only */
.custom-container {
  background-color: #ECDFCC; /* Change this to your desired color */
  padding: 30px; /* Optional: Add padding if needed */
}

.v-container {
  margin-top: 70px !important;
  height: 100%;
}

.v-card {
  border-radius: 12px;
  margin-left: 10px;
  margin-right: 10px;
}

.text-h5 {
  font-weight: bold;
}

.pa-5 {
  padding: 24px;
}

.header-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 30px;
}

/* Social Icons Footer Section */
.footer {
  margin-top: 15px;
}

.social-icons .v-icon {
  font-size: 36px;
  cursor: pointer;
}


</style>
