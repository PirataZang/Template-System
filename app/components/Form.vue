<template>
    <div class="formContainer">
        <div class="header">
            <h1 class="title" v-html="title"></h1>
            <span class="id" @click="handleClipboard(id)">{{ id }}</span>
        </div>

        <div class="content">
            <slot></slot>
        </div>

        <div class="footer">
            <slot name="footer"> </slot>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: '',
    },
    id: {
        type: [String, Number] as PropType<string | number | null>,
        default: null,
    },
})

// Método clipboard
const handleClipboard = (text: string | number | null) => {
    if (text !== null) {
        navigator.clipboard.writeText(text.toString())
    }
}
</script>

<style lang="scss">
.formContainer {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin: 16px 0;
    background-color: #f9f9f9;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;

        .title {
            margin: 0;
            font-size: 24px;
            color: #333;
        }

        .id {
            font-size: 14px;
            color: #666;
            padding: 2px 10px;
            border: 1px solid;
            border-radius: 5px;

            &:active {
                transform: scale(0.95);
            }
        }
    }

    .content {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }

    .footer {
        margin-top: 16px;
        display: inline-flex;
        gap: 5px;
    }
}
</style>
