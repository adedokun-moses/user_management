<template>
  <div class="container">
    <Nav />
    <h5>
      <router-link to="/home"><i class="fa fa-angle-left"></i></router-link>
      User Record
    </h5>
    <div class="userdet">
      <div class="updateform">
        <form v-for="det in data" :key="det.id" @submit.prevent="formupdate()">
          <div class="namefield">
            <div class="formgroup">
              <label>First Name </label><br />
              <input
                type="text"
                placeholder="Enter Your First Name"
                :value="det.fname"
              />
            </div>
            <div class="formgroup">
              <label>Last Name </label><br />
              <input
                type="text"
                placeholder="Enter Your First Name"
                :value="det.lname"
              />
            </div>
          </div>

          <div class="formgroup_">
            <label>Email Address</label><br />
            <input
              type="email"
              placeholder="Enter Your First Name"
              :value="det.email"
            />
          </div>
          <div class="formgroup_">
            <label>Phone Number </label><br />
            <input
              type="text"
              placeholder="Enter Your First Name"
              :value="det.number"
            />
          </div>

          <div class="formgroup_">
            <label>Country </label><br />
            <input
              type="text"
              placeholder="Enter Your First Name"
              :value="det.country"
            />
          </div>
          <div class="formgroup_">
            <label>Gender </label><br />
            <select :value="det.sex">
              <option>Female</option>
              <option>Male</option>
              <option>Others</option>
              <option>Prefer Not To Say</option>
            </select>
          </div>

          <button class="btn">Save Chnages</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/nav.vue";
import jsonData from "/singledb.json";
export default {
  components: { Nav },

  data() {
    return {
      data: jsonData,
      id: this.$route.params.id,
    };
  },
  methods: {
    formupdate() {
      alert("Form Updated");
      this.$router.push("/home");
    },
  },
};
</script>

<style scoped>
.container {
  background: #f5f5f5;
  height: 780px;
}
.container h5 {
  margin: 20px 10%;
  font-size: 20px;
}
.container i {
  background: #ffffff;
  padding: 10px;
  margin: 0px 5px;
  border-radius: 4px;
}
.userdet {
  width: 79%;
  margin: auto;
  background: white;
  height: 550px;
}

/* Form Design */
.updateform {
  width: 60%;
  margin: auto;
}
form {
  padding-top: 10px;
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
.formgroup input:focus {
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

.btn {
  background: #2d72f7;
  float: right;
  margin: 10px 16px;
  padding: 15px;
  border-radius: 5px;
  outline: none;
  border: none;
  color: white;
}

@media only screen and (max-width: 600px) {
  .container h5 {
  margin: 20px 3%;
}
  .namefield {
    display: block;
    width: 90%;
    margin: auto;
    padding-top: 20px;
   
  }
  .userdet {
  width: 100%;
  margin: auto;
  background: white;
  height: 630px;
  }

.updateform {
  width: 100%;
  margin: auto;
}
 .formgroup input{
  width: 95%;
 }

  .formgroup_ {
    width: 90%;
    margin: auto;
  }
 
  .formgroup_ select {
   width: 100%;
  }
}




</style>