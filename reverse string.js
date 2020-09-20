function reverse(str){
 if(!str || typeof str !== 'string'){
   return 'please enter a valid word'
 }
 else{
    const backward = [];
    const totalItem = str.length;
    for(let i = totalItem; i >= 0; i--){
       backward.push(str[i]);
    }
    return backward.join('')
 }

 
}
// reverse('Gain is mad')


//Another method
let rev = (str) => {
   return [...str].reverse().join('')
}

// rev('Gain is mad')
