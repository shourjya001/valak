function setCF_GroupLevel(grouptype)
$('#loading_wrap').show();
restparams('le');
$('#loading_wrap').fadeOut('slow');
}
function inputfieldsearch(param){
$("#loading_wrap").show();
if(param == 'txtsgr_code' || param == 'txtsgr_name'){ 
var searchString = searchType = searchParam = '';
var stype = 'sgr';
if(param == 'txtsgr_code'){
searchType = 'fetchSubGroupBasedonID';
searchString = $("#txtsgr_code").val(); } 
else if(param == 'txtsgr_name'){
searchType = 'fetchSubGroupBasedonName';
searchString = $("#txtsgr_name").val();
}
if(searchType != '' && searchString !=''){
commonsearch(searchType, searchString, searchParam, stype, 0);
}else{
$('#loading_wrap').fadeOut('slow');
} }else if(param == 'txtle_code' || param == 'txtle_name'){
var searchString = searchType = searchParam = '';
var stype = 'le';
if(param == 'txtle_code'){
searchType = 'fetchLegalEntityBasedon ID'; 
searchString = $("#txtle_code").val();
}else if(param == 'txtle_name'){
searchType = 'fetchLegalEntityBasedonName'; 
searchString = $("#txtle_name").val();
}
if(searchType != '" && searchString !=''){
commonsearch(searchType, searchString, searchParam, stype, 0); // changed for le
}else{
$('#loading_wrap').fadeOut('slow');
}