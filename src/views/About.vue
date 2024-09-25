<template>
  <div class="about-page">
    <!-- Profile Header -->
    <section class="about-header">
      <div class="image-container">
        <img :src="profileImage" alt="Profile Image" class="profile-image" />
      </div>
      <div class="about-info">
        <h1>{{ name }}</h1>
        <h2>{{ role }}</h2>
        <div class="social-icons">
          <a href="https://github.com/wawerks" target="_blank">
            <v-icon class="mx-2" style="color: #3C3D37;">mdi-github</v-icon>
          </a>
          <a href="https://www.linkedin.com/in/rhowin-lumales-b891152ab/" target="_blank">
            <v-icon class="mx-2" style="color: #3C3D37;">mdi-linkedin</v-icon>
          </a>
          <a href="https://www.instagram.com/rhowingg/" target="_blank">
            <v-icon class="mx-2" style="color: #3C3D37;">mdi-instagram</v-icon>
          </a>
        </div>
      </div>
    </section>

    <!-- About Details -->
    <section class="about-details">
      <!-- Left Column (About Me) -->
      <div class="details-left">
        <h3>About Me</h3>
        <!-- New About Me Content -->
        <div class="container section-title" data-aos="fade-up">
          <p>
            Hey, I am highly experienced, and I can satisfy any of my clients with my work
            surely. My skills and services are:
          </p>
          <div class="row ms-5">
            <div class="col-lg-6 mt-3">
              <ul>
                <li>- Graphics Designing</li>
                <li>- Photo and Video Editing</li>
                <li>- MS Office Applications</li>
                <li>- Data Scraping</li>
              </ul>
            </div>
            <div class="col-lg-6 mt-3">
              <ul>
                <li>- Data Entry</li>
                <li>- 80-100 Word Type per Minute</li>
                <li>- Social Media Management</li>
                <li>- Social Media Marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column (Software Skills & Details) -->
      <div class="details-right">

        <h3>Details</h3>
        <ul>
          <li>Age: {{ age }}</li>
          <li>Residence: {{ residence }}</li>
          <li>Freelance: {{ freelance }}</li>
          <li>Address: {{ address }}</li>
        </ul>

        <h3>Software Skills</h3>
        <ul>
          <li>
            Adobe Premiere:
            <span class="progress-bar">
              <span :style="{ width: sketchSkill + '%' }"></span>
            </span>
          </li>
          <li>
            Adobe Photoshop:
            <span class="progress-bar">
              <span :style="{ width: photoshopSkill + '%' }"></span>
            </span>
          </li>
          <li>
            C Language:
            <span class="progress-bar">
              <span :style="{ width: C + '%' }"></span>
            </span>
          </li>
          <li>
            Microsoft Suite:
            <span class="progress-bar">
              <span :style="{ width: Microsoft + '%' }"></span>
            </span>
          </li>
        </ul>

        <h3>Language Skills</h3>
        <ul>
          <li>
            English:
            <span class="progress-bar">
              <span :style="{ width: englishSkill + '%' }"></span>
            </span>
          </li>
          <li>
            Tagalog:
            <span class="progress-bar">
              <span :style="{ width: Tagalog + '%' }"></span>
            </span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      profileImage: require('@/assets/bw.jpeg'), // Correct path to the image
      name: 'Rhowin Jhon P. Lumales',
      role: 'Web Developer',
      aboutText: 'Hey, I am highly experienced, and I can satisfy any of my clients with my work surely. My skills and services are: ' ,
      sketchSkill: 80, // Skill percentage (can be customized)
      photoshopSkill: 90,
      Microsoft: 99,
      C: 50,
      age: 20,
      residence: 'Kinamlutan',
      freelance: 'Available',
      address: 'Butuan City',
      englishSkill: 90,
      Tagalog: 100,
    };
  },
};
</script>

<style scoped>
.about-page {
  font-family: Arial, sans-serif;
  color: black; /* Text color */
  background-color: #ECDFCC; /* Background color */
  padding: 70px 20px;
  padding-left: 70px;
  padding-right: 70px;
  margin-top: 60px;
  min-height: 100vh;
  box-sizing: border-box; /* Ensure padding does not increase width/height */
}

.about-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px; /* Add space between header and details */
}

.image-container {
  flex-shrink: 0;
}

.profile-image {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #3C3D37; /* Border color */
}

.about-info h1, h2 {
  margin: 0;
  color: black; /* Change to black */
}

.about-info h2 {
  color: #3C3D37; /* Adjusted for contrast */
}

.social-icons {
  margin-top: 10px;
}

.social-icons v-icon {
  font-size: 20px;
  margin-right: 10px;
}

.about-details {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

.details-left, .details-right {
  width: 45%;
}

h3 {
  color: #3C3D37; /* Adjusted for contrast */
  margin-bottom: 15px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  color: black; /* Change to black */
}

.progress-bar {
  width: 50%;
  background-color: #697565; /* Progress bar background color */
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar span {
  display: block;
  height: 100%;
  background-color: #3C3D37; /* Progress bar fill color */
}

/* Responsive Design */
@media (max-width: 768px) {
  .about-header {
    flex-direction: column;
    align-items: center;
  }

  .about-details {
    flex-direction: column;
  }

  .details-left, .details-right {
    width: 100%;
  }
}
ul {
  list-style-type: disc; /* Adds default disc bullets */
  margin-left: 20px; /* Adds indentation */
}

li {
  margin-bottom: 10px; /* Adds spacing between list items */
}

</style>

