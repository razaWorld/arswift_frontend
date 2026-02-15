let arr = [12, 8, 1, 2, 3, 4, 5];
let target = 20;

const findIndex = (arr, target) => {
    let found = false;

    for (let i = 0; i < arr.length; i++) {
        for (let x = i + 1; x < arr.length; x++) {
            if (arr[i] + arr[x] === target) {
                console.log("Indexes:", i, x);
                found = true;
            }
        }
    }

    if (!found) {
        console.log("No result found");
    }
};

findIndex(arr, target);

