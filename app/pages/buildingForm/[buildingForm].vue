<template>
    <div>
        <h1>Formulário de Building do ID: {{ id }}</h1>
    </div>
</template>

<script setup>
const route = useRoute()
const id = route.params.buildingForm
</script>
