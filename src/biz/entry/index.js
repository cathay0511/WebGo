var main = function () {
    var c = document.getElementById("myCanvas");
    var cxt = c.getContext("2d");
    cxt.moveTo(10,10);
    cxt.lineTo(150,50);
    cxt.lineTo(10,50);
    cxt.stroke();

    if (localStorage.pagecount)
    {
        localStorage.pagecount = Number(localStorage.pagecount) + 1;
    }
    else
    {
        localStorage.pagecount=1;
    }
    document.write("Visits "+ localStorage.pagecount + " time(s).");

    if (sessionStorage.pagecount)
    {
        sessionStorage.pagecount = Number(sessionStorage.pagecount) + 1;
    }
    else
    {
        sessionStorage.pagecount=1;
    }
    document.write("Visits " + sessionStorage.pagecount + " time(s) this session.");


    /**
     * web worker
     */
    if(typeof(w)=="undefined")
    {
        w = new Worker("/demo/src/biz/thirdparty/demo_workers.js");
        w.onmessage = function(event){
            document.getElementById("worker").innerHTML = 'worker is working...' + event.data;
        };
    }
}

main();