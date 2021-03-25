
document.addEventListener('keydown', rightKey)
var i = 0
var pas = "green1"
var choose = "green";
var def = "def";
var elem1 = 'пап ава выв ыфы пап ава выв ыфы пап ава выв ыфы пап ава выв ыфы пап ава выв ыфы пап ава выв ыфы пап ава выв ыфы пап ава выв ыфы пап ава выв ыфы пап ава выв ыфы пап ава выв ыфы пап ава выв ыфы пап ава выв ыфы пап ава выв ыфы пап ава выв ыфы пап ава выв ыфы пап ава выв ыфы пап ава выв ыфы пап ава выв ыфы пап ава выв ыфы пап ава выв ыфы пап ава выв ыфы'
var len = elem1.length;
var c = 1

function currentText(ix){
  var elem=document.getElementById("train_text");



  var newAns=''

  var idx = len;

   for (var c = -1; c<len-idx+ix; c++)
    {
      newAns=newAns + '<span id='+ pas +'>'+elem1.charAt(c)+'</span>';
    }
  for(var a=len-idx+ix; a<len-idx+ix+1; a++)
    {
      newAns=newAns + '<span id='+ choose + '>'+elem1.charAt(a)+'</span>';
    }
    for(var b=len-idx+ix+1; b<len; b++)
    {
      newAns=newAns + '<span id='+def+'>'+elem1.charAt(b)+'</span>';
    }
    elem.innerHTML=newAns;

    var nowRight = document.getElementById("green");
    var txt1 = nowRight.textContent

    if((txt1=='ф')||(txt1=='Ф')){
      var button=document.getElementById("sixty-five");
      button.dataset.key=365
    }
    if(txt1=='ы'){
      var button=document.getElementById("eighty-three");
      button.dataset.key=383
    }
    if((txt1=='в')||(txt1=='В')){
      var button=document.getElementById("sixty-eight");
      button.dataset.key=368
    }
    if((txt1=='а')||(txt1=='А')){
      var button=document.getElementById("seventy");
      button.dataset.key=370
    }
    if((txt1=='п')||(txt1=='П')){
      var button=document.getElementById("seventy-one");
      button.dataset.key=371
    }
    if((txt1=='р')||(txt1=='Р')){
      var button=document.getElementById("seventy-two");
      button.dataset.key=372
    }
    if((txt1=='о')||(txt1=='О')){
      var button=document.getElementById("seventy-four");
      button.dataset.key=374
    }
    if((txt1=='л')||(txt1=='Л')){
      var button=document.getElementById("seventy-five");
      button.dataset.key=375
    }
    if((txt1=='д')||(txt1=='Д')){
      var button=document.getElementById("seventy-six");
      button.dataset.key=376
    }
    if((txt1=='ж')||(txt1=='Ж')){
      var button=document.getElementById("hundred-eighty-six");
      button.dataset.key=486
    }
    if((txt1=='э')||(txt1=='Э')){
      var button=document.getElementById("twohundred-twenty-two");
      button.dataset.key=522
    }
    if(txt1==' '){
      var button=document.getElementById("thirty-two");
      button.dataset.key=332
    }
    if(txt1=='.'){
      var button=document.getElementById("hundred-ninety-nine");
      button.dataset.key=499
    }
    if(txt1==','){
      var button=document.getElementById("hundred-ninety-nine");
      button.dataset.key=499
    }
}

var xx = document.createElement("STYLE");
var texty = '#c_one {background-image: linear-gradient(to right, #95fd98 50%, rgba(255, 255, 255, 0) 50%);}'
var tt = document.createTextNode(texty);


function ctrlText()
{
  tt = document.createTextNode(texty);
  xx.appendChild(tt);
  document.head.appendChild(xx);
}



