<template>
  <div class="suporka-alert">
    <transition name="fadeDownBig">
      <div class="alert-content" :class="type" v-show="show">{{text}}</div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    text: "Success!!",
    type: "info",
    time: {
      type: Number,
      default: 3000
    }
  },
  watch: {
    time() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.show = false;
      }, this.time);
    },
    show(val) {
      if (val) {
        this.timer = setTimeout(() => {
          this.show = false;
        }, this.time);
      }
    }
  },
  mounted() {
    this.timer = setTimeout(() => {
      this.show = false;
    }, this.time);
  },
  destroyed() {
    clearTimeout(this.timer)
  }
};
</script> 
<style scoped>
.suporka-alert {
  position: fixed;
  width: 100%;
  top: 10%;
  z-index: 1050;
  text-align: center;
}
.alert-content {
  display: inline-block;
  padding: 8px 16px;
  position: relative;
  border-radius: 6px;
  margin-bottom: 10px;
  color: #495060;
  line-height: 1.5;
  font-size: 16px;
}
.info {
  border: 1px solid #d5e8fc;
  background-color: #eaf4fe;
}
.error {
  border: 1px solid #fbd9d0;
  background-color: #fdece8;
}
.success {
  border: 1px solid #d1f2e1;
  background-color: #e8f9f0;
}
.fadeDownBig-enter-active,
.fadeDownBig-leave-active,
.fadeInDownBig,
.fadeOutDownBig {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.fadeDownBig-enter-active,
.fadeInDownBig {
  -webkit-animation-name: fadeInDownBig;
  animation-name: fadeInDownBig;
}
.fadeDownBig-leave-active,
.fadeOutDownBig {
  -webkit-animation-name: fadeOutDownBig;
  animation-name: fadeOutDownBig;
}
@-webkit-keyframes fadeInDownBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes fadeInDownBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
@-webkit-keyframes fadeOutDownBig {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }
}
@keyframes fadeOutDownBig {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -50px, 0);
    transform: translate3d(0, -50px, 0);
  }
}
</style>
