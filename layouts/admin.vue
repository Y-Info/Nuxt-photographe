<template>
  <v-app>
    <Burger
      v-bind:class="{ active: $store.state.menuTriger }"
    />
    <MenuAdmin />
    <v-content
      id="colorlib-main"
      v-bind:class="{ active: $store.state.menuTriger }"
    >
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import MenuAdmin from '~/components/MenuAdmin'
import Burger from '~/components/Burger'

export default {
  components: {
    MenuAdmin,
    Burger
  },
  created () {
    this.$vuetify.theme.dark = true
  }
}
</script>
