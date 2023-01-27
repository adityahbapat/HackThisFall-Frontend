<template>

  <v-content>
    <div class="staticHero">
      <v-img max-height="150" src="https://hiringsolved.com/wp-content/uploads/2022/03/resource-banner-dl-default2x.png">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <h1 style="font-size:35px;" class="text-center font-weight-regular">About Us</h1>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    
    <v-divider></v-divider>
    <About />

  </v-content>
</template>

<script>
import About from "../components/About";


export default {
  name: "AboutUs",

 components: {
    About,
  },

  data() {
    return {
      items: [
      ],
    };
  },
};
</script>
