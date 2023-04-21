<script setup lang="ts">
import { ref } from 'vue'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, type Auth } from '@firebase/auth';
import { useCurrentUser, useFirebaseAuth } from 'vuefire';
import { signOut } from '@firebase/auth'

const user = useCurrentUser();
const auth = useFirebaseAuth();

console.log(user)

const newUser = ref({
  email: '',
  password: ''
})
const registeredUser = ref({
  email: '',
  password: ''
})

async function signOutOfFirebase() {
  signOut(auth as Auth)
    .then(() => {
      // sign out success
    })
    .catch((error) => {
      // failed to sign out
    })
}

async function signIntoFirebase() {
  signInWithEmailAndPassword(auth as Auth, newUser.value.email, newUser.value.password)
    .then((userCredential) => {
      // Signed In
      const user = userCredential.user;
      clearFormData()
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
}

async function createUser() {
  createUserWithEmailAndPassword(auth as Auth, newUser.value.email, newUser.value.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      clearFormData()
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
}

const clearFormData = () => {
  newUser.value = {
    email: "",
    password: ""
  }
}
</script>

<template>
  <div>
    <div v-if="user?.email">
      <button @click="signOutOfFirebase">Sign Out</button>
    </div>
    <div v-else>
      <h1>Sign In/Up</h1>
      <form @submit.prevent>
        <input type="email" placeholder="email" v-model="newUser.email" /><br>
        <input type="password" v-model="newUser.password" /><br>
        <button @click="createUser">Register</button>|<button @click="signIntoFirebase">Sign In</button>
      </form>
    </div>
  </div>
</template>