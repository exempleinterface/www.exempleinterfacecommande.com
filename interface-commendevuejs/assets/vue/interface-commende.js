const app = new Vue({
  el: "#app",
  data() {
    return {
      message: "Hello friends ! ",
      user: "User",
      persons: ["Kevin", "Henry", "Manuel", "Jean", "Michel", "Jean-Michel"],
      produits: ["Pizza", "Tacos", "Sushi", "Hamburger", "Cheesburger"],
      avis: "Your opinion:",
      success: true,
      prod: 0,
      /* function */
    };
  },
  methods: {
    close: function () {
      {
        console.log("Thank you for your comment !");
        app.$data.success = false;
      }
    },
    cls: function () {
      return this.success === true ? "error" : "succsess";
    },
    click: function () {
      this.prod = 1;
    },
  },
});
