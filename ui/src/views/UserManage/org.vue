<template>
    <div class="app-container">
        <el-main>
            <div class="search-box">

                <div class="search-options">
                    <el-button color="#ff711e" icon="Plus" @click="openView(null,1)">新增</el-button>
                </div>
            </div>
            <div>
                <el-table 
                :data="tableData"
                 empty-text="未查询到活动内容"
                 :header-cell-style="{ backgroundColor: '#E8FAF6' }"
                >
                    <el-table-column label="机构代码" prop="orgCode" align="center" />
                    <el-table-column label="机构名称" prop="orgName" align="center" />
                    <el-table-column label="简称" prop="abbreviation" align="center" />
                    <el-table-column label="机构地址" prop="address" align="center" />
                    <el-table-column label="机构类别" prop="orgCategoryName" align="center" />
                    <el-table-column fixed="right" label="操作" align="center" width="200">
                        <template #default="scope" >
                            <el-button type="text" size="small" @click="openView(scope.row, 2)" >编辑</el-button>
                            <el-button type="text" size="small" v-if="scope.row.orgCategoryCode !=2" :style="{color: scope.row.closeStatus=='0'?'red':'#347CEF'}"

                                @click="openView(scope.row, 3)">{{scope.row.closeStatus=='0'?'停用':'启用'}}</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="pagination">
                <el-pagination v-model:current-page="PageNumber.current" v-model:page-size="PageNumber.size"
                    :page-sizes="[10, 20, 30, 40]" background layout="total, sizes, prev, pager, next, jumper"
                    :total=total @size-change="handleSizeChange" @current-change="handleCurrentChange" />
            </div>
        </el-main>
        <el-dialog
                v-model="centerDialogVisible"
                :title="title"
                width="35%"
                center
                :before-close="cancelBtn"
            >
                <el-form
                    ref="ruleFormRef"
                    :model="formData"
                    :rules="rules"
                    label-width="120px"
                    class="demo-ruleForm"
                >
                <el-form-item label="机构类别" prop="orgCategoryCode">
                    <el-select
                        v-model="formData.orgCategoryCode"
                        filterable
                        clearable 
                        placeholder=" "
                        >
                            <el-option
                                v-for="item in options"
                                @click="choseOption(item.value,'机构类别')"
                                :key="item.id"
                                :label="item.value"
                                :value="item.code"
                                :disabled="!item.orgCategoryIdentfy"
                            />
                      </el-select>
                 </el-form-item>

                    <el-form-item label="机构名称" prop="orgName"  >
                        <el-input v-model="formData.orgName" class="minInput" clearable maxlength="20"   placeholder="请输入机构名称"/>
                    </el-form-item>

                    <el-form-item label="代码" prop="orgCode">
                        <el-input v-model="formData.orgCode" class="minInput" clearable maxlength="20"  placeholder="请输入机构代码"/>
                    </el-form-item>   
                    <el-form-item label="登记号" prop="registerNum" v-if="formData.orgCategoryCode!='2'">
                        <el-input v-model="formData.registerNum" onkeyup="this.value=this.value.replace(/[\u4E00-\u9FA5]/g,'');"  class="minInput" clearable maxlength="30" placeholder="请输入机构登记号"/>
                    </el-form-item>

                    <el-form-item label="级别" prop="levelCode" v-if="formData.orgCategoryCode!='2'">
                        <el-select
                            v-model="formData.levelCode"
                            filterable
                            placeholder=" "
                            clearable 
                            >
                                <el-option
                                    v-for="item in org_level"
                                    @click="choseOption(item.label,'级别')"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                />
                        </el-select>
                     </el-form-item>

                     <el-form-item label="简称" prop="abbreviation" clearable  v-if="formData.orgCategoryCode!='2'">
                        <el-input v-model="formData.abbreviation" class="minInput" placeholder="请输入简称" maxlength="5"/>
                    </el-form-item>

                    <el-form-item label="负责人">
                        <el-input v-model="formData.principal" class="minInput" clearable maxlength="25"  placeholder="请输入负责人姓名"/>
                    </el-form-item>

                    <el-form-item label="联系电话">
                        <el-input v-model="formData.phone" class="minInput" clearable maxlength="20" placeholder="请输入联系电话"/>
                    </el-form-item>

                    <el-form-item label="机构地址">
                        <el-input v-model="formData.address" class="minInput" clearable maxlength="50" placeholder="请输入机构地址"/>
                    </el-form-item>

                    <el-form-item label="机构介绍">
                        <el-input type="textarea" :rows="3" v-model="formData.introduce" class="minInput" placeholder="请输入机构介绍"  maxlength="500" resize="none" />
                    </el-form-item>

                    <el-form-item label="机构图片" v-if="centerDialogVisible">
                        <div class="imgName">
                                <myUpload v-model:data="formData.orgPic" :size="5"  />
                                <div class="imgText">
                                    支持格式jpg、png，建议图片尺寸为840*380，大小不超过5M
                                </div>
                       </div>
                    </el-form-item>
                    <el-form-item label="公众号二维码" v-if="centerDialogVisible">
                        <div class="imgName">
                            <myUpload v-model:data="formData.qrCodePic" :size="2"/>
                                <div class="imgText">
                                    上传机构二维码，在评估报告上展示，大小不超过2M
                                </div>
                       </div>
                    </el-form-item>
                    <el-form-item label="公众号名称">
                        <el-input v-model="formData. officialName" class="minInput" clearable maxlength="6"  placeholder="请输入公众号名称"/>
                    </el-form-item>
                     
               </el-form>
             
          
            <template #footer>
            <span class="dialog-footer">
                <el-button  type="primary"  @click="saveBtn(ruleFormRef)">
                保存
                </el-button>
                <el-button @click="cancelBtn">取消</el-button>
            </span>
            </template>
        </el-dialog>
            </div>
