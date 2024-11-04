function fetchUserDropdownDetails(ctype, dtype){
if(ctype =='codria'){
dtajson = {
"searchType": 'fetchLegalEntityBasedonID',
"sub_group_code": $("#selectsgr_code option: selected").val(),
"codria": $('input[name="codria"]:checked').val(),
};
}
if(dtype == 'le')
dtajson = {
"searchType": 'fetchLimitsBasedonCodria',
"sub_group_code": $("#selectsgr_code option:selected").val(),
"le_code": $("#selectle_code option:selected").val(),
"codria": $('input[name="codria"]:checked').val(),
}
},
$.ajax({
type: 'POST',
url: "dbe_cfl_user_accessTransferSave.php",
data: dtajson,
dataType: "json",
success: function(res) {
$('#loading_wrap' ).show();
if(res != false)(
getUserDropdownDetails(res);
}else{
console.log(res);
$('#loading_wrap').fadeOut('slow');
}});}