<template>
	<div>
		<SearchForm :items="items" :showMessage="true" :inline="true" labelWidth="" :model="search" ref="locationAddForm"></SearchForm>
		
		
		<div class="button-box">
            <el-button @click='goAdd()' type='primary' icon="el-icon-plus" class='btn-add' style='margin-bottom: 15px;'>添加</el-button>
           
            <el-button @click="delectList()" type="danger" plain icon="el-icon-close" class="btn-delete" >批量删除</el-button>
        </div>
		
		<DataTable :loading="loading" :columns="columns" :data="data" :total="total" 
			:page-size="search.size" @page-change="pageChange" 
			@selection-change="selectionChange">
		</DataTable>
		
	</div>

</template>

<script>
	import DataTable from '@components/data-table/index';
	import SearchForm from '@components/search-form/index';
	import booksSet from '@src/network/books/booksSet.js';
	export default {
		data() {
			return {
				search: {				
					name:'',
					sid: this.global.session.get('user').sid,
					current: 1,
					size:6
				},
				selectBox:{
					name:'',
					sid: this.global.session.get('user').sid,
					current: 1,
					size:9999999
				},
				items: [
                    
                    {
                        prop: 'name',
                        type: 'select',
                        label: '阅读类型名称',
                        options: [  
                        ],
                        defaultProps: {
                        	id: 'name',
                        	label: 'name'
                        },
                        hasAll: true
                    },
   
                    {
                        type: 'action',
                        actionList: [
                            {
                                text: '查询',
                                btnType: 'warning',
                                handleClick: () => {
                                	this.search.current=1;
									this.tableList()
//                                  this.formValidate('locationAddForm', this.save);
                                }
                            },
                            
                        ]
                    }
                ],
				columns: [
					{
						//  全选模块
                        type: 'selection'
					},
					
					{
						label: '阅读类型ID',
						prop: 'id'
					},
					
					
					{
						label: '阅读类型名称',
						prop: 'name'
					},
					{
						label: '备注说明',
						prop: 'remark'
					},
				

					{
						label: '操作',
						type: 'action',
						width:'260px',
						renderContent: (h, { row }) => {
							return [
								<el-button type='primary' on-click={() => this.$router.push(`readType/see/${row.id}`)}  size='mini'>查看</el-button>,
								<el-button type='' on-click={() => this.$router.push(`readType/edit/${row.id}`)} style='border:1px solid #409EFF; color:#409EFF' size='mini' >更新</el-button>,
								<el-button type='danger' on-click={() => this.global.deleteConfirm.call(this, this.delect, row.id)} size='mini' >删除</el-button>,
							]
                        }
					},
				],
				data: [],
				deleteArr: [],
				total: 0,
				loading: true,
			}
		},
		methods: {
			selectionChange(data) {
				this.deleteArr=[];
				for (let item of data){
					this.deleteArr.push(item.id)
				}
			},
			delect(id){
           		booksSet.Delete(id).then(res => {
					if(res.data.code === 0) {
						this.$message.success('删除成功');
						this.tableList();
						this.typeList();
                    }
                    
                })
				
           },
			delectList() {
				let self=this;
		        if(this.deleteArr.length === 0) {
		          this.$message.error('请至少选择一项');
		          
		          return;
		        }else{
		        	if(this.data.length === 1 && this.search.current > 1) {
           				this.search.current--;
           			}
		        	let ids=this.deleteArr
		        	this.global.deleteConfirm.call(this,function(){
		        		booksSet.DeleteS(ids).then(res => {
					          if(res.data.code === 0) {
					            self.$message.success('删除成功');
					            self.tableList();
					            self.typeList();
					          }
					     })
		        	})	
		        	
		        }
		        
		   },
			pageChange(index) {
				this.search.current = index;
				this.tableList();
			},
			typeList(){
				booksSet.readSel(this.selectBox).then(res => {
					if(res.data.code === 0) {
						this.items[0].options=res.data.data.records;
                    }
                    
                })
			},
			tableList() {
				booksSet.table(this.search).then(res => {
//                  console.log('推荐管理表格',res)  //接受到的参数
					if(res.data.code === 0) {
						this.loading = false;
						this.data = res.data.data.records;
                        this.total =  res.data.data.total;
                    }
                    
                })
            },
           
			goAdd(){
				this.$router.push({
					name: 'readTypeAdd'
				})
			},
			
    
		},
		mounted() {
			this.typeList()
			this.tableList()
		
		},
		components: {
			DataTable,
			SearchForm
		}
	}
</script>
<style>
	
</style>

<style lang="less" scoped>
	.button-box{
    	.btn-add{
    		float: left;
    	}
    	.btn-delete{
    		float:right
    	}
    }
	
</style>

