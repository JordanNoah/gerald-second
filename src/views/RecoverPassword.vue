<template>
    <v-container fill-height>
        <v-row justify="center" align="center">
            <v-col cols="10" md="5">
                <v-card>
                    <v-card-title>
                        Recover password
                    </v-card-title>
                    <v-container>
                        <v-form>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field outlined dense hide-details="auto" label="Email"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-container>
                    <v-card-actions class="d-flex justify-space-between">
                        <v-btn text small @click="loginView()">
                            ¿Ya tienes cuenta?
                        </v-btn>
                        <v-btn>
                            Recover
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    methods:{
        loginView(){
            this.$router.push({name:'login'})
        }
    }
}
</script>