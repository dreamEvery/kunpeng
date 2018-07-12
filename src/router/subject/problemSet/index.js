const Automatic = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/problemSet/automatic.vue');
const Dynamic  = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/problemSet/dynamic/dynamic.vue');

export default [
    {
        name: 'automatic',
        meta: {name: '自动组题'},
        path: 'automatic',
        component: Automatic
    },
    {
        name: 'dynamic',
        meta: {name: '动态组题'},
        path: 'dynamic',
        component: Dynamic
    },
]
