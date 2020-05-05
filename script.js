function countAnd() {
  // search inputted text from form with Regex and look for matching instances
  var andNumber = document.getElementById('data').value;
  var matchingInstances = andNumber.match(/and/gi);
  console.log(matchingInstances);

  // check if 'matching instances' exist then calculate length
  if(matchingInstances) {
      // log formatted response to console and to document 
       console.log(`The text contains ${matchingInstances.length} and(s)`); 
      document.getElementById("result").innerHTML = 
      (`The text contains ${matchingInstances.length} and(s)`); 
      return matchingInstances.length;
  } 
  else{
      return 0;
  }
}



