<template>
  <Nav />

  <div class="container">
    <div class="table_det">
      <div class="user">
        <h5>Add User</h5>

        <button>
          <i class="fa fa-bell" style="margin-right: 10px"></i>Add New User
        </button>
      </div>

      <div class="search_div">
        <div>
          <label
            ><input type="checkbox" name="select" id="" value="Select" /><span
              style="margin-left: 10px"
              >Select</span
            ></label
          >
        </div>
        <div class="btn_search">
          <div class="dropdown">
            <button @click="open_btn" class="dropbtn">
              <i class="fa fa-filter" style="margin-right: 5px"></i> Filter By
              Country
            </button>
            <div
              v-if="openBtn == true"
              class="dropdown-content"
              :class="{ 'navbar--hidden': !showNavbar }"
            >
              <i class="fa fa-search iconsubmit"></i>

              <input
                class="fa fa-search"
                type="text"
                placeholder="Search.."
                id="myInput"
                v-model="search"
              />
              <div v-for="fruit in filteredList()" :key="fruit">
                <a>{{ fruit }}</a>
              </div> 
           
              <!--   <a href="#about">Ghana</a>
              <a href="#base">Base</a>
              <a href="#blog">Blog</a>>
              <a href="#contact">Contact</a>  -->
              <button>Apply Filter</button>
            </div>
          </div>

          <div class="search__btn">
            <i class="fa fa-search iconsubmit_2"></i>
            <input
              class="fa fa-search"
              type="text"
              placeholder="Search..."
              id="myInput_2"
            />
          </div>

          <div class="search__btn">
            <button>Search</button>
          </div>
        </div>
      </div>

      <div class="col-table">
        <table>
          <tr>
            <th>All</th>
            <th>S/N</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Sex</th>
            <th>Country</th>
            <th>Action</th>
          </tr>

          <tr v-for="det in data" :key="det.id" class="data_details">
            <td>
              <input
                type="checkbox"
                :value="det.id"
                v-model="datacheck"
                @change="checklist($event)"
              />
            </td>
            <td>{{ det.id }}</td>
            <td>{{ det.fname }}</td>
            <td>{{ det.lname }}</td>
            <td>{{ det.email }}</td>
            <td>{{ det.number }}</td>
            <td>{{ det.sex }}</td>
            <td>{{ det.country }}</td>
            <td>
              <div class="dropdown actionbtn">
                <button @click="open_Action(det.id)">...</button>
                <div
                  v-if="openAction == det.id"
                  class="dropdown-content_action"
                  :class="{ 'navbar--hidden': !showAction }"
                >
                  <button
                    style="background: #2d72f7; color: white"
                    @click="wel()"
                  >
                    View
                  </button>
                  <button
                    style="background: #2d72f7; color: white"
                    @click="update()"
                  >
                    <i class="fa fa-file"></i> Update
                  </button>
                  <button
                    style="background: white; border: 1px solid red; color: red"
                  >
                    <Modal></Modal>
                  </button>
                  <button style="background: red">
                    <i class="fa fa-trash" style="margin-right: 5px"></i> Delete
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </table>

        <div class="pagination">
          <a href="#" style="border: none">&laquo; Prev. </a>
          <a href="#" class="active">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">7</a>
          <a href="#" style="border: none"> Next &raquo;</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/nav.vue";
