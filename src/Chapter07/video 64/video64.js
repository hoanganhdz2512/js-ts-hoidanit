console.log("video 64");

const doSomething = () => {
  const a = 10,
    b = 1;

  if (b === 0) {
    throw new Error("Thực hiện chia cho cho 0");
  }
  return a / b;
};

try {
  doSomething();
} catch (error) {
  console.log("có lỗi xảy ra", error);
} finally {
  console.log("run finaly");
}
