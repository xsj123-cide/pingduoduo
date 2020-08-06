<template>
  <div class="pad list ">
      <div class="item" v-for="(item,index) in productlist" :key="index">
        <img :src="item.mainimg" alt="">
        <div class="text">
          <div>{{item.text}}</div>
          <div>
            <span>￥{{item.price}}</span>
            <span>已拼{{item.pinged}}件</span>
          </div>
        </div>     
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  props: {
    productlist:Array
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
.list{
  margin-top: .1rem;
  background-color: white;
}
.item{
  height: 3rem;
  display: flex;
  padding: .2rem 0rem;
  border-bottom: .02rem solid rgb(228, 228, 228);
  img {
    height: 100%;
    border-radius: .1rem;
  }
  .text {
    display: flex;
    padding: 0rem .28rem;
    line-height: .35rem;
    font-size: .2rem;
    flex-direction: column;
    justify-content: space-between;
    div:last-child {
      color: red;
      span:last-child {
        margin-left: .2rem;
        color: gray;
      }
    }
  }
}
</style>