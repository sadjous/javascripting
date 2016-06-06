/**
* @Author: OUSMANE M. Sadjad <sadjad>
* @Date:   2016-06-02T06:12:02+01:00
* @Email:  ousmanesadjad@gmail.com
* @Last modified by:   sadjad
* @Last modified time: 2016-06-02T06:15:52+01:00
*/



var a = 1, b = 2, c = 3;

     (function firstFunction(){
         var b = 5, c = 6;

         (function secondFunction(){
             var b = 8;
			 console.log("a: "+a+", b: "+b+", c: "+c);
             (function thirdFunction(){
                 var a = 7, c = 9;

                 (function fourthFunction(){
                     var a = 1, c = 8;

                 })();
             })();
         })();
     })();
