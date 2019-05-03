import Vue from 'vue'
import VueRouter from 'vue-router'
import TheTop from '@/components/TheTop';
import Events from '@/components/Events';
import EventCardDetail from "@/components/EventCardDetail";

import EventCardDetailProgramming1 from "@/components/EventCardDetailProgramming1";
import EventCardDetailProgramming2 from "@/components/EventCardDetailProgramming2";
import EventCardDetailEnglish from "@/components/EventCardDetailEnglish";
import EventCardDetailColorCube from "@/components/EventCardDetailColorCube";

import KidsUP0930 from "@/components/KidsUp0930";
import KidsUP1100 from "@/components/KidsUp1100";
import KidsUP1400 from "@/components/KidsUp1400";
import KidsUP1600 from "@/components/KidsUp1600";

import ballet0001 from "@/components/ballet0001";
import ballet0002 from "@/components/ballet0002";
import ballet0003 from "@/components/ballet0003";
import ballet0004 from "@/components/ballet0004";

import SCOA0001 from "@/components/SCOA0001";

import KidsYoga0001 from "@/components/KidsYoga0001";
import KidsYoga0002 from "@/components/KidsYoga0002";
import KidsYoga0003 from "@/components/KidsYoga0003";

import KidsAirYoga0001 from "@/components/KidsAirYoga0001";
import KidsAirYoga0002 from "@/components/KidsAirYoga0002";
import KidsAirYoga0003 from "@/components/KidsAirYoga0003";

import InstyleKidsCooking0001 from "@/components/InstyleKidsCooking0001";
import InstyleKidsCooking0002 from "@/components/InstyleKidsCooking0002";

import InstyleKidsSnackCooking0001 from "@/components/InstyleKidsSnackCooking0001";
import InstyleKidsSnackCooking0002 from "@/components/InstyleKidsSnackCooking0002";

import papamo0001 from "@/components/papamo0001";
import papamo0002 from "@/components/papamo0002";
import papamo0003 from "@/components/papamo0003";
import papamo0004 from "@/components/papamo0004";
import papamo0005 from "@/components/papamo0005";
import papamo0006 from "@/components/papamo0006";
import papamo0007 from "@/components/papamo0007";
import papamo0008 from "@/components/papamo0008";
import papamo0009 from "@/components/papamo0009";
import papamo0010 from "@/components/papamo0010";
import papamo0011 from "@/components/papamo0011";
import papamo0012 from "@/components/papamo0012";
//
// import rugby0001 from "@/components/rugby0001";
// import rugby0002 from "@/components/rugby0002";
// import rugby0003 from "@/components/rugby0003";
//
// import tennis0001 from "@/components/tennis0001";
// import tennis0002 from "@/components/tennis0002";
// import tennis0003 from "@/components/tennis0003";
// import tennis0004 from "@/components/tennis0004";
// import tennis0005 from "@/components/tennis0005";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Top',
        component: TheTop
    },
    {
        path: '/events',
        name: 'Events',
        component: Events
    },
    {
        path: '/event',
        name: 'Event',
        component: EventCardDetail
    },
    {
        path: '/event/programming_1',
        name: 'EventCardDetailProgramming1',
        component: EventCardDetailProgramming1
    },
    {
        path: '/event/programming_2',
        name: 'EventCardDetailProgramming2',
        component: EventCardDetailProgramming2
    },
    {
        path: '/event/english',
        name: 'EventCardDetailEnglish',
        component: EventCardDetailEnglish
    },
    {
        path: '/event/color_cube',
        name: 'EventCardDetailColorCube',
        component: EventCardDetailColorCube
    },
    {
        path: '/event/kidsup_0930',
        name: 'KidsUP0930',
        component: KidsUP0930
    },
    {
        path: '/event/kidsup_1100',
        name: 'KidsUP1100',
        component: KidsUP1100
    },
    {
        path: '/event/kidsup_1400',
        name: 'KidsUP1400',
        component: KidsUP1400
    },
    {
        path: '/event/kidsup_1600',
        name: 'KidsUP1600',
        component: KidsUP1600
    },
    {
        path: '/event/ballet0001',
        name: 'ballet0001',
        component: ballet0001
    },
    {
        path: '/event/ballet0002',
        name: 'ballet0002',
        component: ballet0002
    },
    {
        path: '/event/ballet0003',
        name: 'ballet0003',
        component: ballet0003
    },
    {
        path: '/event/ballet0004',
        name: 'ballet0004',
        component: ballet0004
    },
    {
        path: '/event/scoa0001',
        name: 'SCOA0001',
        component: SCOA0001
    },
    {
        path: '/event/kidsyoga0001',
        name: 'KidsYoga0001',
        component: KidsYoga0001
    },
    {
        path: '/event/kidsyoga0002',
        name: 'KidsYoga0002',
        component: KidsYoga0002
    },
    {
        path: '/event/kidsyoga0003',
        name: 'KidsYoga0003',
        component: KidsYoga0003
    },
    {
        path: '/event/kidsairyoga0001',
        name: 'KidsAirYoga0001',
        component: KidsAirYoga0001
    },
    {
        path: '/event/kidsairyoga0002',
        name: 'KidsAirYoga0002',
        component: KidsAirYoga0002
    },
    {
        path: '/event/kidsairyoga0003',
        name: 'KidsAirYoga0003',
        component: KidsAirYoga0003
    },
    {
        path: '/event/instyleKidsCooking0001',
        name: 'InstyleKidsCooking0001',
        component: InstyleKidsCooking0001
    },
    {
        path: '/event/instyleKidsCooking0002',
        name: 'InstyleKidsCooking0002',
        component: InstyleKidsCooking0002
    },
    {
        path: '/event/instyleKidsSnackCooking0001',
        name: 'InstyleKidsSnackCooking0001',
        component: InstyleKidsSnackCooking0001
    },
    {
        path: '/event/InstyleKidsSnackCooking0002',
        name: 'InstyleKidsSnackCooking0002',
        component: InstyleKidsSnackCooking0002
    },
    {
        path: '/event/papamo0001',
        name: 'papamo0001',
        component: papamo0001
    },
    {
        path: '/event/papamo0002',
        name: 'papamo0002',
        component: papamo0002
    },
    {
        path: '/event/papamo0003',
        name: 'papamo0003',
        component: papamo0003
    },
    {
        path: '/event/papamo0004',
        name: 'papamo0004',
        component: papamo0004
    },
    {
        path: '/event/papamo0005',
        name: 'papamo0005',
        component: papamo0005
    },
    {
        path: '/event/papamo0006',
        name: 'papamo0006',
        component: papamo0006
    },
    {
        path: '/event/papamo0007',
        name: 'papamo0007',
        component: papamo0007
    },
    {
        path: '/event/papamo0008',
        name: 'papamo0008',
        component: papamo0008
    },
    {
        path: '/event/papamo0009',
        name: 'papamo0009',
        component: papamo0009
    },
    {
        path: '/event/papamo0010',
        name: 'papamo0010',
        component: papamo0010
    },
    {
        path: '/event/papamo0011',
        name: 'papamo0011',
        component: papamo0011
    },
    {
        path: '/event/papamo0012',
        name: 'papamo00012',
        component: papamo0012
    }
]

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes,
    scrollBehavior (to, from, savedPosition) {
        if(savedPosition) {
            return savedPosition
        }
        else {
            return { x: 0, y: 0 }
        }
    }
});

export default router;
