// console.log('huhu')
var arrNhanVien = [];
function addNhanVien(){
    var arrInput = document.querySelectorAll('#formQLNV input, #formQLNV select');
    var nhanVien = new NhanVien();
    for (var i=0; i<arrInput.length; i++){
        var id = arrInput[i].id;
        nhanVien[id]= arrInput[i].value ;
    }
    
    nhanVien.xepLoaiNhanVien();
    //khởi tạo biến isValid = true để kiểm tra khi isvalid = false thì sẽ không trả về nhanVien
var isValid = true;
  // true & false --> false
  // true & true ---> true
    isValid &= checkEmptyValue(nhanVien.tknv, 'tbTKNV') && checkTaiKhoanValue(nhanVien.tknv, 'tbTKNV',4,6);
    isValid &= checkEmptyValue(nhanVien.name, 'tbTen') &&  checkNameValue (nhanVien.name, 'tbTen');
    isValid &= checkEmptyValue(nhanVien.email, 'tbEmail') && checkEmailValue(nhanVien.email, 'tbEmail');
    isValid &= checkEmptyValue(nhanVien.password, 'tbMatKhau') && checkPassValue(nhanVien.password, 'tbMatKhau',6,10);
    isValid &= checkEmptyValue(nhanVien.datepicker, 'tbNgay');
    isValid &= checkEmptyValue(nhanVien.luongCB, 'tbLuongCB') && checkLuongValue(nhanVien.luongCB, 'tbLuongCB');
    isValid &= checkEmptyValue(nhanVien.chucvu, 'tbChucVu');
    isValid &= checkEmptyValue(nhanVien.gioLam, 'tbGiolam');
    // isValid &= checkEmptyValue(nhanVien.gioLam, 'tbGiolam') && checkGioLamValue(nhanVien.gioLam, 'tbGioLam') ;
   
    //nếu 1 hàm chạy ra không có return thì kết quả là undefiend
    if(isValid){
    return nhanVien ;
    }
}

document.getElementById('btnThemNV').onclick = function(){
    var nhanVien = addNhanVien();
    if(nhanVien){
    arrNhanVien.push(nhanVien);
    console.log(nhanVien);
    renderNhanVien();
    saveLocal ('arrNhanVien', arrNhanVien);
    document.getElementById('formQLNV').reset();
    }
}

//reset khi btnSua khong co value
document.getElementById('btnDong').onclick = function(){
   var arrInput=document.querySelectorAll('#formQLNV input, #formQLNV select');
   
   for (var i=0; i<arrInput.length;i++){
    if (arrInput[i].value == ''){}
   }
   
   document.getElementById('tknv').readOnly = false;
   document.getElementById('formQLNV').reset();
    renderNhanVien();
    saveLocal('arrNhanVien', arrNhanVien);

}

// Hiển thị dữ liệu lên cho người dùng
function renderNhanVien(arr){
    if(!arr){
        arr=arrNhanVien;
    }
    var content ='';
    for (var i=0; i<arr.length; i++){
        var nhanVien = arr[i];
        var newNhanVien = new NhanVien();
        Object.assign(newNhanVien, nhanVien);
        // nhanVien = new NhanVien();
        // console.log(nhanVien);
        var tongGio = newNhanVien.tinhTongGioLam();
        var tongGioLam = tongGio.toLocaleString({
            style: 'currenly',
            currenly: 'VND'
        })
        var stringHTML = `
        <tr>
        <td>${newNhanVien.tknv}</td>
        <td>${newNhanVien.name}</td>
        <td>${newNhanVien.email}</td>
        <td>${newNhanVien.datepicker}</td>
        <td>${newNhanVien.chucvu}</td>
        <td>${tongGioLam}</td>
        <td>${newNhanVien.xepLoai}</td>
        <td>
          <button onclick="deleteNhanVien('${newNhanVien.tknv}')" class="btn btn-danger">Xóa</button>
        </td>
        <td>
           <button class="btn btn-warning" onclick="getInfoNhanVien('${newNhanVien.tknv}')">Sửa</button>       
        </td>
        </tr>
        `;
        content += stringHTML;
    }
  
    document.getElementById('tableDanhSach').innerHTML = content;
}

