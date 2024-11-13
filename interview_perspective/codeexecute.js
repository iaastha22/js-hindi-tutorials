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
step2:- memory phrase (creation phrase) here all the variables/ values are store ..... ( var1(undefined[pehle sare variables liye jate hai aur undefined rakha jata hai]) var2(undefine) addNum( func defination(bec func execute nhi hua hai bus declared hua hai) i.e. all inside {} ) result1(undefined) result2(undefined)) hre we are done with first cycle

step3:- Execuation phrase...... var1(10) var2(5) (line 14 to 17 nothing happens as nothing has to execute their) now for result1(addnumber[new sandbox{again memory phase n execuatin phrase took place kyuki vo function hai } with new variable envr. + execuaion thread])
i- memory phrase ( now it's has again val1(undefined) val2(undefined) total(undefined)(# its function of 14))
ii- execution Context(now all mathematical equation wil took place ) num1=10,num2=5, total=15(total'll erturn back to its parent execuational context or global EC)  # this extra created GEC will deleted automatically after work
now we again return to our execution phrase ... result1=15 .... result2=(again new envir will created n so.....)*/



/* 
 */