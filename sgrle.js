function sgrLeReset(val){ $('#loading wap').show();
if(val !="")
$('#CF10').trigger("reset");
setTimeout(function () { location.reload(true);
}, 1000);
$('#loading wrap').fadeOut('slow');
}
function restparams(val)(
var inputfield = $('<input id="txt'+val+'_code" name="txt'+val+'_code" onchange="inputfieldsearch(this.id)"/>');
var inputfield2 = $('<input id="txt'+val+'_name" name="txt'+val+ '_name" onchange="inputfieldsearch(this.id)"/>');

$("#select"+val+"_code").replaceWith (inputfield); 
$("#select"+val+"_name").replaceWith (inputfield2);

$("#closeComment").val('');
}