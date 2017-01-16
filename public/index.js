'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);

//Exercice 1
function date_calculation (d1, d2){

  var diff = {}                           
  var date1 = new Date(d1);
  var date2 = new Date(d2);
  var tmp = date2 - date1;

  tmp = Math.floor(tmp/1000);             
  diff.sec = tmp % 60;      

  tmp = Math.floor((tmp-diff.sec)/60);    
  diff.min = tmp % 60;                    

  tmp = Math.floor((tmp-diff.min)/60);    
  diff.hour = tmp % 24;                   

  tmp = Math.floor((tmp-diff.hour)/24);   
  diff.day = tmp;

  return diff.day+1;
}
/*

function price_per_day(){

  for(var i= 0; i < rentals.length; i++)
{
    for(var i= 0; i < cars.length; i++)
{
      if (cars.vehicule==rentals.carId)
      {
             var nb_day = date_calculation(rentals[i].pickupDate,rentals[i].returnDate);
             rentals[i].price= rentals[i].distance*cars[i].pricePerKm+(nb_day)*cars[i].pricePerDay;
      }
    }
  }
}

price_per_day();
*/

//Exercice 2

function price_per_day(){

  for(var i= 0; i < rentals.length; i++)
{
    for(var i= 0; i < cars.length; i++)
{
      if (cars.vehicule==rentals.carId)
      {

        var nb_day = date_calculation(rentals[i].pickupDate,rentals[i].returnDate);
        var temp = rentals[i].distance*cars[i].pricePerKm+nb_day*cars[i].pricePerDay;
        
        if(nb_day<1) 
          {rentals[i].price= temp}

        else if(nb_day>=1 && nb_day <4)
          {rentals[i].price= temp*0.9;}

        else if(nb_day>=4 && nb_day <10)
          {rentals[i].price= temp*0.7;}

        else if(nb_day>=10)
          {rentals[i].price= temp*0.5;}

        //Exercice 3
        /*
        var com = rentals[i].price*0.3;
        rentals[i].commission.insurance= com*0.5;
        rentals[i].commission.assistance= 1;
        rentals[i].commission.drivy= com-(com*0.5-1);
*/

      }
    }
  }
}

price_per_day();