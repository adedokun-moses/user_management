<template>
    <div class="container">
         <h5>Logo</h5>

        <div class="congrat">
            <h5>Your account has been created successfully</h5>
       <!--      <i class="fa fa-spinner"></i> -->
                  <img src="../assets/pana.png"  alt="welcome">
        </div>
       
    </div>
   
</template>

<script>
export default {
  methods:{

  },
  mounted(){
        setTimeout( () => this.$router.push({ path: '/home'}), 4000);
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


</style>