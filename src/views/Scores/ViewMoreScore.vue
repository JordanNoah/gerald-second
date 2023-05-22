<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="d-flex">
                <v-btn icon @click="goBack()">
                    <v-icon>
                        fas fa-angle-left
                    </v-icon>
                </v-btn>
                <div class="d-flex align-center text-h5 primary--text font-weight-bold">
                    <span class="mr-2">
                        Calificaciones
                    </span>
                    <v-btn text small>
                        2021-2022
                    </v-btn>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <div>
                    Curso de inteligencia artificial
                </div>
                <div>
                    Docente Miguel Ángel Quiróz Martínez
                </div>
                <div>
                    Grupo 1
                </div>
            </v-col>
            <v-col>
                <div>
                    Horarios
                </div>
                <div>
                    Viernes
                    <span>
                        18:00 pm - 21:00 pm
                    </span>
                </div>
                <div>
                    Sabado
                    <span>
                        15:00 pm - 17:00 pm
                    </span>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" v-for="i in grades" :key="i.id">
                <v-card>
                    <v-container>
                        <div class="d-flex font-weight-bold">
                            <div>
                                {{i.graded_at.split(" ")[0]}}
                            </div>
                            <div class="mx-2">
                                |
                            </div>
                            <div>
                                {{i.graded_at.split(" ")[1]}}
                            </div>
                        </div>
                        <div>
                            <v-row no-gutters>
                                <v-col class="d-flex align-center">
                                    Calificación:
                                </v-col>
                                <v-col cols="10">
                                    <v-rating v-model="i.rating" readonly size="small"></v-rating>
                                </v-col>
                            </v-row>
                            <v-row no-gutters>
                                <v-col class="d-flex align-center">
                                    Comentario:
                                </v-col>
                                <v-col cols="10" class="px-2">
                                    {{i.comment}}
                                </v-col>
                            </v-row>
                        </div>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            grades:[]
        }
    },
    mounted:function() {
        this.getGrades()
    },
    methods:{
        async getGrades(){
            var response = await this.$provider.getGrades(this.$route.params.uuid)
            if (response.status == 200) {
                this.grades = response.data._embedded.grades
            }
            console.log(response);
        },
        goBack(){
            this.$router.push({name:'allScores'})
        }
    }
}
</script>