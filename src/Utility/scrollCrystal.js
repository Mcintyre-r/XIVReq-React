const scrollCrystal = async (crystal_01,crystal_02,crystal_03) => {
    if(crystal_01){
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
        crystal_01.style.backgroundPosition = '0' + posY1 + 'px' 
        crystal_02.style.backgroundPosition = '0' + posY2 + 'px'
        crystal_03.style.backgroundPosition = '0' + posY3 + 'px'
      },50);
    }
    } 


export default scrollCrystal;
  