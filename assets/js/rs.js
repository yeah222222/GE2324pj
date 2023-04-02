
fetch('./images/0673677023.jpg')
  .then(response => {
    if (response.ok) {
      // 当响应状态码为 200-299 时，表示路径存在
      console.log('路径存在');
    } else {
      // 当响应状态码不为 200-299 时，表示路径不存在
      console.log('路径不存在');
    }
  })
  .catch(error => {
    // 发生错误时，表示路径不存在
    console.log('路径不存在');
  });


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
// console.log("dict here")

// rcmd= json2dict("../forFrontEnd.json")
// console.log("dict here")
// console.log(rcmd)
// rcmd = {"cid1":{
//     "boughtAids":["0657719012","0657719010"],
//     "rcmdAids": ["0425529003","0487937002","0487937003"]
//     // "prdct_name":["a1","a20,"]
// },
//         "cid2":{
//             "boughtAids":["0425529003","0487937002","0487937003"],
//             "rcmdAids": ["0657719012","0657719010"]
// }
// }
rcmd = {
    "04c7dc2c017220fc7cc659fc2b1c32c8673917670d5b8ab0c5994b845a1add5e": {
      "boughtAids": [
        "0690545002",
        "0884319001",
        "0884319006"
      ],
      "rcmdAids": [
        "0814650001",
        "0828928001",
        "0599580038",
        "0804659003",
        "0904625001",
        "0886557004",
        "0755185006",
        "0901330002",
        "0730683050",
        "0905916001",
        "0863853001",
        "0904584009"
      ]
    },
    "2282b1009c7fb1545fb183a632657d3ee74e5b735d7069e3c2c3009a79d3d36a": {
      "boughtAids": [
        "0673677023",
        "0673677002",
        "0687704001",
        "0621381016",
        "0556539016",
        "0556539030",
        "0791033010"
      ],
      "rcmdAids": [
        "0748355003",
        "0894668002",
        "0888343003",
        "0905945001",
        "0892930002",
        "0915523001",
        "0827968001",
        "0868038001",
        "0902419001",
        "0778064003",
        "0794321007",
        "0886862007"
      ]
    },
    "4cb2040f35d9d859b799fecef82794290077e859010edc3c415bcf15eac11e35": {
      "boughtAids": [
        "0882925004",
        "0704754001",
        "0868064002",
        "0608943015"
      ],
      "rcmdAids": [
        "0762143010",
        "0878333001",
        "0873279003",
        "0717490010",
        "0694848010",
        "0894668003",
        "0640001033",
        "0706016006",
        "0841383003",
        "0867966010",
        "0860646002",
        "0910601003"
      ]
    },
    "56ac0602775a8157205271bd737e4f9cb6849bd591cc2fc1175ad90aa8696bd2": {
      "boughtAids": [
        "0717490081",
        "0869397001",
        "0944506001",
        "0736923003",
        "0758027001",
        "0917300002",
        "0810557003",
        "0917300005",
        "0909924002",
        "0917296002",
        "0917296005"
      ],
      "rcmdAids": [
        "0810557001",
        "0599580044",
        "0810825002",
        "0694848010",
        "0868283001",
        "0631708001",
        "0920610001",
        "0855080011",
        "0885951003",
        "0820572001",
        "0801526001",
        "0568601006"
      ]
    },
    "5792db97ed0ee48ccc4ef8ed63abb863c53cd3c6a07bf8bfbb0a8e8d77a9ddf4": {
      "boughtAids": [
        "0861685002",
        "0865240002"
      ],
      "rcmdAids": [
        "0556539010",
        "0903924001",
        "0762846008",
        "0881111001",
        "0867969003",
        "0324963052",
        "0895002002",
        "0850244003",
        "0907409001",
        "0873132017",
        "0918522001",
        "0852174001"
      ]
    },
    "6163f2e5c143d0b047c720c692321421cc47f248e6304f631db5bd562cae9e77": {
      "boughtAids": [
        "0857227001"
      ],
      "rcmdAids": [
        "0871527003",
        "0832331003",
        "0865202002",
        "0867969002",
        "0800691007",
        "0650534001",
        "0691855012",
        "0909014001",
        "0806225002",
        "0160442007",
        "0829466001",
        "0911870003"
      ]
    },
    "6de80306b5fd9c3187558d4c218e96ab6e1dff383336ef7c8a5049e39b8b45b7": {
      "boughtAids": [
        "0868405002",
        "0399136061",
        "0854663005",
        "0757303021",
        "0803727001",
        "0882882002",
        "0873764003",
        "0794321007",
        "0849886012"
      ],
      "rcmdAids": [
        "0843614014",
        "0852174001",
        "0832307003",
        "0864562005",
        "0864415002",
        "0871997001",
        "0812552002",
        "0853881001",
        "0921226004",
        "0865594003",
        "0835008011",
        "0921906001"
      ]
    },
    "a4b93bff4e8e9ef0cdf2de10a20d8042e3d0fd53573e94dc50101ff618614822": {
      "boughtAids": [
        "0898573003",
        "0706016062",
        "0706016002",
        "0878190003",
        "0893432002",
        "0916256001"
      ],
      "rcmdAids": [
        "0762846031",
        "0899122001",
        "0896152002",
        "0760084003",
        "0904584009",
        "0850244002",
        "0859619003",
        "0927336001",
        "0909370001",
        "0876857004",
        "0914441001",
        "0875580003"
      ]
    },
    "b6bf9dd8932aa1e157e99fa8373bdbd1081e46eab49c4e31a9dca8e3b8fb4876": {
      "boughtAids": [
        "0594987024"
      ],
      "rcmdAids": [
        "0797078018",
        "0864415002",
        "0851010008",
        "0883307004",
        "0892309005",
        "0736923003",
        "0751592001",
        "0895506001",
        "0778064003",
        "0842000008",
        "0863583002",
        "0863595004"
      ]
    },
    "e354f543baa0923a2fd7891513b1677b4dd64413fd058cc0a7e9f9d81b87a87c": {
      "boughtAids": [
        "0918894001",
        "0933891001",
        "0917606001",
        "0877599001"
      ],
      "rcmdAids": [
        "0905957002",
        "0729006003",
        "0873000001",
        "0867742007",
        "0751471042",
        "0808686001",
        "0768912005",
        "0918292001",
        "0879088001",
        "0903096004",
        "0751214003",
        "0723084001"
      ]
    }
  }

