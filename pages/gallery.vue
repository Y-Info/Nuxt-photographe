<template>
  <div>
    <section class="bg-light ftco-section ftco-bread">
      <div class="container">
        <div class="row no-gutters slider-text align-items-center">
          <div class="col-md-9">
            <p class="breadcrumbs">
              <span class="mr-2">
                <nuxt-link nuxt to="/">Home</nuxt-link></span> <span>Gallery</span>
            </p>
            <h1 class="mb-3 bread">
              Galleries
            </h1>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="photograhy">
        <div class="row no-gutters">
          <div class="col-md-4">
            <a href="/images/image_1.jpg" class="photography-entry img image-popup d-flex justify-content-center align-items-center" style="background-image: url(/images/image_1.jpg);">
              <div class="overlay" />
              <div class="text text-center">
                <h3>Work 01</h3>
                <span class="tag">Model</span>
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
            <a href="/images/image_5.jpg" class="photography-entry img image-popup d-flex justify-content-center align-items-center" style="background-image: url(/images/image_5.jpg);">
              <div class="overlay" />
              <div class="text text-center">
                <h3>Work 05</h3>
                <span class="tag">Travel</span>
              </div>
            </a>
          </div>
          <div class="col-md-4">
            <a href="/images/image_6.jpg" class="photography-entry img image-popup d-flex justify-content-center align-items-center" style="background-image: url(/images/image_6.jpg);">
              <div class="overlay" />
              <div class="text text-center">
                <h3>Work 06</h3>
                <span class="tag">Travel</span>
              </div>
            </a>
          </div>
          <div class="col-md-4">
            <a href="/images/image_7.jpg" class="photography-entry img image-popup d-flex justify-content-center align-items-center" style="background-image: url(/images/image_7.jpg);">
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
  </div>
</template>
<script>
export default {
  async fetch ({ store }) {
    await store.commit('change_name', 'Gallery')
  }
}
</script>
