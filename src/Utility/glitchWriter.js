import {setGlitchedWriter} from "glitched-writer"

const wait = time => new Promise(resolve => setTimeout(resolve, time))

const glitchWriter = async (element) => {
    const displayWriter = setGlitchedWriter(element, {})
    let index = 0
    const messages = ["Thank you for using XIV Req", "Submit any feedback via the bot.", "Beta Version 0.2"]
    await wait(3000)
    displayWriter.write("Beta Version 0.3", {})
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