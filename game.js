function play(){
   
      AddElementById('home_screen')
      AddElementById('final_score')
      
    //   console.log(homeSection.classList)
      
         
          removeElementById('play_ground')
          setTextElementValueById('Current_life',5)
          setTextElementValueById('Current_Score',0)
          
        //    console.log(PlayGroundSection.classList)
    
    
        // get or create an alphabet array
    
            const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
            const alphabets = alphabetString.split('')
            // console.log(alphabets)
    
            // get a random index between 0,25
    
            const randomNumber = Math.random()*25
            // console.log(randomNumber)
            const index =Math.round(randomNumber);
            // console.log(index)
    
            const alphabet =alphabets[index];
            // console.log(alphabet)
           
      // set randomly generated alphabets to the screen 
            
            const currentAlphabets = document.getElementById('Current_alphabtes');
            currentAlphabets.innerText=alphabet;
    
            const addBackgroundColor = document.getElementById(alphabet)
            addBackgroundColor.classList.add('bg-orange-400')
    } 
    
    function handleKeyboardButtonPress(event){
      const playerPressed =event.key;
     console.log('Player Pressed',playerPressed)
    
     const currentAlphabetsElement =document.getElementById('Current_alphabtes')
     const Current_alphabet =currentAlphabetsElement.innerText;
     const expectedAlphabet = Current_alphabet.toLowerCase();
     console.log(playerPressed,expectedAlphabet);
    
     if(playerPressed===expectedAlphabet){
      console.log('You are win the Game')
       
    
      const currentLife = getTextElementValueById('Current_Score');
      const updatedLife = currentLife+1;
      setTextElementValueById('Current_Score', updatedLife);
    
     // get or create an alphabet array
    
     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
     const alphabets = alphabetString.split('')
     // console.log(alphabets)
    
     // get a random index between 0,25
    
     const randomNumber = Math.random()*25
     
     const index =Math.round(randomNumber);
   
    
     const alphabet =alphabets[index];
    
     
     const currentAlphabets = document.getElementById('Current_alphabtes');
     currentAlphabets.innerText=alphabet;
    
     const addBackgroundColor = document.getElementById(alphabet)
     addBackgroundColor.classList.add('bg-orange-400')
    
    const removeBackgroundColor = document.getElementById(expectedAlphabet)
        removeBackgroundColor.classList.remove('bg-orange-400')
      
     }
     else{
      console.log('You can not win the game')
    
      const currentLife = getTextElementValueById('Current_life');
      const updatedLife = currentLife-1;
      setTextElementValueById('Current_life',updatedLife);
    
     
       if(updatedLife===0){
        console.log('Game over')
        
          AddElementById('play_ground')
          
           removeElementById('final_score')
           
        const lastScore = getTextElementValueById('Current_Score');
        console.log("Last score",lastScore);
        setTextElementValueById('last_score',lastScore)
           
         
         const removeBackgroundColor = document.getElementById(expectedAlphabet)
              removeBackgroundColor.classList.remove('bg-orange-400')
         
           
       }
     }
    }
      
    document.addEventListener('keyup',handleKeyboardButtonPress)
    