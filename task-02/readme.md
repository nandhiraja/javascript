# Simple Calculator
## Objective:
  -  Build a basic calculator that performs arithmetic operations like addition, subtraction, multiplication, and division.
## Requirements:
- Create number and operator buttons in HTML.
- Use JavaScript to capture user input and perform calculations.
- Update the display dynamically as the user interacts with the calculator


## code

```js

// condtion to get the user input


input.addEventListener("click", e=>{
    let value =e.target.id;
    console.log(value);
    if(!['input-area','ans','ac'].includes(value)){    //  take only numbers and operators
        if(value in ['1' ,'2' ,'3' ,'4' ,'5' ,'6' ,'7','8','9','0']){  // for numbers
            number+=value;
            expression+=value;
            result.innerText=expression;

        }
        else if(number !=''){        // for operators
            expression_list.push(number);
            number=''
            expression+=value;     
            result.innerText=expression;

            expression_list.push(value);
        }
   
    }
    else if (value=="ans"){     // calulate the  expression
        if(number!=''){
            expression_list.push(number)
            
        }
        answer=evaluateExpression();
        console.log(expression_list)
        result.innerText=answer;


    }
    else if(value =='ac'){    //  reset all values
        expression='';
        number='';
        expression_list=[]
        result.innerText='';

    }

})

//  function to evaluate the expression 

function evaluateExpression(){
   
     let result = 0;

     while(expression!=[]){    // do operation untill expression is empty
        console.log(++result , " while ", expression_list)
        if(expression_list.indexOf('/')!= -1){      // BODMAS   - >  Divide
            let indx = expression_list.indexOf('/');
            let prev = Number(expression_list[indx-1])
            let next = Number(expression_list[indx+1])
            let value = prev/next;
            expression_list.splice(indx-1,3, value);           
            console.log(expression_list)
        }
 
         else if(expression_list.indexOf('*')!= -1){    // multiply
            let indx = expression_list.indexOf('*');
            let prev = Number(expression_list[indx-1])
            let next = Number(expression_list[indx+1])
            let value = prev*next;
            expression_list.splice(indx-1,3, value);           
            console.log(expression_list)
        }
         else if(expression_list.indexOf('+')!= -1){    // add
            let indx = expression_list.indexOf('+');
            let prev = Number(expression_list[indx-1])
            let next = Number(expression_list[indx+1])
            let value = prev+next;
            expression_list.splice(indx-1,3, value);           
            console.log(expression_list)
        }
         else if(expression_list.indexOf('-')!= -1){   // subract
            let indx = expression_list.indexOf('-');
            let prev = Number(expression_list[indx-1])
            let next = Number(expression_list[indx+1])
            let value = prev-next;
            expression_list.splice(indx-1,3, value);           
            console.log(expression_list)
        }
        else {
           result = expression_list[0]
           return result
        }
        
    }

    return result;

}

```


## Preview


https://github.com/user-attachments/assets/edbf6a5e-8bac-4cb7-83b8-59983b3c69cc



<img width="1259" height="970" alt="Image" src="https://github.com/user-attachments/assets/119f4052-70e7-48cb-b4c6-caaca5536723" />

<img width="1151" height="966" alt="Image" src="https://github.com/user-attachments/assets/6eb4afc5-19d4-4af9-b906-c92552f50f82" />

<img width="1142" height="974" alt="Image" src="https://github.com/user-attachments/assets/3fa6fcaf-92e3-42f4-8b89-641623328b5d" />