import Modal from "../components/deletemodal.vue";
import jsonData from "/db.json";
//import { ref } from "vue";
export default {
  components: { Nav, Modal },
  data() {
    return {
      data: jsonData,
      openBtn: false,
      showNavbar: true,
      openAction: "",
      showAction: true,
      openmodal: true,
     search: "",
    fruits: ["apple", "banana", "orange", "moses", "mike"],
      formdet: [
        /*         {
          check: "L",
          id: 1,
          fname: "John",
          lname: "Abubakar",
          email: "adedokunmoses.1450@gmail.com",
          number: 2348034345656,
          sex: "Male",
          country: "Nigeria",
        },
        {
          check: "L",
          id: 2,
          fname: "John",
          lname: "Abubakar",
          email: "adedokunmoses.1450@gmail.com",
          number: 2348034345656,
          sex: "Male",
          country: "Nigeria",
        },

        {
          check: "L",
          id: 3,
          fname: "John",
          lname: "Abubakar",
          email: "adedokunmoses.1450@gmail.com",
          number: 2348034345656,
          sex: "Male",
          country: "Nigeria",
        },

        {
          check: "L",
          id: 4,
          fname: "John",
          lname: "Abubakar",
          email: "adedokunmoses.1450@gmail.com",
          number: 2348034345656,
          sex: "Male",
          country: "Nigeria",
        },

        {
          check: "L",
          id: 5,
          fname: "John",
          lname: "Abubakar",
          email: "adedokunmoses.1450@gmail.com",
          number: 2348034345656,
          sex: "Male",
          country: "Nigeria",
        },

        {
          check: "L",
          id: 6,
          fname: "John",
          lname: "Abubakar",
          email: "adedokunmoses.1450@gmail.com",
          number: 2348034345656,
          sex: "Male",
          country: "Nigeria",
        },
        {
          check: "L",
          id: 7,
          fname: "John",
          lname: "Abubakar",
          email: "adedokunmoses.1450@gmail.com",
          number: 2348034345656,
          sex: "Male",
          country: "Nigeria",
        }, */
      ],
    };
  },
  /*    mounted() {
    fetch('db.json')
      .then((res) => res.json())
      .then((data) => (this.formdet = data))
      .catch((err) => console.log(err.message));
  }, */

  methods: {
    open_btn() {
    //  alert(this.openBtn);
      if (this.openBtn == true) {
        return (this.openBtn = false);
      }
      return (this.openBtn = true);
    },
    checklist(e) {
      console.log(e.target.value);
      console.log(e.target.checked);
    },

    open_Action(id) {
      //  alert(this.openAction);
      if (this.openAction == "") {
        return (this.openAction = id);
      }
      return (this.openAction = "");
    },
    wel() {
    //  alert("working");
      this.$router.push("/user:id");
    },

    update() {
    //  alert("updated");
      this.$router.push("/update:id");
    },

    modal() {
    //  alert(this.openmodal);
      if (this.openmodal == true) {
        return (this.openmodal = false);
      }
      return (this.openmodal = false);
    },

    

    filteredList() {
      return this.fruits.filter((fruit) => {
        return fruit.toLowerCase().includes(this.search.toLowerCase())
      }
       
      );
    },
    

    
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  margin: auto;
  background: #f5f5f5;
}
.table_det {
  width: 90%;
  margin: auto;
}
.user {
  overflow: auto;
  padding: 20px 0px;
}
.user h5 {
  float: left;
  font-size: 30px;
}

.user button {
  float: right;
  background: #2d72f7;
  padding: 10px;
  border: none;
  color: white;
  outline: none;
  border-radius: 6px;
}
.search_div {
  display: flex;
}
.search_div > div {
  width: 100%;
}
.btn_search {
  display: flex;
}
.btn_search > div {
  margin: 0px 0px 0px 10px;

  width: 100%;
}
.dropbtn {
  background-color: #f5f5f5;
  color: blue;
  padding: 10px 5px;
  border: 2px solid blue;
  font-size: 10px;
  cursor: pointer;
  border-radius: 6px;
}
.iconsubmit {
  position: relative;
  font-size: 1.3em;
  z-index: 1;
  right: -5px;
  top: 1px;
  color: #7b7b7b;
  width: 0;
}
#myInput {
  box-sizing: border-box;
  /*  background-image: url('searchicon.png'); */
  background-position: 14px 12px;
  background-repeat: no-repeat;
  font-size: 10px;
  padding: 14px 20px 12px 45px;
  border: none;
  outline: none;
  border-radius: 4px;
  border-bottom: 1px solid #ddd;
}
.dropdown {
  position: relative;
  display: block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: block;
  position: absolute;
  background-color: #f6f6f6;
  min-width: 230px;
  border: 1px solid #ddd;
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content button {
  width: 90%;
  margin: 10px 10px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 15px;
  border-radius: 10px;
  background: blue;
}

.iconsubmit_2 {
  position: relative;
  font-size: 1.3em;
  z-index: 1;
  right: -5px;
  top: 1px;
  color: #7b7b7b;
  width: 0;
}

#myInput_2 {
  background-color: #f5f5f5;
  padding: 10px 50px;
  border: 1px solid #b0b3b9;
  font-size: 12px;
  /*   cursor: pointer; */
  border-radius: 6px;
  outline: none;
}
.search__btn button {
  color: white;
  padding: 10px 50px;
  border: 2px solid blue;
  background: #2d72f7;
  font-size: 10px;
  cursor: pointer;
  border-radius: 6px;
}

