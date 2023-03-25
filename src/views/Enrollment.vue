<template>
    <v-container>
        <v-row>
            <v-col cols="12">
            <div class="d-flex align-center text-h5 primary--text font-weight-bold">
                <span>
                    Matrículas
                </span>
                <v-spacer></v-spacer>
                <v-btn depressed color="warning" class="mx-1" @click="dialogImport = true">
                    Importar
                </v-btn>
                <v-btn depressed color="warning" @click="dialog = true">
                    <v-icon small class="mr-1">
                        fas fa-plus
                    </v-icon>
                    Nuevo
                </v-btn>
            </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-title>
                        <v-spacer></v-spacer>
                        <v-text-field v-model="search" append-icon="fas fa-search" label="Search" hide-details>
                        </v-text-field>
                    </v-card-title>
                    <v-data-table :headers="headers" :items="items" :search="search">
                        <template v-slot:[`item.actions`]="{ item }">
                            <v-icon small class="mx-2">
                                far fa-eye
                            </v-icon>
                            <v-icon small class="mx-2" @click="editItem(item)">
                                far fa-edit
                            </v-icon>
                            <v-icon small @click="deleteItem(item)">
                                far fa-trash-alt
                            </v-icon>
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
        <v-dialog v-model="dialog" max-width="800" persistent>
            <v-card>
                <v-card-title class="d-flex justify-center primary--text text-h5 font-weight-bold">
                    Crear Matricula
                </v-card-title>
                <v-container>
                    <v-form>
                        <v-row>
                            <v-col cols="6" class="d-flex">
                                <v-text-field dense hide-details="auto" label="Identificaion" append-icon="fas fa-search"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field dense hide-details="auto" readonly label="Nombres"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field dense hide-details="auto" readonly label="Apellidos"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field dense hide-details="auto" readonly label="Correo Intitucional"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field dense hide-details="auto" readonly label="Correo Personal"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field dense hide-details="auto" readonly label="Direccion"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field dense hide-details="auto" readonly label="Telefono Movil"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field dense hide-details="auto" readonly label="Fecha Nacimiento"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field dense hide-details="auto" readonly label="Telefono Fijo"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field dense hide-details="auto" readonly label="Genero"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-form>
                    <v-data-table :headers="headerDialog" class="mt-4" dense :items="dialogItems">
                        <template v-slot:[`item.actions`]="{ item }">
                            <v-icon small class="mx-2" @click="addEnrolment(item)">
                                fas fa-plus-circle
                            </v-icon>
                        </template>
                    </v-data-table>
                </v-container>
                <v-card-actions class="d-flex justify-center">
                    <v-btn depressed>
                        Guardar
                    </v-btn>
                    <v-btn text @click="dialog = false">
                        Salir
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialogImport" max-width="400" persistent>
            <v-card>
                <v-card-title class="d-flex justify-center">
                    Importar Datos
                </v-card-title>
                <v-container>
                    <v-card outlined height="300" class="d-flex justify-center align-center">
                        Arrastre y suelte su archivo aqui
                    </v-card>
                </v-container>
                <v-card-actions class="d-flex justify-center">
                    <v-btn depressed>
                        Importar
                    </v-btn>
                    <v-btn text @click="dialogImport = false">
                        Salir
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
                dialogImport:false,
                headerDialog:[
                    {
                        text:'Fecha Matricula',
                        filterable:false,
                        sortable:false,
                        value:'enrollment'
                    },
                    {
                        text:'Titulación',
                        filterable:false,
                        sortable:false,
                        value:'title'
                    },
                    {
                        text:'Acciones',
                        filterable:false,
                        sortable:false,
                        value:'actions'
                    }
                ],
                dialogItems:[
                    {
                        enrollment:'20/07/22',
                        title:'Titulacion ejemplo'
                    }
                ],
                dialog:true,
                search: '',
                headers: [{
                        text: 'Nombre Completo',
                        align: 'start',
                        filterable: false,
                        value: 'completeName',
                    },
                    {
                        text: 'Correo Institucional',
                        value: 'institutionalEmail'
                    },
                    {
                        text: 'Identificacion',
                        value: 'detectionId'
                    },
                    {
                        text: 'Fecha Matricula',
                        value: 'enrollmentDate'
                    },
                    {
                        text: 'Acciones',
                        value: 'actions',
                        sortable: false,
                        align: 'center'
                    }
                ],
                items: [{
                    completeName: "Oliva Claúdia Frutos Hernandez",
                    institutionalEmail: "olivia.frutos@ejemplo.com",
                    detectionId: 'G54239652',
                    enrollmentDate: '16-12-2022'
                }, {
                    completeName: "Aurelio Pere Morcillo Perera",
                    institutionalEmail: "aurelio.mrcillo@ejemplo.com",
                    detectionId: 'P5234205B',
                    enrollmentDate: '16-12-2022'
                }, {
                    completeName: "Francisco Vidal Calero Ribas",
                    institutionalEmail: "vidal.calero@ejemplo.com",
                    detectionId: 'S0196965H',
                    enrollmentDate: '16-12-2022'
                }, {
                    completeName: "Maria-Jesus Fidalgo Cabanillas",
                    institutionalEmail: "maria.fidalgo@ejemplo.com",
                    detectionId: '03626091A',
                    enrollmentDate: '16-12-2022'
                }, {
                    completeName: "Herminia Azucena Bermudez Cabanillas",
                    institutionalEmail: "azusa.bermu@ejemplo.com",
                    detectionId: '18506066J',
                    enrollmentDate: '16-12-2022'
                }, {
                    completeName: "Adela Lucia Zambrano Becerra",
                    institutionalEmail: "adela.becerra@ejemplo.com",
                    detectionId: '50040025Y',
                    enrollmentDate: '16-12-2022'
                }, {
                    completeName: "Juan-Carlos Paredes Perera",
                    institutionalEmail: "juan.paredes@ejemplo.com",
                    detectionId: '55234800R',
                    enrollmentDate: '16-12-2022'
                }, {
                    completeName: "Arsenio Casilda Aguilera Sepulveda",
                    institutionalEmail: "arse.aguilera@ejemplo.com",
                    detectionId: '43561920N',
                    enrollmentDate: '16-12-2022'
                }, {
                    completeName: "Paulo Guillermo Castaño Pulido",
                    institutionalEmail: "paulo.castaño@ejemplo.com",
                    detectionId: '07063172X',
                    enrollmentDate: '16-12-2022'
                }, {
                    completeName: "Mayra Lorena Ramirez Fuentes",
                    institutionalEmail: "mayra.ramirez@ejemplo.com",
                    detectionId: '82823627Y',
                    enrollmentDate: '16-12-2022'
                }, {
                    completeName: "William Jonatan Seco Parrilla",
                    institutionalEmail: "william.seco@ejemplo.com",
                    detectionId: '34181854J',
                    enrollmentDate: '16-12-2022'
                }, {
                    completeName: "Paula Júlia Roig Bernabeu",
                    institutionalEmail: "paula.roig@ejemplo.com",
                    detectionId: '87054896B',
                    enrollmentDate: '16-12-2022'
                }, {
                    completeName: "John Giovanni Caceres Heredia",
                    institutionalEmail: "john.caceres@ejemplo.com",
                    detectionId: '50755447J',
                    enrollmentDate: '16-12-2022'
                }, {
                    completeName: "Mercedes Ariadna Mañas Maya",
                    institutionalEmail: "merce.manas@ejemplo.com",
                    detectionId: '35472990K',
                    enrollmentDate: '16-12-2022'
                }, {
                    completeName: "Teodora Candela Hermida Rey",
                    institutionalEmail: "teodora.hermi@ejemplo.com",
                    detectionId: '25818735Q',
                    enrollmentDate: '16-12-2022'
                }, {
                    completeName: "Martin Concepcio Sastre del Moral",
                    institutionalEmail: "martin.sastre@ejemplo.com",
                    detectionId: '58809462A',
                    enrollmentDate: '16-12-2022'
                }, ]

            }
        },
    }
</script>