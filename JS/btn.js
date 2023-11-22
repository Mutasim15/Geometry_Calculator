document.getElementById('submit_triangle').addEventListener('click',function(){

    // console.log('Submit Button Clicked')
    const inputValue1= getvalueByInputField1("input_field_b");
    // console.log(inputValue1);
    const inputValue2= getvalueByInputField1("input_field_h");
    // console.log(inputValue2);

   const trianglResult = 0.5*inputValue1* inputValue2
   const TrangleValue = document.getElementById('trangle');
   TrangleValue.innerText=trianglResult;

    const meterSquare= document.getElementById('convertmetersquare');
    meterSquare.style.display='block';
    
})

document.getElementById('convertmetersquarebtn').addEventListener('click',function(){
console.log('clicked btn');
const centimeterSquare= document.getElementById('convertCentimeterSquare');
console.log( centimeterSquare);
centimeterSquare.style.display='block';
const meterSquare= document.getElementById('convertmetersquare');
meterSquare.style.display='none';


const TrangleValue = document.getElementById('trangle');
const trangleValueString= TrangleValue.innerText;
const TrangleNumber= parseFloat(trangleValueString);
console.log(TrangleNumber);

const NewTrangleValue = TrangleNumber/10000;
console.log(NewTrangleValue);

const convertCentimeterSquare= document.getElementById('convertCentimeterSquare');
convertCentimeterSquare.style.display='block';
const TrangleValueId = document.getElementById('trangle2');
TrangleValueId.innerText=NewTrangleValue;
 
    
})


document.getElementById('convertcentimetersquarebtn').addEventListener('click',function(){
    const convertCentimeterSquare= document.getElementById('convertCentimeterSquare');
    convertCentimeterSquare.style.display='none';

    const meterSquare= document.getElementById('convertmetersquare');
    meterSquare.style.display='block';
})