function rightKey(e)
 {
   var nowRight = document.getElementById("green");
   var txt1 = nowRight.textContent

   if((txt1=='ф')||(txt1=='Ф')){
     var button=document.getElementById("sixty-five");
     button.dataset.key=365
   }
   if(txt1=='ы'){
     var button=document.getElementById("eighty-three");
     button.dataset.key=383
   }
   if((txt1=='в')||(txt1=='В')){
     var button=document.getElementById("sixty-eight");
     button.dataset.key=368
   }
   if((txt1=='а')||(txt1=='А')){
     var button=document.getElementById("seventy");
     button.dataset.key=370
   }
   if((txt1=='п')||(txt1=='П')){
     var button=document.getElementById("seventy-one");
     button.dataset.key=371
   }
   if((txt1=='р')||(txt1=='Р')){
     var button=document.getElementById("seventy-two");
     button.dataset.key=372
   }
   if((txt1=='о')||(txt1=='О')){
     var button=document.getElementById("seventy-four");
     button.dataset.key=374
   }
   if((txt1=='л')||(txt1=='Л')){
     var button=document.getElementById("seventy-five");
     button.dataset.key=375
   }
   if((txt1=='д')||(txt1=='Д')){
     var button=document.getElementById("seventy-six");
     button.dataset.key=376
   }
   if((txt1=='ж')||(txt1=='Ж')){
     var button=document.getElementById("hundred-eighty-six");
     button.dataset.key=486
   }
   if((txt1=='э')||(txt1=='Э')){
     var button=document.getElementById("twohundred-twenty-two");
     button.dataset.key=522
   }
   if(txt1==' '){
     var button=document.getElementById("thirty-two");
     button.dataset.key=332
   }
   if(txt1=='.'){
     var button=document.getElementById("hundred-ninety-nine");
     button.dataset.key=499
   }
   if(txt1==','){
     var button=document.getElementById("hundred-ninety-nine");
     button.dataset.key=499
   }



   if (e.key==txt1){
     var x = document.createElement("STYLE");
     var t = document.createTextNode("#green {background:  #2bff32; border-radius: 2px; border: #2bff32 solid 4.5px;}");
     x.appendChild(t);
     document.head.appendChild(x);
     i = i + 1
     button.dataset.key=button.dataset.key-300
     currentText(i)
   }
      if ((e.key!=txt1)&&(e.key!='Shift')){
        var x = document.createElement("STYLE");
        var t = document.createTextNode("#green {background:  #ff9e9d;border-radius: 2px; border: #ff9e9d solid 4.5px;м }");
        x.appendChild(t);
        document.head.appendChild(x);
        i = i
        currentText(i)
        }

      if ((i == len)&&(c==1))
      {
        texty = texty + "#c_one {background: #95fd98} #c_two {background-image: linear-gradient(to right, #95fd98 50%, rgba(255, 255, 255, 0) 50%);}";
        ctrlText()

        i=0
        elem1='рор оло лдл джд жэж рор оло лдл джд жэж рор оло лдл джд жэж рор оло лдл джд жэж рор оло лдл джд жэж рор оло лдл джд жэж рор оло лдл джд жэж рор оло лдл джд жэж рор оло лдл джд жэж рор оло лдл джд жэж рор оло лдл джд жэж рор оло лдл джд жэж рор оло лдл джд жэж рор оло лдл джд жэж рор оло лдл джд жэж рор оло лдл джд жэж рор оло лдл джд рор оло лдл джд'

        currentText(i)
        c=2
      }

      if ((i == len)&&(c==2))
      {
        texty = texty + "#c_three {background-image: linear-gradient(to right, #95fd98 50%, rgba(255, 255, 255, 0) 50%);} #c_two {background: #95fd98} ";
        ctrlText()

        i=0
        elem1='фыф ывы вав апа фыф ывы вав апа фыф ывы вав апа фыф ывы вав апа фыф ывы вав апа фыф ывы вав апа фыф ывы вав апа фыф ывы вав апа фыф ывы вав апа фыф ывы вав апа фыф ывы вав апа фыф ывы вав апа фыф ывы вав апа фыф ывы вав апа фыф ывы вав апа фыф ывы вав апа фыф ывы вав апа фыф ывы вав апа фыф ывы вав апа фыф ывы вав апа фыф ывы вав апа фыф ывы вав апа'

        currentText(i)
        c=3
      }

      if ((i == len)&&(c==3))
      {
        texty = texty + "#c_four {background-image: linear-gradient(to right, #95fd98 50%, rgba(255, 255, 255, 0) 50%);} #c_three {background: #95fd98} ";
        ctrlText()

        i=0
        elem1='эжэ ждж длд лол оро эжэ ждж длд лол оро эжэ ждж длд лол оро эжэ ждж длд лол оро эжэ ждж длд лол оро эжэ ждж длд лол оро эжэ ждж длд лол оро эжэ ждж длд лол оро эжэ ждж длд лол оро эжэ ждж длд лол оро эжэ ждж длд лол оро эжэ ждж длд лол оро эжэ ждж длд лол оро эжэ ждж длд лол оро эжэ ждж длд лол оро эжэ ждж длд лол оро эжэ ждж длд лол эжэ ждж длд лол'

        currentText(i)
        c=4
      }

      if ((i == len)&&(c==4))
      {
        texty = texty + "#c_five {background-image: linear-gradient(to right, #95fd98 50%, rgba(255, 255, 255, 0) 50%);} #c_four {background: #95fd98} ";
        ctrlText()

        i=0
        elem1='рор пап оло ава лдл выв джд ыфы жэж фыф эжэ ывы ждж вав длд апа лол рор пап оло ава лдл выв джд ыфы жэж фыф эжэ ывы ждж вав длд апа лол рор пап оло ава лдл выв джд ыфы жэж фыф эжэ ывы ждж вав длд апа лол рор пап оло ава лдл выв джд ыфы жэж фыф эжэ ывы ждж вав длд апа лол рор пап оло ава лдл выв джд ыфы жэж фыф эжэ ывы ждж вав длд апа рор пап оло ава лдл выв джд'

        currentText(i)
        c=5
      }

      if ((i == len)&&(c==5))
      {
        texty = texty + "#c_six {background-image: linear-gradient(to right, #95fd98 50%, rgba(255, 255, 255, 0) 50%);} #c_five {background: #95fd98} ";
        ctrlText()
        len=len+4
        i=0
        elem1='эжэ фыф ждж ывы длд вав лол апа оро пап оло ава лдл выв джд ыфы жэж эжэ фыф ждж ывы длд вав лол апа оро пап оло ава лдл выв джд ыфы жэж эжэ фыф ждж ывы длд вав лол апа оро пап оло ава лдл выв джд ыфы жэж эжэ фыф ждж ывы длд вав лол апа оро пап оло ава лдл выв джд ыфы жэж эжэ фыф ждж ывы длд вав лол апа оро пап оло ава лдл выв джд ыфы жэж эжэ фыф ждж ывы'

        currentText(i)
        c=6
      }

      if ((i == len)&&(c==6))
      {
        texty = texty + "#c_seven {background-image: linear-gradient(to right, #95fd98 50%, rgba(255, 255, 255, 0) 50%);} #c_six {background: #95fd98} ";
        ctrlText()

        i=0
        elem1='Дора папа Влад фора лад ждал ждала пара вор роллы выдра Алла подол рэп пар род вал выдал выдала рыло алло дрова лорд Фарра жрал жрала роды врал врала флора правда прав права продал продала орал орала овал дал дала дылда провод эжд Эдда. Папа выдал роллы. Влад продал дрова. Алла права. Эдда ждала роды.'
        len = elem1.length;
        currentText(i)
        c = 7
      }


 }


currentText(i)
ctrlText()
