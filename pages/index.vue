<template>
  <section class="ftco-section-2">
    <div class="photograhy">
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="/images/image_1.jpg" class="photography-entry img image-popup d-flex justify-content-center align-items-center" style="background-image: url(/images/image_1.jpg);">
            <div class="overlay" />
            <div class="text text-center">
              <h3>Work 02</h3>
              <span class="tag">Nature</span>
            </div>
          </a>
        </div>
        <div class="col-md-4">
          <a href="/images/image_2.jpg" class="photography-entry img image-popup d-flex justify-content-center align-items-center" style="background-image: url(/images/image_2.jpg);">
            <div class="overlay" />
            <div class="text text-center">
              <h3>Work 02</h3>
              <span class="tag">Nature</span>
            </div>
          </a>
        </div>
        <div class="col-md-4">
          <a href="/images/image_3.jpg" class="photography-entry img image-popup d-flex justify-content-center align-items-center" style="background-image: url(/images/image_3.jpg);">
            <div class="overlay" />
            <div class="text text-center">
              <h3>Work 03</h3>
              <span class="tag">Fashion</span>
            </div>
          </a>
        </div>
        <div class="col-md-4">
          <a href="/images/image_4.jpg" class="photography-entry img image-popup d-flex justify-content-center align-items-center" style="background-image: url(/images/image_4.jpg);">
            <div class="overlay" />
            <div class="text text-center">
              <h3>Work 04</h3>
              <span class="tag">Travel</span>
            </div>
          </a>
        </div>
        <div class="col-md-4">
          <a href="/static/images/image_5.jpg" class="photography-entry img image-popup d-flex justify-content-center align-items-center" style="background-image: url(/images/image_5.jpg);">
            <div class="overlay" />
            <div class="text text-center">
              <h3>Work 05</h3>
              <span class="tag">Travel</span>
            </div>
          </a>
        </div>
        <div class="col-md-4">
          <a href="/static/images/image_6.jpg" class="photography-entry img image-popup d-flex justify-content-center align-items-center" style="background-image: url(/images/image_6.jpg);">
            <div class="overlay" />
            <div class="text text-center">
              <h3>Work 06</h3>
              <span class="tag">Travel</span>
            </div>
          </a>
        </div>
        <div class="col-md-4">
          <a href="images/image_7.jpg" class="photography-entry img image-popup d-flex justify-content-center align-items-center" style="background-image: url(/images/image_7.jpg);">
            <div class="overlay" />
            <div class="text text-center">
              <h3>Work 07</h3>
              <span class="tag">Fashion, Model</span>
            </div>
          </a>
        </div>
        <div class="col-md-4">
          <a href="/images/image_8.jpg" class="photography-entry img image-popup d-flex justify-content-center align-items-center" style="background-image: url(/images/image_8.jpg);">
            <div class="overlay" />
            <div class="text text-center">
              <h3>Work 08</h3>
              <span class="tag">Nature</span>
            </div>
          </a>
        </div>
        <div class="col-md-4">
          <a href="/images/image_9.jpg" class="photography-entry img image-popup d-flex justify-content-center align-items-center" style="background-image: url(/images/image_9.jpg);">
            <div class="overlay" />
            <div class="text text-center">
              <h3>Work 09</h3>
              <span class="tag">Technology</span>
            </div>
          </a>
        </div>
        <div class="col-md-4">
          <a href="/images/image_10.jpg" class="photography-entry img image-popup d-flex justify-content-center align-items-center" style="background-image: url(/images/image_10.jpg);">
            <div class="overlay" />
            <div class="text text-center">
              <h3>Work 10</h3>
              <span class="tag">Model</span>
            </div>
          </a>
        </div>
        <div class="col-md-4">
          <a href="/images/image_11.jpg" class="photography-entry img image-popup d-flex justify-content-center align-items-center" style="background-image: url(/images/image_11.jpg);">
            <div class="overlay" />
            <div class="text text-center">
              <h3>Work 11</h3>
              <span class="tag">Fashion</span>
            </div>
          </a>
        </div>
        <div class="col-md-4">
          <a href="/images/image_12.jpg" class="photography-entry img image-popup d-flex justify-content-center align-items-center" style="background-image: url(/images/image_12.jpg);">
            <div class="overlay" />
            <div class="text text-center">
              <h3>Work 12</h3>
              <span class="tag">Photography</span>
            </div>
          </a>
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
  transition: 'bounce',

  layout: 'home',
  fetch ({ store }) {
    store.commit('unset_menu')
    store.commit('changeH1', 'Home')
    store.commit('changeContent', 'je suis le contenu de home')
  }
}
</script>
