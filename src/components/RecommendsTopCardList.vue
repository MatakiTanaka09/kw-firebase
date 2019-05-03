<template>
    <div class="columns is-multiline top__container">
        <recommends-top-card
            v-for="event in topEventDataKidsup" :key="event.eventId"
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
            v-for="event in topEventDataBallet" :key="event.eventId"
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
            :event-display-type="topEventDataScoa.eventDisplayTypeThird"
            :event-path-name="topEventDataScoa.eventPathName"
            :event-image-path="language_english1"
            :event-time="topEventDataScoa.eventTime"
            :event-category="topEventDataScoa.eventCategory"
            :event-title="topEventDataScoa.eventTitle"
            :event-date-time="topEventDataScoa.eventDateTime"
            :event-price="topEventDataScoa.eventPrice"
            :event-place="topEventDataScoa.eventPlace"
            :event-min-age="topEventDataScoa.eventMinAge"
        ></recommends-top-card>
        <!--<recommends-top-card-->
            <!--:event-display-type="topEventData[2].eventDisplayTypeThird"-->
            <!--:event-path-name="topEventData[2].eventPathName"-->
            <!--:event-image-path="kidsup"-->
            <!--:event-time="topEventData[2].eventTime"-->
            <!--:event-category="topEventData[2].eventCategory"-->
            <!--:event-title="topEventData[2].eventTitle"-->
            <!--:event-date-time="topEventData[2].eventDateTime"-->
            <!--:event-price="topEventData[2].eventPrice"-->
            <!--:event-place="topEventData[2].eventPlace"-->
            <!--:event-min-age="topEventData[2].eventMinAge"-->
        <!--&gt;</recommends-top-card>-->
        <!--<recommends-top-card-->
            <!--:event-display-type="topEventData[3].eventDisplayTypeThird"-->
            <!--:event-path-name="topEventData[3].eventPathName"-->
            <!--:event-image-path="kidsup"-->
            <!--:event-time="topEventData[3].eventTime"-->
            <!--:event-category="topEventData[3].eventCategory"-->
            <!--:event-title="topEventData[3].eventTitle"-->
            <!--:event-date-time="topEventData[3].eventDateTime"-->
            <!--:event-price="topEventData[3].eventPrice"-->
            <!--:event-place="topEventData[3].eventPlace"-->
            <!--:event-min-age="topEventData[3].eventMinAge"-->
        <!--&gt;</recommends-top-card>-->
        <!--<recommends-top-card-->
            <!--:event-display-type="topEventData[4].eventDisplayTypeThird"-->
            <!--:event-path-name="topEventData[4].eventPathName"-->
            <!--:event-image-path="kidsup"-->
            <!--:event-time="topEventData[4].eventTime"-->
            <!--:event-category="topEventData[4].eventCategory"-->
            <!--:event-title="topEventData[4].eventTitle"-->
            <!--:event-date-time="topEventData[4].eventDateTime"-->
            <!--:event-price="topEventData[4].eventPrice"-->
            <!--:event-place="topEventData[4].eventPlace"-->
            <!--:event-min-age="topEventData[4].eventMinAge"-->
        <!--&gt;</recommends-top-card>-->
        <!--<recommends-top-card-->
            <!--:event-display-type="eventDisplayTypeThird"-->
            <!--:event-path-name="programming1.eventPathName"-->
            <!--:event-image-path="programming_engineer"-->
            <!--:event-time="programming1.summary.eventTime"-->
            <!--:event-category="programming1.summary.eventCategory"-->
            <!--:event-title="programming1.summary.eventTitle"-->
            <!--:event-date-time="programming1.summary.eventDateTime"-->
            <!--:event-price="programming1.summary.eventPrice"-->
            <!--:event-place="programming1.summary.eventPlace"-->
            <!--:event-min-age="programming1.summary.eventMinAge"-->
        <!--&gt;</recommends-top-card>-->
        <!--<recommends-top-card-->
            <!--:event-display-type="eventDisplayTypeThird"-->
            <!--:event-path-name="programming2.eventPathName"-->
            <!--:event-image-path="programming_engineer"-->
            <!--:event-time="programming2.eventTime"-->
            <!--:event-category="programming2.eventCategory"-->
            <!--:event-title="programming2.eventTitle"-->
            <!--:event-date-time="programming2.eventDateTime"-->
            <!--:event-price="programming2.eventPrice"-->
            <!--:event-place="programming2.eventPlace"-->
            <!--:event-min-age="programming2.eventMinAge"-->
        <!--&gt;</recommends-top-card>-->
        <!--<recommends-top-card-->
            <!--:event-image-path="recommend_top_image_3"-->
            <!--:event-path-name="cube.eventPathName"-->
            <!--:event-display-type="eventDisplayTypeThird"-->
            <!--:event-time="cube.eventTime"-->
            <!--:event-category="cube.eventCategory"-->
            <!--:event-title="cube.eventTitle"-->
            <!--:event-date-time="cube.eventDateTime"-->
            <!--:event-price="cube.eventPrice"-->
            <!--:event-place="cube.eventPlace"-->
            <!--:event-min-age="cube.eventMinAge"-->
        <!--&gt;</recommends-top-card>-->
        <!--<recommends-top-card-->
            <!--:event-image-path="language_english1"-->
            <!--:event-path-name="english.eventPathName"-->
            <!--:event-display-type="eventDisplayTypeThird"-->
            <!--:event-time="english.eventTime"-->
            <!--:event-category="english.eventCategory"-->
            <!--:event-title="english.eventTitle"-->
            <!--:event-date-time="english.eventDateTime"-->
            <!--:event-price="english.eventPrice"-->
            <!--:event-place="english.eventPlace"-->
            <!--:event-min-age="english.eventMinAge"-->
        <!--&gt;</recommends-top-card>-->
        <!--<recommends-top-card-->
            <!--:event-image-path="programming_engineer"-->
            <!--:event-display-type="eventDisplayTypeThird"-->
            <!--:event-time="noPlan[0].eventTime"-->
            <!--:event-category="noPlan[0].eventCategory"-->
            <!--:event-title="noPlan[0].eventTitle"-->
            <!--:event-date-time="noPlan[0].eventDateTime"-->
            <!--:event-price="noPlan[0].eventPrice"-->
            <!--:event-place="noPlan[0].eventPlace"-->
            <!--:event-min-age="noPlan[0].eventMinAge"-->
        <!--&gt;</recommends-top-card>-->
        <!--<recommends-top-card-->
            <!--:event-image-path="sports_ballet_class1"-->
            <!--:event-display-type="eventDisplayTypeThird"-->
            <!--:event-time="noPlan[1].eventTime"-->
            <!--:event-category="noPlan[1].eventCategory"-->
            <!--:event-title="noPlan[1].eventTitle"-->
            <!--:event-date-time="noPlan[1].eventDateTime"-->
            <!--:event-price="noPlan[1].eventPrice"-->
            <!--:event-place="noPlan[1].eventPlace"-->
            <!--:event-min-age="noPlan[1].eventMinAge"-->
        <!--&gt;</recommends-top-card>-->
        <!--<recommends-top-card-->
            <!--:event-image-path="language_english1"-->
            <!--:event-display-type="eventDisplayTypeThird"-->
            <!--:event-time="noPlan[2].eventTime"-->
            <!--:event-category="noPlan[2].eventCategory"-->
            <!--:event-title="noPlan[2].eventTitle"-->
            <!--:event-date-time="noPlan[2].eventDateTime"-->
            <!--:event-price="noPlan[2].eventPrice"-->
            <!--:event-place="noPlan[2].eventPlace"-->
            <!--:event-min-age="noPlan[2].eventMinAge"-->
        <!--&gt;</recommends-top-card>-->
        <!--<recommends-top-card-->
            <!--:event-image-path="language_english1"-->
            <!--:event-display-type="eventDisplayTypeThird"-->
            <!--:event-time="noPlan[3].eventTime"-->
            <!--:event-category="noPlan[3].eventCategory"-->
            <!--:event-title="noPlan[3].eventTitle"-->
            <!--:event-date-time="noPlan[3].eventDateTime"-->
            <!--:event-price="noPlan[3].eventPrice"-->
            <!--:event-place="noPlan[3].eventPlace"-->
            <!--:event-min-age="noPlan[3].eventMinAge"-->
        <!--&gt;</recommends-top-card>-->
        <!--<recommends-top-card-->
            <!--:event-image-path="FamilyCookingSchool"-->
            <!--:event-display-type="eventDisplayTypeThird"-->
            <!--:event-time="noPlan[4].eventTime"-->
            <!--:event-category="noPlan[4].eventCategory"-->
            <!--:event-title="noPlan[4].eventTitle"-->
            <!--:event-date-time="noPlan[4].eventDateTime"-->
            <!--:event-price="noPlan[4].eventPrice"-->
            <!--:event-place="noPlan[4].eventPlace"-->
            <!--:event-min-age="noPlan[4].eventMinAge"-->
        <!--&gt;</recommends-top-card>-->
        <!--<recommends-top-card-->
            <!--:event-image-path="yoga_family"-->
            <!--:event-display-type="eventDisplayTypeThird"-->
            <!--:event-time="noPlan[5].eventTime"-->
            <!--:event-category="noPlan[5].eventCategory"-->
            <!--:event-title="noPlan[5].eventTitle"-->
            <!--:event-date-time="noPlan[5].eventDateTime"-->
            <!--:event-price="noPlan[5].eventPrice"-->
            <!--:event-place="noPlan[5].eventPlace"-->
            <!--:event-min-age="noPlan[5].eventMinAge"-->
        <!--&gt;</recommends-top-card>-->
        <!--<recommends-top-card-->
            <!--:event-image-path="sweets_school"-->
            <!--:event-display-type="eventDisplayTypeThird"-->
            <!--:event-time="noPlan[6].eventTime"-->
            <!--:event-category="noPlan[6].eventCategory"-->
            <!--:event-title="noPlan[6].eventTitle"-->
            <!--:event-date-time="noPlan[6].eventDateTime"-->
            <!--:event-price="noPlan[6].eventPrice"-->
            <!--:event-place="noPlan[6].eventPlace"-->
            <!--:event-min-age="noPlan[6].eventMinAge"-->
        <!--&gt;</recommends-top-card>-->
        <!--<recommends-top-card-->
            <!--:event-image-path="kids_cooking_school"-->
            <!--:event-display-type="eventDisplayTypeThird"-->
            <!--:event-time="noPlan[7].eventTime"-->
            <!--:event-category="noPlan[7].eventCategory"-->
            <!--:event-title="noPlan[7].eventTitle"-->
            <!--:event-date-time="noPlan[7].eventDateTime"-->
            <!--:event-price="noPlan[7].eventPrice"-->
            <!--:event-place="noPlan[7].eventPlace"-->
            <!--:event-min-age="noPlan[7].eventMinAge"-->
        <!--&gt;</recommends-top-card>-->
        <!--<recommends-top-card-->
            <!--:event-image-path="yoga_kids"-->
            <!--:event-display-type="eventDisplayTypeThird"-->
            <!--:event-time="noPlan[8].eventTime"-->
            <!--:event-category="noPlan[8].eventCategory"-->
            <!--:event-title="noPlan[8].eventTitle"-->
            <!--:event-date-time="noPlan[8].eventDateTime"-->
            <!--:event-price="noPlan[8].eventPrice"-->
            <!--:event-place="noPlan[8].eventPlace"-->
            <!--:event-min-age="noPlan[8].eventMinAge"-->
        <!--&gt;</recommends-top-card>-->
    </div>
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
                recommend_top_image_1: require("../assets/recommend_top_image_1.jpg"),
                recommend_top_image_2: require("../assets/ArtEngineeringKids.jpeg"),
                recommend_top_image_3: require("../assets/cubemam.jpg"),
                programming_engineer : require("../assets/ProgramingEngineering.jpeg"),
                yoga_kids            : require("../assets/YogaKids.jpeg"),
                language_english1    : require("../assets/language_english1.jpeg"),
                FamilyCookingSchool  : require("../assets/FamilyCookingSchool.jpeg"),
                yoga_family          : require("../assets/YogaFamily.jpeg"),
                sweets_school        : require("../assets/SweetsSchool.jpeg"),
                kids_cooking_school  : require("../assets/KidsCookingSchool.jpeg"),
                sports_ballet_class1 : require("../assets/sports_ballet_class1.jpeg"),
                kidsup               : require("../assets/kidsup_top_image.jpg"),
                eventDisplayTypeThird: 'is-one-third',
                topEventDataKidsup: db["db"]["top"]["kidsup"],
                topEventDataBallet: db["db"]["top"]["ballet"],
                topEventDataScoa: db["db"]["top"]["scoa"],
                // programming1: {
                //     summary: {
                //         eventTime: '14:30',
                //         eventCategory: 'プログラミング',
                //         eventTitle: '【終了】はじめてのプログラミング',
                //         eventDateTime: '04/06',
                //         eventPrice: '1,000円',
                //         eventPlace: '新富町',
                //         eventMinAge: '5'
                //     },
                //     eventPathName: "EventCardDetailProgramming1"
                // },
                // programming2: {
                //     eventTime: '10:00',
                //     eventCategory: 'プログラミング',
                //     eventTitle: '【終了】はじめてのプログラミング',
                //     eventDateTime: '04/07',
                //     eventPrice: '無料',
                //     eventPlace: '新富町',
                //     eventMinAge: '5',
                //     eventPathName: "EventCardDetailProgramming2"
                // },
                // english: {
                //     eventTime: '14:00',
                //     eventCategory: '語学',
                //     eventTitle: '【終了】Let\'s English & Dance!',
                //     eventDateTime: '04/14',
                //     eventPrice: '無料',
                //     eventPlace: '月島',
                //     eventMinAge: '4',
                //     eventPathName: "EventCardDetailEnglish"
                // },
                // cube: {
                //     eventTime: '14:30',
                //     eventCategory: '知育',
                //     eventTitle: '【終了】子育てが楽しくできるようになる「キュービック・マム」',
                //     eventDateTime: '04/13',
                //     eventPrice: '無料',
                //     eventPlace: '月島',
                //     eventMinAge: '3',
                //     eventPathName: "EventCardDetailColorCube"
                // },
                // noPlan: [
                //     {
                //         eventTime: 'Coming Soon!!',
                //         image: this.programming_engineer,
                //         eventCategory: 'プログラミング',
                //         eventTitle: 'こどもアートｘエンジニアリング体験',
                //         eventDateTime: '準備中...',
                //         eventPrice: '準備中...',
                //         eventPlace: '表参道',
                //         eventMinAge: '4'
                //     },
                //     {
                //         eventTime: 'Coming Soon!!',
                //         eventCategory: 'スポーツ',
                //         eventTitle: 'バレエ教室（ワガノアメソッド）',
                //         eventDateTime: '準備中...',
                //         eventPrice: '準備中...',
                //         eventPlace: '豊洲',
                //         eventMinAge: '6'
                //     },
                //     {
                //         eventTime: 'Coming Soon!!',
                //         eventCategory: '語学',
                //         eventTitle: 'kids English Camp（幼児）',
                //         eventDateTime: '準備中...',
                //         eventPrice: '準備中...',
                //         eventPlace: '豊洲',
                //         eventMinAge: '4'
                //     },
                //     {
                //         eventTime: 'Coming Soon!!',
                //         eventCategory: '語学',
                //         eventTitle: 'kids English Camp（小学生）',
                //         eventDateTime: '準備中...',
                //         eventPrice: '準備中...',
                //         eventPlace: '豊洲',
                //         eventMinAge: '6'
                //     },
                //     {
                //         eventTime: 'Coming Soon!!',
                //         eventCategory: 'その他',
                //         eventTitle: '親子お料理教室',
                //         eventDateTime: '準備中...',
                //         eventPrice: '準備中...',
                //         eventPlace: '豊洲',
                //         eventMinAge: '6'
                //     },
                //     {
                //         eventTime: 'Coming Soon!!',
                //         eventCategory: 'スポーツ',
                //         eventTitle: '親子でヨガ教室',
                //         eventDateTime: '準備中...',
                //         eventPrice: '準備中...',
                //         eventPlace: '豊洲',
                //         eventMinAge: '4'
                //     },
                //     {
                //         eventTime: 'Coming Soon!!',
                //         eventCategory: 'その他',
                //         eventTitle: 'こども料理教室',
                //         eventDateTime: '準備中...',
                //         eventPrice: '準備中...',
                //         eventPlace: '豊洲',
                //         eventMinAge: '5'
                //     },
                //     {
                //         eventTime: 'Coming Soon!!',
                //         eventCategory: 'その他',
                //         eventTitle: 'こどもお菓子教室',
                //         eventDateTime: '準備中...',
                //         eventPrice: '準備中...',
                //         eventPlace: '豊洲',
                //         eventMinAge: '5'
                //     },
                //     {
                //         eventTime: 'Coming Soon!!',
                //         eventCategory: 'その他',
                //         eventTitle: 'こどもヨガ教室',
                //         eventDateTime: '準備中...',
                //         eventPrice: '準備中...',
                //         eventPlace: '豊洲',
                //         eventMinAge: '4'
                //     },
                // ]
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
