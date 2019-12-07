const axios = require("axios");

const url = "http://localhost:3001/pets/"

axios.get(url).then(({data}) => {
    console.log(data)
})

// axios
//     .post(url, 
//         {   
//             name: "Trevor", 
//             breed: "Labradoodle", 
//             status: "Healthy", 
//             gender: "male", 
//             yearsOld: "2", 
//             adopted: false, 
//             animalType: "Dog"
//         })
//     .then(({data}) => console.log({data}))