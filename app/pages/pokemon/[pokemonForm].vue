<template>
    <div>
        <Form :title="`Formulário do Pokémon ${id}`" :id="id">
            <Input v-model="form.name" disabled label="<i class='fa-solid fa-pen'></i> Nome" />
            <Input width="50%" required v-model="form.name" label="Nome" type="boolean"/>
            <Switch v-model="form.is_default" label="É o padrão?" />

            <template #footer>
                <div class="footer">Rodapé customizado do Formulário</div>
            </template>
        </Form>
    </div>
</template>

<script>
import { getPokemonById } from '~/services/pokemon'

export default {
    data() {
        return {
            id: useFormId(),
            form: {},
        }
    },

    mounted() {
        this.fetchPokemon()
    },

    methods: {
        async fetchPokemon() {
            return await getPokemonById(this.id).then((r) => {
                this.form = r
            })
        },
    },
}
</script>
