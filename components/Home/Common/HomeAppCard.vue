<template lang="pug">
  .app-card(:style='styles')
    img(:src='src', alt='App Image')
    .name {{ name }}
</template>

<script>
  export default {
    props: {
      image: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      borderColorVar: {
        type: String,
        required: true,
      },
      boxShadowVar: {
        type: String,
        required: true,
      },
      width: {
        type: String,
        default: "var(--home-use-case-section-app-card-width)",
      },
      height: {
        type: String,
        default: "5.4rem",
      },
    },
    data() {
      const styles = `
      border: 1px solid var(${this.borderColorVar});
      box-shadow: var(${this.boxShadowVar});
      width: ${this.width};
      height: ${this.height};
      `

      return {
        styles,
      }
    },
    computed: {
      src() {
        return require(`~/assets/images/${this.image}`)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .app-card {
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--color-text);

    > img {
      width: 2.3em;
    }

    > .name {
      font-size: 0.7em;
      margin-top: 9%;
      color: var(--color-text-dark-2);
    }
  }
</style>
