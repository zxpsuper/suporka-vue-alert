## Introduction

Suporka-vue-alert is a vue tool to show the alert information.

It depend on vue@2.0+ .

You can use the methods(info, success, error) to show different content. 

And you even can change the css by Rewriting and covering the class name.

## Usage
- Install the module

```
npm install suporka-vue-alert
```
- And then import the plugin to your object
```
import Alert from 'suporka-vue-alert'

Vue.use(Alert)
```

And than you can use this plugin in components.

for example:
```
// in vue file
this.$alert.success(options)
```
## Methods
- success(options) alert box of success
- error(options) alert box of error
- info(options) alert box of info

## Options
**type: [String, Object]**

Not only can you use the string type parameter to show the text, but also use the object to set the text and hide time.

```
this.$alert.info('This is a tip.');

this.$alert.success({
  text: 'success',
  time: 3000
})
```

## Github

The above command pulls the template from [zxpsuper/suporka-vue-alert](https://github.com/zxpsuper/suporka-vue-alert), prompts for some information.

## Questions
If you have some questionn, you can send me a E-mail(zxpscau@163.com).
