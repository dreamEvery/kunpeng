<template>
    <div class="questType">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="bread-title">
            <el-breadcrumb-item>组题管理</el-breadcrumb-item>
            <el-breadcrumb-item>题库设定</el-breadcrumb-item>
            <el-breadcrumb-item class="last">题目分类管理</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="content">
            <SearchForm :items="items" :showMessage="true" :inline="true" :model="search" ref="onSubmit"></SearchForm>
            <div class="button-box">
                <el-button v-has="10010301" type="primary" icon="el-icon-plus" @click="$router.push('function/add')">添加</el-button>
                <el-button type="danger" plain icon="el-icon-close" class="delectBatch">批量删除</el-button>
            </div>
            <DataTable :loading="loading" :columns="columns" :data="data"></DataTable>
        </div>
    </div>
</template>
<script>

    // 模块的引用
    import SearchForm from '@components/search-form/index';
    import DataTable from '@components/data-table/index'

    //  接口
    import questApi from '@src/network/subject/quest-setting/quest-type';

    export default {
        name: 'questType',
        data: function () {
            return {
                search: {
                    location: ''
                },
                items: [
                    {
                        prop: 'location',
                        type: 'input',
                        label: '题目类型名称',
                        rules: [
                            {required: true, message: '位置不能为空'}
                        ]
                    },
                    {
                        type: 'action',
                        actionList: [
                            {
                                text: '查询',
                                btnType: 'primary',
                                handleClick: (row) => {
                                    this.formValidate('onSubmit', this.save);
                                }
                            }
                        ]
                    }
                ],
                // table的属性设置
                columns: [
                    {
                        //  全选模块
                        type: 'selection'
                    },
                    {
                        label: '题目类型ID',
                        prop: 'id'
                    },
                    {
                        label: '题目类型名称',
                        prop: 'name'
                    },
                    {
                        label: '备注说明',
                        prop: 'note',
                    },
                    {
                        type: 'action',
                        width: '250',
                        label: '操作',
                        renderContent: (h, { row }) => {
                            return [
                                <el-button type='primary' size='mini' on-click={() => this.$router.push('quest-setting/add/' + row.id)}>查看</el-button>,
                            <el-button type='primary' size='mini' on-click={() => this.$router.push({ name: 'quset-edit', params: { obj: row }})}>更新</el-button>,
                            <el-button type='danger' size='mini' on-click={() => this.deleteConfirm(this.deleteOne, row.nfcno)}>删除</el-button>
                            ];
                        }
                    }
                ],
                data: [],
                loading: true,
                total: 0


            }
        },
        components: {
            SearchForm,
            DataTable
        },
        methods: {
            questList() {
                this.loading = true;
                questApi.list().then(res => {
                    if(res.data.code === 0) {
                        this.loading = false;
                        this.data = res.data.data;
                        this.total = this.data.length;
                    }
                })
            }
        },
        mounted() {
            this.questList();
        },
    }
</script>
<style lang="less">
    .questType{
    .bread-title{
        padding: 10px 0 10px 20px;
    .last >span{color: #474e5d;}
    }
    .content{
        background-color: #ffffff;padding: 20px 18px;
    .button-box{
    .delectBatch{float: right}
    }
    }
    }
</style>

