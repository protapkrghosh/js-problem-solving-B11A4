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

const result = cashOut(2000);
console.log(result);




// Problem-02 : Detect email  valid or not
function validEmail(email) {
   if (typeof email !== "string") {
      return "Invalid";
   }

   if (
      email.indexOf("@") == -1 ||
      !email.endsWith(".com") ||
      email.includes(" ")
   ) {
      return false;
   } else if (
      email[0] === "." ||
      email[0] === "_" ||
      email[0] === "+" ||
      email[0] === "*" ||
      email[0] === "/" ||
      email[0] === "!" ||
      email[0] === "-" ||
      email[0] === "#" ||
      email[0] === "(" ||
      email[0] === ")" ||
      email[0] === "{" ||
      email[0] === "}" ||
      email[0] === "[" ||
      email[0] === "]" ||
      email[0] === "$" ||
      email[0] === "%" ||
      email[0] === "^" ||
      email[0] === "@"
   ) {
      return false;
   } else {
      return true;
   }
}

const checkEmail = validEmail("he ro@alom.com");
console.log(checkEmail);





// Problem-03 : Who will Win  ( 🥭Mango /🍌 Banana )
function electionResult(votes) {
   if (!Array.isArray(votes)) {
      return "Invalid";
   }

   let mangoCount = 0;
   let bananaCount = 0;

   for (let i = 0; i < votes.length; i++) {
      if (votes[i] === "mango") {
         mangoCount++;
      } else if (votes[i] === "banana") {
         bananaCount++;
      }
   }

   if (mangoCount > bananaCount) {
      return "Mango";
   } else if (bananaCount > mangoCount) {
      return "Banana";
   } else if (mangoCount === bananaCount) {
      return "Draw";
   }
}

const winParty = electionResult(["mango", "BananA", "na vote", "na vote"]);
console.log(winParty);





// Problem-04: Detect The Perfect Best Friend
function isBestFriend(f1, f2) {
   if (
      typeof f1 !== "object" ||
      typeof f2 !== "object" ||
      Array.isArray(f1) ||
      Array.isArray(f2)
   ) {
      return "Invalid";
   } else if (f1.roll === f2.bestFriend && f1.bestFriend === f2.roll) {
      return true;
   } else {
      return false;
   }
}

const friendOne = { name: "hashem", roll: 1, bestFriend: 1 };
const friendTwo = { name: "kashem", roll: 1, bestFriend: 1 };

const checkBestFriend = isBestFriend(friendOne, friendTwo);
console.log(checkBestFriend);





// Problem-05: Let’s Calculate Video watch Time
function calculateWatchTime(times) {
   if (!Array.isArray(times)) {
      return "Invalid";
   }

   for (const element of times) {
      if (typeof element !== "number") {
         return "Invalid";
      }
   }

   let totalSpentTimes = 0;
   for (const time of times) {
      totalSpentTimes += time;
   }

   const hour = Math.floor(totalSpentTimes / 3600);
   const minute = Math.floor((totalSpentTimes % 3600) / 60);
   const second = totalSpentTimes % 60;

   return { hour: hour, minute: minute, second: second };
}

const totalWatchTime = calculateWatchTime([100, 3800, 45]);
console.log(totalWatchTime);


