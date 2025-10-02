<template>
    <div>
        <span>HomePage</span>
        <Grid @selectedRows="selected = $event" :columnDefs="columnDefs" animateRows="true" :rowData="rowData" title="Teste de Lib de Grid">
            <template #buttons>
                <button @click="alert('Another Button in header slot clicked!')">Another Button</button>
            </template>
        </Grid>
    </div>
</template>
<script>
export default {
    name: 'HomePage',

    setup() {
        const columnDefs = [
            { field: 'make', title: 'juju', sortable: true, filter: true, autoSizePadding: '20' },
            { field: 'model', sortable: true, filter: true },
            { field: 'price', sortable: true, filter: true },
            { field: 'price_text', headerName: 'Preço', sortable: true, filter: true },
        ]

        const rowData = [
            { make: 'Toyota', model: 'Celica', price: 35000 },
            { make: 'Ford', model: 'Mondeo', price_text: '32.567,99' },
            { make: 'Porsche', model: 'Boxster', price: 72000 },
        ]

        return {
            columnDefs,
            rowData,
        }
    },

    data() {
        return {
            selected: null,
        }
    },

    methods: {
        alert(message) {
            window.alert(message)
        },
    },
}
</script>
