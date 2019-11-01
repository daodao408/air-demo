<template>
    <div class="corner" :class="positionClass" :style="{'border-color':cornerColor}"></div>
</template>

<script>
export default {
    name: 'mapWrapCorner',
    data() {
        return {}
    },
    props: {
        positionClass: {
            type: String,
            default: 'topLeft'
        },
        cornerColor: {
            type: String,
            default: '#141955'
        }
    }
}
</script>

<style lang="scss">
.corner{
    position:absolute;
    width: 0;
    height: 0;
    border-width: 12px;
    border-style: solid;
}

.topLeft{
    left:0;
    top:0;
    border-right-color: transparent !important; 
    border-bottom-color: transparent !important; 
}
.topRight{
    right:0;
    top:0;
    border-bottom-color: transparent !important; 
    border-left-color: transparent !important; 
}
.bottomLeft{
    left:0;
    bottom:0;
    border-top-color: transparent !important; 
    border-right-color: transparent !important; 
}
.bottomRight{
    right:0;
    bottom:0;
    border-top-color: transparent !important; 
    border-left-color: transparent !important; 
}
</style>