function getCopyArticle(){
    copyedArticle = document.querySelector("article.template").cloneNode(true);
    copyedArticle.classList.remove("template");
    return copyedArticle;
 }

function getCopyOption(){
    copylable = document.querySelector("option.template").cloneNode(true);
    copylable.classList.remove("template");
    return copylable;
}
// insert information
function changeRcmdImgs(cid){
    // dict get
    let rcmdAids = rcmd[cid]["rcmdAids"];
    let aidNames = rcmd[cid]["prodName"];

    // console.log("rcmd aids", rcmdAids)

    //html get
    rcmd_obj = document.querySelectorAll("#rcmdAids>article")

// 暂时只改图片
    for (let i = 0; i<rcmdAids.length;i++){
        imgPath = "images/"+rcmdAids[i]+".jpg"
        rcmd_obj[i].querySelector("img").src = imgPath
        rcmd_obj[i].querySelector("h2").innerHTML = aidNames[i]

    }


}


function changeBoughtImgs(cid){
    boughtStr = '<article class="style2"><span class="image"><img src="images/pic02.jpg" alt="" /></span><a href="generic.html"><h2>Lorem</h2><div class="content"><p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p></div></a></article>'
    
    let boughtAids = rcmd[cid]["boughtAids"]
    let aidNames = rcmd[cid]["prodName"]
    let lenOfBoughtItem = boughtAids.length

    boughtAidsDOM = document.querySelector("#boughtAids")

    //清除所有子元素
    while (boughtAidsDOM.firstChild) {
        boughtAidsDOM.removeChild(boughtAidsDOM.firstChild);
    }

//添加子元素
    for (let i = 0;i< lenOfBoughtItem;i++){
        boughtDOM = getCopyArticle()

        // console.log(boughtDOM)
        boughtDOM.querySelector("img").src =  "images/"+boughtAids[i]+".jpg"
        boughtDOM.querySelector("h2").innerHTML = aidNames[i]


        boughtAidsDOM.appendChild(boughtDOM)

    }

}

// 设置label
selectBar = document.querySelector("select");

lenCids = Object.keys(rcmd).length;

for (let i = 0;i <lenCids;i++){
    cid = Object.keys(rcmd)[i];
    copiedOption = getCopyOption();
    copiedOption.value = cid ;
    copiedOption.innerHTML = "User "+i;
    selectBar.appendChild(copiedOption);

}


//触发修改

selectBar.addEventListener("change", function() {
    //去掉提示项目
    hintElement = document.querySelector("option[value='hint']");
    if (!hintElement.classList.contains('dead')) {
        hintElement.classList.add('dead');
      }

  var cid = this.value;
    changeRcmdImgs(cid);
    changeBoughtImgs(cid);
});

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