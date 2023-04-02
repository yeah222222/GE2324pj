// test for github
console.log("Test works");
function json2dict (filepath){
    var xmlhttp = new XMLHttpRequest();
     
    var dict = 1
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // 将 JSON 数据解析为字典
        var myObj = JSON.parse(this.responseText);
        // 在控制台打印字典
        dict = myObj
        console.log(myObj);
    }
    };

    // 打开文件并发送请求
    xmlhttp.open("GET", "file.json", true);
    xmlhttp.send();
    return myObj
}
jsonFile = json2dict("./forFrontEnd.json");
console.log("We get file here");
console.log(jsonFile);
console.log("Test begin");