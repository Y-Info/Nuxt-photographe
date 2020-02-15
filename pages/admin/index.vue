<template>
  <section>
    <GraphAdmin />
    <GraphAdmin />
    <GraphAdmin />
    <GraphAdmin />
  </section>
</template>
<script>
import GraphAdmin from '~/components/GraphAdmin'
export default {
  layout: 'admin',
  components: {
    GraphAdmin
  },
  data () {
    return {
      title: 'Accueil Admin',
      meta_desc: 'Je suis le magnifique content'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta_desc }
      ]
    }
  },
  fetch ({ store }) {
    store.commit('unset_menu')
    store.commit('changeH1', 'Admin')
    store.commit('changeTitle', 'Accueil Admin')
  }
}
</script>
