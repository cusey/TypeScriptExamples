console.log(' --- Simple Array ---')
var alphas: string[]; 
alphas = ["0","1","2","3"] 
console.log('Second Element: ' + alphas[1]); 
console.log('Third Element: ' + alphas[2]);

console.log(' --- Simple Array Object ---')
var arr_names:number[] = new Array(4)  

for(var i = 0; i < arr_names.length; i++) { 
   arr_names[i] = i * 2 
   console.log(arr_names[i]) 
}
