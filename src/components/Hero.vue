<template>
  <div class="heroBlock">
    <v-carousel hide-delimiters dark cycle height="700">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row class="fill-height title hidden-md-and-down" align="center" justify="center">
          <div>{{ item.title }}</div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "Hero",

  data() {
    return {
      items: [
        {
          src: "https://hiringsolved.com/wp-content/uploads/2022/03/banner-who-processing2x.png",
          title: "Getting ready to work again",
        },
        {
          src: require("../assets/images/2.jpg"),
          title: "I am born to achieve my goals",
        },
        {
          src: "https://hiringsolved.com/wp-content/uploads/2022/03/resource-banner-dl-default2x.png",
          title: "Join with us",
        },
        {
          src: require("../assets/images/4.jpg"),
          title: "Get Skill Ready",
        },
      ],
    };
  },
};
</script>
