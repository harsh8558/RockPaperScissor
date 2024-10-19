let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let your_score = document.querySelector("#your_score");
let comp_score = document.querySelector("#comp_score");
let pick = ["rock", "paper", "scissor"];
let msg = document.querySelector(".play_btn");
let your_count=0;
let comp_count=0;

rock.addEventListener("click",()=>{
  let randomPick = pick[Math.floor(Math.random() * pick.length)];
  
  if(randomPick==="rock")
  {
    msg.innerText="Its Draw";
    paper.classList.remove("choice1");
    scissor.classList.remove("choice1");
    msg.style.backgroundColor="black";
  }
  else if(randomPick==="paper")
  {
    msg.innerText="you Lost paper beats rock";
    msg.style.backgroundColor="red";
    paper.classList.add("choice1");
    scissor.classList.remove("choice1");
    comp_count++;
    comp_score.innerText=`${comp_count}`;
  }
  else{
    msg.innerText="you won rock beats scissor";
    msg.style.backgroundColor="green";
    scissor.classList.add("choice1");
    paper.classList.remove("choice1");
    your_count++;
    your_score.innerText=`${your_count}`;
  }
});

paper.addEventListener("click",()=>{
  let randomPick = pick[Math.floor(Math.random() * pick.length)];
  
  if(randomPick==="paper")
  {
    msg.innerText="Its Draw";
    rock.classList.remove("choice1");
    scissor.classList.remove("choice1");
    msg.style.backgroundColor="black";
  }
  else if(randomPick==="scissor")
  {
    msg.innerText="you Lost scissor beats paper";
    msg.style.backgroundColor="red";
    scissor.classList.add("choice1");
    rock.classList.remove("choice1");
    comp_count++;
    comp_score.innerText=`${comp_count}`;
  }
  else{
    msg.innerText="you won paper beats rock";
    msg.style.backgroundColor="green";
    rock.classList.add("choice1");
    scissor.classList.remove("choice1");
    your_count++;
    your_score.innerText=`${your_count}`;
  }
});

scissor.addEventListener("click",()=>{
  let randomPick = pick[Math.floor(Math.random() * pick.length)];
  
  if(randomPick==="scissor")
  {
    msg.innerText="Its Draw";
    rock.classList.remove("choice1");
    paper.classList.remove("choice1");
    msg.style.backgroundColor="black";
  }
  else if(randomPick==="paper")
  {
    msg.innerText="you won scissor beats paper";
    msg.style.backgroundColor="green";
    paper.classList.add("choice1");
    rock.classList.remove("choice1");
    your_count++;
    your_score.innerText=`${your_count}`;
  }
  else{
    msg.innerText="you lost scissor beats rock";
    msg.style.backgroundColor="red";
    rock.classList.add("choice1");
    paper.classList.remove("choice1");
    comp_count++;
    comp_score.innerText=`${comp_count}`;
  }
});

