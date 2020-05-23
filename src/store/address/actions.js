import axios from "axios";

export default {
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