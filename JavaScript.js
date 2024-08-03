  

  // alert("سلام👋 خوش آمدید امیدواریم که از بازی لذت ببرید🥰");

 /**----------------------------------AddElement()------------------------------*/
        var personName=[];
        function addElement(){
            var player_name = document.getElementById('playerName').value;
              if(player_name ==''){
                  playerName.placeholder="لطفا نام بازیکن را وارد کنید"
              }else{
              var name="";
              personName.push(player_name);   
              for( let i = 0 ;i<personName.length ; i++){
                name +='<li>'+personName[i] +'</li>';
              }
              document.getElementById('list').innerHTML=name;
              playerName.value = ""; 
              document.getElementById('turnButton').style.display='block'; 
        }   
       }
       
   /*-------------------------------Turn Button ------------------------------*/
     
   var count = 0;
function turn(){
  if(personName.length==1){
    alert('حداقل اسم دو بازیکن را باید وارد کنید!!');
  }
  else{
    let randNum = Math.floor(Math.random()*personName.length);
    var ty= personName[randNum];
    
    count+=2;
    var deg = count * 180;
    document.getElementById('turnButton').style.border='3px solid #e833f5';
    document.getElementById('turnButton').style.fontSize='35px';
    document.getElementById('turnButton').style.transition='2s';
    document.getElementById('turnButton').style.boxShadow='4px 4px 2px black';
    document.getElementById('turnButton').style.transform="rotate("+deg+"deg)";
    document.getElementById('turnButton').innerHTML=ty;
    document.getElementById('showText').style.display='block';
} }

/*--------------------------------List of questions-----------------------------*/

function show(){
  document.getElementById('showItem').style.display='flex';
} 
function showTruthList(){
  document.getElementById('showTruthList').style.display='block';
  document.getElementById('showDareList').style.display='none';
  document.getElementById('truthButton').style.backgroundColor='#00d9ff';
  document.getElementById('truthButton').style.color='#021c37';
  document.getElementById('truthButton').style.borderColor='#e833f5';
  document.getElementById('darehButton').style.backgroundColor='transparent';
  document.getElementById('darehButton').style.color='#e833f5';
  document.getElementById('darehButton').style.borderColor='#00d9ff';
}
function showDareList(){
  document.getElementById('showDareList').style.display='block';
  document.getElementById('showTruthList').style.display='none';
  document.getElementById('darehButton').style.backgroundColor='#00d9ff';
  document.getElementById('darehButton').style.color='#021c37';
  document.getElementById('darehButton').style.borderColor='#e833f5';
  document.getElementById('truthButton').style.backgroundColor='transparent';
  document.getElementById('truthButton').style.color='#e833f5';
  document.getElementById('truthButton').style.borderColor='#00d9ff';
}

/*-----------------------------Show and hide Truth question---------------------*/

