<template>
	<div>
		<h5>答题记录</h5>
		<SearchForm :items="items" :showMessage="true" :inline="true" labelWidth="100px" :model="search" ref="locationAddForm"></SearchForm>
		<DataTable :loading="loading" :columns="columns" :data="data"></DataTable>
	</div>

</template>

<script>
	import DataTable from '@components/data-table/index';
	import SearchForm from '@components/search-form/index';
	export default {
		data() {
			return {
				search: {
					currnet: 1,
					size: 10
				},
				items: [
                    {
                        prop: 'location',
                        type: 'select',
                        label: '年级',
//                      rules: [
//                          {required: true, message: '位置不能为空'}
//                      ],
                        options: [
                            {value: 1, text: 'aaa'},
                            
                        ]
                    },
                    {
                        prop: 'location',
                        type: 'select',
                        label: '班级',
                        options: [
                            {value: 1, text: '一年级'},
                            {value: 2, text: '二年级'},
                        ]
                    },
                    {
                        prop: 'location',
                        type: 'input',
                        label: '学生姓名',
                    },
                    {
                        prop: 'location',
                        type: 'input',
                        label: '书籍名称',
                    },
                    {
                        type: 'action',
                        actionList: [
                            {
                                text: '查询',
                                btnType: 'warning',
                                handleClick: (row) => {
                                    this.formValidate('locationAddForm', this.save);
                                }
                            },
                            
                        ]
                    }
                ],
				columns: [{
						label: '编号',
						prop: 'id'
					},
					{
						label: '菜单名',
						prop: 'name'
					},
					{
						label: '菜单类型',
						prop: 'type',
						formatter: (row => {
							if(row.type == 1) {
								return 'Folder';
							} else if(row.type == 2) {
								return 'Document';
							} else {
								return 'Function';
							}
						})
					},
					{
						label: 'URL',
						prop: 'url'
					},
					{
						type: 'action',
						width: '320',
						label: '操作',
						renderContent: (h, {
							row
						}) => {
							return [
								<el-button type='primary' size='mini' on-click={() => this.$routerGo({path:'nfc/edit/'+row.nfcno})}>添加子菜单</el-button>,
								<el-button type='primary' size='mini' on-click={() => this.deleteConfirm(this.deleteOne, row.nfcno)}>更新</el-button>,
								<el-button type='danger' size='mini' on-click={() => this.deleteConfirm(this.deleteOne, row.nfcno)}>删除</el-button>
							];
						}
					}
				],
				data: [],
				total: 0,
				loading: false
			}
		},
		methods: {
			getList() {
//              this.loading = true;
//              funcApi.list().then(res => {
//                  if(res.data.code === 0) {
//                      this.loading = false;
//                      this.data = res.data.data;
//                      this.total = this.data.length;
//                  }
//              })
            }
		},
		mounted() {
			this.getList()
		},
		components: {
			DataTable,
			SearchForm
		}
	}
</script>