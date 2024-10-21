$("#fetchCFDetails").on('mousedown', function(e) {
// to fetch CF details based on codria
if ($('input[name="codria"]:checked').val() ='" && $('input[name="codria"]:checked').val() I= undefined) {
$('#loading_wrap').show();
if($('#codria option:selected').val)( יין(
$('#sgrtable').hide();
codval $('input[name="codria"]:checked').val();
// remove other codria's to remove conflict of user to select other codria.
$('input[name="codria"]').each(function() {
if($(this).prop("checked") == false) (
$('label [for='+$(this).val()+']').remove(); $(this).remove();
}
});
// fetch details of codria from "TLINERIA" table fetchUserDropdownDetails('codria', 'le');
}else if($('input[name="codria"]:checked').val() == '' || $('input[name="codria"]:checked').val() == undefined)
'#loading_wrap').fadeOut('slow');
}
alert("Please select Reference Number/Codria");
});