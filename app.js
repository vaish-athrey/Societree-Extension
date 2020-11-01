window.firstOpen = false;
function fetchNotes(){
    //fetch notes from database
    document.querySelector('.pages-holder').innerHTML='';
    chrome.runtime.sendMessage({command:"fetchNotes", data: {notes:''}} , (response) => {
         //listen for response...
         var notes = response.data;
         var nav = '<ul>';
         window.notes = [];
         for(const noteId in notes){
            nav +='<li data-noteId="'+noteId+'">'+notes[noteId].icon+' '+notes[noteId].title+' </li>';
            window.notes[noteId] = notes[noteId];
         }
         nav +='</ul>';
         document.querySelector('.pages-holder').innerHTML = nav;
         listenforClicks();
    });

    //listen for clicks
}
fetchNotes();

function clearNote(){
    //clear note variables and action

}
function changePage(noteId){
    console.log(noteId);
    //Change selected note
}
function savePage(id, title, icon, body){
    //save note to database

}
function listenforClicks(){
var lis = document.querySelectorAll('.pages-holder ul li');
for(var i = 0; i< lis.length; i++){
    lis[i].addEventListener('click', function(){
        changePage('this.dataset.noteid');
    });
}
if(window.firstOpen == false){
    window.firstOpen = true;
    try{
        var openNote = localStorage.getItem('_notes_lastOpenPage');
        if(openNote != ''){
            document.querySelector('ul li[date-noteid = "'+openNote+'"]').click();
        }

    }catch(e){
        //
        console.log(e);
    }
}
}


