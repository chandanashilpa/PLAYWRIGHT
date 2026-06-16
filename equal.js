console.log(0 == '')//converts string to number
console.log(true == 1)//converts boolean to number
console.log('0' == 0)//converts string to number
console.log('' == '0')//transitivity broken...both strings no conversion..no coercion
console.log(null == undefined)//both null and undefined are considered equal in non-strict equality
console.log(null == 0)//null is only equal to undefined, not to any other value
console.log(undefined == 0)//undefined is only equal to null, not to any other value
console.log(null >= 0)//