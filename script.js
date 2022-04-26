// var text_ele,icon_ele
// function addEmail() {
//   var i = document.createElement("input");
//   var mail = document.getElementById("mail");
//   i.type = "email";
//   i.placeholder = "email";
//   i.setAttribute("class", "email_c");
//   i.style.marginLeft = "18.5%";
//   var icon2 = document.createElement("img");
//   icon2.src = "minus-solid.svg";
//   icon2.style.width = "20px";
//   icon2.setAttribute("class", "dele");
//   icon2.setAttribute("onclick",'del()')
//   mail.appendChild(i);
//   mail.appendChild(icon2);
//   text_ele = i
//   icon_ele = icon2

// }

// function del(){

//   var mail = document.getElementById("mail");

//   mail.removeChild(text_ele);
//   mail.removeChild(icon_ele);
//   location.reload()


// }



// var dell = document.getElementsByClassName("dele");
// for (let i = 0; i < dell.length; i++) {
//   dell[i].addEventListener("click", () => {
//     alert("kdfgrui")
//   });
// }
// var india_city =["Mumbai","Delhi","Bangalore"]

// var other_city =["Canada","Paris","France"]

// window.onload = function (){
//     var country = document.getElementById("country").value
//     var city = document.getElementById("city")

//     country.onchange = function (){

//         if(country==="India"){
//             var district = stateObject[countySel.value][this.value];
// for (var i = 0; i < district.length; i++) {
// districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
// }

//         }

//     }

// }

function addEmail() {

  var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var email_val = document.getElementById("email").value;

  if (!validRegex.test(email_val)) {

    email_div.innerHTML = "invalid email"
    email_div.style.color = 'red'
    return
  }
  else{
  var total_text = document.getElementsByClassName("email_c");
  total_text = total_text.length + 1;
  document.getElementById("mail").innerHTML = document.getElementById("mail").innerHTML +
    "<p id='input_text" + total_text + "_wrapper'><input type='email' class='email_c' id='input_text" + total_text + "' placeholder='Email'  style='margin-left: 18%;'><img src='minus-solid.svg' width='15px' onclick=remove_field('input_text" + total_text + "');></p>";
  }
  }


function remove_field(id) {
  
  document.getElementById(id + "_wrapper").innerHTML = "";
}

//   function removeCell(rowid) {
//     var table = document.getElementById(rowid).remove();
//   }

var stateObject = {
  India: {
    Delhi: ["Delhi"],
    Mumbai: ["Mumbai"],
    Hyderabad: ["Hyderabad"],
    Ahmedabad: ["Ahmedabad"],
    Chennai: ["Chennai"],
    Kerala: ["Kerala"],
    Goa: ["Goa"],
  },
  Other: {
    Canada: ["Canada"],
    Paris: ["Paris"],
    France: ["France"],
    London: ["London"],
  },
};
window.onload = function () {
  var countySel = document.getElementById("countySel"),
    stateSel = document.getElementById("stateSel");

  for (var country in stateObject) {
    countySel.options[countySel.options.length] = new Option(country, country);
  }
  countySel.onchange = function () {
    stateSel.length = 1;

    for (var state in stateObject[this.value]) {
      stateSel.options[stateSel.options.length] = new Option(state, state);
    }
  }
  var booker = document.getElementById("booker");

  var att = localStorage.getItem("adver");
  var arr = JSON.parse(att);


  for (var key in arr) {
    booker.options[booker.options.length] = new Option(arr[key].name, arr[key].name);
  }
showme()
showus()
}




