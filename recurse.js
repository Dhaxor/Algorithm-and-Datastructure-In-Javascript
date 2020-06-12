const factorize = (num) =>{
 return num < 0 ? -1 : num == 1 ? 1 : num * factorize(num - 1)
}

factorize(4);
