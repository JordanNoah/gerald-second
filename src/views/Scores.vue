<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <div class="d-flex align-center text-h5 primary--text font-weight-bold">
                    <span>
                        Calificaciones
                    </span>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col style="position:relative;">
                <div style="position:absolute;z-index:4;top:0px;left:35px;background-color:white;" class="px-2">
                    <v-icon x-small>
                        fas fa-filter
                    </v-icon>
                    Filtros
                </div>
                <v-card width="100%" class="px-3 py-4" outlined>
                    <v-container>
                        <v-row justify="space-between">
                            <v-col cols="12" sm="3">
                                <v-autocomplete label="Carrera" v-model="filterDegree" clearable :items="degrees" item-value="id" item-text="name" :loading="loadingDegrees" hide-details outlined></v-autocomplete>
                            </v-col>
                            <v-col cols="12" sm="3">
                                <v-autocomplete label="Materia" v-model="filterSubject" clearable :items="subjects" item-value="id" item-text="name" hide-details outlined></v-autocomplete>
                            </v-col>
                            <v-col cols="12" sm="3">
                                <v-text-field v-model="filterTeacher" clearable id="inputFilterTeacher" @focus="activateHelperTeacher" class="inputFilterTeacher" label="Profesor" hide-details outlined></v-text-field>
                                <v-card class="px-4" id="listFilterTeacher" style="display:none">
                                    <v-container v-if="teachers" >
                                        <v-list style="max-height: 100px; overflow: auto;">
                                            <v-list-item-group>
                                                <v-list-item v-for="i in teachers" :key="i.id" @click="selectTeacher(i)">
                                                <v-list-item-content>
                                                    <v-list-item-title>{{i.full_name}}</v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                            </v-list-item-group>
                                        </v-list>
                                    </v-container>
                                    <v-container v-else>
                                        No hay datos!!
                                    </v-container>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-card-actions class="d-flex justify-end">
                        <v-btn depressed color="primary">
                            Buscar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-title>
                        <v-spacer></v-spacer>
                        <v-text-field v-model="search" append-icon="fas fa-search" label="Search" hide-details></v-text-field>
                    </v-card-title>
                    <v-data-table :headers="headers" :items="items" :search="search">
                        <template v-slot:[`item.score`]="{ item }">
                            <v-rating empty-icon="far fa-star" full-icon="fas fa-star" half-icon="fas fa-star-half-alt" hover half-increments length="5" dense color="yellow accent-4" size="20" :value="item.score"></v-rating>
                        </template>
                        <template v-slot:[`item.coments`]="{ item }">
                            <v-icon small class="mx-2" @click="seeMoreComment(item)">
                                far fa-eye
                            </v-icon>
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
        <v-dialog v-model="dialogComment" max-width="500" persistent>
            <v-card>
                <v-card-title class="d-flex justify-center">
                    Consultar Comentario Anónimo
                </v-card-title>
                <v-container>
                    <v-textarea outlined readonly auto-grow hide-details></v-textarea>
                </v-container>
                <v-card-actions class="d-flex justify-center">
                    <v-btn depressed @click="dialogComment = false">
                        Cerrar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>

