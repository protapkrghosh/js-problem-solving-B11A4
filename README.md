## Problem-01 : Calculate the cash-out Charge
<span style="color:#fb6f92">এটি একটি রঙিন টেক্সট।</span>


⚠️ Function Name Must be **cashOut()**
<br>

রহিম একজন ছোট ব্যবসায়ী। প্রতিদিন বিকাশের মাধ্যমে বিভিন্ন লেনদেন করতে হয় তাকে। একদিন তার দোকানে এক ক্রেতা আসে এবং বলে, 👉 "ভাই, 2000 টাকা ক্যাশ আউট করতে চাই। কত চার্জ কাটবে?"
রহিম মনে মনে হিসাব করতে শুরু করল, কিন্তু হঠাৎ সে ভাবল—এভাবে বারবার হিসাব করা তো ঝামেলা! যদি একটা ফাংশন থাকত, যেটা যেকোনো এমাউন্ট দিলেই চার্জ বের করে দিত! এবং রহিম যেহেতু জানে যে তুমি প্রোগ্রামিং হিরোর তুখোড় স্টুডেন্ট তাই তোমার কাজ হচ্ছে -
রহিমকে cashOut() নামে একটা ফাংশন বানিয়ে দেয়া যেটা টাকা ইনপুট নিলে ক্যাশ আউট চার্জ বের করে দেবে।
<br>

**Cashout Charge হলো - 1.75%**
<br>

**📥 Input:** <br>
তোমার ফাংশন একটি পজিটিভ সংখ্যা **(money)** ইনপুট নেবে যা হলো cashout amount. <br>

**🚀 Output:**

-  ফাংশনটি **1.75%** ক্যাশ আউট চার্জ ক্যালকুলেট করে একটি সংখ্যা রিটার্ন করবে।
-  Output দশমিক সংখ্যা হতে পারে।

<span style="color:#fb6f92">_**Note:** তোমাকে অবশ্যই output টা রিটার্ন করতে হবে। console.log করলে কোন মার্ক পাবেনা।_</span>

**🚩Challenge:** <br>
&minus; যদি ইনপুট টি নাম্বার না হয় তাহলে **"Invalid"** স্ট্রিং রিটার্ন করবে। <br>
&minus; যদি ইনপুট টি পজিটিভ সংখ্যা না হয় তাহলে **"Invalid"** স্ট্রিং রিটার্ন করবে।

<br><br><br>

## Problem-02 : Detect email valid or not

⚠️ Function Name Must be **validEmail()**
<br>

এবার তোমার কাজ হলো **validEmail()** নামে একটা ফাংশন তৈরি করা, যা একটি email ইনপুট নেবে এবং সেটি **সঠিক নাকি ভুল** তা যাচাই করে একটি boolean Value (**true/false**) কে return করবে।
<br>

**ইমেইল ভ্যালিড হওয়ার শর্ত গুলো হলো** <br>
&minus; ইমেইলের শুরু তে ".-\_+@" এই স্পেশাল ক্যারেক্টার গুলো থাকা যাবেনা। <br>
&minus; ইমেইলের মাঝখানে @ থাকতে হবে। <br>
&minus; ইমেইলে কোন স্পেস থাকা যাবেনা। <br>
&minus; ইমেইলের শেষে .com থাকতে হবে। <br>
উপরের শর্ত গুলো পুরন হলে ই সে true আউটপুট হিসেবে return করবে। না হলে false আউটপুট হিসেবে return করবে। <br>

**📥 Input:** <br>
তোমার ফাংশন একটি **email** ইনপুট নেবে যা হবে একটি স্ট্রিং।

**🚀 Output:** <br>
তোমার ফাংশন টি একটা boolean Value (**true/false**) কে return করবে। অবশ্যই তোমাকে কিন্তু boolean value ই return করতে হবে। <br>
<span style="color:#fb6f92">_**Note:** তোমাকে অবশ্যই output টা রিটার্ন করতে হবে। console.log করলে কোন মার্ক পাবেনা।_</span>

**🚩Challenge:** যদি ইনপুট টি string না হয় তাহলে "Invalid" স্ট্রিং রিটার্ন করবে।

<br><br><br>

## Problem-03 : Who will Win ( 🥭Mango /🍌 Banana )

⚠️ Function Name Must be **electionResult()**
<br>

বাংলাদেশের রাজনৈতিক ময়দানে চলছে টানটান উত্তেজনা! **Mango-party** আর **Banana-party** মুখোমুখি এক দারুণ নির্বাচনে! ভোট চলছে দেদারসে, কিন্তু গণনা করতে গিয়ে সবাই কনফিউজড! 😵 তাই, তোমাকে **electionResult()** নামে একটা ফাংশন লিখতে হবে, যা একটা Array Input নেবে এবং ভোটের গণনা করে জানিয়ে দেবে—"কে হচ্ছে বিজয়ী?"

