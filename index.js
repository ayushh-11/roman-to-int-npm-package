function roman_to_integer(s) {
    s=s.toLowerCase()
    integer = 0
    for (i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "i":
                if(s[i+1] == "v"){
                    integer += 4;
                    i++;
                    break;
                }else if(s[i+1] == "x"){
                    i++;
                    integer += 9;
                    break;
                }
                integer += 1;
                break;
            case "v":
                integer += 5;
                break;
            case "x":
                if(s[i+1] == "l"){
                    integer += 40;
                    i++;
                    break;
                }else if(s[i+1] == "c"){
                    integer += 90;
                    i++;
                    break;
                }
                integer += 10;
                break;
            case "l":
                integer += 50;
                break;
            case "c":
                if(s[i+1] == "d"){
                    integer += 400;
                    i++;
                    break;
                }else if(s[i+1] == "m"){
                    integer += 900;
                    i++;
                    break;
                }
                integer += 100;
                break;
            case "d":
                integer += 500;
                break;
            case "m":
                integer += 1000;
                break;
        }
    }
    return integer;
};
module.exports = roman_to_integer