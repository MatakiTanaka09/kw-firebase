<template>
  <main>
    <section class="top">
        <div class="top-image">
            <progressive-img :src=image_top style="max-width: 100%;" />
        </div>
      <div class="top__content content_all_center">
        <h1 class="app__title top_content_title_color">子供の好奇心に火をつけよう！</h1>
        <p class="top__content--detail">こどもの「やりたい」を好きなだけ体験できる新しい学びスタイル</p>
          <!--<a href="" class="button button__top">-->
            <!--<strong class="button_top_text_color">事前登録はこちら</strong>-->
          <!--</a>-->
          <a href="https://line.me/R/ti/p/%40bzy5124u" class="button button__top">
              <strong class="button_top_text_color">LINE友達登録でイベント情報をゲット！</strong>
          </a>
        <!--</div>-->
      </div>
    </section>
      <!--<section class="section">-->
          <!--<div class="has-text-centered">-->
              <!--<h2 class="heading">キャンペーン期間につき、今だけ無料！</h2>-->
          <!--</div>-->
      <!--</section>-->
    <section class="section section__about">
      <div class="has-text-centered">
        <h2 class="heading">KIDSWEEKENDとは？</h2>
      </div>
        <div class="app__about">
            <p class="app_about_text">
                <span>お子様の興味に合わせて、様々なジャンルの習い事やアクティビティを、</span><br class="is-hidden-mobile">
                <span>年齢、場所、時間から簡単に検索し予約できるサービスです。</span><br><br class="is-hidden-desktop">
                <span>子供だけで楽しむ学び、親子で楽しむアクティビティなど、たくさんの体験を通じて、</span><br class="is-hidden-mobile">
                <span>子供の「好き」や「好奇心」を広げます。</span><br><br class="is-hidden-desktop">
                <span>kidsweekendは未来を生き抜く子供たちに新しい学びのカタチを提供します！</span>
            </p>
        </div>
    </section>
    <section class="section section__howtouse">
      <div class="has-text-centered">
        <h2 class="heading">つかいかた</h2>
      </div>
      <div class="section__howtouse_container">
        <div class="columns">
          <div class="column is-one-third">
            <div class="section__howtouse_container_boxes">
              <div class="section__howtouse_container_box">
                <progressive-img class="section__howtouse_container_image" :src=image_how_to_use_1 />
                <h3 class="section__howtouse_container--title">
                  さがす
                </h3>
                <p class="section__howtouse_container--description">
                  <span>日付、年齢、場所から</span><br>
                  <span>アクティビティを見つける</span>
                </p>
              </div>
            </div>
          </div>
          <div class="column is-one-third">
            <div class="section__howtouse_container_boxes">
              <div class="section__howtouse_container_box">
                <progressive-img class="section__howtouse_container_image" :src=image_how_to_use_2 />
                <h3 class="section__howtouse_container--title">
                  予約する
                </h3>
                <p class="section__howtouse_container--description">
                  <span>気に入ったアクティビティを</span><br>
                  <span>そのまま簡単に予約する</span>
                </p>
              </div>
            </div>
          </div>
          <div class="column is-one-third">
            <div class="section__howtouse_container_boxes">
              <div class="section__howtouse_container_box">
                <progressive-img class="section__howtouse_container_image" :src=image_how_to_use_3 />
                <h3 class="section__howtouse_container--title">
                  体験する
                </h3>
                <p class="section__howtouse_container--description">
                  <span>あとは、お子様を連れていくだけ</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="howtouse__bottom_design"></div>
    </section>
    <!--<section class="section section__map">-->
      <!--<div class="has-text-centered">-->
          <!--<h2 class="heading">さがす</h2>-->
      <!--</div>-->
        <!--<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6483.136778601478!2d139.77721867614565!3d35.66300417079383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018897aedbe5ad5%3A0xc39f1c150c87bb4c!2z44CSMTA0LTAwNTIg5p2x5Lqs6YO95Lit5aSu5Yy65pyI5bO2!5e0!3m2!1sja!2sjp!4v1551153322744" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>-->
    <!--</section>-->
    <section class="section section__activity">
      <div class="section_activity_container">
        <div class="has-text-centered">
          <h2 class="heading">アクティビティ一覧</h2>
        </div>
        <div class="app__activity">
          <recommend-top-card-list></recommend-top-card-list>
            <router-link to="/events" class="button app__activity--button">
                もっと見る
            </router-link>
        </div>
      </div>
    </section>
    <section class="end">
      <progressive-img class="end-image" :src=image_end style="max-width: 100%;" />
        <div class="end__content content_all_center">
            <h1 class="app__title end__content--title_color">今すぐこどもの好きを発見しよう</h1>
            <p class="end__content--detail">好きなだけ体験できる新しい学びスタイル</p>
            <a href="https://line.me/R/ti/p/%40bzy5124u" class="button button__end">
                <strong class="button_end_text_color">LINE友達登録でイベント情報をゲット！</strong>
            </a>
        </div>
    </section>
      <the-footer></the-footer>
  </main>