</template>
  
<script setup name="shabi">
import { getOrgList,createOrg,updateOrg,getOrgCategory} from "@/api/system/org";
import { ElMessage, ElMessageBox } from "element-plus";
import { useRouter } from 'vue-router'
const router = useRouter()
const { proxy } = getCurrentInstance()
const orgList = ref([])
const centerDialogVisible=ref(false)
const teamName=ref([])
const formData=ref({
    orgCategoryCode:'1',
    levelCode:'1',
    orgCategoryName:'居委会',
    levelName:'一级',
    orgPic:null,
    qrCodePic:null
})

const title=ref('')
const ruleFormRef=ref()
const total = ref(0)//列表总数
const tableData = ref([
])
const options=ref([
])
const rules=ref({
    orgCategoryCode:[ { required: true, message: '请选择机构类型', trigger: 'change' }],
    orgName:[ { required: true, message: '请填写机构名称', trigger: 'blur' }],
    orgCode:[ { required: true, message: '请填写代码', trigger: 'blur' }],
    registerNum:[ { required: true, message: '请填写登记号', trigger: 'blur' }],
    levelCode:[ { required: true, message: '请填写级别', trigger: 'change' }],
    abbreviation:[ { required: true, message: '请填写简称', trigger: 'blur' }],
})
const PageNumber=ref({
    current:1,
    size:10
})
const org_level = ref([
    {label: '一级', value: '1' },
    {label: '二级', value: '2' },
    {label: '三级', value: '3' },
    {label: '未定级', value: '0' }
])
//table样式
// function tableRowClassName({ row, rowIndex }) {
//     if (rowIndex % 2 == 1) {
//         return 'success-row';
//     } else {
//         return "";
//     }
// }
// function getData(val){
//   console.log(val,'val1111');
// }
// 查询 
function getList() {
    getOrgList(PageNumber.value).then(res=>{
    const{code,data}=res
    if(code=='200'){
        tableData.value=data.records
        total.value=data.total
    }
    })
}
//分页 
function handleSizeChange(val) {
    PageNumber.value.size = val
    getList()
}
function handleCurrentChange(val) {
    PageNumber.value.current = val
    getList()
}

