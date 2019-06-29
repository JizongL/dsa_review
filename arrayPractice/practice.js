const Array = require('./Array')

function main(){
    Array.SIZE_RATIO = 3;
    let arr = new Array;
    // arr.push(3);
    // console.log(arr);
    // arr.push(5);
    // console.log(arr);
    // arr.push(15);
    // console.log(arr);
    // arr.push(19);
    // console.log(arr);
    // arr.push(45);
    // console.log(arr);
    // arr.push(10);
    // console.log(arr);
    // arr.push(11);
    // console.log(arr);
    // arr.push(123);
    // console.log(arr);
    for(let i = 0;i<26;i++){
        arr.push(123);
    }
    

}

main()

function Urlify(str){
    const strArray = str.split(' ');    
    return strArray.join('%20')
}

// console.log(Urlify('I am bored'))


function merge_arrays(arr1, arr2) {
	let idx1 = 0, idx2 = 0;
	let ret = [];
	while (idx1 < arr1.length && idx2 < arr2.length) {
		if (arr1[idx1] < arr2[idx2])
            {
            ret.push(arr1[idx1++]);
            
            }
		else
			{
            ret.push(arr2[idx2++]);
            
            }
    }
    // console.log(ret,'merged',arr1[idx1],'array 1',arr2[idx2],'array 2')
	// One array is now empty. Join the rest of the other array on.
    console.log(ret,'so far')
    if (idx2 < arr2.length) {
        console.log(arr1,arr2,idx1,idx2,'test arr1')
		idx1 = idx2;
        arr1 = arr2;
        console.log(arr1)
	}
	while (idx1 < arr1.length) 
        ret.push(arr1[idx1++]);
        // console.log(ret,'test')
	return ret;
}

arr1 = [1,3,5,9]
arr2 = [2,5,7,9,10]
merge_arrays(arr1,arr2)


