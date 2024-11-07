<template>
    <div class="app-container">
        <el-main>
            <div class="search-box">
                <div class="search">
                    <el-button class="button-add" style="background:#FF8205; border-color:#FF8205" type="primary"
                        @click="addOrUpdate(true)">
                        <el-icon style="margin-right: 5px;">
                            <Plus />
                        </el-icon> 新增接口
                    </el-button>
                </div>
            </div>
            <div>
                <el-table :data="tableData" :header-cell-style="{ backgroundColor: '#E8FAF6' }" style="width: 100%"
                    :row-class-name="tableRowClassName">
                    <el-table-column label="公司名称" prop="company" align="center" />
                    <el-table-column label="请求头" prop="headerInfo" align="center" />
                    <el-table-column label="公钥" prop="publicKey" align="center" min-width="160" show-overflow-tooltip />
                    <el-table-column label="私钥" prop="privateKey" align="center" min-width="160" show-overflow-tooltip />
                    <el-table-column fixed="right" label="操作" align="center">
                        <template #default="scope">
                            <!-- <el-button type="text" size="small" @click="addOrUpdate(false, scope.row)">更新密钥</el-button> -->
                            <!-- <el-button style="color: red" type="text" size="small"
                                @click="deleteRoleItem(scope.row)">删除</el-button> -->
                        </template>
                    </el-table-column>
                </el-table>
                <div class="mt-1">
                    <pagination v-show="total > 0" :total="total" v-model:page="searchForm.current"
                        v-model:limit="searchForm.size" @pagination="getList" />
                </div>
            </div>

        </el-main>

        <!--新增 -->
        <el-dialog width="560px" :title="addType ? '新增接口' : '编辑接口'" center :show-close="false" v-model="dialogVisibleRole"
            :close-on-click-modal="false">
            <el-form ref="addRole" :model="addForm" :rules="resetRules" label-width="140px">
                <el-form-item class="search-bottom role-item" label="公司名称" prop="company">
                    <el-input style="width:280px" v-model="addForm.company" placeholder="请输入内容" maxlength="20"></el-input>
                </el-form-item>
                <!-- <div v-if="!addType">
                    <el-form-item class="search-bottom role-item" label="请求头" prop="headerInfo">
                        <el-input style="width:280px" v-model="addForm.headerInfo" placeholder="请输入内容"
                            maxlength="20"></el-input>
                    </el-form-item>
                    <el-form-item class="search-bottom role-item" label="公钥" prop="publicKey">
                        <el-input style="width:280px" v-model="addForm.publicKey" placeholder="请输入内容"
                            maxlength="20"></el-input>
                    </el-form-item>
                    <el-form-item class="search-bottom role-item" label="私钥" prop="privateKey">
                        <el-input style="width:280px" v-model="addForm.privateKey" placeholder="请输入内容"
                            maxlength="20"></el-input>
                    </el-form-item>
                </div> -->
            </el-form>

            <template #footer>
                <span class="dialog-footer">
                    <el-button type="primary" @click="addRoleItem()">保 存</el-button>
                    <el-button @click="clearRole">取 消</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>
  
<script setup name="RoleMaintain">
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref, reactive } from 'vue'
import { addApi, deleteSysRole, systemList, getRoleDetail, updateApi, apiListData,getApiDetail,deleteApi } from "@/api/system/role";
import { getRouters, systemMenuInfo } from "@/api/menu"
const { proxy } = getCurrentInstance()
const searchForm = ref({
    current: 1,
    size: 10
})
const addForm = ref({
    systemId: undefined,
    name: undefined,
    id: undefined,
    systemName: undefined,
    roleId: undefined,
    userId: undefined,
    describe: undefined,
})
const elTreeProps = ref({
    children: "children",
    label: "name"
})
const total = ref(0)
const permissionData = ref({})
const systemDataList = ref([])
const treeData = ref([])
const treeDefaultCheckedKeys = ref([])
const tableData = ref([])
const dataRileList = ref([])
const dialogVisibleRole = ref(false)
const dialogVisible = ref(false)
const permissionEditLoading = ref(false)
const roleId = ref('')
const systemId = ref('')
const addType = ref(true)
const indexId = ref('')
const resetRules = {
    company: [{ required: true, trigger: "blur", message: "请填写公司名称" }],

};
//添加 or 编辑 角色
function addOrUpdate(type, val) {
    addForm.value = {
        systemId: undefined,
        name: undefined,
        id: undefined,
        systemName: undefined,
        roleId: undefined,
        userId: undefined,
        describe: undefined,
    }
    addType.value = type
    // true 新增  false 编辑
    if (type) {
        dialogVisibleRole.value = true
    } else {
        detailRole(val.id)
        // dialogVisibleRole.value = true
        ElMessageBox.confirm(
        '请确认是否更新该接口',
        '更新',
        {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning',
        }
    )
        .then(() => {
            let params = { ...addForm.value }
            updateApi(params).then((res) => {
                if (res.code == 200) {
                    getList()
                    ElMessage({
                        type: 'success',
                        message: res.msg,
                    })
                }
            })
        })
    }
}

function detailRole(id) {
    getApiDetail(id).then(res => {
        if (res.code == 200) {
            addForm.value = res.data ? res.data || {} : {};
        }
    })
}
//添加角色
function addRoleItem() {
    if (addType.value) {
        addApi({company:addForm.value.company}).then(res => {
            if (res.code == 200) {
                dialogVisibleRole.value = false
                getList()
                ElMessage({
                    type: 'success',
                    message: '添加成功',
                })
            }
        })
    }
    else {
        // let params = { ...addForm.value }
        // updateApi(params).then(res => {
        //     if (res.code == 200) {
        //         dialogVisibleRole.value = false
        //         getList()
        //         ElMessage({
        //             type: 'success',
        //             message: '编辑成功',
        //         })
        //     }
        // })
    }
}

function clearRole() {
    dialogVisibleRole.value = false
    proxy.resetForm("addRole")
}

//删除
function deleteRoleItem(val) {
    ElMessageBox.confirm(
        '请确认是否删除该接口',
        '删除',
        {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning',
        }
    )
        .then(() => {
            deleteApi(val.id).then((res) => {
                if (res.code == 200) {
                    getList()
                    ElMessage({
                        type: 'success',
                        message: '删除成功',
                    })
                }
            })
        })
}
//table样式
function tableRowClassName({ row, rowIndex }) {
    if (rowIndex % 2 == 1) {
        return 'success-row';
    } else {
        return "";
    }
}

// 查询
function getList() {
    apiListData(searchForm.value).then(res => {
        if (res.code == 200) {
            tableData.value = res.data.records,
                total.value = res.data.total
        }
    })
}

getList()
</script>
<style lang="scss" scoped>
.search-box {
    display: flex;
    justify-content: end;
    margin-bottom: 15px;
}

.role-item {
    margin-top: 20px;
}

.el-form-item {
    margin-bottom: 0;
}

.el-form-item {
    margin-bottom: 4px !important;
}

:deep(.el-dialog:not(.is-fullscreen)) {
    margin-top: 25vh !important;
}

.theaderClass {
    font-size: 16px;
    vertical-align: middle;
    cursor: pointer;
}

.select_class {
    display: flex;
    flex-wrap: nowrap;

    .selectCity {
        margin-right: 10px;
    }
}


.diatitle {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
}

.mt-1 {
    width: 100%;
    margin-top: 10px;
    text-align: right;
    position: relative;
}</style>