<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <div class="d-flex align-center text-h5 primary--text font-weight-bold">
                    <span class="mr-2">
                        Tutorias
                    </span>
                    <v-btn text small>
                        2021-2022
                    </v-btn>
                    <v-spacer></v-spacer>
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
        <v-dialog v-model="dialogTutorialsEdit">
            <v-card>
                <v-card-title class="d-flex justify-center primary--text">
                    Editar Tutoría
                </v-card-title>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            dialogTutorialsEdit:false,
            headers: [{
                    text: 'Nombre Completo',
                    value: 'completeName'
                },
                {
                    text: 'Correo Institucional',
                    value: 'institutionalMail'
                },
                {
                    text: 'Teléfono',
                    value: 'phone'
                },
                {
                    text: 'Identificacion',
                    value: 'identification'
                },
                {
                    text: 'Acciones',
                    value: 'actions',
                    align:'center'
                }
            ],
            items: []
        }
    },
    methods:{
        getTutorships:{
            
        }
    }
}
</script>