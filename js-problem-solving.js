// 01 Problem
function cashOut(money) {
   if (money !== 'number' && money < 0) {
      return 'Invalid';
   }

   const charge = money * 1.75 / 100;
   return charge;
}

const result = cashOut(0);
console.log(result);

