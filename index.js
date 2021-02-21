
function gophang() {
    var a= document.getElementById('slcolumn').value;
    var b= parseInt(document.getElementById('cellstart').value);
    var c= parseInt(document.getElementById('cellend').value);
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