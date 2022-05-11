<template>
  <div>
    <img src="../assets/logo.png" class="logo"/>
    <div class="drawerMenu">
      <div class="greenDiv"></div>  
      <div class="drawerTitle">
        <img src="../assets/greenHands.svg" />
        <span>Notas fiscais</span>
      </div>
    </div>
  </div>
</template>

<style>
.logo{
  width: 80%;
  margin: 20px;
}

.drawerMenu{
  display: flex;
  align-items: center;
  height: 64px;
}

.greenDiv{
  width: 4px;
  height: 100%;
  background-color: #00AD8C;
  border-radius: 4px;
  margin-right: 10px;
}

.drawerTitle{
  display: flex;
  margin-left: 10px;
  color: #00AD8C;
}

.drawerTitle img{
  width: 40px;
  margin-right: 10px;
}

.drawerTitle span{
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
}
</style>