function validateForm(){
    let x =document.forms["myforms"]["fname"].value;
    if (x ==""){
        alert("name must be filled out");
        return false;  
}

}
