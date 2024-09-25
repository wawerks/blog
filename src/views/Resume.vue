<template>
  <div class="full-background">
    <section id="resume" class="resume section">
      <!-- Section Title -->
      <v-container class="section-title" data-aos="fade-up">
        <v-row>
          <v-col>
            <h2>Resume</h2>
            <p>
              To secure a challenging role in data analysis and software
              development where I can leverage my IT background to contribute innovative solutions.
            </p>
          </v-col>
        </v-row>
      </v-container>
      <!-- End Section Title -->

      <v-container>
        <v-row>
          <!-- Left Column -->
          <v-col cols="12" md="6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Summary</h3>
            <div class="resume-item pb-0">
              <h4>Eligibility</h4>
              <p>
                <em>
                  Innovative and deadline-driven Graphic Designer with 3+ years of experience
                  designing and developing user-centered digital/print marketing material
                  from initial concept to final, polished deliverable.
                </em>
              </p>
              <v-list dense class="transparent-list">
                <v-list-item>3rd Year Student</v-list-item>
                <v-list-item>Consistent Dean’s Lister from 1st Year to Present</v-list-item>
                <v-list-item>Student Leader</v-list-item>
              </v-list>
            </div>

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>Awards and Achievements</h4>
              <v-list dense class="transparent-list">
                <v-list-item>2015-2016: 3rd Salutatorian</v-list-item>
                <v-list-item>2020-2021: With Honors</v-list-item>
                <v-list-item>2020-2021: Agricultural Crop NC ll</v-list-item>
                <v-list-item>2021-2022: Dean’s Lister</v-list-item>
                <v-list-item>2022-2023: Dean’s Lister</v-list-item>
              </v-list>
            </div>

            <div class="resume-item">
              <h2 class="mb-5">Bachelor of Information Technology & Software Engineering</h2>
              <p><em>Bachelor of Science in Information Technology</em></p>
              <p><em>Caraga State University</em></p>
              <p><em>Ampayon, Butuan City 8600</em></p>
              <p><em>Expected Graduation: <b>June 2026</b></em></p>
            </div>

          </v-col>

          <!-- Right Column -->
          <v-col cols="12" md="6" data-aos="fade-up" data-aos-delay="200">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h4>Social Media Manager</h4>
              <h5>2019 - Present</h5>
              <p><em>Remote Work</em></p>
              <v-list dense class="transparent-list">
                <v-list-item>Social Media Manager – PakontestTv (Youtube)</v-list-item>
                <v-list-item>Social Media Manager – KNHS SSG (Facebook 2020-2023)</v-list-item>
                <v-list-item>Social Media Manager – NMC District 1 Free Methodist Youth (Facebook 2020-2022)</v-list-item>
              </v-list>
            </div>

            <div class="resume-item">
              <h4>Graphic Design Specialist</h4>
              <h5>2017 - 2018</h5>
              <p><em>Stepping Stone Advertising, New York, NY</em></p>
              <v-list dense class="transparent-list">
                <v-list-item>
                  Developed numerous marketing programs (logos, brochures, infographics, presentations, and advertisements).
                </v-list-item>
                <v-list-item>Managed up to 5 projects or tasks at a given time while under pressure.</v-list-item>
                <v-list-item>
                  Recommended and consulted with clients on the most appropriate graphic design.
                </v-list-item>
                <v-list-item>
                  Created 4+ design presentations and proposals a month for clients and account managers.
                </v-list-item>
              </v-list>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ResumePage',
};
</script>

<style scoped>
.full-background {
  background-color: #ecdfcc; /* Replace with your desired color */
  min-height: 100vh; /* Ensures it covers the full height of the viewport */
  padding: 20px; /* Optional: adds padding around the content */
  box-sizing: border-box; /* Ensure padding is included in height */
}

.resume-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.resume-item {
  margin-bottom: 2rem;
}

.section-title h2 {
  font-size: 2.5rem;
  margin-top: 80px;
}

.section-title p {
  font-size: 1rem;
}

/* Make list items transparent */
.transparent-list {
  background-color: transparent; /* Ensures the background is transparent */
}

.transparent-list .v-list-item {
  background-color: transparent; /* Ensures individual list items are transparent */
}
.resume-item p {
  margin: 0.5rem 0; /* Add some vertical spacing between items */
}

</style>
