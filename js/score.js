//DOM ready
window.addEventListener('load', laden);

// load sscores from api
function laden() {
    fetch("http://www.score.velfox.eu/score/scoreapi.php")
        .then(response => {
            console.log(response.ok)
            console.log(response.status)
            console.log(response.statusText)
            return response;
        })
        .then(score => score.json())
        .then(score => placescore(score))
        .then(score => console.log(score))
}


// place scores in tabel
function placescore(score) {
    var highscore = 1;
    var body = document.getElementsByTagName("body")[0];



    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    
    // creating 2 rows
    for (var i = 0; i < 2; i++) {

        console.log(score)
        for (i = 0; i < score.length; i++) {
            var scoreByName = score[i].score;
            var datum = score[i].datum;
            // creates a table row
            var row = document.createElement("tr");

            var cell = document.createElement("td");
            var cellText = document.createTextNode("naam is: " + score[i].name);
            cell.appendChild(cellText);
            row.appendChild(cell);

            var cell = document.createElement("td");
            var cellText = document.createTextNode("score is: " + scoreByName);
            cell.appendChild(cellText);
            row.appendChild(cell);
            // add the row to the end of the table body
            tblBody.appendChild(row);
            
            if( scoreByName > highscore){
                highscore = scoreByName;
                console.log("highscore is: " + highscore);
                document.getElementById("scoreboard").innerHTML = "highscore is: " + highscore;
            } 
            
        }
    }
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
}







