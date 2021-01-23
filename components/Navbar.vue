<template>
  <nav id="navbar">
    <div class="container">
      <!-- Left Wrapper -->
      <div>
        <div class="avatar-brand" />
        <div>Sageflow</div>
        <div />
        <div>Less work. More flow.</div>
      </div>

      <!-- Mid Wrapper -->
      <div>
        <button>
          <div href="">Explore</div>
          <span class="icon-dropdown"></span>
        </button>
        <NuxtLink to="/" class="btn">Community</NuxtLink>
        <NuxtLink to="/" class="btn">Pricing</NuxtLink>
        <NuxtLink to="/" class="btn">Blog</NuxtLink>
      </div>

      <!-- Right Wrapper -->
      <div>Login</div>
      <div>Sign Up</div>
    </div>
  </nav>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  #navbar {
    @apply flex bg-red-50;

    > .container {
      @apply flex mx-auto;
    }
  }
</style>
