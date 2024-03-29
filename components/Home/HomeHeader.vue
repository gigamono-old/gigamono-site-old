<template lang="pug">
  header
    //-  Main
    .main
      //-  Bold Message
      .bold-message Connect your business apps, automate the boring stuff and save time.

      //-  Small Message
      .small-message
        span.highlight Gigamono
        |
        | makes it easy to automate your manual repetitive
        | tasks by connecting different apps in useful ways.

      //-  Visual Showcase
      .visual Graphics showing app automation for visual clarity

      //-  Form
      .form-wrapper
        form(action='submit')
          a.google-connect(href='/')
            img(src='~/assets/icons/avatar-google.svg' alt='Google Logo')
            .text Sign Up with Google
          a.fb-connect(href='/')
            img(src='~/assets/icons/avatar-fb.svg' alt='Facebook Logo')
            .text Sign Up with Facebook
          a.ms-connect(href='/')
            img(src='~/assets/icons/avatar-ms.svg' alt='Microsoft Logo')
            .text Sign Up with Microsoft
          .divider
            span OR
          input(type='email' placeholder='Email')
          button Get Started Free
          .notice
            | By signing up, you agree to our
            |
            a.tos(href='/') Terms of Service
            |  and
            |
            a.privacy-policy(href='/') Privacy Policy
            | .

      //-  Highlights
      .highlights
        ul
          li
            .icon-check
            .mobile-check
            div Affordable
          li
            .icon-check
            .mobile-check
            div Quick Start
          li
            .icon-check
            .mobile-check
            div Open Source

    //-  Arc
    svg(viewBox='0 0 1000 87' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none')
      path(d='M1000 74.6733 C700 -24, 300 -24, 0 74.6733 V87 H1000 V74.6733 Z')
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/styles.scss";

  header {
    --svg-height: 4rem;
    --svg-height-lt-narrow: 2.5rem;
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    background: radial-gradient(
      var(--color-dark-primary-5) 6%,
      var(--color-dark-primary) 8%
    ); // The dot. Repeats
    background-size: 38px 38px; // The box around a dot.
    color: var(--color-dark-primary-1);
    position: relative;
    padding-bottom: var(--svg-height);
    @include lt-narrow {
      padding-bottom: var(--svg-height-lt-narrow);
    }
    @include bg-phone {
      padding-bottom: 0;
    }

    > .main {
      --message-width: 45rem;
      --message-width-lt-header: 40rem;
      width: var(--home-narrow-width);
      margin-top: 5vh;
      display: grid;
      grid-template-columns: auto 1fr auto;
      grid-template-rows: repeat(4, auto);
      grid-template-areas:
        "bold-message  spacer     form"
        "small-message spacer     form"
        "visual        spacer     form"
        "highlights    highlights highlights";
      @include lt-narrow {
        margin-left: var(--home-margin-lt-narrow);
        margin-right: var(--home-margin-lt-narrow);
      }
      @include bg-phone {
        margin: 0;
        justify-items: center;
        grid-template-columns: auto;
        grid-template-rows: repeat(5, auto);
        grid-template-areas:
          "visual"
          "bold-message"
          "small-message"
          "highlights"
          "form";
      }

      > .bold-message {
        @include default-font-smoothing;
        grid-area: bold-message;
        max-width: 35rem;
        font-size: 3.5em;
        line-height: 1.2em;
        font-family: var(--font-message);
        color: var(--color-text-2);
        font-weight: 700;
        @include lt-header {
          font-size: 2.5em;
          max-width: 26rem;
        }
        @include bg-phone {
          margin-left: 10%;
          justify-self: start;
          margin-top: 2.2rem;
        }
        @include sm-phone {
          font-size: 2.2em;
        }
      }

      > .small-message {
        grid-area: small-message;
        margin-top: 2.2rem;
        line-height: 1.6em;
        font-size: 1.4em;
        max-width: var(--message-width);
        @include lt-header {
          font-size: 1.2em;
          max-width: var(--message-width-lt-header);
        }
        @include tablet {
          font-size: 1.1em;
        }
        @include bg-phone {
          width: var(--home-narrow-width-bg-phone);
        }
        @include sm-phone {
          font-size: 0.9em;
        }

        > .highlight {
          color: var(--color-primary);
        }
      }

      > .visual {
        grid-area: visual;
        margin-top: 2.2em;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: var(--message-width);
        height: 12rem;
        background-color: var(--color-dark-primary-5);
        @include lt-header {
          height: 10rem;
        }
        @include bg-phone {
          text-align: center;
          width: var(--home-narrow-width-bg-phone);
          height: 12rem;
          margin-top: 2.5rem;
        }
        @include md-phone {
          font-size: 0.8em;
        }
      }

      > .form-wrapper {
        grid-area: form;
        display: flex;
        align-items: flex-start;
        @include bg-phone {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 3rem 0;
          background-color: var(--color-dark-primary-1);
        }

        > form {
          --el-margin-top: 1.2rem;
          --el-height: 2.8rem;
          --form-width: 21rem;
          margin-left: 1rem;
          display: flex;
          flex-direction: column;
          height: fit-content;
          width: var(--form-width);
          background-color: var(--color-dark-primary-7);
          border-radius: 5px;
          border: 1px solid var(--color-dark-primary-4);
          box-shadow: var(--shadow-form);
          padding: 0 1rem;
          font-family: var(--font-link);
          @include lt-header {
            --form-width: 18rem;
          }
          @include tablet {
            margin-left: 2rem;
            --el-margin-top: 1rem;
            --el-height: 2.4rem;
          }
          @include bg-phone {
            margin-left: 0;
            --form-width: 16rem;
          }

          > a {
            @include default-font-smoothing;
            font-weight: 100;
            display: flex;
            height: var(--el-height);
            margin-top: var(--el-margin-top);
            align-items: center;
            padding: 0 0.25rem;
            background-color: red;
            border-radius: 3px;
            overflow: hidden;
            color: var(--color-text);
            font-size: 0.9em;

            > img {
              height: calc(var(--el-height) * 0.5);
              width: calc(var(--el-height) * 0.5);
              padding: 0.4rem;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: var(--color-text);
              border-radius: 2px;
            }

            > div {
              flex: 1;
              display: flex;
              margin-left: 20%;
              width: fit-content;
              @include tablet {
                margin-left: 15%;
              }
              @include bg-phone {
                margin-left: 10%;
              }
            }

            &.google-connect {
              background-color: var(--color-google);

              &:hover {
                background-color: var(--color-google-2);
              }
            }

            &.fb-connect {
              background-color: var(--color-fb);

              &:hover {
                background-color: var(--color-fb-2);
              }
            }

            &.ms-connect {
              background-color: var(--color-ms);

              &:hover {
                background-color: var(--color-ms-2);
              }
            }
          }

          > .divider {
            height: 4rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text);
            font-size: 1.1em;
            position: relative;

            &::after {
              height: 0.1rem;
              width: 100%;
              background-color: var(--color-dark-primary-4);
              position: absolute;
              content: "";
              z-index: 1;
            }

            > span {
              z-index: 2;
              background-color: var(--color-dark-primary-7);
              padding: 0.8rem;
            }
          }

          > input {
            height: var(--el-height);
            background-color: var(--color-dark-primary-7);
            font-family: var(--font-general);
            color: var(--color-dark-primary-1);
            font-size: 1.2rem;
            border-radius: 3px;
            border: 1px solid var(--color-dark-primary-4);
            padding: 0 0.8em;

            &::placeholder {
              color: var(--color-dark-primary-5);
            }
          }

          > button {
            @include default-font-smoothing;
            font-weight: 100;
            height: calc(var(--el-height) + 0.2rem);
            display: flex;
            margin-top: var(--el-margin-top);
            align-items: center;
            justify-content: center;
            border-radius: 3px;
            font-family: var(--font-link);
            color: var(--color-text);
            font-size: 1.1em;
            background: var(--gradient-primary);

            &:hover {
              background: var(--gradient-primary-2);
            }
          }

          > .notice {
            margin-top: 1.2rem;
            margin-bottom: 1.5em;
            color: var(--color-dark-primary-2);
            text-align: center;
            font-size: 0.8em;
            line-height: 1.5em;

            > a {
              color: var(--color-primary-2);
            }
          }
        }
      }

      > .highlights {
        grid-area: highlights;
        width: 100%;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10rem;
        @include lt-header {
          height: 6rem;
        }

        > ul {
          @include default-font-smoothing;
          display: flex;
          font-size: 1em;
          font-family: var(--font-general-3);
          font-weight: 500;
          color: var(--color-text-2);
          @include bg-phone {
            font-size: 0.9em;
          }
          @include sm-phone {
            font-size: 0.7em;
          }

          > li {
            display: flex;
            align-items: center;
            height: fit-content;

            > .icon-check {
              width: 1.35rem;
              height: 1.35rem;
              background-color: var(--color-secondary);
              margin-right: 0.4rem;
              @include bg-phone {
                display: none;
              }
            }

            > .mobile-check {
              @include bg-phone {
                width: 0;
                height: 0;
                padding: 0.25rem;
                background-color: var(--color-secondary);
                border-radius: 50%;
                margin-right: 0.4rem;
              }
            }

            &:not(:last-child) {
              margin-right: 1.5em;
              @include bg-phone {
                margin-right: 1.7em;
              }
            }
          }
        }
      }
    }

    > svg {
      height: var(--svg-height);
      width: 100%;
      position: absolute;
      bottom: 0;
      fill: white;
      @include lt-narrow {
        height: var(--svg-height-lt-narrow);
      }
      @include bg-phone {
        display: none;
      }
    }
  }
</style>
