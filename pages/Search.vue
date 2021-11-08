<template>
  <div class="container search justify-content-center">
    <div class="">
      <h1 class="text-center my-5">Annuaire</h1>
      <div class="mb-3 align-items-center">
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Rechercher une societe, un service"
        />
        <NuxtLink to="#" class="btn btn-search">Rechercher</NuxtLink>
      </div>
    </div>
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
.search {
position: absolute;
left: 50%;
top: 45%;
transform: translate(-50%, -50%);
/* border: 5px solid #FFFF00; */
padding: 10px;
}

.form-control:focus {
  box-shadow: none !important;
  border-bottom: 2px solid #ec595a;
}

.form-control {
  border-top: none;
  border-right: none;
  border-left: none;
  padding: 0.9rem;
}

.btn-search {
  background: #ec595a;
  margin: 2rem auto 0 ;
  display: block;
  width: 13%;

}
</style>