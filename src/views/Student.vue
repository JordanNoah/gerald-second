<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <div class="d-flex justify-space-between align-center text-h5 primary--text font-weight-bold">
                    <span>
                        Estudiantes
                    </span>
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
                            <v-icon small class="mx-2" @click="editItem(item)">
                                far fa-eye
                            </v-icon>
                            <v-icon small @click="deleteItem(item)">
                                far fa-trash-alt
                            </v-icon>
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
        <v-dialog v-model="dialog" max-width="800">
            <v-card>
                <v-card-title class="d-flex justify-center primary--text text-h5 font-weight-bold">
                    {{selectedStudent ? 'Editar Estudiante': 'Crear Estudiante'}}
                </v-card-title>
                <v-container>
                    <v-form>
                        <v-row>
                            <v-col cols="6">
                                <v-text-field v-model="student.name" dense hide-details="auto" label="Nombres">
                                </v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="student.surnames" dense hide-details="auto" label="Apellidos">
                                </v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="student.institutionalEmail" dense hide-details="auto"
                                    label="Correo Institucional"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="student.personalEmail" dense hide-details="auto"
                                    label="Correo Personal"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="student.address" dense hide-details="auto" label="Dirección">
                                </v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="student.personalId" dense hide-details="auto"
                                    label="Identificación"></v-text-field>
                            </v-col>
                            <v-col cols="6">

                                <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40"
                                    transition="scale-transition" offset-y min-width="auto">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field v-model="student.bornDate" dense label="Fecha Nacimiento" hide-details="auto" readonly v-bind="attrs" v-on="on">
                                        </v-text-field>
                                    </template>
                                    <v-date-picker v-model="student.bornDate" @input="menu2 = false"></v-date-picker>
                                </v-menu>
                                
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="student.movilPhone" dense hide-details="auto"
                                    label="Teléfono Móvil"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="student.phone" dense hide-details="auto" label="Teléfono Fijo">
                                </v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-select v-model="student.gender" hide-details="auto" dense :items="availableGenders" item-value="value" item-text="text" label="Género"></v-select>
                            </v-col>
                        </v-row>
                    </v-form>
                    <v-data-table :headers="headerDialog" class="mt-4" dense></v-data-table>
                </v-container>
                <v-card-actions class="d-flex justify-center">
                    <v-btn depressed @click="save()">
                        Guardar
                    </v-btn>
                    <v-btn text @click="dialog = false">
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
                availableGenders:[
                    {text:'Masculino',value:'masculine'},
                    {text:'Femenino',value:'femenine'}
                ],
                menu2:false,
                student:{
                    name: null,
                    surnames: null,
                    institutionalEmail: null,
                    personalEmail: null,
                    address: null,
                    personalId: null,
                    bornDate: null,
                    movilPhone: null,
                    phone: null,
                    gender: null
                },
                headerDialog:[
                    {
                        text:'Fecha Matricula',
                        filterable:false,
                        sortable:false
                    },
                    {
                        text:'Titulación',
                        filterable:false,
                        sortable:false
                    },
                    {
                        text:'Acciones',
                        filterable:false,
                        sortable:false
                    }
                ],
                dialog:false,
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
                        text: 'Telefono Principal',
                        value: 'mainPhone'
                    },
                    {
                        text: 'Acciones',
                        value: 'actions',
                        sortable: false,
                        align: 'center'
                    }
                ],
                items: [{
                    names:'Oliva Claúdia',
                    surnames:'Frutos Hernandez',
                    gender:'masculine',
                    bornDate:'2023-03-11',
                    completeName: "Oliva Claúdia Frutos Hernandez",
                    institutionalEmail: "olivia.frutos@ejemplo.com",
                    detectionId: 'G54239652',
                    mainPhone: ''
                }, {
                    names:'Aurelio Pere',
                    surnames:'Morcillo Perera',
                    gender:'masculine',
                    bornDate:'2023-03-11',
                    completeName: "Aurelio Pere Morcillo Perera",
                    institutionalEmail: "aurelio.mrcillo@ejemplo.com",
                    detectionId: 'P5234205B',
                    mainPhone: '9792108863'
                }, {
                    names:'Francisco Vidal',
                    surnames:'Calero Ribas',
                    gender:'masculine',
                    bornDate:'2023-03-11',
                    completeName: "Francisco Vidal Calero Ribas",
                    institutionalEmail: "vidal.calero@ejemplo.com",
                    detectionId: 'S0196965H',
                    mainPhone: '2273842412'
                }, {
                    names:'Maria-Jesus',
                    surnames:'Fidalgo Cabanillas',
                    gender:'masculine',
                    bornDate:'2023-03-11',
                    completeName: "Maria-Jesus Fidalgo Cabanillas",
                    institutionalEmail: "maria.fidalgo@ejemplo.com",
                    detectionId: '03626091A',
                    mainPhone: '9882204594'
                }, {
                    names:'Herminia Azucena',
                    surnames:'Bermudez Cabanillas',
                    gender:'masculine',
                    bornDate:'2023-03-11',
                    completeName: "Herminia Azucena Bermudez Cabanillas",
                    institutionalEmail: "azusa.bermu@ejemplo.com",
                    detectionId: '18506066J',
                    mainPhone: '8739525888'
                }, {
                    names:'Adela Lucia',
                    surnames:'Zambrano Becerra',
                    gender:'masculine',
                    bornDate:'2023-03-11',
                    completeName: "Adela Lucia Zambrano Becerra",
                    institutionalEmail: "adela.becerra@ejemplo.com",
                    detectionId: '50040025Y',
                    mainPhone: '6190332621'
                }, {
                    names:'Juan-Carlos',
                    surnames:'Paredes Perera',
                    gender:'masculine',
                    bornDate:'2023-03-11',
                    completeName: "Juan-Carlos Paredes Perera",
                    institutionalEmail: "juan.paredes@ejemplo.com",
                    detectionId: '55234800R',
                    mainPhone: '0461810348'
                }, {
                    names:'Arsenio Casilda',
                    surnames:'Aguilera Sepulveda',
                    gender:'masculine',
                    bornDate:'2023-03-11',
                    completeName: "Arsenio Casilda Aguilera Sepulveda",
                    institutionalEmail: "arse.aguilera@ejemplo.com",
                    detectionId: '43561920N',
                    mainPhone: '7869357264'
                }, {
                    names:'Paulo Guillermo',
                    surnames:'Castaño Pulido',
                    gender:'masculine',
                    bornDate:'2023-03-11',
                    completeName: "Paulo Guillermo Castaño Pulido",
                    institutionalEmail: "paulo.castaño@ejemplo.com",
                    detectionId: '07063172X',
                    mainPhone: '5479631882'
                }, {
                    names:'Mayra Lorena',
                    surnames:'Ramirez Fuentes',
                    gender:'masculine',
                    bornDate:'2023-03-11',
                    completeName: "Mayra Lorena Ramirez Fuentes",
                    institutionalEmail: "mayra.ramirez@ejemplo.com",
                    detectionId: '82823627Y',
                    mainPhone: '4416550468'
                }, {
                    names:'William Jonatan',
                    surnames:'Seco Parrilla',
                    gender:'masculine',
                    bornDate:'2023-03-11',
                    completeName: "William Jonatan Seco Parrilla",
                    institutionalEmail: "william.seco@ejemplo.com",
                    detectionId: '34181854J',
                    mainPhone: '5628304589'
                }, {
                    names:'Paula Júlia',
                    surnames:'Roig Bernabeu',
                    gender:'masculine',
                    bornDate:'2023-03-11',
                    completeName: "Paula Júlia Roig Bernabeu",
                    institutionalEmail: "paula.roig@ejemplo.com",
                    detectionId: '87054896B',
                    mainPhone: '5335598629'
                }, {
                    names:'John Giovanni',
                    surnames:'Caceres Heredia',
                    gender:'masculine',
                    bornDate:'2023-03-11',
                    completeName: "John Giovanni Caceres Heredia",
                    institutionalEmail: "john.caceres@ejemplo.com",
                    detectionId: '50755447J',
                    mainPhone: '4498478573'
                }, {
                    names:'Mercedes Ariadna',
                    surnames:'Mañas Maya',
                    gender:'masculine',
                    bornDate:'2023-03-11',
                    completeName: "Mercedes Ariadna Mañas Maya",
                    institutionalEmail: "merce.manas@ejemplo.com",
                    detectionId: '35472990K',
                    mainPhone: '9259708603'
                }, {
                    names:'Teodora Candela',
                    surnames:'Hermida Rey',
                    gender:'masculine',
                    bornDate:'2023-03-11',
                    completeName: "Teodora Candela Hermida Rey",
                    institutionalEmail: "teodora.hermi@ejemplo.com",
                    detectionId: '25818735Q',
                    mainPhone: '3852714758'
                }, {
                    names:'Martin Concepcio',
                    surnames:'Sastre del',
                    gender:'masculine',
                    bornDate:'2023-03-11',
                    completeName: "Martin Concepcio Sastre del Moral",
                    institutionalEmail: "martin.sastre@ejemplo.com",
                    detectionId: '58809462A',
                    mainPhone: '4752519929'
                }, ],
                selectedStudent:null,
            }
        },
        methods:{
            editItem(item){
                this.selectedStudent = item.detectionId
                this.student.name = item.names
                this.student.surnames = item.surnames
                this.student.institutionalEmail = item.institutionalEmail
                this.student.personalEmail = item.personalEmail
                this.student.address = item.address
                this.student.personalId = item.detectionId
                this.student.bornDate = item.bornDate
                this.student.movilPhone = item.movilPhone
                this.student.phone = item.mainPhone
                this.student.gender = item.gender
                this.dialog = true
            },
            save(){
                console.log(this.student);
            }
        }
    }
</script>