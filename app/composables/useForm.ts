import { useRoute } from '#imports'
import collect from 'collect.js'
import { computed, ref } from 'vue'
import { useGlobals } from './useGlobals'

// Interface para o form
interface FormData {
    [key: string]: any
}

// Interface para o retorno da função
interface UseFormReturn {
    id: ComputedRef<string | undefined>
    form: Ref<FormData>
    notification: ReturnType<typeof useGlobals>['notification']
    showNotification: ReturnType<typeof useGlobals>['showNotification']
}

export function useForm(): UseFormReturn {
    const route = useRoute()
    const { notification, showNotification } = useGlobals()

    // Form data state com tipo
    const form = ref<FormData>({})

    // Computed property for the ID com tipo
    const id = computed<string | undefined>(() => {
        const params = route.params as Record<string, string>
        return collect(params).first() as string | undefined
    })

    return {
        id,
        form,
        notification,
        showNotification,
    }
}
