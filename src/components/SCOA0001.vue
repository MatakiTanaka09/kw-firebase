<template>
    <div>
        <div class="section">
            <div class="event__detail">
                <div class="columns event__detail__container">
                    <div class="column is-one-quarter">
                        <div class="side-menu">
                            <progressive-img :src="image.language_english1" />
                            <!--<swiper-->
                                <!--:options="swiperOption"-->
                                <!--class="tablet">-->
                                <!--<swiper-slide-->
                                    <!--v-for="n in 3" :key="n">-->
                                    <!--<progressive-img :src="image.language_english1" />-->
                                <!--</swiper-slide>-->
                            <!--</swiper>-->
                        </div>
                    </div>
                    <div class="column event__detail__wrapper">
                        <div class="event__detail__wrapper__main">
                            <div class="event__detail__wrapper__main--content">
                                <div class="school_name">
                                    <span>SCOA</span>
                                </div>
                                <div class="event_title">
                                    <h1 class="event_title--expand">SCOA 週末 Day Camp</h1>
                                </div>
                                <div class="icon_group">
                                    <div class="icon_group--item">
                                        <div class="icon_group--item_icon">
                                            <i class="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div>
                                            <p class="">
                                                <span>東京</span>
                                                <span>葛西</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="icon_group--item">
                                        <div class="icon_group--item_icon">
                                            <i class="far fa-clock"></i>
                                        </div>
                                        <div>
                                            <p class=""><time datetime="2019-04-06">5月26日(水) 13:30〜15:45</time></p>
                                        </div>
                                    </div>
                                    <div class="icon_group--item">
                                        <div class="icon_group--item_icon">
                                            <i class="fas fa-weight-hanging"></i>
                                        </div>
                                        <div>
                                            <p class="">特になし</p>
                                        </div>
                                    </div>
                                    <div class="icon_group--item">
                                        <div class="icon_group--item_icon">
                                            <i class="fas fa-child"></i>
                                        </div>
                                        <div>
                                            <p class="">
                                                <span>6</span>
                                                <span> 〜 </span>
                                                <span>10才</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="icon_group icon_group--item event_recommend_comment">
                                    <div class="icon_group--item_icon">
                                        <i class="fas fa-info"></i>
                                    </div>
                                    <div>
                                        <p>日本にいながら本場アメリカのサマーキャンプが体験できる！</p>
                                    </div>
                                </div>
                                <div class="event_detail school_detail">
                                    <div class="school_detail--left_part">
                                        <div class="about">
                                            <p class="heading">スクールについて</p>
                                            <p>
                                                ワ異文化交流を目的としたアメリカンキャンプSCOA（スコア）<br><br>
                                                英語を学ぶための勉強、受験のための英語ではなく、世界の人々とコミュニケーションを取る手段の１つとして英語の楽しさを知ってもらいたい。<br><br>
                                                SCOAは幼/小/中学生を対象にアメリカのキャンプを英語で実施しています。
                                            </p>
                                        </div>
                                    </div>
                                    <div class="school_detail--right_part">
                                        <div class="image_box">
                                            <figure class="image">
                                                <!--<progressive-img :src="logo" />-->
                                            </figure>
                                        </div>
                                        <div class="school_info">
                                            <p class="heading heading--school">SCOA</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="event_detail experience_detail">
                                    <div class="event_detail--left_part">
                                        <div class="about">
                                            <p class="heading">体験できること</p>
                                            <p>
                                                幼児から小学生まで、英語で様々なアクティビティを楽しめるプログラムです。<br><br>
                                                お子さんが楽しい時間を過ごしている間に、保護者の方はお買い物に行ったり、お茶を飲みにいったりできるロケーションを選んでいます。もちろん見学も可能です。<br><br>
                                                ネイティブスピーカーのスタッフの指示に身体で反応する「TPR（全身反応教授法）」をベースにしたSCOAキャンプでは、楽しみながらオールイングリッシュの体験ができます。<br><br>

                                                ＊お支払いは、当日現地にて現金でお支払いください。
                                            </p>
                                        </div>
                                    </div>
                                    <div class="event_detail--right_part">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="columns place__container">
                    <div class="column is-one-quarter">
                        <p class="title event__detail--title">体験実施場所の紹介</p>
                    </div>
                    <div class="column place">
                        <div>
                            <div class="schedule">
                                <div class="schedule__about">
                                    <div class="schedule__about__container">
                                        <div class="schedule__about__container--card" style="padding: 24px 0px">
                                            <span class="heading">住所</span>
                                            <p>葛西臨海公園（詳しくは、ご予約頂いた方にご連絡します）</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="columns note__container">
                    <div class="column is-one-quarter">
                        <p class="title event__detail--title">留意事項</p>
                    </div>
                    <div class="column notes__container__wrapper">
                        <div class="notes__container__wrapper__main">
                            <div>
                                <div class="notes">
                                    <div class="notes__about">
                                        <div class="columns is-multiline notes__about--modified">
                                            <div class="column is-half notes__about__column">
                                                <p class="heading">キャンセルポリシー</p>
                                                <p>
                                                    前日までにご連絡ください。
                                                    <!--<span><a>キャンセルポリシーを読む。</a></span>-->
                                                </p>
                                            </div>
                                            <!--<div class="column is-half notes__about__column">-->
                                            <!--<p class="heading">参加人数</p>-->
                                            <!--<p>-->
                                            <!--定員5名です。-->
                                            <!--</p>-->
                                            <!--</div>-->
                                            <div class="column is-half notes__about__column">
                                                <p class="heading">参加対象</p>
                                                <p>
                                                    6歳〜10歳のお子さんが参加できます。
                                                </p>
                                            </div>
                                            <div class="column is-half notes__about__column">
                                                <p class="heading">連絡先</p>
                                                <p>
                                                    何かございましたら、こちらまでご連絡ください。
                                                </p>
                                                <br/>
                                                <div class="school_info">
                                                    <p class="heading heading--school">SCOA</p>
                                                    <a href="tel:" class="school_contact">
                                                        電話番号
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <sticky-footer
            :price="'4,000円'"
            :reserving-link="'https://forms.gle/NrfZktXtZsoZE1hr7'"
        ></sticky-footer>
    </div>
