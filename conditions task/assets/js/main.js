//1. Verilmiş 3 rəqəmli ədədin bütün rəqəmlərinin bi-birindən fərqli olub olmadığını 
// tapan alqoritmi yazın(Məsələn: input 223, output "bütün rəqəmlər bərabər deyil " (false) ). 




var n = prompt ("Eded daxil edin:")
if (n>99 && n<1000) {
    var t=n%10;
    var o=((n%100)-t)/10; 
    var y=((n%1000)-(n%100))/100; 
    
    if(t==o && o==y) {
        alert ("duzdur")
    }
    else{
        alert ("sehvdir")
    }
}
else {
    alert ("3 reqemli eded daxil edin")
}




// 2. İstifadəçi char tipindən dəyər daxil edib (input) char 'a' hərfinə bərabərdirsə ekrana 
// "Azərbaycan dili seçildi" yazısı gəlsin(output), 'r' hərfinə bərabərdirsə "Rus dili seçildi" yazısı 
// gəlsin (output). Digər bütün hallarda  "Yanlış sorğu" yazısı gəlsin(output).


var char=prompt ("dil sechin"); 
if (char=='a'){
    alert ("Azərbaycan dili seçildi.");

}
else if (char=='r') {
    alert ("Rus dili seçildi.");
}

else {
    alert("Yanlış sorğu");
}
