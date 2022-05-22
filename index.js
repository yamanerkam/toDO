const add = document.querySelector(".addBtn");
const input = document.getElementById("myInput");
const ul = document.getElementById("myUL");
const ul2 = document.getElementById("myUL");
const closers=document.querySelectorAll(".close")
const ill = document.querySelectorAll("li")


add.addEventListener("click",()=>{
  if(input.value!=""){
  var buttonn1=document.createElement("button")
  buttonn1.classList.add("close");
  buttonn1.innerText="X";
  var li = document.createElement("li");
  li.innerText=`${input.value}`;
  ul.append(li);
  li.append(buttonn1)
  input.value="";
  buttonn1.addEventListener("click",()=>{
    li.remove();
  })
  
  }else{
    wrapper.style.display="block";
  }
  
})


  ul.onclick = function(event){
    let target = event.target; // where was the click?
    if (target.tagName != 'LI') return;
    let t3=event;
    event.target.children[0].style.color="blue";
    target.style.textDecoration= "line-through";
    target.classList.add("checked");
    
  };

  







const wrapper=document.querySelector(".popup-wrapper")
const xxx = document.querySelector(".popup-close")


xxx.addEventListener("click",()=>{
  wrapper.style.display="none";
});

wrapper.addEventListener("click",()=>{
  wrapper.style.display="none";
});