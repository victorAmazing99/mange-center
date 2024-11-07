<template>
  <div class="sidebar-logo-container" :class="{ 'collapse': collapse }" >
    <transition name="sidebarLogoFade">
      <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
        <div v-if="logo" class="logo-img">
        <img :src="logo" class="sidebar-logo" />
        </div>
        <h1 v-else class="sidebar-title" >{{ title }}</h1>
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <div v-if="logo" class="logo-img">
        <img :src="logo" class="sidebar-logo" />
        </div>
        <h1 class="sidebar-title">{{ title }}</h1>
      </router-link>
    </transition>

  </div>
</template>

<script setup>
import variables from '@/assets/styles/variables.module.scss'
import logo from '@/assets/images/logo.png'
import useSettingsStore from '@/store/modules/settings'

defineProps({
  collapse: {
    type: Boolean,
    required: true
  }
})

const title = ref('管理中心');
const settingsStore = useSettingsStore();
const sideTheme = computed(() => settingsStore.sideTheme);
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 110px;
  align-items: center;
  padding: 30px 0px 0px 0px;
  // line-height: 70px;
  background: #fff;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 55px;
      height: 55px;
      vertical-align: middle;
      margin-right: 12px;

    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #333333;
      font-weight: 700;
      // line-height: 50px;
      font-size: 16px;
      vertical-align: middle;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
.logo-img {
  width: 100%;
  height: 35px;
  margin-bottom: 20px;
}
</style>