<template>
  <section class="ftco-section bg-light ftco-bread">
    <div class="container">
      <div class="row no-gutters slider-text align-items-center">
        <div class="col-md-9">
          <p class="breadcrumbs">
            <span class="mr-2"><nuxt-link nuxt to="/">Home</nuxt-link></span> <span>{{ $store.state.currentPage }}</span>
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
