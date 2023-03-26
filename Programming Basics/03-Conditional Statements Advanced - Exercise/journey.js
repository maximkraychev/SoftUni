function journey(input) {

   let budget = Number(input[0]);
   let season = input[1];

   let destination
   let place 
   let cost = 0;

   if(budget <= 100) {
    destination = "Bulgaria";
        if(season === "summer") {
            place = "Camp";
            cost = budget * 0.30;
        } else if(season === "winter") {
            place = "Hotel"
            cost = budget *0.70;
        }
   } else if(budget <= 1000) {
       destination = "Balkans"
       if(season === "summer") {
            place = "Camp";
            cost = budget * 0.40;
    }   else if(season === "winter") {
            place = "Hotel"
            cost = budget *0.80;
    }
   } else if(budget > 1000) {
       destination = "Europe"
        place = "Hotel"
        cost = budget * 0.90;
   }

   console.log(`Somewhere in ${destination}`);
   console.log(`${place} - ${cost.toFixed(2)}`);
}

journey(["1500", "summer"])

