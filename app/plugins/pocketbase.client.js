import PocketBase from 'pocketbase'

export default defineNuxtPlugin(() => {
    const pb = new PocketBase('http://127.0.0.1:8090')

    // tenta restaurar o authStore do localStorage
    const authData = localStorage.getItem('pb_auth')
    if (authData) {
        pb.authStore.loadFromCookie(JSON.parse(authData))
    }

    return {
        provide: {
            pb,
        },
    }
})