.col-table {
  width: 100%;
  background: white;
  margin: 30px 0px 0px 0px;
  height: 600px;
}

table {
  width: 100%;
}
table th {
  padding: 20px 0px 0px 30px;
  font-size: 15px;
  margin: 0px;
  text-align: left;
}
.data_details td {
  text-align: left;
  padding: 20px 30px;
}
.data_details button {
  background: #d0d3d9;
  padding: 2px 10px;
  border-radius: 3px;
  border: 1px solid #d0d3d9;
}

/*  >>>>>>>>>> pagination >>>>>>>>>>>>>>>>>>>> */

.pagination {
  width: 50%;
  margin: auto;
  padding: 30px 0px 0px 50px;
}
.pagination a {
  text-decoration: none;
  padding: 15px;
  text-align: center;
  background: #ffffff;
  border: 1px solid #b0b3b9;
  border-radius: 30px;
  margin: 0px 5px;
}
.pagination a.active {
  background: blue;
  color: white;
}

/*  >>>>>>>>>> Edit Button >>>>>>>>>>>>>>>>>>>> */

/* Dropdown Content (Hidden by Default) */
.dropdown-content_action {
  position: absolute;
  right: 3px;
  background-color: white;
  min-width: 400px;
  margin-right: 50px;
  bottom: 0;
  z-index: 1;
}

.dropdown-content_action button {
  color: white;
  outline: none;
  border: none;
  width: 20%;
  padding: 8px 10px;
  border-radius: 6px;
  margin: 0px 5px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
}

@media (max-width: 800px) {
  .search_div {
    display: flex;
    flex-direction: column;
  }
  .btn_search {
    display: flex;
    flex-direction: column;
  }
  .dropdown {
    position: relative;
    display: block;
  }
  .dropbtn {
    width: 97%;
    margin: 10px 0px;
  }

  #myInput_2 {
    background-color: #f5f5f5;
    padding: 10px 40px;
    border: 1px solid #b0b3b9;
    font-size: 12px;
    cursor: pointer;
    border-radius: 6px;
    outline: none;
    width: 70%;
  }
  .search__btn button {
    color: white;
    padding: 10px 0px;
    border: 2px solid blue;
    background: #2d72f7;
    font-size: 10px;
    cursor: pointer;
    border-radius: 6px;
    margin: 10px 0px;
    width: 97%;
  }
  .col-table {
    width: 100%;
    overflow: auto;
  }

  /*  >>>>>>>>>> pagination >>>>>>>>>>>>>>>>>>>> */

  .pagination {
    width: 100%;
    margin: 10px;
    padding: 0px 0px 0px 10px;
  }
  .pagination a {
    text-decoration: none;
    padding: 5px;
    text-align: center;
    background: white;
    border: 1px solid #b0b3b9;
    border-radius: 10px;
    margin: 0px 5px;
  }
  .pagination a.active {
    background: blue;
    color: white;
  }
}
</style>