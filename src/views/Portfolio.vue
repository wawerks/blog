<template>
  <section id="portfolio" class="portfolio section light-background">
    <!-- Section Title -->
    <v-container class="section-title" data-aos="fade-up">
      <h2>Portfolio</h2>
      <p>
        Welcome to my portfolio! Here, you'll find a curated selection of my 
        work that showcases my skills, creativity, and passion for [your field, 
        e.g., web development, graphic design, content creation, etc.]. 
        Each project reflects my dedication to quality and my ability to tackle diverse challenges.
      </p>
    </v-container>
    <!-- End Section Title -->

    <v-container>
      <v-row>
        <!-- Portfolio Filters -->
        <v-col>
          <v-btn
            v-for="filter in filters"
            :key="filter"
            @click="filterPortfolio(filter)"
            :class="{'filter-active': selectedFilter === filter}"
            class="filter-button"
          >
            {{ filter }}
          </v-btn>
        </v-col>
      </v-row>
      
      <v-row class="gy-4">
        <v-col
          v-for="item in filteredPortfolio"
          :key="item.title"
          cols="12"
          md="6"
          lg="4"
        >
          <v-card class="portfolio-item h-100">
            <v-img :src="item.image" class="img-fluid" height="200px" />
            <v-card-title>
              <h4>{{ item.title }}</h4>
            </v-card-title>
            <v-card-subtitle>
              <p>{{ item.subtitle }}</p>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'PortfolioPage',
  data() {
    return {
      filters: ['All','SoloLearn','CSU Cert'], // Add more filters as needed
      selectedFilter: 'All',
      portfolioItems: [
        {
          title: 'CSS Cert',
          subtitle: 'Solo Learn Certificate',
          image: require('@/assets/css.png'), // Corrected image path
          category: 'SoloLearn',
        },
        {
          title: 'Early Bird',
          subtitle: 'Project',
          image: require('@/assets/certAchievement.jpg'), // Corrected image path
          category: 'CSU Cert',
        },
        {
          title: 'HTML Cert',
          subtitle: 'Solo Learn Cert',
          image: require('@/assets/html.png'), // Corrected image path
          category: 'SoloLearn',
        },
        {
          title: 'JavaScript Cert',
          subtitle: 'Solo Learn Cert',
          image: require('@/assets/javaScript.jpg'), // Corrected image path
          category: 'SoloLearn',
        },
        {
          title: 'Deans Cert',
          subtitle: 'Achievements',
          image: require('@/assets/deans.jpg'), // Corrected image path
          category: 'CSU Cert',
        },
      ],
    };
  },
  computed: {
    filteredPortfolio() {
      if (this.selectedFilter === 'All') {
        return this.portfolioItems;
      }
      return this.portfolioItems.filter(item => item.category === this.selectedFilter);
    },
  },
  methods: {
    filterPortfolio(filter) {
      this.selectedFilter = filter;
    },
  },
};
</script>

<style scoped>
.section-title h2{
  margin-top: 20px;
  font-size:40px;

}
.portfolio {
  background-color: #ecdfcc; /* Set the background color */
  margin-top: 60px; /* Adjust the top margin as needed */
  min-height: 100vh; /* Ensures it covers the full viewport height */
  padding: 60px 0; /* Optional: Add padding for aesthetics */
}
.portfolio-item {
  position: relative;
  overflow: hidden;
  margin-top: 50px;
}
.filter-button {
  margin-right: 10px;
}
.filter-active {
  background-color: #697565; /* Change to your desired active color */
  color: white; /* Change to your desired text color */
}
html, body {
  height: 100%;
  margin: 0;
}
</style>
