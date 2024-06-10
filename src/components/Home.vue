<template>
  <HomeView></HomeView>
</template>

<script>
import HomeView from "@/views/HomeView.vue";

export default {
  name: 'Home',
  components: {HomeView},
  data() {
    return {
      topics: [
        { id: 1, name: 'Math' },
        { id: 2, name: 'Science' },
        { id: 3, name: 'History' },
      ],
    };
  },
};
</script>

<style>
.quiz-topic {
  font-weight: bold;
}
</style>
