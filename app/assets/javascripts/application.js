// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
var score1=[];
var score2;
var score3;
var score4;
var score5;
var score6;
var score7;
var score8;
var score9;
var score10;
var total;

function scoreQuestion1(){
 var selects = document.getElementById("answer1");
 var selectedText = selects.options[selects.selectedIndex].text;

  if(selectedText.localeCompare('Nada')==0){  score1=0;       }
  if(selectedText.localeCompare('Poco')==0){  score1=1 ;      }
  if(selectedText.localeCompare('Mucho')==0){  score1=2 ;     }
  if(selectedText.localeCompare('Bastante')==0){  score1=3 ;  }


}

function scoreQuestion2(){
 var selects = document.getElementById("answer2");
 var selectedText = selects.options[selects.selectedIndex].text;

  if(selectedText.localeCompare('Nada')==0){  score2=0;       }
  if(selectedText.localeCompare('Poco')==0){  score2=1 ;      }
  if(selectedText.localeCompare('Mucho')==0){  score2=2 ;     }
  if(selectedText.localeCompare('Bastante')==0){  score2=3 ;  }

}
function scoreQuestion3(){
 var selects = document.getElementById("answer3");
 var selectedText = selects.options[selects.selectedIndex].text;

  if(selectedText.localeCompare('Nada')==0){  score3=0       }
  if(selectedText.localeCompare('Poco')==0){  score3=1       }
  if(selectedText.localeCompare('Mucho')==0){  score3=2      }
  if(selectedText.localeCompare('Bastante')==0){  score3=3   }

}
 /*function scoreQuestion4(){
 var selects = document.getElementById("student_test_question4");
 var selectedText = selects.options[selects.selectedIndex].text;

  if(selectedText.localeCompare('Nada')==0){  score4=0       }
  if(selectedText.localeCompare('Poco')==0){  score4=1       }
  if(selectedText.localeCompare('Mucho')==0){  score4=2      }
  if(selectedText.localeCompare('Bastante')==0){  score4=3   }

}

function scoreQuestion5(){
 var selects = document.getElementById("student_test_question5");
 var selectedText = selects.options[selects.selectedIndex].text;

  if(selectedText.localeCompare('Nada')==0){  score5=0       }
  if(selectedText.localeCompare('Poco')==0){  score5=1       }
  if(selectedText.localeCompare('Mucho')==0){  score5=2      }
  if(selectedText.localeCompare('Bastante')==0){  score5=3   }

}
function scoreQuestion6(){
 var selects = document.getElementById("student_test_question6");
 var selectedText = selects.options[selects.selectedIndex].text;

  if(selectedText.localeCompare('Nada')==0){  score6=0       }
  if(selectedText.localeCompare('Poco')==0){  score6=1       }
  if(selectedText.localeCompare('Mucho')==0){  score6=2      }
  if(selectedText.localeCompare('Bastante')==0){  score6=3   }
}

function scoreQuestion7(){
 var selects = document.getElementById("student_test_question7");
 var selectedText = selects.options[selects.selectedIndex].text;

  if(selectedText.localeCompare('Nada')==0){  score7=0       }
  if(selectedText.localeCompare('Poco')==0){  score7=1       }
  if(selectedText.localeCompare('Mucho')==0){  score7=2      }
  if(selectedText.localeCompare('Bastante')==0){  score7=3   }

}
function scoreQuestion8(){
 var selects = document.getElementById("student_test_question8");
 var selectedText = selects.options[selects.selectedIndex].text;

  if(selectedText.localeCompare('Nada')==0){  score8=0       }
  if(selectedText.localeCompare('Poco')==0){  score8=1       }
  if(selectedText.localeCompare('Mucho')==0){  score8=2      }
  if(selectedText.localeCompare('Bastante')==0){  score8=3   }

}
function scoreQuestion9(){
 var selects = document.getElementById("student_test_question9");
 var selectedText = selects.options[selects.selectedIndex].text;

  if(selectedText.localeCompare('Nada')==0){  score9=0       }
  if(selectedText.localeCompare('Poco')==0){  score9=1       }
  if(selectedText.localeCompare('Mucho')==0){  score9=2      }
  if(selectedText.localeCompare('Bastante')==0){  score9=3   }

}
function scoreQuestion10(){
 var selects = document.getElementById("student_test_question10");
 var selectedText = selects.options[selects.selectedIndex].text;

  if(selectedText.localeCompare('Nada')==0){  score10=0       }
  if(selectedText.localeCompare('Poco')==0){  score10=1       }
  if(selectedText.localeCompare('Mucho')==0){  score10=2      }
  if(selectedText.localeCompare('Bastante')==0){  score10=3   }

} */
var result;
function totalScore(){
total=/*score10+score9+score8+score7+score6+score5+score4+*/score3+score2+score1;
  if(total<12){  result="Insatisfactorio"; }
  if( total>12 && total<20 ){  result="Promedio"; }
  if(total>20 && total<30 ){  result="Excelente"; }

  alert("Su rendimiento se considera : "+ " " +result +"Puntos obtenidos:" +total);
}
function grade(){
 /* scoreQuestion10();
  scoreQuestion9();
  scoreQuestion8();
  scoreQuestion7();
  scoreQuestion6();
  scoreQuestion5();
  scoreQuestion4(); */
  scoreQuestion3();
  scoreQuestion2();
  scoreQuestion1();

  totalScore();
  document.getElementById("student_test_final_score").value = total;

}

$(document).ready(function(){




});
