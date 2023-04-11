const sentence = "hello there from lighthouse labs";

let index = 0;  //Index needed to increase timeout delay below

for (const char of sentence) {   //Loop through each character
  setTimeout(() => {    //Send each character to the queue to be written, each with an increase timout delay based on 50 * index
    process.stdout.write(char); 
    }, 50 * index);
  index++;  //Index increments after character has been written, to further delay next character
};

setTimeout(() => {  //Use same index variable to delay logging new line
  process.stdout.write("\n");
}, 50 * index);



