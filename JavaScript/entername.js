const person=prompt("Please enter your name", "Your Name");
if(person==null || person==""){
    txt="User cancelled the prompt";
}
else{
    txt="Hello " + person + "! How are you today?";
}
window.alert(txt);