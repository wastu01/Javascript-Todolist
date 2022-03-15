var ul = document.querySelector('#list');
var text = document.querySelector('#text')
var number = document.querySelectorAll("ul li");
var li;

function Show(){
  var render = document.getElementById('render');
  var show = document.getElementById('show');

  if (render.style.display === 'none') {
    render.style.display = 'block';
    show.innerText = "隱藏";
  }
  else {
    render.style.display = 'none';
    show.innerText = "顯示資料";


  }

}
function Count(){

  number = document.querySelectorAll("ul li");
  document.getElementById('Count').innerHTML = number.length;
    
  for (let i = 0; i < number.length; i++){
    // number[i].style.backgroundColor = "#15141A";
  
  }

}

function DefaultList() {

  
  var defaults = document.getElementById('default');
  // default 保留字

  ul.setAttribute('class', 'wrap');
  var t;
  var original = ["網頁設計", "物聯網設計" , "CSS版型設計" , "數位學習系統" ]; 

  var flag = false;

  if (flag == false) {
    
  defaults.disabled=true;
  defaults.innerText = "資料已載入";
  document.getElementById('render').appendChild(ul);
  original.forEach(renderOriginalList);

  function renderOriginalList(element, index, arr) {
    li = document.createElement('li');
    li.setAttribute('class', 'item');

    ul.appendChild(li);

    li.innerHTML = li.innerHTML + element;
  }
  // console.log(number)
  }
  flag = true;
 
        setTimeout(function () {
            defaults.disabled=false;
            defaults.innerText = "再次載入資料";
            flag = false;
        }, 5000);
    
  Count();
}
 


// 中文排序會依照編碼大小
// 黑暗執行緒：https://blog.darkthread.net/blog/javascript-chinese-char-sorting/


 function Newlist() {
  

  if(input.value == ""){
    alert();
  }
 
  else{

    li = document.createElement('li');
    li.setAttribute('class', 'item');
    i = document.createElement('i');
    li.setAttribute('class', 'fa-solid fa-circle-xmark');
    // li.textContent = input.value;
    li.appendChild(i)
    ul.appendChild(li);
    li.textContent = input.value;
    input.value = "";


    // str += `
    // <li>
    //   <a data-num=${i}>
    //     <i class='fa-solid fa-circle-xmark'></i>
    //     ${renderList[i]}
    //   </a>
    // </li>`;
    Count();
  
  }


  }

  function DelList() {

    let list = document.querySelector('#list');
    let ul = document.querySelector('#list li:nth-last-child(1)');
    list.removeChild(ul) ;
    Count();
  }

  function Clear() {
    

    let list = document.querySelector('#list');
    let li   = document.querySelectorAll('.item');
    let h3 = document.querySelector('#h3');
     
    h3.classList.add("list", "alert");
    h3.innerText = "您刪除了"+ li.length +"本";
    
     
    // showAlert('已將移除', 'success');
    list.innerHTML = '';
    console.log(li.length);
    
    
    Count();    
  }


  function showAlert(message, className) {

    const li   = document.querySelectorAll('.item');
    const div = document.createElement('div');
    
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    div.innerText +=  li.length +"本";
    const text = document.querySelector('#text');

    text.insertBefore(div, h3);
    // 元素 ， 位置
    text.appendChild(h3);

    

    // Vanish in 3 seconds
    var intervalid = setInterval( 'Seconds()', 3000);
    const alert = document.getElementsByClassName('alert');
    console.log(alert);

  }
  function Seconds(){
    
    const alert = document.getElementsByClassName('alert');

    
    for ( var i=0; i < alert.length; i++){
      console.log(alert[i].innerHTML);
      alert[i].remove();
      
      return;

    }
   

  }

  // setTimeout( 'console.log("1 秒後執行 console")', 2000);


 function alert() {
  Swal.fire({
    icon: 'error',
    title: '新增作業失敗',
    text: '請輸入正確的格式，已避免系統被玩壞哦！',
    html:
    '請 再 <b>確 認</b> 一 次 你 有 輸 入 內 容 (╯°Д°）╯' ,
    confirmButtonText:
    '好哦我了解 <i class="fa fa-thumbs-up"></i>',
    confirmButtonAriaLabel: 'understand',
    footer: '<a href="https://github.com/wastu01/Javascript-Todolist" target=”_blank”>為何會出現此訊息？請自行研究</a>'
    }
  );
}
function confirm() {
  let li   = document.querySelectorAll('.item');
  Swal.fire({
      title: "操作確認",
      text: "刪除後資料無法回覆，你要確定ㄟ",
      showCancelButton: true
  }).then(function(result) {
     if (result.value) {
          Swal.fire("已刪除"+li.length+"本");
          Clear();
          Count();
     }
     else {
         Swal.fire("OK 資料沒有刪除");
     }
  });
}

function Sort(){
  var sorts = document.getElementById('sort');
  sorts.disabled=true;
  sorts.innerText = "下一版本才有此功能";
}

  
  
  


