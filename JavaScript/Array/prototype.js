let object = {
    name:"Ajay",
    city:"Balasore",
    getIntro : function(){
        console.log(this.name +"from"+ this.city);
        
    }
}

let object2={
    name:"Avay"
}
//Never do this
object2.__proto__=object;