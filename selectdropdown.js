function selectdropdown(s1,s2){
var s3 = '';
if(s2 == 'code') {
$3= 'name';
}else if(s2== 'name'){
s3 = 'code';
}
$('#loading_wrap').show();
var grpid= $("#select"+s1+"_"+s2+" option:selected").val(); document.getElementById("select"+s1+"_"+s3).value = grpid;
//update other dropdown
if(s1=='sgr') {
    commonsearch('fetchLEBasedonSGR', grpid, searchParam, 'le',0);
}else if(s1 =='le') {
rtype ='sgr';
inputfieldsearch("select"+s1+"_"+s3); // updating other dropdown
commonsearch('fetchLegalEntityBasedonID', grpid, searchParam, 'le', 1); // assuming this woll work
$('#loading_wrap').fadeOut('slow');
}