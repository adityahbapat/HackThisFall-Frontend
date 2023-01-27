<template >
  <div >
    <v-container>
      <v-card class="mx-auto rounded-xl" max-width="100%" :elevation="15">
        <h5 class="text-center ma-6 teal--text font-bold">
          We are RecruitMe. A young team with a vision to help get jobs for everyone.
        </h5>
      </v-card>

      <br />
      <v-divider size="200"></v-divider>
      <br />

      <v-row>
        <v-col v-for="item in items" :key="item.id">
          <v-card
            dark
            class="mx-auto rounded-xl text-center"
            max-width="100%"
            style=" background-image: linear-gradient( 345deg, #1dcce0, teal);"
            :elevation="15"
          >
            <h2 class="text-center font-weight-bold">Company HR
            </h2> 
            <v-divider></v-divider>

            <div >
                  <h4 class="font-weight-bold text-center ml-5 mt-1">
                    - Y.S Rao -
                  </h4>
                  <p class="text-center mx-6">
                    It is in the hands of youngsters like Kushal, Arnav, Samay and Aditya to help our country grow. They provide us with fabulous candidates along with their assessments.
                  </p>
                  <p class="font-italic text-center font-weight-black">
                    “Best of Luck. Keep Growing”
                  </p>

                  <v-card-text>
                    <div class="d-flex justify-space-between">
                      <div>
                        <v-icon size="25px" class="ml-6"> mdi-facebook </v-icon
                        >- RecruitMe
                      </div>
                      <div>
                        <v-icon size="25px" class="ml-6"> mdi-linkedin </v-icon
                        >- RecruitMe
                      </div>
                      <div>
                        <v-icon size="25px" class="ml-6"> mdi-dialpad </v-icon>-
                        071-6786786
                      </div>
                      <div>
                        <v-icon size="25px" class="ml-6"> mdi-email </v-icon>-
                        recruitme@gmail.com
                      </div>
                    </div></v-card-text>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "About",

  data: () => ({
    items: [
      {
        id: 1,
        src: require("../assets/images/nish.jpg"),
        color: "#952175",
      },
    ],
  }),
};
</script>