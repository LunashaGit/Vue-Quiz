<script lang="ts" setup>
import {Question} from "../models/FormQuestions.model.ts";
import {computed, ref} from "vue";

const props = defineProps<{ questionItem: Question, step: number, stepMax: number }>();
const emit = defineEmits(['next-step']);

const questionItemRef = ref<Question>(props.questionItem)

const next = () => {
  questionItemRef.value.complete = true
  emit('next-step')
}

const questionIf = computed(() => {
  return questionItemRef.value.id === props.step + 1 && props.step + 1 <= props.stepMax;
});

</script>

<template>
  <div v-if="questionIf">
    <h2>{{ questionItemRef.question }}</h2>
    <form class="flex align-items-center justify-content-center">
      <ul>
        <li v-for="choice in questionItemRef.choices" :key="choice" class="flexWithAllParameters">
          <input
              :id="choice"
              v-model="questionItemRef.answer"
              :value="choice"
              type="radio"
          />
          <label :for="choice">{{ choice }}</label>
        </li>
      </ul>
    </form>
    <button :disabled="questionItemRef.answer == null" @click="next">Next</button>
  </div>
</template>

<style scoped>
.flexWithAllParameters {
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 2rem;
}

.flex {
  display: flex;
}

.align-items-center {
  align-items: center;
}

.justify-content-center {
  justify-content: center;
}
</style>
