const App = () => import(/* webpackChunkName: "main" */ '../general/app/index');
const Login = () => import(/* webpackChunkName: "login" */ '../general/login');
const Forget = () => import(/* webpackChunkName: "login" */ '../general/forget');
const Home = () => import(/* webpackChunkName: "login" */ '../general/app/home/index');
const Setting = () => import(/* webpackChunkName: "setting" */ '../general/app/setting/index');
const Subject = () => import(/* webpackChunkName: "setting" */ '../general/app/subject/index');
const Statistics = () => import(/* webpackChunkName: "statistics" */ '../general/app/statistics/index');
const Books = () => import(/* webpackChunkName: "books" */ '../general/app/books/index');
import setting_children from './setting/index.js';
import subject_children from './subject/index.js';
import statistics_children from './statistics/index.js';
import books_children from './books/index.js';
const routes = [
    {
        path: '/',
        component: App,
        redirect: 'index',
        children: [
            { path: 'index',  name: 'home', meta: {name:'首页'}, component: Home },
            { path: 'setting', name: 'setting', meta: {name:'设置'}, component: Setting, children: setting_children },
            { path: 'books', name: 'books', meta: {name:'好书管理'}, component: Books, children: books_children },
            { path: 'subject', name: 'subject', component: Subject, meta: {name:'组题管理'},children: subject_children },
            { path: 'statistics',name:'statistics', meta: {name:'统计分析'}, component: Statistics, children: statistics_children }
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/forget',
        component: Forget
    }
]

export default routes;
