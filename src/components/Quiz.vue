<script lang="ts" setup>
import {FormQuestionsModel} from "../models/FormQuestions.model.ts";
import Title from "./Title.vue";
import Progress from "./Progress.vue";
import QuestionItem from "./QuestionItem.vue";
import {ref} from "vue";

const props = defineProps<{ FormQuestions: FormQuestionsModel }>()

const FormQuestionsRef = ref<FormQuestionsModel>(props.FormQuestions)
const stepMax = ref<number>(FormQuestionsRef.value.questions.length)
let step = ref<number>(0);
let result = ref<number>(0);

const nextStep = () => {
  if (step.value < stepMax.value) step.value++

  if (step.value === stepMax.value) {
    result.value = FormQuestionsRef.value.questions.reduce((acc, question) => {
      return acc + (question.correct_answer === question.answer ? 1 : 0);
    }, 0);
  }
}

</script>

<template>
  <Title :title="FormQuestionsRef.title"/>
  <Progress :percent="(100 / stepMax * step)"/>
  <div v-for="questionItem in FormQuestionsRef.questions">
    <QuestionItem :question-item="questionItem" :step="step" :stepMax="stepMax" @next-step="nextStep"/>
  </div>
  <Title v-if="step === stepMax"
         :title="result >= FormQuestionsRef.minimum_score? FormQuestionsRef.success_message : FormQuestionsRef.failure_message"></Title>
</template>

<style scoped>
</style>