//Lưu trữ vào localstorage
function saveLocal(key, value){
  var stringJson = JSON.stringify(value);
  localStorage.setItem(key, stringJson);
}

//lấy dữ liệu từ local
function getLocal(key){
    var dataLocal = localStorage.getItem(key);
    if (dataLocal){
        var newData =JSON.parse(dataLocal);
    }
    arrNhanVien = newData;
    renderNhanVien();
}
getLocal('arrNhanVien');

//hàm giúp xóa nhân viên
function deleteNhanVien(ttk){
//Dựa vào tên tài khoản tìm vị trí index nhân viên cần xóa
for (var i=0; i<arrNhanVien.length; i++){
if (ttk == arrNhanVien[i].tknv){
    //sử dụng hàm splice để xóa
    arrNhanVien.splice(i,1);
}
}
renderNhanVien();
saveLocal('arrNhanVien', arrNhanVien);
}

//hàm giúp cập nhật sửa nhân viên
function getInfoNhanVien(ttk){
var nhanVien;
for(var i=0; i<arrNhanVien.length; i++){
    if(ttk == arrNhanVien[i].tknv){
        nhanVien = arrNhanVien[i];
    }
}
//lấy dữ liệu và đưa lên input 
 var arrInput = document.querySelectorAll('#formQLNV input, #formQLNV select');
 for(var z=0; z<arrInput.length; z++){
    var id = arrInput[z].id;
   arrInput[z].value = nhanVien[id] ;
 }
 //ko cho người dùng chỉnh sửa ttk
 document.getElementById('tknv').readOnly= true;

 //Hiển thị modal
 $('#myModal').modal('show');
}


//hàm cập nhật nhân viên đã sửa
function updateNhanVien(){
    //dữ liêu cũ:
    var nhanVien = addNhanVien();
    //lấy ttk của nhân viên đang dc chỉnh sửa tìm vị trí nhân viên trong mảng
    if (nhanVien){
    for(var i=0; i<arrNhanVien.length; i++){
        if (nhanVien.tknv == arrNhanVien[i].tknv){
            //gán dữ liệu mới thay thế dữ liệu cũ trong mảng
             arrNhanVien[i] = nhanVien ;
        }
    }
    console.log(arrNhanVien);
    renderNhanVien();
    saveLocal('arrNhanVien', arrNhanVien);
    //mở khóa input ttk nhân viên
    document.getElementById('tknv').readOnly = false;
    document.getElementById('formQLNV').reset();
}
}
document.getElementById('btnCapNhat').onclick = updateNhanVien;

//hàm giúp tìm xếp loại nhânVien và hiển thị
function searchXepLoai(event){
 var xepLoai = event.target.value;
  xepLoai = document.getElementById('searchName').value;
 //.trim() loại bỏ khoảng cách đầu và cuối, .toLowerCase() chuyển tất cả về thành chữ thường
 var keyWord = xepLoai.trim().toLowerCase();
 //gán hàm remove để chuyển tất cả về không dấu;
 var newKeyWord = removeVietnameseTones(keyWord);
 //tạo mảng mới để mang dữ liệu mới sang mảng đó và ko xóa đi mảng cũ
var arrNhanVienNew = [];
 for (var i=0; i<arrNhanVien.length; i++){
    var nhanVien = arrNhanVien[i];
    var xepLoaiNhanVien = removeVietnameseTones(nhanVien.xepLoai.trim().toLowerCase());
    if (xepLoaiNhanVien.includes(newKeyWord)){
        arrNhanVienNew.push(nhanVien);
    }
 }
 renderNhanVien(arrNhanVienNew);

}
document.getElementById('btnTimNV').onclick = searchXepLoai;