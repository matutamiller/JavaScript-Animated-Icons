    // Breake Chain Animation

    function breakeChain(){
      let chain = document.getElementById('chain'); //targeting the div with the icon to animate
      chain.innerHTML = "&#xf0c1;";                 //setting icon with the unicode value

      setTimeout(function(){                        //setting timeout for the  function to 1s
        chain.innerHTML = "&#xf127;";               //changing the icon by setting it to the unicode value
      }, 1000);
    }
    
    breakeChain();                                  //call the animation

    setInterval(breakeChain, 2000);                 //setting interval to animate the icon every 2 seconds

    // Battery Charge Animation

    function chargeBattery(){
      let battery = document.getElementById('battery'); //targeting the div with the icon to animate
      battery.innerHTML = "&#xf244;";                   //setting icon with the unicode value

      setTimeout(function(){                            //setting timeout for the  function to 1s
        battery.innerHTML = "&#xf243;";                 //changing the icon by setting it to the unicode value
      }, 1000);
      setTimeout(function(){                            //setting timeout for the  function to 2s
        battery.innerHTML = "&#xf242;";                 //changing the icon by setting it to the unicode value
      }, 2000);
      setTimeout(function(){                            //setting timeout for the  function to 3s
        battery.innerHTML = "&#xf241;";                 //changing the icon by setting it to the unicode value
      }, 3000);
      setTimeout(function(){                            //setting timeout for the  function to 4s
        battery.innerHTML = "&#xf240;";                 //changing the icon by setting it to the unicode value
      }, 4000);
    }
 
    chargeBattery();                                    //run the animation

    setInterval(chargeBattery, 5000);                   //setting interval to animate the icon every 5 seconds

    // Hourglass Tip Animation

    function hourglassTip(){
      let hourglass = document.getElementById('hourglass');  //targeting the div with the icon to animate
      hourglass.innerHTML = "&#xf251;";                      //setting icon with the unicode value
      setTimeout(function(){                                 //setting timeout for the  function to 1s
        hourglass.innerHTML = "&#xf252;";                    //changing the icon by setting it to the unicode value                    
      }, 1000);
      setTimeout(function(){                                 //setting timeout for the  function to 2s
        hourglass.innerHTML = "&#xf253;";                    //changing the icon by setting it to the unicode value
      }, 2000);
    }

    hourglassTip();                                            //call the animation

    setInterval(hourglassTip, 3000);                           //setting interval to animate icon every 3 seconds