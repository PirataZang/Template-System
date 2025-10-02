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

            <ag-grid-vue ref="agGrid" :localeText="localeText"  @row-selected="onRowSelected" class="ag-theme-alpine" style="margin: 10px; width: calc(100% - 20px); height: 700px" :pagination="true" :rowSelection="rowSelection" :columnDefs="columnDefs" :rowData="rowData" @grid-ready="onGridReady" />
        </div>
    </client-only>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue3'
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'
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
                // Filtros
                equals: 'Igual a',
                notEqual: 'Diferente de',
                lessThan: 'Menor que',
                lessThanOrEqual: 'Menor ou igual a',
                greaterThan: 'Maior que',
                greaterThanOrEqual: 'Maior ou igual a',
                inRange: 'Entre',
                blank: 'Vazio',
                notBlank: 'Não vazio',

                // Text filter
                filterOoo: 'Filtrar...',

                // Menu
                contains: 'Contém',
                notContains: 'Não contém',
                startsWith: 'Começa com',
                endsWith: 'Termina com',

                // Botões
                applyFilter: 'Aplicar',
                resetFilter: 'Redefinir',
                clearFilter: 'Limpar',
                cancel: 'Cancelar',
            },
        }
    },

    methods: {
        handleSelectedRows(rows) {
            this.$emit('selectedRows', rows)
        },

        onRowSelected(event) {
            const selectedRows = event.api.getSelectedRows()
            this.$emit('selectedRows', selectedRows)
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
