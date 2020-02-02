<template>
  <v-navigation-drawer
    app
    fill-height
    floating
  >
    <v-list dense>
      <p class="menuSep">
        Menu
      </p>
      <v-list-item
        v-for="item in items"
        :key="item.text"
        :to="item.url"
        link
      >
        <v-list-item-action>
          <v-icon dense small color="grey">
            {{ item.icon }}
          </v-icon>
        </v-list-item-action>
        <v-list-item-content dense small>
          <v-list-item-title class="grey--text">
            {{ item.text }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <p class="menuSep">
        Admin
      </p>
      <v-list-item
        v-for="item in itemsAdmin"
        :key="item.text"
        :to="item.url"
        link
      >
        <v-list-item-action>
          <v-icon dense small color="grey">
            {{ item.icon }}
          </v-icon>
        </v-list-item-action>
        <v-list-item-content dense small>
          <v-list-item-title class="grey--text">
            {{ item.text }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    items: [
      { icon: 'fas fa-home', text: 'Home', url: '/' },
      { icon: 'fas fa-fire', text: 'Blog', url: '/' },
      { icon: 'fas fa-heart', text: 'Contact', url: '/' }
    ],
    itemsAdmin: [
      { icon: 'fab fa-keycdn', text: 'Admin', url: '/admin' },
      { icon: 'fas fa-newspaper', text: 'Articles', url: '/admin/articles' },
      { icon: 'fas fa-tags', text: 'Category', url: '/admin/categories' },
      { icon: 'fas fa-images', text: 'Photo', url: '/admin/photos' },
      { icon: 'fas fa-share-alt', text: 'Reseaux sociaux', url: '/admin/rs' },
      { icon: 'fas fa-user', text: 'User', url: '/admin/user' }
    ]
  }),
  created () {
    this.$vuetify.theme.dark = true
  }
}
</script>
