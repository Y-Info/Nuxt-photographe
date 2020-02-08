<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="row">
            <div v-for="post in posts" :key="post.id" class="col-md-6">
              <BlogPreview
                v-bind:post="post"
              />
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
import SideBar from '~/components/SideBar'
import BlogPreview from '~/components/BlogPreview'

export default {
  components: {
    SideBar,
    BlogPreview
  },
  data () {
    return {
      title: 'Blog category : ' + this.$route.params.pathMatch,
      meta_desc: 'Je suis le magnifique content',
      posts: [
        {
          id: 1,
          title: 'je suis le premier article',
          content: 'je suis le content de l\'article',
          category: 'category',
          img: '/images/image_2.jpg',
          date: '12 janv 2020',
          nbComment: '5'
        },
        {
          id: 2,
          title: 'je suis un second titre',
          content: 'je suis le content de l\'article',
          category: 'category',
          img: '/images/image_2.jpg',
          date: '12 janv 2020',
          nbComment: '1'
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
    await store.commit('changeTitle', 'Tag')
    await store.commit('changeH1', 'Tag : ' + params.pathMatch)
    await store.commit('changeContent', 'Blog - Tag')
  }
}
</script>
