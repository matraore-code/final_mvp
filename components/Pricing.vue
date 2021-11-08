<template>
  <section
    id="pricing-2"
    class="bg-snow pb-60 inner-page-hero pricing-section division"
  >
    <div class="container">
      <!-- SECTION TITLE -->
      <div class="row justify-content-center">
        <div class="col-lg-10 col-xl-8">
          <div class="section-title title-01 mb-80">
            <!-- Title -->
            <h2 class="h2-md">Tarification simple et flexible</h2>

            <!-- Text -->
            <p class="p-xl">
              Aucune carte de crédit requise. Payez une seule fois et à vie
            </p>
          </div>
        </div>
      </div>

      <!-- PRICING TABLES -->
      <div class="pricing-2-row pc-25">
        <div class="row row-cols-1 row-cols-md-2">
          <!-- BASIC PLAN -->
          <!-- END BASIC PLAN -->

          <!-- AGENCY PLAN -->
          <div class="col">
            <div class="pricing-2-table bg-white mb-40 wow fadeInUp">
              <!-- Plan Price -->
              <div class="pricing-plan">
                <!-- Plan Title -->
                <div class="pricing-title">
                  <h5 class="h5-xs text-center">TAGS</h5>
                </div>

                <!-- Price -->
                <h5 class="formule">129 mad</h5>
              </div>

              <!-- Plan Features  -->
              <ul class="features">
                <li class="d-flex">
                  <a href="#"><span class="flaticon-check"></span></a>
                  <p class="ps-1"><span>Carte business physique</span></p>
                </li>
                <li class="d-flex">
                  <a href="#"><span class="flaticon-check"></span></a>
                  <p class="ps-1">
                  <span>Carte virtuelle</span></p>
                </li>
                <li class="d-flex">
                  <a href="#"><span class="flaticon-check"></span></a>
                  <p class="ps-1">
                    <span>Partage ta carte via QR code, email or a nfcTag</span>
                  </p>
                </li>
                                <li class="d-flex">
                  <a href="#"><span class="flaticon-check"></span></a>
                  <p class="ps-1">
                    <span>Remplacement gratuit de la carte</span>
                  </p>
                </li>

              </ul>

              <!-- Pricing Plan Button -->
              <NuxtLink
                to="/form"
                class="btn btn-sm btn-price"
                >Choisir</NuxtLink
              >
            </div>
          </div>

          <div class="col">
            <div class="pricing-2-table bg-white mb-40 wow fadeInUp">
              <!-- Plan Price -->
              <div class="pricing-plan">
                <!-- Plan Title -->
                <div class="pricing-title">
                  <h5 class="h5-xs text-center">CARTES</h5>
                </div>

                <!-- Price -->
               
                <h5 class="formule">149 dhs</h5>
              </div>

              <!-- Plan Features  -->
              <ul class="features">
                <li class="d-flex">
                  <a href="#"><span class="flaticon-check"></span></a>
                  <p class="ps-1">
                    <span>Carte business physique personnaliser</span>
                  </p>
                </li>
                <li class="d-flex">
                  <a href="#"><span class="flaticon-check"></span></a>
                  <p class="ps-1"><span>Carte virtuelle</span></p>
                </li>
                <li class="d-flex">
                  <a href="#"><span class="flaticon-check"></span></a>
                  <p class="ps-1">
                    <span>Partage ta carte via QR code, email or a nfcTag</span>
                  </p>
                </li>
                <!-- <li class="d-flex">
                  <a href="#"><span class="flaticon-check"></span></a>
                  <p class="ps-1">
                    <span>Carnet d'adresse avec contact illimite</span>
                  </p>
                </li>
                <li class="d-flex">
                  <a href="#"><span class="flaticon-check"></span></a>
                  <p class="ps-1">
                    <span>Ajouter des notes et des tags au Contact</span>
                  </p>
                </li>
                <li class="d-flex">
                  <a href="#"><span class="flaticon-check"></span></a>
                  <p class="ps-1">
                    <span>Synchroniser avec les contacts google</span>
                  </p>
                </li> -->
                <li class="d-flex">
                  <a href="#"><span class="flaticon-check"></span></a>
                  <p class="ps-1">
                    <span>Remplacement gratuit de la carte</span>
                  </p>
                </li>
              </ul>

              <!-- Pricing Plan Button -->
              <NuxtLink
                to="/form"
                class="btn btn-sm btn-price"
                >Choisir</NuxtLink
              >
            </div>
          </div>
          <!-- END AGENCY PLAN  -->
        </div>
      </div>
      <!-- END PRICING TABLES -->

      <!-- PRICING NOTICE TEXT -->
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="pricing-notice text-center mb-40">
            <p class="p-md">
              Les prix ci-dessus n’incluent pas les taxes applicables basées sur
              votre adresse de facturation. Le prix final sera affiché sur la
              caisse page, avant la fin du paiement
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- End container -->
  </section>
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
#pricing-2 {
  background: rgb(246, 245, 240);
  background: linear-gradient(
    90deg,
    rgba(246, 245, 240, 1) 0%,
    rgba(244, 241, 232, 1) 38%,
    rgba(254, 247, 220, 1) 100%
  );

}

  span {
    font-size: 1rem;
    font-weight: 200 !important;
  }

  .flaticon-check {
    color: green;
  }

  .formule {
    color: #ec595a;
    margin: 0 auto;
    font-size: 2rem !important;
    text-align: center !important;
  }

  .btn-price{
    background: #ec595a;
    margin: 0 auto;
    display: block;
  }

  .btn-price:hover{
    background: #ec595a;
    margin: 0 auto;
    display: block;
    color: #fff;
  }
</style>