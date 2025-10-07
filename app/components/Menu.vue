<template>
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
</template>

<style lang="scss">
.menu {
    width: 50px;
    height: 96vh;
    background: #f0f0f0;
    padding: 10px;
    border-radius: 5px;
    margin-right: 20px;
    display: flex;
    position: fixed;
    z-index: 999999;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    transition: all 0.3s ease;

    .itemMenu {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-decoration: none;
        height: 45px;
        padding-left: calc(100% / 3.3);
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
                opacity: 0;
                transition: all 0.3s;
            }
        }
    }

    &:hover {
        width: 200px;
        background: #e0e0e0;
        cursor: pointer;

        .itemText .text {
            opacity: 100%;
        }
    }
}
</style>
