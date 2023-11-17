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
            let upperGreet= " AND HELLO "
            const upperArray = [];
            const lowerArray = [];
            for (let i = 0; i < name.length; i++) {
                if (name[i]== name[i].toUpperCase()){
                    upperArray.push(name[i]);
                }  
                else{
                    lowerArray.push(name[i]);
                }
            }

            for (let i = 0; i < lowerArray.length; i++) {
                greet+= lowerArray[i];
                if(i==lowerArray.length-1){
                    greet+=".";
                }
                else if(i==lowerArray.length-2){
                    greet+=" and ";

                }
                else{
                    greet+=", ";
                }
                
            }            
            
            for (let i = 0; i < upperArray.length; i++) {
                upperGreet+= upperArray[i];
                if(i==upperArray.length-1){
                    upperGreet+=".";
                }
                else if(i==upperArray.length-2){
                    upperGreet+=" AND ";

                }
                else{
                    upperGreet+=", ";
                }
                
            }
            if(upperArray.length>0) return greet+upperGreet;

            return greet;
        }
    }
    
    if (name=== name.toUpperCase()){
        return "HELLO, "+name+'.';
    }



    return `Hello, ${name}.`;
}



module.exports = greet