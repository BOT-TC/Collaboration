<script setup lang="ts">
import { ref } from 'vue'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, type Auth } from '@firebase/auth';
import { useCurrentUser, useFirebaseAuth } from 'vuefire';
import { signOut } from '@firebase/auth'

// docs : https://daisyui.com/components/modal/#
const props = defineProps<{
  id: string
}>()
const user = useCurrentUser();
const auth = useFirebaseAuth();
const closeForm = ref();

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
      closeForm.value.click()
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
  <!-- Put this part before </body> tag -->
  <input type="checkbox" :id="props.id" class="modal-toggle" />
  <div class="modal modal-middle">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Login:</h3>
      <form @submit.prevent class="form-control max-w-lg" v-if="user?.email">
        <button @click="signOutOfFirebase" class="btn">Sign Out</button>
      </form>
      <div v-else>
        <h1>Sign In/Up</h1>
        <form @submit.prevent class="form-control max-w-lg">
          <label for="email" class="label">
            <span class="label-text">What is your email?</span>
            <input id="email" type="email" placeholder="email" v-model="newUser.email"
              class="input input-bordered w-full primary" />
          </label><br>

          <label for="password" class="label">
            <span class="label-text">Choose a password.</span>
            <input id="password" type="password" v-model="newUser.password" class="input input-bordered w-full" /><br>
          </label>
          <button @click="createUser" class="btn mt-3 bg-primary text-primary-content">Register</button>
          <button @click="signIntoFirebase" class="btn mt-3">Sign
            In</button>
        </form>
      </div>
      <div class="modal-action">
        <label ref="closeForm" :for="props.id" class="btn">OK</label>
      </div>
    </div>
  </div>
</template>