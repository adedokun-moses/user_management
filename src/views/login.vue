<template>
  <div class="form-page">
    <h5>Logo</h5>

    <form class="regform"  @submit.prevent="nextPage()">
      <h5>Register With Us</h5>
      <h3>Your are just a few clicks away from using our services</h3>

      <div class="namefield">
        <div class="formgroup">
          <label>First Name </label><br />
          <input
            type="text"
            placeholder="Enter Your First Name" />
        </div>
        <div class="formgroup">
          <label>Last Name </label><br />
          <input type="text" placeholder="Enter Your Last Name" />
        </div>
      </div>

      <div class="formgroup_">
        <label>Email Address </label><br />
        <input
          type="email"
          placeholder="Enter Your First Name"
       
        />
      </div>

      <div class="formgroup_">
        <label>Phone Number </label><br />
        <input type="text" placeholder="Enter Your First Name" />

      </div>
      <div class="formgroup_">
            <vue-tel-input v-model="phone" class="formgroup_1"></vue-tel-input>
      </div>
     
      <div class="formgroup_">
        <label>Gender </label><br />
        <select>
          <option>Female</option>
          <option>Male</option>
          <option>Others</option>
          <option>Prefer Not To Say</option>
        </select>
      </div>
      <div class="formgroup_">
        <button >Register</button>
        <h4>
          Already have an account
          <span><router-link to='#'>Sign Up Here</router-link></span>
        </h4>
      </div>
    </form>
  </div>
</template>

<script>

  import { VueTelInput } from 'vue-tel-input';
export default {
  components: {VueTelInput},
  data(){
return{
  phone:''
}
  },
 methods: {

  nextPage(){
    alert('Welcome')
    this.$router.push('/congratulatory');
  }
 }
}
</script>


<style scoped>
.form-page {
  background: #f5f5f5;
}
.form-page h5 {
  padding: 10px 30px;
  font-size: 40px;
}
.regform {
  width: 50%;
  margin: auto;
}
.regform h5 {
  color: #1244a5;
  text-align: center;
  font-size: 40px;
  margin: 0px;
}
.small {
  font-size: 20px;
}
.regform h3 {
  text-align: center;
  font-size: 15px;
  color: #61666d;
}

.namefield {
  display: flex;
  margin-top: 30px;
}
.namefield > div {
  width: 100%;
}
.formgroup input {
  width: 90%;
  background: #ffffff;
  padding: 15px 10px;
  margin: 10px 0px;
  outline: none;
  border: none;
  border: 1px solid #a3a6ad;
  border-radius: 8px;
}
.formgroup input:focus{
  background: #a3a6ad;
  transition: ease-in 2s background;
}
.formgroup_ input {
  width: 95%;
  background: #ffffff;
  padding: 15px 10px;
  margin: 10px 0px;
  outline: none;
  border: none;
  border: 1px solid #a3a6ad;
  border-radius: 8px;
}
.formgroup_ input:focus{
  background: #a3a6ad;
  transition: ease-in 2s background;
}

.formgroup_ select {
  width: 98%;
  background: #ffffff;
  padding: 15px 10px;
  margin: 10px 0px;
  outline: none;
  border: none;
  border: 1px solid #a3a6ad;
  border-radius: 8px;
}

/* .formgroup_1 {
  width: 95%;
  background: #ffffff;
  padding: 15px 10px;
  margin: 10px 0px;
  outline: none;
  border: none;
  border: 1px solid #a3a6ad;
  border-radius: 8px;
} */

.formgroup_ button {
  width: 98%;
  background: #2d72f7;
  color: white;
  border-radius: 8px;
  padding: 20px 10px;
  margin: 10px 0px;
  outline: none;
  border: none;
  border: 1px solid #a3a6ad;
  cursor: pointer;
}
.formgroup_ h4 {
  text-align: center;
  margin: 10px 0px;
}
.formgroup_ a {
  text-decoration: none;
}

.formgroup_1{
  width: 95%;
  background: #ffffff;
  padding: 10px 10px;
  margin: 10px 0px;
  outline: none!important;
  border: none !important;;
  border: 1px solid #a3a6ad;
  border-radius: 8px;
}



@media only screen and (max-width: 600px){
  .regform {
  width: 90%;
  margin: auto;
}
.form-page h5 {
  padding: 10px 10px;
  font-size: 40px;
  text-align: center;
}


.regform h5 {
  font-size: 20px;
}

.regform h3 {
  text-align: center;
  font-size: 10px;
  color: #61666d;
}
.namefield {
  display: block;
}
.formgroup_ input{
  width: 90%;
}

.formgroup_1{
  width: 90%;

}
.formgroup_ h4 {
  text-align: left;
  margin: 10px 0px;
}


}
</style>