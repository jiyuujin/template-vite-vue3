<template>
  <h1>{{ msg }}</h1>
  <button @click="increment">
    count is: {{ count }}
  </button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup lang="ts">
const props = defineProps({
  msg: String
})

let count = $ref(0)

const increment = () => count++
</script>
