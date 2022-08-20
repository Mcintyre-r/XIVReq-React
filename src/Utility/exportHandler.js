const exportHandler = (list,tcState) => {
    let importString = ''
    for(const request of list){
        const mainHand = request.MainHandID? `${request.MainHandID},null,1;` : ''
        const offHand = request.OffHandID? `${request.OffHandID},null,1;` : ''
        const head = request.HeadID?`${request.HeadID},null,1;`:''
        const body = request.BodyID?`${request.BodyID},null,1;`:''
        const gloves = request.GlovesID?`${request.GlovesID},null,1;`:''
        const legs = request.LegsID?`${request.LegsID},null,1;`:''
        const feet = request.FeetID?`${request.FeetID},null,1;`:''
        const ears = request.EarsID?`${request.EarsID},null,1;`:''
        const neck = request.NeckID?`${request.NeckID},null,1;`:''
        const wrist = request.WristsID?`${request.WristsID},null,1;`:''
        const fingerL = request.FingerLID?`${request.FingerLID},null,1;`:''
        const fingerR = request.FingerRID?`${request.FingerRID},null,1;`:''
        const importSetup = mainHand+offHand+head+body+gloves+legs+feet+ears+neck+wrist+fingerL+fingerR
        
        importString = importString+importSetup

        

    }
    const base64String = btoa(importString.slice(0,-1))
    window.open(`https://ffxivteamcraft.com/import/${base64String}`)
    tcState([])
  }


export default exportHandler;