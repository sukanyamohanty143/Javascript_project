const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

keys.forEach(key=>{
  key.addEventListener("click",calculator);
});

function calculator() {
  let bottonText = this.innerText
  if (bottonText==='AC'){
    output.innerText = "";
    result.innerText = "0";

    return;
  }
  if (bottonText==='DEL'){
    output.textContent = output.textContent.substr(0,output.textContent.length-1);
    return;
  }
  if (bottonText==='='){
    try {
      result.innerText = eval(output.innerText);
      result.style.animation = "big 0.5s ease-in-out";
      output.style.animation = "small 0.5s ease-in-out";
    } catch  {
      result.innerText = 'Error!';
    }
    // result.innerText = eval(output.innerText);
    // result.style.animation = "big 0.5s ease-in-out";
    // output.style.animation = "small 0.5s ease-in-out";
  }
  else{
    output.textContent += bottonText;
    // return;
  }

}