// Add your code here

// fetch('http://api.open-notify.org/astros.json') .then(function(response) {
//   return response.json();
// }).then(function(json) {
//   console.log(json);
//   console.log(`Holy cow! There are ${json["number"]} humans in space.`);
// }); 


// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };
  
//   let configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
  
//   fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     })
//     .catch(function(error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//     }); 





function submitData(name,email) {

    let formData = {
            name: name,
            email: email
          };

    let configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users",configObj)
        .then(function(response){
            return response.json();
        })
        .then(function(object){
            document.body.innerHTML = object.id;
        })
        .catch(function(error){
            alert("Unauthorized Access");
            document.body.innerHTML = error.message;
        });
}

function addUserToDom(object){}