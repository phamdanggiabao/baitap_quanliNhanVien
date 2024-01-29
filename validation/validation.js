//hàm kiểm tra ko cho nhập rỗng 
function checkEmptyValue(value, idThongBao){
  //xử lí dữ liệu
  var thongBao = document.getElementById(idThongBao);
  if (value == ''){
    //nếu dữ liệu rỗng --> false
    thongBao.style.display = 'block';
    thongBao.innerHTML= 'Vui lòng không bỏ trống trường này'
    console.log(thongBao);
    return false;
  }else{
    thongBao.style.display = 'none';
    thongBao.innerHTML = '';
    return true;
  }
}

//hàm kiểm tra email có đúng định dạng hay không
function checkEmailValue(value, idThongBao){
    const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var checkEmail = regexEmail.test(value);
    // console.log(checkEmail);
    var thongBao =   document.getElementById(idThongBao);
    if (checkEmail){
        thongBao.style.display = 'none';
        thongBao.innerHTML = '';
        return true;
    }else{
        thongBao.style.display = 'block';
        thongBao.innerHTML = 'Email không đúng định dạng';
        return false;
    }
}

//hàm tài khoản tối da 4-6 ký số
function checkTaiKhoanValue(value, idThongBao, min, max){
var doDaiKyTu = value.length;
if (doDaiKyTu >=min && doDaiKyTu<=max){
    document.getElementById(idThongBao).style.display = 'none';
    document.getElementById(idThongBao).innerHTML = '';
    return true;
}else {
    document.getElementById(idThongBao).style.display = 'block';
    document.getElementById(idThongBao).innerHTML = `Tài khoản tối đa ${min} - ${max} ký số`;
    return false;
}
}

//Hàm tên nhân viên chỉ là chữ 
function checkNameValue (value, idThongBao){
    const regexName = /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u;
    var checkName = regexName.test(value);
    if (checkName){
        document.getElementById(idThongBao).style.display='none';
        document.getElementById(idThongBao).innerHTML = '';
        return true;
    }else{
        document.getElementById(idThongBao).style.display = 'block';
        document.getElementById(idThongBao).innerHTML = 'Tên nhân viên không hợp lệ';
        return false;
    }
}

//hàm kiểm tra mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)
function checkPassValue(value, idThongBao, min, max){
  var doDaiKyTu = value.length;
  if (doDaiKyTu >=min && doDaiKyTu <= max){
    const regexPassWord = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    var checkPass = regexPassWord.test(value);

    if(checkPass){
    document.getElementById(idThongBao).style.display = 'none';
    document.getElementById(idThongBao).innerHTML = '';
    return true;
  }else{
    document.getElementById(idThongBao).style.display = 'block';
    document.getElementById(idThongBao).innerHTML = 'Mật khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, và 1 ký tự đặc biệt';
    return false;
  } 
 
  
  }else {
    document.getElementById(idThongBao).style.display = 'block';
    document.getElementById(idThongBao).innerHTML = `Mật khẩu từ ${min}-${max} ký tự`
    return false;
  }
  
}

//hàm lương cơ bản
function checkLuongValue (value, idThongBao){
    if(value >= 1000000 && value <=20000000){
        document.getElementById(idThongBao).style.display = 'none';
        document.getElementById(idThongBao).innerHTML = '';
        return true;
    }else {
        document.getElementById(idThongBao).style.display = 'block';
        document.getElementById(idThongBao).innerHTML = 'Lương cơ bản 1 000 000 - 20 000 000,';
        return false;
    }
}

function removeVietnameseTones(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
  str = str.replace(/Đ/g, 'D');
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, ' ');
  str = str.trim();
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    ' '
  );
  return str;
}

//hàm check số giờ làm 80-200
// function checkGioLamValue (value, idSpan){
//  if(value >= 80 && value <= 200){
//   document.getElementById(idSpan).style.display = 'none';
//   document.getElementById(idSpan).innerHTML = '';
//   return true;
//  }else {
//   document.getElementById(idSpan).style.display = 'block';
//   document.getElementById(idSpan).innerHTML = 'Số giờ làm trong tháng 80 - 200 giờ'
//  }
// }