<template>
    <div class="content">
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>

<script>
export default {
    name: 'Content'
}
</script>

<style>
    .content{
        grid-area: content;
        background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
        padding-top:1%;
        padding-left:2%;
        padding-right: 2%;
        justify-content: center        
    }
</style>