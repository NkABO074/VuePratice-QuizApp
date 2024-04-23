<script setup>
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import quizes from "../data/data.json";

const route = useRoute(); // fetch information on the current route
const quizId = parseInt(route.params.id);

const currentQuestionIndex = ref(0);

const quiz = quizes.find((q) => q.id === quizId);

const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`);

// use it everytime a piece of state change
watch(() => currentQuestionIndex.value, () => {
  questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`;
})
</script>

<template>
  <div>
    <QuizHeader :questionStatus="questionStatus" />
    <div>
      <Question :question="quiz.questions[currentQuestionIndex]" />
      <button @click="currentQuestionIndex++">Next Question</button>
    </div>
  </div>
</template>
