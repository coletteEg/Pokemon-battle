let array = [28, 43, -12, 30, 4, 0, -36];
let smallest = array[0];
let largest  = array[0];

for (let i=0; i<array.length; i++){
    let number_im_looking_at = array[i]
    if (number_im_looking_at < smallest){
        smallest = number_im_looking_at;
    } else if (number_im_looking_at > largest) {
        largest = number_im_looking_at
    }
}
console.log(smallest, largest);