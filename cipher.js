
// Encryption function
function encrypt(){
    //take input from user
let input = document.getElementById('Input').value;
let keyy = document.getElementById("Key").value;
let key = parseInt(keyy);
///Replacing whitespace from the input and converting it to uppercase
let str = input.replace(/\s+/g,"").toUpperCase();

let outerArr = []; // creating an empty array 

// using loop to get charCode of the characters of the input 
for(let i = 0; i< str.length; i++){
    let code1 = str.charCodeAt(i) - 65; // returns charCode from 0 -25 as we subtracted 65 that is charCode of A
    let  code2 = ((code1 + key)%26) + 65; // returns charCode from 65 - 90 as we add 65 to it 
    let cipherText = String.fromCharCode(code2); // converting charCode into string
    outerArr.push(cipherText); // pushing the string character into the empty array
}
let cipher = outerArr.join(""); // converting the array into string
 document.getElementById("output").value = cipher;
}


//Decryption function
function decrypt(){
    //take input from user
let input = document.getElementById('Input').value;
let keyy = document.getElementById("Key").value;
let key = parseInt(keyy); // converting input into integer value

///Replacing whitespace from the input and converting it to uppercase
let str = input.replace(/\s+/g,"").toUpperCase();

let outArr = []; // creating an empty array 

// using loop to get charCode of the characters of the input 
for(let i = 0; i< str.length; i++){
    let code1 = str.charCodeAt(i) - 65; // returns charCode from 0 -25 as we subtracted 65 that is charCode of A
    let  code2 = ((code1 +26 - key)%26) + 65; // returns charCode from 65 - 90 as we add 65 to it 
    let DecipherText = String.fromCharCode(code2); // converting charCode into string
    outArr.push(DecipherText); // pushing the string character into the empty array
}
let Decipher = outArr.join(""); // converting the array into string
 document.getElementById("output").value = Decipher;
}
