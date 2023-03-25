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
            dialogTutorialsEdit:true,
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
            items: [{
                    completeName: 'Oliva Claúdia Frutos Hernandez',
                    institutionalMail: 'olivia.frutos@ejemplo.com',
                    phone: '0475824222',
                    identification: 'G54239652'
                },
                {
                    completeName: 'Aurelio Pere Morcillo Perera',
                    institutionalMail: 'aurelio.mrcillo@ejemplo.com',
                    phone: '9792108863',
                    identification: 'P5234205B'
                },
                {
                    completeName: 'Francisco Vidal Calero Ribas',
                    institutionalMail: 'vidal.calero@ejemplo.com',
                    phone: '2273842412',
                    identification: 'S0196965H'
                },
                {
                    completeName: 'Maria-Jesus Fidalgo Cabanillas',
                    institutionalMail: 'maria.fidalgo@ejemplo.com',
                    phone: '9882204594',
                    identification: '03626091A'
                },
                {
                    completeName: 'Herminia Azucena Bermudez Caba',
                    institutionalMail: 'azusa.bermu@ejemplo.com',
                    phone: '8739525888',
                    identification: '18506066J'
                },
                {
                    completeName: 'Adela Lucia Zambrano Becerra',
                    institutionalMail: 'adela.becerra@ejemplo.com',
                    phone: '6190332621',
                    identification: '50040025Y'
                },
                {
                    completeName: 'Juan-Carlos Paredes Perera',
                    institutionalMail: 'juan.paredes@ejemplo.com',
                    phone: '0461810348',
                    identification: '55234800R'
                },
                {
                    completeName: 'Arsenio Casilda Aguilera Sepulveda',
                    institutionalMail: 'arse.aguilera@ejemplo.com',
                    phone: '7869357264',
                    identification: '43561920N'
                },
                {
                    completeName: 'Paulo Guillermo Castaño Pulido',
                    institutionalMail: 'paulo.castaño@ejemplo.com',
                    phone: '5479631882',
                    identification: '07063172X'
                },
                {
                    completeName: 'Mayra Lorena Ramirez Fuentes',
                    institutionalMail: 'mayra.ramirez@ejemplo.com',
                    phone: '4416550468',
                    identification: '82823627Y'
                },
                {
                    completeName: 'William Jonatan Seco Parrilla',
                    institutionalMail: 'william.seco@ejemplo.com',
                    phone: '5628304589',
                    identification: '34181854J'
                },
                {
                    completeName: 'Paula Júlia Roig Bernabeu',
                    institutionalMail: 'paula.roig@ejemplo.com',
                    phone: '5335598629',
                    identification: '87054896B'
                },
                {
                    completeName: 'John Giovanni Caceres Heredia',
                    institutionalMail: 'john.caceres@ejemplo.com',
                    phone: '4498478573',
                    identification: '50755447J'
                },
                {
                    completeName: 'Mercedes Ariadna Mañas Maya',
                    institutionalMail: 'merce.manas@ejemplo.com',
                    phone: '9259708603',
                    identification: '35472990K'
                },
                {
                    completeName: 'Teodora Candela Hermida Rey',
                    institutionalMail: 'teodora.hermi@ejemplo.com',
                    phone: '3852714758',
                    identification: '25818735Q'
                },
                {
                    completeName: 'Martin Concepcio Sastre del Moral',
                    institutionalMail: 'martin.sastre@ejemplo.com',
                    phone: '4752519929',
                    identification: '58809462A'
                }
            ]
        }
    }
}
</script>