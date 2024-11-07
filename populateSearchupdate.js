function populateSearchOptions (stype, resultData) {

//populateSearchOptions("")

alert("populateSearchOptions_1");

var selectCode = document.createElement("SELECT");

alert("populateSearchOptions_2");

selectCode. id = "select" + stype + " code";

selectCode.onchange = new Function("selectdropdown('" + stype + "', 'code')");

var selectName = document.createElement("SELECT");

selectName.id = "select" + stype + "name";

selectName.onchange = new Function ("selectdropdown('" + stype + "', 'name')");

// Replace existing elements

var txtCode = document.all["txt" + stype + "_code"];

var txtName = document.all["txt" + stype + "name"];

if (txtCode && txtName) {

txtCode.parentElement.replaceChild(selectCode, txtCode);

txtName.parentElement.replaceChild(selectName, txtName);

}

// Populate options

for (var index = 0; index < resultData.length; index++) {

var item = resultData resultData [index];

var optionCode = document.createElement("OPTION");

var optionName = document.createElement("OPTION");
optionCode.value = item.id;

optionCode.text = item.id;

optionName.text = item.name || item.id; // Use name if available, otherwise use i

optionName.value = item.name;

selectCode.options.add(optionCode);


selectName.options.add(optionName);


}

var appendtotype = (stype === 'sgr') ? 'subgroupname_id': 'legroupname_id';
var appendToElement = document.all[appendtotype];

}