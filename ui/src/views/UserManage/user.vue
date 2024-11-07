<template>
  <div class="app-container">
    <el-main>
      <div class="search-box">
        <el-form ref="orgTable" :inline="true" :model="searchForm" style="width:100%">
          <el-form-item class="search-bottom" label="就职机构">
            <el-select style="width:200px" v-model="searchForm.orgCode" placeholder=" " clearable>
              <el-option v-for="item in orgData" :key="item.id" :label="item.orgName" :value="item.orgCode">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="search-bottom" label="姓名">
            <el-input style="width:200px" v-model="searchForm.name" placeholder=" " clearable></el-input>
          </el-form-item>
          <div style="float:right">
            <el-button class="button-add" type="primary" @click="search()">
              <el-icon style="margin-right: 5px;">
                <Search />
              </el-icon>查询
            </el-button>
            <el-button class="button-add" style="background:#FF8205; border-color:#FF8205" type="primary" @click="addOrUpdate(true)">
              <el-icon>
                <Plus />
              </el-icon>新增用户
            </el-button>
          </div>
        </el-form>
      </div>
      <div>
        <el-table :data="tableData" :header-cell-style="{ backgroundColor: '#E8FAF6' }" style="width: 100%" :row-class-name="tableRowClassName">
          <el-table-column label="登录账号" prop="userName" align="center" />
          <el-table-column label="姓名" prop="name" align="center" />
          <el-table-column label="就职机构" prop="orgName" align="center" />
          <el-table-column label="就职机构工号" prop="thirdNo" align="center" />
          <el-table-column label="人员类别" prop="categoryName" align="center" />

          <el-table-column fixed="right" label="操作" align="center" width="230">
            <template #default="scope">
              <el-button type="text" size="small" @click="addOrUpdate(false, scope.row)">编辑</el-button>
              <el-button type="text" size="small" @click="addAccount(scope.row)">账号</el-button>
              <el-button :disabled="!scope.row.id" type="text" size="small" @click="onPermission(scope.row)">权限</el-button>
              <el-button type="text" size="small" @click="resetPass(scope.row)">重置密码</el-button>

              <el-button style="color: #2E91EB" v-if="scope.row.enabled == 1" type="text" size="small" @click="stopOrBegin(scope.row.id,0)">启用</el-button>
              <el-button style="color: red" v-if="scope.row.enabled != 1" type="text" size="small" @click="stopOrBegin(scope.row.id,1)">停用</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="mt-1">
        <pagination v-show="total > 0" :total="total" v-model:page="searchForm.current" v-model:limit="searchForm.size" @pagination="getList" />
      </div>
    </el-main>
    <!-- 权限 -->
    <el-dialog width="560px" title="权限管理" center :show-close="false" v-model="dialogVisible" :close-on-click-modal="false">
      <div style="overflow:hidden;  border: 1px solid #f2f2f2;">
        <div class="hear-title" style="background: #f1f8ff;   ">
          <span style="display: flex; justify-content: center; align-items: center;">应用选择</span>
          <span style="display: flex; justify-content: center; align-items: center;">角色选择</span>
        </div>

        <el-checkbox-group v-model="checkList">
          <div class="hear-body" v-for="(itme, index) in rolesList" :key='index'>
            <span class="check_perm" style="width:50%;height:40px">
              <el-checkbox :label="itme.name" @change="handleCheckedCitiesChange(index)"></el-checkbox>
            </span>
            <!-- <span>{{itme.name}}</span>  -->
            <el-select class="select_perm" style="width:50%;height:40px" v-model="rolesPicker[index]" multiple :disabled="!itme.isChecked" collapse-tags placeholder="请选择">
              <el-option v-for="val in itme.roles" :key="val.id" :label="val.name" :value="val.roleCode">
              </el-option>
            </el-select>
          </div>
        </el-checkbox-group>

      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="handlePermissionSave()">确 定</el-button>
          <el-button @click="canclePromise">取 消</el-button>
        </div>
      </template>
    </el-dialog>

    <!--新增 -->
    <el-dialog width="560px" :title="dioTitle" center :show-close="false" v-model="dialogVisibleUser" :close-on-click-modal="false">
      <el-form ref="addUser" :model="addForm" :rules="resetRules" label-width="140px">
        <el-form-item class="search-bottom" label="登录账号" prop="userName">
          <el-input style="width:280px" v-model="addForm.userName" placeholder="请输入内容" maxlength="20"></el-input>
        </el-form-item>
        <el-form-item class="search-bottom role-item" label="姓名" prop="name">
          <el-input style="width:280px" v-model="addForm.name" placeholder="请输入内容" maxlength="25"></el-input>
        </el-form-item>
        <el-form-item class="search-bottom role-item" label="性别" prop="sex" ref="sex">
          <el-select ref="sexNa" style="width:280px" v-model="addForm.sex" placeholder=" ">
            <el-option v-for="item in cateData.sexDic" :key="item.id" :label="item.value" :value="item.code">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="search-bottom role-item" label="就职机构" prop="orgCode">
          <el-select style="width:280px" v-model="addForm.orgCode" placeholder=" " @change="changeOrg">
            <el-option v-for="item in orgData" :key="item.id" :label="item.orgName" :value="item.orgCode">
            </el-option>
          </el-select>
        </el-form-item>
        <template v-if="cateType">
          <el-form-item class="search-bottom role-item" label="就职机构工号" prop="thirdNo">
            <el-input style="width:280px" v-model="addForm.thirdNo" placeholder=" " maxlength="18" clearable></el-input>
          </el-form-item>
          <el-form-item class="search-bottom role-item" label="人员类别" prop="categoryCode">
            <el-select style="width:280px" v-model="addForm.categoryCode" placeholder=" ">
              <el-option v-for="item in cateData.categoryDic" :key="item.id" :label="item.value" :value="item.code">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="search-bottom role-item" label="职称">
            <el-select style="width:280px" v-model="addForm.professionCode" placeholder=" ">
              <el-option v-for="item in cateData.professionDic" :key="item.id" :label="item.value" :value="item.code">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="search-bottom role-item" label="职务">
            <el-select style="width:280px" v-model="addForm.dutyCode" placeholder=" ">
              <el-option v-for="item in cateData.dutyDic" :key="item.id" :label="item.value" :value="item.code">
              </el-option>
            </el-select>
          </el-form-item>
        </template>
        <el-form-item class="search-bottom role-item" label="身份证号" prop="idcard">
          <el-input style="width:280px" v-model="addForm.idcard" placeholder=" " maxlength="18" clearable></el-input>
        </el-form-item>
        <el-form-item class="search-bottom role-item" label="联系电话" prop="phone">
          <el-input style="width:280px" v-model="addForm.phone" placeholder=" " maxlength="18" clearable></el-input>
        </el-form-item>
        <el-form-item label="签名图片"   class="search-bottom role-item" v-if="dialogVisibleUser">
                        <div class="imgName">
                                <myUpload v-model:data="addForm.signPic" :size="2"  />
                                <div class="imgText">
                                  支持格式jpg、png，建议图片尺寸为320*130，大小不超过2M
                                </div>
                       </div>
                    </el-form-item>
               <el-form-item label="二维码"  class="search-bottom role-item" v-if="dialogVisibleUser">
                        <div class="imgName">
                           <myUpload v-model:data="addForm.qrCodePic" :size="2"  />
                            <div class="imgText">
                            上传用户二维码，在评估报告上展示，大小不超过2M
                           </div>
                       </div>
                    </el-form-item>
               </el-form>

      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="addRoleItem">保 存</el-button>
          <el-button @click="resetAccount">取 消</el-button>
        </div>
      </template>
    </el-dialog>

    <!-- 账号 -->
    <el-dialog width="560px" title="编辑账号信息" center :show-close="false" v-model="dialogAccNum" :close-on-click-modal="false">
      <el-form ref="addRole" :model="accountNum" label-width="140px">
        <!-- <div class="account-title">账号信息：{{ accountData.userName }}</div> -->
        <!-- <el-form-item class="search-bottom" :label="'账号信息：' + accountData.userName"></el-form-item> -->
        <el-form-item class="search-bottom" label="登录账号" prop="userName">
          <el-input :disabled="true" style="width:280px" v-model="accountData.userName" readonly></el-input>
        </el-form-item>
        <el-form-item class="search-bottom role-item" label="密码有效天数" prop="passwordExpiredDays">
          <el-input-number v-model="accountData.passwordExpiredDays" :min="1" :max="9999" controls-position="right" style="width:280px" @change="changeExpiryDate" />
        </el-form-item>
        <el-form-item class="search-bottom role-item" label="密码失效期" prop="expiryDate">
          <el-input style="width:280px" v-model="accountData.expiryDate" placeholder="请输入内容" readonly></el-input>
        </el-form-item>
        <el-form-item class="search-bottom role-item" label="密码输入次数限制" prop="passwordErrorCount">
          <el-input-number v-model="accountData.passwordErrorCount" :min="1" :max="10" controls-position="right" style="width:280px" />
        </el-form-item>
        <el-form-item class="search-bottom role-item" label="密码错误锁定时长">
          <el-input style="width:280px" type="number" v-model="accountData.loginLockDuration" placeholder="请输入内容" :min="1" :max="999" oninput="if(!/^[0-9]+$/.test(value)) value=value.replace(/\D/g,'');if(value>999)value=999;if(value<1)value=null">
            <template #suffix>
              min
            </template>
          </el-input>
        </el-form-item>
      </el-form>

      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="addAccountItem()">确 定</el-button>
          <el-button @click="cancelAccount">取 消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup name="userManage">
  import { ElMessage, ElMessageBox } from 'element-plus'
  import { ref, reactive, toRefs } from 'vue'
  import { changeDisableUser, findPageByIdAndName, createSysUser, updateSysUser, getSysUser, querySystemRole, updateResetPassword, createAllUserRole, getDictionaryUser, findDept } from "@/api/system/user"

  import { getOrgList } from "@/api/system/org"
  import { addDate } from '@/utils/validate'
  import useUserStore from '@/store/modules/user';

  const checkIdcard = (rule, value, callback) => {
    const phoneReg = /^1[3|4|5|6|7|8][0-9]{9}$/
    // 当数据为空时，不进行校验
    if (!value) {
      return callback()
    }
    setTimeout(() => {

      if (phoneReg.test(value)) {
        callback()
      } else {
        callback(new Error('请输入正确的手机号码'))
      }
    }, 100)
  }
  const checkPhone = (rule, value, callback) => {
    const phoneReg = /^1[3|4|5|6|7|8][0-9]{9}$/
    // 当数据为空时，不进行校验
    if (!value) {
      return callback()
    }
    setTimeout(() => {
      // if (phoneReg.test(value)) {
      //   callback()
      // } else {
      //   callback(new Error('请输入正确的手机号码'))
      // }

      if (/^(13[0-9]|14[0-9]|15[0-9]|16[6]|18[0-9]|19[6,9]|17[0-9])\d{8}$/i.test(value) == false) {
        callback(new Error("请输入手机号"));
      } else {
        //校验通过
        callback();
      }
    }, 100)
  }

  const { proxy } = getCurrentInstance()
  const searchForm = ref({
    categoryCode: undefined,
    name: undefined,
    orgCode: undefined,
    current: 1,
    size: 10
  })
  const addForm = ref({
    userName: undefined,
    systemId: undefined,
    name: undefined,
    sex: undefined,
    sexName: undefined,
    orgCode: undefined,
    thirdNo: undefined,
    categoryCode: undefined,
    professionCode: undefined,
    dutyCode: undefined,
    id: undefined,
    idcard: undefined,
    systemName: undefined,
    roleId: undefined,
    userId: undefined,
    phone: undefined,
    signPic:undefined,
    qrCodePic:undefined
  })
  const addUser = ref()
  const accountNum = ref([])
  const permissionData = ref({})
  const cateType = ref(true)
  const tableData = ref([])
  const dialogVisibleUser = ref(false)
  const dialogVisible = ref(false)
  const dialogAccNum = ref(false)
  const permissionEditLoading = ref(false)
  const roleId = ref(false)
  const total = ref(0)
  const orgData = ref([])
  const cateData = ref({})
  const searchOrg = ref('')
  const accountData = ref({
    passwordExpiredDays: '',
    passwordErrorCount: '',
    loginLockDuration: ''
  })
  const formData = reactive({
    rolesPicker: []
  })

  const { rolesPicker } = toRefs(formData)
  const rolesList = ref([])
  const nameList = ref([])
  const paramsData = ref([]) //确定参数
  const checkList = ref([])
  const isLable = ref(true)
  const resetRules = reactive({
    systemId: [{ required: true, trigger: "blur", message: "请选择系统" }],
    userName: [{ required: true, trigger: "blur", message: "登录账号必填" }],
    name: [{ required: true, trigger: "blur", message: "姓名必填" }],
    thirdNo: [{ required: true, trigger: "blur", message: "就职机构工号必填" }],
    sex: [{ required: true, trigger: "change", message: "性别必选" }],
    categoryCode: [{ required: true, trigger: "change", message: "人员类别必选" }],
    orgCode: [{ required: true, trigger: "change", message: "就职机构必选" }],
    roleCode: [{ required: true, trigger: "blur", message: "请输入角色编码" }],
    idcard: [{
      pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
      message: "请输入正确的身份证号码",
      trigger: "blur"
    }],
    phone: [{ validator: checkPhone }],
    // phone: [{ pattern:/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/, message: "请输入正确的联系电话", trigger: "blur" }],
  })

  const dioTitle = ref('新增用户')
  //添加 or 编辑 角色
  function addOrUpdate(type, val) {
    // true 新增  false 编辑
    if (type) {
      dioTitle.value = '新增用户'
      dialogVisibleUser.value = true
    } else {
      dioTitle.value = '编辑用户'
      detailUser(val.id)
     
    }
  }

  function addAccount(val) {
    dialogAccNum.value = true
    accountData.value = val
    let dd = new Date(val.pasUpdateDate)
    let endTime = addDate(val.pasUpdateDate, val.passwordExpiredDays)
    accountData.value.expiryDate = endTime
  }

  function changeExpiryDate() {
    let endTime = addDate(accountData.value.pasUpdateDate, accountData.value.passwordExpiredDays)
    accountData.value.expiryDate = endTime
  }

  function detailUser(id) {
    getSysUser(id).then(res => {
      if (res.code == 200) {
        addForm.value = res.data ? res.data || {} : {};
        if (addForm.value.deptId == -1) {
          addForm.value.deptId = ''
        }
        dialogVisibleUser.value = true
      }
    })
  }
  //添加用户
  function addRoleItem() {
    addUser.value.validate(valid => {
      if (valid) {
        addForm.value.sexName = proxy.$refs.sexNa.selected.currentLabel
        let params = JSON.parse(JSON.stringify(addForm.value))
        if (addForm.value.id != undefined) {
          updateSysUser(params).then(res => {
            if (res.code == 200) {
              dialogAccNum.value = false
              getList()
              resetAccount()
              ElMessage({
                type: 'success',
                message: '修改成功！',
              })
              useUserStore().getInfo().then(() => {})
            }
          })
        } else {
          createSysUser(params).then(res => {
            if (res.code == 200) {
              dialogAccNum.value = false
              getList()
              resetAccount()
              ElMessage({
                type: 'success',
                message: '添加成功！',
              })
            }
          })
        }
      }
    })
  }

  function resetAccount() {
    addForm.value = {
      userName: undefined,
      systemId: undefined,
      name: undefined,
      sex: undefined,
      orgCode: undefined,
      thirdNo: undefined,
      categoryCode: undefined,
      professionCode: undefined,
      dutyCode: undefined,
      id: undefined,
      idcard: undefined,
      systemName: undefined,
      roleId: undefined,
      userId: undefined,
      phone: undefined,
      signPic:undefined,
      qrCodePi:undefined
      
    }
    dialogVisibleUser.value = false
    rolesPicker.value = []
    checkList.value = []
    nameList.value = []
    addUser.value.resetFields();
  }
  //stopOrBegin 停用 启用
  function stopOrBegin(id, val) {
    let params = {
      id: id,
      enable: val
    }
    changeDisableUser(params).then(res => {
      if (res.code == 200) {
        getList()
        ElMessage({
          type: 'success',
          message: res.msg,
        })
      }
    })
  }
  // 保存账号信息
  function addAccountItem() {
    let params = {
      passwordExpiredDays: accountData.value.passwordExpiredDays,
      passwordErrorCount: accountData.value.passwordErrorCount,
      loginLockDuration: accountData.value.loginLockDuration,
      id: accountData.value.id
    }
    updateSysUser(params).then(res => {
      if (res.code == 200) {
        dialogAccNum.value = false
        getList()
        resetAccount()
        ElMessage({
          type: 'success',
          message: '修改成功！',
        })
      }
    })
  }

  function changeOrg() {
    orgData.value.map((item) => {
      if (item.orgCode == addForm.value.orgCode) {
        cateType.value = item.orgCategoryCode == 2 ? false : true
      }
    })
  }

  function cancelAccount() {
    dialogAccNum.value = false
    accountData.value = []
  }

  // 重置密码
  function resetPass(val) {
    let params = { userId: val.id }
    proxy.$modal.confirm('确定要重置账号:' + val.userName + '的密码吗？').then(function() {
      return updateResetPassword(params);
    }).then(() => {
      getList();
      proxy.$modal.msgSuccess("重置成功！");
    }).catch(() => {});
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
    let selected = treeStatus.checkedKeys.indexOf(val.serial)

    if (selected !== -1) { // 选中
      if (val.roles) {
        val.roles.map((item) => {
          item.disabled = false
        })
      }
    } else {
      if (val.roles) {
        val.roles.map((item) => {
          item.disabled = true
        })
      }
    }

  }

  function handleCheckedCitiesChange(val) {
    rolesList.value[val].isChecked = !rolesList.value[val].isChecked
    if (!rolesList.value[val].isChecked) {
      rolesPicker.value[val] = []
    }

  }
  //过滤optino
  function filterOption(ids) {
    let arr = []
    let rolesArr = []
    let nameArr = []
    rolesList.value.forEach(item => {
      if (item.roles) {
        let data = item.roles.filter(v => ids.includes(v.roleCode))
        if (data) {
          rolesArr.push(...data)
        }
      }

    })

    let nameData = rolesList.value.filter(v => checkList.value.includes(v.name))
    if (nameData) {
      nameArr.push(...nameData)
    }
    rolesArr.map((item) => { //孩子
      arr.push({ roleId: item.id, systemId: item.systemId, userId: permissionData.value.id })
    })
    nameArr.map((item) => { //父亲
      arr.push({ systemId: item.id, userId: permissionData.value.id })
    })
    return arr
  }

  function handlePermissionSave() {
    let codes = []
    rolesPicker.value.forEach(i => {
      i.forEach(j => {
        codes.push(j)
      })
    })
    const paramsList = filterOption(codes)

    createAllUserRole(paramsList).then(response => {
      proxy.$modal.msgSuccess("重置成功！");
      canclePromise()
      getList()
    }).catch(error => {
      console.log(error)
    })
  }

  function canclePromise() {
    dialogVisible.value = false
    permissionData.value = {}
    rolesPicker.value = []
    checkList.value = []
    nameList.value = []
    rolesList.value = []
    paramsData.value = []
  }
  // 权限查询
  function onPermission(val) {
    // permissionEditLoading.value = true
    dialogVisible.value = true
    permissionData.value = val
    let params = { userId: val.id }
    // let ids = []
    // let serialData = []
    querySystemRole(params).then((res) => {
      permissionEditLoading.value = false
      rolesList.value = res.data // 角色选择 添加空对象
      rolesList.value.forEach((v, index) => { //回显
        rolesPicker.value.push([])
        nameList.value.push(v.name)
        if (v.isChecked) {
          checkList.value.push(v.name)
        }
        if (v.roles && v.roles.length > 0) {
          v.roles.forEach(i => {
            if (i.isChecked) {
              rolesPicker.value[index].push(i.roleCode)
            }
          })

        }
      })

    }).catch(() => {
      permissionEditLoading.value = false
    })
  }

  // 就职机构-机构列表
  function OrgList() {
    getOrgList({ current: 1, size: 99999 }).then(res => {
      orgData.value = res.data.records
    })
  }
  // 查询
  function getList() {
    findPageByIdAndName(searchForm.value).then(res => {
      if (res.code == 200) {
        tableData.value = res.data.records
        tableData.value.map(item => {
          if (item.orgSubCode != '') {
            item.orgFormSubCode = item.orgSubCode
            item.orgFormSubName = item.orgSubName
          } else {
            item.orgFormSubCode = item.orgCode
            item.orgFormSubName = item.orgName
          }
        })
        total.value = res.data.total;
      }
    })
  }

  function search() {
    getList()
  }

  function getDictUser() {
    getDictionaryUser().then(res => {
      cateData.value = res.data
    })
  }
  getList()
  OrgList()
  getDictUser()
</script>
<style lang="scss" scoped>
  .search-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
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

  :deep(.el-input-number .el-input__inner) {
    text-align: left !important;
  }

  .hear-title,
  .hear-body {
    height: 40px;
    // overflow-y: auto;
    display: flex;

    span {
      width: 50%;
    }

  }

  .hear-body {
    span {
      padding-left: 50px;
    }
  }

  .account-title {
    margin-bottom: 20px !important;
    color: #606266;
    font-weight: 700;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    padding-left: 15px;
  }

  .check_perm {
    :deep(.el-checkbox) {
      height: 38px;
      line-height: 38px;
    }
  }

  .select_perm {
    padding: 2px 0;

    :deep(.el-input__inner) {
      height: 36px;
      line-height: 36px;
    }
  }

  .avatar-uploader .avatar {
    width: 100px;
    height: 100px;
    display: block;
    border: 1px solid #CBCFD6;
    border-radius: 16px;
  }
  .avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  text-align: center;
  border: 1px solid #CBCFD6;
  border-radius: 6px;

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