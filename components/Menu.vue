<template>
  <aside
    id="colorlib-aside"
    v-bind:class="{ active: $store.state.menuTriger }"
    role="complementary"
    class="js-fullheight text-center"
  >
    <h1 id="colorlib-logo">
      <nuxt-link
        class="logo_menu"
        nuxt
        to="/"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 512 512"><g><path d="M256,376a88,88,0,1,0-88-88A88.1,88.1,0,0,0,256,376Zm0-160a72,72,0,1,1-72,72A72.081,72.081,0,0,1,256,216Z" /><path d="M496,136H472V112a8,8,0,0,0-8-8H384a8,8,0,0,0-8,8v24H356.94L327.16,76.42A8.011,8.011,0,0,0,320,72H192a8.011,8.011,0,0,0-7.16,4.42L155.06,136H136V112a8,8,0,0,0-8-8h-8V88a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8v16H48a8,8,0,0,0-8,8v24H16a8,8,0,0,0-8,8V432a8,8,0,0,0,8,8H496a8,8,0,0,0,8-8V144A8,8,0,0,0,496,136ZM392,120h64v16H392ZM72,96h32v8H72ZM56,120h64v16H56ZM488,424H24V360H160.06a119.88,119.88,0,0,0,191.88,0H488ZM152,288A104,104,0,1,1,256,392,104.112,104.112,0,0,1,152,288Zm336,56H362.1a120,120,0,1,0-212.2,0H24V152H160a8.011,8.011,0,0,0,7.16-4.42L196.94,88H315.06l29.78,59.58A8.011,8.011,0,0,0,352,152H488Z" /><path d="M424,232h48a8,8,0,0,0,8-8V176a8,8,0,0,0-8-8H424a8,8,0,0,0-8,8v48A8,8,0,0,0,424,232Zm8-48h32v32H432Z" /><path d="M88,392H48a8,8,0,0,0,0,16H88a8,8,0,0,0,0-16Z" /><path d="M120,392h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z" /><path d="M208,152h96a8,8,0,0,0,8-8V112a8,8,0,0,0-8-8H208a8,8,0,0,0-8,8v32A8,8,0,0,0,208,152Zm8-32h80v16H216Z" /></g></svg>
      </nuxt-link>
    </h1>
    <nav id="colorlib-main-menu" role="navigation">
      <ul>
        <li v-if="$nuxt.$route.name === 'index'" class="colorlib-active">
          <nuxt-link color="primary" nuxt to="/">
            Home
          </nuxt-link>
        </li>
        <li v-else>
          <nuxt-link color="primary" nuxt to="/">
            Home
          </nuxt-link>
        </li>
        <li v-if="$nuxt.$route.name === 'gallery'" class="colorlib-active">
          <nuxt-link color="primary" nuxt to="/gallery">
            Gallery
          </nuxt-link>
        </li>
        <li v-else>
          <nuxt-link color="primary" nuxt to="/gallery">
            Gallery
          </nuxt-link>
        </li>
        <li v-if="$nuxt.$route.name === 'about'" class="colorlib-active">
          <nuxt-link color="primary" nuxt to="/about">
            About
          </nuxt-link>
        </li>
        <li v-else>
          <nuxt-link color="primary" nuxt to="/about">
            About
          </nuxt-link>
        </li>
        <li v-if="$nuxt.$route.name === 'contact'" class="colorlib-active">
          <nuxt-link color="primary" nuxt to="/contact">
            Contact
          </nuxt-link>
        </li>
        <li v-else>
          <nuxt-link color="primary" nuxt to="/contact">
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
