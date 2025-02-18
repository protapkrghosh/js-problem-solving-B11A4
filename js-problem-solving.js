// Problem-01 : Calculate the cash-out Charge 
function cashOut(money) {
   if (
      typeof money !== "number" ||
      money < 0 ||
      typeof money === "object" ||
      isNaN(money)
   ) {
      return "Invalid";
   }

   const charge = (money * 1.75) / 100;
   return charge;
}

// const result = cashOut(2000);
// console.log(result);





// Problem-02 : Detect email  valid or not
function validEmail(email) {
   let firstCharacter = email[0];

   if (typeof email !== "string") {
      return "Invalid";
   }
   else if (
      email.indexOf("@") == -1 ||
      !email.endsWith(".com") ||
      email.includes(" ")
   ) {
      return false;
   }
   else if (
      firstCharacter === "." ||
      firstCharacter === "_" ||
      firstCharacter === "+" ||
      firstCharacter === "*" ||
      firstCharacter === "/" ||
      firstCharacter === "!" ||
      firstCharacter === "-" ||
      firstCharacter === "#" ||
      firstCharacter === "(" ||
      firstCharacter === ")" ||
      firstCharacter === "[" ||
      firstCharacter === "]" ||
      firstCharacter === "$" ||
      firstCharacter === "%" ||
      firstCharacter === "^" ||
      firstCharacter === "@"

   ) {
      return false;
   }
   else {
      return true;
   }
}

// const checkEmail = validEmail("FirstL@live.com");
// console.log(checkEmail);





// Problem-03 : Who will Win  ( 🥭Mango /🍌 Banana )