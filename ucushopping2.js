//slider
      var slideimg=document.getElementById("slideimg");
      var images=new Array(
          "./pizza.jpg",
          "./hotdogs.jpg",
          "./kfc.jpg",
          "./drink1.jpg",
          "./drink2.jpg",
          "./drink3.jpg",
          "./cloth1.jpg",
          "./cloth2.jpg",
          "./cloth3.jpg",
          "electronics/ipadsandtabs/ipad1.jpg",
          "electronics/speakers/dre2.jpg",
          "electronics/fridges/fridge1.jpg",
          "electronics/watches/watch1.jpeg",
          "electronics/phones/note10.jpg",
          "electronics/phones/12pro1.jpg",
          "./1.jpeg",
          "./3.jpg",
          "./other1.jpg",
          "./other2.jpeg",
          "./other3.jpg"
          
      );
      var len = images.length;
      var i = 0;
      function slider() {
          if (i > len-1 ){
              i = 0;

          }
          slideimg.src = images[i];
          i++;
          setTimeout('slider()',3000);
      }
      //cart section

      (function(){
        $("#cart").on("click", function() {
          $(".shopping-cart").fadeToggle( "fast");
        }); 
      })();
      //cart section




     
