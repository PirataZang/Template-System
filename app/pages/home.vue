<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PocketBase from 'pocketbase'

// 🔥 cria a instância do PocketBase apontando pro teu servidor local
const pb = new PocketBase('http://127.0.0.1:8090')

const router = useRouter()
const email = ref('')
const password = ref('')
const errorMessage = ref('')

const login = async () => {
    try {
        // autentica o usuário com email e senha
        const authData = await pb.collection('users').authWithPassword(email.value, password.value)

        // ✅ authData contém token + record (usuário)
        console.log('Login OK ✅')
        console.log('Token:', pb.authStore.token)
        console.log('User ID:', pb.authStore.record.id)

        // opcional: salva o authStore no localStorage (pra manter logado após refresh)
        localStorage.setItem('pb_auth', JSON.stringify(pb.authStore.export()))

        // redireciona pra página principal
        router.push('/home-page')
    } catch (err) {
        console.error('Erro ao logar:', err)
        errorMessage.value = 'Email ou senha incorretos 😕'
    }
}

// 👇 quando quiser deslogar
const logout = () => {
    pb.authStore.clear()
    localStorage.removeItem('pb_auth')
    router.push('/login')
}
</script>
