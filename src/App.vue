<template>
  <v-app>
    <navbar/>
  </v-app>
</template>

<script>
import navbar from '@/components/Navigation.vue';

export default {
  name: 'App',
  components: { navbar },

  data (){
    return {
      //
    }
  }
}

</script>
