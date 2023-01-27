<template>
  <v-container>
    <div class="descriptionCard">
      <v-card
        class="mx-auto rounded-xl"
        color="#3b453f"
        dark
        max-width="700"
        style="background-image: linear-gradient(to right, #c04848, #480048)"
      >
        <p class="text-center">
          RecruitMe - the best job portal award winner 2023
        </p>

        <v-card-actions>
          <div class="text-center">
            <router-link to="/BookCategory">
              <v-btn rounded color="#26c6da" dark elevation="24" block>
                Explore Our Categories
              </v-btn>
            </router-link>
          </div>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Description",

  data: () => ({}),
  mounted: function () {
    this.getId();
  },
  methods: {
    
  },
};
</script>
