const array=[1,2,3,4,5,6,7,8,9,10];
console.log(array);
console.log(typeof(array));//returns object
console.log("length of an array:");
console.log(array.length);
console.log("acccessing items in array:");
console.log(array[0]);
console.log("modify array:");
array[0]=100;
console.log(array);
console.log("multidimensional array:");
const multi_array=["ARUN PRAKASH",[100,90,85,76],"6380325845"];
console.log(multi_array);
console.log(multi_array[0]);
console.log(multi_array[1][0]);
console.log(multi_array[2]);
console.log("index of an item in array:");
console.log(multi_array.indexOf("ARUN PRAKASH"));
console.log("adding items:");
console.log("push():");
multi_array.push("arunprakashnka@gmail.com");
console.log(multi_array);
console.log(multi_array.push("erode"));//push returns the length of an array:
console.log(multi_array);
console.log("To add an item to the start of the array, use unshift():");
multi_array.unshift("student details");//returns length of the array
console.log(multi_array);
console.log("removinf items:pop()");
multi_array.pop();//returns the removed item
console.log(multi_array);
console.log("To remove the first item from an array, use shift():");
multi_array.shift();//returns removed item
console.log(multi_array);
console.log("for loop to get all the values:")
for(element of multi_array)
{
    console.log(element);
}
console.log("splice() to  changes the contents of an array by removing or replacing existing elements and/or adding new elements");
multi_array.splice(multi_array.indexOf("6380325845"),1);//if index of the element is known
console.log(multi_array);
function isLong(city) {
    return city.length > 8;
  }
  const cities = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];
  const longer = cities.filter(isLong);
  console.log(longer);  // [ "Liverpool", "Edinburgh" ]
  
  
