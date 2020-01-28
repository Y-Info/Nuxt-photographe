<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="row">
            <div v-for="post in posts " class="col-md-6">
              <div class="blog-entry">
                <nuxt-link :to="{path: '/blog/article/' + post.title}" class="img img-2" style="background-image: url(/images/image_2.jpg);" />
                <div class="text text-2 pt-2 mt-3">
                  <h3 class="mb-2">
                    <a href="single.html">{{ post.title }}</a>
                  </h3>
                  <div class="meta-wrap">
                    <p class="meta">
                      <span>Dec 14, 2018</span>
                      <span><a href="single.html">{{ post.category }}</a></span>
                      <span>5 Comment</span>
                    </p>
                  </div>
                  <p class="mb-4">
                    {{ post.content }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col text-center">
              <div class="block-27">
                <ul>
                  <li><a href="#">&lt;</a></li>
                  <li class="active">
                    <span>1</span>
                  </li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">&gt;</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <SideBar />
      </div>
    </div>
  </section>
</template>

<script>
import SideBar from '../../../components/SideBar'

export default {
  components: {
    SideBar
  },
  data () {
    return {
      title: 'Mon jolie titre',
      meta_desc: 'Je suis le magnifique content',
      posts: [
        {
          id: 1,
          title: 'je suis le premier article',
          content: 'je suis le content de l\'article',
          category: 'category',
          img: 'je suis une premiere image'
        },
        {
          id: 2,
          title: 'je suis un second titre',
          content: 'je suis le content de l\'article',
          category: 'category',
          img: 'je suis la seconde image'
        }
      ]
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
  async fetch ({ store, params }) {
    await store.commit('unset_menu')
    await store.commit('changeTitle', 'Category')
    await store.commit('changeH1', 'Category : ' + params.id)
    await store.commit('changeContent', 'Blog - Category')
  }
}
</script>