function openView(val, index) {
   switch(index){
    case 1:
          //新增
          title.value='新增机构'
        centerDialogVisible.value=true
    break 
    case 2:
         //编辑
         title.value='编辑机构'
        formData.value=JSON.parse(JSON.stringify(val))
        centerDialogVisible.value=true
    break 
    case 3:
        //删除   
        proxy.$confirm(`是否确认${val.closeStatus=='1'?'停用':'启用'}本机构？`, "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
        })
         .then( () => {
            switch(val.closeStatus){
                case '0':
                val.closeStatus='1'
                break
                case '1':
                val.closeStatus='0'
                break
            }
                  updateOrg(val).then(res=>{
                    if(res.code===200){
                        ElMessage({
                            type: "success",
                            message: "操作成功",
                            });
                        getList()
                     }
                    })
               })
            .catch(() => {
                ElMessage({
               type: "info",
              message: "取消操作",
              });
            });
    break 
   }
}
function choseOption(val,type){
   switch (type){
        case '机构类别':
        formData.value.orgCategoryName=val
       break
       case '级别':
        formData.value.levelName=val
       break
   }
}

//机构维护提交
function saveBtn(formEl){
    if (!formEl) return
    formEl.validate((valid, fields) => {
    if (valid) {
        switch (title.value){
               case '新增机构':
                    createOrg(formData.value).then(res=>{
                    if(res.code===200){
                        proxy.$modal.msgSuccess("新增成功");
                        cancelBtn()
                       getList()
                    }
                    })
                      break
                case '编辑机构':
                     updateOrg(formData.value).then(res=>{
                    if(res.code===200){
                        proxy.$modal.msgSuccess("编辑成功");
                        cancelBtn()
                        getList()
                     }
                    })
                break
          }
      
       
    } else {
      console.log('error submit!', fields)
    }
  })
}
//取消
function cancelBtn(){
    formData.value={
        orgCategoryCode:'1',
        levelCode:'1',
        orgCategoryName:'居委会',
        levelName:'一级',
        orgPic:null,
        qrCodePi:null
    }
    proxy.resetForm('ruleFormRef')
    centerDialogVisible.value=false

}
getList()
  
function getOrg (){
    getOrgCategory().then(res=>{
     if(res.code===200){
        console.log(res.data,'res.data');
        options.value=res.data
     }
    })
}
getOrg()

</script>
<style lang="scss" scoped>
.search {
    width: 100%;
    text-align: right;
}

.search-box {
    margin-bottom: 20px;
}

.pagination {
    bottom: 20px;
     right: 20px;
    width: 100%;
    padding: 20px 0;
    display: flex;
    justify-content: flex-end;
    // z-index: 999; /* 设置层级 */
}

.search-options {
    // background: #ff711e;
    // color: #F0F2F5;
    width: 100%;
    height: 40px;
    text-align: right;

    .el-button {
        font-size: 18px;
        font-weight: 500;
        text-align: left;
        color: #ffffff;
        line-height: 27px;

        :deep(.el-icon) {
            color: #fff;
        }
    }
}

:deep(.demo-ruleForm){
    display: flex;
    align-items: center;
    flex-direction:column;
}

:deep(.el-dialog__footer){
    padding-top:0 ;
    text-align: right !important;
}
:deep(.el-dialog__body){
    padding-bottom: 10px;
}
.minInput{
    width: 80%;
}
:deep(.el-form-item){
    width: 100%;
}
:deep(.el-select){
    width: 80%;
}
.imgName{
    display: flex;
    width: 80%;
    .imgText{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left:20px ;
        line-height: 23px;
        color: #999;
    }
}

</style>