<template>
  <div class="app-info">
    <div class="items">
      <div class="item">
        <span class="name">Platform</span>
        <span class="value">{{ platform }}</span>
      </div>
      <div class="item">
        <span class="name">Version</span>
        <span class="value">{{ version }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app_info',
    data () {
      return {
        platform: window.$electron.platform,
        version: window.$electron.packageJson.version
      }
    }
  }
</script>

<style scoped lang="scss">
  .app-info {
    position: fixed;
    bottom: 0;
    left: 0;
    font-size: 12px;
  }

  .items { 
    display: flex;
    flex-direction: row;
    margin-top: 8px;
  }

  .item {
    display: flex;
    margin: 0 5px 2px 5px;
  }

  .item .name {
    color: $color-name;
    margin-right: 6px;
  }

  .item .value {
    color: $color-value;
    font-weight: bold;
  }
</style>
