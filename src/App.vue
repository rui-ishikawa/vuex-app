<template>
  <div>
    <p>住所: {{ address }}</p>
    <input type="text" v-model="zip" />
    <button @click="getAddress">検索</button>
  </div>
</template>

<script>
import store from './store'
import { mapState } from "vuex"

export default {
  store,
  name: 'App',
  data() {
    return {
      zip: ""
    };
  },
  computed: {
    ...mapState({
      address: state => state.address
    }),
  },
  methods: {
    getAddress() {
      this.$store.dispatch("getAddressAction", this.zip);
    }    
  }  
}
</script>