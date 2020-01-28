<template>
  <div class="col-lg-4 sidebar bg-light">
    <div class="sidebar-box">
      <h3 class="sidebar-heading">
        Categories
      </h3>
      <ul class="categories">
        <li v-for="category in categories " :key="category.id">
          <nuxt-link
            :to="{path: '/blog/category/' + category.name}"
          >
            {{ category.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>

    <div class="sidebar-box">
      <h3 class="sidebar-heading">
        Popular Articles
      </h3>
      <div class="block-21 mb-4 d-flex">
        <a class="blog-img mr-4" style="background-image: url(/images/image_1.jpg);" />
        <div class="text">
          <h3 class="heading">
            <a href="#">Even the all-powerful Pointing has no control</a>
          </h3>
          <div class="meta">
            <div><a href="#"><span class="icon-calendar" /> Oct. 04, 2018</a></div>
            <div><a href="#"><span class="icon-person" /> Dave Lewis</a></div>
            <div><a href="#"><span class="icon-chat" /> 19</a></div>
          </div>
        </div>
      </div>
      <div class="block-21 mb-4 d-flex">
        <a class="blog-img mr-4" style="background-image: url(/images/image_2.jpg);" />
        <div class="text">
          <h3 class="heading">
            <a href="#">Even the all-powerful Pointing has no control</a>
          </h3>
          <div class="meta">
            <div><a href="#"><span class="icon-calendar" /> Oct. 04, 2018</a></div>
            <div><a href="#"><span class="icon-person" /> Dave Lewis</a></div>
            <div><a href="#"><span class="icon-chat" /> 19</a></div>
          </div>
        </div>
      </div>
      <div class="block-21 mb-4 d-flex">
        <a class="blog-img mr-4" style="background-image: url(/images/image_3.jpg);" />
        <div class="text">
          <h3 class="heading">
            <a href="#">Even the all-powerful Pointing has no control</a>
          </h3>
          <div class="meta">
            <div><a href="#"><span class="icon-calendar" /> Oct. 04, 2018</a></div>
            <div><a href="#"><span class="icon-person" /> Dave Lewis</a></div>
            <div><a href="#"><span class="icon-chat" /> 19</a></div>
          </div>
        </div>
      </div>
    </div>

    <div class="sidebar-box">
      <h3 class="sidebar-heading">
        Tag Cloud
      </h3>
      <ul class="tagcloud">
        <nuxt-link v-for="tag in tags " :key="tag.id" :to="{path: '/blog/tag/' + tag.name}" class="tag-cloud-link">
          {{ tag.name }}
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      categories: [
        {
          id: 1,
          name: 'test'
        },
        {
          id: 2,
          name: 'test_2'
        }
      ],
      tags: [
        { id: 1,
          name: 'animals'
        },
        {
          id: 2,
          name: 'Human'
        },
        {
          id: 3,
          name: 'people'
        },
        {
          id: 4,
          name: 'cat'
        },
        {
          id: 5,
          name: 'dog'
        },
        {
          id: 6,
          name: 'nature'
        },
        {
          id: 7,
          name: 'leaves'
        },
        {
          id: 8,
          name: 'food'
        }
      ]
    }
  }
}
</script>
