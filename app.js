//Selecting elements from the DOM
const cartContainer = document.querySelector(".card-container");
const price = document.querySelector("#freelance-price");
const tableForm = document.querySelector(".table-container");

//Freelance data
const freelance = [
  {
    name: "Sabrina Carpenter",
    price: 34,
    occupation: "Teacher",
  },
  {
    name: "Lawrence James",
    price: 42,
    occupation: "Lawyer",
  },
  {
    name: "Thierry Paul",
    price: 48,
    occupation: "Veterianian",
  },
  {
    name: "Grace Lawson",
    price: 55,
    occupation: "Nurse",
  },
];

function calculateAveragePrice() {
  const totalPrices = freelance.reduce(
    // (accumulator, currentValue) => accumulator + currentValue.price,
    (sum, freelancers) => sum + freelancers.price,
    0
  );
  const average = totalPrices / freelance.length; //Divide to get the average
  return average.toFixed(2); //Round to it to the nearest second
}

//Function to display the freeelance board
function renderFreeelancerBoard() {
  tableForm.innerHTML = `
    <tr>
    <th>Name</th>
    <th>Occupation</th>
    <th>Starting Price</th>
    </tr>
    `;
  
    //Add the freelancer list
    freelance.forEach((freelance) => {
        tableForm.innerHTML += `
        <tr>
        <td>${freelance.name}</td>
        <td>${freelance.occupation}</td>
        <td>$${freelance.price}.00</td>
        </tr>
        `;
   });

//Display the average starting price
 price.textContent = `$${calculateAveragePrice()}`;
}

//Initialize the freelance board
renderFreeelancerBoard()

//add the function to add the freelance theme every 4sec
newFunction()

function newFunction() {
    setInterval(() => {
      const freelancerNew = {
        name: "Lauraine",
        occupation : "Software Engineering",
        price: 120,
      };

      freelance.push(freelancerNew);
      
      //update the freelance and average and the four sec
    renderFreeelancerBoard ();
    },4000);
}