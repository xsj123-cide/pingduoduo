<template>
  <div class="content">
    <ul>
      <li v-for="(item,index) in tabbar" :key="index" @click="active(index)">
        <router-link :to="item.link">
        <div class="img"><img  :src="[activelink==index? item.activeimg:item.img]" alt=""></div>
        <span>{{item.text}}</span>
        </router-link>
      </li>
      
    </ul>
  </div>
</template>

<script>
import getdata from '../rest/tabbar.js'
export default {
  name: '',
  data() {
    return {
      tabbar:[],
      activelink:0
    }
  },
  created() {
    this.tabbar = getdata.get();
  },
  props: {
    
  },
  methods: {
    active(index) {
      this.activelink=index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

.content{
  position: fixed;
  width: 100%;
  background-color: white;
  height: 1rem;
  min-width: 320px;
  max-width: 768px;
  bottom: .0rem;
  border-top: rgb(224, 224, 224) solid 0.5px;
}
ul{
  display: flex;
  height: 100%;
}
ul li {
  position: relative;
  flex:1;
  display: flex;
  flex-direction:column;
  height: 100%;
}
.img{
  position: absolute;
  top:.15rem;
  height: .4rem;
    left: 50%;
  transform: translateX(-50%);
}
ul li img {
  height:100%;
  width: auto;
  vertical-align: top; 
}
ul li span {
  position: absolute;
  bottom:.05rem;
  width: 100%;
  font-size: .15rem;
  text-align: center;
  // line-height: 1;
}

.router-link-active {
  color:red;
}
</style>
