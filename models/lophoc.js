var lophoc = function () {
    this.danhSachSinhVien = [];
    this.moTa = 'Day la Duy';
    this.tenLopHoc = 'FE4';
    this.LayDanhSachSinhVien = function () {
        return this.danhSachSinhVien;
    }
    this.timKiemSinhVien = function (maSVK) {
        console.log('da tim thay sinh vien');
    }
}