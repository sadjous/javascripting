/**
* @Author: OUSMANE M. Sadjad <sadjad>
* @Date:   2016-06-01T20:24:34+01:00
* @Email:  ousmanesadjad@gmail.com
* @Last modified by:   sadjad
* @Last modified time: 2016-06-01T20:31:32+01:00
*/



var numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filtred=numbers.filter(
	function evenNumbers (numbers) {
       return numbers % 2 === 0;
     }
);
console.log(filtred);
