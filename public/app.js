shownotes();
var addbtn=document.getElementById("addBtn");
addbtn.addEventListener("click",function(){
    let addtxt=document.getElementById("addText");
    let notes=localStorage.getItem("notes");
    
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addtxt.value=" ";
    shownotes();
})
function shownotes(){
    let notes = localStorage.getItem("notes");    
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index) {
        html+= '<div id="notes" ><div class="noteCard card" style="width: 17rem;"><div class="card-body"><h5 class="card-title">Note '+(index+1)+'</h5><p class="card-text">'+element+'</p><a onclick="deletes(this.id)" class="btn btn-primary">delete Note</a></div></div></div>';

    });
let notesElm=document.getElementById("notes");
let none=document.getElementById("none");
if(notesObj.length != 0){
    none.innerHTML=" ";
    notesElm.innerHTML=html;
}
else{
 none.innerHTML="Nothing to show. Add a note";   
 notesElm.innerHTML=" ";
}
}
function deletes(index){
    let notes = localStorage.getItem("notes");    
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    shownotes();    
}
let search=document.getElementById('search')
search.addEventListener("input",()=>{
    let inputval=search.value.toLowerCase();
    let notecard=document.getElementsByClassName("noteCard");
    console.log(notecard);
    Array.from(notecard).forEach(function(ele){
        let cardtxt=ele.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputval)){
            ele.style.display="block";
        }else{
            ele.style.display="none";
        }
    })
})