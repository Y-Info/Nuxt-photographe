<template>
  <section class="ftco-section contact-section">
    <div class="container">
      <div class="row d-flex mb-5 contact-info">
        <div class="col-md-12 mb-4">
          <h2 class="h3">
            Contact Information
          </h2>
        </div>
        <div class="w-100" />
        <div class="col-md-3 d-flex">
          <div class="info_form bg-light p-4">
            <p>
              <span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016
            </p>
          </div>
        </div>
        <div class="col-md-3 d-flex">
          <div class="info_form bg-light p-4">
            <p>
              <span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a>
            </p>
          </div>
        </div>
        <div class="col-md-3 d-flex">
          <div class="info_form bg-light p-4">
            <p>
              <span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a>
            </p>
          </div>
        </div>
        <div class="col-md-3 d-flex">
          <div class="info_form bg-light p-4">
            <p>
              <span>Website</span> <a href="#">yoursite.com</a>
            </p>
          </div>
        </div>
      </div>
      <div class="row block-9">
        <div class="col-md-6 order-md-last d-flex">
          <form action="#" class="bg-light p-5 contact-form">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Your Name">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Your Email">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Subject">
            </div>
            <div class="form-group">
              <textarea
                id=""
                name=""
                cols="30"
                rows="7"
                class="form-control"
                placeholder="Message"
              />
            </div>
            <div class="form-group">
              <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5">
            </div>
          </form>
        </div>

        <div class="col-md-6 d-flex">
          <div id="map" class="bg-light">
            <img src="/images/maps.png">
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
  transition: 'opacity',
  fetch ({ store }) {
    store.commit('unset_menu')
    store.commit('changeH1', 'Contact - title')
    store.commit('changeContent', 'Contact - content')
  }
}
</script>
