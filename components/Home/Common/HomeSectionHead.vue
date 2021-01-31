<template>
  <div class="section-head">
    <div class="section-name" :style="colorStyle">{{ sectionName }}</div>
    <div class="section-title">{{ sectionTitle }}</div>
    <div class="section-detail">
      <span class="highlight" :style="colorStyle">{{ sectionDetailHead }}</span>
      {{ sectionDetailTail }}
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
      sectionDetail: {
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
      const spaceIndex = this.sectionDetail.indexOf(" ")
      const sectionDetailHead =
        spaceIndex < 0 ? this.sectionDetail : this.sectionDetail.slice(0, spaceIndex) // The first word.
      const sectionDetailTail =
        spaceIndex < 0 ? this.sectionDetail : this.sectionDetail.slice(spaceIndex) // The rest.

      // Styles.
      const colorStyle = `color: var(${this.colorVar});`
      return {
        sectionDetailHead,
        sectionDetailTail,
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
    width: var(--home-section-head-width);

    > .section-name {
      @include default-font-smoothing;
      font-family: var(--font-general-3-bold);
      font-size: 0.8em;
      letter-spacing: 3px;
    }

    > .section-title {
      font-family: var(--font-message);
      font-size: 1.8em;
      font-weight: bold;
      letter-spacing: -1.5px; // rem unit does not work for this font on safari and firefox
      margin-top: 2rem;
      text-align: center;
    }

    > .section-detail {
      color: var(--color-text-dark);
      font-size: 1.1em;
      margin-top: 1rem;
      text-align: center;
      line-height: 1.5em;
    }
  }
</style>
