const Automatic = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/problemSet/automatic.vue');
const Dynamic  = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/problemSet/dynamic/dynamic.vue');

const Paper = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/problemSet/paper/paper.vue');
const PaperSee = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/problemSet/paper/See.vue');
const PaperAdd = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/problemSet/paper/Add.vue');
const PaperEdit = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/problemSet/paper/Edit.vue');
export default [
    {
        name: 'automatic',
        meta: {name: '自动组题'},
        path: 'automatic',
        component: Automatic
    },

    
    {
        name: 'paper',
        meta: {name: '试卷管理'},
        path: 'paper',
        component: Paper
    },
    {
        name: 'paperSee',
        meta: {name: '查看试卷'},
        path: 'paper/see',
        component: PaperSee
    },
    {
        name: 'paperAdd',
        meta: {name: '添加试卷'},
        path: 'paper/add',
        component: PaperAdd
    },
    {
        name: 'paperEdit',
        meta: {name: '更新试卷'},
        path: 'paper/edit',
        component: PaperEdit
    },

    {
        name: 'dynamic',
        meta: {name: '动态组题'},
        path: 'dynamic',
        component: Dynamic
    },

]
