// DATE AT TOP OF THE SCREEN
var NowMoment = moment();
var NowDate = new Date();
var eDisplayDate = document.getElementById('currentDate');
eDisplayDate.innerHTML = moment().format("dddd MMMM Do");

var currentHour = moment("18", "h").fromNow();
console.log(currentHour)

console.log(moment().format('H'))


// Coloring the schedule based on what time it is
for (let hour = 9; hour <= 17; hour++) {

    if (((moment().format('H'))) == [hour]) {
        document.getElementById([hour]+'input').style.backgroundColor = 'red'

        for (let i = 9; i < [hour]; i++) {
            document.getElementById([i]+'input').style.backgroundColor = 'grey'
        }
        for (let i = 17; i > [hour]; i--) {
            document.getElementById([i]+'input').style.backgroundColor = 'green'
        }
    }
    if (((moment().format('H'))) < 9){
        for (let i = 9; i <= 17; i++) {
            document.getElementById([i]+'input').style.backgroundColor = 'green'
        }
    }
    if (((moment().format('H'))) > 17){
        for (let i = 9; i <= 17; i++) {
            document.getElementById([i]+'input').style.backgroundColor = 'grey'
        }
    }
  }

// VARIABLES
var saveBtn = $(".saveBtn")
var btnClicked = ''
var hourVal = ''
var typedText = ''


saveBtn.on("click", function(){
    // HourVal is set equal to the value of the button that is clicked
    hourVal = $(this).val();
    console.log('hourVal', hourVal)
    // typedText is set equal to the value of hour+"input", which will equal the ID of the appropriate input field. 
    typedText = $(`#${hourVal}input`).val();
    console.log('typedText', typedText)
    

    var locStorageObj;

    if (localStorage.getItem("data") == null) {
      locStorageObj = {};
    } else {
      locStorageObj = JSON.parse(localStorage.getItem("data"));
    }

    locStorageObj[hourVal] = typedText;

    console.log(locStorageObj)
    var locStorageObj_stringified = JSON.stringify(locStorageObj)
    console.log(locStorageObj)
    
    localStorage.setItem("data", locStorageObj_stringified)

});

function retrieveLocStorage(){
  if (localStorage.getItem("data") == null) return;
  var locStorageObj = JSON.parse(localStorage.getItem("data"));
  for (let i = 9; i <= 17; i++) {
    if (locStorageObj[i] != null) {
      $(`#${i}input`).val(locStorageObj[i]);
    }
  }
}
retrieveLocStorage();
