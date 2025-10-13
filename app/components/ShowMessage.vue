<template>
    <div>
        <!-- Notification component -->
        <div 
            v-if="notification.show" 
            :class="['notification', notification.type]" 
            v-html="notification.message">
        </div>

        <Form 
            :title="'Meu Formulário'" 
            :id="123"
            @show-notification="handleNotification"
        >
            <!-- conteúdo do form -->
        </Form>
    </div>
</template>

<script setup lang="ts">
import { useGlobals } from '../composables/useGlobals'

const { showNotification, notification } = useGlobals()

const handleNotification = (message: string, type: string = 'info', timeout: number = 3000) => {
    showNotification(message, type, timeout)
}
</script>

<style scoped>
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    border-radius: 4px;
    z-index: 1000;
    min-width: 200px;
    max-width: 400px;
}

.info {
    background-color: #2196F3;
    color: white;
}

.success {
    background-color: #4CAF50;
    color: white;
}

.error {
    background-color: #F44336;
    color: white;
}

.warning {
    background-color: #FF9800;
    color: white;
}
</style>