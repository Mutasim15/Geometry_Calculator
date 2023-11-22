function getvalueByInputField1(inputvalue){
    const inputField1 =document.getElementById(inputvalue);
    const inputField1String =inputField1.value;
    const inputField1Value = parseFloat(inputField1String);
    return inputField1Value;
    
    
    }
    
    function getvalueByInputField2(inputvalue){
        const inputField2 =document.getElementById(inputvalue);
        const inputField2String =inputField2.value;
        const inputField2Value = parseFloat(inputField2String);
        return inputField2Value;
        
        
        }



    function convertcmSquareTometerSquare(inputvalue){
        const previousValue = document.getElementById(inputvalue);
        console.log(previousValue)
        const previousValueString = previousValue.innerText;
        const previousAmount =parseFloat(previousValueString);
        const convertMeterSquare = previousAmount/10000;
        return convertMeterSquare;
        console.log(convertMeterSquare);

    }


    function convertmeterSquareTocentimeterSquare(inputValue){
        const NewValue = document.getElementById(inputValue);
        console.log(NewValue);
        // const NewValueString = NewValue.innerText;
        // const NewValueAmount =parseFloat(NewValueString);
        // const convertCentiMeterSquare = NewValueAmount*10000;
        // return convertCentiMeterSquare;
        // console.log(convertCentiMeterSquare);
    }
        

