<script>
export default {
  name: "QuizzView",
  props: {
    quizzData: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <section id="quizz-layout">
    <div class="quizz-content">
      <p>Bienvenue sur le quizz blablabla</p>
    </div>
    <div class="quizz-questions">
      <ul>
        <li class="quizz-subject" v-for="subject in quizzData" :key="subject.id">
          <a href="/">
            {{ subject.name }}
          </a>
        </li>
      </ul>
    </div>
  </section>


</template>

<style scoped>

</style>