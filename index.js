"use strict";
import data from "./data.json" assert { type: "json" };
let container = document.querySelector(".container");
let m = 0;
let countForReply = 0;
let { currentUser, comments } = data;

function createElement(tag, className, src, text) {
  let element = document.createElement(tag);
  element.classList.add(className);

  element.src = src;

  element.textContent = text;

  return element;
}

let templeteFunction = function () {
  

  let element = `
  
      <div class="reply-box">
      <div class="insideBox">
        <div class="count">
          <svg
            class="plus"
            width="11"
            height="11"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
              fill="#C5C6EF"
            />
          </svg>
          <h2>${comments[1].replies[0].score}</h2>
          <svg
            class="minus"
            width="11"
            height="3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
              fill="#C5C6EF"
            />
          </svg>
        </div>

        <div class="profile">
          <div class="insideBox-2">
            <div class="info">
              <img class="img" src=${comments[1].replies[0].user.image.png} />
              <h3 class="username">${comments[1].replies[0].user.username}</h3>
      
              <p class="month">${comments[1].replies[0].createdAt}</p>
            </div>
          </div>
          <div class="text">
            <p class="comment">
              ${comments[1].replies[0].content}
            </p>
          </div>
        </div>
        <div class="reply">
          <svg
            class="reply-img"
            width="14"
            height="13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
              fill="#5357B6"
            />
          </svg>
          <h4>Reply</h4>
        </div>
      
    </div>
  </div>
   
    
  
  
  `;

  
  

  return element;
};

for (let i = 0; i < comments.length; i++) {
  let mainComents = function () {
    let insideFunction = `
  <div class="box">
        <div class="insideBox">
          <div class="count">
            <svg
              class="plus"
              width="11"
              height="11"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
                fill="#C5C6EF"
              />
            </svg>
            <h2>${comments[i].score}</h2>
            <svg
              class="minus"
              width="11"
              height="3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
                fill="#C5C6EF"
              />
            </svg>
          </div>

          <div class="profile">
            <div class="insideBox-2">
              <div class="info">
                <img class="img" src="${comments[i].user.image.png}" />
                <h3 >${comments[i].user.username}</h3>
                <p class="month">${comments[i].createdAt}</p>
              </div>
            </div>
            <div class="text">
              <p class="comment">
              ${comments[i].content}
              </p>
            </div>
          </div>
          <div class="reply">
            <svg
              class="reply-img"
              width="14"
              height="13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                fill="#5357B6"
              />
            </svg>
            <h4>Reply</h4>
          </div>
        </div>
      </div>
  `;
    return insideFunction;
  };

let myComment=function(){
  let my=`
  <div class="reply-box">
      <div class="insideBox">
        <div class="count">
          <svg
            class="plus"
            width="11"
            height="11"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
              fill="#C5C6EF"
            />
          </svg>
          <h2>${comments[1].replies[1].score}</h2>
          <svg
            class="minus"
            width="11"
            height="3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
              fill="#C5C6EF"
            />
          </svg>
        </div>

        <div class="profile">
          <div class="insideBox-2">
            <div class="info">
              <img class="img" src=${comments[1].replies[1].user.image.png} />
              <h3 class="username">${comments[1].replies[1].user.username}</h3>
      
              <p class="month">${comments[1].replies[1].createdAt}</p>
            </div>
          </div>
          <div class="text">
            <p class="comment">
              ${comments[1].replies[1].content}
            </p>
          </div>
        </div>
        <div class="reply1">
        <div class="delete-svg">
        <svg class="delete" width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/></svg>
        <h4 class="deleteText">Delete</h4>
        </div>
        <div class="edit-svg">
        <svg class="svg-img" width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg>
        <h4 class="editText">Edit</h4>
        </div>
        
        </div>
      
    </div>
  </div>
  `
  return my;
}














  let boxAndReply = createElement("div", "boxAndReply");
  let reply_div = createElement("div", "reply-div");

  container.appendChild(boxAndReply);
  boxAndReply.innerHTML += mainComents();
  if (comments[i].replies.length > 0) {
    boxAndReply.appendChild(reply_div);

   
      reply_div.innerHTML += templeteFunction();
      reply_div.innerHTML+=myComment();
     


    
  }
}
let userComment=function(){
  let jonasComment=`
  <div class="box">
  <div class="insideBox">
    <div class="count">
      <svg
        class="plus"
        width="11"
        height="11"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
          fill="#C5C6EF"
        />
      </svg>
      <h2>0</h2>
      <svg
        class="minus"
        width="11"
        height="3"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
          fill="#C5C6EF"
        />
      </svg>
    </div>

    <div class="profile">
      <div class="insideBox-2">
        <div class="info">
          <img class="img" src=${comments[1].replies[1].user.image.png} />
          <h3 class="username">${comments[1].replies[1].user.username}</h3>
  
          <p class="month">Just now</p>
        </div>
      </div>
      <div class="text">
        <p class="comment commentByUser">
         
        </p>
      </div>
    </div>
    <div class="reply1">
    <div class="delete-svg">
    <svg class="delete" width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/></svg>
    <h4 class="deleteText">Delete</h4>
    </div>
    <div class="edit-svg">
    <svg class="svg-img" width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg>
    <h4 class="editText">Edit</h4>
    </div>
    
    </div>
  
</div>
</div>
  `
      return jonasComment
}
let myComent = function () {
  let comentUser = `<div class="user">
  <img class="user-img" src="./images/avatars/image-juliusomo.png" />
  <textarea onchange="changeFunction(event)" placeholder="Add a comment…"></textarea>
  <button  onclick="clickFunction(event)">SEND</button>
</div>`;
  return comentUser;
};

