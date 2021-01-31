<template>
  <footer>
    <div class="main home-section-main">
      <!-- Footer Header -->
      <div class="header">
        <img src="~/assets/images/avatar-brand.png" alt="Sageflow logo" />
        <div class="brand">Sageflow</div>
        <div class="links">
          <a href="">About</a>
          <a href="">Blog</a>
          <a href="">Pricing</a>
        </div>
        <button class="github">Github Stars</button>
      </div>

      <!-- Divider -->
      <div class="divider"></div>

      <!-- Sitelinks -->
      <ul class="sitelinks">
        <li v-for="(item, index) in sitelinks" :key="index">
          <div class="title">{{ item.title }}</div>
          <ul class="links">
            <li v-for="(link, index2) in item.links" :key="index2">
              <a href="#">{{ link }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- Bottom -->
    <div class="bottom">
      <div class="main">
        <div class="copyright">© 2021 Sageflow, Ltd.</div>
        <div class="links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Contact</a>
        </div>
        <ul class="socials">
          <li>
            <img src="~/assets/images/placeholder.png" alt="Twitter Logo" />
            <img src="~/assets/images/placeholder.png" alt="Facebook Logo" />
            <img src="~/assets/images/placeholder.png" alt="Email Logo" />
            <img src="~/assets/images/placeholder.png" alt="LinkedIn Logo" />
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      const sitelinks = [
        { title: "Product", links: Array(5).fill("Lorem ipsum dolor") },
        { title: "Developers", links: Array(6).fill("Lorem ipsum dolor") },
        { title: "Resources", links: Array(3).fill("Lorem ipsum dolor") },
        { title: "Comparisons", links: Array(5).fill("Lorem ipsum dolor") },
        { title: "Support", links: Array(4).fill("Lorem ipsum dolor") },
      ]
      return {
        sitelinks,
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/styles.scss";

  footer {
    --narrow-width: calc(var(--home-narrow-width) - 15rem);
    background-color: var(--color-dark-primary-6);
    color: var(--color-text);
    display: flex;
    flex-direction: column;
    align-items: center;

    > .main {
      > .header {
        width: var(--narrow-width);
        padding: 2rem 0;
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

        > .links {
          flex: 1;
          margin-left: 1rem;
          font-size: 0.8em;

          > a {
            margin-left: 1rem;

            &:hover {
              color: var(--color-primary);
            }
          }
        }

        > button.github {
          height: 1.5rem;
          width: 5rem;
          background-color: var(--color-text);
          border-radius: 2px;
          font-size: 0.7em;
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--color-text-dark-4);
        }
      }

      > .divider {
        width: var(--narrow-width);
        height: 1px;
        background-color: var(--color-dark-primary-2);
      }

      > .sitelinks {
        width: var(--narrow-width);
        display: flex;
        padding: 2rem 0;
        justify-content: space-between;

        > li {
          > .title {
            font-size: 0.9em;
          }

          > .links {
            margin-top: 1rem;
            color: var(--color-dark-primary-2);
            font-size: 0.8em;

            > li {
              > a {
                &:hover {
                  color: var(--color-primary);
                }
              }

              &:not(:last-child) {
                margin-bottom: 0.8rem;
              }
            }
          }
        }
      }
    }

    > .bottom {
      width: 100%;
      background-color: var(--color-dark-primary-7);
      display: flex;
      padding: 1rem 0;
      justify-content: center;

      > .main {
        width: var(--narrow-width);
        display: flex;
        justify-content: space-between;
        align-items: center;

        > .copyright {
          font-size: 0.8em;
        }
        > .links {
          color: var(--color-dark-primary-2);
          font-size: 0.8em;
          display: flex;

          > a {
            display: flex;

            &:not(:last-child) {
              margin-right: 0.8rem;

              &::after {
                content: "";
                height: 0.8rem;
                width: 1px;
                background-color: var(--color-dark-primary-2);
                margin-left: 0.8rem;
              }
            }

            &:hover {
              color: var(--color-primary);
            }
          }
        }
        > .socials {
          > li {
            > img {
              width: 1.2rem;
              height: 1.2rem;
              border-radius: 50%;

              &:not(:last-child) {
                margin-right: 0.2rem;
              }
            }
          }
        }
      }
    }
  }
</style>
