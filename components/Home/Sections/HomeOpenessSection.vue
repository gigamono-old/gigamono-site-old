<template lang="pug">
  section.home-section
    .main.home-section-main
      //- Section Head
      home-section-head(section-name='OPEN SOURCE', section-title='Lorem ipsum dolor, sit amet', color-var='--color-home-golden-rod', section-detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')

      //- Content
      .content
        //- Visual Image
        .visual Commandline screenshot of installing Sageflow

        //- Check List
        ul.checklist
          li
            .icon-check
            div Lorem ipsum dolor sit amet, consectetur
          li
            .icon-check
            div Lorem ipsum dolor sit amet, consectetur
          li
            .icon-check
            div Lorem ipsum dolor sit amet, consectetur
          li
            .icon-check
            div Lorem ipsum dolor sit amet, consectetur

        //- Technologies Used List
        ul.techstack
          li
            img(src='~/assets/images/placeholder.png', alt=' Techmology used image')
          li
            img(src='~/assets/images/placeholder.png', alt=' Techmology used image')
          li
            img(src='~/assets/images/placeholder.png', alt=' Techmology used image')
          li
            img(src='~/assets/images/placeholder.png', alt=' Techmology used image')
          li
            img(src='~/assets/images/placeholder.png', alt=' Techmology used image')

        //- Learn More Button
        button LEARN MORE

      //- Get Started Button
      button GET STARTED FREE
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  section {
    padding-top: 5em;
    padding-bottom: 2em;

    > .main {
      position: relative;

      > .content {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: 1fr auto;
        grid-template-rows: auto auto 1fr;
        grid-template-areas:
          "visual checklist"
          "visual techstack"
          "visual button";

        > .visual {
          grid-area: visual;
          margin-right: 2rem;
          width: 32rem;
          height: 20rem;
          background-color: var(--color-text-2);
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 5px;
          color: var(--color-text-dark);
          padding: 0 6rem;
          text-align: center;
        }

        > .checklist {
          grid-area: checklist;
          display: flex;
          flex-direction: column;
          height: 10rem;
          justify-content: space-between;

          > li {
            display: flex;
            width: var(--li-width);
            font-size: 1em;
            color: var(--color-text-dark);

            > .icon-check {
              width: 1.35rem;
              height: 1.35rem;
              background-color: var(--color-home-golden-rod);
              margin-right: 0.4rem;
            }
          }
        }

        > .techstack {
          grid-area: techstack;
          margin-top: 1.5rem;
          display: flex;
          justify-content: space-between;

          > li {
            display: flex;
            width: var(--li-width);
            font-size: 1em;
            color: var(--color-text-dark);

            > img {
              width: 3rem;
              height: 3rem;
              border-radius: 50%;
            }
          }
        }

        > button {
          grid-area: button;
          margin-top: 1.5rem;
          height: 2.5rem;
          text-align: center;
          border-radius: 5px;
          background-color: var(--color-text);
          font-size: 0.8rem;
          border: 1px solid var(--color-card-bg-1);
          font-weight: bold;

          &:hover {
            color: var(--color-home-golden-rod);
          }
        }
      }

      > button {
        width: 12rem;
        height: 2.5rem;
        margin-top: 3rem;
        text-align: center;
        border-radius: 5px;
        background-color: var(--color-home-golden-rod-1);
        font-size: 0.8rem;
        color: var(--color-text);
        font-weight: bold;

        &:hover {
          background-color: var(--color-home-golden-rod);
        }
      }
    }
  }
</style>
