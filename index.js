
function bubbleSort(num){
  //Setting the Initial swapped to false
  let swapped = false;

  do {
    //Checking if the initial value is larger than the next value
      for (let i = 0; i < num.length; i++) {
         if (num[i] > num[i+1]) {

             console.log(num);
             //Store the initial in a temp var
             let temp = num[i];
             num[i] = num[i+1];
             num[i+1] = temp;
             swapped = true;
             console.log(num);
         }
          
      }
  } while (swapped);
    

}

bubbleSort([3,2,1,5,8,4,0]);