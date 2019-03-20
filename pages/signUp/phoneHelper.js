export const phoneHelpers = {
  format: phone => {
    if (phone) {
      phone = phone.replace(/\D/g, "");
      phone = phone.substring(0, 10);
      let size = phone.length;
      if (size === 0) {
        phone = phone;
      } else if (size < 3) {
        phone = "(" + phone;
      } else if (size < 6) {
        phone = "(" + phone.substring(0, 3) + ") " + phone.substring(3, 6);
      } else {
        phone =
          "(" +
          phone.substring(0, 3) +
          ") " +
          phone.substring(3, 6) +
          " - " +
          phone.substring(6, 10);
      }
      return phone;
    }
  },
  undoFormat: phone => phone.replace(/\D/g, "")
};

export const dateHelper = {
  format: phone => {
    if (phone) {
      phone = phone.replace(/\D/g, "");
      phone = phone.substring(0, 10);
      let size = phone.length;
      if (size === 0) {
        phone = phone;
      } else if (size > 3 && size <= 5) {
        phone = phone.substring(0, 4) + "/" + phone.substring(4, 6);
      } else if (size > 5 && size <= 6) {
        phone = phone.substring(0, 4) + "/" + phone.substring(4, 6) + "/";
      } else if (size > 6) {
        phone =
          phone.substring(0, 4) +
          "/" +
          phone.substring(4, 6) +
          "/" +
          phone.substring(6, 8);
      }
      return phone;
    }
  }
};
