<template lang="pug">
  nav#navbar
    //- Main
    .main
      .container
        //- Mobile Menu
        svg.icon-menu(viewBox="0 0 33 22" xmlns="http://www.w3.org/2000/svg" @click="showMobileMenu")
          rect(x="0.383057" y="18.8734" width="31.9204" height="2.79999")
          rect(x="0.303467" y="9.80371" width="31.9996" height="2.73912")
          rect(x="0.383057" y="0.67334" width="31.9204" height="2.79999")

        //- Left Wrapper
        .left-wrapper
          img(src='~/assets/images/avatar-brand.png', alt='Sageflow logo')
          .brand Sageflow
          .v-divider
          .tagline Less work. More flow.

        //- Mid Wrapper
        .mid-wrapper
          .explore
            .text Explore
            span.icon-dropdown-2
          nuxt-link.btn(to='/') Community
          nuxt-link.btn(to='/') Pricing
          nuxt-link.btn(to='/') Blog

        //- Right Wrapper
        .right-wrapper
          a.login Log In
          button.signup Sign Up

    //- Squiggly Line
    .squiggly
  </nav>
</template>

<script>
  export default {
    methods: {
      showMobileMenu() {
        this.$root.$emit("showMobileMenu")
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/styles.scss";

  #navbar {
    display: flex;
    background-color: var(--color-dark-primary);
    min-height: 3.5rem;
    width: 100%;
    flex-direction: column;

    > .main {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      @include lt-narrow {
        margin: 0 1rem;
      }

      > .container {
        width: var(--home-narrow-width);
        display: flex;
        align-items: center;
        @include bg-phone {
          height: var(--navbar-mobile-height);
          justify-content: space-between;
        }

        > svg.icon-menu {
          display: none;
          @include bg-phone {
            height: 1.3rem;
            fill: var(--color-text);
            display: flex;
          }
        }

        > .left-wrapper {
          display: flex;
          align-items: center;

          > img {
            width: 1.8rem;
            height: 1.8rem;
            @include bg-phone {
              width: 1.6rem;
              height: 1.6rem;
            }
          }

          > .brand {
            @include default-font-smoothing;
            font-family: var(--font-brand);
            font-size: 1.4em;
            color: var(--color-text);
            margin-left: 0.8rem;
            @include bg-phone {
              margin-left: 0.4rem;
              font-size: 1.2em;
            }
          }

          > .v-divider {
            height: 2.2rem;
            width: 0.09rem;
            background-color: var(--color-dark-primary-3);
            margin-left: 0.8rem;
            @include bg-phone {
              display: none;
            }
          }

          > .tagline {
            color: var(--color-dark-primary-2);
            font-size: 1em;
            margin-left: 0.8rem;
            white-space: nowrap;
            @include tablet {
              display: none;
            }
          }
        }

        > .mid-wrapper {
          display: flex;
          align-items: center;
          flex: 2;
          justify-content: center;
          font-family: var(--font-link);
          font-size: 1em;
          padding-right: 2em;
          @include bg-phone {
            display: none;
          }

          > .explore {
            display: flex;
            align-items: center;
            height: 100%;
            color: var(--color-dark-primary-1);

            > .text {
              height: 100%;
              display: flex;
              align-items: center;
            }

            > .icon-dropdown-2 {
              height: 0.6rem;
              width: 0.6rem;
              margin-left: 0.5rem;
              transform: rotate(-90deg);
              background-color: var(--color-dark-primary-1);
            }

            &:hover {
              color: var(--color-primary);
              cursor: pointer;

              > .icon-dropdown-2 {
                background-color: var(--color-primary);
              }
            }
          }

          > a {
            color: var(--color-dark-primary-1);
            margin-left: 2.5rem;
            height: 100%;
            display: flex;
            align-items: center;

            &:hover {
              color: var(--color-primary);
              cursor: pointer;
            }
          }
        }

        > .right-wrapper {
          @include default-font-smoothing;
          font-weight: 100;
          display: flex;
          align-items: center;

          > .login {
            height: 100%;
            display: flex;
            align-items: center;
            color: var(--color-text);
            font-family: var(--font-link);
            @include bg-phone {
              display: none;
            }

            &:hover {
              color: var(--color-primary);
              cursor: pointer;
            }
          }

          > .signup {
            margin-left: 1rem;
            padding: 0.5rem;
            border-radius: 0.2rem;
            background-color: var(--color-primary-4);
            white-space: nowrap;
            color: var(--color-text);
            font-family: var(--font-link);

            &:hover {
              background-color: var(--color-primary-5);
              cursor: pointer;
            }
          }
        }
      }
    }

    > .squiggly {
      position: relative;
      display: flex;
      height: 10px;
      width: 100%;

      // The following creates the squiggly line under the Navbar.
      // To understand this, change the gradient color of ::after.
      &::after,
      &::before {
        height: inherit;
        width: inherit;
        background-size: 12px 100%; // Change this to adjust the size of the squiggly line.
        content: "";
        position: absolute;
      }

      &::before {
        top: -2px;
        background-image: linear-gradient(45deg, var(--color-dark-primary-4) 35%, transparent 0),
          linear-gradient(-45deg, var(--color-dark-primary-4) 35%, transparent 0);
      }

      &::after {
        top: 0px;
        background-image: linear-gradient(45deg, var(--color-dark-primary) 35%, transparent 0),
          linear-gradient(-45deg, var(--color-dark-primary) 35%, transparent 0);
      }
    }
  }

  // @media screen and (max-width: 1304px) {
  //   #navbar > .main {
  //     width: 100%;
  //     background-color: red;
  //   }
  // }
</style>
