<template>
    <main>
        <div class="recommends__container">
            <section class="section">
                <div class="columns is-multiline">
                    <recommends-top-card
                        v-for="event in detailEventDataKidsup" :key="event.eventId"
                        :event-display-type="event.eventDisplayTypeThird"
                        :event-path-name="event.eventPathName"
                        :event-image-path="kidsup"
                        :event-time="event.eventTime"
                        :event-category="event.eventCategory"
                        :event-title="event.eventTitle"
                        :event-date-time="event.eventDateTime"
                        :event-price="event.eventPrice"
                        :event-place="event.eventPlace"
                        :event-min-age="event.eventMinAge"
                    ></recommends-top-card>
                    <recommends-top-card
                        v-for="event in detailEventDataBallet" :key="event.eventId"
                        :event-display-type="event.eventDisplayTypeThird"
                        :event-path-name="event.eventPathName"
                        :event-image-path="sports_ballet_class1"
                        :event-time="event.eventTime"
                        :event-category="event.eventCategory"
                        :event-title="event.eventTitle"
                        :event-date-time="event.eventDateTime"
                        :event-price="event.eventPrice"
                        :event-place="event.eventPlace"
                        :event-min-age="event.eventMinAge"
                    ></recommends-top-card>
                    <recommends-top-card
                        :event-display-type="detailEventDataScoa.eventDisplayTypeThird"
                        :event-path-name="detailEventDataScoa.eventPathName"
                        :event-image-path="language_english1"
                        :event-time="detailEventDataScoa.eventTime"
                        :event-category="detailEventDataScoa.eventCategory"
                        :event-title="detailEventDataScoa.eventTitle"
                        :event-date-time="detailEventDataScoa.eventDateTime"
                        :event-price="detailEventDataScoa.eventPrice"
                        :event-place="detailEventDataScoa.eventPlace"
                        :event-min-age="detailEventDataScoa.eventMinAge"
                    ></recommends-top-card>
                    <recommends-top-card
                        v-for="event in detailEventDataInstyleYoga" :key="event.eventId"
                        :event-display-type="event.eventDisplayTypeThird"
                        :event-path-name="event.eventPathName"
                        :event-image-path="yoga_kids"
                        :event-time="event.eventTime"
                        :event-category="event.eventCategory"
                        :event-title="event.eventTitle"
                        :event-date-time="event.eventDateTime"
                        :event-price="event.eventPrice"
                        :event-place="event.eventPlace"
                        :event-min-age="event.eventMinAge"
                    ></recommends-top-card>
                    <recommends-top-card
                        v-for="event in detailEventDataInstyleAirYoga" :key="event.eventId"
                        :event-display-type="event.eventDisplayTypeThird"
                        :event-path-name="event.eventPathName"
                        :event-image-path="yoga_family"
                        :event-time="event.eventTime"
                        :event-category="event.eventCategory"
                        :event-title="event.eventTitle"
                        :event-date-time="event.eventDateTime"
                        :event-price="event.eventPrice"
                        :event-place="event.eventPlace"
                        :event-min-age="event.eventMinAge"
                    ></recommends-top-card>
                    <recommends-top-card
                        v-for="event in detailEventDataInstyleKidsCooking" :key="event.eventId"
                        :event-display-type="event.eventDisplayTypeThird"
                        :event-path-name="event.eventPathName"
                        :event-image-path="kids_cooking_school"
                        :event-time="event.eventTime"
                        :event-category="event.eventCategory"
                        :event-title="event.eventTitle"
                        :event-date-time="event.eventDateTime"
                        :event-price="event.eventPrice"
                        :event-place="event.eventPlace"
                        :event-min-age="event.eventMinAge"
                    ></recommends-top-card>
                    <recommends-top-card
                        v-for="event in detailEventDataInstyleKidsSnackCooking" :key="event.eventId"
                        :event-display-type="event.eventDisplayTypeThird"
                        :event-path-name="event.eventPathName"
                        :event-image-path="FamilyCookingSchool"
                        :event-time="event.eventTime"
                        :event-category="event.eventCategory"
                        :event-title="event.eventTitle"
                        :event-date-time="event.eventDateTime"
                        :event-price="event.eventPrice"
                        :event-place="event.eventPlace"
                        :event-min-age="event.eventMinAge"
                    ></recommends-top-card>
                    <recommends-top-card
                        v-for="event in detailEventDataPapamo" :key="event.eventId"
                        :event-display-type="event.eventDisplayTypeThird"
                        :event-path-name="event.eventPathName"
                        :event-image-path="Papamo"
                        :event-time="event.eventTime"
                        :event-category="event.eventCategory"
                        :event-title="event.eventTitle"
                        :event-date-time="event.eventDateTime"
                        :event-price="event.eventPrice"
                        :event-place="event.eventPlace"
                        :event-min-age="event.eventMinAge"
                    ></recommends-top-card>
                    <recommends-top-card
                        v-for="event in detailEventDataTennis" :key="event.eventId"
                        :event-display-type="event.eventDisplayTypeThird"
                        :event-path-name="event.eventPathName"
                        :event-image-path="Tennis1"
                        :event-time="event.eventTime"
                        :event-category="event.eventCategory"
                        :event-title="event.eventTitle"
                        :event-date-time="event.eventDateTime"
                        :event-price="event.eventPrice"
                        :event-place="event.eventPlace"
                        :event-min-age="event.eventMinAge"
                    ></recommends-top-card>
                    <recommends-top-card
                        v-for="event in detailEventDataRugby" :key="event.eventId"
                        :event-display-type="event.eventDisplayTypeThird"
                        :event-path-name="event.eventPathName"
                        :event-image-path="Rugby1"
                        :event-time="event.eventTime"
                        :event-category="event.eventCategory"
                        :event-title="event.eventTitle"
                        :event-date-time="event.eventDateTime"
                        :event-price="event.eventPrice"
                        :event-place="event.eventPlace"
                        :event-min-age="event.eventMinAge"
                    ></recommends-top-card>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
    import RecommendsTopCard from './RecommendsTopCard';
    import db from "@/db/db.json";
    export default {
        components: {
            RecommendsTopCard,
        },
        data() {
            return {
                isLoading: false,
                recommendsZeroYearOldChild: "0歳に人気",
                recommendsOneYearOldChild: "1歳に人気",
                recommendsAll: "すべてみる",
                recommendsRecently: "今日・明日",
                cardDisplayFour: 4,
                cardDisplayEight: 8,
                cardDisplayType: 'is-one-third',
                detailEventDataKidsup: db["db"]["top"]["kidsup"],
                detailEventDataBallet: db["db"]["top"]["ballet"],
                detailEventDataScoa: db["db"]["top"]["scoa"],
                detailEventDataInstyleYoga: db["db"]["top"]["instyleYoga"],
                detailEventDataInstyleAirYoga: db["db"]["top"]["instyleAirYoga"],
                detailEventDataInstyleKidsCooking: db["db"]["top"]["instyleKidsCooking"],
                detailEventDataInstyleKidsSnackCooking: db["db"]["top"]["instyleKidsSnackCooking"],
                detailEventDataPapamo: db["db"]["top"]["papamo"],
                detailEventDataTennis: db["db"]["top"]["tennis"],
                detailEventDataRugby: db["db"]["top"]["rugby"],
                kidsup               : require("../assets/kidsup_top_image.jpg"),
                sports_ballet_class1 : require("../assets/sports_ballet_class1.jpeg"),
                language_english1    : require("../assets/language_english1.jpeg"),
                yoga_family          : require("../assets/YogaFamily.jpeg"),
                yoga_kids            : require("../assets/YogaKids.jpeg"),
                kids_cooking_school  : require("../assets/KidsCookingSchool.jpeg"),
                FamilyCookingSchool  : require("../assets/FamilyCookingSchool.jpeg"),
                Papamo               : require("../assets/sports_gym_class.jpeg"),
                Tennis1              : require("../assets/tennis1.jpg"),
                Rugby1               : require("../assets/rugby_1.jpg"),
            }
        }
    }
</script>

<style lang="scss" scoped>
    .section {
        margin: 0px 96px;
        @media screen and (max-width: 768px) {
            margin: 63px 0px 0px;
            padding: 24px;
        }
        @media screen and (min-width: 1024px) {
            max-width: 980px;
            margin: 0 auto;
        }
        .columns {
            margin: 64px 0;
        }
    }
</style>
