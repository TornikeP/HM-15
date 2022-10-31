alert ("ჯავასკრიპტი ალერტის გარეშე ვერ წარმომიდგენია")


var cinema = {
    name:"რუსთაველი",
    languages : ["ინგლისური", "ქართული", "ინდური სუბტიტრებით"],
    Address : "რუსთაველის გამზ. 5",
    main_movie :{
        name : "Disco Dancer",
        imdb :9.9   
    },
    other_movies :[
        {name:"Fight club", imdb:8.8},
        {name:"Salo, or the 120 days of sodom", imdb:5.8},
        {name:"One flew over the cuckoo's nest", imdb:8.7},
        {name:"Nocturnal animals", imdb:7.5},
    ]
}

document.write("<h2>ენები</h2>")
for (var i=0; i < cinema.languages.length; i++) {
    document.write(cinema.languages[i] + "</br>")      
}

document.write("<h2>ფილმები</h2>")
for (var i = 0; i < cinema.other_movies.length; i++) {
    document.write(cinema.other_movies[i].name + "</br>" )
    document.write(cinema.other_movies[i].imdb + "</br>" )
}