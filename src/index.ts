// your code here
function prepend(numSpaces: number | string, inputString: string ): string {
    // your code here
    for(let i = 0; i < +numSpaces; i++){
      inputString = "_" + inputString; 
    }
    return inputString; 
  }
  
const button = document.querySelector("button") as HTMLButtonElement; 
const numInput = document.getElementById("numInput") as HTMLInputElement; 
const textInput = document.getElementById("textInput") as HTMLInputElement; 
const divEle = document.querySelector("#answer") as HTMLDivElement; 

button!.addEventListener("click", () => {
    
    let answer: string = prepend(numInput!.value, textInput!.value);
    console.log(answer); 
    divEle.innerHTML = answer; 
})