import {setGlitchedWriter} from "glitched-writer"

const wait = time => new Promise(resolve => setTimeout(resolve, time))

const glitchWriter = async (element) => {
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

export default glitchWriter;