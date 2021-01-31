<template>
  <nav id="navbar">
    <!-- Main -->
    <div class="main">
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
            <div class="text">Explore</div>
            <span class="icon-dropdown-2"></span>
          </div>
          <NuxtLink to="/" class="btn">Community</NuxtLink>
          <NuxtLink to="/" class="btn">Pricing</NuxtLink>
          <NuxtLink to="/" class="btn">Blog</NuxtLink>
        </div>

        <!-- Right Wrapper -->
        <div class="right-wrapper">
          <a class="login">Login</a>
          <button class="signup">Sign Up</button>
        </div>
      </div>
    </div>

    <!-- Squiggly Line -->
    <div class="squiggly"></div>
  </nav>
</template>

<script>
  export default {}
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

      > .container {
        width: var(--home-narrow-width);
        display: flex;

        > .left-wrapper {
          display: flex;
          align-items: center;

          > img {
            width: 1.8rem;
            height: 1.8rem;
          }

          > .brand {
            @include default-font-smoothing;
            font-family: var(--font-brand);
            font-size: 1.4em;
            color: var(--color-text);
            margin-left: 0.8rem;
          }

          > .v-divider {
            height: 2.2rem;
            width: 0.09rem;
            background-color: var(--color-dark-primary-3);
            margin-left: 0.8rem;
          }

          > .tagline {
            color: var(--color-dark-primary-2);
            font-size: 1em;
            margin-left: 0.8rem;
            white-space: nowrap;
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
</style>
