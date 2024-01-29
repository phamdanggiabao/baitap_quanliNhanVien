function NhanVien(){
    this.tknv = '';
    this.name = '';
    this.email = '';
    this.password = '';
    this.datepicker = '';
    this.luongCB ='';
    this.chucvu ='';
    this.gioLam='';
    this.xepLoai='';

    //phuong thuc
    this.tinhTongGioLam = function(){
        console.log("chucvu", this.chucvu);
        var tong=0;
        if(this.chucvu == 'Trưởng phòng'){
          tong = (this.luongCB * 2);
        }else if (this.chucvu == 'Sếp'){
            tong = (this.luongCB * 3);
        }else {
            tong = this.luongCB *1;
        }
     return tong;
    }

 //xep loai dựa trên giờ làm nhân vien
    this.xepLoaiNhanVien = function(){
        if(this.gioLam >= 192){
            this.xepLoai = 'Nhân viên xuất sắc';
        }else if(this.gioLam >= 176){
            this.xepLoai = 'Nhân viên giỏi';
        }else if(this.gioLam >=160){
            this.xepLoai = 'Nhân viên khá';
        }else {
            this.xepLoai = 'Nhân viên trung bình';
        }
  
    }

}
 
 
    


