<template>
  <nav id="navbar">
    <div class="container">
      <!-- Left Wrapper -->
      <div class="left-wrapper">
        <img src="../assets/images/avatar-brand.png" alt="Sageflow logo" />
        <div class="brand">Sageflow</div>
        <div class="v-divider" />
        <div class="tagline">Less work. More flow.</div>
      </div>

      <!-- Mid Wrapper -->
      <div class="mid-wrapper">
        <button>
          <div href="">Explore</div>
          <span class="icon-dropdown"></span>
        </button>
        <NuxtLink to="/" class="btn">Community</NuxtLink>
        <NuxtLink to="/" class="btn">Pricing</NuxtLink>
        <NuxtLink to="/" class="btn">Blog</NuxtLink>
      </div>

      <!-- Right Wrapper -->
      <div class="right-wrapper">
        <div>Login</div>
        <div>Sign Up</div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  #navbar {
    @apply bg-slate-gray-4 h-12 flex justify-center;

    > .container {
      @apply w-full md:w-300 flex;

      > .left-wrapper {
        @apply flex items-center;

        > img {
          @apply w-7 h-7;
        }

        > .brand {
          @apply text-white text-2xl font-brand font-medium text-green-50;
        }

        > .v-divider {
          @apply w-0.32 h-9 bg-slate-gray-2 hidden md:inline-flex;
        }

        > .tagline {
          // Preventing fine-grained bold
          -webkit-font-smoothing: initial;
          -moz-osx-font-smoothing: initial;
          font-family: Andika;
          font-weight: normal;
          letter-spacing: 0.01rem;
          color: #76769a;
          font-size: 1.1rem;
          // @apply font-general text-lg tracking-wide hidden md:inline-flex text-slate-gray-1;
        }
      }

      > .mid-wrapper {
      }

      > .right-wrapper {
      }
    }
  }
</style>
