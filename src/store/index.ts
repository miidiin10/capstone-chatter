import { InjectionKey } from 'vue'
import { createStore, Vuex, Store } from 'vuex'
import router from '../router'
import { auth } from '../firebase'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut 
} from 'firebase/auth'


export const store = createStore({
  state: {
    user: null
  },
  mutations: {
    SET_USER (state, user) {
        state.user = user
    },

    CLEAR_USER (state) {
        state.user = null
    }
  },
  actions: {
    async login ({commit}, details) {
        const { email, password } = details

        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            switch(error.code) {
                case 'auth/user-not-found':
                    alert("User not found")
                    break
                case 'auth/wrong-password':
                    alert("Wrong Password!")
                    break
                default:
                    alert("Something went wrong")
            }

            return
        }

        commit('SET_USER', auth.currentUser)

        router.push('/')
    },
    async register ({ commit}, details) {
        const { email, password } = details

        try {
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (error) {
            switch(error.code) {
                case 'auth/email-alreaady-in-use':
                    alert("Email already in use")
                    break
                case 'auth/invalid-email':
                    alert("Invalid email")
                    break
                case 'auth/operation-not-allowed':
                    alert("Operation not allowed")
                    break
                case 'auth/weak-password':
                    alert("Weak password")
                    break
                default:
                    alert("Something went wrong")                    
            }

            return
      }

      commit('SET_USER', auth.currentUser)

      router.push('/')
    },

    async logout ({ commit }) {
        await signOut(auth)

        commit('CLEAR_USER')

        router.push('/login-page')
    },

    fetchUser ({ commit }) {
        auth.onAuthStateChanged(async user => {
            if (user === null) {
                commit('CLEAR_USER')
            } else {
                commit('SET_USER', user)

                if (router.isReady() && router.currentRoute.value.path === '/login-page') {
                    router.push('/')
                }
            }
        })
    }
}

});

export default store;