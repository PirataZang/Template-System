<template>
    <a v-bind="$attrs" target="_blank" :class="['button', color, type, customClass, { disabled }]" :tabindex="disabled ? -1 : 0" @click.prevent="disabled">
        <span v-html="label"></span>
    </a>
</template>

<script>
export default {
    name: 'Button',

    props: {
        label: {
            type: String,
            required: true,
        },

        disabled: {
            type: Boolean,
            default: false,
        },

        type: {
            type: String,
            default: 'square',
        },

        customClass: {
            type: String,
            default: '',
        },

        color: {
            type: String,
            default: 'blue',
        },
    },
}
</script>

<style lang="scss">
.button {
    border: none;
    width: max-content;
    cursor: pointer;
    padding: 8px;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: inset 1px 3px 10px 0px rgb(0, 0, 0);
    }

    &:active {
        transform: scale(0.92);
    }
}

// Colors Custom

.blue {
    color: white;
    background-color: rgb(0 126 255);

    &:hover {
        background-color: rgb(0 100 204);
    }

    &:active {
        transform: scale(0.95);
        background-color: rgb(0 80 163);
    }
}

.green {
    color: rgb(255, 255, 255);
    background-color: rgb(18, 175, 13);

    &:hover {
        background-color: rgb(16, 117, 13);
    }

    &:active {
        transform: scale(0.95);
        background-color: rgb(12, 88, 10);
    }
}

.purple {
    color: white;
    background-color: rgb(119, 0, 255);

    &:hover {
        background-color: rgb(95, 0, 204);
        box-shadow: inset 1px 3px 10px 0px rgb(27, 0, 53);
    }

    &:active {
        transform: scale(0.92);
        background-color: rgb(95, 0, 204);
        box-shadow: inset 1px 3px 10px 0px rgb(27, 0, 53);
    }
}

/* Estado disabled */
.disabled {
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none; /* impede clique */
}

// Types Custom

.circle {
    border-radius: 100px;
}

.square {
    border-radius: 7px;
}
</style>
