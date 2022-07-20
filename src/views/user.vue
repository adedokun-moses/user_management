<template>
  <div class="container">
    <Nav />

    <h5>
      <router-link to="/home"><i class="fa fa-angle-left"></i></router-link>
      User Record
    </h5>
    <div class="userdet">
      <div class="uppernav">
        <!-- Tab links -->
        <div class="tab">
          <button
            class="tablinks"
            @click="openCity(event, 'London')"
            id="defaultOpen"
          >
            Info
          </button>
          <button class="tablinks" @click="openCity(event, 'Paris')">
            Activities
          </button>
        </div>

        <!-- Tab content -->
        <div id="London" class="tabcontent viewdetails">
          <div class="details_table">
            <table v-for="det in data" :key="det.id">
              <tr>
                <th>First Name</th>
                <td>{{ det.fname }}</td>
              </tr>
              <tr>
                <th>Last Name</th>
                <td>{{ det.lname }}</td>
              </tr>

              <tr>
                <th>Email</th>
                <td>{{ det.email }}</td>
              </tr>

              <tr>
                <th>Country</th>
                <td>{{ det.country }}</td>
              </tr>

              <tr>
                <th>Phone No.</th>
                <td>{{ det.number }}</td>
              </tr>

              <tr>
                <th>Gender</th>
                <td>{{ det.sex }}</td>
              </tr>
            </table>

            <!--   <div v-for="det in data" :key="det.id">
              <p>{{ det.id }}</p>
            </div> -->
          </div>

          <div class="details_table_">
            <table>
              <tr>
                <th>Status</th>
                <td><h5>Active</h5></td>
              </tr>
              <tr>
                <th>Registeration Date</th>
                <td><b>21st June 2022</b></td>
              </tr>
            </table>
          </div>
        </div>

        <div id="Paris" class="tabcontent">
          <h3>Activities </h3>
          <p></p>
        </div>
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
    openCity(evt, cityName) {
      // Declare all variables
      var i, tabcontent, tablinks;

      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }

      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }

      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
      // Get the element with id="defaultOpen" and click on it
      document.getElementById("defaultOpen").click();
    },
  },
};
</script>

<style scoped>
.container {
  background: #f5f5f5;
  height: 100vh;
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
  height: 500px;
}

/* Style the tab */
.tab {
  overflow: hidden;
  background-color: white;
  border-bottom: 1px solid black;
}

/* Style the buttons that are used to open the tab content */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
}

/* Change background color of buttons on hover */
.tab button:hover {
  font-size: 20px;
  /*   padding: 14px 16px; */
  border-bottom: 1px solid green;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
  padding: 14px 16px;
  border-bottom: 1px solid green;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border-top: none;
}

/* Style the view details page content */

.viewdetails {
  display: flex;
  margin-top: 10px;
}
.viewdetails > div {
  width: 100%;
}

/* Style the details table content */
.details_table table {
  border-bottom: 1px solid #d0d3d9;
  border-collapse: collapse;
}

.details_table th,
tr {
  padding: 15px 0px;
  text-align: left;
  border-bottom: 1px solid #d0d3d9;
  border-collapse: collapse;
}

.details_table td {
  padding-left: 150px;
  border-bottom: 1px solid #d0d3d9;
  border-collapse: collapse;
}

.details_table_ table {
  border-bottom: 1px solid #d0d3d9;
  border-collapse: collapse;
}

.details_table_ th,
tr {
  padding: 10px 0px;
  text-align: left;
  border-bottom: 1px solid #d0d3d9;
  border-collapse: collapse;
}

.details_table_ td {
  padding-left: 150px;
  border-bottom: 1px solid #d0d3d9;
  border-collapse: collapse;
}

.details_table_ h5 {
  background: #cdf7ec;
  border-radius: 4px;
  text-align: center;
}

@media only screen and (max-width: 600px) {
  .container h5 {
    margin: 20px 4%;
  }
  .userdet {
    width: 90%;
    margin: auto;
    background: white;
    height: 500px;
  }
  .viewdetails {
    display: flex;
    margin-top: 10px;
    flex-direction: column;
  }
  .details_table td {
    padding-left: 50px;
    border-bottom: 1px solid #d0d3d9;
    border-collapse: collapse;
  }

  .details_table_ td {
    padding-left: 50px;
    border-bottom: 0px solid #d0d3d9;
    border-collapse: collapse;
  }
}
</style>