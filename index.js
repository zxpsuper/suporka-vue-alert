import NwdLoadingComponent from './alert'

let $vm;

export default {
  install(Vue, options) {
    if (!options) {
      options = {}
    }
    if (!$vm) {
      const NwdLoadingPlugin = Vue.extend(NwdLoadingComponent);
      $vm = new NwdLoadingPlugin({
        el: document.createElement('div')
      });
    }
    $vm.show = false;
    let alert = {
      info(text) {
        if (typeof text === 'string') {
          $vm.text = text;
        } else if (typeof text === 'object') {
          if ('text' in text) $vm.text = text.text
          if ('time' in text) $vm.time = text.time
        }
        $vm.show = true;
        $vm.type = 'info';
        document.body.appendChild($vm.$el);
      },
      success(text) {
        if (typeof text === 'string') {
          $vm.text = text;
        } else if (typeof text === 'object') {
          if ('text' in text) $vm.text = text.text
          if ('time' in text) $vm.time = text.time
        }
        $vm.show = true;
        $vm.type = 'success';
        document.body.appendChild($vm.$el);
      },
      error(text) {
        if (typeof text === 'string') {
          $vm.text = text;
        } else if (typeof text === 'object') {
          if ('text' in text) $vm.text = text.text
          if ('time' in text) $vm.time = text.time
        }
        $vm.show = true;
        $vm.type = 'error';
        document.body.appendChild($vm.$el);
      },
    };
    if (!Vue.$alert) {
      Vue.$alert = alert;
    }
    // Vue.prototype.$alert = Vue.$alert;
    Vue.mixin({
      created() {
        this.$alert = Vue.$alert;
      }
    })
  }
}
