
const repeatString = function(word, num) {
    
    let string = '';
    let error = 'ERROR'

    if(num < 0)
    {
        return error;
    }
    else
    {

        for (i = 0; i < num; i++) {
        
            string += word;
    
        }
    
        return string

    }

    
};

// Do not edit below this line
module.exports = repeatString;
