/*console.log("画面起動しました。");

if(confirm("確認ダイアログです。")){
    alert("OKボタンが押下されました");
    let retsu=[1,2,3,4,5,6,7,8,9,10];
    for (let i=0; i<retsu.length; i++) {
        console.log(retsu[i])
        
    }
}else{
    alert("キャンセルボタンが押下されました");
}


document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.btn');

    console.log(btn);

    btn.addEventListener('click', function(){
        alert('画像がクリックされました');
    });
});
*/


console.log("画面起動しました。");
let result = window.confirm("確認ダイアログです");
if (result){
    alert("OKボタンが押下されました");
    const hairetsu = [1,2,3,4,5,6,7,8,9,10];
    for(let i = 0; i < hairetsu.length ; i++){
        console.log(hairetsu[i]);
    }
}else{
    alert("キャンセルボタンが押下されました");
}
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    alert('画像をクリックしました。');
})
