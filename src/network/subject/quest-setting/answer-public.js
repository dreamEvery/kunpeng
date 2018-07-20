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
    },
    // 问题类型管理
    async questType () {
        const res = await network.get({
            url: 'questionsType/options',
        });
        return res;
    },
    async questAll (params) {
        const res = await network.post({
            url: 'questions/getTestQuestions',
            data: params
        });
        return res;
    },
    // 答题方式
    async answerList () {
        const res = await network.get({
            url: 'answerMethod/getGqTypeOptions'
        });
        return res;
    },
    async add () {
        const res = await network.post({
            url: 'testPaper/add'
        });
        return res;
    }
}