export default {
    data() {
        return {
            //filters
            degrees:[],
            filterDegree:null,
            loadingDegrees:false,
            subjects:[],
            filterSubject:null,
            loadingSubject:false,
            filterTeacher:'',
            teachers:[],
            loadingTeachers:false,
            showExtraTeacherData:false,
            //
            search:null,
            dialogComment:false,
            headers: [{
                    text: 'Asignatura',
                    filterable: false,
                    sortable: false,
                    value: 'asignatura'
                },
                {
                    text: 'Profesor',
                    filterable: false,
                    sortable: false,
                    value: 'profesor'
                },
                {
                    text: 'Grupo',
                    filterable: false,
                    sortable: false,
                    value: 'grupo'
                },
                {
                    text: 'Calificación',
                    filterable: false,
                    sortable: false,
                    value: 'score',
                    align:'center'
                },
                {
                    text: 'Comentario',
                    filterable: false,
                    sortable: false,
                    value: 'coments',
                    align:'center'
                }
            ],
            items: [{
                    asignatura: 'matemáticas II',
                    profesor: 'Emilio Daniela Galindo Navarro',
                    grupo: 'AJ-001',
                    score: 4
                },
                {
                    asignatura: 'ingles i',
                    profesor: 'Meritxell Angelina Olmedo Rial',
                    grupo: 'AJ-001',
                    score: 4
                },
                {
                    asignatura: 'simulación de sistemas',
                    profesor: 'Sabina Joana Giner Arnaiz',
                    grupo: 'AJ-002',
                    score: 4
                },
                {
                    asignatura: 'lenguaje y comunicación',
                    profesor: 'Gonzalo Gracia Pérez Herrero',
                    grupo: 'AJ-001',
                    score: 4
                },
                {
                    asignatura: 'simulación de sistemas',
                    profesor: 'Thais Nina Jover Aguado',
                    grupo: 'AJ-001',
                    score: 4
                },
                {
                    asignatura: 'matemáticas II',
                    profesor: 'Maria-Emilia Montilla Pérez',
                    grupo: 'AJ-002',
                    score: 4
                },
                {
                    asignatura: 'matemáticas II',
                    profesor: 'Teodora Gines Baeza Martnez',
                    grupo: 'AJ-003',
                    score: 4
                },
                {
                    asignatura: 'ingles i',
                    profesor: 'Sarah Alex Martín Baez',
                    grupo: 'AJ-002',
                    score: 4
                },
                {
                    asignatura: 'simulación de sistemas',
                    profesor: 'Roman Claudio Barranco Roig',
                    grupo: 'AJ-002',
                    score: 4
                },
                {
                    asignatura: 'simulación de sistemas',
                    profesor: 'Montse Mia Vera Prado',
                    grupo: 'AJ-004',
                    score: 4
                },
                {
                    asignatura: 'lenguaje y comunicación',
                    profesor: 'Óscar Abraham Vegas Mesa',
                    grupo: 'AJ-004',
                    score: 4
                },
                {
                    asignatura: 'matemáticas II',
                    profesor: 'Concepcio Fidel Olmos Sastre',
                    grupo: 'AJ-004',
                    score: 4
                },
                {
                    asignatura: 'Inteligencia artificial',
                    profesor: 'Palmira Fatima Prado Machado',
                    grupo: 'AJ-003',
                    score: 4
                },
                {
                    asignatura: 'lenguaje y comunicación',
                    profesor: 'Daniel Fulgencio Angulo Llanos',
                    grupo: 'AJ-003',
                    score: 4
                },
                {
                    asignatura: 'simulación de sistemas',
                    profesor: 'Adriana Aurelio Grau Villaverde',
                    grupo: 'AJ-003',
                    score: 4
                },
                {
                    asignatura: 'ingles i',
                    profesor: 'Rebeca Ainara Castañeda Cañizares',
                    grupo: 'AJ-002',
                    score: 4
                }
            ]
        }
    },
    mounted: async function(){
        await this.getDegress()
        this.changeFocusTeacher()
        await this.getTeachers()

    },
    watch:{
        filterDegree(){
            this.getSubjects()
        },
        filterTeacher(){
            this.getTeachers()
        }
    },
    methods:{
        seeMoreComment(){
            this.dialogComment = true
        },
        async getDegress(){
            this.loadingDegrees = true
            var response = await this.$provider.getDegress()
            if(response.status == 200){
                this.degrees = response.data._embedded.degrees
            }
            this.loadingDegrees = false
        },
        async getSubjects(){
            this.loadingSubject = true
            var response = await this.$provider.getSubjects(this.filterDegree)
            if (response.status == 200) {
                this.subjects = response.data._embedded.subjects
            }
            this.loadingSubject = false
        },
        async getTeachers(){
            var response = await this.$provider.getTeachers(this.filterTeacher)
            if(response.status == 200){
                this.teachers = response.data._embedded.professors
            }
            console.log(response);
        },
        activateHelperTeacher(){
            document.getElementById('listFilterTeacher').style.display = 'block';
        },
        changeFocusTeacher(){
            var showExtraTeacherData = this.showExtraTeacherData;
            window.addEventListener('click', function(e){   
            if (!document.getElementById('inputFilterTeacher').contains(e.target)){
                // Clicked in box
                document.getElementById('listFilterTeacher').style.display = 'none';
            }
            });
            this.showExtraTeacherData = showExtraTeacherData
        },
        selectTeacher(element){
            this.filterTeacher = element.full_name
        }
    }
}
</script>