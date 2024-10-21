$ (document).ready(function() {
$("#loading_wrap").fadeOut("slow");
$("form").submit(function(e){
e.preventDefault();
});
$("#selectc3").change(function(){
mapstr2 = $("#selectc3 option:selected").val();
subgroupmapstr2 = $("#selectc2 option:selected").val();
if(mapstr2 !='' && subgroupmapstr2 !='None'){
}else{
$.ajax({
type: 'POST',
url: "dbe_cf1_user_accessTransferSave.php",
data:{
"searchType": 'fetchUsersdetails',
"usergroup": mapstr2,
"name":subgroupmapstr2,
"codria":$('input[name="codria"):checked]).val(),
"sub_group_code": $("#selectsgr_code option:selected").val(),
dataType: "json",
success: function(res){
$('#selectc2').empty();
var optionExists=($('#selectc2 option[value=""]').length > 0);
if(loptionExists)
{