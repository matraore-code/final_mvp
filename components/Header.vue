<template>
    <header id="header" class="header tra-menu navbar-dark">
      <div class="header-wrapper">
        <!-- MOBILE HEADER -->
        <div class="wsmobileheader clearfix">
          <span class="smllogo"
            ><img src="@/assets/images/logon.png" alt="" srcset=""
          /></span>
          <a id="wsnavtoggle" class="wsanimated-arrow"><span></span></a>
        </div>

        <!-- NAVIGATION MENU -->
        <div class="wsmainfull menu clearfix">
          <div class="wsmainwp clearfix">
            <!-- HEADER LOGO -->
            <div class="desktoplogo">
              <a href="#hero-16" class="#">
                <img src="@/assets/images/logon.png" />
              </a>
            </div>
            <div class="desktoplogo">
              <a href="#hero-16" class="logo-white">B-CARD</a>
            </div>

            <!-- MAIN MENU -->
            <nav class="wsmenu clearfix">
              <ul class="wsmenu-list nav-violet-red-hover">
                <!-- MEGAMENU -->
                <li aria-haspopup="true" class="mg_link">
                  <NuxtLink to="/">Accueil</NuxtLink>
                </li>
                <!-- END MEGAMENU -->

                <!-- DROPDOWN MENU -->
                <li aria-haspopup="true"><a href="#content-9">Comment ça marche</a></li>



                <!-- DROPDOWN MENU -->
                <li aria-haspopup="true"><a href="#pricing-2">Tarif</a></li>
                <li aria-haspopup="true"><NuxtLink to="/About">A Propos</NuxtLink></li>
                <!-- <li aria-haspopup="true"><NuxtLink to="/Search">Annuaire</NuxtLink></li> -->

                <!-- END DROPDOWN MENU -->

                <!-- HEADER BUTTON -->
                <li class="nl-simple" aria-haspopup="true">
                  <Nuxt-link to='/form' class="btn btn-violet-red tra-grey-hover last-link"> Commencer</Nuxt-link>
                  <!-- <a
                    href="#content-5"
                    class="btn btn-violet-red tra-grey-hover last-link"
                    >Commencer</a
                  > -->
                </li>
              </ul>
            </nav>
            <!-- END MAIN MENU -->
          </div>
        </div>
        <!-- END NAVIGATION MENU -->
      </div>
      <!-- End header-wrapper -->
    </header>
</template>

<style>
/* .wsmenu {
    color: brown !important;
} */
</style>

<script>
export default {
    head() {
        return {
            link: {
                ref: 'stylesheet',
                href: '@/assets/css/dropdown-effects/fade-down.css',
                id: 'effect',
                media: 'all'
            }
        }
    }
}
</script>
