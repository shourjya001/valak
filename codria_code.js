$("#codria_code").change(function(){
$("#codria_span").empty();
cval $("#codria_code").val();
if(cval !='' cval!= undefined && cval !=0)(
// fetch details based on codria
$.ajax({
type: 'POST',
url: "dbe_cfl_user_accessTransferSave.php",
data:{
"searchType": 'fetchCodriaBasedDetails',
"codria": $("#codria_code").val(),
},
dataType: "json",
success: function(res) {
$('#loading_wrap').hide();
if(res.id == 'None') {
$(".codria_class").hide();
alert("Invalid reference number..1");
}else if(res.id !== 'None') {
// SGR dropdown
sgrdata = {};
sgrdata['sgr']=['id': res[0].sgr_code, 'name': res[0].sgr_name};
populateSearchOptions('sgr', sgrdata);
// LE dropdown
ledata = {};
ledata['le']={id:res[0].le_code, 'name': res[0].le_naме};
populateSearchOptions('le', ledata);
// codria check boxes
$('#codria span').append('<input type="radio" name="codria" style="display:inline; padding-right:5px; width: 20%" id="codria'+res[0].CODRIA+'"value="'+res[0].CODRIA+'" checked/>'+res[0].CODRIA);
$(".codria_class").show();
// Limits details
fetchUserDropdownDetails('codria', 'le');
}
}});
}else{
$('#loading wrap').fadeOut('slow');
alert("Please enter valid reference number..1")
});
$("#sgrspan").click(function(){
$("#sgrtable").toggle();
});

