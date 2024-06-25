const sortCarte=(tab)=>{
  let HandCards=[];
HandCards[0]=tab[0];
let cpt=0;
let NotPermuted=false;
  for(let i=1;i<tab.length;i++){
    cpt=i-1;
    NotPermuted=false;
    while ((cpt >= 0) && (NotPermuted==false)) 
        {
if(HandCards[cpt]>tab[i])
    {
      HandCards[cpt + 1] = HandCards[cpt]; 
      HandCards[cpt]=tab[i]; 
      cpt--;
    }
    else
    {NotPermuted=true;
        HandCards[cpt+1] = tab[i];    
    }
    }
  }
  return HandCards;
}