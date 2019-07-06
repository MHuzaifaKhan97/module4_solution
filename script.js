let names = ['Huzaifa','Jahanzaib','Waleed','Javeria','Usama','Jawed','Arsalan','Saad'];

for(var i = 0;i<names.length;i++){

    if(names[i].charAt(0) == 'J' || names[i].charAt(0) == 'j'){
        console.log("Good Bye "+names[i]);
    }
    else{
        console.log("Hello "+names[i]);
    }
}