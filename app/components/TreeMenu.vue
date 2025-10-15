<template>
    <div class="tree-menu">
        <div class="tree-header" @click="toggleMenu">
            <i :class="icon"></i>
            <h1>{{ title }}</h1>

            <i class="arrow" :class="{ 'arrow-down': isOpen }"></i>
        </div>

        <Transition name="fade">
            <div v-show="isOpen" class="tree-content">
                <slot name="items"></slot>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Props definition with TypeScript
interface Props {
    title: String
    isOpen?: Boolean
    icon?: any
    hideText?: Boolean
}

const props = withDefaults(defineProps<Props>(), {
    isOpen: null,
    icon: null,
})

// Reactive state
const isOpen = ref(false)

// Methods
const toggleMenu = () => {
    isOpen.value = !isOpen.value
}
</script>

<style scoped lang="scss">
.tree-menu {
    border: 1px solid #ddd;
    border-radius: 7px;
    background: white;
    overflow: hidden;
    color: #666;

    .tree-header {
        padding: 12px 16px;
        display: flex;
        align-items: center;
        cursor: pointer;
        height: 23px;
        gap: 20px;
        background: #ffffff;

        &:hover {
            background: #eee;
        }

        h1 {
            margin: 0;
            font-size: 1rem;
            font-weight: 500;
        }
    }

    .tree-content {
        padding: 8px 5px;
        border-top: 1px solid #ddd;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
}

.arrow {
    margin-left: auto;
    border: solid #666;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
    transition: transform 0.2s ease;

    &.arrow-down {
        transform: rotate(45deg);
    }
}

// Transition animations
.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
