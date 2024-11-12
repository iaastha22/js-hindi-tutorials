//+++++++++++++++++++++  JS Execution Context+++++++++++++++++++++++++++
/*whenever we give any code to js it makes global EC  that refers it into (this)
this gloal env is changed in browser n  node , or other coding platforms in browser it's windows object  
 EC:-
 1-global EC
 2- Function/Functional EC
 3-Eval EC( a property of global basically are in mongodb etc)
  js code usally  execute in 2 phrases..... are:-
  1- memory CREATION PHRASES(allot space for all your declared function )
  2- execution phrase (execute declared function)
         ++++++++++++++++++++++++how a code get execute in js?+++++++++++++++++++++++++++++++++++++++
         let val1=10
         let val2=5
         function addNum(num1,num2){
             let total = num1+num2
             return total
         }
          let result1 = addNum (val1, val2)
          let result2 = addNum(10,2 )
step1:-global excecution/environment......locate in this
step2:- memory phrase (creation phrase) 


 */