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
  async fetch ({ store }) {
    await store.commit('unset_menu')
    await store.commit('changeH1', 'Admin')
    await store.commit('changeTitle', 'Accueil Admin')
  }
}
</script>
