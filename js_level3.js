document.addEventListener('keydown', rightKey)
var i = 0
var pas = "green1"
var choose = "green";
var def = "def";
var elem1 = 'еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц'
var len = elem1.length;
var c = 1

//еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц еке кук уцу цйц
//нгн гшг шщш щзщ зхз хъх нгн гшг шщш щзщ зхз хъх нгн гшг шщш щзщ зхз хъх нгн гшг шщш щзщ зхз хъх нгн гшг шщш щзщ зхз хъх нгн гшг шщш щзщ зхз хъх нгн гшг шщш щзщ зхз хъх нгн гшг шщш щзщ зхз хъх нгн гшг шщш щзщ зхз хъх нгн гшг шщш щзщ зхз хъх нгн гшг шщш щзщ зхз хъх нгн гшг шщш щзщ зхз хъх нгн гшг шщш щзщ зхз хъх нгн гшг шщш щзщ зхз хъх нгн гшг шщш щзщ


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

    //первая буквенная строчка
    if((txt1=='й')||(txt1=='Й')){
      var button=document.getElementById("eighty-one");
      button.dataset.key=381
    }
    if((txt1=='ц')||(txt1=='Ц')){
      var button=document.getElementById("eighty-seven");
      button.dataset.key=387
    }
    if((txt1=='у')||(txt1=='У')){
      var button=document.getElementById("sixty-nine");
      button.dataset.key=369
    }
    if((txt1=='к')||(txt1=='К')){
      var button=document.getElementById("eighty-two");
      button.dataset.key=382
    }
    if((txt1=='е')||(txt1=='Е')){
      var button=document.getElementById("eighty-four");
      button.dataset.key=384
    }
    if((txt1=='н')||(txt1=='Н')){
      var button=document.getElementById("eighty-nine");
      button.dataset.key=389
    }
    if((txt1=='г')||(txt1=='Г')){
      var button=document.getElementById("eighty-five");
      button.dataset.key=385
    }
    if((txt1=='ш')||(txt1=='Ш')){
      var button=document.getElementById("seventy-three");
      button.dataset.key=373
    }
    if((txt1=='щ')||(txt1=='Щ')){
      var button=document.getElementById("seventy-nine");
      button.dataset.key=379
    }
    if((txt1=='з')||(txt1=='З')){
      var button=document.getElementById("eighty");
      button.dataset.key=380
    }
    if((txt1=='х')||(txt1=='Х')){
      var button=document.getElementById("twohundred-nineteen");
      button.dataset.key=519
    }
    if(txt1=='ъ'){
      var button=document.getElementById("twohundred-twenty-one");
      button.dataset.key=521
    }
    //вторая буквенная строчка
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

   if((txt1=='й')||(txt1=='Й')){
     var button=document.getElementById("eighty-one");
     button.dataset.key=381
   }
   if((txt1=='ц')||(txt1=='Ц')){
     var button=document.getElementById("eighty-seven");
     button.dataset.key=387
   }
   if((txt1=='у')||(txt1=='У')){
     var button=document.getElementById("sixty-nine");
     button.dataset.key=369
   }
   if((txt1=='к')||(txt1=='К')){
     var button=document.getElementById("eighty-two");
     button.dataset.key=382
   }
   if((txt1=='е')||(txt1=='Е')){
     var button=document.getElementById("eighty-four");
     button.dataset.key=384
   }
   if((txt1=='н')||(txt1=='Н')){
     var button=document.getElementById("eighty-nine");
     button.dataset.key=389
   }
   if((txt1=='г')||(txt1=='Г')){
     var button=document.getElementById("eighty-five");
     button.dataset.key=385
   }
   if((txt1=='ш')||(txt1=='Ш')){
     var button=document.getElementById("seventy-three");
     button.dataset.key=373
   }
   if((txt1=='щ')||(txt1=='Щ')){
     var button=document.getElementById("seventy-nine");
     button.dataset.key=379
   }
   if((txt1=='з')||(txt1=='З')){
     var button=document.getElementById("eighty");
     button.dataset.key=380
   }
   if((txt1=='х')||(txt1=='Х')){
     var button=document.getElementById("twohundred-nineteen");
     button.dataset.key=519
   }
   if(txt1=='ъ'){
     var button=document.getElementById("twohundred-twenty-one");
     button.dataset.key=521
   }

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
        button.dataset.key=button.dataset.key-300
        i = i
        currentText(i)
        }


      if ((i == len)&&(c==1))
      {
        texty = texty + "#c_one {background: #95fd98} #c_two {background-image: linear-gradient(to right, #95fd98 50%, rgba(255, 255, 255, 0) 50%);}";
        ctrlText()

        i=0
        elem1='нгн гшг шщш щзщ зхз хъх нгн гшг шщш щзщ зхз хъх нгн гшг шщш щзщ зхз хъх нгн гшг шщш щзщ зхз хъх нгн гшг шщш щзщ зхз хъх нгн гшг шщш щзщ зхз хъх нгн гшг шщш щзщ зхз хъх нгн гшг шщш щзщ зхз хъх нгн гшг шщш щзщ зхз хъх нгн гшг шщш щзщ зхз хъх нгн гшг шщш щзщ зхз хъх нгн гшг шщш щзщ зхз хъх нгн гшг шщш щзщ зхз хъх нгн гшг шщш щзщ зхз хъх нгн гшг шщш щзщ'
        len = elem1.length
        currentText(i)
        c=2
      }

      if ((i == len)&&(c==2))
      {
        texty = texty + "#c_three {background-image: linear-gradient(to right, #95fd98 50%, rgba(255, 255, 255, 0) 50%);} #c_two {background: #95fd98} ";
        ctrlText()

        i=0
        elem1='йцй цуц уку кек йцй цуц уку кек йцй цуц уку кек йцй цуц уку кек йцй цуц уку кек йцй цуц уку кек йцй цуц уку кек йцй цуц уку кек йцй цуц уку кек йцй цуц уку кек йцй цуц уку кек йцй цуц уку кек йцй цуц уку кек йцй цуц уку кек йцй цуц уку кек йцй цуц уку кек йцй цуц уку кек йцй цуц уку кек йцй цуц уку кек йцй цуц уку кек йцй цуц уку кек йцй цуц уку кек йцй цуц уку кек йцй цуц уку кек'
        len = elem1.length
        currentText(i)
        c=3
      }

      if ((i == len)&&(c==3))
      {
        texty = texty + "#c_four {background-image: linear-gradient(to right, #95fd98 50%, rgba(255, 255, 255, 0) 50%);} #c_three {background: #95fd98} ";
        ctrlText()

        i=0
        elem1='ъхъ хзх зщз щшщ шгш гнг ъхъ хзх зщз щшщ шгш гнг ъхъ хзх зщз щшщ шгш гнг ъхъ хзх зщз щшщ шгш гнг ъхъ хзх зщз щшщ шгш гнг ъхъ хзх зщз щшщ шгш гнг ъхъ хзх зщз щшщ шгш гнг ъхъ хзх зщз щшщ шгш гнг ъхъ хзх зщз щшщ шгш гнг ъхъ хзх зщз щшщ шгш гнг ъхъ хзх зщз щшщ шгш гнг ъхъ хзх зщз щшщ шгш гнг ъхъ хзх зщз щшщ шгш гнг ъхъ хзх зщз щшщ шгш гнг ъхъ хзх зщз щшщ'
        len = elem1.length
        currentText(i)
        c=4
      }

      if ((i == len)&&(c==4))
      {
        texty = texty + "#c_five {background-image: linear-gradient(to right, #95fd98 50%, rgba(255, 255, 255, 0) 50%);} #c_four {background: #95fd98} ";
        ctrlText()

        i=0
        elem1='нгн еке гшг кук шщш уцу щзщ цйц зхз цуц хъх уку хзх кек зщз щшщ нгн еке гшг кук шщш уцу щзщ цйц зхз цуц хъх уку хзх кек зщз щшщ нгн еке гшг кук шщш уцу щзщ цйц зхз цуц хъх уку хзх кек зщз щшщ нгн еке гшг кук шщш уцу щзщ цйц зхз цуц хъх уку хзх кек зщз щшщ нгн еке гшг кук шщш уцу щзщ цйц зхз цуц хъх уку хзх кек зщз щшщ нгн еке гшг кук шщш уцу щзщ цйц зхз цуц хъх уку хзх кек'
        len = elem1.length
        currentText(i)
        c=5
      }

      if ((i == len)&&(c==5))
      {
        texty = texty + "#c_six {background-image: linear-gradient(to right, #95fd98 50%, rgba(255, 255, 255, 0) 50%);} #c_five {background: #95fd98} ";
        ctrlText()
        len=len+4
        i=0
        elem1='ъхъ йцй хзх цуц зщз уку щшщ кек шгш еке гнг кук гшг уцу шщш цйц щзщ хъх ъхъ йцй хзх цуц зщз уку щшщ кек шгш еке гнг кук гшг уцу шщш цйц щзщ хъх ъхъ йцй хзх цуц зщз уку щшщ кек шгш еке гнг кук гшг уцу шщш цйц щзщ хъх ъхъ йцй хзх цуц зщз уку щшщ кек шгш еке гнг кук гшг уцу шщш цйц щзщ хъх ъхъ йцй хзх цуц зщз уку щшщ кек шгш еке гнг кук гшг уцу шщш цйц щзщ хъх ъхъ йцй'
        len = elem1.length
        currentText(i)
        c=6
      }

      if ((i == len)&&(c==6))
      {
        texty = texty + "#c_seven {background-image: linear-gradient(to right, #95fd98 50%, rgba(255, 255, 255, 0) 50%);} #c_six {background: #95fd98} ";
        ctrlText()

        i=0
        elem1='нога шел шла Гена Коп увел увела проход Уран пошел пошла шаг гора кухарка хор нагой голый йог ушел ушла шоппер щука щенок щека горд горда конец Егор цуг цыгане ценный цена уролог Уфа фон еж лег легла Ева нора зашел зашла Олег хорек порой должен. Хор преодолел порог. Он зашел в гору. Она его не знала. Щенок шел. Она горда за него.'
        len = elem1.length;
        currentText(i)
        c = 7
      }


 }


currentText(i)
ctrlText()
