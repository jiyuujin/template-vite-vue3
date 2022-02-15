<template>
  <h1>{{ msg }}</h1>
  <button @click="() => count++">
    count is: {{ count }}
  </button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  msg: String
})

const count = ref(0)
</script>
