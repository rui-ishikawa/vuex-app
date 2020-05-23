export default {
  getAddress(state, payload) {
    state.zip = payload.zip;
    state.address = payload.address;
  }
}