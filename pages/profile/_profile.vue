<template>
  <body>
    <link
      rel="stylesheet"
      href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
    />
    <link
      rel="stylesheet"
      href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
    />
    <section v-if="fetched" class="pt-16 bg-blueGray-50">
      <div class="w-full lg:w-4/12 px-4 mx-auto">
        <div
          class="
            relative
            flex flex-col
            min-w-0
            break-words
            bg-white
            w-full
            mb-6
            shadow-xl
            rounded-lg
            mt-1
          "
        >
          <div class="px-6">
            <div class="flex flex-wrap justify-center">
              <div class="w-full px-4 flex justify-center">
                <div class="relative">
                  <img
                    :src="image"
                    alt="..."
                    class="
                      shadow-xl
                      rounded-full
                      h-auto
                      align-middle
                      border-none
                      absolute
                      -m-16
                      -ml-20
                      lg:-ml-16
                      max-w-150-px
                    "
                  />
                </div>
              </div>
              <div class="w-full px-4 text-center mt-20">
                <div class="flex justify-center py-4 lg:pt-4 pt-8">
                  <div class="mr-4 p-3 text-center">
                    <span
                      class="
                        text-xl
                        font-bold
                        block
                        uppercase
                        tracking-wide
                        text-blueGray-600
                      "
                    >
                      <a id="UserMessage" :href="sms"
                        ><i class="fas fa-envelope mr-2 text-lg"></i
                      ></a>
                      <br />
                    </span>
                    <span class="text-sm text-blueGray-400">Message</span>
                  </div>
                  <div class="mr-4 p-3 text-center">
                    <span
                      class="
                        text-xl
                        font-bold
                        block
                        uppercase
                        tracking-wide
                        text-blueGray-600
                      "
                    >
                      <a id="UserTelephone" :href="telephone"
                        ><i class="fas fa-phone mr-2 text-lg"></i
                      ></a>
                      <br />
                    </span>
                    <span class="text-sm text-blueGray-400">Telephone</span>
                  </div>
                  <div class="mr-4 p-3 text-center">
                    <span
                      class="
                        text-xl
                        font-bold
                        block
                        uppercase
                        tracking-wide
                        text-blueGray-600
                      "
                    >
                      <a id="UserEmail" :href="email"
                        ><i class="fas fa-at mr-2 text-lg"></i
                      ></a>
                      <br />
                    </span>
                    <span class="text-sm text-blueGray-400">Email</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center">
              <h3
                class="
                  text-xl
                  font-semibold
                  leading-normal
                  mb-2
                  text-blueGray-700
                  mb-2
                "
              >
                <span>{{ fullName }}</span>
              </h3>
              <div
                class="
                  text-sm
                  leading-normal
                  mt-0
                  mb-2
                  text-blueGray-400
                  font-bold
                  uppercase
                "
              >
                <i
                  class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"
                ></i>
                <span>{{ cityCountry }} </span>
              </div>
            </div>
            <div class="mt-10 pt-8 border-t border-blueGray-200 text-center">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-9/12 px-2">
                  <p
                    class="
                      mb-2
                      text-lg
                      leading-relaxed
                      text-blueGray-700 text-justify
                    "
                  >
                    {{ biography }}
                  </p>
                </div>
              </div>
            </div>
            <div
              v-if="social"
              class="mt-10 py-10 border-t border-blueGray-200 text-center mx-auto"
            >
              <div class="flex flex-wrap justify-start">
                <div
                  v-if="linkedin"
                  class="w-full lg:w-9/12 bg-blue-400 py-3 px-2 rounded-md mb-4"
                >
                  <a id="UserLinkedin" :href="linkedin" class="text-white">
                    <i class="float-left fab fa-linkedin mr-2 text-lg"></i>
                    Linkedin
                  </a>
                </div>
                <div
                  v-if="whatsapp"
                  class="
                    w-full
                    lg:w-9/12
                    bg-green-400
                    py-3
                    px-2
                    rounded-md
                    mb-4
                  "
                >
                  <a id="UserWhatsapp" :href="whatsapp" class="text-white">
                    <i class="float-left fab fa-whatsapp mr-2 text-lg"></i>
                    Whatsapp
                  </a>
                </div>
                <div
                  v-if="facebook"
                  class="w-full lg:w-9/12 bg-blue-600 py-3 px-2 rounded-md mb-4"
                >
                  <a id="UserFacebook" :href="facebook" class="text-white">
                    <i class="float-left fab fa-facebook mr-2 text-lg"></i>
                    Facebook
                  </a>
                </div>
                <div
                  v-if="instagram"
                  class="w-full lg:w-9/12 bg-red-600 py-3 px-2 rounded-md mb-4"
                >
                  <a id="UserInstagram" :href="instagram" class="text-white">
                    <i class="float-left fab fa-instagram mr-2 text-lg"></i>
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            <div class="mt-2 py-10 border-t border-blueGray-200 text-center">
              <div class="flex flex-wrap justify-start">
                <div
                  class="w-full lg:w-9/12 bg-blue-400 py-3 px-2 rounded-md mb-4"
                >
                  <button
                    type="submit"
                    v-on:click.prevent="SaveContact"
                    class="text-white"
                  >
                    Enregistrer
                  </button>
                </div>
              </div>
              <span class="text-danger">{{ errors }}</span>
            </div>
          </div>
        </div>
      </div>
      <footer class="relative pt-8 pb-6 mt-8">
        <div class="container mx-auto px-4">
          <div
            class="
              flex flex-wrap
              items-center
              md:justify-between
              justify-center
            "
          >
            <div class="w-full md:w-6/12 px-4 mx-auto text-center">
              <div class="text-sm text-blueGray-500 font-semibold py-1">
                <a href="#">b-carte 2021</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
    <section v-else class=" container mx-auto">
      <h2 class="text-center mt-12 text-4xl">
        User Not <span class="text-red-600 text-4xl">Found</span>
    
      </h2>
    </section>
  </body>
