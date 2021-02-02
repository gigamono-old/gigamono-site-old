<template lang="pug">
  section.home-section.home-section-triangle-after
    .main.home-section-main
      //- Section Head
      home-section-head(section-name='USE CASES', section-title='Easy to start, fast to grow', color-var='--color-home-sky-blue', section-detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ')

      //- Section Body
      .section-body
          //- Workflow
          .flow
            //- Flow Animation Link
            .link
              .circle(v-for='i in 25', :key='i')

            //- Completion Confetti
            home-confetti

            //- Steps
            .step
              home-app-card(image='placeholder.png', :name='options[index].steps[0].appName', border-color-var='--color-home-sky-blue-1', box-shadow-var='--shadow-home-sky-blue')
              .detail {{ options[index].steps[0].detail }}
            .step
              home-app-card(image='placeholder.png', :name='options[index].steps[1].appName', border-color-var='--color-home-sky-blue-1', box-shadow-var='--shadow-home-sky-blue')
              .detail {{ options[index].steps[1].detail }}
            .step
              home-app-card(image='placeholder.png', :name='options[index].steps[2].appName', border-color-var='--color-home-sky-blue-1', box-shadow-var='--shadow-home-sky-blue')
              .detail {{ options[index].steps[2].detail }}

          //- Visual Image
          .visual Graphics giving visual clarity on each use case

          //- Options
          ul.options
            li(key='1')
              button.title Lorem ipsum dolor sit amet.
              .detail.hidden
                | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                | incididunt ut labore et dolore magna aliqua.
            li(key='2')
              button.title Lorem ipsum dolor sit amet.
              .detail.hidden
                | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                | incididunt ut labore et dolore magna aliqua.
            li(key='3')
              button.title Lorem ipsum dolor sit amet.
              .detail.hidden
                | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                | incididunt ut labore et dolore magna aliqua.
            li(key='4')
              button.title Lorem ipsum dolor sit amet.
              .detail
                | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                | incididunt ut labore et dolore magna aliqua.

          //- Slider Dots
          .mobile-slider-dots
            .circle
            .circle
            .circle
            .circle
</template>

<script>
  import HomeAppCard from "../Common/HomeAppCard.vue"
  export default {
    components: { HomeAppCard },
    data() {
      const options = []
      for (let i = 0; i < 10; i++) {
        options.push({
          steps: [
            {
              appName: "Lorem",
              appImageURL: "",
              detail: "Lorem ipsum dolor sit amet, consectetur",
            },
            {
              appName: "Lorem",
              appImageURL: "",
              detail: "Lorem ipsum dolor sit amet, consectetur",
            },
            {
              appName: "Lorem",
              appImageURL: "",
              detail: "Lorem ipsum dolor sit amet, consectetur",
            },
          ],
          visual: "",
        })
      }
      return {
        options,
      }
    },
    computed: {
      index() {
        return 0
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/styles.scss";

  section {
    padding-bottom: 2.5rem;

    > .main {
      @include tablet {
        width: var(--home-narrow-width-bg-phone);
      }
      @include bg-phone {
        margin-top: 3rem;
      }

      > .section-body {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-template-areas: "flow visual options";
        @include tablet {
          width: 100%;
          justify-items: center;
          grid-template-columns: auto;
          grid-template-rows: repeat(3, auto);
          grid-template-areas:
            "flow"
            "visual"
            "options";
        }

        > .flow {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          @include tablet {
            width: 100%;
            flex-direction: row;
          }
          @include bg-phone-2 {
            justify-content: space-between;
          }

          > .link {
            position: absolute;
            top: 0;
            z-index: 1;
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            justify-content: space-between;
            margin-left: calc(var(--home-use-case-section-app-card-width) * 0.5);
            @include tablet {
              flex-direction: row;
              width: 80%;
              margin: 0 10%;
              margin-top: calc(var(--home-use-case-section-app-card-height) * 0.5);
            }

            > .circle {
              width: 5px;
              height: 5px;
              background-color: var(--color-card-bg-1);
              border-radius: 50%;
              box-sizing: border-box;
            }
          }

          > .confetti {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-end;
            z-index: 2;
            @include tablet {
              align-items: flex-start;
              justify-content: flex-end;
              margin-left: -5.5rem;
              margin-top: 4rem;
            }
            @include bg-phone-2 {
              margin: 0;
              margin-left: calc(var(--home-use-case-section-app-card-width) * -1 + 1.1rem);
              margin-top: calc(var(--home-use-case-section-app-card-height) - 1.1rem);
            }
          }

          > .step {
            display: flex;
            z-index: 2;
            @include tablet {
              flex-direction: column;
              align-items: center;
            }
            @include bg-phone-2 {
              justify-content: space-between;
            }

            > .detail {
              margin-left: 1rem;
              font-size: 0.9em;
              line-height: 1.5em;
              width: 12rem;
              color: var(--color-text-dark-1);
              @include tablet {
                font-size: 0.7em;
                max-width: 10rem;
                text-align: center;
                margin: 0;
                margin-top: 1rem;
                width: 9rem;
              }
              @include bg-phone-2 {
                display: none;
              }
            }
          }
        }

        > .visual {
          margin-left: 1rem;
          background-color: var(--color-primary-1);
          font-family: var(--font-brand);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.1em;
          text-align: center;
          height: 28rem;
          width: 22rem;
          padding: 0 1rem;
          box-sizing: border-box;
          border-radius: 3px;
          color: var(--color-text-dark-2);
          border-radius: 5px;
          @include tablet {
            margin: 0;
            margin-top: 3rem;
            height: 22rem;
            width: 34rem;
          }
          @include bg-phone {
            height: 50vw;
            width: 100%;
          }
        }

        > .options {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-left: 2rem;
          @include tablet {
            margin: 0;
            margin-top: 2rem;
          }

          > li {
            --element-width: 18rem;
            --button-height: 3.8rem;
            position: relative;

            > button {
              width: var(--element-width);
              height: var(--button-height);
              padding: 1rem;
              border-radius: 5px;
              border: 1px solid var(--color-card-bg-1);
              box-shadow: var(--shadow-home-sky-blue);
              box-sizing: border-box;
              color: var(--color-text-dark);
              position: absolute;
              z-index: 2;
              background-color: var(--color-text);
              font-size: 0.9rem;
              display: flex;
              justify-content: center;
              align-items: center;
              @include tablet {
                display: none;
              }

              &:hover {
                font-weight: bold;
                color: var(--color-text-dark-4);
                background-color: var(--color-primary-1);
              }
            }

            > .detail {
              width: var(--element-width);
              height: 12rem;
              background-color: var(--color-dark-primary-5);
              box-sizing: border-box;
              border-radius: 5px;
              padding: 1rem;
              padding-top: calc(var(--button-height) + 1rem);
              font-size: 0.8rem;
              line-height: 1.2rem;
              z-index: 1;
              color: var(--color-text);
              @include tablet {
                font-size: 1em;
                padding: 0;
                background-color: var(--color-text);
                height: auto;
                width: auto;
                max-width: 20rem;
                color: var(--color-text-dark-4);
                text-align: center;
              }
              @include md-phone {
                font-size: 0.8em;
              }
            }

            &:last-child > button {
              font-weight: bold;
              color: var(--color-text-dark-4);
              box-shadow: var(--shadow-home-dark);
            }
          }
        }

        > .mobile-slider-dots {
          @include tablet {
            display: flex;
            justify-content: space-between;
            width: 5rem;
            margin-top: 3rem;

            > .circle {
              width: 7px;
              height: 7px;
              background-color: var(--color-card-bg-1);
              border-radius: 50%;
              box-sizing: border-box;
            }
          }
        }
      }
    }
  }
</style>
