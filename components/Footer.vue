<template>
  <footer id="footer-4" class="footer division">
    <div class="container">
      <!-- FOOTER CONTENT -->
      <div class="row">
        <!-- FOOTER INFO -->
        <div class="col-lg-3">
          <div class="footer-info mb-40">
            <img
              src="@/assets/images/logon.png"
              alt=""
              srcset=""
              style="max-height: 50px"
            />
          </div>
        </div>

        <!-- FOOTER LINKS -->
        <div class="col-sm-6 col-md-3 col-lg-2 col-lg-2 col-xl-2 offset-xl-1">
          <div class="footer-links mb-40">
            <!-- Title -->
            <h6 class="h6-xl">A Propos</h6>

            <!-- Footer Links -->
            <ul class="foo-links text-secondary clearfix">
              <li>
                <p class="p-md">
                  <NuxtLink to="/About">Qui Nous Sommes?</NuxtLink>
                </p>
              </li>
              <li>
                <p class="p-md">
                  <NuxtLink to="/About">Notre Equipe</NuxtLink>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <!-- FOOTER LINKS -->
        <div class="col-sm-6 col-md-3 col-lg-2">
          <div class="footer-links mb-40">
            <!-- Title -->
            <h6 class="h6-xl">Découvrir</h6>

            <!-- Footer List -->
            <ul class="foo-links text-secondary clearfix">
              <li>
                <p class="p-md"><a href="#pricing-2">Tarification</a></p>
              </li>
              <li>
                <p class="p-md"><a href="#">Politique de Cookies</a></p>
              </li>
            </ul>
          </div>
        </div>

        <!-- FOOTER LINKS -->
        <div class="col-sm-6 col-md-3 col-lg-2">
          <div class="footer-links mb-40">
            <!-- Title -->
            <h6 class="h6-xl">Support</h6>

            <!-- Footer List -->
            <ul class="foo-links text-secondary clearfix">
              <li>
                <p class="p-md"><a href="#">FAQs</a></p>
              </li>
              <li>
                <p class="p-md">
                  <NuxtLink to="/Contact">Contactez Nous</NuxtLink>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <!-- FOOTER LINKS -->
        <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2">
          <div class="footer-links mb-40">
            <!-- Title -->
            <h6 class="h6-xl">Liens</h6>

            <!-- Social Links -->
            <ul
              class="footer-socials text-secondary ico-25 text-center clearfix"
            >
              <li>
                <a href="#"><span class="flaticon-facebook"></span></a>
              </li>
              <li>
                <a href="#"><span class="flaticon-instagram"></span></a>
              </li>
              <li>
                <a href="#"><span class="flaticon-linkedin"></span></a>
              </li>
              <li>
                <a href="#"><span class="flaticon-youtube"></span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- END FOOTER CONTENT -->

      <hr />

      <!-- BOTTOM FOOTER -->
      <div class="bottom-footer">
        <div class="row row-cols-1 row-cols-md-2 d-flex align-items-center">
          <!-- FOOTER COPYRIGHT -->
          <div class="col">
            <div class="footer-copyright">
              <p>&copy;2021 B-CARTE. Tous Droits Réservés</p>
            </div>
          </div>
        </div>
        <!-- End row -->
      </div>
      <!-- BOTTOM FOOTER -->
    </div>
  </footer>
</template>