<template>
  <button @click="openModal()" id="myBtn">Deactivate</button>

  <!-- The Modal -->
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">&times;</span>
      <p>Delete User?</p>
      <h5>Deleting a user will permanently<br>remove the user from the system</h5>
      <button>Keep User</button>
      <button style="background: red; color: white;"><i class="fa fa-trash" style="margin-right: 15px;"></i>Delete User</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openModal() {
      //alert("working");
      // Get the modal
      var modal = document.getElementById("myModal");

      // Get the button that opens the modal
      var btn = document.getElementById("myBtn");

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks on the button, open the modal
      btn.onclick = function () {
        modal.style.display = "block";
      };

      // When the user clicks on <span> (x), close the modal
      span.onclick = function () {
        modal.style.display = "none";
      };

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    },
  },
};
</script>

<style scoped>
button{
     background: white; 
     border: 0px solid white;
    color: red;
    cursor: pointer;
    
}
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 40%; /* Could be more or less, depending on screen size */
  color: black;
  border-radius: 8px;
  height: 200px;
 
}

.modal-content p{
    font-size: 20px;
}
.modal-content h5{   
    margin: 10px 0px; 
}
.modal-content button{
    padding: 13px ;
    border:  2px solid #F5F5F5;
    background: #F5F5F5;
    margin: 5px;
    width: 30%;
    border-radius: 8px;
    margin-top: 20px;
    color: black;
  
}
/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

@media only screen and (max-width: 600px){
  .modal-content {
    width: 80%;
  }

  .modal-content button{
    padding: 13px ;
    border:  2px solid #F5F5F5;
    background: #F5F5F5;
    margin: 5px;
    width: 50%;
    border-radius: 8px;
    margin-top: 20px;
    color: black;
  
}
}
</style>

