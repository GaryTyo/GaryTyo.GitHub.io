document.addEventListener('keydown', rightKey)
var i = 0
var pas = "green1"
var choose = "green";
var def = "def";
var elem1 = 'ф1ф ф2ф ы3ы в4в а5а п6п р7р о8о л9л д0д 0д0 9л9 8о8 7р7 6п6 5а5 4в4 3ы3 2ф2 1ф1 ф1ф ф2ф ы3ы в4в а5а п6п р7р о8о л9л д0д 0д0 9л9 8о8 7р7 6п6 5а5 4в4 3ы3 2ф2 1ф1 ф1ф ф2ф ы3ы в4в а5а п6п р7р о8о л9л д0д 0д0 9л9 8о8 7р7 6п6 5а5 4в4 3ы3 2ф2 1ф1 ф1ф ф2ф ы3ы в4в а5а п6п р7р о8о л9л д0д 0д0 9л9 8о8 7р7 6п6 5а5 4в4 3ы3 2ф2 1ф1 ф1ф ф2ф ы3ы в4в а5а п6п р7р о8о л9л д0д 0д0'
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
//numbers row
   if((txt1=='1')||(txt1=='!')){
     var button=document.getElementById("fourty-nine");
     button.dataset.key=349
   }
   if((txt1=='2')||txt1=='"'){
     var button=document.getElementById("fifty");
     button.dataset.key=350
   }
   if((txt1=='3')||(txt1=='№')){
     var button=document.getElementById("fifty-one");
     button.dataset.key=351
   }
   if((txt1=='4')||(txt1==';')){
     var button=document.getElementById("fifty-two");
     button.dataset.key=352
   }
   if((txt1=='5')||(txt1=='%')){
     var button=document.getElementById("fifty-three");
     button.dataset.key=353
   }
   if((txt1=='6')||(txt1==':')){
     var button=document.getElementById("fifty-four");
     button.dataset.key=354
   }
   if((txt1=='7')||(txt1=='?')){
     var button=document.getElementById("fifty-five");
     button.dataset.key=355
   }
   if((txt1=='8')||(txt1=='*')){
     var button=document.getElementById("fifty-six");
     button.dataset.key=356
   }
   if((txt1=='9')||(txt1=='(')){
     var button=document.getElementById("fifty-seven");
     button.dataset.key=357
   }
   if((txt1=='0')||(txt1==')')){
     var button=document.getElementById("fourty-eight");
     button.dataset.key=348
   }
   if((txt1=='-')||(txt1=='_')){
     var button=document.getElementById("hundred-eighty-nine");
     button.dataset.key=489
   }
   if((txt1=='+')||(txt1=='=')){
     var button=document.getElementById("hundred-eighty-seven");
     button.dataset.key=487
   }
