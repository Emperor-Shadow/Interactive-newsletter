var email = document.querySelector("#email"),
submitBtn = document.querySelector("#submit"),
span = document.querySelector("#input-email")
errMsg = document.querySelector("#errmsg"),
popUp = document.querySelector(".alert"),
dismissBtn = document.querySelector("#dismiss"),
emailRegex = 
/^\w+([.–]?\w+)*@\w+([.–]?\w+)*(\.\w{2,})+$/;

check = () =>{
  if (emailRegex.test(email.value)) {
    span.innerText = email.value
    email.value = "";
    document.querySelector(".cont").style.display = "none"
    popUp.style.display = "flex";
  } else {
    email.setAttribute("class" , "error");
    errMsg.style.display = "inline-block";
  }
}

submitBtn.addEventListener("click" , (e)=>{
  e.preventDefault()
  check();
})

dismissBtn.addEventListener("click" , ()=>{
  popUp.style.display = "none";
      document.querySelector(".cont").style.display = "inline-block"
})
