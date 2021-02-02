<template lang="pug">
  div
    mobile-menu
    site-navbar
    nuxt
    site-footer
</template>

<style lang="scss">
  // Making these styles available in children elements.
  @import "~/assets/styles/styles.scss";
  @import "~/assets/styles/animations.scss";

  .test {
    background-color: black;
    color: white;
  }
</style>
