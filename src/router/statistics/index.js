const Adminstor = () => import(/* webpackChunkName: "statistics" */ '@src/general/app/statistics/adminstor');
const Analysis = () => import(/* webpackChunkName: "statistics" */ '@src/general/app/statistics/analysis');
import adminstor from './adminstor';
import analysis from './analysis';
export default [
    {
        path: 'adminstor',
        name: 'adminstor',
        meta:{name: '档案管理'},
        component: Adminstor,
        children: adminstor
    },
    {
        path: 'statistics',
        name: 'statistics',
        meta:{name: '统计分析'},
        component: Analysis,
        children: analysis
    }
]