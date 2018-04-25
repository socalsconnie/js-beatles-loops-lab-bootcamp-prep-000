function theBeatlesPlay(musicians, instruments) {
  var theBeatles = []
  
  for (let i = 0; i < 4; i++) {
    theBeatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return theBeatles;
  
}

function johnLennonFacts(facts) {
  const newFacts = [];
  
  let i = 0;
  
  while ( i < facts.length) {
    newFacts.push(`${facts[i]}!!!` );
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(n) {
  var howMuchLove = [];
  
  do {
    howMuchLove.push("I love the Beatles!");
  } while (n < 15);
  
  return howMuchLove;
}