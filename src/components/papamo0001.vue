<template>
    <div>
        <div class="section">
            <div class="event__detail">
                <div class="columns event__detail__container">
                    <div class="column is-one-quarter">
                        <div class="side-menu">
                            <!--<progressive-img :src="YogaKids"/>-->
                            <swiper
                                :options="swiperOption"
                                class="">
                                <swiper-slide>
                                    <progressive-img :src="papamo1" />
                                </swiper-slide>
                                <swiper-slide>
                                    <progressive-img :src="papamo2" />
                                </swiper-slide>
                                <swiper-slide>
                                    <progressive-img :src="papamo3" />
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                    <div class="column event__detail__wrapper">
                        <div class="event__detail__wrapper__main">
                            <div class="event__detail__wrapper__main--content">
                                <div class="school_name">
                                    <span>PAPAMO SCHOOL</span>
                                </div>
                                <div class="event_title">
                                    <h1 class="event_title--expand">PAPAMO SCHOOL【ダンス・体操 年中クラス】</h1>
                                </div>
                                <div class="icon_group">
                                    <div class="icon_group--item">
                                        <div class="icon_group--item_icon">
                                            <i class="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div>
                                            <p class="">
                                                <span>東京</span>
                                                <span>日本橋</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="icon_group--item">
                                        <div class="icon_group--item_icon">
                                            <i class="far fa-clock"></i>
                                        </div>
                                        <div>
                                            <p class=""><time datetime="2019-05-07">5月7日(火) 15:20〜16:20</time></p>
                                        </div>
                                    </div>
                                    <div class="icon_group--item">
                                        <div class="icon_group--item_icon">
                                            <i class="fas fa-weight-hanging"></i>
                                        </div>
                                        <div>
                                            <p class="">動きやすい格好</p>
                                        </div>
                                    </div>
                                    <div class="icon_group--item">
                                        <div class="icon_group--item_icon">
                                            <i class="fas fa-child"></i>
                                        </div>
                                        <div>
                                            <p class="">
                                                <span>4</span>
                                                <span> 〜 </span>
                                                <span>5才</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="icon_group icon_group--item event_recommend_comment">
                                    <div class="icon_group--item_icon">
                                        <i class="fas fa-info"></i>
                                    </div>
                                    <div>
                                        <p>こどもの可能性を見出す教室。今月は、こどもが大好き「体操・ダンス」！</p>
                                    </div>
                                </div>
                                <div class="event_detail school_detail">
                                    <div class="school_detail--left_part">
                                        <div class="about">
                                            <p class="heading">スクールについて</p>
                                            <p>
                                                PAPAMO SCHOOLとは、年間10種類以上の習い事に取り組める教室<br><br>
                                                ラグビー、ボクシング、ダンス、音楽etc…<br><br>
                                                PAPAMO SCHOOLは、小学校高学年になって本格的に部活動・習い事を絞る前に未就学の段階で様々な習い事にチャレンジして興味の幅を広げ、お子さんがどんなことに向いているのか、何が好きなのかを見出すことができる教室です。
                                            </p>
                                        </div>
                                    </div>
                                    <div class="school_detail--right_part">
                                        <div class="image_box">
                                            <figure class="image">
                                                <progressive-img :src="papamo_logo" />
                                            </figure>
                                        </div>
                                        <div class="school_info">
                                            <!--<p class="heading heading&#45;&#45;school">PAPAMO SCHOOL</p>-->
                                        </div>
                                    </div>
                                </div>
                                <div class="event_detail experience_detail">
                                    <div class="event_detail--left_part">
                                        <div class="about">
                                            <p class="heading">体験できること</p>
                                            <p>
                                                今月は、【ダンス・体操】を行います。<br><br>
                                                初体験でも楽しめる独自に開発したメソッドがベースなので、初体験が楽しい記憶として残ります。<br><br>
                                                お子さんの特徴を見出す「こどもの記録」により、お子さんの得意なことや次へのアドバイスを専門家と担任の先生が各種目ごとにコメントします。<br><br>
                                                客観的にお子さんのことを知ることができ、お子さんの特徴を見出すことに役立ちます。<br><br>
                                                ＊受講料は体験回数によって異なります。<br>
                                                1回目：無料<br>
                                                2回目：５００円<br>
                                                3回目：３,２４０円（税別）<br>
                                                受講料は、当日現地にて現金でお支払いください。
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
                                            <a href="https://goo.gl/maps/rXWhdKSrviENCMeh8">東京都中央区日本橋馬喰町1-9-1　KNビル5階</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.3015128618763!2d139.78024425012927!3d35.69419723677232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ead6ff77565%3A0xa9834c33b8eef1f4!2z44CSMTAzLTAwMDIg5p2x5Lqs6YO95Lit5aSu5Yy65pel5pys5qmL6aas5Zaw55S677yR5LiB55uu77yZ4oiS77yR!5e0!3m2!1sja!2sjp!4v1556885982459!5m2!1sja!2sjp" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                    </div>
                </div>
                <!--<div class="columns schedule__container">-->
                    <!--<div class="column is-one-quarter">-->
                        <!--<p class="title event__detail&#45;&#45;title">定期開催</p>-->
                    <!--</div>-->
                    <!--<div class="column schedule__container__wrapper">-->
                        <!--<div class="schedule__container__wrapper__main">-->
                            <!--<div>-->
                                <!--<div class="schedule">-->
                                    <!--<div class="schedule__about">-->
                                        <!--<div style="padding: 0px 32px">-->
                                            <!--<div class="schedule__about__container">-->
                                                <!--<div class="schedule__about__container&#45;&#45;card" style="padding: 24px 0px">-->
                                                    <!--<div class="schedule__about__container&#45;&#45;card_date">-->
                                                        <!--<span>5月16日(木)</span>-->
                                                        <!--<span class="" aria-hidden="true">|</span>-->
                                                        <!--<span>17:00〜18:00</span>-->
                                                    <!--</div>-->
                                                    <!--<div class="schedule__about__container&#45;&#45;card_price">-->
                                                        <!--<span>¥</span>-->
                                                        <!--<span>2,200 / 人</span>-->
                                                    <!--</div>-->
                                                <!--</div>-->
                                                <!--<div class="schedule__about__container&#45;&#45;card_button">-->
                                                    <!--<router-link to="/event/kidsyoga0001" class="button button__expand">詳細</router-link>-->
                                                <!--</div>-->
                                            <!--</div>-->
                                            <!--<div class="schedule__about__container">-->
                                                <!--<div class="schedule__about__container&#45;&#45;card" style="padding: 24px 0px">-->
                                                    <!--<div class="schedule__about__container&#45;&#45;card_date">-->
                                                        <!--<span>5月30日(木)</span>-->
                                                        <!--<span class="" aria-hidden="true">|</span>-->
                                                        <!--<span>17:00〜18:00</span>-->
                                                    <!--</div>-->
                                                    <!--<div class="schedule__about__container&#45;&#45;card_price">-->
                                                        <!--<span>¥</span>-->
                                                        <!--<span>2,200 / 人</span>-->
                                                    <!--</div>-->
                                                <!--</div>-->
                                                <!--<div class="schedule__about__container&#45;&#45;card_button">-->
                                                    <!--<router-link to="/event/kidsyoga0003" class="button button__expand">詳細</router-link>-->
                                                <!--</div>-->
                                            <!--</div>-->
                                        <!--</div>-->
                                    <!--</div>-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
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
                                                    4歳〜5歳のお子さんが参加できます。
                                                </p>
                                            </div>
                                            <div class="column is-half notes__about__column">
                                                <p class="heading">連絡先</p>
                                                <p>
                                                    何かございましたら、こちらまでご連絡ください。
                                                </p>
                                                <br/>
                                                <div class="school_info">
                                                    <p class="heading heading--school">PAPAMO SCHOOL</p>
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
            :price="'0円'"
            :reserving-link="'https://forms.gle/fWvsr1wciLvjoo4m8'"
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
                papamo1: require("../assets/papamo_1.png"),
                papamo2: require("../assets/papamo_2.jpg"),
                papamo3: require("../assets/papamo_3.jpg"),
                papamo_logo: require("../assets/papamo_logo.png"),
                swiperOption: {
                    slidesPerView: 1.2,
                    spaceBetween: 8,
                },
                images: [
                    this.papamo1,
                    this.papamo2,
                    this.papamo3
                ]
                // logo          : require("../assets/kidsup_logo.png")
            }
        }
    }
</script>

<style lang="scss" scoped>
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
                                @media screen and (max-width: 768px) {
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
                                    width: 64px;
                                    height: 64px;
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
