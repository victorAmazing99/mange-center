<template>
  <section class="app-main" :class="isScreen? 'none-padding': 'padding-class'" :style="showCrumb?'min-height:calc(100vh - 100px)':showIndex? 'height:calc(100vh - 200px);margin:0 auto':'min-height:calc(100vh - 70px)'">
    <div class="main-content" :style="showCrumb?'min-height:calc(100vh - 110px)':showIndex?'height:calc(100vh - 123px);margin:0 auto':'min-height:calc(100vh - 90px)'">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="tagsViewStore.cachedViews">
          <component v-if="!route.meta.link" :is="Component" :key="route.path"/>
        </keep-alive>
      </transition>
    </router-view>
    <div v-if="showIndex" class="copyright">Copyright © 2023 victor</div>
    <iframe-toggle />
  </div>
  </section>
</template>

<script setup>
import iframeToggle from "./IframeToggle/index"
import useTagsViewStore from '@/store/modules/tagsView'
const route = useRoute();

const tagsViewStore = useTagsViewStore()

const showCrumb = ref(false)
const showIndex = ref(false)
const isScreen = ref(false)
const levelList = ref([])
function getBreadcrumb() {
  // only show routes with meta.title
  let matched = route.matched.filter(item => item.meta && item.meta.title);
  const first = matched[0]
  levelList.value = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
  if(levelList.value.length>1) {
    if(levelList.value[1].meta.crumb) {
      showCrumb.value = true
    }  else {
      showCrumb.value = false
    }
    if(levelList.value[1].meta.title == '社区中心') {
      isScreen.value = true
    }
   
  } else {
    showCrumb.value = false
  }
  if(levelList.value[0].name == 'Index') {
    showIndex.value = true
  } else {
    showIndex.value = false
  }
}

watchEffect(() => {
  if (route.path.startsWith('/redirect/')) {
    return
  }
  getBreadcrumb()
})
getBreadcrumb();
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  // min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  
  .main-content {
    // min-height: calc(100vh - 110px);
    background: #fff;
    border-radius: 14px;
  }
}
.padding-class {
  padding: 0px 20px 0px 20px;
}
.fixed-header + .app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header + .app-main {
    padding-top: 84px;
  }
}
.copyright {
  font-size: 12px;
  font-family: STHeitiSC;
  line-height: 30px;
  margin-top: 15px;
  text-align: center;
  color: #333333;
  // background: $grey-background;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 17px;
  }
}
</style>