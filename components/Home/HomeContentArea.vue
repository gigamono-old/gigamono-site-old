<template>
  <main>
    <home-use-case-section class="use-case-section" />
    <home-integrations-section class="integrations-section" />
    <home-templates-section class="templates-section" />
    <home-ease-section class="ease-section" />
    <home-openess-section class="openess-section" />
  </main>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  // Siblings with position: relative draw order is reversed. Need z-index to correct.
  main {
    > .use-case-section {
      z-index: 5;
    }

    > .integrations-section {
      z-index: 4;
    }

    > .templates-section {
      z-index: 3;
    }

    > .ease-section {
      z-index: 2;
    }

    > .openess-section {
      z-index: 1;
    }
  }
</style>
