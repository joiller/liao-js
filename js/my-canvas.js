function getData(r) {
    let
        data = r.data,
        num = 30;
    if (data.length>num){
        data = data.slice(data.length-num)
    }
    data = data.map(function (i) {
        return {
            date: i[0],
            open: i[1],
            close: i[2],
            high: i[3],
            low: i[4],
            vol: i[5],
            change: i[6]
        }
    });
    drawData(data)
}

function drawData(data) {
    let
        canvas = document.getElementById('stock-canvas'),
        width = canvas.width,
        height = canvas.height,
        ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,width,height);

}