function showTruthText1(){
    document.getElementById('listItemTruth1').innerHTML="در فامیلت کی را از همه بیشتر دوست داری؟ "
}
function hideTruthText1(){
  document.getElementById('listItemTruth1').innerHTML="1"
}
function showTruthText2(){
    document.getElementById('listItemTruth2').innerHTML="بزرگترین هدف زندگی ات چیست؟"
}
function hideTruthText2(){
  document.getElementById('listItemTruth2').innerHTML="2"
}
function showTruthText3(){
    document.getElementById('listItemTruth3').innerHTML="با چه کسی حسودی میکنی؟"
}
function hideTruthText3(){
  document.getElementById('listItemTruth3').innerHTML="3"
}
function showTruthText4(){
    document.getElementById('listItemTruth4').innerHTML="یکی از عادت های بد خودت چیست؟"
}
function hideTruthText4(){
  document.getElementById('listItemTruth4').innerHTML="4"
}
function showTruthText5(){
    document.getElementById('listItemTruth5').innerHTML="بهترین دوست ات کیست؟"
}
function hideTruthText5(){
  document.getElementById('listItemTruth5').innerHTML="5"
}
function showTruthText6(){
    document.getElementById('listItemTruth6').innerHTML="از چه کسی نفرت داری؟"
}
function hideTruthText6(){
  document.getElementById('listItemTruth6').innerHTML="6"
}
function showTruthText7(){
    document.getElementById('listItemTruth7').innerHTML="بلندترین نمره ریاضی ات چند است؟"
}
function hideTruthText7(){
  document.getElementById('listItemTruth7').innerHTML="7"
}
function showTruthText8(){
    document.getElementById('listItemTruth8').innerHTML="از چه چیزی بیشتر میترسی؟"
}
function hideTruthText8(){
  document.getElementById('listItemTruth8').innerHTML="8"
}
function showTruthText9(){
    document.getElementById('listItemTruth9').innerHTML="عجیب ترین خوابی که تا حالا دیدی؟"
}
function hideTruthText9(){
  document.getElementById('listItemTruth9').innerHTML="9"
}
function showTruthText10(){
    document.getElementById('listItemTruth10').innerHTML="اگر رئیس جمهور شوی ،اولین کاری که انجام میدی چیست؟"
}
function hideTruthText10(){
  document.getElementById('listItemTruth10').innerHTML="10"
}
function showTruthText11(){
    document.getElementById('listItemTruth11').innerHTML="بزرگترین اشتباه زندگی ات چیست؟"
}
function hideTruthText11(){
  document.getElementById('listItemTruth11').innerHTML="11"
}
function showTruthText12(){
    document.getElementById('listItemTruth12').innerHTML="اگر پسر/دختر بودی ،چیکار میکردی؟"
}
function hideTruthText12(){
  document.getElementById('listItemTruth12').innerHTML="12"
}
function showTruthText13(){
    document.getElementById('listItemTruth13').innerHTML="آیا همه نماز هایت را می خوانی؟"
}
function hideTruthText13(){
  document.getElementById('listItemTruth13').innerHTML="13"
}
function showTruthText14(){
    document.getElementById('listItemTruth14').innerHTML="دوست داری به کدام کشور سفر کنی؟"
}
function hideTruthText14(){
  document.getElementById('listItemTruth14').innerHTML="14"
}
function showTruthText15(){
    document.getElementById('listItemTruth15').innerHTML="نقطه ضعف ات چیست؟"
}
function hideTruthText15(){
  document.getElementById('listItemTruth15').innerHTML="15"
}
function showTruthText16(){
    document.getElementById('listItemTruth16').innerHTML="پسورد گوشی ات چیست؟"
}
function hideTruthText16(){
  document.getElementById('listItemTruth16').innerHTML="16"
}
function showTruthText17(){
    document.getElementById('listItemTruth17').innerHTML="چه ویژگی افراد بازی را دوست داری؟"
}
function hideTruthText17(){
  document.getElementById('listItemTruth17').innerHTML="17"
}
function showTruthText18(){
    document.getElementById('listItemTruth18').innerHTML="آیا از مردن میترسی؟"
}
function hideTruthText18(){
  document.getElementById('listItemTruth18').innerHTML="18"
}
function showTruthText19(){
    document.getElementById('listItemTruth19').innerHTML="آیا مغرور هستی؟"
}
function hideTruthText19(){
  document.getElementById('listItemTruth19').innerHTML="19"
}
function showTruthText20(){
    document.getElementById('listItemTruth20').innerHTML="نقطه قوت ات چیست؟"
}
function hideTruthText20(){
  document.getElementById('listItemTruth20').innerHTML="20"
}
function showTruthText21(){
    document.getElementById('listItemTruth21').innerHTML="بزرگترین گناه زندگیت را بگو؟"
}
function hideTruthText21(){
  document.getElementById('listItemTruth21').innerHTML="21"
}
function showTruthText22(){
    document.getElementById('listItemTruth22').innerHTML="بهترین معلمت کی بود/است؟"
}
function hideTruthText22(){
  document.getElementById('listItemTruth22').innerHTML="22"
}

/*-----------------------------Show and hide Dare question---------------------*/

