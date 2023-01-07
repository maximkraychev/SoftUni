function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const text = document.querySelector('#inputs textarea').value;
      const inputObject = JSON.parse(text);
      const restaurants = {};

      for (const restaurant of inputObject) {
         let [restaurantName, workers] = restaurant.split(' - ');
         workers = workers.split(', ');

         for (const worker of workers) {
            let [workerName, slary] = worker.split(' ');
            slary = Number(slary);

            if (!restaurants.hasOwnProperty(restaurantName)) {
               restaurants[restaurantName] = {
                  averageSalary: 0,
                  bestSalary: 0,
                  sumOfSalaryes: 0,
                  workers: [],
               }
            }

            if (slary > restaurants[restaurantName].bestSalary) {
               restaurants[restaurantName].bestSalary = slary;
            }
            restaurants[restaurantName].workers.push([workerName, slary]);
            restaurants[restaurantName].sumOfSalaryes += slary
         }

         restaurants[restaurantName].averageSalary = restaurants[restaurantName].sumOfSalaryes / restaurants[restaurantName].workers.length;
      }

      const entries = Object.entries(restaurants);
      const bestRestaurant = entries.sort((a, b) => b[1].averageSalary - a[1].averageSalary)[0];

      const firstElementOutput = document.querySelector('#outputs p');
      firstElementOutput.textContent = `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].averageSalary.toFixed(2)} Best Salary: ${bestRestaurant[1].bestSalary.toFixed(2)}`;

      const secondElementOut = document.querySelector('#workers p');
      bestRestaurant[1].workers = bestRestaurant[1].workers.sort((a, b) => b[1] - a[1]);
      const sortedWorkers = [];
      
      for (const [name, salary] of bestRestaurant[1].workers) {
         sortedWorkers.push(`Name: ${name} With Salary: ${salary}`)
      }

      secondElementOut.textContent = sortedWorkers.join(' ');
   }
}