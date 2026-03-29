let result = document.getElementById("result-area");
let input =document.getElementById("input-area");
result.innerText="Enter values"

let answer = 0
let expression = ''
let number =''
let expression_list = []

input.addEventListener("click", e=>{
    let value =e.target.id;
    console.log(value);

    if(value !='input-area' & value !="ans"){
        if(value in ['1' ,'2' ,'3' ,'4' ,'5' ,'6' ,'7','8','9','0']){
            number+=value;
            expression+=value;

        }
        else if(number !=''){   
            expression_list.push(number);
            number=''
            expression+=value;     
            
            expression_list.push(value);
        }
    result.innerText=expression;
    console.log(expression_list)
    }
    else if (value=="ans"){
        if(number!=''){
            expression_list.push(number)
            
        }
        answer=evaluateExpression(expression);
        console.log(expression_list)

        result.innerText=answer;
    }

})

function evaluateExpression(expression){
    return 10;
}

