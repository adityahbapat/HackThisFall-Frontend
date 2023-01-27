<template>
  <div >
    <v-container>
      <h1 style="font-size:40px;" class="text-center font-weight-regular">Up Coming Events</h1>
      <v-row>
        <v-col v-for="item in items" :key="item.id">
          <v-card :loading="loading" class="mx-auto my-8 rounded-xl" max-width="370" :elevation="24" style="background-image: linear-gradient(46deg, #40C4FF, teal);">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-hover v-slot:default="{ hover }">
                 
            <v-img
              height="250"
              :src="item.src"
            >
            <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out"
            style="height: 100%;background-color: #4247DD; opacity: 0.5;"
          ><h2 class="my-16 pa-6" style="color: white;">{{item.titleHover}}</h2>
          </div>
        </v-expand-transition>
            </v-img>
            </v-hover>

            <v-card-title style="font-color:white;background-color: #E3F2FD;" >{{item.title}}</v-card-title>

            <v-card-text>

              <p  class="ma-2 white--text" :elevation="14">
                {{ item.description }}
              </p>
            </v-card-text>
          </v-card>
           <v-divider></v-divider>
        </v-col>
        
      </v-row>
     
       <h1 style="font-size:40px;" class="text-center font-weight-regular">Old Events</h1>
      <v-row>
        <v-col v-for="item2 in items2" :key="item2.id">
          <v-card :loading="loading" class="mx-auto my-8 rounded-xl" max-width="370" :elevation="24" style="background-image: linear-gradient(46deg, #40C4FF, teal);">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-hover v-slot:default="{ hover }">
                 
            <v-img
              height="250"
              :src="item2.src"
            >
            <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out"
            style="height: 100%;background-color: #4247DD; opacity: 0.5;"
          ><h2 class="my-16 pa-6" style="color: white;">{{item2.titleHover}}</h2>
          </div>
        </v-expand-transition>
            </v-img>
            </v-hover>

            <v-card-title style="font-color:white;background-color: #E3F2FD;" >{{item2.title}}</v-card-title>

            <v-card-text>

              <p  class="ma-2 white--text" :elevation="14">
                {{ item2.description }}
              </p>
            </v-card-text>
          </v-card>
          <v-divider></v-divider>
        </v-col>
         
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Eventup",

  data: () => ({
        items: [
      {
        id: 1,
        title: "Upcoming event 1",
        description: "a good description.",
        src: require("../assets/images/ev4.jpg"),
        titleHover: "Event Date & time 1"
      },
      {
        id: 2,
        title: "Upcoming event 2",
        description: "a good description.",
        src: require("../assets/images/ev4.jpg"),
        titleHover: "Event Date & time 2"
      },
      {
        id: 3,
        title: "Upcoming event 3",
        description: "a good description.",
        src: require("../assets/images/ev4.jpg"),
        titleHover: "Event Date & time 3"
      },
        ],
        items2: [
       {
        id: 1,
        title: "Old event 1",
        description: "a good description for old events.",
        src: require("../assets/images/ev1.jpg"),
        titleHover: "Event Date & time 1"
      },
    
    ]
  }),
};
</script>