</template>

<script>
export default {
    data () {
      return {
        fetched: false,
        image: "",
        fullName: "",
        cityCountry: "",
        address: "",
        profession: "",
        biography: "",
        sms: "",
        telephone: "",
        email: "",
        linkedin: "",
        whatsapp: "",
        facebook: "",
        instagram: "",
        social: false,
        errors: ""
      }
    },
    async mounted() {
      try {
        if (!this.$route.params.profile) {
          this.$router.push("/");
        }
        const response = await fetch(
          `${"http://10.11.12.9:8000" || "http://localhost:8000"}/api/users/${this.$route.params.profile}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        const content = await response.json();
        if (content.message) {
          this.errors = content.message;
        } else {
          const user = await content.user;
          this.fetched = true;
          this.image = `${"http://10.11.12.9:8000" || "http://localhost:8000"}/${user.image}`;
          this.fullName = `${user.surname} ${user.name}`;
          this.name = user.name;
          this.surname = user.surname;
          this.cityCountry = `${user.city}, ${user.country}`;
          this.address = user.address;
          this.sms = `sms:${user.telephone}`;
          this.telephone = `tel:${user.telephone}`;
          this.email = `mailto:${user.email}`;
          this.linkedin = `${user.linkedin}`;
          this.whatsapp = `${user.whatsapp}`;
          this.facebook = `${user.facebook}`;
          this.instagram = `${user.instagram}`;
          this.biography = user.biography;
          this.social = this.linkedin || this.whatsapp || this.facebook || this.instagram;
        }
      } catch (err) {
        console.log(err);
        this.errors = err;
      }
    },
    methods: {
      async SaveContact() {
        try {
          if (!this.$route.params.profile) {
            this.$router.push("/");
          }
          const response = await fetch(
            `${"http://10.11.12.9:8000" || "http://localhost:8000"}/api/contacts/${this.$route.params.profile}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json"
              }
            }
          );
          const content = await response.json();
          if (content.message) {
            this.errors = content.message;
          } else {
            window.location.href = `${"http://10.11.12.9:8000" || "http://localhost:8000"}/${content.link}`;
          }
        } catch (err) {
          console.log(err);
          this.errors = err;
        }
      }
    }
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