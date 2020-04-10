/** Binary search is fast search with run-time complexity of O(log n) */
/** Divde and conquer method is used */
/** Pesudo Code for binary search 
 * Procedure binary_search
 * A <- sorted Array
 * n<- size of array
 * x<- value to be search
 *  set lowerbound =1
 * set upper bound =n
 * while x not found
 *
 */
var unSortedArray = [10,20,30,40,50,60,11,12,13,14,15,16,17]
var sortedArray= unSortedArray.sort()
var valueToFind=60
var lo=0
var high=sortedArray.length
var mid=0

while(lo<= high){
    mid=Math.floor((lo+high)/2)
    if(valueToFind==sortedArray[mid]){
        console.log("value found at position " + mid)
        console.log(sortedArray) 
        break;   
    }
    else if (valueToFind>sortedArray[mid]) {
                lo=mid+1
    } else if(valueToFind<sortedArray[mid]) {
        high=mid-1
    } 
}