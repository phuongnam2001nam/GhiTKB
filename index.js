
function gophang(slcolumn, cellstart, cellend) {
    if(slcolumn!== undefined) {
        if(slcolumn=== null) {
            var a= "thu2";
            var b= 1;
            var c= 1;
        }
        else {
            var a= slcolumn;
            var b= cellstart;
            var c= cellend;
        }
    }
    if(slcolumn=== undefined) {
        var a= document.getElementById('slcolumn').value;
        var b= parseInt(document.getElementById('cellstart').value);
        var c= parseInt(document.getElementById('cellend').value);
        var gophang= {"abc":[a, b, c]}
        var count= '0';
        var dem= count+ localStorage.getItem('i');
        localStorage.setItem('i', parseInt(dem)+1);
        localStorage.setItem(localStorage.getItem('i'), JSON.stringify(gophang));
    }
    var khoangcach= Math.abs(c- b+ 1);
    if(b< c) {
        var bc= b;
    }
    else {
        var bc= c;
    }
    document.getElementsByClassName(a)[bc-1].setAttribute('rowspan', khoangcach.toString());
    var bcd= bc;
    for(var i= 0; i< khoangcach- 1; i++) {
        document.getElementsByClassName(a)[bcd].style.display= 'none';
        bcd++;
    }
}
//
function openMenu() {
    var menu= document.getElementById('menu').style;
    if(menu.display== 'none') {
        menu.display= 'block';
    }
    else {
        menu.display= 'none';
    }
}
//
function openGophang() {
    var gophang= document.getElementById('gophang').style;
    if(gophang.display== 'none') {
        gophang.display= 'inline';
    }
    else {
        gophang.display= 'none';
    }
}
//      
function saveTKB() {
    var thu2= [], thu3= [], thu4= [], thu5= [], thu6= [], thu7= [];
    for(var i= 0; i< 10; i++) {
        thu2[i]= document.getElementsByClassName('thu2')[i].firstElementChild.value;
        thu3[i]= document.getElementsByClassName('thu3')[i].firstElementChild.value;
        thu4[i]= document.getElementsByClassName('thu4')[i].firstElementChild.value;
        thu5[i]= document.getElementsByClassName('thu5')[i].firstElementChild.value;
        thu6[i]= document.getElementsByClassName('thu6')[i].firstElementChild.value;
        thu7[i]= document.getElementsByClassName('thu7')[i].firstElementChild.value;
    }
    var TKB= {
        "TKB": [
            thu2, thu3, thu4, thu5, thu6, thu7
        ]
    }
    localStorage.setItem('TKB', JSON.stringify(TKB));
    window.location.reload();
}
function loadTKB(bien) {
    if(localStorage.getItem('TKB')!== null) {
        var TKB= JSON.parse(localStorage.getItem('TKB'));
        for(var i= 0; i< 6; i++) {
            var a= i+2;
            var thu= "thu"+ a.toString();
            for(var j= 0; j< 10; j++) {
                if(bien== '1') {
                    document.getElementsByClassName(thu)[j].firstElementChild.remove();
                    document.getElementsByClassName(thu)[j].innerHTML= TKB.TKB[i][j];
                }
                if(bien== '0') {
                    document.getElementsByClassName(thu)[j].innerHTML= "";
                    document.getElementsByClassName(thu)[j].appendChild(document.createElement('textarea'));
                    document.getElementsByClassName(thu)[j].firstChild.value= TKB.TKB[i][j];
                }
                console.log(document.getElementsByClassName(thu)[j].value, TKB.TKB[i][j]);
            }
        }
    }
    if(parseInt(localStorage.getItem('i'))> 0) {
        for(var i= 1; i<= parseInt(localStorage.getItem('i')); i++) {
            var x= JSON.parse(localStorage.getItem(i.toString())).abc[0];
            var y= JSON.parse(localStorage.getItem(i.toString())).abc[1];
            var z= JSON.parse(localStorage.getItem(i.toString())).abc[2];
            console.log(x, y, z, localStorage.getItem('i'));
            gophang(x, y, z);
        }
    }
}
function clearTKB() {
    confirm('Bạn sẽ mất vĩnh viễn thời khoa biểu hiện tại.', window.localStorage.clear());
    window.location.reload();
}


