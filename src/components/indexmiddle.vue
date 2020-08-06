<template>
    <div class="middle pad">
        <div class="top pad">
            <span>新人专享</span>
            <span>爆款热卖，包邮到家</span>
            <span>查看更多</span>
            <div></div>
        </div>
        <div class="bottom">
            <div class ="itema">
                <img src="https://images.pinduoduo.com/mrk/2019-12-26/7b93a35e-f7a9-4c64-aeff-0e16c5b98f25.gif?imageView2/2/w/1300/q/80/format/webp" alt="">
            </div>
            <div class ="itema">
                <img src="https://images.pinduoduo.com/mrk/2019-11-10/a989c78f-741d-4dd7-aa73-32d5f53b42b7.jpg?imageView2/2/w/1300/q/80/format/webp" alt="">
                <span>袜子女中筒袜韩版</span>
                <span>
                    <span>新人价格</span> $3.33
                </span>

            </div>
            <div class ="itema">
                <img src="https://images.pinduoduo.com/mrk/2019-11-10/a989c78f-741d-4dd7-aa73-32d5f53b42b7.jpg?imageView2/2/w/1300/q/80/format/webp" alt="">
                <span>袜子女中筒袜韩版</span>
                <span>
                    <span>新人价格</span> $3.33
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.middle {
    margin-top:.12rem;
    background-color: white;
    height: 4rem;
    width: 100%;
}
.top{
    display: flex;
    padding-top: .18rem;
    padding-bottom: .18rem;
    align-items: center;
    span {
        flex:1;
        font-size: .2rem;
        color: gray;
    }
    span:first-child {
        color: black;
        font-weight: 800;
        padding-right: .05rem;
    }
    span:nth-child(2) {
        flex:3;
        padding: 0rem 0.3rem;
        border-left: rgb(194, 194, 194) solid .02rem;
    }
    div {
        width: .15rem;
        height: .15rem;
        border-top: gray  solid .04rem;
        border-right: gray solid .04rem;
        transform: rotate(45deg);
    }
}
.bottom {
    display: flex;
    height: 3.02rem; 
    width: 100%; 
    .itema{
        flex: 1;
        display: flex;
        flex-direction: column; 
        align-items: center;   
        white-space: nowrap;
        line-height: .4rem;
        img {
            width: 100%;
            border-radius: .09rem;
        }
        span {
            margin-top: 0rem;
            font-size: .15rem;
        }
        span:nth-child(3) {
            color: red;
            >span {
                padding:.04rem;
                border-radius: .06rem;
                background-color: red;
                color: white;  
            }
        }
    }
    .itema:nth-child(-n+2) {
        margin-right:.2rem
    }
}
</style>