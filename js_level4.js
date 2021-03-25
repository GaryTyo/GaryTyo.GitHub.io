document.addEventListener('keydown', rightKey)
var i = 0
var pas = "green1"
var choose = "green";
var def = "def";
var elem1 = 'ими мсм счс чяч ими мсм счс чяч ими мсм счс чяч ими мсм счс чяч ими мсм счс чяч ими мсм счс чяч ими мсм счс чяч ими мсм счс чяч ими мсм счс чяч ими мсм счс чяч ими мсм счс чяч ими мсм счс чяч ими мсм счс чяч ими мсм счс чяч ими мсм счс чяч ими мсм счс чяч ими мсм счс чяч ими мсм счс чяч ими мсм счс чяч ими мсм счс чяч ими мсм счс чяч ими мсм счс чяч'
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
        elem1='тьт ьбь бюб ю.ю Ю,Ю тьт ьбь бюб ю.ю Ю,Ю тьт ьбь бюб ю.ю Ю,Ю тьт ьбь бюб ю.ю Ю,Ю тьт ьбь бюб ю.ю Ю,Ю тьт ьбь бюб ю.ю Ю,Ю тьт ьбь бюб ю.ю Ю,Ю тьт ьбь бюб ю.ю Ю,Ю тьт ьбь бюб ю.ю Ю,Ю тьт ьбь бюб ю.ю Ю,Ю тьт ьбь бюб ю.ю Ю,Ю тьт ьбь бюб ю.ю Ю,Ю тьт ьбь бюб ю.ю Ю,Ю тьт ьбь бюб ю.ю Ю,Ю тьт ьбь бюб ю.ю Ю,Ю тьт ьбь бюб ю.ю Ю,Ю тьт ьбь бюб ю.ю Ю,Ю тьт ьбь бюб ю.ю Ю,Ю'
        len = elem1.length
        currentText(i)
        c=2
      }

      if ((i == len)&&(c==2))
      {
        texty = texty + "#c_three {background-image: linear-gradient(to right, #95fd98 50%, rgba(255, 255, 255, 0) 50%);} #c_two {background: #95fd98} ";
        ctrlText()

        i=0
        elem1='ячя чсч смс мим ячя чсч смс мим ячя чсч смс мим ячя чсч смс мим ячя чсч смс мим ячя чсч смс мим ячя чсч смс мим ячя чсч смс мим ячя чсч смс мим ячя чсч смс мим ячя чсч смс мим ячя чсч смс мим ячя чсч смс мим ячя чсч смс мим ячя чсч смс мим ячя чсч смс мим ячя чсч смс мим ячя чсч смс мим ячя чсч смс мим ячя чсч смс мим ячя чсч смс мим ячя чсч смс мим ячя чсч смс мим ячя чсч смс мим'
        len = elem1.length
        currentText(i)
        c=3
      }

      if ((i == len)&&(c==3))
      {
        texty = texty + " #c_four {background-image: linear-gradient(to right, #95fd98 50%, rgba(255, 255, 255, 0) 50%);} #c_three {background: #95fd98} ";
        ctrlText()

        i=0
        elem1=',Ю, .ю. юбю бьб ьть ,Ю, .ю. юбю бьб ьть ,Ю, .ю. юбю бьб ьть ,Ю, .ю. юбю бьб ьть ,Ю, .ю. юбю бьб ьть ,Ю, .ю. юбю бьб ьть ,Ю, .ю. юбю бьб ьть ,Ю, .ю. юбю бьб ьть ,Ю, .ю. юбю бьб ьть ,Ю, .ю. юбю бьб ьть ,Ю, .ю. юбю бьб ьть ,Ю, .ю. юбю бьб ьть ,Ю, .ю. юбю бьб ьть ,Ю, .ю. юбю бьб ьть ,Ю, .ю. юбю бьб ьть ,Ю, .ю. юбю бьб ьть ,Ю, .ю. юбю бьб ьть ,Ю, .ю. юбю бьб ьть ,Ю, .ю. юбю бьб ьть ,Ю, .ю. юбю бьб'
        len = elem1.length
        currentText(i)
        c=4
      }

      if ((i == len)&&(c==4))
      {
        texty = texty + " #c_five {background-image: linear-gradient(to right, #95fd98 50%, rgba(255, 255, 255, 0) 50%);} #c_four {background: #95fd98} ";
        ctrlText()

        i=0
        elem1='тьт ими ьбь мсм бюб счс ю.ю чяч Ю,Ю ячя юбю чсчс бьб смс ьть мим тьт ими ьбь мсм бюб счс ю.ю чяч Ю,Ю ячя юбю чсчс бьб смс ьть мим тьт ими ьбь мсм бюб счс ю.ю чяч Ю,Ю ячя юбю чсчс бьб смс ьть мим тьт ими ьбь мсм бюб счс ю.ю чяч Ю,Ю ячя юбю чсчс бьб смс ьть мим тьт ими ьбь мсм бюб счс ю.ю чяч Ю,Ю ячя юбю чсчс бьб смс ьть мим тьт ими ьбь мсм бюб счс ю.ю чяч Ю,Ю ячя'
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
        elem1=',Ю, ячя .ю. чсч юбю смс бьб мим ьть ими ьбь мсмс бюб счс ю.ю чяч ,Ю, ячя .ю. чсч юбю смс бьб мим ьть ими ьбь мсмс бюб счс ю.ю чяч ,Ю, ячя .ю. чсч юбю смс бьб мим ьть ими ьбь мсмс бюб счс ю.ю чяч ,Ю, ячя .ю. чсч юбю смс бьб мим ьть ими ьбь мсмс бюб счс ю.ю чяч ,Ю, ячя .ю. чсч юбю смс бьб мим ьть ими ьбь мсмс бюб счс ю.ю чяч ,Ю, ячя .ю. чсч юбю смс бьб мим ьть ими ьбь'
        len = elem1.length
        currentText(i)
        c=6
      }

      if ((i == len)&&(c==6))
      {
        texty = texty + "#c_seven {background-image: linear-gradient(to right, #95fd98 50%, rgba(255, 255, 255, 0) 50%);} #c_six {background: #95fd98} ";
        ctrlText()

        i=0
        elem1='Собирался собиралась теперь только мир что который которая которое люди человек жил бывает быть смесь являюсь является пароль вам ему тебе мне забыл добрый день здравствуйте телефон спокойной ночи. Не забудь о. Он собирался пойти. Мне кажется. О чем ты говоришь. Я понял, что это не ты.'
        len = elem1.length;
        currentText(i)
        c = 7
      }


 }


currentText(i)
ctrlText()

console.log(2);
