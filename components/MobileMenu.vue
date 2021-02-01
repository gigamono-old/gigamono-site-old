<template lang="pug">
  .container(v-show='isMenuOpen')
    .button-wrapper
      svg.icon-close-menu(viewbox='0 0 25 25' xmlns='http://www.w3.org/2000/svg' @click='hideMobileMenu')
        rect(x='22.6272' y='24.564' width='31.9996' height='2.73912' transform='rotate(-135 22.6272 24.564)')
        rect(y='22.6271' width='31.9996' height='2.73912' transform='rotate(-45 0 22.6271)')

    .explore
      .text Explore
      span.icon-dropdown-2

    nuxt-link.btn(to='/') Community
    nuxt-link.btn(to='/') Pricing
    nuxt-link.btn(to='/') Blog
    button.login Log In
    button.signup Sign Up
</template>

<script>
  export default {
    data() {
      return {
        isMenuOpen: false,
      }
    },
    mounted() {
      this.$root.$on("showMobileMenu", () => {
        this.isMenuOpen = true
      })
      this.$root.$on("hideMobileMenu", () => {
        this.isMenuOpen = false
      })
    },
    methods: {
      hideMobileMenu() {
        this.$root.$emit("hideMobileMenu")
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/styles.scss";

  .container {
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    padding: 0 1rem;
    background-color: var(--color-text);
    z-index: 100;

    > .button-wrapper {
      height: var(--navbar-mobile-height);
      display: flex;
      align-items: center;
      // background-color: red;

      > svg.icon-close-menu {
        width: 1.2rem;
        fill: var(--color-dark-primary);
        display: flex;
      }
    }
  }
</style>
