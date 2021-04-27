var train_model = [1,1,1,2,2,3,4,4,4,5,5,6,6,6,7,7,7,8,8,8,9,9,9,1,1,1,1]; //Modelo inicial de entrenamiento
var possibles_models_win = [[1,2,3],[1,4,7],[2,5,8],[3,6,9],[4,5,6],[7,8,9],[1,5,9],[3,5,7]]; //Modelos posibles para ganar
var pass_values = [];for (let i = 0; i < train_model.length; i++) {pass_values.push(train_model[[i]]);}
console.log(pass_values);

//Functions cookies get and check

function get_Cookie(v){
    var name = v + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function checkCookie(s) {
    var v = get_Cookie(s);
    if (v != "") {return true;} else {return false;}
}

//Logic model functions

if(checkCookie("train_m")){
    var gtC = get_Cookie("train_m");
    train_model = train_model.concat(gtC);

    var d = new Date();
    d.setTime(d.getTime() + (30*24*60*60*1000));
    var expires = "expires="+d.toUTCString();

    document.cookie = "train_m="+train_model+";"+expires;

    for (let i = 0; i < train_model.length; i++) {pass_values.push(train_model[[i]]);}

} else {

    var d = new Date();
    d.setTime(d.getTime() + (30*24*60*60*1000));
    var expires = "expires="+d.toUTCString();

    document.cookie = "train_m="+train_model+";"+expires;
}



