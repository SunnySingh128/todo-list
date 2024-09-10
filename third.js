let button=document.querySelector('.hul');
let jaisal=document.querySelector('input');
console.log(jaisal.value);
jaisal.addEventListener("keypress",(event)=>{
  if(event.key==="Enter"){
    if(jaisal.value!=''){
    let body=document.querySelector('body');
    let d=document.createElement("div");
    let g=document.createElement("pre");
    body.appendChild(d);
    body.appendChild(g);
    g.innerText=jaisal.value;
    d.appendChild(g);
    d.style.backgroundColor='green';
    let e=document.createElement('button');
    let f=document.createElement('button');
    body.appendChild(e);
    d.appendChild(e);
    body.appendChild(f);
    e.innerText="delete";
    d.appendChild(f);
  f.innerText="add";
  if(jaisal.value!=''){
    jaisal.value='';
  }
  f.addEventListener("click",()=>{
    let body=document.querySelector('body');
    let d=document.createElement("div");
    let g=document.createElement("pre");
    body.appendChild(d);
    body.appendChild(g);
    g.innerText=jaisal.value;
    d.appendChild(g);
    d.style.backgroundColor='green';
    let e=document.createElement('button');
    let f=document.createElement('button');
    body.appendChild(e);
    d.appendChild(e);
    e.innerText="delete";
    body.appendChild(f);
    d.appendChild(f);
  f.innerText="add";
  })
d.addEventListener("click",()=>{
jai(d);
});
    }
  }
});

let jai=(d)=>{
d.remove();
}
