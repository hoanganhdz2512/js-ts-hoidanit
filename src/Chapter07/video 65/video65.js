console.log("video65");

const greeting = (name, callback) => {
  console.log("xin chao: ", name);
  callback();
};

const hello = () => {
  console.log("learn callback...");
};
const hi = () => {
  console.log("say hi...");
};

greeting("Eric", hello);
greeting("hoang anh", hi);
