<template>
  <div class="section-head">
    <div class="section-name" :style="colorStyle">{{ sectionName }}</div>
    <div class="section-title">{{ sectionTitle }}</div>
    <div class="section-details">
      <span class="highlight" :style="colorStyle">{{ sectionDetailsHead }}</span>
      {{ sectionDetailsTail }}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      sectionName: {
        type: String,
        required: true,
      },
      sectionTitle: {
        type: String,
        required: true,
      },
      sectionDetails: {
        type: String,
        required: true,
      },
      colorVar: {
        type: String,
        required: true,
      },
    },
    data() {
      // Section details.
      const spaceIndex = this.sectionDetails.indexOf(" ")
      const sectionDetailsHead =
        spaceIndex < 0 ? this.sectionDetails : this.sectionDetails.slice(0, spaceIndex) // The first word.
      const sectionDetailsTail =
        spaceIndex < 0 ? this.sectionDetails : this.sectionDetails.slice(spaceIndex) // The rest.

      // Styles.
      const colorStyle = `color: var(${this.colorVar})`
      return {
        sectionDetailsHead,
        sectionDetailsTail,
        colorStyle,
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/styles.scss";

  .section-head {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > .section-name {
      @include default-font-smoothing;
      font-family: var(--font-general-3-bold);
      font-size: 0.8em;
      letter-spacing: 0.2em;
    }

    > .section-title {
      font-family: var(--font-message);
      font-size: 1.8em;
      font-weight: bold;
      letter-spacing: 0em;
      margin-top: 2rem;
      text-align: center;
    }

    > .section-details {
      color: var(--color-text-dark-1);
      font-size: 1.1em;
      margin-top: 1rem;
      text-align: center;
      line-height: 1.5em;

      > .highlight {
        color: green;
      }
    }
  }
</style>
