<template>
    <div class="app-container">
        <div class="app-content">
            <div class="app-header">
                <img width="120" src="./assets/logo.png">
                <h2>먹킷리스트</h2>
            </div>
            <MukkitList/>
        </div>
    </div>
</template>

<script>
import MukkitList from './components/MukkitList'

export default {
  name: 'app',
  components: {
    MukkitList
  }
}
</script>

<style>
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

html, body {
    position: relative;
    height: 100%;
    padding: 0;
    margin: 0;
}

html, body, input, textarea, select, button {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 18px;
}

.app-container {
    display: table;
    table-layout: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.app-container .app-header {
    text-align: center;
}

.app-container .app-content {
    display: table-cell;
    vertical-align: middle;
}
</style>
