<template>
    <client-only>
        <div class="gridTemplate">
            <h1>{{ title }}</h1>

            <div class="buttonsSlot pad">
                <slot class="buttonsSlot" name="buttons"></slot>
            </div>

            <div class="searchBox pad">
                <input type="text" placeholder="Buscar..." v-model="searchText" @input="onQuickFilterChanged" class="" />
            </div>

            <ag-grid-vue ref="agGrid" :localeText="localeText" @row-selected="onRowSelected" class="ag-theme-alpine" style="margin: 10px; width: calc(100% - 20px); height: 700px" :pagination="true" :rowSelection="rowSelection" :columnDefs="columnDefs" :rowData="rowData" @grid-ready="onGridReady" />
        </div>
    </client-only>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue3'
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'
import collect from 'collect.js'
ModuleRegistry.registerModules([AllCommunityModule])

export default {
    components: { AgGridVue },

    props: {
        columnDefs: { type: Array, required: true },
        rowData: { type: Array, required: true },
        title: { type: String, default: '' },
        mode: { type: String, default: 'multiRow' }, // "singleRow" ou "multiRow"
    },

    data() {
        return {
            searchText: '',
            rows: [],
            gridApi: null,
            gridColumnApi: null,
            rowSelection: {
                mode: this.mode ?? 'multiRow',
                enableClickSelection: true,
            },
            localeText: {
                // Paginação
                page: 'Página',
                of: 'de',
                to: 'até',
                more: 'mais',
                next: 'Próxima',
                last: 'Última',
                first: 'Primeira',
                previous: 'Anterior',

                // Filtros
                filterOoo: 'Filtrar...',
                equals: 'Igual',
                notEqual: 'Diferente',
                lessThan: 'Menor que',
                greaterThan: 'Maior que',
                lessThanOrEqual: 'Menor ou igual',
                greaterThanOrEqual: 'Maior ou igual',
                inRange: 'Entre',
                contains: 'Contém',
                notContains: 'Não contém',
                startsWith: 'Começa com',
                endsWith: 'Termina com',
                blank: 'Em branco',
                notBlank: 'Não em branco',

                // Geral
                noRowsToShow: 'Nenhum registro encontrado',
                loadingOoo: 'Carregando...',
            },
        }
    },

    methods: {
        handleSelectedRows(rows) {
            this.$emit('selectedRows', rows)
        },

        onRowSelected(event) {
            const selectedRows = event.api.getSelectedRows()
            this.$emit('selectedRows', collect(selectedRows))
        },

        getRowId(params) {
            return params.data.make + params.data.model
        },

        onGridReady(params) {
            this.gridApi = params.api
            this.gridColumnApi = params.columnApi
        },

        onQuickFilterChanged() {
            if (this.gridApi && this.searchText !== undefined) {
                this.gridApi.setGridOption('quickFilterText', this.searchText)
            }
        },
    },
}
</script>

<style lang="scss">
.gridTemplate {
    .pad {
        padding: 0 12px;
    }

    display: flex;
    flex-direction: column;
    gap: 5px;

    .buttonsSlot {
        display: flex;
        gap: 5px;
        width: max-content;
    }

    .searchBox {
        display: flex;
        input {
            padding: 5px;
            height: 25px;
            border-radius: 5px;
            outline: none;
            width: 60%;
            border: 1px solid #ccc;
        }
    }
}
</style>
