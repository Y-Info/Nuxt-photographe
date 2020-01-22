<template>
  <v-app>
    <Burger
      v-bind:class="{ active: $store.state.menuTriger }"
    />
    <Menu />
    <v-content
      id="colorlib-main"
      v-bind:class="{ active: $store.state.menuTriger }"
    >
      <nuxt />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import Burger from '../components/Burger'

export default {
  components: {
    Footer,
    Menu,
    Burger
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Blog',
          to: '/Blog'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
