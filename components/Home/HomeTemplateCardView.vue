<template lang="pug">
  ul.template-card-view
    li(v-for='(item, index) in list' :key='index')
      .template-card
        img.preview(:src='require(`~/assets/images/${item.image}`)' alt='Template image')
        .title {{ item.title }}
        .detail {{ item.detail }}
        button {{ item.buttonText }}
</template>

<script>
  export default {
    data() {
      const list = []
      for (let i = 0; i < 10; i++) {
        list.push({
          image: "placeholder.png",
          title: "Lorem ipsum dolor sit amet",
          buttonText: "Lorem",
          detail: `
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.
            `,
        })
      }
      return {
        list,
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/styles.scss";

  .template-card-view {
    display: flex;
    @include bg-phone {
      flex-direction: column;
    }

    > li {
      display: flex;
      justify-content: center;
      width: 100%;
      > .template-card {
        height: 27rem;
        width: 19rem;
        border-radius: 5px;
        overflow: hidden;
        box-sizing: border-box;
        padding-bottom: 1.5rem;
        display: grid;
        grid-template-rows: repeat(2, auto) 1fr;
        grid-template-areas:
          "image"
          "title"
          "detail"
          "button";
        justify-items: center;
        box-shadow: var(--shadow-card);
        border: 1px solid var(--color-text-3);
        border-top: 5px solid var(--color-home-yellow-green);
        @include bg-phone {
          width: 21rem;
          height: auto;
        }
        @include md-phone {
          width: 100%;
        }

        > img {
          grid-area: image;
          width: 100%;
          height: 12rem;
          object-fit: cover;
        }

        > .title {
          grid-area: title;
          width: 17rem;
          text-align: center;
          padding: 1.5rem 0;
          color: var(--color-home-yellow-green);
          font-size: 1.1em;
          @include bg-phone {
            padding: 0.8rem 0;
            width: 90%;
            text-align: left;
            font-size: 0.9em;
          }
        }

        > .detail {
          grid-area: detail;
          width: 17rem;
          text-align: center;
          font-size: 0.8rem;
          line-height: 1.2rem;
          color: var(--color-text-dark);
          @include bg-phone {
            line-height: 1.6em;
            font-size: 0.9em;
            width: 90%;
            text-align: left;
          }
        }

        > button {
          grid-area: button;
          width: 8rem;
          height: 2rem;
          text-align: center;
          border-radius: 50px;
          margin-top: 1rem;
          color: var(--color-text);
          background-color: var(--color-card-bg);
          font-size: 0.9rem;
          @include bg-phone {
            margin-top: 1.2rem;
          }

          &:hover {
            background-color: var(--color-home-yellow-green);
          }
        }
      }

      &:not(:last-child) {
        margin-right: 3rem;
        @include bg-phone {
          margin: 0;
        }
      }

      &:nth-child(even) {
        margin-top: 4rem;
        @include bg-phone {
          margin-top: 2rem;
        }
      }

      &:not(:first-child):not(:nth-child(2)) {
        @include bg-phone {
          display: none;
        }
      }
    }
  }
</style>
