let convertRGBtoHEX = (R,G,B)=>{
   const HEX0="#";
   const HEX1=conversionHEX(Math.floor(R/16));
   const HEX2=conversionHEX(R%16);
   const HEX3=conversionHEX(Math.floor(G/16));
   const HEX4=conversionHEX(G%16);
   const HEX5=conversionHEX(Math.floor(B/16));
   const HEX6=conversionHEX(B%16);
   return HEX0.concat(HEX1,HEX2,HEX3,HEX4,HEX5,HEX6);
}

let convertHEXtoRGB = (Color)=>{
    
    const Res="";
    const R1=conversionRGB(Color.slice(1,2));
    const R2=conversionRGB(Color.slice(2,3));
    let R=Number(R1*16+R2).toString(10);
    const G1=conversionRGB(Color.slice(3,4));
    const G2=conversionRGB(Color.slice(4,5));
    const G=Number(G1*16+G2).toString(10);
    const B1=conversionRGB(Color.slice(5,6));
    const B2=conversionRGB(Color.slice(6));
    const B=Number(B1*16+B2).toString(10);
    return Res.concat(R,",",G,",",B);
    
 }

const conversionHEX = (num)=>{
    switch (num){
        case 10:
            num="A";
            break;
        case 11:
            num="B";
            break;
        case 12:
            num="C";
            break;
        case 13:
            num="D";
            break;
        case 14:
            num="E";
            break; 
        case 15:
            num="F";
            break; 
        default:
            break;
    }
    return(num);
}

const conversionRGB = (num)=>{
    switch (num){
        case "A":
            num=10;
            break;
        case "B":
            num=11;
            break;
        case "C":
            num=12;
            break;
        case "D":
            num=13;
            break;
        case "E":
            num=14;
            break; 
        case "F":
            num=15;
            break; 
        default:
            num=parseInt(num);
            break;
    }
    return(num);
}