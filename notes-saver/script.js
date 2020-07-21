// console.log("check")
showNotes()

let addBtn= document.getElementById('addbtn')
addBtn.addEventListener("click",function(e){
    let addTxt=document.getElementById("addTxt")
    let notes=localStorage.getItem("notes")
    if (notes==null){
        notesObj=[]
    }
    else{
        notesObj= JSON.parse(notes)
    }

    notesObj.push(addTxt.value)
    localStorage.setItem("notes",JSON.stringify(notesObj))
    addTxt.value=""
    console.log(notesObj)
    showNotes()
})

function showNotes(){
    let notes=localStorage.getItem("notes")
    if (notes==null){
        notesObj=[]
    }
    else{
        notesObj= JSON.parse(notes)
    }

    let html=""
    notesObj.forEach(function(element,index){
    html +=`
    <div class="cardTxt my-3 mx-2" style="width: 25rem;">
        <div class="card-body">
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Note ${index+1}</label>
                <p class="searchElement form-control" rows="3">${element}</p>
            </div>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Notes</button>
        </div>
    </div>`

    })
    let notesElm=document.getElementById('notes')

    if(notesObj.length !=0){
        notesElm.innerHTML=html
    }
    else{
    notesElm.innerHTML=`<h5>Start Saving Your Notes</h5>
    <div><a class="mx-3 card" href="#addTxt" style="width: 6rem;">CLICK HERE</a></div>`
    }
}

function deleteNote(index){
    console.log('i am deleting note',index)
    let notes=localStorage.getItem("notes")
    if (notes==null){
        notesObj=[]
    }
    else{
        notesObj= JSON.parse(notes)
    }
    notesObj.splice(index,1)
    localStorage.setItem("notes",JSON.stringify(notesObj))
    showNotes()

}
 

let search=document.getElementById('searchTxt')
search.addEventListener('input',function(){

    let inputVal=search.value
    // console.log("input event fired",inputVal)
    let noteCard=document.getElementsByClassName("cardTxt")
    Array.from(noteCard).forEach(function(element){

        let cardTxt=element.getElementsByTagName('p')[0].innerText

        if (cardTxt.includes(inputVal)){
            element.style.display="block"
        }   
        else{
            element.style.display="none"
        }     

    })
})
