/* please use Big-5 code open cuz school server can not use with UTF-8 */
// https://www.runoob.com/jsref/met-document-createtextnode.html

// 這篇拯救了我👍 https://medium.com/@estherchen000/%E7%AD%86%E8%A8%98-%E4%BD%BF%E7%94%A8javascript%E6%93%8D%E4%BD%9Cdom-%E7%8D%B2%E5%8F%96%E5%85%83%E7%B4%A0%E7%AF%87-1aaa52666e80

var ul = document.querySelector('#list');
var number;
var li;


// querySelectorAll 靜態
// https://developer.mozilla.org/zh-TW/docs/Web/API/NodeList

function Show(){
  var render = document.getElementById('render');
  var show = document.getElementById('show');

  if (render.style.display === 'none') {
    render.style.display = 'block';
    show.innerText = "隱藏";
    // number = document.querySelectorAll("ul li");
  }
  else {
    render.style.display = 'none';
    show.innerText = "顯示資料";


  }

}
function Count(){


  document.getElementById('Count').innerHTML = document.querySelectorAll("ul li").length;
  number = document.querySelectorAll("ul li").length;
  console.log(number);

}

function DefaultList() {

  ul.setAttribute('class', 'wrap');
  var t;
  var original = ["網頁設計", "物聯網設計" , "CSS版型設計" , "數位學習系統" ]; 

  var flag = false;

  if (flag == false) {
    
  document.getElementById("default").disabled=true;
  document.getElementById('render').appendChild(ul);
  original.forEach(renderOriginalList);

  function renderOriginalList(element, index, arr) {
    li = document.createElement('li');
    li.setAttribute('class', 'item');
    count = document.getElementById('Count').innerHTML;

    ul.appendChild(li);

    t = document.createTextNode(element);

    // console.log(t);

    li.innerHTML = li.innerHTML + element;
  }
  // console.log(number)
  }
  flag = true;
 
        setTimeout(function () {
            document.getElementById("default").disabled=false;
            flag = false;
        }, 15000);
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
    li.textContent = input.value;
    ul.appendChild(li);
    // ul.innerHTML += "<li>" + input.value + "</li>";
    

    for (let i = 0; i < number.length; i++){
      number[i].style.backgroundColor = "#15141A";
    }
  
  }


  }

  function DelList() {

    let list = document.querySelector('#list');
    let ul = document.querySelector('#list li:nth-last-child(1)');
    list.removeChild(ul) 
    console.log(list);
  }

  function SortList() {
    
    let list = document.querySelector('#list');


  }
//     original.pop();  
//     let list = document.querySelector('#list') // 取得父層容器節點
// let oldList = document.querySelectorAll('li')[1] // 先選到全部的 li 在用索引值選出我們要指定的
// list.removeChild(oldList) // 移除我們指定的 oldList




 function alert() {
  Swal.fire({
    icon: 'error',
    title: '新增作業失敗',
    text: '請輸入正確的格式，已避免系統被玩壞哦！',
    html:
    '請 在 <b>確 認</b> 一 次 你 有 輸 入 內 容 (╯°Д°）╯' ,
    confirmButtonText:
    '好哦我了解 <i class="fa fa-thumbs-up"></i>',
    confirmButtonAriaLabel: 'understand',
    footer: '<a href="https://itechdct.ntcu.edu.tw/ntcudct_courses/DigitalCommunication/11024/show_web_write.aspx?ftp_dir=3_class/&pathname=03_2_array_for_list" target=”_blank”>為何會出現此訊息？你說呢？</a>'
    }
  );
}
function confirm() {
  Swal.fire({
      title: "操作確認",
      text: "請點選你想按的按鈕",
      showCancelButton: true
  }).then(function(result) {
     if (result.value) {
          Swal.fire("您按了OK");
     }
     else {
         Swal.fire("您選擇了Cancel");
     }
  });
}

    
//   btn.addEventListener('click',function(e){
//       alert(btn.textContent);
//     }) 
// 測試用

// 且輸入完後要清除文字
// 重新整理後，儲存資料還在
// 新增了，那怎麼刪除？
// 優化使用者體驗
// 有時間再做～

    

  
// function addBook(){
// 	var list = document.getElementById('list');
// 	var book1 = document.getElementById('book');
// 	if (book1.value==""){
// 		alert("請輸入資料");
// 	}
// 	else{
// 		list.innerHTML += "<li>" + book1.value + "</li>"; //資料取得以物件.value(book1.value)應用
// 		document.getElementById('bookCount').innerHTML = list.children.length;
// 	}
// }
  
  
  


