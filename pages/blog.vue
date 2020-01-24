<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="row">
            <div class="col-md-6">
              <div class="blog-entry">
                <a href="single.html" class="img img-2" style="background-image: url(images/image_1.jpg);" />
                <div class="text text-2 pt-2 mt-3">
                  <h3 class="mb-2">
                    <a href="single.html">The Photography Technique</a>
                  </h3>
                  <div class="meta-wrap">
                    <p class="meta">
                      <span>Dec 14, 2018</span>
                      <span><a href="single.html">Photography</a></span>
                      <span>5 Comment</span>
                    </p>
                  </div>
                  <p class="mb-4">
                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="blog-entry">
                <a href="single.html" class="img img-2" style="background-image: url(images/image_2.jpg);" />
                <div class="text text-2 pt-2 mt-3">
                  <h3 class="mb-2">
                    <a href="single.html">The Photography Technique</a>
                  </h3>
                  <div class="meta-wrap">
                    <p class="meta">
                      <span>Dec 14, 2018</span>
                      <span><a href="single.html">Photography</a></span>
                      <span>5 Comment</span>
                    </p>
                  </div>
                  <p class="mb-4">
                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div v-for="post in posts " class="col-md-6">
              <div class="blog-entry">
                <a href="single.html" class="img img-2" style="background-image: url(images/image_2.jpg);" />
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
          </div><!-- END-->
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
        <div class="col-lg-4 sidebar bg-light">
          <div class="sidebar-box">
            <h3 class="sidebar-heading">
              Categories
            </h3>
            <ul class="categories">
              <li><a href="#">Fashion <span>(6)</span></a></li>
              <li><a href="#">Technology <span>(8)</span></a></li>
              <li><a href="#">Travel <span>(2)</span></a></li>
              <li><a href="#">Food <span>(2)</span></a></li>
              <li><a href="#">Photography <span>(7)</span></a></li>
            </ul>
          </div>

          <div class="sidebar-box">
            <h3 class="sidebar-heading">
              Popular Articles
            </h3>
            <div class="block-21 mb-4 d-flex">
              <a class="blog-img mr-4" style="background-image: url(images/image_1.jpg);" />
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
              <a class="blog-img mr-4" style="background-image: url(images/image_2.jpg);" />
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
              <a class="blog-img mr-4" style="background-image: url(images/image_3.jpg);" />
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
              <a href="#" class="tag-cloud-link">animals</a>
              <a href="#" class="tag-cloud-link">human</a>
              <a href="#" class="tag-cloud-link">people</a>
              <a href="#" class="tag-cloud-link">cat</a>
              <a href="#" class="tag-cloud-link">dog</a>
              <a href="#" class="tag-cloud-link">nature</a>
              <a href="#" class="tag-cloud-link">leaves</a>
              <a href="#" class="tag-cloud-link">food</a>
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
  async fetch ({ store }) {
    await store.commit('unset_menu')
    await store.commit('changeTitle', 'Blog')
    await store.commit('changeH1', 'Blog - title')
    await store.commit('changeContent', 'Blog - content')
  }
}
</script>
