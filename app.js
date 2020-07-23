var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
  ];
   
  // Only change code below this line
   
  var filteredList = watchList
    .map(movie => {
      return {
        title: movie.Title,
        rating: movie.imdbRating
      };
    })
    .filter(movie => {
     
      return parseFloat(movie.rating) >= 8.0;
    });
   
  // Only change code above this line
   
  console.log(filteredList);

  
  //-----------------------------------------------------


  var s = [23, 65, 98, 5];
 
Array.prototype.myFilter = function(callback){
  // Only change code below this line
  let newArray = [];
  this.forEach(function(x){
    if(callback(x) == true) {
      newArray.push(x)
    }
  })
  // Only change code above this line
  return newArray;
 
};
 
var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
 
console.log(new_s)


//


function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
  return anim.slice(beginSlice, endSlice)
   
    // Only change code above this line
  }
  var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);
   
  console.log(sliceArray(inputAnim, 1,3))

  
  //

  function nonMutatingSplice(cities) {
    // Only change code below this line
    return cities.slice(0,3);
   
    // Only change code above this line
  }
  var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  nonMutatingSplice(inputCities);
   
//   console.log(nonMutatingSplice(inputCities));
function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.slice(0,3);
 
  // Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
 
console.log(nonMutatingSplice(inputCities));
  

//

function nonMutatingConcat(original, attach) {
    // Only change code below this line
  var answer = original.concat(attach);
  return answer
   
    // Only change code above this line
  }
  var first = [1, 2, 3];
  var second = [4, 5];
  nonMutatingConcat(first, second);
   
  console.log(nonMutatingConcat(first, second));

  //


  function noMutatingPush(origin, newItem) {
    // Only change code below this line
   
    return origin.concat(newItem);
   
    // Only change code above this line
  }
  var taste = [2, 4, 6];
  var buds = [8, 10];
  noMutatingPush(taste, buds);
  console.log(noMutatingPush(taste, buds));
  
  //


  function getRating(watchList){
    // Only change code below this line
   var count = 0;
    var averageRating = watchList.reduce((sum,movie) =>  {
      if (movie.Director == "Christopher Nolan") {
        count+=1;
        return sum + parseFloat(movie.imdbRating);
      }
      return sum;
    }, 0) / count;
   
   
    // Only change code above this line
    return averageRating;
  }
  console.log(getRating(watchList));


  //


  const squareList = (arr) => {
    // Only change code below this line
     return arr
      .filter(num => num > 0 && num % parseInt(num) === 0)
      .map(num => Math.pow(num, 2));
   
    // Only change code above this line
  };
   
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);

  
  //


  function alphabeticalOrder(arr) {
    // Only change code below this line
   
  return arr.sort()
    // Only change code above this line
  }
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
   
  console.log(alphabeticalOrder (["a", "d", "c", "a", "z", "g"]));

  
  //


  var globalArray = [5, 6, 3, 2, 9];
  function nonMutatingSort(arr) {
    // Only change code below this line
   
  var myArrayCopy = [...arr];
   
  return myArrayCopy.sort();
   
    // Only change code above this line
  }
  nonMutatingSort(globalArray);
   
  console.log(nonMutatingSort(globalArray))

  
  //


  function splitify(str) {
    // Only change code below this line
   
  return str.split(/\W/);
    // Only change code above this line
  }
  console.log(splitify("Hello World,I-am code"));

  
  //


  function sentensify(str) {
    // Only change code below this line
   return str.split(/\W/).join(" ");
    // Only change code above this line
   }
   console.log(sentensify("May-the-force-be-with-you"));
    
   // The global variable

   
   //


   var globalTitle = "Winter Is Coming";
 
// Only change code below this line
function urlSlug(title) {
return title
   .split(/\W/)
   .filter(obj => {
     return obj !== "";
   })
   .join("-")
   .toLowerCase();
 
}
console.log(urlSlug(globalTitle));


//


function checkPositive(arr) {
    // Only change code below this line
   return arr.every(function(currentValue) {
    return currentValue > 0;
   });
    
    // Only change code above this line
   }
   checkPositive([1, 2, 3, -4, 5]);
   
   console.log(checkPositive([1, 2, 3, -4, 5]));


   //


   function checkMePositive(arrg) {
    // Only change code below this line
   return arrg.some(function(currentValues) {
    return currentValues > 0;
   });
    
    // Only change code above this line
   }
   console.log(checkMePositive([1, 2, 3, -4, 5]));
   