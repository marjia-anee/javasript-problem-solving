var name = [3,4,6,7,3,2,8,1,9,11,11,2,56];
var uniqueName = [];

for(var i = 0; i< name.length; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if (index == -1){
        uniqueName.push(element);
    }
}

console.log(uniqueName);