function showDareText1(){
  document.getElementById('listItemDare1').innerHTML="اسم خود را برعکس بخوان"
}
function hideDareText1(){
document.getElementById('listItemDare1').innerHTML="1"
}
function showDareText2(){
  document.getElementById('listItemDare2').innerHTML="چهار گیلاس آب را بنوش"
}
function hideDareText2(){
document.getElementById('listItemDare2').innerHTML="2"
}
function showDareText3(){
  document.getElementById('listItemDare3').innerHTML="بلند شو برقص (بدون موزیک)"
}
function hideDareText3(){
document.getElementById('listItemDare3').innerHTML="3"
}
function showDareText4(){
  document.getElementById('listItemDare4').innerHTML="رنگ مو را تبلیغ کن"
}
function hideDareText4(){
document.getElementById('listItemDare4').innerHTML="4"
}
function showDareText5(){
  document.getElementById('listItemDare5').innerHTML="صدای یک حیوان را دربیار"
}
function hideDareText5(){
document.getElementById('listItemDare5').innerHTML="5"
}
function showDareText6(){
  document.getElementById('listItemDare6').innerHTML="همه پیام های گوشیت را پاک کن"
}
function hideDareText6(){
document.getElementById('listItemDare6').innerHTML="6"
}
function showDareText7(){
  document.getElementById('listItemDare7').innerHTML="یک آهنگ را بلند زمزمه کن"
}
function hideDareText7(){
document.getElementById('listItemDare7').innerHTML="7"
}
function showDareText8(){
  document.getElementById('listItemDare8').innerHTML="ادای میمون را دربیار"
}
function hideDareText8(){
document.getElementById('listItemDare8').innerHTML="8"
}
function showDareText9(){
  document.getElementById('listItemDare9').innerHTML="یک پیاز خام را بخور"
}
function hideDareText9(){
document.getElementById('listItemDare9').innerHTML="9"
}
function showDareText10(){
  document.getElementById('listItemDare10').innerHTML=" به یک شماره ی ناشناس زنگ بزن و مزاحمت کن"
}
function hideDareText10(){
document.getElementById('listItemDare10').innerHTML="10"
}
function showDareText11(){
  document.getElementById('listItemDare11').innerHTML="خود را به یک زبان غیر فارسی معریفی کن"
}
function hideDareText11(){
document.getElementById('listItemDare11').innerHTML="11"
}
function showDareText12(){
  document.getElementById('listItemDare12').innerHTML="یک فکاهی بگو"
}
function hideDareText12(){
document.getElementById('listItemDare12').innerHTML="12"
}
function showDareText13(){
  document.getElementById('listItemDare13').innerHTML="برای یک دقیقه پلک نزن"
}
function hideDareText13(){
document.getElementById('listItemDare13').innerHTML="13"
}
function showDareText14(){
  document.getElementById('listItemDare14').innerHTML="با صدای بلند گریه کن"
}
function hideDareText14(){
document.getElementById('listItemDare14').innerHTML="14"
}
function showDareText15(){
  document.getElementById('listItemDare15').innerHTML="سن واقعی خود را بگو"
}
function hideDareText15(){
document.getElementById('listItemDare15').innerHTML="15"
}
function showDareText16(){
  document.getElementById('listItemDare16').innerHTML="چهل بار برخیز و بشین"
}
function hideDareText16(){
document.getElementById('listItemDare16').innerHTML="16"
}
function showDareText17(){
  document.getElementById('listItemDare17').innerHTML="یگ گیلاس آب سرد روی سرت بریزند"
}
function hideDareText17(){
document.getElementById('listItemDare17').innerHTML="17"
}
function showDareText18(){
  document.getElementById('listItemDare18').innerHTML="تا نوبت ات میرسد با یک پاه ایستاد باش"
}
function hideDareText18(){
document.getElementById('listItemDare18').innerHTML="18"
}
function showDareText19(){
  document.getElementById('listItemDare19').innerHTML="ادای استاد انگلیسی ات را در بیار"
}
function hideDareText19(){
document.getElementById('listItemDare19').innerHTML="19"
}
function showDareText20(){
  document.getElementById('listItemDare20').innerHTML="نقش دیوانه را بازی کن"
}
function hideDareText20(){
document.getElementById('listItemDare20').innerHTML="20"
}
function showDareText21(){
  document.getElementById('listItemDare21').innerHTML="تا پایان بازی چشمات بسته باشد"
}
function hideDareText21(){
document.getElementById('listItemDare21').innerHTML="21"
}
function showDareText22(){
  document.getElementById('listItemDare22').innerHTML="دو دقیقه ما را نصیحت کن"
}
function hideDareText22(){
document.getElementById('listItemDare22').innerHTML="22"
}
