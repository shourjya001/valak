function commonsearch (searchType, searchString, searchParam, stype, check) {
$.ajax({
type: 'POST',
url: "dbe_cfl_user_accessTransferSave.php",
data: ("searchType":searchType, "searchString": searchString ),
dataType: "json",
success: function(resultData) {
if (resultData != false) {
if(check == 0) populateSearchOptions (stype, resultData);
if(stype=='sgr') {
commonsearch('fetchLEBasedonSGR', resultData[0]['id'], searchParam, 'le',0);
}else if(stype =='le') {
if($("#selectsgr_code option:selected").val() != '' &&("#selectle_code option:selected").val() != ''){ checkForCreditFiles($("#selectsgr_code option: selected").val(),$("#selectle_code option:selected").val()); }else if($("#txtle_code").val() != '" || $("#txtle_name").val() != ''){
sgrdata = {};
sgrdata['sgr'] = ('id': resultData[0].sgr_code, 'name': resultData[0].sgr_name);
populateSearchOptions('sgr',sgrdata);
// LE dropdown
ledata = {};
ledata['le']=['id': resultData[0].le_code, 'name': resultData[0].le_name); populateSearchOptions('le', ledata);
checkForCreditFiles($("#selectsgr_code option: selected").val(), $("#selectle_code option:selected").val());
}else {
if(check == 0) {
populateSearchOptions('sgr', resultData);
commonsearch('fetchLegalEntityBasedonID', resultData[0]['id'], searchParam, 'le', 1);
}
}
}
$('#loading_wrap').fadeOut('slow');
}else{
if(check == 0) {
alert("No Matching Results Found...! or You are not authorized to see this SGR/LE,please contact the Banking Administrator-"
}
$('#loading_wrap').fadeOut('slow');
if(stype =='le') {
if(check == 1){
$("#codria_span").html('');
alert("No references are available for this LE..1");
}else{
emptydropdown (stype)
}else if(stype =='sgr')
{
var rtype='le';
emptydropdown (stype);
emptydropdown(rtype);
}
}}});