<script setup>
import { defineProps, defineEmits } from "vue";
const { question } = defineProps(["question"]);

const emit = defineEmits(["selectOption"]);

/**
 * Emite for the parent component to listen the responce of a selected option.
 * @param {Boolean} isCorrect a boolean value
 */
const emitSelectedOption = (isCorrect) => {
  emit("selectOption", isCorrect);
};
</script>
<template>
  <div class="question-containner">
    <h1 class="question">{{ question.text }}</h1>
  </div>
  <div class="options-container">
    <div
      v-for="option in question.options"
      class="option"
      :key="option.id"
      @click="emitSelectedOption(option.isCorrect)"
    >
      <p class="option-label">{{ option.label }}</p>
      <div class="option-value">
        <p>{{ option.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.question-containner {
  margin-top: 20px;
}

.question {
  font-size: 40px;
  margin-bottom: 20px;
}

.option {
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
}

.option-label {
  background-color: bisque;
  width: 50px;
  height: 50px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: 700;
}

.option-value {
  background-color: rgb(244 239 239);
  width: 100%;
  font-size: 30px;
  padding: 0 20px;
  color: black;
}
</style>
