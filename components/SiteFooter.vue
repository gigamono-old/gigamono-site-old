<template lang="pug">
  footer
    .main.home-section-main
      //- Footer Header
      .header
        img(src='~/assets/images/avatar-brand.png' alt='Sageflow logo')
        .brand Sageflow
        .links
          a(href='') About
          a(href='') Blog
          a(href='') Pricing
        button.github Github Stars

      //- Divider
      .divider

      //- Sitelinks
      ul.sitelinks
        li(v-for='(item, index) in sitelinks' :key='index')
          .title {{ item.title }}
          ul.links
            li(v-for='(link, index2) in item.links' :key='index2')
              a(href='#') {{ link }}

    //- Bottom
    .bottom
      .main.home-section-main
        .wrapper
          .copyright &copy; 2021 Sageflow, Ltd.
          .links
            a(href='#') Terms
            a(href='#') Privacy
            a(href='#') Contact
          ul.socials
            li
              img(src='~/assets/images/placeholder.png' alt='Twitter Logo')
              img(src='~/assets/images/placeholder.png' alt='Facebook Logo')
              img(src='~/assets/images/placeholder.png' alt='Email Logo')
              img(src='~/assets/images/placeholder.png' alt='LinkedIn Logo')
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
    @include lt-narrow {
      --narrow-width: 100%;
    }

    > .main {
      > .header {
        width: var(--narrow-width);
        padding: 1rem 0;
        display: flex;
        align-items: center;

        > img {
          width: 1.8rem;
          height: 1.8rem;
          @include bg-phone-2 {
            display: none;
          }
        }

        > .brand {
          @include default-font-smoothing;
          font-family: var(--font-brand);
          font-size: 1.4em;
          color: var(--color-text);
          margin-left: 0.8rem;
          @include bg-phone-2 {
            display: none;
          }
        }

        > .links {
          flex: 1;
          margin-left: 1rem;
          font-size: 0.8em;
          @include bg-phone-2 {
            margin-left: 0;
          }

          > a {
            margin-right: 1rem;

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

      .sitelinks {
        --item-width: 12rem;
        width: var(--narrow-width);
        padding: 3rem 0;
        display: grid;
        grid-template-columns: repeat(auto-fill, var(--item-width));
        justify-content: space-between;
        @include bg-phone-2 {
          --item-width: 100%;
        }

        > li {
          width: var(--item-width);
          display: flex;
          flex-direction: column;
          align-items: center;

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
                @include tablet {
                  margin-bottom: 1rem;
                }
                @include bg-phone-2 {
                  margin-bottom: 1.5rem;
                }
              }
            }
          }

          &:not(:last-child) {
            @include tablet {
              margin-bottom: 2rem;
            }
          }
        }
      }
    }

    > .bottom {
      width: 100%;
      background-color: var(--color-dark-primary-7);
      display: flex;
      padding: 1.5rem 0;
      justify-content: center;
      @include bg-phone-2 {
        padding: 3rem 0;
      }

      > .main {
        .wrapper {
          width: var(--narrow-width);
          display: grid;
          grid-template-columns: repeat(3, auto);
          grid-template-areas: "copyright links socials";
          align-items: center;
          @include bg-phone-2 {
            grid-template-columns: auto;
            grid-template-rows: repeat(3, auto);
            grid-template-areas:
              "socials"
              "copyright"
              "links";
          }

          > .copyright {
            grid-area: copyright;
            font-size: 0.8em;
            @include bg-phone-2 {
              font-size: 0.9em;
              justify-self: center;
              margin-top: 3rem;
            }
          }

          > .links {
            grid-area: links;
            color: var(--color-dark-primary-2);
            font-size: 0.8em;
            justify-self: center;
            display: flex;
            @include bg-phone-2 {
              font-size: 0.9em;
              margin-top: 3rem;
            }

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
                  @include bg-phone-2 {
                    width: 1px;
                    height: 1.1rem;
                  }
                }
              }

              &:hover {
                color: var(--color-primary);
              }
            }
          }

          > .socials {
            grid-area: socials;
            justify-self: end;
            @include bg-phone-2 {
              justify-self: center;
            }

            > li {
              > img {
                width: 1.2rem;
                height: 1.2rem;
                border-radius: 50%;
                @include bg-phone-2 {
                  width: 2rem;
                  height: 2rem;
                }

                &:not(:last-child) {
                  margin-right: 0.3rem;
                  @include bg-phone-2 {
                    margin-right: 1rem;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
