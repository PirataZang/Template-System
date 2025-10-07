// /composables/useFormId.js
import { useRoute } from '#imports'
import collect from 'collect.js'

export function useFormId() {
    const route = useRoute()
    const id = collect(route.params).first()
    return id 
}
