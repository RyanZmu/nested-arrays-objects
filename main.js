"use strict";

let appEle = document.querySelector("#app")

let arrayData = [
["apple","banana","coconut","durian"],
["wheat","rye","sourdough"],
["carrot","tomato","peach","mango"]
]

console.log(arrayData[0])

for (let outerIndex = 0; outerIndex < arrayData.length; outerIndex += 1) {
    const currentArray = arrayData[outerIndex];
    let newList = document.createElement("ol")
   
    appEle.append(newList)

    for (let innerIndex = 0; innerIndex < currentArray.length; innerIndex += 1) {
        const currentElement = currentArray[innerIndex];
        let newItem = document.createElement("li")
        newItem.innerText = currentElement
        newList.append(newItem)
    } 
}