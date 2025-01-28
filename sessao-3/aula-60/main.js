function retornaMaior(x,y) {
  var maior;
  var menor;
  if (x > y) {
    maior = x;
    menor = y;
  } else {
    maior = y;
    menor = x;
  }
  return maior;
}
console.log(retornaMaior(100000, 9999));



