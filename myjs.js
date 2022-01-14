function chuyenDoi(F){
 let  C = (F-32)/1.8
    return C
}


function inputF(){
    let text= document.getElementById('chuyendoi').value;
   let  result = chuyenDoi(text)
    document.getElementById("result").innerHTML=result + " - độ C"
}