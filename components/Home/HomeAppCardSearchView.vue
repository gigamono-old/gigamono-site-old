<template lang="pug">
  .app-card-search-view
    ul
      li(v-for='(item, index) in list', :key='index')
        .group
          home-app-card(:name='item.card1.name', :image='item.card2.image', border-color-var='--color-text-3', box-shadow-var='--shadow-primary')
          home-app-card(:name='item.card2.name', :image='item.card2.image', border-color-var='--color-text-3', box-shadow-var='--shadow-primary')
</template>

<script>
  export default {
    data() {
      const list = []
      for (let i = 0; i < 20; i++) {
        list.push({
          card1: {
            image: "placeholder.png",
            name: "Lorem",
          },
          card2: {
            image: "placeholder.png",
            name: "Lorem",
          },
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

  .app-card-search-view {
    > ul {
      display: flex;

      > li {
        > .group {
          display: flex;
          flex-direction: column;

          > .app-card {
            transform: scale(1.1);

            &:first-child {
              margin-bottom: 3rem;
              @include bg-phone-2 {
                margin-bottom: 2rem;
              }
            }
          }
        }

        &:not(:last-child) {
          margin-right: 3rem;
          @include bg-phone-2 {
            margin-right: 2rem;
          }
        }

        &:nth-child(odd) {
          margin-top: 4rem;
          @include bg-phone-2 {
            margin-top: 2rem;
          }
        }
      }
    }
  }
</style>
