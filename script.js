const button = document.getElementById('check-btn')
const input = document.getElementById('text-input')
const result = document.getElementById('result')

const palindromeCheck = (str) => {
  let clearCheck = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
  let check = clearCheck.split("").reverse().join("");

  if(check == clearCheck) {
const formattedResult = `<strong>${str}</strong> is a palindrome`
result.innerHTML = formattedResult;
    return true;
  }
  
const formattedResult = `<strong>${str}</strong> is not a palindrome`
result.innerHTML = formattedResult;
  return false;

  // let j = str.length - 1;
  // for(let i = 0; i < str.length; i++) {
  //   if(str[i] != str[j]) {
  //     return false;
  //   }
  //   j--;
  // }
  // return true;
}



button.addEventListener('click', () => {
  let inputValue = document.getElementById('text-input').value

  if(inputValue === "") {
    alert("Please input a value")
    return false;
  }


  console.log(palindromeCheck(inputValue));
})