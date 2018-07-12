import network from '../index';
//推荐管理  表格
export default {
    async table (params) {
        const res = await network.post({
            url: 'recommendBook/list/page',
            data: params
        });
        return res;
    },
//书籍类别   下拉菜单
    async booksTyesList (params) {
        const res = await network.post({
            url: 'recommendType/list/page',
            data: params
        });
        return res;
    },    
//推荐书籍   添加
    async Add (params) {
        const res = await network.post({
            url: 'recommendBook/add',
            data: params
        });
        return res;
    },

//推荐书籍   删除
    async Delete (params) {
        const res = await network.delete({
            url: 'recommendBook/delete/'+params,
//          data: params
        });
        return res;
    },   
//推荐书籍   删除  批量
    async DeleteS (params) {
        const res = await network.delete({
            url: 'recommendBook/delete/ids',
            data: params
        });
        return res;
    },

//推荐书籍   编辑
    async Edit (params) {
        const res = await network.put({
            url: 'recommendBook/edit',
            data: params
        });
        return res;
    },


}

