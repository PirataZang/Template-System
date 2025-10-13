<template>
    <div>
        <Grid @selectedRows="selected = $event" :columnDefs="columnDefs" animateRows="true" :rowData="rowData" title="Lista de Pokemons">
            <template #buttons>
                <LinkPage label="Dados do Pokémon" :disabled="selected?.count() != 1" :to="`pokemon/${selected?.first()?.id}`" ></LinkPage>
                <Button label="Alerta de pokemon" @click="alert" />

                <Modal :show="open" title="Exemplo de Modal" @close="open = false">
                    <p>Conteúdo do modal aqui...</p>
                    <button>Outro Botão</button>
                    <input type="text" placeholder="Input dentro do modal" />
                    <template #footer>
                        <button @click="open = false">Fechar</button>
                    </template>
                </Modal>
            </template>
        </Grid>
    </div>
</template>

<script>
import collect from 'collect.js'
import { getPokemons } from '~/services/pokemon'

export default {
    name: 'Menu 1',

    mounted() {
        this.loadData()
    },

    data() {
        return {
            rowData: [],
            selected: null,
            open: false,

            columnDefs: [
                { field: 'id', headerName: 'Id', sortable: true, filter: true },
                { field: 'name', headerName: 'Nome', sortable: true, filter: true },
                { field: 'url', headerName: 'URL', width: 300, sortable: true, filter: true },
            ],
        }
    },

    methods: {
        async loadData() {
            let data = await getPokemons(1000)
            data = collect(data).map((item) => {
                item.id = item.url.split('/')[item.url.split('/').length - 2]
                return item
            }).all()

            return (this.rowData = data)
        },

        alert() {
            debugger
            window.alert(`O Pokemon selecionado é: ${collect(this.selected).pluck('name').join(', ')}`)
        },
    },
}
</script>
