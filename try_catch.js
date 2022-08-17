try{ //dung de xu ly khi gap loi
    hello.toUpperCase(); //hello chua duoc dinh nghia => loi
} catch {
    console.log('error'); //chay khi xay ra loi
}
function yell (msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) { //lay thong tin loi
        console.log(e); //in thong tin loi
        console.log('pls a string');
    }
}