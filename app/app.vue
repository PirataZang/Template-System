<template>
    <div class="app">
        <div class="sidebar">
            <Menu />
        </div>

        <div class="container">
            <NuxtPage />
        </div>
    </div>
</template>

<style lang="scss">
.app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    display: flex;

    .sidebar {
        flex: 1;
    }

    .container {
        flex: 18;
        min-height: 98vh;
    }
}
</style>