//top row
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
//midle row
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
//bottom row
  if((txt1=='я')||(txt1=='Я')){
    var button=document.getElementById("ninety");
    button.dataset.key=390
  }
  if(txt1=='ч'||(txt1=='Ч')){
    var button=document.getElementById("eighty-eight");
    button.dataset.key=388
  }
  if((txt1=='с')||(txt1=='С')){
    var button=document.getElementById("sixty-seven");
    button.dataset.key=367
  }
  if((txt1=='м')||(txt1=='М')){
    var button=document.getElementById("eighty-six");
    button.dataset.key=386
  }
  if((txt1=='и')||(txt1=='И')){
    var button=document.getElementById("sixty-six");
    button.dataset.key=366
  }
  if((txt1=='т')||(txt1=='Т')){
    var button=document.getElementById("seventy-eight");
    button.dataset.key=378
  }
  if(txt1=='ь'){
    var button=document.getElementById("seventy-seven");
    button.dataset.key=377
  }
  if((txt1=='б')||(txt1=='Б')){
    var button=document.getElementById("hundred-eighty-eight");
    button.dataset.key=488
  }
  if((txt1=='ю')||(txt1=='Ю')){
    var button=document.getElementById("hundred-ninety");
    button.dataset.key=490
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
    //numbers row
     if((txt1=='1')||(txt1=='!')){
       var button=document.getElementById("fourty-nine");
       button.dataset.key=349
     }
     if((txt1=='2')||txt1=='"'){
       var button=document.getElementById("fifty");
       button.dataset.key=350
     }
     if((txt1=='3')||(txt1=='№')){
       var button=document.getElementById("fifty-one");
       button.dataset.key=351
     }
     if((txt1=='4')||(txt1==';')){
       var button=document.getElementById("fifty-two");
       button.dataset.key=352
     }
     if((txt1=='5')||(txt1=='%')){
       var button=document.getElementById("fifty-three");
       button.dataset.key=353
     }
     if((txt1=='6')||(txt1==':')){
       var button=document.getElementById("fifty-four");
       button.dataset.key=354
     }
     if((txt1=='7')||(txt1=='?')){
       var button=document.getElementById("fifty-five");
       button.dataset.key=355
     }
     if((txt1=='8')||(txt1=='*')){
       var button=document.getElementById("fifty-six");
       button.dataset.key=356
     }
     if((txt1=='9')||(txt1=='(')){
       var button=document.getElementById("fifty-seven");
       button.dataset.key=357
     }
     if((txt1=='0')||(txt1==')')){
       var button=document.getElementById("fourty-eight");
       button.dataset.key=348
     }
     if((txt1=='-')||(txt1=='_')){
       var button=document.getElementById("hundred-eighty-nine");
       button.dataset.key=489
     }
     if((txt1=='+')||(txt1=='=')){
       var button=document.getElementById("hundred-eighty-seven");
       button.dataset.key=487
     }

   //top row
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
 //midle row
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
 //bottom row
   if((txt1=='я')||(txt1=='Я')){
     var button=document.getElementById("ninety");
     button.dataset.key=390
   }
   if(txt1=='ч'||(txt1=='Ч')){
     var button=document.getElementById("eighty-eight");
     button.dataset.key=388
   }
   if((txt1=='с')||(txt1=='С')){
     var button=document.getElementById("sixty-seven");
     button.dataset.key=367
   }
   if((txt1=='м')||(txt1=='М')){
     var button=document.getElementById("eighty-six");
     button.dataset.key=386
   }
   if((txt1=='и')||(txt1=='И')){
     var button=document.getElementById("sixty-six");
     button.dataset.key=366
   }
   if((txt1=='т')||(txt1=='Т')){
     var button=document.getElementById("seventy-eight");
     button.dataset.key=378
   }
   if(txt1=='ь'){
     var button=document.getElementById("seventy-seven");
     button.dataset.key=377
   }
   if((txt1=='б')||(txt1=='Б')){
     var button=document.getElementById("hundred-eighty-eight");
     button.dataset.key=488
   }
   if((txt1=='ю')||(txt1=='Ю')){
     var button=document.getElementById("hundred-ninety");
     button.dataset.key=490
   }
   if(txt1=='.'){
     var button=document.getElementById("hundred-ninety-nine");
     button.dataset.key=499
   }
   if(txt1==','){
     var button=document.getElementById("hundred-ninety-nine");
     button.dataset.key=499
   }


   if (e.key=='Shift'){
     var x = document.createElement("STYLE");
     var t = document.createTextNode("#green {background:  #78ff7c;}");
     x.appendChild(t);
     document.head.appendChild(x);


     currentText(i)
   }

   if (e.key==txt1){
     var x = document.createElement("STYLE");
     var t = document.createTextNode("#green {background:  #2bff32;}");
     x.appendChild(t);
     document.head.appendChild(x);
     button.dataset.key=button.dataset.key-300
     i = i + 1
     currentText(i)
   }
      if ((e.key!=txt1)&&(e.key!='Shift')){
        var x = document.createElement("STYLE");
        var t = document.createTextNode("#green {background:  #ff9e9d;}");
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
        elem1='й1й й2й я1я я2я ц3ц ч3ч у4у с4с к5к м5м е6е и6и н7н т7т г7г ь7ь ш8ш б8б щ9щ ю9ю з0з .0. 0.0 9ю9 9щ9 8б8 8ш8 7ь7 7г7 7н7 7т7 6е6 6и6 5м5 5к5 4с4 4у4 3ч3 3ц3 2я2 2й2 1я1 1й1 й1й й2й я1я я2я ц3ц ч3ч у4у с4с к5к м5м е6е и6и н7н т7т г7г ь7ь ш8ш б8б щ9щ ю9ю з0з .0. 0.0 9ю9 9щ9 8б8 8ш8 7ь7 7г7 7н7 7т7 6е6 6и6 5м5 5к5 4с4 4у4 3ч3 3ц3 2я2 2й2 1я1 1й1 й1й й2й я1я я2я ц3ц ч3ч у4у с4с к5к м5м е6е'
        len = elem1.length
        currentText(i)
        c=2
      }

      if ((i == len)&&(c==2))
      {
        texty = texty + " #c_three {background-image: linear-gradient(to right, #95fd98 50%, rgba(255, 255, 255, 0) 50%);} #c_two {background: #95fd98} ";
        ctrlText()

        i=0
        elem1='121 232 343 454 565 676 787 898 909 0-0 -=- =-= -0- 090 989 878 767 656 545 434 323 212 121 232 343 454 565 676 787 898 909 0-0 -=- =-= -0- 090 989 878 767 656 545 434 323 212 121 232 343 454 565 676 787 898 909 0-0 -=- =-= -0- 090 989 878 767 656 545 434 323 212 121 232 343 454 565 676 787 898 909 0-0 -=- =-= -0- 090 989 878 767 656 545 434 323 212 121 232 343 454 565 676 787 898 909 0-0 -=- =-= -0- 090'
        len = elem1.length
        currentText(i)
        c=3
      }

      if ((i == len)&&(c==3))
      {
        texty = texty + "#c_four {background-image: linear-gradient(to right, #95fd98 50%, rgba(255, 255, 255, 0) 50%);} #c_three {background: #95fd98} ";
        ctrlText()

        i=0
        elem1='1!1 "2" 3№3 ;4; 5%5 :6: 7?7 *8* 9(9 )0) -_- +=+ =+= _-_ 0)0 (9( 8*8 ?7? 6:6 %5% 4;4 №3№ 2"2 !1! 1!1 "2" 3№3 ;4; 5%5 :6: 7?7 *8* 9(9 )0) -_- +=+ =+= _-_ 0)0 (9( 8*8 ?7? 6:6 %5% 4;4 №3№ 2"2 !1! 1!1 "2" 3№3 ;4; 5%5 :6: 7?7 *8* 9(9 )0) -_- +=+ =+= _-_ 0)0 (9( 8*8 ?7? 6:6 %5% 4;4 №3№ 2"2 !1! 1!1 "2" 3№3 ;4; 5%5 :6: 7?7 *8* 9(9 )0) -_- +=+ =+= _-_ 0)0 (9( 8*8 ?7? 6:6 %5% 4;4 №3№ 2"2 !1! 1!1 "2" 3№3 ;4; 5%5 :6: 7?7'
        len = elem1.length
        currentText(i)
        c=4
      }

      if ((i == len)&&(c==4))
      {
        texty = texty + " #c_five {background-image: linear-gradient(to right, #95fd98 50%, rgba(255, 255, 255, 0) 50%);} #c_four {background: #95fd98} ";
        ctrlText()

        i=0
        elem1='+_+ _)_ )() (*( *?* ?:? :%: %;% ;№; №"№ "!" !"! "№" №;№ ;%; %:% :?: ?*? *(* ()( )_) _+_ +_+ _)_ )() (*( *?* ?:? :%: %;% ;№; №"№ "!" !"! "№" №;№ ;%; %:% :?: ?*? *(* ()( )_) _+_ +_+ _)_ )() (*( *?* ?:? :%: %;% ;№; №"№ "!" !"! "№" №;№ ;%; %:% :?: ?*? *(* ()( )_) _+_ +_+ _)_ )() (*( *?* ?:? :%: %;% ;№; №"№ "!" !"! "№" №;№ ;%; %:% :?: ?*? *(* ()( )_) _+_ +_+ _)_ )() (*( *?* ?:? :%: %;% ;№; №"№ "!" !"! "№" №;№ ;%; %:% :?:'
        len = elem1.length
        currentText(i)
        c=5
      }

      if ((i == len)&&(c==5))
      {
        texty = texty + "#c_five {background: #95fd98} ";
        ctrlText()
        len=len+4
        i=0
        elem1='В 1939 году началась 2-ая мировая война. В классе 34 человека. В 2020 году распространился вирус "Ковид-19".  Я выступаю под №7. Он обязательно это сделает (нет). Он сказал: "Я не люблю **". 50% всех работ написаны на 4. 3-2=1. 2+2=4. Это ужасно! Ты же ничего не забыл(-а)? "_" - этот знак часто используют в игровых никах: нуб_мастер2010;'
        len = elem1.length
        currentText(i)
        c=6
      }


 }


currentText(i)
ctrlText()