container.innerHTML += myComent();

let textArea = document.querySelector("textarea");
let button=document.querySelector("button");
let a=button;
let user=document.querySelector(".user");
console.log(user)
let replyBtn = document.querySelectorAll(".reply");
console.log(user.children[2])


window.clickFunction=()=>{
 console.log(user.children[1].value)
  if(user.children[1].value!==""){

   
   container.innerHTML+=userComment()
   //container.insertAdjacentHTML('beforeend', userComment());
   
   container.insertBefore(container.lastElementChild,container.lastElementChild.previousElementSibling)
   
   let commentByUser=document.querySelectorAll(".commentByUser");

   commentByUser[commentByUser.length-1].textContent=user.children[1].value;
   user.children[1].value=""
   
  
   
  
 
 
  
  

  
    
  }
}
window.changeFunction=(event)=>{
  console.log(event.target.value);
  user.children[1].value=event.target.value;
}



/*for(let z=0;z<comments[i].replies.length;z++)
     {
      boxAndReply.appendChild(reply_div);
      
      reply_div.innerHTML+=templeteFunction();
      
     
      
     
    }
*/

/*<div class="box">
        <div class="insideBox">
          <div class="count">
            <svg
              class="plus"
              width="11"
              height="11"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
                fill="#C5C6EF"
              />
            </svg>
            <h2>12</h2>
            <svg
              class="minus"
              width="11"
              height="3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
                fill="#C5C6EF"
              />
            </svg>
          </div>

          <div class="profile">
            <div class="insideBox-2">
              <div class="info">
                <img class="img" src="./images/avatars/image-amyrobson.png" />
                <h3>amyrobson</h3>
                <p class="month">1 month ago</p>
              </div>
            </div>
            <div class="text">
              <p class="comment">
                Impressive! Though it seems the drag feature could be improved.
                But overall it looks incredible. You’ve nailed the design and
                the responsiveness at various breakpoints works really well.
              </p>
            </div>
          </div>
          <div class="reply">
            <svg
              class="reply-img"
              width="14"
              height="13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                fill="#5357B6"
              />
            </svg>
            <h4>Reply</h4>
          </div>
        </div>
      </div>
      */

/*
      <div class="reply-div">
      <div class="reply-box">
      <div class="insideBox">
        <div class="count">
          <svg
            class="plus"
            width="11"
            height="11"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
              fill="#C5C6EF"
            />
          </svg>
          <h2>12</h2>
          <svg
            class="minus"
            width="11"
            height="3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
              fill="#C5C6EF"
            />
          </svg>
        </div>

        <div class="profile">
          <div class="insideBox-2">
            <div class="info">
              <img class="img" src="./images/avatars/image-amyrobson.png" />
              <h3>amyrobson</h3>
              <p class="month">1 month ago</p>
            </div>
          </div>
          <div class="text">
            <p class="comment">
              Impressive! Though it seems the drag feature could be improved.
              But overall it looks incredible. You’ve nailed the design and
              the responsiveness at various breakpoints works really well.
            </p>
          </div>
        </div>
        <div class="reply">
          <svg
            class="reply-img"
            width="14"
            height="13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
              fill="#5357B6"
            />
          </svg>
          <h4>Reply</h4>
        </div>
      
    </div>
  </div>
    </div>
    */

/*
    <div class="user">
        <img class="user-img" src="./images/avatars/image-juliusomo.png" />
        <textarea placeholder="Add a comment…"></textarea>
        <button>SEND</button>
      </div>

      */
