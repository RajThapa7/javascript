
// let input = document.getElementById('input').value.toUpperCase();
let key = 2;
let input = "discretemath";
//Replacing whitespace from the input and converting it to uppercase
let str = input.replace(/\s+/g,"").toUpperCase();

let outArr = []; // creating an empty array 

// using loop to get charCode of the characters of the input 
for(let i = 0; i< str.length; i++){
    let code1 = str.charCodeAt(i) - 65; // returns charCode from 0 -25 as we subtracted 65 that is charCode of A
    let  code2 = ((code1 + key)%26) + 65; // returns charCode from 65 - 90 as we add 65 to it 
    let cipherText = String.fromCharCode(code2); // converting charCode into string
    outArr.push(cipherText); // pushing the string character into the empty array
}

let cipher = outArr.join(""); // converting the array into string
console.log(cipher);
