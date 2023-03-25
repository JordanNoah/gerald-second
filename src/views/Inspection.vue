<template>
    <v-container>
        <v-row>
            <v-col cols="12">
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
            <v-col cols="12">
                <v-card>
                    <v-card-title>
                        <v-spacer></v-spacer>
                        <v-text-field v-model="search" append-icon="fas fa-search" label="Search" hide-details></v-text-field>
                    </v-card-title>
                    <v-data-table :headers="headers" :items="items" :search="search">
                        <template v-slot:[`item.score`]="{ item }">
                            <div style="max-width:100px">
                                <v-select :items="itemSelect" dense hide-details item-text="name" v-model="item.score"></v-select>
                            </div>
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
                <v-card-title class="d-flex justify-center primary--text">
                    Consultar descripción de la solicitud
                </v-card-title>
                <v-container>
                    <p>
                        <b>
                            Razon:
                        </b>
                        <span>
                            Inconsistencia en notas
                        </span>
                    </p>
                    <v-textarea outlined readonly auto-grow hide-details></v-textarea>
                </v-container>
                <v-card-actions class="d-flex justify-center">
                    <v-btn depressed @click="dialogComment = false" color="primary">
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
            itemSelect: [{
                    name: 'Revisada'
                },
                {
                    name: 'Algo mas'
                }
            ],
            dialogComment: false,
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
                    text: 'Fecha',
                    filterable: false,
                    sortable: false,
                    value: 'date'
                },
                {
                    text: 'Estado',
                    filterable: false,
                    sortable: false,
                    value: 'score',
                    align: 'start'
                },
                {
                    text: 'Descripcion',
                    filterable: false,
                    sortable: false,
                    value: 'coments',
                    align: 'center'
                }
            ],
            items: [{
                    asignatura: 'matemáticas II',
                    profesor: 'Emilio Daniela Galindo Navarro',
                    grupo: 'AJ-001',
                    score: 'Revisada',
                    date: '16-02-2023'
                },
                {
                    asignatura: 'ingles i',
                    profesor: 'Meritxell Angelina Olmedo Rial',
                    grupo: 'AJ-001',
                    score: 'Revisada',
                    date: '14-02-2023'
                },
                {
                    asignatura: 'simulación de sistemas',
                    profesor: 'Sabina Joana Giner Arnaiz',
                    grupo: 'AJ-002',
                    score: 'Revisada',
                    date: '14-02-2023'
                },
                {
                    asignatura: 'lenguaje y comunicación',
                    profesor: 'Gonzalo Gracia Pérez Herrero',
                    grupo: 'AJ-001',
                    score: 'Revisada',
                    date: '09-02-2023'
                },
                {
                    asignatura: 'simulación de sistemas',
                    profesor: 'Thais Nina Jover Aguado',
                    grupo: 'AJ-001',
                    score: 'Revisada',
                    date: '09-02-2023'
                },
                {
                    asignatura: 'matemáticas II',
                    profesor: 'Maria-Emilia Montilla Pérez',
                    grupo: 'AJ-002',
                    score: 'Revisada',
                    date: '18-02-2023'
                },
                {
                    asignatura: 'matemáticas II',
                    profesor: 'Teodora Gines Baeza Martnez',
                    grupo: 'AJ-003',
                    score: 'Revisada',
                    date: '06-02-2023'
                },
                {
                    asignatura: 'ingles i',
                    profesor: 'Sarah Alex Martín Baez',
                    grupo: 'AJ-002',
                    score: 'Revisada',
                    date: '12-02-2023'
                },
                {
                    asignatura: 'simulación de sistemas',
                    profesor: 'Roman Claudio Barranco Roig',
                    grupo: 'AJ-002',
                    score: 'Revisada',
                    date: '04-02-2023'
                },
                {
                    asignatura: 'simulación de sistemas',
                    profesor: 'Montse Mia Vera Prado',
                    grupo: 'AJ-004',
                    score: 'Revisada',
                    date: '11-02-2023'
                },
                {
                    asignatura: 'lenguaje y comunicación',
                    profesor: 'Óscar Abraham Vegas Mesa',
                    grupo: 'AJ-004',
                    score: 'Revisada',
                    date: '16-02-2023'
                },
                {
                    asignatura: 'matemáticas II',
                    profesor: 'Concepcio Fidel Olmos Sastre',
                    grupo: 'AJ-004',
                    score: 'Revisada',
                    date: '09-02-2023'
                },
                {
                    asignatura: 'Inteligencia artificial',
                    profesor: 'Palmira Fatima Prado Machado',
                    grupo: 'AJ-003',
                    score: 'Revisada',
                    date: '13-02-2023'
                },
                {
                    asignatura: 'lenguaje y comunicación',
                    profesor: 'Daniel Fulgencio Angulo Llanos',
                    grupo: 'AJ-003',
                    score: 'Revisada',
                    date: '19-02-2023'
                },
                {
                    asignatura: 'simulación de sistemas',
                    profesor: 'Adriana Aurelio Grau Villaverde',
                    grupo: 'AJ-003',
                    score: 'Revisada',
                    date: '12-02-2023'
                },
                {
                    asignatura: 'ingles i',
                    profesor: 'Rebeca Ainara Castañeda Cañizares',
                    grupo: 'AJ-002',
                    score: 'Revisada',
                    date: '05-02-2023'
                }
            ]
        }
    },
    methods: {
        seeMoreComment() {
            this.dialogComment = true
        }
    }
}
</script>