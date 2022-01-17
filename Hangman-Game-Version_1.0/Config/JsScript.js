var current_passowrd = Generate_passwords();
var password_index = Math.floor(Math.random() * 10);
var password = current_passowrd[password_index];
password = password.toUpperCase();
var hidden_password = "";
var wrong_answers = 0;

var yes_sound = new Audio("./Config/Sounds/yes.wav");
var no_sound = new Audio("./Config/Sounds/no.wav");
var fail_sound = new Audio("./Config/Sounds/fail.mp3");
var win_sound = new Audio("./Config/Sounds/win.wav");

var password_length = password.length;

//#region Hide password

for (i = 0; i < password_length; i++) 
{
    
    if(password.charAt(i)==" ") // indeksowanie 
    {
        hidden_password += " ";
    }
    else 
    {
        hidden_password += "-";
    }
    
}
//#endregion




var letters = new Array(35);

    letters[0] = "A";
    letters[1] = "Ą";
    letters[2] = "B";
    letters[3] = "C";
    letters[4] = "Ć";
    letters[5] = "D";
    letters[6] = "E";
    letters[7] = "Ę";
    letters[8] = "F";
    letters[9] = "G";
    letters[10] = "H";
    letters[11] = "I";
    letters[12] = "J";
    letters[13] = "K";
    letters[14] = "L";
    letters[15] = "Ł";
    letters[16] = "M";
    letters[17] = "N";
    letters[18] = "Ń";
    letters[19] = "O";
    letters[20] = "Ó";
    letters[21] = "P";
    letters[22] = "Q";
    letters[23] = "R";
    letters[24] = "S";
    letters[25] = "Ś";
    letters[26] = "T";
    letters[27] = "U";
    letters[28] = "V";
    letters[29] = "W";
    letters[30] = "X";
    letters[31] = "Y";
    letters[32] = "Z";
    letters[33] = "Ż";
    letters[34] = "Ź";

function Write_password()
{
    document.getElementById("content").innerHTML = hidden_password;
}

function Generate_passwords()
{

    var game_passwords = new Array(10);

    game_passwords[0] = "I like you so much";
    game_passwords[1] = "Have you ever played a game";
    game_passwords[2] = "Do you like this game";
    game_passwords[3] = "Im a bit tired";
    game_passwords[4] = "Less is more";
    game_passwords[5] = "Hoodie";
    game_passwords[6] = "I like programing";
    game_passwords[7] = "Tomorrow is the new beginning";
    game_passwords[8] = "Winter is coming";
    game_passwords[9] = "Tic tac toe";

    return game_passwords;
}

function Start()
{
       
    var div_content = "";

    //#region Letter generator

    for(i=0; i <= 34; i++)
    {
        var element = "let" + i;
        div_content += '<div class="letter" onclick="Check('+ i +')" id="'+ element +'">'+ letters[i] +'</div>';

        if( (i+1) % 7 == 0)
        {
            div_content += '<div style="clear:both;"></div>';
        }
    }

    //#endregion

    document.getElementById("alphabet").innerHTML = div_content;

    Write_password();
}


String.prototype.SetChar = function(place, char)
{

    if(place > this.length - 1)
    {
        return this.toString();
    }
    else
    {
        return this.substr(0, place) + char + this.substr(place+1); 
    }

}

function Check(number)
{
 
    var correct_letter_bool = false;

    for(i = 0; i < password_length; i++)
    {
        if(password.charAt(i) == letters[number]) // checking if the letter is present in password
        {
            hidden_password = hidden_password.SetChar(i,letters[number]);
            correct_letter_bool = true;
        }
        
    }

    if(correct_letter_bool == true)
    {
        var element = "let" + number;

        //#region Set correct letters div's styles

        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";

        //#endregion
        yes_sound.play();

        Write_password();
    }
    else
    {
        var element = "let" + number;

        //#region Set incorrect letters div's styles

        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";

        document.getElementById(element).setAttribute("onclick",";");

         //#endregion
         no_sound.play();

         wrong_answers++;
         var image = "./Config/Img/s"+ wrong_answers + ".jpg";
         document.getElementById("gallows").innerHTML = '<img src="' + image + '" alt="Image loading error"/>';

    }

    // WIN GAME

    if(password == hidden_password)
    {
        document.getElementById("alphabet").innerHTML = 'You guessed the password ' + password + ''+ " Good job!" +' <br /><br /> <span class="reset" onclick="location.reload()"> Try again? </span>';
        win_sound.play();
    }

    // FAIL GAME

    if(wrong_answers >= 9)
    {
        document.getElementById("alphabet").innerHTML = 'You did NOT guess the password '  + " Correct password: " + password + ' <br /><br /> <span class="reset" onclick="location.reload()"> Try again? </span>';
        fail_sound.play();
    }

}

window.onload = Start; //kiedy zajdzie zdarzenie onload wykona się funkcja Write_password