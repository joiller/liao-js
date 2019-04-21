// window.onload= function()
// {let tboss,tl,arr=[],newtl=[];
// tboss = document.getElementById('test-list');
// tl = tboss.children;
// for (let i of tl){
//     console.log(i);
//     let j = i.innerText;
//     console.log(j);
//     arr.push(j)
// }
// arr.sort();
// for (let i of arr){
//     for (let j of tl){
//         if (j.innerText === i){
//             // console.log(tl[j]);
//             // console.log(arr[i]);
//             newtl.push(j);
//         }
//     }
// }
// console.log(arr);
// console.log(tl);
// tboss.innerHTML = '';
// for (let i in newtl){
//     tboss.appendChild(newtl[i])
// }
// };
// window.onload = function () {
//     let tl = document.querySelector('#test-list');
//     let ls = tl.children;
//     let nls=[];
//     for (let i of ls){
//         nls.push(i)
//     }
//     for (let i of ls){
//         nls.sort(function(x,y){if (x.innerText<y.innerText){return -1}
//         else if (x.innerText===y.innerText){return 0}
//         else { return 1}
//         })
//     }
//     tl.innerHTML='';
//     for (let i of nls){
//         tl.appendChild(i)
//     }
//     console.log(tl);
//     console.log(tl.children.length)
// }
window.onload = function () {
    let list = document.getElementById('test-list'),li = list.children;
    for (let i = 0; i<li.length;i++) {
    for(let j = 0; j<li.length-i-1; j++){
        if(li[j].innerText >= li[j+1].innerText){
            list.insertBefore(li[j+1],li[j]);
            console.log(li)
        }
    }}
};