<template>
    <div>
        <Form :title="`Formulário do Pokémon ${id}`" :id="id" ref="pokemonForm">
            <Input v-model="form.name" disabled label="<i class='fa-solid fa-pen'></i> Nome" />
            <Input width="50%" required v-model="form.name" label="Nome" type="boolean" />
            <Switch v-model="form.is_default" label="É o padrão?" />

            <template #footer>
                <div class="footer">Rodapé customizado do Formulário</div>
            </template>
        </Form>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { getPokemonById } from '~/services/pokemon' // Make sure this path is correct

// Use the composable and destructure needed properties
const { id, form } = useForm()

debugger

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

// Call fetchPokemon when component is mounted
onMounted(fetchPokemon)
</script>
