function emptydropdown(rtype){
if(document.getElementById("txt"+rtype+"_code")){
fieldtype ='txt';
}else{
fieldtype = 'select';
}
$("#"+fieldtype+rtype+"_code option").remove();
$("#"+fieldtype+rtype+"_code").append($('<option></option>').attr('value', 'None').text('None'));
 $( "#"+fieldtype+rtype+"_name option").remove(); //replaceWith(selectdropdown2);
 $("#"+fieldtype+rtype+"_name").append($('<option></option>').attr('value', 'None').text('None'));
function populateSearchOptions (stype, resultData)
{
$("# codria_code").val(''); I
var selectdropdown = $('<select id="select'+stype+'_code" onchange="selectdropdown(\''+stype+'\', \'code\');"/>'); 
var selectdropdown2 = $('<select id="select'+stype+'_name" onchange="selectdropdown(\''+stype+'\', \'name\');"/>');
if(document.getElementById("txt"+stype+"_code")){
$("#txt"+stype+"_code").replaceWith (selectdropdown); 
$("#txt"+stype+"_name").replaceWith (selectdropdown2);
}
if (document.getElementById("select"+stype+"_code")){
$("#select"+stype+"_code").replaceWith(selectdropdown);
$("#select"+stype+"_name").replaceWith (selectdropdown2);
}
$(".sgr_reset").css('display', 'block'); 
$.each(resultData, function(index, item) {
selectdropdown.append($('<option></option>').attr('value',
item.id).text(item.id));
});
if(stype =='sgr'){
appendtotype = 'subgroupname_id';
}else if(stype == 'le'){ 
appendtotype = 'legroupname_id';
}
selectdropdown.appendTo(appendtotype); 
selectdropdown2.appendTo(appendtotype);
}
function checkForCreditFiles(codspm='',codle=''){
$.ajax({
type: 'POST',
url: "dbe_cf1_user_accessTransferSave.php",
data: {"searchType": 'fetchCFdetails","codspm":codspm,"codle":codle),
dataType: "json",
success: function(response) {
if(response.id == 'None') { //$("input[name=codtype_cdt]").prop('checked', false).prop('disabled', true); //$('#oldcurrency').html('');
 $(".codria_class").hide(); alert("No credit files available..!");
} else if(response.id !== 'None') {
$.each(response, function(index, item)(
$('#codria_span').append('<input type="radio" name="codria" style="display:inline; padding-right:5px; width: 20%" id="codria'+item.codri+'" value="'+item.codria+'" /><label for="'+item.codria+'">'+item.codria+'</label>'); //$('#codria_span').append('<input type="radio" name="codria" style="display:inline; padding-right:5px; width:2
$(".codria_class").show()
});
}}});}
function goToHomePage(){
alert("te");
location.reload(true);
}
