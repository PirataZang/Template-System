<template>
    <div class="menu" @click="toggleMenu">
        <NuxtLink class="itemMenu" to="/">
            <i class="fa-solid fa-house"></i>
            <span class="text">Home</span>
        </NuxtLink>

        <NuxtLink class="itemMenu" to="/menu1">
            <i class="fa-solid fa-list"></i>
            <span class="text">Pokemon</span>
        </NuxtLink>

        <NuxtLink class="itemMenu" to="/products/productsList">
            <i class="fa-solid fa-list"></i>
            <span class="text">Produtos</span>
        </NuxtLink>

        <TreeMenu :hideText="hideText" icon="fa-solid fa-list" title="Pokemon">
            <template #items>
                <NuxtLink class="itemMenu" to="/menu1">
                    <i class="fa-solid fa-list"></i>
                    <span class="text">Pokemon</span>
                </NuxtLink>

                <NuxtLink class="itemMenu" to="/menu1">
                    <i class="fa-solid fa-list"></i>
                    <span class="text">Pokemon</span>
                </NuxtLink>
            </template>
        </TreeMenu>
    </div>
</template>

<script setup lang="ts">
let hideText = true

const toggleMenu = () => {
    hideText = !hideText
}
</script>

<style lang="scss">
.menu {
    width: 50px;
    height: 96vh;
    background: #f0f0f0;
    padding: 10px;
    border-radius: 5px;
    margin-right: 20px;
    display: flex;
    overflow-y: auto;
    position: fixed;
    z-index: 999999;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    transition: all 0.3s ease;

    .itemMenu {
        padding: 12px 16px;
        display: flex;
        text-decoration: none;
        color: #666;
        border-radius: 7px;
        align-items: center;
        cursor: pointer;
        background: #ffffff;
        gap: 20px;
        overflow: hidden;
        height: 23px;

        &:hover {
            background: #bbbbbb;
            cursor: pointer;
        }
    }

    &:hover {
        width: 200px;
        background: #e0e0e0;

        .itemMenu {
            min-height: 23px;
            height: auto;
        }
    }
}
</style>
