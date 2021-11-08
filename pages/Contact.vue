<template>
  <div>
    <Header />
    <section id="hero-16" class="hero-section division banners">
      <div class="container p-5">
        <h2 class="text-center fs-2">Contactez Nous</h2>
        <p class="text-center">
          Vous voulez nous dire à quel point vous aimez B-CARTE, ou avez une
          question qui n'est pas répondue sur notre page FAQ ? Remplissez le
          formulaire ci-dessous.
        </p>
        <!-- End row -->
      </div>
      <!-- End container -->
    </section>
    <div class="container about">
      <h3 class="fw-bolder text-center">Contact</h3>
      <span>Les champs marqués d'un astérisque (*) sont obligatoires. </span>
      <div class="row my-5">
        <div class="col-md-6">
          <div class="mb-3">
            <input
              v-model="name"
              type="text"
              class="form-control"
              id="name"
              aria-describedby="name"
              placeholder="Nom *"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <input
              v-model="surname"
              type="text"
              class="form-control"
              id="surname"
              aria-describedby="surname"
              placeholder="Prénom *"
            />
          </div>
        </div>
      </div>
      <div class="row my-5">
        <div class="col-md-4">
          <div class="mb-3">
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="email"
              aria-describedby="name"
              placeholder="Email *"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <input
              v-model="telephone"
              type="tel"
              class="form-control"
              id="telephone"
              aria-describedby="telephone"
              placeholder="Téléphone "
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <input
              v-model="profession"
              type="text"
              class="form-control"
              id="status"
              aria-describedby="Profession"
              placeholder="Profession"
            />
          </div>
        </div>
      </div>
      <div class="row my-5">
        <div class="">
          <label for="message" class="form-label">Votre Message*</label>
          <textarea v-model="message" class="form-control" id="message" rows="3"></textarea>
          <span class="text-danger">{{ errors }}</span>
          <span class="text-success">{{ success }}</span>
        </div>
      </div>
    </div>
    <button type="submit" class="btn btn-primary mb-3 btn-submit" v-on:click.prevent="sendEmail">
      Envoyer
    </button>

    <Footer />
  </div>
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
  data () {
    return {
      name: '',
      surname: '',
      email: '',
      telephone: '',
      profession: '',
      message: '',
      errors: '',
      success: '',
    }
  },
  methods: {
    check_all() {
      this.name = this.name.trim();
      this.surname = this.surname.trim();
      this.email = this.email.trim();
      this.message = this.message.trim();
      if (
        this.name === "" ||
        this.surname === "" ||
        this.email === "" ||
        this.message === ""
      ) {
        this.errors = "Remplir tous les champs.";
        this.success = "";
      } else if (this.message.length < 15)
      {
        this.errors = "Message Must be more than 15 characters.";
        this.success = "";
      }
      else {
        this.errors = "";
      }
    },
    async sendEmail() {
      this.check_all();
      if (this.errors === "") {
        try {
          const response = await fetch(
            `${process.env.NUXT_APP_API_ENDPOINT || ''}/api/sendEmail`,
            {
              method: "POST",
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                name: this.name,
                surname: this.surname,
                email: this.email,
                telephone: this.telephone,
                profession: this.profession,
                message: this.message
              })
            }
          );
          const content = await response.json();
          if (content.message) {
            this.errors = "";
            this.success = content.message;
            this.name = "";
            this.surname = "";
            this.email = "";
            this.message = "";
            this.telephone = "";
            this.profession = "";
          }
        } catch (err) {
          console.log(err);
          this.errors = "Something Went Wrong, Try again!";
          this.success = "";
        }
      }
    }
  }
};
</script>

<style>
.about {
  margin-top: 3rem;
}
.teams {
  margin-top: 2rem;
}
.imgs {
  width: 200px;
}

.btn-submit {
    background-color: #ec595a !important;
    margin: 0 auto;
    display: block;
}


.btn-submit:hover {
    background-color: #ec595a !important;
}
</style>