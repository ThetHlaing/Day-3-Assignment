
    /*
      *
    * Use string methods split(), slice(), toLowerCase() and toUpperCase() 
    * and array methods join()
    *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    */

    const name = "AlbERt eINstEiN";

    function nameFormatter(oldName) {      
      /* 
        Split the string by space
        Slice the first character and make it uppercase
        Slice the reset of the characters and make it lowercase
        Join the splitted array with space to get the final result
        Final result should be "Albert Einstein"                
        */

        const res = oldName.split(" ");

        res[0] = res[0].charAt(0).toUpperCase() + res[0].substr(1).toLowerCase();
        res[1] = res[1].charAt(0).toUpperCase() + res[1].substr(1).toLowerCase();

        return res.join(" ");
    }
    console.log(nameFormatter(name));