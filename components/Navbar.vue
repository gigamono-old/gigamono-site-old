<template>
  <nav id="navbar">
    <div class="container">
      <!-- Left Wrapper -->
      <div class="left-wrapper">
        <img src="~/assets/images/avatar-brand.png" alt="Sageflow logo" />
        <div class="brand">Sageflow</div>
        <div class="v-divider" />
        <div class="tagline">Less work. More flow.</div>
      </div>

      <!-- Mid Wrapper -->
      <div class="mid-wrapper">
        <div class="explore">
          <div>Explore</div>
          <span class="icon-dropdown"></span>
        </div>
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
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-nav-main);
    min-height: 3.5rem;

    > .container {
      display: flex;
      min-width: 80rem;

      > .left-wrapper {
        display: flex;
        align-items: center;

        > img {
          width: 2rem;
          height: 2rem;
        }

        > .brand {
          -webkit-font-smoothing: initial;
          -moz-osx-font-smoothing: initial;
          font-family: var(--font-brand);
          font-size: 1.5em;
          color: var(--color-text);
          margin-left: 0.8rem;
        }

        > .v-divider {
          height: 2.2rem;
          width: 0.08rem;
          background-color: var(--color-text);
          margin-left: 0.8em;
        }

        > .tagline {
          color: var(--color-text);
          margin-left: 0.8rem;
        }
      }

      > .mid-wrapper {
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: flex-end;

        > .explore {
          color: var(--color-text);
        }

        > a {
          color: var(--color-text);
        }
      }

      > .right-wrapper {
        display: flex;
        align-items: center;
        color: var(--color-text);
        margin-left: 2rem;
      }
    }
  }
</style>
