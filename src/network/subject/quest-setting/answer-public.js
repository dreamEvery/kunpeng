import network from '@src/network/index';

export default {
    // 答题类型
    async answerType () {
        const res = await network.get({
            url: '/answerType/options'
        });
        return res;
    },
    // 阅读类型
    async readingType (params) {
        const res = await network.post({
            url: '/readType/list/page',
            data: params
        });
        return res;
    },
    // 阅读书籍管理
    async readingBooks (params) {
        const res = await network.post({
            url: '/readBook/option',
            data: params
        });
        return res;
    }
}