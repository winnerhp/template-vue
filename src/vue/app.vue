<template>
    <div class="app">
        <v-menu></v-menu>
        <router-view></router-view>
    </div>
</template>

<script>

import VMenu from './Menu.vue';

export default {
    data() {
        return {}
    },
    components: {
        VMenu
    }
}

</script>

<style lang="less">
</style>
