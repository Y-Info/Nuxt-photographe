<template>
  <div class="blog-entry">
    <nuxt-link :to="{path: '/blog/article/' + post.title}" v-bind:style="{ backgroundImage: 'url(' + post.img + ')' }" class="img img-2" />
    <div class="text text-2 pt-2 mt-3">
      <h3 class="mb-2">
        <nuxt-link :to="{path: '/blog/article/' + post.title}">
          {{ post.title }}
        </nuxt-link>
      </h3>
      <div class="meta-wrap">
        <p class="meta">
          <span>{{ post.date }}</span>
          <span><nuxt-link :to="{path: '/blog/category/' + post.category}">{{ post.category }}</nuxt-link></span>
          <span>{{ post.nbComment }} Comment</span>
        </p>
      </div>
      <p class="mb-4">
        {{ post.content }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      title: String,
      content: String,
      category: String,
      nbComment: Number,
      date: String,
      img: String,
      default () {
        return {
          title: 'Titre par default',
          content: 'Content par default',
          category: 'Default',
          nbComment: 5,
          date: 'Dec 14, 2018',
          img: '/images/image_2.jpg'
        }
      }
    }
  }
}
</script>
