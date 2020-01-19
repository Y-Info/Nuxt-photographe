<template>
  <aside
    id="colorlib-aside"
    v-bind:class="{ active: $store.state.menuTriger }"
    role="complementary"
    class="js-fullheight text-center"
  >
    <h1 id="colorlib-logo">
      <nuxt-link
        nuxt
        to="/"
      >
        <span class="flaticon-camera" />Capture
      </nuxt-link>
    </h1>
    <nav id="colorlib-main-menu" role="navigation">
      <ul>
        <li v-if="$store.state.currentPage === 'Home'" class="colorlib-active">
          <nuxt-link color="primary" nuxt to="/">
            Home
          </nuxt-link>
        </li>
        <li v-else>
          <nuxt-link color="primary" nuxt to="/">
            Home
          </nuxt-link>
        </li>
        <li v-if="$store.state.currentPage === 'Gallery'" class="colorlib-active">
          <nuxt-link color="primary" nuxt to="/gallery">
            Gallery
          </nuxt-link>
        </li>
        <li v-else>
          <nuxt-link color="primary" nuxt to="/gallery">
            Gallery
          </nuxt-link>
        </li>
        <li v-if="$store.state.currentPage === 'About'" class="colorlib-active">
          <nuxt-link color="primary" nuxt to="/about">
            About
          </nuxt-link>
        </li>
        <li v-else>
          <nuxt-link color="primary" nuxt to="/about">
            About
          </nuxt-link>
        </li>
        <li>
          <nuxt-link color="primary" nuxt to="/">
            Blog
          </nuxt-link>
        </li>
        <li>
          <nuxt-link color="primary" nuxt to="/">
            Contact
          </nuxt-link>
        </li>
      </ul>
    </nav>

    <div class="colorlib-footer">
      <h3>Follow Us Here!</h3>
      <div class="d-flex justify-content-center">
        <ul class="d-flex align-items-center">
          <li class="d-flex align-items-center jusitfy-content-center">
            <a href="#"><i class="icon-facebook" /></a>
          </li>
          <li class="d-flex align-items-center jusitfy-content-center">
            <a href="#"><i class="icon-twitter" /></a>
          </li>
          <li class="d-flex align-items-center jusitfy-content-center">
            <a href="#"><i class="icon-instagram" /></a>
          </li>
          <li class="d-flex align-items-center jusitfy-content-center">
            <a href="#"><i class="icon-linkedin" /></a>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>
