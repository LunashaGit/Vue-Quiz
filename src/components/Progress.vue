<script lang="ts" setup>
defineProps<{ percent: number }>()
</script>

<template>
  <label for="progress-bar">Quiz Progress : </label>
  <progress id="progress-bar" :value="percent" max="100"/>
</template>
