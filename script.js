const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");

div2.style.display="none";
div3.style.display="none";


const home =()=>{
    document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'a'}));
    div1.style.display="none";
    div3.style.display="none";
    div2.style.display="block";
}
const about =()=>{
    document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'q'}));

    div1.style.display="none";
    div2.style.display="none";
    div3.style.display="block";
}
const events =()=>{
    document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'w'}));
    div1.style.display="none";
    div2.style.display="none";
    div1.style.display="block";
}
const contact =()=>{
    document.dispatchEvent(new KeyboardEvent('keydown', {'key': 's'}));
    div1.style.display="none";
    div3.style.display="none";
    div2.style.display="block";
    
}

document.getElementById('home').addEventListener("click", home);
document.getElementById('events').addEventListener("click", events);
document.getElementById('contacts').addEventListener("click", contact);
document.getElementById('about').addEventListener("click", about);


