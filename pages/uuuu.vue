<template>
  <body>
    <section>
      <div class="container">
        <div v-if="fetched" class="logo">
        <!-- <div class="logo"> -->
          <img
            src="~/assets/images/logon.png"
            alt=""
            srcset=""
            class="logo_img"
          />
          <div class="profile">
            <img
              src="~/assets/images/user.jpg"
              alt=""
              srcset=""
              class="profile_img"
            />
            <h3 class="text-center fs-2">{{ surname + " " + name }}</h3>
            <h4 class="text-center">{{ profession }}</h4>
            <div class="col text-center mx-auto w-75">
              <span>{{ biography }}</span>
            </div>
            <div class="c mt-5 top-m">
              <a href="#" class="btn btn-success btn-profile w-50 mt-5">
                <i class="far fa-envelope icn"></i>
                <span class="text-center">support@bcarte.com</span
              ></a>
            </div>
            <div class="c">
              <a href="#" class="btn btn-success btn-profile w-50 mt-2 mb-3">
                <i class="fas fa-phone-alt icn"></i>
                <span class="text-center">{{telephone}}</span></a
              >
            </div>
            <div class="">
              <h4 class="text-center my-5">Liens</h4>
              <div class="d-flex justify-content-center mt-5 re">
                <i class="fab fa-linkedin-in mx-3 fs-2 text-primary">{{
                  linkedin
                }}</i>
                <i class="fab fa-whatsapp mx-3 fs-2 text-success">{{
                  whatsapp
                }}</i>
                <i class="fab fa-github mx-3 fs-2 text-dark">{{ github }}</i>
                <i class="fas fa-link mx-3 fs-2 text-danger">{{ fax }}</i>
              </div>
            </div>
            <div class="d-flex justify-content-center re">
              <a href="#" class="btn btn-success btn-profile mt-5 register">
                Enregistrer</a
              >
            </div>
          </div>
        </div>
        <div v-else>
          <span class="text-danger">Aucun utilisateur avec ce nom.
          </span>
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
  data() {
    return {
      fetched: false,
      message: "",
      image: "",
      name: "",
      surname: "",
      email: "",
      telephone: "",
      profession: "",
      biography: "",
      linkedin: "",
      instagram: "",
      facebook: "",
      whatsapp: "",
      github: "",
      fax: "",
    };
  },
  async mounted() {
    try {
      const userData = JSON.parse(localStorage.getItem("userData"));
      console.log(userData);

      const response = await fetch(
        `http://localhost:5000/api/users/${userData.userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + userData.token,

          },
        }
      );

      const content = await response.json();
      if (content.message) {
        this.message = content.message;
        console.log(content.message);
      } else {
        this.fetched = true;
        const user = await content.user;

        this.image = user.image;
        this.name = user.name;
        this.surname = user.surname;
        this.profession = user.profession;
        this.email = user.email;
        this.telephone = user.telephone;
        this.biography = user.biography;
        this.linkedin = user.linkedin;
        this.instagram = user.instagram;
        this.facebook = user.facebook;
        this.whatsapp = user.whatsapp;
        this.fax = user.fax;
      }
    } catch (err) {
      console.log(err.message);
    }
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

.profile_img {
  display: block;
  margin: 3rem auto 1rem;
  border-radius: 50%;
  height: 150px;
  width: 145px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

body {
  background-color: #fff;
}
h2 {
  font-weight: 200;
  margin-bottom: 3rem;
}

.c {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.top-m {
  margin-top: 2rem !important;
}

.contact {
  padding: 1rem;
}
.btn-profile {
  background-color: #ec595a;
  padding: 0.9rem;
}

.btn-profile:hover {
  background-color: #ec595a;
  border: 1px solid #ec595a;
}

.re {
  margin-top: 2rem !important;
}

.register {
  margin-top: 2rem;
  background-color: #ec595a;
}

.icn {
  float: left;
}
</style>