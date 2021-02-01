<template lang="pug">
  section.home-section.home-section-triangle-after
    .main.home-section-main
      //- Section Head
      home-section-head(section-name='TEMPLATES', section-title='Lorem ipsum dolor, sit amet', color-var='--color-home-yellow-green', section-detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ')

      //- Template Card View
      .template-card-view-wrapper
        home-template-card-view

      //- Discover Button
      button DISCOVER MORE
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  section {
    padding-top: 6em;
    padding-bottom: 2em;

    > .main {
      width: 100%;

      .template-card-view-wrapper {
        width: 100%;
        overflow-x: hidden;

        > .template-card-view {
          margin-top: 2rem;
        }
      }

      > button {
        width: 12rem;
        height: 2.5rem;
        margin-top: 2rem;
        text-align: center;
        border-radius: 5px;
        border: 1px solid var(--color-home-yellow-green);
        font-family: var(--font-general);
        font-size: 0.8rem;

        &:hover {
          background-color: var(--color-home-yellow-green);
          color: var(--color-text);
          font-weight: bold;
        }
      }
    }
  }
</style>
