


export const formatPrice=(price)=>{
    let output="";
    let counter = 0;

    for(let i=price.toString().length-1;i >= 0;i--){
        counter++;
        if(counter > 1 && (counter-1) %3 == 0){
            output += ","
        }
        output += price.toString()[i]

      
    }

    output = output.split("").reverse();
    output = output.join("");

    return output;
}