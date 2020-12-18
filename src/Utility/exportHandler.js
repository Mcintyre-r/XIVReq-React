const exportHandler = (list) => {
    let importString = ''
    for(const request of list){
      if(!request.set){
        const ID = request.itemID.toString();
        const quantity = request.quantity.toString();
        const addition = `${ID},null,${quantity};`
        importString = importString+addition
      } else if(request.set){
        const i = request.setItems
        console.log(i)
        const importSetup = `${i.wpnID},null,1;${i.headID},null,1;${i.chestID},null,1;${i.handsID},null,1;${i.legsID},null,1;${i.feetID},null,1;${i.beltID},null,1;${i.earID},null,1;${i.neckID},null,1;${i.wristID},null,1;${i.ringID},null,2;`
        console.log(importSetup)
        importString = importString+importSetup
        if(i.shdID){
          importString = importString+`${i.shdID},null,1;`
        }
        console.log(importString)
      
      }

    }
    const base64String = btoa(importString.slice(0,-1))
    window.open(`https://ffxivteamcraft.com/import/${base64String}`)
  }


export default exportHandler;