<template>
  <v-app>
    <a
      href="#"
       v-on:click="greet"
       v-bind:class="{ active: isActive }"
       class="js-colorlib-nav-toggle colorlib-nav-toggle"
    ><i></i></a>
    <aside
      id="colorlib-aside"
      role="complementary"
      class="js-fullheight text-center"
      v-bind:class="{ active: isActive }"
    >
      <h1 id="colorlib-logo">
        <nuxt-link
        nuxt
          to="/">
          <span class="flaticon-camera"></span>Capture
        </nuxt-link>
      </h1>
      <nav id="colorlib-main-menu" role="navigation">
        <ul>
          <li class="colorlib-active">
            <nuxt-link color="primary" nuxt to="/">
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link color="primary" nuxt to="/gallery">
              Gallery
            </nuxt-link>
          </li>
          <li>
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
    <v-content
      id="colorlib-main"
      v-bind:class="{ active: isActive }"
    >
        <nuxt />
    </v-content>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      isActive: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  methods: {
    greet () {
      this.isActive = !this.isActive
    }
  }
}
</script>
