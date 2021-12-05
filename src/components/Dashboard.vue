<template>
<div>
    <div>
    <header >
        <LMSHeader/>
    </header>
    <div class="dashboard">
        <Sidebar/>
        <div class="content">
            <router-view/>
        </div>
    </div>
    </div>
 

</div>
</template>

<script>
import Sidebar from './Sidebar'
import LMSHeader from './LMSHeader.vue'

export default {
    name: 'home',
    components: {
        Sidebar,
        LMSHeader,

    }
}
</script>

<style>
.dashboard {
    display: grid;
    grid-template-columns: 1fr 5fr;
    height: 100%;
    width: 100%; 
    margin-top: 50px;
    
}
.content {
    margin: 60px 6px 6px 0px;
}
</style>