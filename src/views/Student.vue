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
                    <v-data-table :loading="loading" :headers="headers" :items="items" :search="search">
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
        <v-dialog v-model="dialog" max-width="800" @click:outside="closeDialog">
            <v-card>
                <v-card-title class="d-flex justify-center primary--text text-h5 font-weight-bold">
                    {{selectedStudent ? 'Editar Estudiante': 'Crear Estudiante'}}
                </v-card-title>
                <v-container>
                    <v-form>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field v-model="student.fullName" dense hide-details="auto" label="Full name">
                                </v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="student.institutionalEmail" dense hide-details="auto"
                                    label="Correo Institucional"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="student.landlineNumber" dense hide-details="auto" label="Teléfono Fijo">
                                </v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="student.movilPhone" dense hide-details="auto"
                                    label="Teléfono Móvil"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="student.personalId" dense hide-details="auto"
                                    label="Identificación"></v-text-field>
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
                    fullName: null,
                    institutionalEmail: null,
                    landlineNumber: null,
                    movilPhone: null,
                    personalId: null,
                    personalEmail: null
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
                        value: 'full_name',
                    },
                    {
                        text: 'Correo Institucional',
                        value: 'institutional_email'
                    },
                    {
                        text: 'Identificacion',
                        value: 'national_identification_number'
                    },
                    {
                        text: 'Telefono Principal',
                        value: 'mobile_number'
                    },
                    {
                        text: 'Acciones',
                        value: 'actions',
                        sortable: false,
                        align: 'center'
                    }
                ],
                items: [],
                selectedStudent:null,
                loading:false
            }
        },
        mounted:function(){
            this.getData()
        },
        methods:{
            closeDialog(){
                this.selectedStudent = null;
                this.student.fullName = null;
                this.student.institutionalEmail = null;
                this.student.landlineNumber = null;
                this.student.movilPhone = null;
                this.student.personalId = null;
                this.student.personalEmail = null;
                this.student.address = null;
                this.student.bornDate = null;
                this.student.gender = null;
            },
            async getData(){
                this.loading = true
                var response = await this.$provider.getStudents()
                this.items = response.data._embedded.students
                this.loading = false
            },
            editItem(item){
                console.log(item);
                this.selectedStudent = item.id
                this.student.fullName = item.full_name
                this.student.institutionalEmail = item.institutional_email
                this.student.landlineNumber = item.landline_number
                this.student.movilPhone = item.mobile_number
                this.student.personalId = item.national_identification_number
                this.student.personalEmail = item.personal_email
                this.student.address = item.address
                this.student.bornDate = item.bornDate
                this.student.gender = item.gender
                this.dialog = true
            },
            async save(){
                var body = new Object()
                body.full_name = this.student.fullName
                body.institutional_email = this.student.institutionalEmail
                body.personal_email = this.student.personalEmail
                body.landline_number = this.student.landlineNumber
                body.mobile_number = this.student.movilPhone
                body.identification_card = this.student.personalId
                body.address = this.student.address
                body.bornDate = this.student.bornDate
                body.gender = this.student.gender

                var response = await this.$provider.postStudent(body)

                if(response.status == 201){
                    this.getData()
                }
            }
        }
    }
</script>