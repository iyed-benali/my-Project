
var array=[{namesong:"shape of you / Ed sheeren",listener:'3.257 B',releasedate:'6 January 2017'},
{namesong:"blinding light/The weekend",listener:'3.191 B',releasedate:'29 November 2019'},
{namesong:"dance Monkey/Tones and I",listener:'2.670',releasedate:'10 May 2019'},
{namesong:"rockstar/Post malone feat 21 Savage",listener:'2.516',releasedate:'15 September 2017'},
{namesong:"Someone You Loved/Lewis Capaldi",listener:'2.499',releasedate:'8 November 2018'},
{namesong:"One Dance /Drake feat Wizkid and Kyla",listener:'2.427',releasedate:'5 April 2016'},
{namesong:"Sunflower/Post Malone feat swae lee",listener:'2.426',releasedate:'18 October 2018'},
{namesong:"Closer/The Chainsmokers feat halsey",listener:'2.376',releasedate:'31 August 2016'},
{namesong:"Señorita/Shawn Mendes and Camila Cabello",listener:'2.244',releasedate:'18 October 2018'},
{namesong:"Believer/Imagine Dragons",listener:'2.237',releasedate:'1 February 2017'}]
function alerting(){
    var x = $("#bb").val()
    console.log($("#bb").val());
    if ($("#bb").val()==='shape of you ' || $("#bb").val()==='ed sheeren'){
alert('the first one ')}
else if ($("#bb").val()==='blinding light '||$("#bb").val()==='the weekend'){
    alert('the 2nd')
}
else if ($("#bb").val()==='dance monkey'||$("#bb").val()==='tones and i'){
    alert('the 3rd')
}
else if ($("#bb").val()==='rockstar'||$("#bb").val()==='post malone '){
    alert('the 4th')
}
else if ($("#bb").val()==='someone you loved'||$("#bb").val()==='lewis Capaldi'){
alert('the 5th')
}
else if ($("#bb").val()==='one dance '||$("#bb").val()==='drake'){
    alert('the 6th')
}
else if ($("#bb").val()==='sunflower'||$("#bb").val()==='post Malone'){
    alert('the 7th')
}
else if ($("#bb").val()==='closer'||$("#bb").val()==='the chainsmokers'){
    alert('the 8th')
}
else if ($("#bb").val()==='señorita'||$("#bb").val()==='shawn mendes'){
    alert('the 9th')
}
else if ($("#bb").val()==='believer'||$("#bb").val()==='imagine dragons'){
    alert('the 10th')
}
else{
    alert('sorry your song/artist is not on the list ')
}
}
