let result = document.getElementById("result-area");
let input =document.getElementById("input-area");
result.innerText="Enter value"

let answer = 0
let expression = ''
let number =''
let expression_list = []

input.addEventListener("click", e=>{
    let value =e.target.id;
    console.log(value);
    if(!['input-area','ans','ac'].includes(value)){
        if(value in ['1' ,'2' ,'3' ,'4' ,'5' ,'6' ,'7','8','9','0']){
            number+=value;
            expression+=value;
            result.innerText=expression;

        }
        else if(number !=''){   
            expression_list.push(number);
            number=''
            expression+=value;     
            result.innerText=expression;

            expression_list.push(value);
        }
   
    }
    else if (value=="ans"){
        if(number!=''){
            expression_list.push(number)
            
        }
        answer=evaluateExpression();
        console.log(expression_list)
        result.innerText=answer;


    }
    else if(value =='ac'){
        expression='';
        number='';
        expression_list=[]
        result.innerText='';

    }

    console.log(expression_list)
})

function evaluateExpression(){
    // console.log(expression.indexOf('/'))
    //     console.log(expression.indexOf('-'))

    //         console.log(expression.indexOf('+'))

    //             console.log(expression.indexOf('*'))

    let result = 0;

     while(expression!=[]){
        console.log(++result , " while ", expression_list)
        if(expression_list.indexOf('/')!= -1){
            let indx = expression_list.indexOf('/');
            let prev = Number(expression_list[indx-1])
            let next = Number(expression_list[indx+1])
            let value = prev/next;
            expression_list.splice(indx-1,3, value);           
            console.log(expression_list)
        }

         else if(expression_list.indexOf('*')!= -1){
            let indx = expression_list.indexOf('*');
            let prev = Number(expression_list[indx-1])
            let next = Number(expression_list[indx+1])
            let value = prev*next;
            expression_list.splice(indx-1,3, value);           
            console.log(expression_list)
        }
         else if(expression_list.indexOf('+')!= -1){
            let indx = expression_list.indexOf('+');
            let prev = Number(expression_list[indx-1])
            let next = Number(expression_list[indx+1])
            let value = prev+next;
            expression_list.splice(indx-1,3, value);           
            console.log(expression_list)
        }
         else if(expression_list.indexOf('-')!= -1){
            let indx = expression_list.indexOf('-');
            let prev = Number(expression_list[indx-1])
            let next = Number(expression_list[indx+1])
            let value = prev-next;
            expression_list.splice(indx-1,3, value);           
            console.log(expression_list)
        }
        else {
            console.log("ENTER EXIT ")
            // result.innerText= expression_list[0];
            return expression_list[0]
        }
        
    }

    return result;

}

