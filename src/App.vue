<template>
  <div>
    <p>counter: {{ counter }}</p>
    <button @click="incrementCount()">+1</button>
    <button @click="incrementCount(5)">+5</button>
  </div>
</template>

<script>
import store from './store'
import { mapState } from "vuex"

export default {
  store,
  name: 'App',
  computed: {
    // state から
    ...mapState(['counter'])
  },
  methods: {
    incrementCount(n = 1) {
      // Actionsへ
      this.$store.dispatch("incActionCounter", { inc: n });
    }
  }  
}
</script>