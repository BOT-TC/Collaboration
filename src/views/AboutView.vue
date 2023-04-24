<script setup lang="ts">
import { ref, onMounted, onUpdated } from 'vue';

// @ts-ignore
const capps = ref(JSON.parse(sessionStorage.getItem('capps') ?? ""))
const s = ref([2, 5])
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ capps.length }} Installed Apps</h2>
    <p>
    <ul>
      <li v-for="{ name } in capps" key="capp">
        {{ name }}
      </li>
    </ul>
    </p>
  </div>
</template>