</template>

<script>
  import RecommendTopCardList from "@/components/RecommendsTopCardList";
  import TheFooter from "@/components/TheFooter";

  export default {
    components: {
        RecommendTopCardList,
        TheFooter
    },
    data() {
      return {
          image_top: require("../assets/app_top_image.jpg"),
          image_how_to_use_1: require("../assets/how_to_use_1.png"),
          image_how_to_use_2: require("../assets/how_to_use_2.png"),
          image_how_to_use_3: require("../assets/how_to_use_3.png"),
          image_end: require("../assets/app_end_image.jpg")
      }
    }
  }
</script>

<style lang="scss" scoped>
  .top {
      width: 100%;
      position: relative;
      @media screen and (max-width: 768px){
          margin-top: 63px;
      }
      .top-image {
          max-width: 100%;
          height: auto;
          z-index: 99;
          @media screen and (min-width: 1024px){
              width: 100%;
              height: auto;
              z-index: 99;
          }
      }
      .top__content {
          font-weight: bold;
          font-family :Quicksand, sans-serif;
          z-index: 100;
          width: 100%;
          .app__title {
              font-size: 40px;
              font-weight: bold;
              @media screen and (max-width: 768px) {
                  font-size: 24px;
                  font-weight: bold;
              }
          }
          &--detail {
              color: white;
              margin-bottom: 16px;
              @media screen and (max-width: 768px) {
                  font-size: 8px;
                  margin-bottom: 8px;
              }
          }
          .top__search {
              display: flex;
              &--calendar_box {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  margin: 4px;
                  height: 50px;
                  width: 250px;
                  background-color: white;
                  color: #01A0EA;
                  font-size: 18px;
                  @media screen and (max-width: 768px) {
                      width: 100px;
                      font-size: 8px;
                  }
              }
              &--age_box {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  margin: 4px;
                  height: 50px;
                  width: 250px;
                  background-color: white;
                  color: #01A0EA;
                  font-size: 18px;
                  @media screen and (max-width: 768px) {
                      width: 100px;
                      font-size: 8px;
                  }
              }
          }
          .top_content_title_color {
              color: white;
          }
          .button__top {
              margin: 4px;
              width: 475px;
              height: 60px;
              background-color: rgb(226, 121, 133);
              border: 2px solid rgb(226, 121, 133);
              font-size: 18px;
              font-weight: bold;
              &:hover {
                  opacity: 0.9;
              }
              @media screen and (max-width: 768px) {
                  width: 250px;
                  font-size: 12px;
                  height: 40px;
              }
              .button_top_text_color {
                  color: white;
              }
          }
      }
  }
  .content {
      .app_plan_basic {
          display: flex;
          color: #084887;
          padding: 16px 0;
          border-bottom: 1px solid #EBEBEB;
          .app_plan_basic_icon {
              color: #03cea4;
              margin-right: 16px;
          }
      }
      .no-border-plan {
          border-bottom: none;
      }
  }
  .section__about {
      @media screen and (min-width: 1024px) {
          margin: 0 auto;
          max-width: 980px;
      }
      .app__about {
          text-align: center;
          .app_about_text {
              margin-bottom: 16px;
              line-height: 32px;
              @media screen and (max-width: 768px) {
                  font-size: 14px;
              }
          }
      }
  }
  .section__howtouse {
      position: relative;
      background-color: rgb(94, 205, 189);
      padding-bottom: 64px;
      color: white;
      &_container {
          .columns {
              @media screen and (min-width: 768px) {
                  margin: 0 auto;
                  max-width: 980px;
                  width: 100%;
                  .column.is-one-third {
                      text-align: center;
                      .section__howtouse_container_boxes {
                          text-align: center;
                          .section__howtouse_container--image {
                              border-radius: 8px;
                          }
                          .section__howtouse_container--title {
                              font-weight: bold;
                              font-size: 24px;
                              margin-bottom: 8px;
                          }
                          .section__howtouse_container--description {
                              font-size: 13px;
                          }
                      }
                  }
              }
              @media screen and (max-width: 768px) {
                  .column.is-one-third {
                      text-align: center;
                      .section__howtouse_container_boxes {
                          text-align: center;
                      }
                      .section__howtouse_container--title {
                          font-weight: bold;
                          font-size: 24px;
                          margin-bottom: 8px;
                      }
                      .section__howtouse_container--description {
                          font-size: 16px;
                      }
                  }
              }
          }
      }
    .howtouse__bottom_design {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding-bottom: 24px;
      background-color: #03A1EB;
    }
  }
  .section__map {
    @media screen and (min-width: 1024px) {
      margin: 0 auto;
      max-width: 980px;
    }
  }
  .section__activity {
    @media screen and (min-width: 1024px) {
      margin: 0 auto;
      max-width: 980px;
    }
    .app__activity {
        &--button {
            width: 350px;
            height: 50px;
            background-color: rgb(226, 121, 133);
            border: 2px solid rgb(226, 121, 133);
            color: white;
            font-weight: bold;
            @media screen and (max-width: 768px) {
                width: 250px;
                font-size: 12px;
                height: 40px;
            }
        }
      text-align: center;
        @media screen and (min-width: 1024px) {
            max-width: 980px;
            margin: 0 auto;
        }
      .column.is-one-third {
        text-align: center;
        .activity__container {
          text-align: left;
          width: 100%;
          color: #7a7a7a;
          font-size: 12px;
          .activity_container_images {
            position: relative;
            text-align: center;
            &--image {
              border-radius: 8px;
            }
            &--title {
              position: absolute;
              bottom: 48px;
              right: 24px;
              left: 0;
              z-index: 10;
              text-align: right;
              font-weight: bold;
              font-size: 36px;
              letter-spacing: 5px;
              color: white;
            }
          }
          .activity_container_category_name {
            color: lightseagreen;
          }
          .activity_container_title {
            &--detail {
              font-weight: bold;
              font-size: 18px;
            }
          }
          .activity_container_time_price {
          }
          .activity_container_child_age {
          }
        }
      }
      .more_button_container {
        .button_category_display {
          width: 720px;
          height: 50px;
          text-align: center;
          margin-top: 24px;
          padding: 8px;
          color: white;
          background-color: lawngreen;
          border: 2px solid lawngreen;
          border-radius: 4px;
          font-weight: bold;
          @media screen and (max-width: 768px) {
            width: 100%;
          }
          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
  }
  .end {
    position: relative;
    .end-image {
      width: 100%;
      z-index: 99;
    }
    .end__content {
        padding: 24px;
        font-weight: bold;
        font-family :Quicksand, sans-serif;
        z-index: 100;
          width: 100%;
        @media screen and (max-width: 768px) {
          padding: 0px;
        }
        .app__title {
          font-size: 36px;
          margin-bottom: 8px;
          @media screen and (max-width: 768px) {
            font-size: 18px;
          }
        }
        &--title_color {
          color: white;
          font-weight: bold;
        }
        &--detail {
          color: white;
          margin-bottom: 16px;
          @media screen and (max-width: 768px) {
            font-size: 8px;
          }
        }
        .button__end {
            width: 350px;
            height: 50px;
            background-color: #F29208;
            border: 2px solid #F29208;
            @media screen and (max-width: 768px) {
                width: 250px;
                font-size: 12px;
                height: 40px;
            }
            .button_end_text_color {
                color: white;
            }
        }
    }
      .button__end__mobile {
          text-align: center;
          .button__end {
              width: 350px;
              height: 50px;
              background-color: #F29208;
              border: 2px solid #F29208;
              /*margin-top: 16px;*/
              @media screen and (max-width: 768px) {
                  width: 250px;
                  font-size: 12px;
                  height: 40px;
                  /*margin-top: 16px;*/
              }
              .button_end_text_color {
                  color: white;
              }
          }
      }
  }
  .section {
    @media screen and (min-width: 1024px) {
      margin: 0 auto;
    }
  }
  .heading {
    position: relative;
    display: inline-block;
    margin: 30px 0 45px;
    padding-bottom: 15px;
    letter-spacing: 5px;
    font-size: 36px;
    color: #2B2B7C;
    font-weight: bolder;
    &::before {
      width: 50%;
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      left: 25%;
      border-bottom: 2px solid #2B2B7C;
    }
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
  .content_all_center {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    margin:0;
    padding:0;
  }
  @media screen and (max-width: 768px) {
    .top-content,
    .end-content {
      top: 50%;
      width: 100%;
      padding: 0 18px;
    }
    .title-expand {
      font-size: 15px;
      color: white;
    }
    .btn-start-now {
      width: 175px;
    }
    .button_category_display {
      width: 100%;
    }
    .about-text {
      line-height: 32px;
    }
  }
  header {
    @media screen and (max-width: 768px) {
      margin-top: -63px;
    }
  }
</style>
