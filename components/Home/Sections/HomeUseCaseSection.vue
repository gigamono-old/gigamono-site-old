<template>
  <section class="home-section home-section-triangle-after">
    <div class="main home-section-main">
      <!-- Section Head -->
      <home-section-head
        section-name="USE CASES"
        section-title="Easy to start, fast to grow"
        color-var="--color-home-sky-blue"
        section-detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      />

      <!-- Section Body -->
      <div class="section-body">
        <!-- Workflow -->
        <div class="flow">
          <!-- Flow Animation Link -->
          <div class="link">
            <div v-for="i in 25" :key="i" class="circle"></div>
          </div>

          <!-- Completion Confetti -->
          <home-confetti />
          <div class="step">
            <home-app-card
              image="placeholder.png"
              :name="options[index].steps[0].appName"
              border-color-var="--color-home-sky-blue-1"
              box-shadow-var="--shadow-home-sky-blue"
            />
            <div class="detail">{{ options[index].steps[0].detail }}</div>
          </div>

          <!-- Steps -->
          <div class="step">
            <home-app-card
              image="placeholder.png"
              :name="options[index].steps[1].appName"
              border-color-var="--color-home-sky-blue-1"
              box-shadow-var="--shadow-home-sky-blue"
            />
            <div class="detail">{{ options[index].steps[1].detail }}</div>
          </div>
          <div class="step">
            <home-app-card
              image="placeholder.png"
              :name="options[index].steps[2].appName"
              border-color-var="--color-home-sky-blue-1"
              box-shadow-var="--shadow-home-sky-blue"
            />
            <div class="detail">{{ options[index].steps[2].detail }}</div>
          </div>
        </div>

        <!-- Visual Image -->
        <div class="visual">Graphics giving visual clarity on each use case</div>

        <!-- Options -->
        <ul class="options">
          <li key="1">
            <button class="title">Lorem ipsum dolor sit amet.</button>
            <div class="detail hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </div>
          </li>
          <li key="2">
            <button class="title">Lorem ipsum dolor sit amet.</button>
            <div class="detail hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </div>
          </li>
          <li key="3">
            <button class="title">Lorem ipsum dolor sit amet.</button>
            <div class="detail hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </div>
          </li>
          <li key="4">
            <button class="title">Lorem ipsum dolor sit amet.</button>
            <div class="detail">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
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
  section {
    padding-bottom: 2.5rem;

    > .main {
      > .section-body {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(3, max-content);
        grid-template-areas: "flow visual options";

        > .flow {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

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
            // Couldn't style svg from here.
          }

          > .step {
            display: flex;
            z-index: 2;

            > .detail {
              margin-left: 1rem;
              font-size: 0.9em;
              line-height: 1.5em;
              width: 12rem;
              color: var(--color-text-dark-1);
            }
          }
        }

        > .visual {
          margin-left: 1rem;
          height: 28rem;
          background-color: var(--color-primary-1);
          font-family: var(--font-brand);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.1em;
          text-align: center;
          width: 22rem;
          padding: 0 1rem;
          box-sizing: border-box;
          border-radius: 3px;
          color: var(--color-text-dark-2);
          border-radius: 5px;
        }

        > .options {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-left: 2rem;

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
            }

            &:last-child > button {
              font-weight: bold;
              color: var(--color-text-dark-4);
              box-shadow: var(--shadow-home-dark);
            }
          }
        }
      }
    }
  }
</style>
