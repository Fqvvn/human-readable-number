module.exports = function toReadable (number) {
    let a = 'zero';
    if (number === 0) { return a}
    else {
        switch (Math.floor(number/100)) {
            case 0: a=''; break;
            case 1: a='one hundred'; break;
            case 2: a='two hundred'; break;
            case 3: a='three hundred'; break;
            case 4: a='four hundred'; break;
            case 5: a='five hundred'; break;
            case 6: a='six hundred'; break;
            case 7: a='seven hundred'; break;
            case 8: a='eight hundred'; break;
            case 9: a='nine hundred'; break; 
        }
        number%=100;
        if (Math.floor(number/10)!==1) {
            switch (Math.floor(number/10)) {
                case 0: a+=''; break;
                case 2: a+=' twenty'; break;
                case 3: a+=' thirty'; break;
                case 4: a+=' forty'; break;
                case 5: a+=' fifty'; break;
                case 6: a+=' sixty'; break;
                case 7: a+=' seventy'; break;
                case 8: a+=' eighty'; break;
                case 9: a+=' ninety'; break;
            }
            number%=10;
            switch (number) {
                case 0: break;
                case 1: a+=' one'; break;
                case 2: a+=' two'; break;
                case 3: a+=' three'; break;
                case 4: a+=' four'; break;
                case 5: a+=' five'; break;
                case 6: a+=' six'; break;
                case 7: a+=' seven'; break;
                case 8: a+=' eight'; break;
                case 9: a+=' nine'; break; }
        } else {
            switch (number) {
                case 10: a+=' ten'; break;
                case 11: a+=' eleven'; break;
                case 12: a+=' twelve'; break;
                case 13: a+=' thirteen'; break;
                case 14: a+=' fourteen'; break;
                case 15: a+=' fifteen'; break;
                case 16: a+=' sixteen'; break;
                case 17: a+=' seventeen'; break;
                case 18: a+=' eighteen'; break;
                case 19: a+=' nineteen'; break;
            }
        }
    } 
    return a.trim(); 
} 
