<template>
  <v-content>
      <v-container class="fill-height" fluid style="height: 1300px">
      <v-row  justify="center"> 
        <v-col cols="12" sm="10">      

      <v-card class="mx-auto" light max-height="1350" max-width="1000">
             <div id="loginF" style="color:white;font-weight:bold;">
              Create Account
            </div>
          <v-divider class="mx-4" vertical ></v-divider>

      
        <v-col md="10" offset-md="1">       
        <v-timeline dense clipped >
          <v-timeline-item fill-dot class="white--text mb-12" color="orange" large >
            <template v-slot:icon>
              <span>MO</span>
            </template>
            <v-text-field v-model="input" hide-details flat label="Leave a note..." solo @keydown.enter="comment">
            <template v-slot:append>
              <v-btn class="mx-0" depressed @click="comment" >
                  Post
              </v-btn>
            </template>
          </v-text-field>
        </v-timeline-item>
        <v-slide-x-transition group >
        <v-timeline-item v-for="event in timeline" :key="event.id" class="mb-4" color="pink" small>
          <v-row justify="space-between">
            <v-col cols="7" v-text="event.text"></v-col>
            <v-col class="text-right" cols="5" v-text="event.time"></v-col>
          </v-row>
        </v-timeline-item>
        </v-slide-x-transition>

        <v-timeline-item class="mb-6" hide-dot>
           <span>TODAY</span>
        </v-timeline-item>
        <v-timeline-item class="mb-4" color="grey" icon-color="grey lighten-2" small>
        <v-row justify="space-between">
            <v-col cols="7">
              This order was archived.
            </v-col>
            <v-col class="text-right" cols="5">
            15:26 EDT
          </v-col>
        </v-row>
        </v-timeline-item>

        <v-timeline-item class="mb-4" small>
        <v-row justify="space-between">
          <v-col cols="7">
            <v-chip class="white--text ml-0" color="purple" label small >
              APP
            </v-chip>
            Digital Downloads fulfilled 1 item.
          </v-col>
          <v-col  class="text-right"  cols="5"  >
            15:25 EDT
          </v-col>
        </v-row>
        </v-timeline-item>

      <v-timeline-item  class="mb-4" color="grey"  small>
        <v-row justify="space-between">
          <v-col cols="7">
            Order confirmation email was sent to John Leider (john@vuetifyjs.com).
          </v-col>
          <v-col  class="text-right" cols="5" >
            15:25 EDT
          </v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item class="mb-4" hide-dot >
        <v-btn color="primary" class="mr-4"  router-link to="/Profile">
         Back to Profile
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset">
            clear
        </v-btn>
      </v-timeline-item>
      </v-timeline>
      </v-col>

      <v-progress-linear color="cyan darken-2" rounded value="100" ></v-progress-linear>
       
      </v-card>
     </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>


<script>
  export default {
    data: () => ({
      events: [],
      input: null,
      nonce: 0,
    }),

    computed: {
      timeline () {
        return this.events.slice().reverse()
      },
    },
   
    
    methods: {

      reset() {
      this.comment = ''
      this.$refs.form.reset();
    },
      comment () {
        const time = (new Date()).toTimeString()
        this.events.push({
          id: this.nonce++,
          text: this.input,
          time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents) => {
            return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
          }),
        })

        this.input = null
      },
    },
  }
</script>