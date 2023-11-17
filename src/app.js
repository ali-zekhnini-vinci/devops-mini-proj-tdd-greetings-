function greet(name) {

    if (name==null || name=="" || name==undefined) {
        return 'Hello, my friend.';
    }   

    if (Array.isArray(name)) {
        if (name.length ==2){
            return "Hello, "+name[0]+" and "+name[1]+'.';
        }
        else{
            let greet = "Hello, ";
            for (let i = 0; i < name.length; i++) {
                greet+= name[i];
                if(i==name.length-1){
                    greet+=".";
                }
                else if(i==name.length-2){
                    greet+=" and ";

                }
                else{
                    greet+=", ";
                }
                
            }
            return greet;
        }
    }
    
    if (name=== name.toUpperCase()){
        return "HELLO, "+name+'.';
    }



    return `Hello, ${name}.`;
}



module.exports = greet