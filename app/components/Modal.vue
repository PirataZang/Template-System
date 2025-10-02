<template>
    <div v-if="show" class="backdrop" @click.self="close">
        <div class="modal">
            <header class="modal-header">
                <h3>{{ title }}</h3>
                <button class="close-btn" @click="close"><i class="fa-solid fa-xmark"></i></button>
            </header>

            <div class="modal-body">
                <slot />
            </div>

            <footer class="modal-footer">
                <slot name="footer">
                    <button @click="close">Fechar</button>
                </slot>
            </footer>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    show: { type: Boolean, default: false },
    title: { type: String, default: 'Modal' },
})

const emit = defineEmits(['close'])

function close() {
    emit('close')
}
</script>

<style lang="scss">
.backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
}

.modal {
    background: #fff;
    border-radius: 10px;
    min-width: 400px;
    max-width: 90%;
    box-shadow: 0 8px 5px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.modal-header,
.modal-footer {
    padding: 10px 1rem;
    background: #f7f7f7;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.modal-body {
    padding: 1rem;
}

.close-btn {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
}
</style>
