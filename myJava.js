/*About us */
 function googleMap()
               {
                var douglasPosition = new google.maps.LatLng(49.203806, -122.912711);
                var mapCanvas = document.getElementById("map");
                var mapOptions = {center: douglasPosition, zoom: 15};
                var map = new google.maps.Map(mapCanvas, mapOptions);
                var marker = new google.maps.Marker({position:douglasPosition});
                marker.setMap(map);
                }
                
/*School */
var answers = new Array(8);
                function readAnswer(answer)
                {
                    //create new arrays 
                    //assign answer to the arrays 
                    for(var i = 1; i<answers.length; i++)
                    {
                        answers[i-1] = answer; 
                    }
                }
            
                function displayResult()
                {
                    var totalYes = 0;
                    var counter = 1;
                    var neutral=0;
                     while(counter<answers.length)
                    {
                        //if answer is a(yes), totalYes is added by 1 
                        if(answers[counter-1] == 'a')
                        {
                            ++totalYes;
                            counter++;
                            neutral++;
                        }
                        //if not, only counter 
                        else if (answers[counter-1] == 'b')
                        {
                            counter++;
                            neutral++;
                        }
                        else
                        {
                            counter++;
                        }
                    }
                    if(neutral <4)
                    {
                        window.alert("You should select at least 3 quesions!");
                        
                    }
                    
                    //if totalYes is greater than 3.
                    //result is the name of the text input element
                    if(totalYes >3)
                    {
                        window.alert("You are good to go to Vancouver!");
                    }
                    //if totalYes is less than 3. 
                    else if(neutral>3)
                    { 
                        window.alert("Maybe you should think more about Vancouver..");
                    }
                }
               
                function showInfo(heading)
                {
                    var curHeading = document.getElementById(heading);
                    if(curHeading.style.display == "block")
                    {
                        curHeading.style.display = "none";
                    }
                    else
                    {
                        curHeading.style.display = "block";
                    }
                    return false;
                }
/*Homepage */
 function showText(){
                setInterval(function(){ insideSetFunction();}, 2000);
               }
              function insideSetFunction()
              {
                document.getElementById("vancouver-text").innerHTML = "Explore Your Studying!";
              }
              window.onload = showText();

