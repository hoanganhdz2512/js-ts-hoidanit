console.log("Lab2");

const tinhTrungBinh = (toan, van, anh) => {
  return (toan + van + anh) / 3;
};

const xepLoai = (diemTB) => {
  if (diemTB >= 9) {
    return "Gioi";
  } else if (diemTB >= 7) {
    return "Kha";
  } else if (diemTB >= 5) {
    return "Trung Binh";
  } else {
    return "Yeu";
  }
};

const diemToan = 9;
const diemVan = 8;
const diemAnh = 6;

const diemTB = tinhTrungBinh(diemToan, diemVan, diemAnh);

console.log(`
    Điẻm trung bình: ${diemTB}
    Xếp loại: ${xepLoai(diemTB)}
`);
