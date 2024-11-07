<template>
  <div v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow">
      <app-link v-if="onlyOneChild.meta && onlyOneChild.meta.title != '社区中心' && onlyOneChild.meta.title != '人群管理' " :to="resolvePath(onlyOneChild.path, onlyOneChild.query)" @click="onClick(onlyOneChild.meta)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{ 'submenu-title-noDropdown': !isNest }">
          <div class="menu-active">
          <svg-icon v-if="onlyOneChild.meta.title == '首页'" :icon-class="onlyOneChild.meta.icon || (item.meta && item.meta.icon)"/>
          <span class="menu-title" :title="hasTitle(onlyOneChild.meta.title)">{{ onlyOneChild.meta.title }}</span>
          </div>
        </el-menu-item>
      </app-link>
      <span v-else @click="onClick(onlyOneChild.meta)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{ 'submenu-title-noDropdown': !isNest }">
          <div class="menu-active">
          <svg-icon v-if="onlyOneChild.meta.title == '首页'" :icon-class="onlyOneChild.meta.icon || (item.meta && item.meta.icon)"/>
          <span class="menu-title" :title="hasTitle(onlyOneChild.meta.title)">{{ onlyOneChild.meta.title }}</span>
          </div>
        </el-menu-item>
      </span>
    </template>

    <el-sub-menu v-else class="parentMenu" ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template v-if="item.meta" #title>
        <svg-icon :icon-class="item.meta && item.meta.icon" />
        <span class="menu-title parentTitle" :title="hasTitle(item.meta.title)">{{ item.meta.title }}</span>
      </template>

      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-sub-menu>
  </div>
</template>

<script setup>
import { isExternal } from '@/utils/validate'
import AppLink from './Link'
import { getNormalPath } from '@/utils/ruoyi'
import { useRouter } from 'vue-router'
import { getThirdToken } from '@/api/system/user'

const router = useRouter();
const props = defineProps({
  // route object
  item: {
    type: Object,
    required: true
  },
  isNest: {
    type: Boolean,
    default: false
  },
  basePath: {
    type: String,
    default: ''
  }
})

const onlyOneChild = ref({});

function hasOneShowingChild(children = [], parent) {
  if (!children) {
    children = [];
  }
  const showingChildren = children.filter(item => {
    if (item.hidden) {
      return false
    } else {
      // Temp set(will be used if only has one showing child)
      onlyOneChild.value = item
      return true
    }
  })

  // When there is only one child router, the child router is displayed by default
  if (showingChildren.length === 1) {
    return true
  }

  // Show parent if there are no child router to display
  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent, path: '', noShowingChildren: true }
    return true
  }

  return false
};

function resolvePath(routePath, routeQuery) {
  if (isExternal(routePath)) {
    return routePath
  }
  if (isExternal(props.basePath)) {
    return props.basePath
  }
  if (routeQuery) {
    let query = JSON.parse(routeQuery);
    return { path: getNormalPath(props.basePath + '/' + routePath), query: query }
  }
  return getNormalPath(props.basePath + '/' + routePath)
}

function hasTitle(title){
  if (title.length > 5) {
    return title;
  } else {
    return "";
  }
}
function onClick(val) {
  if(val.title == '社区中心') {
    // const routerJump = () => {
    //   const newPage = router.resolve({
    //     path: '/largeScreen/community'
    //   })
    //   window.open(newPage.href, '__blank')
    // }
    // return routerJump
    const { href } = router.resolve({
      path: '/largeScreen/community',
    })
    window.open(href, "_blank")
  }
  if(val.title == '人群管理') {
    // window.open('http://192.168.0.237:9201', "_blank")
    // let params = JSON.stringify({"existenceTime":36,"userInfo":{"userName":"ylx","uid":93,"role":"district,community","name":"ylx","belong":"10013","belongName":"南京卫生院1","thirdNo":"123"},"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJiZWxvbmdcIjpcIjEwMDExXCIsXCJiZWxvbmdOYW1lXCI6XCLlpKnmtKXljavnlJ_pmaJcIixcIm5hbWVcIjpcImYxXCIsXCJyb2xlXCI6XCJkaXN0cmljdFwiLFwidGhpcmROb1wiOlwiMTA0XCIsXCJ1aWRcIjo3NixcInVzZXJOYW1lXCI6XCJmMVwifSJ9.f66WANU5kBC-Ejnv6zrxD6jsi3NBcwrbg_6Eg4XY_bi4TP0-ZD4bkEIbym9tjP9fwpAyPl6IHaU_Sbho9YZTyA"})
    // window.open('http://localhost:81?param=' + encodeURIComponent(params), "_blank")
    getThirdToken({appId:1}).then(res => {
      // #/doc/manage/
      if(res.code == 200) {
        let params = res.data.tokenInfo
        let url = res.data.url + '?param='
        // let url = 'http://localhost:81/' + '?param='
        window.open(url + encodeURIComponent(params), "_blank")
      }
    })
  }
}
</script>
