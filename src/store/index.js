import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    address: "",
    zip: ""
  },
  mutations: {
    getAddress(state, payload) {
      state.zip = payload.zip;
      state.address = payload.address;
    }
  },
  actions: {
    async getAddressAction(context, zipCode) {
      const addressInfo = {
        address: "",
        zip: zipCode
      };
      await axios
        .get("https://api.zipaddress.net/?", {
          params: { zipcode: zipCode }
        })
        .then(res => {
          addressInfo.address = res.data.data.fullAddress;
        });
      context.commit("getAddress", addressInfo);
    }
  }
});