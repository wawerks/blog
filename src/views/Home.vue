<template>
    <div class="home">
      <v-main>
        <div class="container fluid hero-section">
          <v-container class="text-center">
            <!-- Hero Content -->
            <div class="hero-content">
              <h1 class="headline mb-4">{{ typedText }}</h1>
              <p class="subtitle">
                I'm a School based <strong>Full Stack Software Engineer</strong>, currently working at <strong>Caraga State University</strong> helping build a modern, mobile-first, domain registrar and site builder.
              </p>
              <p class="subtitle">
                In my free time, you can catch me training in <strong>Kung fu</strong>, plucking my <strong>Guitar</strong>, or exploring beautiful <strong>Mountains</strong>.
              </p>
  
              <!-- Social Links -->
              <div class="social-icons mb-4">
                <a href="https://github.com/wawerks">
                  <v-icon class="mx-2" style="color: #181C14;">mdi-github</v-icon>
                </a>
                <a href="https://www.linkedin.com/in/rhowin-lumales-b891152ab/">
                  <v-icon class="mx-2" style="color: #181C14;">mdi-linkedin</v-icon>
                </a>
                <a href="https://www.instagram.com/rhowingg/">
                  <v-icon class="mx-2" style="color: #181C14;">mdi-instagram</v-icon>
                </a>
              </div>
  
              <!-- Resume and Contact Buttons -->
              <router-link to="/resume">
                <v-btn rounded class="resume-btn" outlined>Resume</v-btn>
              </router-link>
              <router-link to="/contact">
                <v-btn rounded class="contact-btn">Contact</v-btn>
              </router-link>
            </div>
          </v-container>
        </div>
      </v-main>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomePage",
    data() {
      return {
        texts: ["I'm Rhowin Jhon.", "I'm a Web Developer."],
        typedText: "",
        currentTextIndex: 0,
        typingIndex: 0,
        typingSpeed: 100,
        loopDelay: 1000,
      };
    },
    mounted() {
      this.typeText();
    },
    methods: {
      typeText() {
        if (this.typingIndex < this.texts[this.currentTextIndex].length) {
          this.typedText += this.texts[this.currentTextIndex].charAt(this.typingIndex);
          this.typingIndex++;
          setTimeout(this.typeText, this.typingSpeed);
        } else {
          setTimeout(() => {
            this.eraseText();
          }, this.loopDelay);
        }
      },
      eraseText() {
        if (this.typingIndex > 0) {
          this.typedText = this.typedText.slice(0, -1);
          this.typingIndex--;
          setTimeout(this.eraseText, this.typingSpeed);
        } else {
          this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
          setTimeout(() => {
            this.typingIndex = 0;
            this.typeText();
          }, this.loopDelay);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .hero-section {
    min-height: 100vh; /* Full viewport height */
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('/public/img/cover.png') center center / cover no-repeat;
    color: white;
    padding: 0;
    margin: 0;
  }
  
  .hero-content {
    text-align: center;
    max-width: 600px;
    position: relative; /* Allow absolute positioning inside */
  }
  
  .headline {
    font-size: 56px;
    font-weight: bold;
    min-height: 90px; /* Fixed height for the headline */
    overflow: hidden; /* Prevent overflow during typing animation */
  }
  
  .subtitle {
    font-size: 18px;
    margin-bottom: 20px;
  }
  
  .social-icons v-icon {
    font-size: 32px;
    color: white;
  }
  
  .resume-btn {
    background-color: #697565;
    border-color: white;
    color: white;
    margin-right: 20px;
  }
  
  .contact-btn {
    background-color: #697565;
    color: white;
  }
  
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  
  .v-main {
    padding: 0;
    margin: 0;
  }
  
  .v-container {
    padding: 0;
  }
  
  .mb-4 {
    margin-bottom: 1.5rem;
  }
  </style>
  