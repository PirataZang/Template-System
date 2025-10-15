<template>
    <Grid @selectedRows="selected = $event" :columnDefs="columnDefs" :rowData="dataRows" animateRows="true" title="Lista de produtos" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import collect from 'collect.js'
import { getProducts } from '~/services/products'

const dataRows = ref([])
const selected = ref([])

const columnDefs = [
    { field: 'id2', headerName: 'id', sortable: true, filter: true },
    { field: 'title', headerName: 'Produto', width: 300, sortable: true, filter: true },
    { field: 'quantity', headerName: 'Estoque', width: 300, sortable: true, filter: true },
    { field: 'price', headerName: 'Preço', width: 300, sortable: true, filter: true },
    {
        field: 'created',
        headerName: 'Data de criação',
        width: 150,
        sortable: true,
        filter: true,
        valueFormatter: (params) => {
            if (!params.value) return ''
            const date = new Date(params.value)
            const day = String(date.getDate()).padStart(2, '0')
            const month = String(date.getMonth() + 1).padStart(2, '0') // mês começa do 0
            const year = date.getFullYear()
            return `${day}/${month}/${year}`
        },
    },
]

const reload = async () => {
    try {
        const products = await getProducts(50)
        dataRows.value = products
        debugger
    } catch (err) {
        console.error('Erro ao carregar produtos:', err)
    }
}

onMounted(() => {
    reload()
})
</script>
