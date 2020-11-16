import {setGlitchedWriter} from "glitched-writer"

const wait = time => new Promise(resolve => setTimeout(resolve, time))

export const glitchWriter = async (element) => {
    const displayWriter = setGlitchedWriter(element, {})
    let index = 0
    const messages = ["Login via discord to continue", "A FFXIV work order system"]
    await wait(3000)
    displayWriter.write("A FFXIV work order system", {})
    while(0 != 1){
      await wait(18000)
      displayWriter.write(messages[index], {})
      index++
      if(index === messages.length){
        index = 0
      }
    }
  }

export const scrollCrystal = (crystal_01,crystal_02,crystal_03) => {
    var posY1 = 0;
    var posY2 = 0;
    var posY3 = 0;
    setInterval( function(){
      if (posY1 <= -900) posY1 = 0;
      if (posY2 <= -900) posY2 = 0;
      if (posY3 <= -1200) posY3 = 0;
      posY1 -= 1;
      posY2 -= 2;
      posY3 -= 3;
      crystal_01.current.style.backgroundPosition = '0' + posY1 + 'px' 
      crystal_02.current.style.backgroundPosition = '0' + posY2 + 'px'
      crystal_03.current.style.backgroundPosition = '0' + posY3 + 'px'
    },50);
  } 