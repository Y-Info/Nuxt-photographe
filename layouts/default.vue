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
      <PageHead />
      <nuxt />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '~/components/Footer'
import Menu from '~/components/Menu'
import Burger from '~/components/Burger'
import PageHead from '~/components/PageHead'

export default {
  components: {
    Footer,
    Menu,
    Burger,
    PageHead
  },
  created () {
    this.$vuetify.theme.dark = false
  }
}
</script>