function addItem() {

  
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var country = document.getElementById("countySel").value;
  var city = document.getElementById("stateSel").value;
  var email = document.getElementsByClassName("email_c");
  var email_val = document.getElementById("email").value;
  var email_div = document.getElementById('email_div')
  var attr = localStorage.getItem("adver");
  var name_div = document.getElementById("name_div")
  var newr = JSON.parse(attr);
  for (let key in newr) {
    if (newr[key].name == name) {
      document.getElementById("name_div").innerHTML = "This entry is already done"
      name_div.style.color = 'red'
      return
    }
    else{
      document.getElementById("name_div").innerHTML = ""

    }
  }
  var regex_name =/^[A-Za-z ]{3,200}$/


  if(regex_name.test(name)){

    document.getElementById("name_div").innerHTML = ""
    

  }
  else{
    document.getElementById("name_div").innerHTML = "Name should not contain number or special characters and more then 3 charactres required"
    name_div.style.color = 'red'
    return
  }




  var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // if (!validRegex.test(email_val)) {

  //   email_div.innerHTML = "invalid email"
  //   email_div.style.color = 'red'
  //   return
  // }
  var che = []
  for(let i=0; i<email.length; i++){
   
    che.push(email[i].value);
    if (!validRegex.test(che[i])) {
    

      email_div.innerHTML = "invalid email in box number:" + parseInt(i+1)
      email_div.style.color = 'red'

      // alert("invalid email in box number:"+parseInt(i+1))
  
      return
      
    }
    else{
     email_div.innerHTML = ""

    }
  }

  
  var phone_div=document.getElementById('phone_div')


  const regex3 = /^\d{10}$/gmis;
  if (!regex3.test(phone) || phone < 0) {
    phone_div.innerHTML = "Invalid Phone Number"
    phone_div.style.color = 'red'
    return

  }
  else{
   phone_div.innerHTML = ""


  }

  var fill_data = document.getElementById('fill_data')

  if (name.match(/^ *$/) !== null || phone.match(/^ *$/) !== null || country.match(/^ *$/) !== null || city.match(/^ *$/) !== null || name == null || name == null || email == null || country == null || city == null) {

    document.getElementById('fill_data').innerHTML = "Please fill the all data"
    fill_data.style.color = "red"
   
    return

  }
  else{
    document.getElementById("fill_data").innerHTML = ""

  }









  var arr_e = [];
  for (let i = 0; i < email.length; i++) {
    arr_e.push(email[i].value);

    // var str_e =
    // alert(str_e)
    var str_e = arr_e.join(",");
  }

  let obj = {
    name: `${name}`,
    email: `${str_e}`,
    phone: `${phone}`,
    country: `${country}`,
    city: `${city}`,
  };









  var attr = localStorage.getItem("adver");
  var newr = JSON.parse(attr);

  var arr1 = localStorage.getItem("adver");
  if (arr1 == null) {
    var arr = [];
    arr.push(obj);
    localStorage.setItem("adver", JSON.stringify(arr));
  } else {
    var newarr = JSON.parse(arr1);
    newarr.push(obj);
    localStorage.setItem("adver", JSON.stringify(newarr));
  }

  location.reload();

}



function addadv() {

  var name_b = document.getElementById("booker").value
  var date = document.getElementById("date").value

  var num_adv = document.getElementById("adv").value
  var charge

  if (name_b.match(/^ *$/) !== null || date.match(/^ *$/) !== null || num_adv.match(/^ *$/)) {

    alert("Please select all the coloum")
    return

  }

  if (num_adv <= 3) {
    charge = num_adv * 300

  }
  if (num_adv > 3) {
    let val = num_adv - 3;
    let discount = 90 * val;
    charge = (num_adv * 300) - discount
  }

  var space = document.getElementById("charge")

  space.innerHTML = '<p> You will get 30% discount above 3 advertisment if you select above 3 so your final paying charge is  </p>' + charge


  var attr = localStorage.getItem("adver");
  var attr2 = localStorage.getItem("adver2");
  var newarr = JSON.parse(attr);
  var newarr2 = JSON.parse(attr2);







  let obj = {
    name: `${name_b}`,
    date: `${date}`,
    charge: `${charge}`


  }

  var arr1 = localStorage.getItem("adver2");
  if (arr1 == null) {
    var arr = [];
    arr.push(obj);
    localStorage.setItem("adver2", JSON.stringify(arr));
  } else {
    var newarr = JSON.parse(arr1);
    newarr.push(obj);
    localStorage.setItem("adver2", JSON.stringify(newarr));

  }


  for (let key in newarr2) {


    if (newarr2[key].name === name_b) {

      if (num_adv <= 3) {
        charge = num_adv * 300

      }
      if (num_adv > 3) {
        let val = num_adv - 3;
        let discount = 90 * val;
        charge = (num_adv * 300) - discount
      }



      var charge2 = parseInt(newarr2[key].charge) + (charge)

      let obj = {
        name: `${name_b}`,
        date: `${date}`,
        charge: `${charge2}`


      }
      newarr2.splice(key, 1, obj);

      localStorage.setItem("adver2", JSON.stringify(newarr2));
    }

  }
  // document.getElementById("form").reset();

}

function showme() {

  var attr2 = localStorage.getItem("adver2");

  var newarr2 = JSON.parse(attr2);
  var table = "<table id='myTableData' border='1' cellpadding='10'>";
  table += "<tr>";
  table += "<td><b>Name</b></td>";
  table += "<td><b>Date</b></td>";
  table += "<td><b>Charge</b></td>";




  for (let i = 0; i < newarr2.length; i++) {

    table += "<tr>";
    for (const key in newarr2[i]) {

      table += "<td>" + newarr2[i][key] + "</td>";



    }


    table += "</tr>";
  }
  table += "</table>";

  document.getElementById("mydata").innerHTML = table;


}






function showus() {

  var attr2 = localStorage.getItem("adver");

  var newarr2 = JSON.parse(attr2);
  var table = "<table id='myTableData' border='1' cellpadding='10'>";
  table += "<tr>";
  table += "<td><b>Name</b></td>";
  table += "<td><b>Email</b></td>";
  table += "<td><b>Phone</b></td>";
  table += "<td><b>Country</b></td>";
  table += "<td><b>City</b></td>";




  for (let i = 0; i < newarr2.length; i++) {

    table += "<tr>";
    for (const key in newarr2[i]) {

      table += "<td>" + newarr2[i][key] + "</td>";



    }


    table += "</tr>";
  }
  table += "</table>";

  document.getElementById("mydata").innerHTML = table;


}
