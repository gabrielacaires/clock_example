// we need to get the time somehow
// ??? how to draw the clock on the HTML page
// some of kind of loop to redraw clock

// change css using jquery
// $("#txt").css({ color: "blue", fontSize: "25px" });

// 4 / 2 = 2
// 4 / 3 = 1 R1

// 4 % 2 = 0
// 4 % 3 = 1

// 2 % 2 = 0
// 3 % 2 = 1

// if a number is even then % with 2 will return 0
// otherwise if a number is odd then % with 2 will return 1

$(document).ready(function() {
  
  setBackground();

  function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      var ms = today.getMilliseconds();
      var ampm = isAMorPM(h);
      h = changeMilitary(h);
      m = checkTime(m);
      s = checkTime(s);
      $('#txt').html(h + ":" + m + ":" + s + ampm);
      bcolor(m,s,ms);
      oddEven(m);
      changefont(h);
      setTimeout(startTime, 500);
  }

  function isAMorPM(i) {
    var value;
    if (i >= 12) {
      value = "PM"
    } else {
      value = "AM"
    }
    return value;
  }

  function changeMilitary(i) {
    if (i > 12) {
      i = i - 12;
    }
    return i;
  }

  function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
  }

  function oddEven(i){
    if(i % 2 === 0){
      $("#txt").css({
        color: "orange"
      })
    } else {
      $("#txt").css({
        color: "red"
      })
    }
  }

  /*Change to a random color every 5 min*/
  function bcolor(min , sec, msec) {
    if(min % 5 == 0 && sec == 0 && msec < 500){ //min % 5 are the multiples of 5 min
      var randColor = randomColor();

      $("#txt").css({
        backgroundColor: randColor
      });
    }
  }

  function setBackground(){
     var randColor = randomColor();

      $("#txt").css({
        backgroundColor: randColor
      });
  };

/* Alternates between 2 background colors, every 5 min

  function bcolor(i) {
    if((i <= 5 )||(i > 10 && i <= 15)||(i > 20 && i <=25)||(i > 30 && i <=35)||(i > 40 && i <=45)||(i > 50 && i <=55)){
      $("#txt").css({
        backgroundColor: "lightgreen"
      })
     } else {
        $("#txt").css({
          backgroundColor: "purple"
        })
    }
  }*/

  function changefont(i) {

    var fontsizes = ["40px","50px","60px","70px","80px","90px","100px","110px","120px","130px","140px","150px"];
    
    var font = fontsizes[i-1];

    $("#txt").css({
      fontSize: font
    });
  };


  startTime()

});

function randomColor(){
  var rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];

    rgbcolor = [rgb[0].toFixed([0]),rgb[1].toFixed([0]),rgb[2].toFixed([0])];
    
    var randomcolor = "rgb("+rgbcolor[0]+","+rgbcolor[1]+","+rgbcolor[2]+")";

    return randomcolor;
}

