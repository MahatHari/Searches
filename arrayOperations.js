/** Basic Operations in Array 
 * Traverse
 * Insertion 
 * Deletion
 * Search 
 * Update
 */

 // Traverse
 var LA = [1,3,5,7,9,11]
 console.log("Original elements of array ")
 for(let i=0; i<LA.length; i++){
     console.log("LA [" + i +"] = "+ LA[i])
 }

 // Insertion
 var SA = [2,4,6,8,10]
 console.log("original elements of array " + SA)
 
 let p=1
 while (p<=3){
    var k=(SA.length-1);
    SA[k+p]= SA[k]+2;
    p++
 }
 console.log(SA)

// Search 
var PA = [1,2,3,5,7,11,19]
console.log("original prime arrat " +PA);
var primeToSearch = 7;
for(let i =0; i<PA.length; i++){
    console.log("PA ["+i+"]="+PA[i])
}
let i =0;
while(i<PA.length){
 if(PA[i]===primeToSearch){
     break;
    }
    else{
         i++ 
    }
}
console.log("Found "+primeToSearch +" at position "+ i);

// Update Operation
/**
 * start
 * set LA[k-1]=ITEM
 * stop
 */
var UA = ["ram", "shyam","geeta", "rita"]
//update
UA[2]="Preeti"
console.log(UA)

// Linear Search 
/**
 * Pesudo Code
 * procedure linear_search(list, value)
 * for each time in the list 
 *  if match item==value
 *      return the item's location
 *   end if
 * end for 
 * end procedure
 */
let lis= [1,3,5,7,11,13,19];
var find= 7;
for(var i=0; i<lis.length; i++){
    if(lis[i]==find){ 
        console.log( "found in position " +i)
    }   
    else{
        console.log("not found")
    }
}
// while(i<lis.length){
//     if(lis[i]==find){ 
//         console.log( "found in position " +i)}
//     else{
//          "not found"
//         }
//     i++;
// }
