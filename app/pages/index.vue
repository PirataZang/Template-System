<template>
    <div>
        <span>HomePage</span>

        <Grid @selectedRows="selected = $event" :columnDefs="columnDefs" animateRows="true" :rowData="rowData" title="Teste de Lib de Grid">
            <template #buttons>
                <button @click="alert('Another Button in header slot clicked!')">Another Button</button>

                <button @click="open = true">Abrir Modal</button>

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
    name: 'HomePage',

    mounted() {
        this.loadData()
    },

    data() {
        return {
            rowData: [],
            selected: null,
            open: false,

            columnDefs: [
                { field: 'name', headerName: 'Nome', sortable: true, filter: true },
                { field: 'url', headerName: 'URL', sortable: true, filter: true },
            ],
        }
    },

    methods: {
        async loadData() {
            const data = await getPokemons(100)
            return (this.rowData = data)
        },

        alert() {
            window.alert(`O Pokemon selecionado é: ${collect(this.selected).pluck('name').join(', ')}`)
        },
    },
}
</script>
