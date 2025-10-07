<template>
    <div class="formContainer">
        <div class="header">
            <h1 class="title" v-html="title"></h1>
            <span class="id" @click="clipboard(id)">{{ id }}</span>
        </div>

        <div class="content">
            <slot></slot>
        </div>

        <slot name="buttons">
        </slot>
    </div>
</template>

<script>
export default {
    name: 'Form',
    props: {
        title: {
            type: String,
            default: '',
        },

        id: {
            type: [String, Number],
            default: null,
        },
    },

    methods: {
        clipboard(text) {
            navigator.clipboard.writeText(text)
        },
    },
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
}
</style>
