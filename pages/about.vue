<template>
  <section class="ftco-section-no-padding bg-light">
    <div class="hero-wrap">
      <div class="overlay" />
      <div class="d-flex">
        <div class="author-image text img p-md-5" style="background-image: url(/images/author.jpg);" />
        <div class="author-info text p-4 mt-5 mb-5">
          <div class="desc">
            <h1 class="mb-4">
              Capture Photography Agency
            </h1>
            <p class="mb-4">
              Photography Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
            <ul class="mb-4">
              <li>Even the all-powerful Pointing has no control about the blind texts</li>
              <li>One day however a small line of blind text by the name of Lorem Ipsum decided</li>
              <li>The Big Oxmox advised her not to do so, because there were thousands</li>
            </ul>
            <ul class="ftco-social mt-3">
              <li><a href="#"><span class="icon-twitter" /></a></li>
              <li><a href="#"><span class="icon-facebook" /></a></li>
              <li><a href="#"><span class="icon-instagram" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      title: 'Mon jolie titre',
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
    await store.commit('changeH1', 'About- Title')
    await store.commit('changeTitle', 'About')
    await store.commit('changeContent', 'About - Content')
  }
}
</script>
