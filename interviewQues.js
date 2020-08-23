str = ["S","N","E","E","E","S","W","W","S"]
// output ["E","S"]
const locate = () => {

    for (let i = 0; i < str.length; i++) { 
        let loc = [];
        switch (str[i+1])
        {
            case "N":      
                if ( str[i] === "S")
                {
                    str.unshift(str[i])
                } else {
                    loc.push(str[i]);
                } 
                console.log(str);
                console.log(loc);
                
            case "S":
                if ( str[i] === "N")
                {
                    str.unshift(str[i])
                }
                console.log(str)
            case "E":
                if ( str[i] === "W")
                {
                    str.unshift(str[i])
                }
                console.log(str)
            case "W":
                if ( str[i] === "E")
                {
                    str.unshift(str[i])
                }
                console.log(str)     
            default:
                break;
                 
        }; 
        return str;
        return loc;    
    };    
};
console.log(locate(str));