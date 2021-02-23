
//
function gophang() {
    var a= document.getElementById('slcolumn').value;
    var b= parseInt(document.getElementById('cellstart').value);
    var c= parseInt(document.getElementById('cellend').value);
    var gophang= {"abc":[a, b, c]}
    var count= '0';
    var dem= count+ localStorage.getItem('i');
    localStorage.setItem('i', parseInt(dem)+1);
    localStorage.setItem(localStorage.getItem('i'), JSON.stringify(gophang));
    if(b< c) {
        var khoangcach= c- b+ 1;
        for(var i= 0; i< 10; i++) {
            var gps= document.getElementsByClassName(a)[b-1];
            gps.setAttribute('rowspan', khoangcach);
        }
        for(var i= 0; i< khoangcach- 1; i++) {
            document.getElementsByClassName(a)[b].remove();
        }
    }
    if(b> c) {
        var khoangcach= b- c+ 1;
        for(var i= 0; i< 10; i++) {
            var gps= document.getElementsByClassName(a)[c-1];
            gps.setAttribute('rowspan', khoangcach);
        }
        
        for(var i= 0; i< khoangcach-1; i++) {
            document.getElementsByClassName(a)[c].remove();
        }
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
}
function TKB() {
    if(localStorage.getItem('TKB')!== null) {
        var TKB= JSON.parse(localStorage.getItem('TKB'));
        for(var i= 0; i< 6; i++) {
            var a= i+2;
            var thu= "thu"+ a.toString();
            for(var j= 0; j< 10; j++) {
                var b= j+1;
                document.getElementsByClassName(thu)[j].firstElementChild.value= TKB.TKB[i][j];
            }
        }
    }
    if(parseInt(localStorage.getItem('i'))> 0) {
        for(var i= 1; i<= parseInt(localStorage.getItem('i')); i++) {
            var x= JSON.parse(localStorage.getItem(i.toString())).abc[0];
            var y= JSON.parse(localStorage.getItem(i.toString())).abc[1];
            var z= JSON.parse(localStorage.getItem(i.toString())).abc[2];
            gophang1(x, y, z);
        }
    }
}
function gophang1(slcolumn, cellstart, cellend) {
    var a= slcolumn;
    var b= cellstart;
    var c= cellend;
    if(b< c) {
        var khoangcach= c- b+ 1;
        for(var i= 0; i< 10; i++) {
            var gps= document.getElementsByClassName(a)[b-1];
            gps.setAttribute('rowspan', khoangcach);
        }
        for(var i= 0; i< khoangcach- 1; i++) {
            document.getElementsByClassName(a)[b].remove();
        }
    }
    if(b> c) {
        var khoangcach= b- c+ 1;
        for(var i= 0; i< 10; i++) {
            var gps= document.getElementsByClassName(a)[c-1];
            gps.setAttribute('rowspan', khoangcach);
        }
        
        for(var i= 0; i< khoangcach-1; i++) {
            document.getElementsByClassName(a)[c].remove();
        }
    }
    
}
