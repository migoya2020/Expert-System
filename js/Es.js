function spareQuestion0() {

    document.getElementById("questionToAsk").innerHTML="What Type of Activity do you Prefer?";
    document.getElementById("buttonArea").innerHTML= "<button onclick='spareQuestion1()' type=\"button\" id=\"nonSporting\" class=\"btn btn-primary btn-lg\">Non Sporting Activity </button>\n"+
        "<button type=\"button\" onclick='spareQuestion2()' id=\"sporting\"  class=\"btn btn-success btn-lg\">Sporting Activity</button>";
}

function spareQuestion1() {

    document.getElementById("questionToAsk").innerHTML="How much would your Non-Sporting Activity Cost?";
    document.getElementById("buttonArea").innerHTML= "<button onclick='spareQuestion3()' type=\"button\" id=\"free\" class=\"btn btn-primary btn-lg\">Free </button>\n"+
        "<button type=\"button\" onclick='spareQuestion4()' id=\"cheap\"  class=\"btn btn-success btn-lg\">Cheap</button>\n"+
        "<button type=\"button\" onclick='spareQuestion5()' id=\"expensive\"  class=\"btn btn-info btn-lg\">Expensive</button>";
}


function spareQuestion2() {

    document.getElementById("questionToAsk").innerHTML="Whats the Cost of your Sporting Activity?";
    document.getElementById("buttonArea").innerHTML= "<button onclick='spareQuestion3()' type=\"button\" id=\"free\" class=\"btn btn-primary btn-lg\">Free </button>\n"+
        "<button type=\"button\" onclick='spareQuestion4()' id=\"cheap\"  class=\"btn btn-success btn-lg\">Cheap</button>\n"+
        "<button type=\"button\" onclick='spareQuestion5()' id=\"expensive\"  class=\"btn btn-info btn-lg\">Expensive</button>";
}

function spareQuestion3() {

    document.getElementById("questionToAsk").innerHTML="If its Free, Choose Company?";
    document.getElementById("buttonArea").innerHTML= "<button onclick='spareQuestion6()' type=\"button\" id=\"solo\" class=\"btn btn-primary btn-lg\">Solo </button>\n"+
        "<button type=\"button\" onclick='spareQuestion7()' id=\"family\"  class=\"btn btn-success btn-lg\">Family</button>\n"+
        "<button type=\"button\" onclick='spareQuestion8()' id=\"friends\"  class=\"btn btn-info btn-lg\">Friends</button>";
}

function spareQuestion4() {

    document.getElementById("questionToAsk").innerHTML="You like Cheap, Choose Company?";
    document.getElementById("buttonArea").innerHTML= "<button onclick='spareQuestion9()' type=\"button\" id=\"solo\" class=\"btn btn-primary btn-lg\">Solo </button>\n"+
        "<button type=\"button\" onclick='spareQuestion10()' id=\"family\"  class=\"btn btn-success btn-lg\">Family</button>\n"+
        "<button type=\"button\" onclick='spareQuestion11()' id=\"friends\"  class=\"btn btn-info btn-lg\">Friends</button>";
}

function spareQuestion5() {

    document.getElementById("questionToAsk").innerHTML="You must be Expensive, Choose Company?";
    document.getElementById("buttonArea").innerHTML= "<button onclick='spareQuestion12()' type=\"button\" id=\"solo\" class=\"btn btn-primary btn-lg\">Solo </button>\n"+
        "<button type=\"button\" onclick='spareQuestion13()' id=\"family\"  class=\"btn btn-success btn-lg\">Family</button>\n"+
        "<button type=\"button\" onclick='spareQuestion14()' id=\"friends\"  class=\"btn btn-info btn-lg\">Friends</button>";
}
function spareQuestion6() {

    document.getElementById("questionToAsk").innerHTML="Here are your Available  Activities";
    document.getElementById("buttonArea").innerHTML= "<ul class=\"list-group list-group-flush\">\n" +
        "            <li class=\"list-group-item\" type='text' id='volunteer'>Volunteer</li>\n" +
        "            <li class=\"list-group-item\" id='blog'>Write a Blog or Novel</li>\n" +
        "        </ul>";
}

function spareQuestion7() {

    document.getElementById("questionToAsk").innerHTML="Here are your Available  Activities";
    document.getElementById("buttonArea").innerHTML= "<ul class=\"list-group list-group-flush\">\n" +
        "            <li class=\"list-group-item\" type='text' id='movie'>Watch a Movie</li>";
}

function spareQuestion8() {

    document.getElementById("questionToAsk").innerHTML="Here are your Available  Activities";
    document.getElementById("buttonArea").innerHTML= "<ul class=\"list-group list-group-flush\">\n" +
        "            <li class=\"list-group-item\" type='text' id='visit'>Visit a Sanctuary</li>";
}


function spareQuestion9() {

    document.getElementById("questionToAsk").innerHTML="Here are your Available  Activities";
    document.getElementById("buttonArea").innerHTML= "<ul class=\"list-group list-group-flush\">\n" +
        "            <li class=\"list-group-item\" type='text' id='novel'>Read a Novel</li>";
}



function spareQuestion10() {

    document.getElementById("questionToAsk").innerHTML="Here are your Available  Activities";
    document.getElementById("buttonArea").innerHTML= "<ul class=\"list-group list-group-flush\">\n" +
        "<li class=\"list-group-item\" type='text' id='painting'>Painting</li>\n" +
        "<li class=\"list-group-item\" type='cook' id='painting'>Cooking</li>";
}


function spareQuestion11() {
    document.getElementById("questionToAsk").innerHTML="Here are your Available  Activities";
    document.getElementById("buttonArea").innerHTML= "<ul class=\"list-group list-group-flush\">\n" +
        "<li class=\"list-group-item\" type='text' id='nature'>Nature Walk</li>\n" +
        "<li class=\"list-group-item\" type='cook' id='footbal'>Watch Football match between Gor and AFC</li>";
}

function spareQuestion12() {
    document.getElementById("questionToAsk").innerHTML="Here are your Available  Activities";
    document.getElementById("buttonArea").innerHTML= "<ul class=\"list-group list-group-flush\">\n" +
        "<li class=\"list-group-item\" type='text' id='class1'>Register for Classes</li>";
}

function spareQuestion13() {
    document.getElementById("questionToAsk").innerHTML="Here are your Available  Activities";
    document.getElementById("buttonArea").innerHTML= "<ul class=\"list-group list-group-flush\">\n" +
        "<li class=\"list-group-item\" type='text' id='safari'>Go for a Safari in Maasai Mara</li>";
}

function spareQuestion14() {
    document.getElementById("questionToAsk").innerHTML="Here are your Available  Activities";
    document.getElementById("buttonArea").innerHTML= "<ul class=\"list-group list-group-flush\">\n" +
        "<li class=\"list-group-item\" type='text' id='drinking'>Go Drinking</li>";

}