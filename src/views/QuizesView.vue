<script setup>
// Modules & stuff
import q from "../data/data.json";
import { ref, watch } from "vue";
import { gsap } from "gsap";

// components
import Card from "../components/Card.vue";

const quizes = ref(q);
const search = ref("");
  
// watch:Watch any variation in the state.
watch(search, () => {
  quizes.value = q.filter((quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  );
});

const beforeEnter = () => {
  // Card enter from
  el.style.opacity = 0
  el.style.transform = "translateY(-60px);"
  console.debug("before entering the dom")
}

const enter = (el) => {
  // Card enter to
 gsap.to()
}

const afterEnter = () => {
  console.debug("after entering the dom")
}
</script>

<template>
  <header>
    <h1>Quizes</h1>
    <input v-model.trim="search" type="text" placeholder="Search..." />
  </header>
  <div class="options-container">
    <!-- the Card.vue component -->
    <TransitionGroup 
    appear 
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    >
      <Card 
      v-for="quiz in quizes"
      :key="quiz.id" 
      :quiz="quiz"
       />
    </TransitionGroup>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}

header {
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
}

header input {
  border: none;
  background-color: rgba(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}

</style>
