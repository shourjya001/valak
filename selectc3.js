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
if(!optionExists)
{
$("#selectc2").prepend("<option value=""></option>');
}
sup = "";
$.each(res.usergroupsdata, function(index, usr) {
//s = '<tr><td>'+item.codria+'</td> <td>'+item.codspm+'</td> <td>'+item.spmname+'</td><td>"+item.lespm+'</te
sup = "<option data-username="'+usr.USERNAME +'" value="'+ usr.USERNAME+'">'+usr.NAME+'</option>'; //sp = '<option data-username='+item.USERNAME +' value='+ item.USERNAME+'>'+item.NAME+"</option>';
$('#selectc2').append(sup);
});
$('#selectc2').sort();
}
});
}
});
