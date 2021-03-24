document.addEventListener('keydown', key1)
var i = 0
var pas = "green1"
var choose = "green";
var def = "def";

var count = 1
var i1 = 0

var elem1 = 'Привет! Найди на своей клавиатуре буквы "а" и "о". На них находятся выступы. Поставь на "а" указательный палец левой руки, "а" на "о" правой руки. Это твои ориентиры, нажми на них.'

function nowText(){
  var elem=document.getElementById("train_text");

    elem.innerHTML=elem1;
}

nowText()

function key1(e)
{
      if (((e.key=='а')||(e.key=='о'))&&(elem1 == 'Привет! Найди на своей клавиатуре буквы "а" и "о". На них находятся выступы. Поставь на "а" указательный палец левой руки, "а" на "о" правой руки. Это твои ориентиры, нажми на них.')){
      elem1 = 'Чудесно! Этот средний ряд твоя основа, на них должны находиться пальцы. Сверху ты можешь видеть раскладку клавиатуры. Каждый цвет с определенной стороны обозначает палец, отвечающий за ряд. Слева: красный – мизинец, желтый – безымянный, зеленый - средний, голубой – указательный. Справа: зеленый – мизинец, желтый – безымянный, красный – средний, фиолетовый – указательные. Большие пальцы всегда на пробеле. Нажми на него.'
      count = count + 1
      texty = texty + " #c_one {background: #95fd98} #c_two {background-image: linear-gradient(to right, #95fd98 50%, rgba(255, 255, 255, 0) 50%);}";
      ctrlText()
      nowText()
    }
    if ((e.key==' ')&&(elem1=='Чудесно! Этот средний ряд твоя основа, на них должны находиться пальцы. Сверху ты можешь видеть раскладку клавиатуры. Каждый цвет с определенной стороны обозначает палец, отвечающий за ряд. Слева: красный – мизинец, желтый – безымянный, зеленый - средний, голубой – указательный. Справа: зеленый – мизинец, желтый – безымянный, красный – средний, фиолетовый – указательные. Большие пальцы всегда на пробеле. Нажми на него.')){

    console.log('fkgjfklsdjgkls');
    elem1 = 'Прекрасно! Теперь напечатай данную последовательность, стараясь возвращать пальцы в исходное положение, но не смотри на клавиатуру: '//фйф фяф ыцы ычы вув всв ака ама пеп пип рнр ртр ого оьо лшл лбл дщд дюд жзж эхэ эъэ
    count = count + 1
    texty = texty + " #c_three {background-image: linear-gradient(to right, #95fd98 50%, rgba(255, 255, 255, 0) 50%);} #c_two {background: #95fd98} ";
    ctrlText()
    nowText()
    currentText(i)
  }
  console.log(e.keyCode);

}

var xx = document.createElement("STYLE");
var texty = '#c_one {background-image: linear-gradient(to right, #95fd98 50%, rgba(255, 255, 255, 0) 50%);}'
var tt = document.createTextNode(texty);
ctrlText()

function ctrlText()
{
  tt = document.createTextNode(texty);
  xx.appendChild(tt);
  document.head.appendChild(xx);
}


