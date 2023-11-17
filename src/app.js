function checkIfLangInArray(array){
    const len = array.length;
    return array[len-1] === "fr" || array[len-1] === "en" || array[len-1] === "nl"
}

function translateToLang(word, lang){
    if(word==='Hello'){
        if(lang==='fr'){
            return 'Bonjour';
        }
        else{
            return 'Dag';
        }
    }
    else{
        if(lang==='fr'){
            return 'et';
        }
        else{
            return 'en';
        }
    }
}

function greet(name) {

    if (name==null || name=="" || name==undefined) {
        return 'Hello, my friend.';
    }


    let hello = 'Hello';
    let and = 'and';

    if (Array.isArray(name)) {

        const lang = checkIfLangInArray(name);
        
        if (lang){
            const lang = name[name.length-1]
            hello = translateToLang(hello, lang);
            and = translateToLang(and, lang);
            name.pop();
        }
        if (name.length ==2){
            return hello+", "+name[0]+" "+and+" "+name[1]+'.';
        }
        else{
            let greet = hello+", ";
            let upperGreet= " "+and.toUpperCase()+" "+hello.toUpperCase()+" ";
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
                    greet+=" "+and+" ";

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
                    upperGreet+=" "+and.toUpperCase()+" ";

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
        return hello.toUpperCase()+", "+name+'.';
    }

    return hello+`, ${name}.`;
}

module.exports = greet