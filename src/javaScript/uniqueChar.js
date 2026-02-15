let str="programming"

const findNoRepeating=(str)=>{
    let count=0
    let uniqueData=[]
    let isUnique=false
    for(let i=0;i<str.length;i++){let str = "programming";

const findNoRepeating = (str) => {
    for (let i = 0; i < str.length; i++) {
        let count = 0;

        for (let x = 0; x < str.length; x++) {
            if (str[i] === str[x]) {
                count++;
            }
        }

        if (count === 1) {
            console.log(str[i]);
        }
    }
};

findNoRepeating(str);

        for(let x=i+1;x<str.length;i++){
            if(str[x]==str[i]){
                count++
            
            }
            else{
                uniqueData.push(x)
            }
        }
        
    }
      console.log(uniqueData)
}
findNoRepeating(str)




let result = str.split("").filter((char, index, arr) => {
    return arr.filter(c => c === char).length === 1;
});

console.log(result);

let obj={}
for(let char of str){
    obj[char]=(obj[char]||0)+1
    
}
for (let char in obj) {
    if (obj[char] === 1) {
        console.log(char)
    }
}

console.log(obj)
