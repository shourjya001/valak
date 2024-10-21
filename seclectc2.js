$("#selectc2").change (function(){
obj_select3 = eval("document.CF10.selectc3");
mapstr = $("#selectc2 option:selected").val();
selectmapstr = $("#selectc3 option:selected").val();
if(mapstr != ''){
$.ajax({
type: 'POST',
url: "dbe_cfl_user_accessTransferSave.php",
data: {
"searchType": 'fetchUsersdetails',
"name": mapstr,
"codria": $('input[name="codria"]:checked').val(), 
"sub_group_code": $("#selectsgr_code option:selected").val(),
},
dataType: "json",
success: function(res) {
$('#selectc3').empty();
if (mapstr =='None') {
$('#selectc3').append('<option>None</option>');
} var optionExists = ($('#selectc2 option [value="None"]').length > 0);
if(!optionExists) {
{
$('#selectc2').prepend('<option value="None">None</option>');
$('#selectc2 option [value=""]').remove();
}
$.each(res.usersdata, function(index, usr) {
sup = '<option data-mapping="'+usr.USERGRP +'" value="'+ usr.USERGRP+'">'+usr.GRPNAME+'</option>';
$('#selectc3').append(sup);
});
//$('#selectc3').sort();
}
});
}
});
