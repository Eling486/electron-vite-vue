<template>
  <div class="wrapper">
    <img
      id="logo"
      src="~@/renderer/assets/images/logo-text.png"
      alt="electron-vite"
    />
    <main>
      <div class="left-side">
        <span class="welcome">Hello, electron-vite-vue!</span>
        <div class="vuex-example">
          <div class="name">Vuex Example</div>
          <div class="time">
            <div class="time-text">
              Time: <span class="span-data">{{ time }}</span>
            </div>
            <button class="update" @click="updateTime">Update</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "landing-page",
  components: {
  },
  data() {
    const time = "Please click the Update botton";
    return {
      time,
    };
  },
  methods: {
    updateTime() {
      this.$store.dispatch("time/getTime");
      this.time = this.formatTime(this.$store.state.time.time);
    },
    formatTime(date) {
      let y = date.getFullYear();
      let m = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
      let d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      let h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      let min = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      let s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

      let formatted = `${y}-${m}-${d} ${h}:${min}:${s}`;
      return formatted;
    },
  },
};
</script>

<style scoped lang="scss">
#logo {
  height: auto;
  margin-bottom: 20px;
  width: 600px;
}

main {
  display: flex;
  justify-content: space-between;

  > div {
    flex-basis: 50%;
  }
}

button {
  font-size: 0.8em;
  cursor: pointer;
  outline: none;
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  color: $color-btn-text;
  background-color: transparent;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid $color-btn;

  &:hover {
    color: $color-btn-text-hover;
    background-color: $color-btn;
  }
}

.left-side {
  display: flex;
  flex-direction: column;
}

.welcome {
  color: $color-text;
  font-size: 23px;
  margin-bottom: 20px;
}

.vuex-example{
  .name{
    font-size: 18px;
    font-weight: bold;
    color: $color-text;
    margin-bottom: 10px;
  }
  .time-text{
    color: $color-name;
    margin-bottom: 10px;

    .span-data {
      color: $color-vue-1;
      font-weight: bold;
    }
  }
}
</style>