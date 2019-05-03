<template>
    <div id="app">
        <the-header></the-header>
        <router-view/>
    </div>
</template>

<script>
    import TheHeader from "@/components/TheHeader";
    export default {
        name: 'App',
        components: {
            TheHeader,
            // TheFooter
        }
    }
</script>

<style lang="scss">
  @import "../node_modules/bulma/bulma.sass";
  header {
      @media screen and (max-width: 767px){
          margin-top: -63px;
      }
  }
</style>
