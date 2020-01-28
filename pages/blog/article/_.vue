<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <h2 class="mb-3 font-weight-bold">
            {{ posts.title }}
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p>
          <p>
            <img src="images/image_1.jpg" alt="" class="img-fluid">
          </p>
          <p>Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!</p>
          <h2 class="mb-3 mt-5 font-weight-bold">
            #2. Creative WordPress Themes
          </h2>
          <p>Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.</p>
          <p>
            <img src="images/image_2.jpg" alt="" class="img-fluid">
          </p>
          <p>Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.</p>
          <p>Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.</p>
          <p>Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!</p>
          <p>Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?</p>
          <div class="tag-widget post-tag-container mb-5 mt-5">
            <div class="tagcloud">
              <a href="#" class="tag-cloud-link">Life</a>
              <a href="#" class="tag-cloud-link">Sport</a>
              <a href="#" class="tag-cloud-link">Tech</a>
              <a href="#" class="tag-cloud-link">Travel</a>
            </div>
          </div>
          <div class="pt-5 mt-5">
            <h3 class="mb-5 font-weight-bold">
              6 Comments
            </h3>
            <ul class="comment-list">
              <li class="comment">
                <div class="vcard bio">
                  <img src="images/person_1.jpg" alt="Image placeholder">
                </div>
                <div class="comment-body">
                  <h3>John Doe</h3>
                  <div class="meta">
                    October 03, 2018 at 2:21pm
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                </div>
              </li>
            </ul>
            <!-- END comment-list -->

            <div class="comment-form-wrap pt-5">
              <h3 class="mb-5">
                Leave a comment
              </h3>
              <form action="#" class="p-3 p-md-5 bg-light">
                <div class="form-group">
                  <label for="name">Name *</label>
                  <input id="name" type="text" class="form-control">
                </div>
                <div class="form-group">
                  <label for="email">Email *</label>
                  <input id="email" type="email" class="form-control">
                </div>

                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea id="message" name="" cols="30" rows="10" class="form-control" />
                </div>
                <div class="form-group">
                  <input type="submit" value="Post Comment" class="btn py-3 px-4 btn-primary">
                </div>
              </form>
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
      title: this.$route.params.pathMatch,
      meta_desc: 'Je suis le magnifique content',
      posts: {
        id: 1,
        title: 'le titre',
        content: 'je suis le content de l\'article',
        category: 'category',
        img: 'je suis une premiere image'
      }
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
    await store.commit('changeTitle', 'Article')
    await store.commit('changeH1', 'Article : ' + params.pathMatch)
    await store.commit('changeContent', 'Blog - content')
  }
}
</script>
