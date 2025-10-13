import { ref } from 'vue'

// Define notification types
type NotificationType = 'info' | 'success' | 'error' | 'warning'

// Define notification interface
interface NotificationState {
    show: boolean
    message: string
    type: string
    timeout: number
}

export function useGlobals() {
    // Notification state with type
    const notification = ref<NotificationState>({
        show: false,
        message: '',
        type: 'info',
        timeout: 3000,
    })

    // Show notification method with typed parameters
    const showNotification = (message: string, type: NotificationType = 'info', timeout: number = 3000): void => {
        notification.value = {
            show: true,
            message,
            type,
            timeout,
        }

        setTimeout(() => {
            notification.value.show = false
        }, timeout)
    }

    return {
        notification,
        showNotification,
    }
}