**📥 Input:** <br>
&minus; ফাংশন টি Input নেবে একটি Array এবং Array এর elements গুলো হবে string.  
&minus; **Example:** ["mango", "banana", "Na-Vote", "mango"] <br>

**🚀 Output:** <br>
&minus; যদি Array তে "mango" বেশি হয় তাহলে ফাংশন টি রিটার্ন করবে "Mango" <br>
&minus; যদি Array তে "banana" বেশি হয় তাহলে ফাংশন টি রিটার্ন করবে "Banana" <br>
&minus; যদি "mango" এবং "banana" সমান সমান হয় তাহলে রিটার্ন করবে "Draw"

<span style="color:#fb6f92">_**Note:** তোমাকে অবশ্যই output টা রিটার্ন করতে হবে। console.log করলে কোন মার্ক পাবেনা।_</span>

**🚩Challenge:** যদি ইনপুট টি Array না হয় তাহলে "Invalid" স্ট্রিং রিটার্ন করবে।

<br><br><br>





## Problem-04: Detect The Perfect Best Friend 
⚠️ Function Name Must be **isBestFriend()**
<br>

📢 বন্ধুত্ব কি শুধু মুখের কথা? নাকি সত্যিকারের? 🧐 তোমাকে একটা **isBestFriend()**  ফাংশন লিখতে হবে, যা চেক করবে দুই বন্ধুর বন্ধুত্ব আসলেই সাচ্চা কিনা! 🔍
তোমার ফাংশন কে ২ বন্ধুর ডেটা দেয়া হবে। যদি প্রথমজনের bestFriend এর ভ্যালু  ২য় জনের roll এর সাথে মিলে যায় এবং দ্বিতীয় জনের bestFriend এর ভ্যালু প্রথম জনের roll এর সাথে মিলে যায়  তাহলে ই আমরা বুঝব যে তারা দুইজন সত্যিকারের বেস্ট ফ্রেন্ড। 

**📥 Input:** <br>
&minus; ফাংশন টি 2 টা Input নেবে। <br>
&minus; ১ম input টি হবে একটা object <br> 
&minus; ২য় input টিও  হবে একটা object <br>
&minus; প্রতি টা object এ ৩ টা  property অবশ্যই  থাকবে <br>
( **name:** string , **roll:** number , **bestFriend:** number ) 


**🚀 Output:** <br>
&minus; যদি তারা ২ জন ২ জনের বেস্ট ফেন্ড হয়ে থাকে তাহলে return করবে boolean value **true**
&minus; আর যদি তারা বেস্ট ফ্রেন্ড না হয়ে থাকে তাহলে return করবে **false**

<span style="color:#fb6f92">_**Note:** তোমাকে অবশ্যই output টা রিটার্ন করতে হবে। console.log করলে কোন মার্ক পাবেনা।_</span>


**🚩Challenge:**  
Input গুলো যদি object না হয়  তাহলে ফাংশন    "Invalid" return করবে।  

<br><br><br>





## Problem-05: Let’s Calculate Video watch Time
⚠️ Function Name Must be **calculateWatchTime()**
<br>

সুবাহ সারাদিন Tiktok দেখে সময় নষ্ট করে। কোন পড়াশোনা করেনা। সুবাহর বাবা সুবাহর এই সময় অপচয় নিয়ে অনেক দুশ্চিন্তায় আছেন। সুবাহর বাবা এমন একটি ফাংশন বানাতে চাচ্ছেন যাতে সুবাহ দৈনিক কত সময় ভিডিও দেখে অপচয় করে সেটা তিনি সুন্দর ভাবে দেখতে পারবেন।
তোমার কাজ হচ্ছে সুবাহর বাবা কে **calculateWatchTime()**  নামে একটা ফাংশন বানিয়ে দেয়া যেটা একটা Array ইনপুট  নিবে। Array তে  সুবাহর ভিডিও দেখার সময়(second) গুলো Number আকারে স্টোর থাকবে। ফাংশনটি Array থেকে টোটাল সময় বের করে সেটাকে  ঘণ্টা, মিনিট এবং সেকেন্ডে কনভার্ট করে একটি অব্জেক্ট হিসেবে রিটার্ন করবে।  

**📥 Input:** <br>
&minus; Function টি input নেবে একটি array <br>
&minus; array এর element গুলো হবে number  (watch times in second) 




**🚀 Output:** <br>
&minus; ফাংশন টি  Array তে থাকা সবগুলো সময় কে calculate করে সেটা কে ঘন্টা মিনিট এবং সেকেন্ড এ কনভার্ট করবে। <br>
&minus; ফাংশন টি একটা অবজেক্ট রিটার্ন করবে।  অবজেক্ট টি দেখতে হবে এই রকম- 
**{ hour:14 , minute: 46 , second: 3 }** 

<span style="color:#fb6f92">_**Note:** তোমাকে অবশ্যই output টা রিটার্ন করতে হবে। console.log করলে কোন মার্ক পাবেনা।_</span>


**🚩Challenge:**
Array element গুলো যদি number না হয় তাহলে   "Invalid" return করবে।  

