<template>
    <v-container fill-height>
        <v-row justify="center" align="center">
            <v-col cols="10" md="5">
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-card>
                        <v-card-title class="d-flex justify-center primary--text text-h4 font-weight-bold">
                            Login
                        </v-card-title>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field v-model="user" outlined dense hide-details="auto" label="Usuario" :rules="userRules"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="password" outlined dense hide-details="auto" label="Password"
                                        :type="showPassword ?'text':'password'"
                                        :append-icon="showPassword ? 'fas fa-eye':'fas fa-eye-slash'"
                                        @click:append="showPassword = !showPassword"
                                        :rules="passwordRules"
                                        ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                        <v-card-actions class="d-flex justify-center">
                            <v-btn depressed @click="initSession()">
                                Sign In
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => {
        return {
            showPassword:false,
            user:null,
            userRules:[
                v => !!v || 'Name is required',
            ],
            password:null,
            passwordRules:[
                v => !!v || 'Password is required',
            ],
            valid:true
        }
    },
    methods:{
        async initSession(){
            if(this.$refs.form.validate()){

                var body = new Object()
                body.email = this.user
                body.password = this.password

                let response = await this.$provider.signin(body)
                console.log(response);
            
            //this.$store.commit('createJwt')
            //this.$router.push({name:'main'})
            }
            console.log();
        }
    }
}
</script>