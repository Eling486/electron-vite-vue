<template>
  <div class="container">
    <router-view v-slot="{ Component }">
      <transition name="slide-fade">
        <component :is="Component" />
      </transition>
    </router-view>
    <AppInfo></AppInfo>
  </div>
</template>

<script>
import AppInfo from "@/renderer/components/app_info.vue";

export default {
  name: "app",
  components: {
    AppInfo,
  }
};
</script>

<style lang="scss">
.container {
  background: $background;
  height: 100vh;
  padding: 5vh 10vw;
  width: 100vw;
  min-width: 600px;
  overflow: hidden;
  color: $color-text;
}

.title {
  color: $color-text;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 6px;

  &.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }
}

* {
  font-family: "Microsoft YaHei";
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: $color-text;
}

button {
  outline: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(2, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  left: 0;
  right: 0;
  transform: translateY(10px);
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.4s ease;
}
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background-color: transparent;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
}
::-webkit-scrollbar-thumb {
  background-color: #d7d7d7;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    background-color: #b3b3b3;
  }
}
</style>
