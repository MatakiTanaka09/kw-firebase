<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
            <img class="navbar__item--logo mobile" :src="logo_pc">
            <img class="navbar__item--logo tablet" :src="logo_sp">
        </router-link>
        <!--<a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarHomeHeader" @click="dropdownToggle">-->
          <!--<span aria-hidden="true"></span>-->
          <!--<span aria-hidden="true"></span>-->
          <!--<span aria-hidden="true"></span>-->
        <!--</a>-->
      </div>
      <!--<div id="navbarHomeHeader" class="navbar-menu" :class="{'is-active': dropdownActive}">-->
        <!--<div class="navbar-end">-->
          <!--<div class="navbar-item">-->
            <!--<div class="buttons">-->
              <!--<a href="https://goo.gl/forms/Wjckfhy3ps4SIIQ62" to="register" class="button">-->
                <!--<strong>事前登録</strong>-->
              <!--</a>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    </nav>
  </header>
</template>

<script>
  export default {
    data() {
      return {
          dropdownActive: false,
          logo_pc: require("../assets/pc.jpg"),
          logo_sp: require("../assets/sp.png"),
      }
    },
    methods: {
      dropdownToggle() {
        this.dropdownActive = !this.dropdownActive;
      },
    },
  }
</script>

<style lang="scss" scoped>
  header {
    box-shadow: 0px 3px 25px rgba(77,77,99,0.1);
    font-weight: bold;
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 63px;
    background-color: white;
    nav.navbar {
      max-width: 1088px;
      margin: 0 auto;
      .navbar__item--logo {
        font-size: 27px;
        letter-spacing: 5px;
        color: #03A1EB;
      }
      .buttons {
        font-size: 14px;
          .button:hover {
              border: 1px solid rgb(66, 143, 238);
              background-color: rgb(66, 143, 238);
              color: white;
              opacity: 0.7;
          }
      }
    }
  }
  .mobile {
      @media screen and (max-width: 768px) {
          display: none;
      }
  }
  .tablet {
      @media screen and (min-width: 768px) {
          display: none;
      }
  }
</style>