</template>

<script>
    import StickyFooter from '@/components/StickyFooter';
    export default {
        components: {
            StickyFooter
        },
        data() {
            return {
                image: {
                    language_english1 : require("../assets/language_english1.jpeg"),
                    scoa                 : require("../assets/SCOA_1.jpg"),
                },
                sports_ballet_class1 : require("../assets/sports_ballet_class1.jpeg"),
                // logo          : require("../assets/kidsup_logo.png")
                swiperOption: {
                    slidesPerView: 1.2,
                    spaceBetween: 8,
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
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
    a:hover {
        opacity: 0.6;
    }
    .event__detail--title {
        font-size: 32px;
        font-weight: bold;
        @media screen and (max-width: 768px) {
            font-size: 24px;
        }
    }
    .heading {
        font-size: 16px;
        font-weight: bold;
        &--school {
            font-size: 12px;
        }
    }
    .section {
        @media screen and (max-width: 768px) {
            padding: 0 24px 64px;
        }
        .event__detail {
            text-align: left;
            &__container {
                margin: 63px 0px;
                @media screen and (max-width: 768px) {
                }
            }
            &__wrapper {
                &__main {
                    &--content {
                        .school_name {
                            color: #484848;
                        }
                        .event_title {
                            &--expand {
                                font-size: 36px;
                                font-weight: bold;
                                @media screen and (max-width: 768px) {
                                    font-size: 24px;
                                }
                            }
                            padding-bottom: 20px;
                        }
                        .icon_group {
                            &--item {
                                display: flex;
                                &_icon {
                                    margin-right: 16px;
                                    margin-bottom: 8px;
                                }
                            }
                        }
                        .event_recommend_comment {
                            padding: 24px 0px;
                            margin-top: 40px;
                            border-top: 1px solid #EBEBEB;
                            border-bottom: 1px solid #EBEBEB;
                            font-weight: bold;
                        }
                        .event_detail {
                            display: flex;
                            justify-content: space-between;
                            margin-top: 24px;
                            padding-bottom: 40px;
                            border-bottom: 1px solid #EBEBEB;

                        }
                        .school_detail {
                            @media screen and (max-width: 768px) {
                                display: block;
                                padding-bottom: 8px;
                                border-bottom: 1px solid #EBEBEB;
                            }
                            &--left_part {
                                width: 150%;
                                margin-right: 0px;
                                @media screen and (max-width: 767px) {
                                    width: 100%;
                                }
                                .about {
                                    width: 95%;
                                    @media screen and (max-width: 768px) {
                                        width: 100%;
                                    }
                                    .heading {
                                        margin: 0 auto 8px;
                                    }
                                }
                            }
                            &--right_part {
                                width: 50%;
                                margin-right: 0;
                                @media screen and (max-width: 768px) {
                                    display: flex;
                                    align-items: center;
                                    width: 100%;
                                    padding: 8px;
                                    margin: 16px 0;
                                    border: 1px solid #EBEBEB;
                                    border-radius: 4px;
                                }
                                .image_box {
                                    margin-right: 16px;
                                    @media screen and (max-width: 768px) {
                                        /*margin: 0px auto 16px;*/
                                        display: flex;
                                        flex-direction: column;
                                        justify-content: center;
                                        width: 64px;
                                        height: 64px;
                                    }
                                }
                                .school_info {
                                    .school_contact {
                                        font-size: 12px;
                                    }
                                }
                            }
                        }
                        .experience_detail, .experience_detail {
                            &--left_part {
                                width: 150%;
                                margin-right: 0;
                                @media screen and (max-width: 768px) {
                                    width: 100%;
                                }
                                .about {
                                    width: 100%;
                                    .heading {
                                        margin: 0 auto 8px;
                                    }
                                }
                            }
                            &--right_part {
                            }
                        }
                    }
                }
            }
        }
        .place__container {
        }
        .schedule__container {
            &__wrapper {
                .schedule {
                    padding-bottom: 40px;
                    border-bottom: 1px solid #EBEBEB;
                    &__about {
                        width: 100%;
                        height: auto;
                        border: 1px solid #EBEBEB;
                        border-radius: 4px;
                        &__container {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            @media screen and (max-width: 768px) {
                                display: block;
                            }
                            &--card {
                                &_date, &_price {
                                    padding-bottom: 4px;
                                }
                                &_button {
                                    .button__expand {
                                        color: #084887;
                                        border: 2px solid #084887;
                                        border-radius: 4px;
                                        @media screen and (max-width: 768px) {
                                            width: 100%;
                                            margin-bottom: 16px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        .notes__container {
            &__wrapper {
                padding-bottom: 40px;
                border-bottom: 1px solid #EBEBEB;
                &__about {
                    width: 100%;
                    height: auto;
                    border: 1px solid #EBEBEB;
                    border-radius: 4px;
                    &--modified {
                        margin-top: 0;
                    }
                    &__column {
                        width: 50%;
                        height: auto;
                        padding-bottom: 24px;
                        border-bottom: 1px solid #EBEBEB;
                        @media screen and (max-width: 768px) {
                            width: 100%;
                            height: auto;
                        }
                        .heading {
                            font-weight: bold;
                            padding-bottom: 4px;
                        }
                    }
                }
            }
        }
    }
</style>
