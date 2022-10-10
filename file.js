
  $(document).on('click', '.addForm', function(){
    var len = $("#reciept").children().length;
    var html = `<div id=${len+1}> <input type="number" placeholder="Amount e.g. 5.99"></input>
    <label><input type="checkbox" class="sam" value='S' name="sam">S</label>
            <label> <input type="checkbox" class="andrew" value='A' name="andrew">A</label>
            <label> <input type='checkbox' class="kelvin" value='K' name='kelvin'>K</label></div>`;
    $("#reciept").append(html);
  });


  $(document).on('click', '.split', function(){
    var len = $("#reciept").children().length;
    var total = 0.0;
    var t_sam = 0.0;
    var t_andrew = 0.0;
    var t_kelvin = 0.0;
    for(let i=0; i<len; i++) {
    //    var curr =  $("#reciept").children()[i];
    if($("#reciept").children()[i].childNodes[1].value != '') {
        var amount =  parseFloat($("#reciept").children()[i].childNodes[1].value);
    }
       var sam = $("#reciept").children()[i].childNodes[3].children[0].checked;
       var andrew = $("#reciept").children()[i].childNodes[5].children[0].checked;
       var kelvin = $("#reciept").children()[i].childNodes[7].children[0].checked;

       var count = ~~(sam) + ~~(andrew) + ~~(kelvin);
       var split = amount/count;
       total += amount;
       if(sam == true) {
         t_sam += split;
       }
       if(andrew == true){
        t_andrew += split;
       }
       if(kelvin == true){
        t_kelvin += split;
       }

    }
   
var htm = `<p>Total: $${total}<br>Sam: $${t_sam}<br>Andrew: $${t_andrew}<br>Kelvin: $${t_kelvin}</p>`
$(".tasks").append(htm);

  });