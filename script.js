let a=[10,9,8,7,6,5,4,3,2,1];

console.log(mergeSort(a,0,a.length-1));

function mergeSort(a,l,r){
let c;
if(l==r){
  c=a[l];
  return [c];
}

let mid=parseInt(l+(r-l)/2);

let first = new Array();
let second = new Array();
first=mergeSort(a,l,mid);
second=mergeSort(a,(mid+1),r);
return(mergeTwoSortedArray(first,second));
} 



function mergeTwoSortedArray(x,y){
  let i=0;
  let j=0;
  let k=0;

  let finalArray=new Array();
  while(i<x.length&&j<y.length){
    if(x[i]<y[j]){
      finalArray[k]=x[i];
      k++;
      i++;}
  else{
    finalArray[k]=y[j];
    k++;
    j++;
  }
}
while(i<x.length){
  finalArray[k]=x[i];
  i++;
  k++;
}

while(j<y.length){
  finalArray[k]=y[j];
  j++;
  k++;
}

return finalArray;

 
}


