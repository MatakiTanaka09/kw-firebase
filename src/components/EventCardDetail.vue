<template>
    <div>
        <div class="section">
            <div class="event__detail">
                <div class="columns event__detail__container">
                    <div class="column is-one-quarter">
                        <div class="side-menu">
                            <!--<progressive-img :src="" />-->
                        </div>
                    </div>
                    <div class="column event__detail__wrapper">
                        <div class="event__detail__wrapper__main">
                            <div class="event__detail__wrapper__main--content">
                                <div class="school_name">
                                    <span>{{ schoolName }}</span>
                                </div>
                                <div class="event_title">
                                    <h1 class="event_title--expand">クラシックバレエ（ワガノアメソッド）</h1>
                                </div>
                                <div class="icon_group">
                                    <div class="icon_group--item">
                                        <div class="icon_group--item_icon">
                                            <i class="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div>
                                            <p class="">
                                                <span>東京</span>
                                                <span>{{ eventCity }}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="icon_group--item">
                                        <div class="icon_group--item_icon">
                                            <i class="far fa-clock"></i>
                                        </div>
                                        <div>
                                            <p class=""><time datetime="">{{ eventDateTime }}</time></p>
                                        </div>
                                    </div>
                                    <div class="icon_group--item">
                                        <div class="icon_group--item_icon">
                                            <i class="fas fa-weight-hanging"></i>
                                        </div>
                                        <div>
                                            <p class="">{{ handing }}</p>
                                        </div>
                                    </div>
                                    <div class="icon_group--item">
                                        <div class="icon_group--item_icon">
                                            <i class="fas fa-child"></i>
                                        </div>
                                        <div>
                                            <p class="">
                                                <span>{{ eventTargetMinAge }}</span>
                                                <span> 〜 </span>
                                                <span>{{ eventTargetMaxAge }}才</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="icon_group icon_group--item event_recommend_comment">
                                    <div class="icon_group--item_icon">
                                        <i class="fas fa-info"></i>
                                    </div>
                                    <div>
                                        <p>{{ pr }}</p>
                                    </div>
                                </div>
                                <div class="event_detail school_detail">
                                    <div class="school_detail--left_part">
                                        <div class="about">
                                            <p class="heading">スクールについて</p>
                                            <p>
                                                {{ schoolAbout }}
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
                                            <p class="heading heading--school">{{ schoolName }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="event_detail experience_detail">
                                    <div class="event_detail--left_part">
                                        <div class="about">
                                            <p class="heading">体験できること</p>
                                            <p>
                                                {{ contents }}
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
                                            <a href="https://goo.gl/maps/oNT7zD688AktxKBMA">{{ address }}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="columns schedule__container">
                    <div class="column is-one-quarter">
                        <p class="title event__detail--title">{{ planning.type }}</p>
                    </div>
                    <div class="column schedule__container__wrapper">
                        <div class="schedule__container__wrapper__main">
                            <div>
                                <div class="schedule">
                                    <div class="schedule__about">
                                        <div style="padding: 0px 32px">
                                            <div class="schedule__about__container" v-for="(plan, index) in planning.plan" :key="index">
                                                <div class="schedule__about__container--card" style="padding: 24px 0px">
                                                    <div class="schedule__about__container--card_date">
                                                        <span>{{ plan.dateTime }}</span>
                                                        <span class="" aria-hidden="true">|</span>
                                                        <span>{{ plan.startedAt }}</span>〜<span>{{ plan.expiredAt }}</span>
                                                    </div>
                                                    <div class="schedule__about__container--card_price">
                                                        <span>¥</span>
                                                        <span>{{ plan.price }} / 人</span>
                                                    </div>
                                                </div>
                                                <div class="schedule__about__container--card_button">
                                                    <router-link to="/event/ballet0002" class="button button__expand">詳細</router-link>
                                                </div>
                                            </div>
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
                                                    {{ cancelPolicy }}
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
                                                    {{ eventTargetMinAge }}歳〜{{eventTargetMaxAge}}歳のお子さんが参加できます。
                                                </p>
                                            </div>
                                            <div class="column is-half notes__about__column">
                                                <p class="heading">連絡先</p>
                                                <p>
                                                    何かございましたら、こちらまでご連絡ください。
                                                </p>
                                                <br/>
                                                <div class="school_info">
                                                    <p class="heading heading--school">{{ schoolName }}</p>
                                                    <a href='tel:"schoolTel"' class="school_contact">
                                                        {{ schoolTel }}
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
            :price="price"
            :reserving-link="applyFormUrl"
        ></sticky-footer>
    </div>
</template>

<script>
    import StickyFooter from '@/components/StickyFooter';
    export default {
        name: "EventCardDetail",
        components: {
            StickyFooter
        },
        data() {
            return {
                sports_ballet_class1 : require("../assets/sports_ballet_class1.jpeg"),
                // logo          : require("../assets/kidsup_logo.png")
            }
        },
        props: {
            schoolName: {
                type: String
            },
            eventId: {
                type: String
            },
            eventTitle: {
                type: String
            },
            eventCity: {
                type: String
            },
            eventDateTime: {
                type: String
            },
            handing: {
                type: String
            },
            eventTargetMinAge: {
                type: String
            },
            eventTargetMaxAge: {
                type: String
            },
            pr: {
                type: String
            },
            schoolAbout: {
                type: String
            },
            contents: {
                type: String
            },
            address: {
                type: String
            },
            price: {
                type: String
            },
            planning: {
                type: Object
            },
            cancelPolicy: {
                type: String
            },
            schoolTel: {
                type: String
            },
            applyFormUrl: {
                type: String
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
