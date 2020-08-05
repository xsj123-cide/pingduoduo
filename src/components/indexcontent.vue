<template>
    <div class="caidan">
        <div class="top">
            <div class="item" v-for="(item,index) in info[title]['navbar']" :key="index">
                <img :src="item.img" alt="">
                <span>{{item.text}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        title:String,
        info:Object
    },
    created(){
      console.log(this.info['推荐'])
    }
}
</script>
<style lang="less" scoped>
.caidan{
    background-color: white;
    height: 2.8rem;
.top{
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    white-space: nowrap;
    overflow-x: scroll;
    align-items: center;
    padding: .3rem 0rem;
    width: 100%;
}
.top::-webkit-scrollbar-thumb {
            background-color: #100f27;
            border-radius: 5px;
        }，
.top::-webkit-scrollbar {
    width: .3rem;
    // background-color: red;
}
.item{
    flex: 50%;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        height: .6rem;
        width: .6rem;
    }
    span{
        font-size: .17rem;
    }
}
}
</style>