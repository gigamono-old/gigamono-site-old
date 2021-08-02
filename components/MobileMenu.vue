<template lang="pug">
  .container(v-show='isMenuOpen')
    .top-wrapper
      svg.icon-close-menu(viewbox='0 0 25 25' xmlns='http://www.w3.org/2000/svg' @click='hideMobileMenu')
        rect(x='22.6272' y='24.564' width='31.9996' height='2.73912' transform='rotate(-135 22.6272 24.564)')
        rect(y='22.6271' width='31.9996' height='2.73912' transform='rotate(-45 0 22.6271)')

      .spacer

      .brand
        img(src='~/assets/images/avatar-brand.png', alt='Gigamono logo')
        .text Gigamono

      .spacer

    button.explore
      .text Explore
      .icon-dropdown-2

    nuxt-link.link(to='/') Community
    nuxt-link.link(to='/') Pricing
    nuxt-link.link(to='/') Blog

    .divider

    button.login Log in
    button.signup Sign up
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
    width: 20rem;
    padding: 0 1rem;
    background-color: var(--color-text);
    z-index: 100;
    display: none;
    font-size: 1.2em;
    color: var(--color-text-dark-4);
    @include bg-phone {
      display: flex;
      flex-direction: column;
    }
    @include md-phone {
      width: 100vw;
      box-sizing: border-box;
    }

    > .top-wrapper {
      height: var(--navbar-height-bg-phone);
      display: flex;
      align-items: center;
      justify-content: center;

      > svg.icon-close-menu {
        width: 1rem;
        height: 1rem;
        fill: var(--color-text-dark-4);
        display: flex;
        margin-left: 0.8rem;
      }

      > .brand {
        display: flex;
        align-items: center;

        > img {
          width: 1.4rem;
          height: 1.4rem;
        }

        > .text {
          @include default-font-smoothing;
          font-family: var(--font-brand);
          font-size: 0.9em;
          color: var(--color-text-dark-4);
          margin-left: 0.3rem;
        }
      }

      .spacer {
        flex: 1;
      }
    }

    > button.explore,
    .link {
      margin: 0.6rem 0.2rem;
      border-radius: 5px;
      box-sizing: border-box;
    }

    > button.explore {
      display: flex;
      align-items: center;
      padding: 0.2rem 0.5rem;

      > .text {
        flex: 1;
      }

      > .icon-dropdown-2 {
        width: 0.8rem;
        height: 0.8rem;
        transform: rotate(-90deg);
        background-color: var(--color-text-dark-4);
      }
    }

    > .link {
      padding: 0.5rem 0.5rem;
      box-sizing: border-box;
    }

    > .divider {
      height: 1px;
      background-color: var(--color-text-3);
      margin: 1rem 0.5rem;
    }

    > button:not(.explore) {
      margin: 0.5rem;
      padding: 0.6rem 0;
      border-radius: 5px;
      text-align: center;
      color: var(--color-text);
      font-size: 0.7em;
      font-weight: bold;

      &.login {
        color: var(--color-text-dark-6);
        background-color: var(--color-text-dark-1);

        &:hover {
          background-color: var(--color-text-dark-2);
        }
      }

      &.signup {
        background-color: var(--color-primary-3);

        &:hover {
          background-color: var(--color-primary-4);
        }
      }
    }
  }
</style>
