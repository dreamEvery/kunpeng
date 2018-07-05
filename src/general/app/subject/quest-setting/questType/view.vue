<template>
    <div class="view">
        <SearchForm :items="items"  :inline="false" :model="search" ref="onSubmit"></SearchForm>
    </div>
</template>
<script>

    import SearchForm from '@components/search-form/index';

    export default{
        data () {
            return{
                search: {},
                items:[
                    {
                        prop: 'name',
                        type: 'text',
                        label: '题型分类：'
                    },
                    {
                        prop: 'remark',
                        type: 'text',
                        label: '说明'
                    },
                    {
                        type: 'action',
                        actionList: [
                            {
                                text: '返回',
                                btnType: 'primary',
                                handleClick: (row) => {
                                    this.$router.go(-1);
                                }
                            }
                        ]
                    }
                ],
                search: {
                }
            }
        },
        methods: {
            getDetail() {
                let obj = this.$route.params.obj;
                this.search = obj;
            }

        },
        components: {
            SearchForm
        },
        mounted(){
            this.getDetail();
        }
    }
</script>
<style lang="less">
    .view{
    }

</style>
