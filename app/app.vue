<template>
    <div class="app">
        <div class="menu">
            <NuxtLink class="itemMenu" to="/">
                <div class="itemText">
                    <i class="fa-solid fa-house"></i>
                    <span class="text">Home</span>
                </div>
            </NuxtLink>

            <NuxtLink class="itemMenu" to="/menu1">
                <div class="itemText">
                    <i class="fa-solid fa-list"></i>
                    <span class="text">Menu 01</span>
                </div>
            </NuxtLink>
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

    .menu {
        width: 50px;
        height: auto;
        background: #f0f0f0;
        padding: 10px;
        border-radius: 5px;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        text-align: center;
        transition: all 0.3s ease;

        .itemMenu {
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            height: 45px;
            border-radius: 5px;
            transition: all 0.3s ease;
            background-color: #d4d4d4;

            &:hover {
                background: #bbbbbb;
                cursor: pointer;
            }

            .itemText {
                display: flex;
                align-items: center;
                gap: 5px;

                .text {
                    display: none;
                }
            }
        }

        &:hover {
            width: 200px;
            background: #e0e0e0;
            cursor: pointer;

            .itemText .text {
                display: block;
            }
        }
    }

    .container {
        flex: 1;
        min-height: 98vh;
    }
}
</style>
