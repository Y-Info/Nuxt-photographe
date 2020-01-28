<template>
  <section class="ftco-section bg-light ftco-bread">
    <div class="container">
      <div class="row no-gutters slider-text align-items-center">
        <div class="col-md-9">
          <p class="breadcrumbs">
            <span class="mr-2"><nuxt-link nuxt to="/">Home</nuxt-link></span>
            <span v-if="$store.state.currentPage === 'Article' || $store.state.currentPage === 'Category' || $store.state.currentPage === 'Tag' " class="mr-2"><nuxt-link nuxt to="/blog">Blog</nuxt-link></span>
            <span v-if="$store.state.currentPage==='Article' || $store.state.currentPage === 'Category' || $store.state.currentPage === 'Tag' ">{{ $store.state.H1 }}</span>
            <span v-else>{{ $store.state.currentPage }}</span>
          </p>
          <h1 class="mb-3 bread">
            {{ $store.state.H1 }}
          </h1>
          <p>{{ $store.state.pageContent }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
