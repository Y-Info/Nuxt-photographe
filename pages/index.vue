<template>
  <div class="ftc0-section grid">
    <div class="item item--large">
    </div>
    <div class="item item--medium">
    </div>
    <div class="item item--medium">
    </div>
    <div class="item item--medium">
    </div>
    <div class="item item--medium">
    </div>
    <div class="item item--large">
    </div>
    <div class="item">
      <div class="item__details">
        powder toffee
      </div>
    </div>
    <div class="item item--medium">
      <div class="item__details">
        pudding cheesecake
      </div>
    </div>
    <div class="item item--large">
      <div class="item__details">
        toffee bear claw
      </div>
    </div>
    <div class="item">
      <div class="item__details">
        cake cookie croissant
      </div>
    </div>
    <div class="item item--medium">
      <div class="item__details">
        liquorice sweet roll
      </div>
    </div>
    <div class="item item--medium">
      <div class="item__details">
        chocolate marzipan
      </div>
    </div>
    <div class="item item--large">
      <div class="item__details">
        danish dessert lollipop
      </div>
    </div>
    <div class="item">
      <div class="item__details">
        sugar plum dragée
      </div>
    </div>
  </div>
</template>
<style>

  .grid {
    display: grid;
    grid-gap: 90px;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-auto-rows: 150px;
    grid-auto-flow: row dense;
    padding: 20px 130px;
  }

  .item {
    position: relative;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    box-sizing: border-box;
    background: #0c9a9a;
    color: #fff;
    grid-column-start: auto;
    grid-row-start: auto;
    background: url("https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=");
    background-size: cover;
    background-position: center;
    box-shadow: -2px 2px 10px 0px rgba(68, 68, 68, 0.4);
    -webkit-transition: -webkit-transform 0.3s ease-in-out;
    transition: -webkit-transform 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
    cursor: pointer;
    counter-increment: item-counter;
  }
  .item:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.3;
    -webkit-transition: opacity 0.3s ease-in-out;
    transition: opacity 0.3s ease-in-out;
  }
  .item:hover {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
  .item:hover:after {
    opacity: 0;
  }
  .item--medium {
    grid-row-end: span 2;
  }
  .item--large {
    grid-row-end: span 3;
  }
  .item--full {
    grid-column-end: auto;
  }
  @media screen and (min-width: 768px) {
    .item--full {
      grid-column: 1/-1;
      grid-row-end: span 2;
    }
  }
  .item__details {
    position: relative;
    z-index: 1;
    padding: 15px;
    background: #fff;
    text-transform: lowercase;
    letter-spacing: 1px;
    color: #828282;
  }
  .item__details:before {
    content: counter(item-counter);
    font-weight: bold;
    font-size: 1.1rem;
    padding-right: 0.5em;
    color: #444;
  }
</style>
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
    store.commit('changeH1', 'Home')
    store.commit('changeContent', 'je suis le contenu de home')
  }
}
</script>
