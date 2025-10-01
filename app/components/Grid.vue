<template>
    <div>
        <h1>{{ title }}</h1>
        <slot name="buttons"></slot>
        <ag-grid-vue @row-selected="onRowSelected" class="ag-theme-alpine" style="margin: 10px; width: calc(100% - 20px); height: 700px" :pagination="true" :rowSelection="rowSelection" :columnDefs="columnDefs" :rowData="rowData" />
    </div>
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
            rows: [],
            rowSelection: {
                mode: this.mode ?? 'multiRow',
                enableClickSelection: true,
            },
        }
    },

    methods: {
        handleSelectedRows(rows) {
            this.$emit('selectedRows', rows);
        },

        onRowSelected(event) {
            const selectedRows = event.api.getSelectedRows();
            this.$emit('selectedRows', selectedRows);
        },

        getRowId(params) {
            return params.data.make + params.data.model
        },
    },
}
</script>
