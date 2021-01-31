<template>
  <section class="home-section">
    <div class="main home-section-main">
      <!-- Section Head -->
      <home-section-head
        section-name="INTEGRATIONS"
        section-title="Lorem ipsum dolor, sit amet"
        color-var="--color-home-orchid"
        section-detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <!-- Search Bar -->
      <div class="search-bar">
        <div class="icon-search-wrapper"><div class="icon-search"></div></div>
        <input placeholder="Search for apps you use" type="search" />
      </div>

      <!-- App Card Search View -->
      <div class="app-card-search-view-wrapper">
        <home-app-card-search-view />
      </div>
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
      width: 100%;
      position: relative;
      padding-bottom: 17rem;

      > .search-bar {
        margin-top: 2rem;
        width: 25rem;
        height: 1.9rem;
        display: flex;
        border: 1px solid var(--color-home-orchid-1);
        align-items: center;
        border-radius: 20rem;
        background-color: var(--color-text);

        > .icon-search-wrapper {
          margin-left: 0.3rem;
          padding: 0.3rem;
          width: 1.4rem;
          height: 1.4rem;
          border-radius: 50%;
          background-color: var(--color-home-orchid);
          box-sizing: border-box;

          > .icon-search {
            width: 100%;
            height: 100%;
            background-color: var(--color-text);
          }
        }

        > input {
          font-family: var(--font-general);
          flex: 1;
          margin: 0 0.5rem;
          color: var(--color-home-orchid);

          &::placeholder {
            color: var(--color-text-dark-2);
            // opacity: 1;
            font-size: 0.9em;
          }
        }
      }

      > .app-card-search-view-wrapper {
        position: absolute;
        width: 100%;
        bottom: -5rem;
        overflow-x: hidden;
        padding: 1rem 0;
      }
    }
  }
</style>
