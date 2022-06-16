<template>
  <div class="fof">
    <h1>Error 404!</h1>
    
    <div>
      <RouterLink id="btn_404" class="buttonType1" to="/">Go back to Home</RouterLink>
    </div>
  </div>
</template>

<style scope>
*{
    transition: all 0.6s;
}

#btn_404{
  color: black;
    /* 动画颜色没改 */
}

.fof{
	  display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: pink; */
}

.fof h1{
    /* font-family: 'Lato', sans-serif; */
    color: white;
	  font-size: 50px;
	  display: inline-block;
	  padding-right: 12px;
	  animation: type .5s alternate infinite;
}

@keyframes type{
	  from{box-shadow: inset -3px 0px 0px white;}
	  to{box-shadow: inset -3px 0px 0px transparent;}
}

</style>
