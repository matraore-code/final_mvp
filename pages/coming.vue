<template>
  <body>
    <section>
      <div class="container">
        <div class="logo">
          <img
            src="~/assets/images/logon.png"
            alt=""
            srcset=""
            class="logo_img"
          />
          <div class="confirm">
            <h4 class="text-center">
              Notre plateforme en ligne sera bientôt disponible.
            </h4>
            
          </div>
        </div>
      </div>
    </section>
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
        {
          rel: "stylesheet",
          href: "https://use.fontawesome.com/releases/v5.15.4/css/all.css",
        },
      ],
      script: [
        { src: "/js/jquery-3.6.0.min.js" },
        { src: "/js/bootstrap.min.js" },
      ],
    };
  },
};
</script>

<style>
.logo_img {
  width: auto;
  height: 70px;
  display: block;
  margin: 1rem auto 1rem;
}

.tex {
    margin-top: 2rem;
}

.imgs {
    width: 150px;
    margin: 0.7rem 2rem;
}

.confirm {
    margin: 2rem;
}

/* span {
    color: #ec595a;
} */

</style>