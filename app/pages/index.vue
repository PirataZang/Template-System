<template>
    <div class="principalPanel">
        <div class="panel-lg">
            <div class="desc">
                <h1 class="descTitle">Template de Sistema Pré-Pronto</h1>
                <span class="description">Nosso sistema CRM pré-pronto foi desenvolvido para ajudar empresas a organizar e gerenciar seus clientes de forma prática e eficiente. Ele já vem com funcionalidades prontas, como cadastro de contatos, acompanhamento de vendas, histórico de interações e relatórios automáticos — tudo em uma interface simples e intuitiva. Ideal pra quem quer começar rápido sem precisar desenvolver tudo do zero. 🚀</span>
            </div>
        </div>
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
                { field: 'url', headerName: 'URL', width: 300, sortable: true, filter: true },
            ],
        }
    },

    methods: {
        async loadData() {
            const data = await getPokemons(1000)
            return (this.rowData = data)
        },

        alert() {
            window.alert(`O Pokemon selecionado é: ${collect(this.selected).pluck('name').join(', ')}`)
        },
    },
}
</script>

<style lang="scss" scoped>
.principalPanel {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .panel-lg {
        background-color: rgb(172, 172, 172);
        padding: 10px;
        border-radius: 10px;

        .desc {
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: center;

            .descTitle {
                font-size: 1.5rem;
                font-weight: bold;
            }

            .description {
                text-align: justify;
                padding: 25px;
            }
        }
    }
}
</style>
