
const RightFunction = () => import(/* webpackChunkName: "setting" */ '@src/general/app/setting/right/function/index.vue');
const RightFunctionAdd = () => import(/* webpackChunkName: "setting" */ '@src/general/app/setting/right/function/add.vue');
const Student = () => import(/* webpackChunkName: "setting" */ '@src/general/app/setting/right/student/index.vue');
export default [
    {
        path: 'function',
        name: '功能模块管理',
        component: RightFunction
    },
    {
        name: '添加子菜单',
        path: 'function/add/:id',
        component: RightFunctionAdd
    },
    {
        name: '添加功能模块',
        path: 'function/add',
        component: RightFunctionAdd
    },
    {
        name: '更新功能模块',
        path: 'function/edit',
        component: RightFunctionAdd
    },
    {
        path: 'student',
        component: Student
    }
]