const exportHandler = (list) => {
    let importString = ''
    for(const request of list){
      const ID = request.itemID.toString();
      const quantity = request.quantity.toString();
      const addition = `${ID},null,${quantity};`
      importString = importString+addition
    }
    const base64String = btoa(importString.slice(0,-1))
    window.open(`https://ffxivteamcraft.com/import/${base64String}`)
  }


export default exportHandler;