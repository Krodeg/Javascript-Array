/*******************************/
/*               1             */
/*******************************/
// ["Johny", "Martin", "John", "Max"] shu arraylarni ichida lengthi 4dan kattalarni toping //

// let array = ["Johny", "Martin", "John", "Max"];
// console.log(array.filter((ele) => ele.length > 4));



/*******************************/
/*               2             */
/*******************************/
// ["Apple", "Mandarine", "Orange", "Banana"] shu arraylarni ichida "Banana"ni orqadan uchirib aldiga qushing //

// let array = ["Apple", "Mandarine", "Orange", "Banana"];
// let banana = array.pop();
// let result = array.unshift(banana);
// console.log(array);



/*******************************/
/*               3             */
/*******************************/
// ["Hello"] va ["world"] ni bitta array qiling //

// let a = ["Hello"];
// let b = ["world"];

// console.log(a.concat(b));



/*******************************/
/*               4             */
/*******************************/
// [9, 8, 7, 6, 5, 4, 3, 2, 1] ni sortirovka qiling //

// let array = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// console.log(array.sort());



/*******************************/
/*               5             */
/*******************************/
// ["h", "e", "l", "l", "o"] ni oralarini "=>" bilan berginlang //

// let array = ["h", "e", "l", "l", "o"];
// console.log(array.join("=>"));



/*******************************/
/*               6             */
/*******************************/
// ["A", "p", "p", "l", "e"] ni harbitta harfini alohida chiqaring //

// let array = ["A", "p", "p", "l", "e"];
// array.forEach((ele) => console.log(ele));



/*******************************/
/*               7             */
/*******************************/
// ["Johny", "Martin", "John", "Max"] shu arraylarni ichida "Martin" ni uchirvoring //

// let array = ["Johny", "Martin", "John", "Max"];
// let result =  delete array[1];
// console.log(array);



/*******************************/
/*               8             */
/*******************************/
// [10, 52, 96, 25, 84, 100] shu sonlarni ichida eng kattasini topib, uni "Binary number" ga ozgartiring //

// let array = [10, 52, 96, 25, 84, 100];

// let result = Math.max(...array);

// console.log(Number(result).toString(2));



/*******************************/
/*               9             */
/*******************************/
// [1, 3, 5, 8, 3] ni ichida "4" bolsa true yoq bolsa false chiqarsin // 

// let array = [1, 3, 5, 8, 3];
// let result = array.includes("4");
// console.log(result);



/*******************************/
/*               10            */
/*******************************/
// ["a", "b", "c", "d", "e", "f"] shularni hammasini katta harfga ozgartiring //

// let array = ["a", "b", "c", "d", "e", "f"];
// array.filter((ele) => console.log(ele.toUpperCase()));