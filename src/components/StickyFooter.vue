<template>
    <div class="sticky__footer">
        <div class="sticky__footer__container">
            <div class="sticky__footer__container__wrapper">
                <div class="left__item__container">
                    <div class="left__item__container__wrapper is-hidden-mobile">
                    </div>
                </div>
                <div class="right__item__container">
                    <div class="right__item__container__wrapper">
                        <div class="price-part">
                            <div class="price-container">
                                <strong><span class="activity-price">{{ price }}</span></strong>
                                <!--<span> / 1人</span>-->
                            </div>
                        </div>
                        <div class="schdule-part">
                            <div>
                                <a class="button btn-expand" :href="reservingLink" :disabled="bottonStop">
                                    <span class="has-text-weight-bold">申し込む</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
        },
        props: {
            price: String,
            bottonStop: {
                type: Boolean,
                default: false
            },
            reservingLink:{
                type: String,
                default: ""
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sticky__footer {
        height: 70px;
        position: fixed;
        bottom: 0;
        width: 100%;
        border-top: 1px solid #EBEBEB;
        box-shadow: 0 3px 9px 3px rgba(0, 0, 0, 0.05);
        background-color: white;
        z-index: 1000;
        &__container {
            margin: 0px 20px;
            &__wrapper {
                display: flex;
                justify-content: space-around;
                align-items: center;
                padding-top: 10px;
                padding-bottom: 10px;
                width: 100%;
                .left__item__container {
                    &__wrapper {
                        display: flex;
                        height: 50px;
                        .content {
                            width: 100%;
                        }
                    }
                }
                .right__item__container {
                    &__wrapper {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        height: 50px;
                        .price-container {
                            width: 100%;
                            padding-right: 8px;
                            .activity-price {
                                font-size: 12px;
                            }
                        }
                        .btn-expand {
                            width: 200px;
                            height: 48px;
                            background-color: rgb(226, 121, 133);
                            border: 1px solid rgb(226, 121, 133);
                            color: white;
                        }
                    }
                }
            }
        }
    }
</style>
