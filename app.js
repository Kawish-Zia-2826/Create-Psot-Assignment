let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
form.addEventListener("submit",(e) => {
  e.preventDefault();
  console.log("button CLicked");
  formValidation();
  
  })
let formValidation = () =>{
  if (input.value === "") {
    console.log("error");
    msg.innerHTML = "cant pass"
  } else {
    console.log("suuces");
    msg.innerHTML = ""
  }
  acceptdata();
};
let data = {}
let acceptdata = ()=>{
  data["text"] = input.value;
  console.log(data);
  createpost();
}
let createpost = ()=>{
  posts.innerHTML += `
  <div>
    <p>${data["text"]}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
  `
  input.value = "";
}
let deletePost  = (e)=>{
e.parentElement.parentElement.remove();
}

let editPost  = (e)=>{
  input.value  = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
}


var a = document.getElementById("color");
a.addEventListener("input", (event) => {
  const selectedColor = event.target.value;
  console.log(selectedColor);
  document.getElementsByTagName("body")[0].style.backgroundColor = selectedColor;
});

