<script>
import QuizzView from '@/views/QuizzView.vue';

export default {
  components: {
    QuizzView
  },
  data() {
    return {
      quizzData: [
        {
          id: 1,
          name: 'HTML / CSS',
          type: 'multipleChoice'
        },
        {
          id: 2,
          name: 'Bootstrap',
          type: 'multipleChoice'
        },
        {
          id: 3,
          name: 'SCSS',
          type: 'multipleChoice'
        }
      ]
    };
  }
}
</script>

<template>
  <div>
    <QuizzView :quizzData="quizzData" />
  </div>
</template>


<style>
/* Styles spécifiques au composant parent */
</style>
