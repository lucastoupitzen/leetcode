var distributeCandies = function(candyType) {
  var n = candyType.length;
  const nAllowedCandy = n / 2;
  var difCandy = 0;
  var dados = {};
  candyType.forEach( doce => {
    if(dados[doce]) dados[doce]++;
    else {
        dados[doce] = 1;
        difCandy++;
    }
  })
  return Math.min(difCandy, nAllowedCandy);

};

console.log(distributeCandies([1,1,2,3,3,5]));

