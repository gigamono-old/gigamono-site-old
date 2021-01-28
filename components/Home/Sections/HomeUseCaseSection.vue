<template>
  <section>
    <div class="main">
      <home-section-head
        section-name="USE CASES"
        section-title="Easy to start, fast to grow"
        color-var="--color-home-skyblue"
        section-details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      />
      <div class="section-body">
        <div class="flow"></div>
        <div class="visual">Graphics giving visual clarity on each use case</div>
        <ul class="options">
          <li>
            <div class="title">Lorem ipsum dolor sit amet.</div>
            <div class="details hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </div>
          </li>
          <li>
            <div class="title">Lorem ipsum dolor sit amet.</div>
            <div class="details hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </div>
          </li>
          <li>
            <div class="title">Lorem ipsum dolor sit amet.</div>
            <div class="details hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </div>
          </li>
          <li>
            <div class="title">Lorem ipsum dolor sit amet.</div>
            <div class="details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  section {
    width: 100%;
    display: flex;
    justify-content: center;

    > .main {
      width: var(--home-narrow-width);
      display: flex;
      flex-direction: column;
      align-items: center;

      > .section-head {
        width: 45em;
      }

      > .section-body {
        margin-top: 2em;
        display: grid;
        grid-template-columns: repeat(3, max-content);
        grid-template-areas: "flow visual options";

        > .flow {
        }
        > .visual {
        }
        > .options {
        }
      }
    }
  }
</style>
