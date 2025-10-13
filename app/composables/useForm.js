// /composables/useForm.js
import { useRoute } from '#imports'
import collect from 'collect.js'
import { computed, ref } from 'vue'

export function useForm() {

    const route = useRoute()

    // Computed property for the ID
    const id = computed(() => collect(route.params).first())
    
    // Form data state
    const form = ref({})

    return {
        id,
        form,
    }
}
