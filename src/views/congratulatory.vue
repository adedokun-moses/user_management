<template>
    <div class="container">
         <h5>Logo</h5>

        <div class="congrat">
            <h5>Your account has been created successfully </h5>
            <h3><br><span style="padding-top: 10px"><i class="fa fa-spinner fa-3x fa-spin"></i> </span></h3>
                
                  <img src="../assets/pana.png"  alt="welcome">
        </div>
       
    </div>
   
</template>

<script>
export default {
  methods:{

  },
  mounted(){
        setTimeout( () => this.$router.push({ path: '/home'}), 7000);
  }
}
</script>

<style scoped>
.container {
  background: #f5f5f5;
  width: 100%;
  height: 100vh;
}
.container h5 {
  padding: 10px 30px;
  font-size: 40px;
}
.congrat {
    width: 50%;
    margin: auto;
    text-align: center;
}
.congrat h5{
    font-size: 20px;
    color: #1757D4;
    margin: 0px;
}

@media only screen and (max-width: 600px){

.congrat {
    width: 100%;
    margin: auto;
    text-align: center;

}
.container h5 {
  padding: 0px 0px;
  font-size: 20px;
  text-align: center;
}
.congrat img{
  width: 100%;

}
.container h5 {
  padding: 10px 30px;
  font-size: 20px;
}

}
</style>