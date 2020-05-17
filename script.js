var remove = document.getElementsByClassName('fa-times-circle');
var count =  document.getElementById('task-count');
count.innerHTML = parseInt(remove.length);
for(let i=0;i<remove.length;i++){
    remove[i].onclick = function(){
        var fin = this.parentElement;
        fin.style.display= "none";
        
    }
  
}
var check = document.querySelector('ul');
check.addEventListener('click', function(event){
    if(event.target.tagName === 'LI'){
        console.log('a');
        event.target.style.listStyle = "disc inside";
    }
});
function newTask() {
    let val = document.getElementById('inp').value;
    var list = document.createElement('li');
    if (val !=="") {
        let txt = document.createTextNode(val);
        list.appendChild(txt);
        document.getElementById('tasks').appendChild(list);
    }
    document.getElementById('inp').value = "";
    var cl = document.createElement('i');
    cl.classList.add('far');
    cl.classList.add('fa-times-circle');
    list.appendChild(cl);

    for(let i=0;i<remove.length;i++){
        remove[i].onclick = function(){
            var fin = this.parentElement;
            fin.style.display= "none";
        }
    }
}

