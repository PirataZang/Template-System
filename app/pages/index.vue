<template>
    <div class="principalPanel">
        <div class="panel-lg">
            <div class="desc">
                <h1 class="descTitle">Acesso ao Sistema</h1>
                <span class="description"> Faça login para acessar o painel do sistema CRM pré-pronto. Caso não tenha uma conta, entre em contato com o administrador. 🔐 </span>
            </div>

            <form class="loginForm" @submit.prevent="login">
                <div class="inputGroup">
                    <label for="email">Email</label>
                    <input id="email" type="email" v-model="email" placeholder="exemplo@email.com" required />
                </div>

                <div class="inputGroup">
                    <label for="password">Senha</label>
                    <input id="password" type="password" v-model="password" placeholder="Digite sua senha" required />
                </div>

                <button type="submit" class="btnLogin">Entrar</button>
            </form>

            <p v-if="errorMessage" class="errorMsg">{{ errorMessage }}</p>
        </div>
    </div>
</template>

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

        // opcional: salva o authStore no localStorage (pra manter logado após refresh)
        localStorage.setItem('pb_auth', JSON.stringify(pb.authStore.exportToCookie()))

        // redireciona pra página principal
        router.push('/home')
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

<style lang="scss" scoped>
.principalPanel {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #dcdcdc, #b5b5b5);

    .panel-lg {
        background-color: #fff;
        padding: 40px;
        border-radius: 12px;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
        max-width: 400px;
        width: 100%;
        text-align: center;

        .desc {
            margin-bottom: 20px;

            .descTitle {
                font-size: 1.5rem;
                font-weight: bold;
            }

            .description {
                font-size: 0.95rem;
                color: #444;
            }
        }

        .loginForm {
            display: flex;
            flex-direction: column;
            gap: 15px;

            .inputGroup {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 5px;

                label {
                    font-weight: 600;
                    font-size: 0.9rem;
                }

                input {
                    width: 100%;
                    padding: 8px 10px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    font-size: 0.95rem;
                }

                input:focus {
                    outline: none;
                    border-color: #007bff;
                }
            }

            .btnLogin {
                background-color: #007bff;
                color: white;
                padding: 10px;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
                transition: background 0.2s ease;
            }

            .btnLogin:hover {
                background-color: #005dc1;
            }
        }

        .errorMsg {
            color: #ff3b3b;
            margin-top: 15px;
            font-weight: bold;
        }
    }
}
</style>
