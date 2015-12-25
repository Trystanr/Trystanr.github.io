function begin()
            {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(showPosition);
                }   
            }

            var bNightMode = false;

            function showPosition(position) {

                var currentdate = new Date();
                var times = SunCalc.getTimes(new Date(), position.coords.latitude, position.coords.longitude);

                var sunrise = times.sunrise.getHours()+""+times.sunrise.getMinutes();
                
                if (sunrise.length == 3) {
                    sunrise = "0" + sunrise;
                }

                var sunset = times.sunset.getHours() + "" + times.sunset.getMinutes();
                var timeNow = currentdate.getHours() + "" + currentdate.getMinutes();
                

                if (timeNow.length == 3) {
                    timeNow = "0" + timeNow;
                }


                if ((parseInt(sunrise, 10) < parseInt(timeNow, 10))&&(parseInt(timeNow, 10) < parseInt(sunset, 10))) {
                    //sun is up
                } else {
                    //sun is down   
                    toggleMode();
                }
            }

            

            function toggleMode() {
                if (bNightMode) {
                    bNightMode = false;

                    document.getElementById("nightmode").src="img/moon-white.png";
                    document.getElementById("nightmode").style.backgroundColor = "#2c3e50";

                    //make day mode

                    var x = document.getElementsByClassName("backgroundC");
                    var i;
                    for (i = 0; i < x.length; i++) {
                        x[i].classList.remove("backgroundNight");
                    }

                    var x = document.getElementsByClassName("foregroundC");
                    var i;
                    for (i = 0; i < x.length; i++) {
                        x[i].classList.remove("foregroundNight");
                    }

                    var x = document.getElementsByClassName("backgroundT");
                    var i;
                    for (i = 0; i < x.length; i++) {
                        x[i].classList.remove("backgroundText");
                    }

                } else {
                    bNightMode = true;

                    document.getElementById("nightmode").src="img/moon-black.png";
                    document.getElementById("nightmode").style.backgroundColor = "#ecf0f1";

                    //make night mode

                    var x = document.getElementsByClassName("backgroundC");
                    var i;
                    for (i = 0; i < x.length; i++) {
                        x[i].classList.add("backgroundNight");
                    }

                    var x = document.getElementsByClassName("foregroundC");
                    var i;
                    for (i = 0; i < x.length; i++) {
                        x[i].classList.add("foregroundNight");
                    }

                    var x = document.getElementsByClassName("backgroundT");
                    var i;
                    for (i = 0; i < x.length; i++) {
                        x[i].classList.add("backgroundText");
                    }
                }
            }