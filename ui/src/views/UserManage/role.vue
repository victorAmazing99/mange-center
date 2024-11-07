<template>
  <div class="app-container">
    <el-main>
      <div class="search-box">
        <el-form ref="orgTable" :inline="true" :model="searchForm">
          <el-form-item class="search-bottom" label="系统">
            <el-select style="width:240px" v-model="searchForm.systemId" placeholder="请选择">
              <el-option v-for="item in systemDataList" :key="item.id" :label="item.name" :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item class="search-bottom" label="角色名称">
            <el-input style="width:240px" v-model="searchForm.name" placeholder="请输入内容"></el-input>
          </el-form-item>
        </el-form>
        <div class="search">
          <el-button class="button-add" type="primary" @click="search()">
            <el-icon style="margin-right: 5px;">
              <Search />
            </el-icon>查询
          </el-button>
          <el-button class="button-add" style="background:#FF8205; border-color:#FF8205" type="primary" @click="addOrUpdate(true)">
            <el-icon style="margin-right: 5px;">
              <Plus />
            </el-icon> 新增角色
          </el-button>
        </div>
      </div>
      <div>
        <el-table :data="tableData" :header-cell-style="{ backgroundColor: '#E8FAF6' }" style="width: 100%" :row-class-name="tableRowClassName">
          <el-table-column label="角色编码" prop="roleCode" align="center" />
          <el-table-column label="所属系统" prop="systemName" align="center" />
          <el-table-column label="角色名称" prop="name" align="center" />
          <el-table-column label="角色描述" prop="describe" align="center" min-width="200" show-overflow-tooltip/>
          <el-table-column fixed="right" label="操作" align="center">
            <template #default="scope">
              <el-button type="text" size="small" @click="addOrUpdate(false, scope.row)">编辑</el-button>
              <el-button style="color: red" type="text" size="small" @click="deleteRoleItem(scope.row)">删除</el-button>
              <el-button :disabled="!scope.row.id" type="text" size="small" @click="onPermission(scope.row)">权限</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="mt-1">
          <pagination v-show="total > 0" :total="total" v-model:page="searchForm.current" v-model:limit="searchForm.size" @pagination="getList" />
        </div>
      </div>

    </el-main>
    <!-- v-loading="permissionEditLoading" -->
    <!-- 权限 -->
    <el-dialog width="560px" title="权限管理" center :show-close="false" v-model="dialogVisible" :close-on-click-modal="false">
      <div style="height: 21.8vw; overflow-y: auto; margin-left: 40px;">
        <el-tree ref="roleTree" :data="treeData" :default-expanded-keys="[]" :check-strictly="true" :default-checked-keys="treeDefaultCheckedKeys" :props="elTreeProps" @check="onCheck" show-checkbox node-key="id" />
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="handlePermissionSave()">确 定</el-button>
          <el-button @click="dialogVisible = false">取 消</el-button>
        </span>
      </template>
    </el-dialog>

    <!--新增 -->
    <el-dialog width="560px" title="新增角色" center :show-close="false" v-model="dialogVisibleRole" :close-on-click-modal="false">
      <el-form ref="addRole" :model="addForm" :rules="resetRules" label-width="140px">
        <el-form-item class="search-bottom" label="系统" prop="systemId">
          <el-select ref="optionRef" style="width:280px" v-model="addForm.systemId" placeholder="请选择">
            <el-option v-for="item in systemDataList" :key="item.id" :label="item.name" :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="search-bottom role-item" label="角色编码" prop="roleCode">
          <el-input style="width:280px" v-model="addForm.roleCode" placeholder="请输入内容" maxlength="20"></el-input>
        </el-form-item>
        <el-form-item class="search-bottom role-item" label="角色名称" prop="name">
          <el-input style="width:280px" v-model="addForm.name" placeholder="请输入内容" maxlength="10"></el-input>
        </el-form-item>
        <el-form-item class="search-bottom role-item" label="角色描述" prop="describe">
          <el-input maxlength="50" style="width:280px" type="textarea" v-model="addForm.describe" placeholder="请输入内容"></el-input>
        </el-form-item>
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="addRoleItem()">确 定</el-button>
          <el-button @click="clearRole">取 消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup name="RoleMaintain">
  import { ElMessage, ElMessageBox } from 'element-plus'
  import { ref, reactive } from 'vue'
  import { sysUserFindList, getRoleList, addSysRole, deleteSysRole, systemList, getRoleDetail, roleUpdate, addJurisdiction } from "@/api/system/role";
  import { getRouters, systemMenuInfo } from "@/api/menu"
  const { proxy } = getCurrentInstance()
  const searchForm = ref({
    systemId: undefined,
    name: undefined,
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
    systemId: [{ required: true, trigger: "blur", message: "请选择系统" }],
    name: [{ required: true, trigger: "blur", message: "请输入角色名称" }],
    roleCode: [{ required: true, trigger: "blur", message: "请输入角色编码" }],
    describe: [{ required: true, trigger: "blur", message: "请输入角色描述" }],
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
      dialogVisibleRole.value = true
    }
  }

  function detailRole(id) {
    getRoleDetail(id).then(res => {
      if (res.code == 200) {
        addForm.value = res.data ? res.data || {} : {};
      }
    })
  }
  //添加角色
  function addRoleItem() {
    proxy.$refs.addRole.validate(valid => {
      if (valid) {
        if (addType.value) {
          addForm.value.systemName = proxy.$refs.optionRef.selected.currentLabel
          let params = { ...addForm.value }
          addSysRole(params).then(res => {
            if (res.code == 200) {
              dialogVisibleRole.value = false
              getList()
              ElMessage({
                type: 'success',
                message: '添加成功',
              })
            }
          })
        } else {
          addForm.value.systemName = proxy.$refs.optionRef.selected.currentLabel
          let params = { ...addForm.value }
          roleUpdate(params).then(res => {
            if (res.code == 200) {
              dialogVisibleRole.value = false
              getList()
              ElMessage({
                type: 'success',
                message: '编辑成功',
              })
            }
          })
        }
      }
    })
  }

  function clearRole() {
    dialogVisibleRole.value = false
    proxy.resetForm("addRole")
  }

  function getSystemList() {
    systemList({}).then((res) => {
      if (res.code == 200) {
        systemDataList.value = res.data;
      }
    })
  }
  //添加角色
  function deleteRoleItem(val) {
    ElMessageBox.confirm(
        '请确认是否删除该角色',
        '删除',
        {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: 'warning',
        }
      )
      .then(() => {
        deleteSysRole(val.id).then((res) => {
          if (res.code == 200) {
            getList()
            ElMessage({
              type: 'success',
              message: '删除成功',
            })
          }
        })
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: '删除失败',
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

  function onCheck(val, treeStatus) {
    let selected = treeStatus.checkedKeys.indexOf(val.id)
    if (selected !== -1) { // 选中
      if (val.children) {
        val.children.map((item) => {
          item.disabled = false
        })
      }
    } else {
      let spliceId = []
      treeData.value.map(item => {
        if(item.id == val.id) {
          item.children.map(its => {
            spliceId.push(its.id)
          })
        }
      })
      let difference = treeStatus.checkedKeys.filter(el => spliceId.indexOf(el) === -1);
      treeDefaultCheckedKeys.value = difference
      proxy.$refs.roleTree.setCheckedKeys(difference)
      if (val.children) {
        val.children.map((item) => {
          item.disabled = true
        })
      }
    }
  }

  function handlePermissionSave() {
    // let currentPermissionList = treeDefaultCheckedKeys.value
    let newPermissionList = proxy.$refs.roleTree.getCheckedKeys()
    if (indexId.value) {
      let ids = Number(indexId.value)
      newPermissionList.push(ids)
      newPermissionList = [...new Set(newPermissionList)]
    }
    const paramsList = []
    newPermissionList.forEach((item) => {
      let params = {
        roleId: roleId.value,
        menuId: item,
        systemId: systemId.value
      }
      paramsList.push(params)
    })
    addJurisdiction(paramsList).then(response => {
      if (response.code == 200) {
        proxy.$modal.msgSuccess("添加成功！");
        dialogVisible.value = false
        getList()
      }

    }).catch(error => {
      console.log(error)
    })

  }
  //权限查询
  function getRole(id) {
    let params = { roleId: id }
    getRoleList(params).then((res) => {
      dataRileList.value = res.data
      let ids = []
      dataRileList.value.forEach((item) => {
        ids.push(item.menuId)
      })
      treeDefaultCheckedKeys.value = ids

      proxy.$refs.roleTree.setCheckedKeys(ids)
    }).catch(() => {
      permissionEditLoading.value = false
    })
  }
  // 菜单查询
  function onPermission(val) {
    if (val.id) {
      getRole(val.id)
    }
    roleId.value = val.id
    systemId.value = val.systemId
    permissionEditLoading.value = true
    dialogVisible.value = true
    permissionData.value = val
    systemMenuInfo().then((res) => {
      if (res.code == 200) {
        permissionEditLoading.value = false
        let data = res.data
        data.map((item) => {
          if (item.parentId == 0) {
            if (treeDefaultCheckedKeys.value.indexOf(item.id) == -1) {
              if (item.children && item.children.length > 0) {
                item.children.map((its) => {
                  its.disabled = true
                })
              }
            }
          }
          if (item.name == '首页') {
            indexId.value = item.id
            data = data.filter((its) => {
              return its.name != '首页'
            })
          }
        })
        treeData.value = data
      } else {
        treeData.value = []
      }
    }).catch(() => {
      treeData.value = []
      permissionEditLoading.value = false
    })

  }
  // 查询
  function getList() {
    sysUserFindList(searchForm.value).then(res => {
      if (res.code == 200) {
        tableData.value = res.data.records,
          total.value = res.data.total
      }
    })
  }

  function search() {
    getList()
  }
  getList()
  getSystemList()
</script>
<style lang="scss" scoped>
  .search-box {
    display: flex;
    justify-content: space-between;
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
  }
</style>