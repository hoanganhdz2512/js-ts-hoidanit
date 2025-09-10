console.log("video 27");


//score: Giỏi, Khá, Trung bình, Yếu
const score = 1;
switch(true){

    case (score >= 8 && score <=10):
        console.log("Giỏi");
        break;

    case (score >= 7 && score <8):
        console.log("Khá");
        break;

    case (score >= 5 && score <7):
        console.log("Trung bình");
        break;
        
    default:
        console.log("Yếu");

}