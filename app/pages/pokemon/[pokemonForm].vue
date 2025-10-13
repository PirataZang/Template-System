<template>
    <div>
        <Form :form="form" :title="`Formulário do Pokémon ${id}`" :id="id" ref="pokemonForm">
            <Input v-model="form.name" disabled label="<i class='fa-solid fa-pen'></i> Nome" />
            <Input width="50%" required v-model="form.name" label="Nome" type="boolean" />
            <Switch v-model="form.is_default" label="É o padrão?" />

            <template #footer>
                <Button label="Salvar" color="green" @click="handleSave" />
                <Button label="Mostrar Notificação" @click="showExample" />
            </template>

            <div v-if="notification.show" :class="['notification', notification.type]" v-html="notification.message"></div>
        </Form>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { getPokemonById } from '~/services/pokemon' // Make sure this path is correct

// Use the composable and destructure needed properties
const { id, form, showNotification, notification } = useForm()

// Define the fetch function using the Pokemon API
const fetchPokemon = async () => {
    if (!id.value) return // Add guard clause

    try {
        const response = await getPokemonById(id.value)
        if (response) {
            form.value = response
        }
    } catch (error) {
        console.error('Error fetching Pokemon:', error)
    }
}

const showExample = () => {
    showNotification('Esta é uma notificação de sucesso!', 'success', 100000)
}

// Call fetchPokemon when component is mounted
onMounted(fetchPokemon)
</script>
