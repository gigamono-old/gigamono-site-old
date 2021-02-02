<template lang="pug">
  section.home-section
    .main.home-section-main
      //- Section Head
      home-section-head(section-name='INTEGRATIONS', section-title='Lorem ipsum dolor, sit amet', color-var='--color-home-orchid', section-detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')

      //- Search Bar
      .search-bar
        .icon-search-wrapper
          .icon-search
        input(placeholder='Search for apps you use', type='search')

      //- App Card Search View
      .app-card-search-view-wrapper
        home-app-card-search-view
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
      width: 100%;
      position: relative;
      padding-bottom: 17rem;
      @include bg-phone-2 {
        padding-bottom: 13rem;
      }

      > .section-head {
        @include tablet {
          width: var(--home-narrow-width-bg-phone);
        }
      }

      > .search-bar {
        margin-top: 2rem;
        width: 25rem;
        height: 1.9rem;
        display: flex;
        border: 1px solid var(--color-home-orchid-1);
        align-items: center;
        border-radius: 20rem;
        background-color: var(--color-text);
        @include bg-phone-2 {
          width: var(--home-narrow-width-bg-phone);
        }

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
        display: flex;
        justify-content: center;
      }
    }
  }
</style>
