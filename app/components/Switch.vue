<template>
    <div class="switchWrapper" :class="{ isDisabled: disabled }">
        <div class="switchContainer" :class="{ isOn: localValue, isDisabled: disabled }" @click="toggle">
            <div class="switchCircle"></div>
        </div>

        <label v-if="label" class="switchLabel" v-html="label"></label>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
    modelValue: { type: Boolean, default: false },
    label: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
})

const emit = defineEmits(['update:modelValue'])
const localValue = ref(props.modelValue)

const toggle = () => {
    if (!props.disabled) localValue.value = !localValue.value
}

watch(
    () => props.modelValue,
    (val) => {
        if (val !== localValue.value) localValue.value = val
    }
)

watch(localValue, (val) => emit('update:modelValue', val))
</script>

<style lang="scss" scoped>
.switchWrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;
    cursor: pointer;

    &.isDisabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .switchLabel {
        font-size: 0.875rem;
        font-weight: 500;
        color: #374151;

        .dark & {
            color: #e5e7eb;
        }
    }

    .switchContainer {
        position: relative;
        width: 30px; // 40px
        height: 15px; // 22px
        border-radius: 9999px;
        background-color: #d1d5db; // gray-300
        transition: all 0.25s ease;
        display: flex;
        align-items: center;
        padding: 0.125rem;

        .switchCircle {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: #fff;
            transition: all 0.25s ease;
            transform: translateX(0);
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }

        &.isOn {
            background-color: #3b82f6;

            .switchCircle {
                transform: translateX(15px); // 26px
            }
        }

        &.isDisabled {
            cursor: not-allowed;
            background-color: #9ca3af;
        }

        .dark & {
            background-color: #374151;
            &.isOn {
                background-color: #60a5fa;
            }
            .switchCircle {
                background-color: #f9fafb;
            }
        }
    }
}
</style>
