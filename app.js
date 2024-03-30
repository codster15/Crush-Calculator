

var count = 0;
var flagcheck = true;

var calculate = ()=>{
 
    var firstname = document.querySelector(".name1").value;
    var secondname = document.querySelector(".name2").value;



    if(firstname == ""){
        document.querySelector(".error1").innerHTML = " * Enter the name plz";
        document.querySelector(".showPercent").innerHTML = "";
    }else{
        document.querySelector(".error1").innerHTML = "";
      
    }


    if(secondname == ""){
        document.querySelector(".error2").innerHTML = " * Enter the name plz";
        document.querySelector(".showPercent").innerHTML = "";
    }else{
        document.querySelector(".error2").innerHTML = "";
       
    }


    if(firstname !== "" && secondname !== "" ){
        if(flagcheck){

            
            generatePErcent();
            flagcheck = false;
        }
     
    }

   count++;
   console.log(count);

  
}


var generatePErcent = ()=>{
    var no = Math.floor(Math.random()* 100);
    var imgLoc = document.querySelector("#resultImage");

    document.querySelector(".centrequote").style.display = 'none';

    if(no < 40){
        document.querySelector(".showPercent").style.color = 'Red';
        document.querySelector(".showPercent").innerHTML = no + '%';


        document.querySelector(".divsmall").style.color = '#C70D3A';

        document.querySelector(".divsmall").innerHTML = "Oops...  chances are very less ! Better to to find new Crush . Do not waste Your time any More";
        imgLoc.style.display = "block";
        imgLoc.src = ("img1.png");

    }else if (no < 60 && no > 40){
        document.querySelector(".showPercent").style.color = 'Yellow';
        document.querySelector(".showPercent").innerHTML = no + '%';
        document.querySelector(".divsmall").style.color = '#FF9209';
        document.querySelector(".divsmall").innerHTML = "You're on the right track 🙂,Don't loose hope, she could be your girlfriend.Keep Trying" 
        imgLoc.style.display = "block";
        imgLoc.src = ("img2.png");
      
    }else{
        document.querySelector(".showPercent").style.color = 'Green';
        document.querySelector(".showPercent").innerHTML = no + '%';
        document.querySelector(".divsmall").style.color = 'Green';
        document.querySelector(".divsmall").innerHTML = "❤️Congratulations dude😍... Pack your bags, you're on a direct flight to Loveville. She's practically your girlfriend already👩‍❤️‍💋‍👨"
        imgLoc.style.display = "block";
        imgLoc.src = ("img3.png");
    }

   
}

var reset = ()=>{
    document.querySelector(".showPercent").innerHTML = "";
    document.querySelector(".error1").innerHTML = "";
    document.querySelector(".error2").innerHTML = "";
   document.querySelector(".name1").value = '';
   document.querySelector(".name2").value = ''; 
  document.querySelector("#resultImage").src = '';
  document.querySelector("#resultImage").style.display = 'none';
  document.querySelector(".divsmall").innerHTML = '';
  document.querySelector(".centrequote").style.display = 'block';

   
    flagcheck = true;
}
