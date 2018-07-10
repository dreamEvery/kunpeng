const Right = () => import(/* webpackChunkName: "setting" */ '@src/general/app/setting/right');
import right from './right';
export default [
    {
        path: 'right',
        name: 'right',
        meta: {name: '权限管理'},
        component: Right,
        children: right
    }
]