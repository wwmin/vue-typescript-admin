<template>
  <div class="content">
    <div class="content-body padding-30 text-center">
      <h1 style="font-size: 40px; color: green;">正 在 开 发 中 ...</h1>
      <div style="color:#ccc;margin-top:60px">
        <span style='display:inline-block;'>path: <b>{{$route.path}}</b></span>
        <span style='display:inline-block;margin-left:20px'>title: <b>{{$route.meta.text}}</b></span>
        <span style='display:inline-block;margin-left:20px'>name: <b>{{$route.name}}</b></span>
        <span style='display:inline-block;margin-left:20px' v-for="item,key in $route.meta" :key="key">
              {{key}}: <b>{{item}}</b>
            </span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "fourTwoFour",
    props: {},
    data() {
      return {}
    },
    watch: {},
    computed: {},
    methods: {},
    created() {
    },
    mounted() {
    },
    components: {},
    destroyed() {
    },
    activated() {
    },
    deactivated() {
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
</style>
