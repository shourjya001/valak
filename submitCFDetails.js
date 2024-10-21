$("#SubmitCFDetailsTD").on ('mousedown', function(e){
$('#loading_wrap').show();
if($("#closeComment").val() == ''){ alert("Please enter comments..1");
$('#loading_wrap').hide();
}else if(($("#closeComment").val() != '') && $('#selectc3 option:selected').val() == undefined || $('#selectc3 option:selected').val() == 'None') {
alert("Please select user/usergroup to transfer the CAA/PAA..!"); $('#loading_wrap').hide();
}else if($("#closeComment").val() != '' && $('#selectc3 option:selected').val() != undefined $("#&& $('#selectc3 option: selected').val() != 'None') {
SubmitCFDetailsTD"). keydown (function (e) { if(e. which == 13) e. preventDefault(); }); if($('#selectc3 option:selected').val() != '' && $('#selectc3 option:selected').val() != 'None')
$('#loading_wrap').show();
var closcomment = $("#closeComment").val();
$.ajax({
type: 'POST',
url: "dbe_cfl_user_accessTransferSave.php",
data: {
"searchType": 'saveUserAccessTransferComment',
"sub_group_code": $("#selectsgr_code option:selected").val(),
"le_code": $("#selectle_code option: selected").val(),
"CF_Level": $("input[name=codType]:checked").val(),
"codUsr": $("#codUsr").val(),
"codria": $("input[name=codria]:checked").val(),
"usergroup": $('#selectc3 option: selected').val(),
"user": $('#selectc2 option: selected').val(),
"closeComment": $("#closeComment").val()
},
dataType: "json",
success: function(data) {
$('#loading_wrap').show();
if(data.id == 'success'){
$("#htmldiv").html("Successfully Updated..1").attr('class', 'tddiv greendiv');
alert("Successfully updated..1");
$('#CF10').trigger("reset");
setTimeout(function () {
location.reload(true);
}, 1000);
}else{
$("#htmldiv").html("Failed to update file tranfer. Please check with Admin Team...1").
attr('class', 'tddiv reddiv');
alert("Failed to update file tranfer. Please check with Admin Team...1");
$('#loading_wrap').fadeOut('slow');
}
});
$('#loading_wrap').fadeOut('slow'); }
}
});
});