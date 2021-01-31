<template>
  <section class="home-section home-section-triangle-after">
    <div class="main home-section-main">
      <!-- Section Head -->
      <home-section-head
        section-name="EASY TO USE"
        section-title="Lorem ipsum dolor, sit amet"
        color-var="--color-home-crimson"
        section-detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <!-- Content -->
      <div class="content">
        <!-- Check List -->
        <ul>
          <li>
            <div class="icon-check"></div>
            <div>Lorem ipsum dolor sit amet, consectetur</div>
          </li>
          <li>
            <div class="icon-check"></div>
            <div>Lorem ipsum dolor sit amet, consectetur</div>
          </li>
          <li>
            <div class="icon-check"></div>
            <div>Lorem ipsum dolor sit amet, consectetur</div>
          </li>
          <li>
            <div class="icon-check"></div>
            <div>Lorem ipsum dolor sit amet, consectetur</div>
          </li>
        </ul>

        <!-- Demo Button -->
        <button>SEE DEMO</button>

        <!-- Visual Image -->
        <div class="visual">Gif showing a simplified demo</div>
      </div>

      <!-- Sign Up Button -->
      <button>SIGN UP FOR FREE</button>
    </div>
  </section>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
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
        grid-template-areas:
          "checklist visual"
          "button    visual";

        > ul {
          grid-area: checklist;
          display: flex;
          flex-direction: column;
          height: 10rem;
          justify-content: space-between;

          > li {
            display: flex;
            width: var(--li-width);
            font-size: 1em;
            color: var(--color-text-dark);

            > .icon-check {
              width: 1.35rem;
              height: 1.35rem;
              background-color: var(--color-home-crimson);
              margin-right: 0.4rem;
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

          &:hover {
            color: var(--color-home-crimson);
          }
        }

        > .visual {
          margin-left: 2rem;
          grid-area: visual;
          width: 32rem;
          height: 20rem;
          background-color: var(--color-text);
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 5px;
          color: var(--color-text-dark);
          padding: 0 2rem;
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
