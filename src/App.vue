<script lang="ts" setup>
import {onMounted, ref} from "vue";
import Quiz from "./components/Quiz.vue";
import {FormQuestionsModel} from "./models/FormQuestions.model.ts";

let FormQuestions = ref<FormQuestionsModel | null>();
let loading = ref<boolean>(true);

onMounted(async () => {
  const call = await fetch('./questions.json');
  FormQuestions.value = await call.json()
  loading.value = false
})

</script>

<template>
  <Quiz v-if="!loading" :FormQuestions="FormQuestions ?? {} as FormQuestionsModel"/>
</template>

<style>
</style>