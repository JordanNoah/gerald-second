<template>
    <v-container>
        <v-app-bar title="Application bar" app dense elevation="0">
            <v-btn icon small class="ml-1" @click="sidebar = !sidebar">
                <v-icon small>
                   fas fa-bars
                </v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-menu bottom min-width="200px" rounded offset-y class="mx-3">
                <template v-slot:activator="{ on }">
                    <v-btn icon small v-on="on" class="mx-1">
                        <v-avatar color="brown" size="35">
                            <span class="white--text">{{ user.initials }}</span>
                        </v-avatar>
                    </v-btn>
                </template>
                <v-card>
                    <v-list-item-content class="justify-center">
                        <div class="mx-auto text-center">
                            <v-avatar color="brown">
                                <span class="white--text text-h5">{{ user.initials }}</span>
                            </v-avatar>
                            <h3>{{ user.fullName }}</h3>
                            <p class="text-caption mt-1">
                                {{ user.email }}
                            </p>
                            <v-divider class="my-3"></v-divider>
                            <v-btn depressed rounded text>
                                Edit Account
                            </v-btn>
                            <v-divider class="my-3"></v-divider>
                            <v-btn depressed rounded text @click="removeSession()">
                                Disconnect
                            </v-btn>
                        </div>
                    </v-list-item-content>
                </v-card>
            </v-menu>
        </v-app-bar>

        <v-navigation-drawer v-model="sidebar" app>
            <v-list>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="text-subtitle-1 d-flex justify-center font-weight-bold"> Professor
                            Grading </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item v-for="i in menuNavigaton" :key="i.text" :to="{name:i.link}">
                    <v-list-item-content>
                        <v-list-item-title class="text-h6"> {{i.text}} </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

            </v-list>

        </v-navigation-drawer>

<router-view />

    </v-container>
</template>

<script>
  export default {
    data: () => ({
        sidebar:false,
      menuNavigaton:[
        {text:'Estudiante',link:'student'},
        {text:'Matrículas',link:'enrollments'},
        {text:'Calificacion',link:'scores'},
        {text:'Inspecciones',link:'inspections'},
        {text:'Tutorias',link:'tutorials'}
      ],
      user: {
        initials: 'JD',
        fullName: 'John Doe',
        email: 'john.doe@doe.com',
      }
    }),
    beforeCreate:function(){
        this.$provider.setToken(this.$store.getters.getJwt)
    },
    methods:{
        removeSession(){
            this.$store.commit('deleteJwt')
            this.$router.push({name:'login'})
        }
    }
  }
</script>