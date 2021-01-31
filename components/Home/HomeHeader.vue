<template>
  <header>
    <!-- Main -->
    <div class="main">
      <!-- Bold Message -->
      <div class="bold-message">Connect your apps, automate workflows, save time</div>

      <!-- Small Message -->
      <div class="small-message">
        <span class="highlight">Sageflow</span> makes it easy to automate your manual repetitive
        tasks by connecting different apps in useful ways.
      </div>

      <!-- Visual Showcase -->
      <div class="visual">Graphics showing app automation for visual clarity</div>

      <!-- Form -->
      <form action="submit">
        <a href="/" class="google-connect">
          <img src="~/assets/icons/avatar-google.svg" alt="Google Logo" />
          <div class="text">Sign Up with Google</div>
        </a>
        <a href="/" class="fb-connect">
          <img src="~/assets/icons/avatar-fb.svg" alt="Facebook Logo" />
          <div class="text">Sign Up with Facebook</div>
        </a>
        <a href="/" class="ms-connect">
          <img src="~/assets/icons/avatar-ms.svg" alt="Microsoft Logo" />
          <div class="text">Sign Up with Microsoft</div>
        </a>
        <div class="divider"><span>OR</span></div>
        <input type="email" placeholder="Email" />
        <button>Get Started Free</button>
        <div class="notice">
          By signing up, you agree to our <a href="/" class="tos">Terms of Service</a> and
          <a href="/" class="privacy-policy">Privacy Policy</a>.
        </div>
      </form>

      <!-- Highlights -->
      <div class="highlights">
        <ul>
          <li>
            <div class="icon-check"></div>
            <div>Affordable</div>
          </li>
          <li>
            <div class="icon-check"></div>
            <div>Quick Start</div>
          </li>
          <li>
            <div class="icon-check"></div>
            <div>Open Source</div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Arc -->
    <svg viewBox="0 0 1000 87" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M1000 74.6733 C700 -24, 300 -24, 0 74.6733 V87 H1000 V74.6733 Z" />
    </svg>
  </header>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/styles.scss";

  header {
    --svg-height: 4rem;
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    background: radial-gradient(
      var(--color-dark-primary-4) 6%,
      var(--color-dark-primary) 8%
    ); // The dot. Repeats
    background-size: 38px 38px; // The box around a dot.
    color: var(--color-dark-primary-1);
    position: relative;
    padding-bottom: var(--svg-height);

    > .main {
      width: var(--home-narrow-width);
      margin-top: 5vh;
      display: grid;
      grid-template-columns: 45rem 1fr auto;
      grid-template-rows: repeat(4, auto);
      grid-template-areas:
        "bold-message  spacer     form"
        "small-message spacer     form"
        "visual        spacer     form"
        "highlights    highlights highlights";

      > .bold-message {
        @include default-font-smoothing;
        grid-area: bold-message;
        max-width: 35rem;
        font-size: 3.5em;
        line-height: 1.2em;
        font-family: var(--font-message);
        color: var(--color-text-2);
        font-weight: 700;
      }

      > .small-message {
        grid-area: small-message;
        margin-top: 2.2rem;
        line-height: 1.6em;
        font-size: 1.4em;

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
        width: 45rem;
        height: 12rem;
        background-color: var(--color-dark-primary-5);
      }

      > form {
        grid-area: form;
        --el-margin-top: 1.2rem;
        --el-height: 2.8rem;
        margin-left: 1rem;
        display: flex;
        flex-direction: column;
        height: fit-content;
        width: 21rem;
        background-color: var(--color-dark-primary-7);
        border-radius: 5px;
        border: 1px solid var(--color-dark-primary-4);
        box-shadow: var(--shadow-form);
        padding: 0 1rem;
        font-family: var(--font-link);

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
            height: 1.4rem;
            width: 1.4rem;
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
            align-items: center;
            margin-left: 20%;
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
          height: 3rem;
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

      > .highlights {
        grid-area: highlights;
        width: 100%;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10rem;

        > ul {
          @include default-font-smoothing;
          display: flex;
          font-size: 1em;
          font-family: var(--font-general-3);
          font-weight: 500;
          color: var(--color-text-2);

          > li {
            display: flex;
            align-items: center;
            height: fit-content;

            > .icon-check {
              width: 1.35rem;
              height: 1.35rem;
              background-color: var(--color-secondary);
              margin-right: 0.4rem;
            }

            &:not(:last-child) {
              margin-right: 1.5em;
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
    }
  }
</style>
