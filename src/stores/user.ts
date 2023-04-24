import { defineStore, acceptHMRUpdate } from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, type Auth } from '@firebase/auth';
import { useCurrentUser, useFirebaseAuth } from 'vuefire';
import { signOut } from '@firebase/auth'

interface SiteUser {
  email: string,
  id: string,
}

interface UserState {
  user: SiteUser,
  platform: string
}

export const useUserStore = defineStore({
  id: "siteUser",
  state: (): UserState => ({
    user: {
      email: "",
      id: ""
    },
    platform: import.meta.env.VITE_BACKEND_PLATFORM
  }),
  actions: {
    LoginModalVue(email: string, password: string) { }
  },
  getters: {
    loggedIn: (state: UserState) => state.user.email.length ? true : false
  }
})

if (import.meta.hot) {
  // @ts-ignore
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