var elem2 = 'фйф фяф ыцы ычы вув всв ака ама пеп пип рнр ртр ого оьо лшл лбл дщд дюд жзж эхэ эъэ'
function currentText(ix){

  if (elem1 =='Прекрасно! Теперь напечатай данную последовательность, стараясь возвращать пальцы в исходное положение, но не смотри на клавиатуру: ')
   {
     var elem=document.getElementById("train_text");

     var len = elem2.length;

     var newAns=''

     var idx = len;


     for (var c = -1; c<len-idx+ix; c++)
     {
       newAns=newAns + '<span id='+ pas +'>'+elem2.charAt(c)+'</span>';
     }
     for(var a=len-idx+ix; a<len-idx+ix+1; a++)
     {
       newAns=newAns + '<span id='+ choose + '>'+elem2.charAt(a)+'</span>';
     }
     for(var b=len-idx+ix+1; b<len; b++)
    {
      newAns=newAns + '<span id='+def+'>'+elem2.charAt(b)+'</span>';
    }

    elem.innerHTML = elem1 + newAns

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
    if(txt1==' '){
      var button=document.getElementById("thirty-two");
      button.dataset.key=332
    }

   }

   if (elem1 =='Молодец! Если нужно сделать заглавную букву, то нужно понимать, с какой она стороны, чтобы печатать быстрее. Если справа - «shift» нужно зажимать мизинцем правой руки, если слева – то левой руки. Так же это правило работает и для специальных знаков. Введи данные слова: ')
    {
      var elem=document.getElementById("train_text");

      var len = elem2.length;

      var newAns=''

      var idx = len;


      for (var c = -1; c<len-idx+ix; c++)
      {
        newAns=newAns + '<span id='+ pas +'>'+elem2.charAt(c)+'</span>';
      }
      for(var a=len-idx+ix; a<len-idx+ix+1; a++)
      {
        newAns=newAns + '<span id='+ choose + '>'+elem2.charAt(a)+'</span>';
      }
      for(var b=len-idx+ix+1; b<len; b++)
     {
       newAns=newAns + '<span id='+def+'>'+elem2.charAt(b)+'</span>';
     }

     elem.innerHTML = elem1 + newAns

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
     if(txt1==' '){
       var button=document.getElementById("thirty-two");
       button.dataset.key=332
     }

    }

    if (elem1 =='Умница! Для специальных знаков это правило работает по-другому. Если знак слева – то «shift» зажимается мизинцем правой рукой. Если слева – то левой рукой, чтобы не сбавлять скорость при печатании. Пропиши данный текст: ')
     {
       var elem=document.getElementById("train_text");

       var len = elem2.length;

       var newAns=''

       var idx = len;


       for (var c = -1; c<len-idx+ix; c++)
       {
         newAns=newAns + '<span id='+ pas +'>'+elem2.charAt(c)+'</span>';
       }
       for(var a=len-idx+ix; a<len-idx+ix+1; a++)
       {
         newAns=newAns + '<span id='+ choose + '>'+elem2.charAt(a)+'</span>';
       }
       for(var b=len-idx+ix+1; b<len; b++)
      {
        newAns=newAns + '<span id='+def+'>'+elem2.charAt(b)+'</span>';
      }

      elem.innerHTML = elem1 + newAns

      var nowRight = document.getElementById("green");
      var txt1 = nowRight.textContent

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
      if(txt1==' '){
        var button=document.getElementById("thirty-two");
        button.dataset.key=332
      }
  }

 }

 document.addEventListener('keydown', rightKey )

 function rightKey(e)
 {
   var nowRight = document.getElementById("green");
   var txt1 = nowRight.textContent

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
     var t = document.createTextNode("#green {background: #2bff32}");
     x.appendChild(t);
     document.head.appendChild(x);

   }

   else if ((e.key==' ')&&(i==0)){
     var x = document.createElement("STYLE");
     var t = document.createTextNode("#green {background:  #78ff7c}");
     x.appendChild(t);
     document.head.appendChild(x);
     i=i
   }

   else if ((e.key==txt1)){
     var x = document.createElement("STYLE");
     var t = document.createTextNode("#green {background:  #2bff32}");
     x.appendChild(t);
     document.head.appendChild(x);
     button.dataset.key=button.dataset.key-300
     i = i + 1
   }
   else {
     var x = document.createElement("STYLE");
     var t = document.createTextNode("#green {background: #ff9e9d}");
     x.appendChild(t);
     document.head.appendChild(x);
     i = i

      }
    currentText(i)

    if((i==elem2.length)&&(count==3))
    {
      var elem=document.getElementById("train_text");

      elem1='Молодец! Если нужно сделать заглавную букву, то нужно понимать, с какой она стороны, чтобы печатать быстрее. Если справа - «shift» нужно зажимать мизинцем правой руки, если слева – то левой руки. Так же это правило работает и для специальных знаков. Введи данные слова: '
      elem.innerHTML=elem1
      texty = texty + "#c_four {background-image: linear-gradient(to right, #95fd98 50%, rgba(255, 255, 255, 0) 50%);} #c_three {background: #95fd98} ";
      ctrlText()
      elem2 = 'Аляска Канберра Сингапур Оттава Шопен Хрущев'
      count = count + 1
      i=0
      currentText(i)
    }
    if((i==elem2.length)&&(count==4)){
      var elem=document.getElementById("train_text");
      elem1='Умница! Для специальных знаков это правило работает по-другому. Если знак слева – то «shift» зажимается мизинцем правой рукой. Если слева – то левой рукой, чтобы не сбавлять скорость при печатании. Пропиши данный текст: '
      elem.innerHTML=elem1
      elem2 = '1! "2" №3 4; 5% 6: 7? 8* (90) -9 0_0 1+2=3'
      texty = texty + "#c_five {background-image: linear-gradient(to right, #95fd98 50%, rgba(255, 255, 255, 0) 50%);} #c_four {background: #95fd98} ";
      ctrlText()
      count = count + 1
      i=0
      currentText(i)
    }
    if((i==elem2.length)&&(count==5)){
      var elem=document.getElementById("train_text");
      texty = texty + "#c_six {background-image: linear-gradient(to right, #95fd98 50%, rgba(255, 255, 255, 0) 50%);} #c_five {background: #95fd98} ";
      ctrlText()
      elem1='Отлично! В данном курсе, у тебя есть еще пять уровней. Выполняй их, чтобы запомнить расстановку букв на клавиатуре. Помни, что главное практика. Как только ты научишься. ты увидишь, как просто и быстро сможешь выполнять электронные задания с текстом. Удачи!'
      elem.innerHTML=elem1

      currentText(i)
    }
 }
