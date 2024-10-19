function play(){
//    step -1 hide the home screen to hide the screen add the class hidden to the home section 
  // const homeSection = document.getElementById('home_screen')
  // homeSection.classList.add('hidden')
  AddElementById('home_screen')
  AddElementById('final_score')
  
//   console.log(homeSection.classList)
  
       // show the playGround
      //  const PlayGroundSection = document.getElementById('play_ground')
      //  PlayGroundSection.classList.remove('hidden');
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





   // Update Score :
   // 1 : Get the current score
  //  const currentScoreElement =document.getElementById('Current_Score');
  //  const currentScoreText =currentScoreElement.innerText;
  //  const currentScore= parseInt(currentScoreText);
  //  console.log("My game score",typeof(currentScore));
   //2 : increase the score by 1
  //  const UpdateScore = currentScore + 1;
   //3 : Show the update score 
   //currentScoreElement.innerText=UpdateScore;
  
 
 


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

const removeBackgroundColor = document.getElementById(expectedAlphabet)
          removeBackgroundColor.classList.remove('bg-orange-400')
  
 }
 else{
  console.log('You can not win the game')

  const currentLife = getTextElementValueById('Current_life');
  const updatedLife = currentLife-1;
  setTextElementValueById('Current_life',updatedLife);

  // // step 1 : get the current life 
  //    const currentLifeElement = document.getElementById('Current_life');

  //    const currentLifeText =currentLifeElement.innerText;
  //  const currentLife= parseInt(currentLifeText);
  //  console.log("My Life score",typeof(currentLife));
  //    console.log(currentLife)
  // // step 2 : reduce the life count
  //  const updateLife = currentLife -1;
  //  // step 3 : display the update life;
  //  currentLifeElement.innerText=updateLife;
   if(updatedLife===0){
    console.log('Game over')
    // const PlayGroundSection = document.getElementById('play_ground')
    //    PlayGroundSection.classList.add('hidden');
      AddElementById('play_ground')
      //  const FinalSection = document.getElementById('final_score');
      //  FinalSection.classList.remove('hidden')
       removeElementById('final_score')
       
    const lastScore = getTextElementValueById('Current_Score');
    console.log("Last score",lastScore);
    setTextElementValueById('last_score',lastScore)
       
     // clear the last selected alphabet highlight
    //  const currentAlphabet = getElementTextById('Current_alphabtes');
     const removeBackgroundColor = document.getElementById(expectedAlphabet)
          removeBackgroundColor.classList.remove('bg-orange-400')
     
       
   }
 }
}
  
document.addEventListener('keyup',handleKeyboardButtonPress)
