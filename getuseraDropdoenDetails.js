function gettiserDropdownDetails(res)
$("#sgrtable").show();
$("#sgrspan").show();
$("BodyText").show();
$("#userassigntr").show();
$("#SobnitCFDetailsTO").show();
$("#fetchCFDetailsTD").hide();
strdata ="";
s = "";
$.each(res, function(index, item) { 
s="<tr><td>"+item.codria+'</td> <td>'+item.codspm</td> <td>'+item.spwname+"</td><td>'+item.lespms</td>
<td>"+iten.cfstatus"</td>
<td>"+item.oct</td> <td>"+item.risk"</td> <td>"+item.sub+*</td> <td>'+item.expdater"</td></tr>
strdata = strdata.concat(s);
// calling one more ajax
});
$.ajax({
type: "POST",
url: "dbe_cfl user_accessTransferSave.php",
"searchType": 'fetchUsersdetails',
"sub group code":$("#selectsgr_code option:selected").val(),
"codria":$("input[name="codria"]:checked').val(),
}

datatype: "json",
success: function(result) {
$('#selectc2").empty();
var optionExists = ($('#selectc2 option[values""]').length > 0)
if(!optionExists)
{
$('#selectc2').prepend('<option value=""></option>'
} $.each(result.userset, function(index, item) {
sp= '<option data-username="'+item.USERNAME +'" value="'+ item. USERNAME+'">'+item.NAME+'</option>';
$('#selectc2').append(sp);
});
$('#selectc3').empty();
$('#selectc3').append('<option>None</option>');
sup = '<option data-mapping="'+item.CODUSERGRP +'" value="'+ item.CODUSERGRP+'">'+item.CODUSERGRPNAME+'</option>';
$.each(result.ugset, function(index, item) {
$('#selectc3').append(sup);
});
}
});
$('#sgrtabledata').html(strdata);
}