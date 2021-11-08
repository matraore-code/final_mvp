<template>
  <body>
    <div id="page" class="page">
      <!-- <Loader /> -->
      <Header />
      <Banner />
      <How />
      <Pricing />
      <!-- <Tarif/> -->
      <Footer />
    </div>
    <!-- <h1>Moctar</h1> -->
  </body>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap",
        },
      ],
      script: [
        { src: "/js/jquery-3.6.0.min.js" },
        { src: "/js/bootstrap.min.js" },
        { src: "/js/modernizr.custom.js" },
        { src: "/js/jquery.easing.js" },
        { src: "/js/jquery.appear.js" },
        { src: "/js/jquery.scrollto.js" },
        { src: "/js/menu.js" },
        { src: "/js/owl.carousel.min.js" },
        { src: "/js/jquery.magnific-popup.min.js" },
        { src: "/js/quick-form.js" },
        { src: "/js/request-form.js" },
        { src: "/js/jquery.validate.min.js" },
        { src: "/js/jquery.ajaxchimp.min.js" },
        { src: "/js/wow.js" },
        { src: "/js/custom.js" },
      ],
    };
  },


};
</script>
<style scoped>

</style>>

