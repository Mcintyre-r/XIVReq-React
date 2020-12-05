import {setGlitchedWriter} from "glitched-writer"

const wait = time => new Promise(resolve => setTimeout(resolve, time))

const glitchWriter = async (element) => {
    const displayWriter = setGlitchedWriter(element, {})
    let index = 0
    const messages = ["Thank you for using XIV Req", "Direct any feedback to Exa#0469", "Alpha Version 0.001"]
    await wait(3000)
    displayWriter.write("Alpha Version 0.001", {})
    while(0 != 1){
      await wait(18000)
      displayWriter.write(messages[index], {})
      index++
      if(index === messages.length){
        index = 0
      }
    }
  }

export default glitchWriter;