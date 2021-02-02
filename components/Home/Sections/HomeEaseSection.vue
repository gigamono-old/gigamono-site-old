<template lang="pug">
  section.home-section.home-section-triangle-after
    .main.home-section-main
      //- Section Head
      home-section-head(section-name='EASY TO USE', section-title='Lorem ipsum dolor, sit amet', color-var='--color-home-crimson', section-detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')

      //- Content
      .content
        //- Check List
        ul
          li
            .icon-check
            .text Lorem ipsum dolor sit amet, consectetur
          li
            .icon-check
            .text Lorem ipsum dolor sit amet, consectetur
          li
            .icon-check
            div Lorem ipsum dolor sit amet, consectetur
          li
            .icon-check
            .text Lorem ipsum dolor sit amet, consectetur

        //- Demo Button
        button SEE DEMO

        //- Visual Image
        .visual Gif showing a simplified demo

      //- Sign Up Button
      button SIGN UP FOR FREE
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/styles.scss";

  section {
    padding-top: 5em;
    padding-bottom: 2em;
    background-color: var(--color-home-bg);

    > .main {
      position: relative;

      > .content {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: auto 1fr;
        grid-column-gap: 1rem;
        grid-template-areas:
          "checklist visual"
          "button    visual";
        @include tablet {
          width: 100%;
        }
        @include bg-phone {
          grid-template-columns: auto;
          grid-template-rows: repeat(2, auto);
          grid-row-gap: 2rem;
          grid-template-areas:
            "visual"
            "checklist";
        }

        > ul {
          grid-area: checklist;
          display: flex;
          flex-direction: column;
          height: 10rem;
          justify-content: space-between;
          @include bg-phone {
            width: fit-content;
            justify-self: center;
          }

          > li {
            display: flex;
            width: var(--li-width);
            font-size: 1em;
            color: var(--color-text-dark);
            @include tablet {
              font-size: 0.9em;
            }
            @include bg-phone {
              font-size: 1em;
            }
            @include md-phone {
              font-size: 0.8em;
            }

            > .icon-check {
              width: 1.35rem;
              height: 1.35rem;
              background-color: var(--color-home-crimson);
              margin-right: 0.4rem;
              @include md-phone {
                width: 1.1rem;
                height: 1.1rem;
              }
              @include md-phone {
                width: 1rem;
                height: 1rem;
              }
            }

            > .text {
              width: max-content;
            }
          }
        }

        > button {
          grid-area: button;
          margin-top: 2rem;
          height: 2.5rem;
          text-align: center;
          border-radius: 5px;
          background-color: var(--color-text);
          font-size: 0.8rem;
          border: 1px solid var(--color-card-bg-1);
          font-weight: bold;
          @include tablet {
            width: 19rem;
          }
          @include bg-phone {
            display: none;
          }

          &:hover {
            color: var(--color-home-crimson);
          }
        }

        > .visual {
          --initial-width: 32rem;
          grid-area: visual;
          width: var(--initial-width);
          height: 20rem;
          background-color: var(--color-text);
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 5px;
          color: var(--color-text-dark);
          padding: 0 2rem;
          text-align: center;
          @include tablet {
            width: 100%;
          }
        }
      }

      > button {
        width: 12rem;
        height: 2.5rem;
        margin-top: 3rem;
        text-align: center;
        border-radius: 5px;
        background-color: var(--color-home-crimson-1);
        font-size: 0.8rem;
        color: var(--color-text);
        font-weight: bold;

        &:hover {
          background-color: var(--color-home-crimson);
        }
      }
    }

    &::after {
      border-top-color: var(--color-home-bg);
    }
  }
</style>
