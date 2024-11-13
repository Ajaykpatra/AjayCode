const myName =document.getElementById("my-name")
con
function makeTextSizer(){

   function changeSize(){
    myName.style.fontSize= ${'size'}; 
   }
   return changeSize;

}

const size13=makeTextSizer(13);
const size20=makeTextSizer(20);
