function getFormValues(){
	var str = '';
	
		var personalAllowanceValue = document.getElementById("personalAllowance").value;
		var taxRateValue = document.getElementById("taxRate").value;
		var NIRateValue = document.getElementById("NIRate").value;
		var NIthresholdValue = document.getElementById("NIthreshold").value;
		var unionValue = document.getElementById("union").value;
		var pensionContributionValue = document.getElementById("pensionContribution").options.selectedIndex;
		var pensionContributionEmpValue = document.getElementById("pensionContributionEmp").options.selectedIndex;
		var christmasSavingsValue = document.getElementById("christmasSavings").value;
		var summerSavingsValue = document.getElementById("summerSavings").value;
		var otherDeductionValue = document.getElementById("otherDeduction").value;
		var otherDeductionNameValue = document.getElementById("otherDeductionName").value;
		var otherDeduction2Value = document.getElementById("otherDeduction2").value;
		var otherDeduction2NameValue = document.getElementById("otherDeduction2Name").value;
		var otherDeduction3Value = document.getElementById("otherDeduction3").value;
		var otherDeduction3NameValue = document.getElementById("otherDeduction3Name").value;
		var pensionBeforeTax = document.getElementById("pensionBeforeTax").checked;
		var companyLoanValue = document.getElementById("companyLoan").value;
		var studentLoan_thValue = document.getElementById("studentLoan_th").value;
		var studLoanRateValue = document.getElementById("studLoanRate").value
		var studentLoanCheckValue = document.getElementById("studentLoanCheck").checked;
		
		var higherTaxRate = document.getElementById("higherTaxRate").value;
		var higherTaxThreshold = document.getElementById("higherTaxThreshold").value;
		var additionalTaxRate = document.getElementById("additionalTaxRate").value;
		var additionalTaxThreshold = document.getElementById("additionalTaxThreshold").value;
		
		var addNIRate = document.getElementById("addNIRate").value;
		var addNIThreshold = document.getElementById("addNIThreshold").value;
		
		str += 'personalAllowance='+personalAllowanceValue+'&'+'taxRate='+taxRateValue+'&'+'NIRate='+NIRateValue+'&'+'NIthreshold='+NIthresholdValue+'&'+'union='+unionValue+'&'+'pensionContribution='+pensionContributionValue+'&'+'christmasSavings='+christmasSavingsValue+'&'+'otherDeduction='+otherDeductionValue+'&'+'pensionBeforeTax='+pensionBeforeTax+'&'+'otherDeductionName='+otherDeductionNameValue+'&'+'pensionContributionEmp='+pensionContributionEmpValue+'&'+'companyLoan='+companyLoanValue+'&'+'studentLoan_th='+studentLoan_thValue+'&'+'studLoanRate='+studLoanRateValue+'&'+'studentLoanCheck='+studentLoanCheckValue+'&'+'summerSavings='+summerSavingsValue+'&';                			
		str += 'otherDeduction2='+otherDeduction2Value+'&'+'otherDeduction2Name='+otherDeduction2NameValue+'&';
		str += 'otherDeduction3='+otherDeduction3Value+'&'+'otherDeduction3Name='+otherDeduction3NameValue+'&';
		str += 'higherTaxRate='+higherTaxRate+'&'+'higherTaxThreshold='+higherTaxThreshold+'&';
		str += 'additionalTaxRate='+additionalTaxRate+'&'+'additionalTaxThreshold='+additionalTaxThreshold+'&';
		str += 'addNIRate='+addNIRate+'&'+'addNIThreshold='+addNIThreshold+'&';
	return str;
	
}

function loadindexes(){
	
	var personalAllowance = document.getElementById("personalAllowance");
	var taxRate = document.getElementById("taxRate");
	var NIRate = document.getElementById("NIRate");
	var NIthreshold = document.getElementById("NIthreshold");
	var union = document.getElementById("union");
	var pensionContribution = document.getElementById("pensionContribution");
	var	pensionContributionEmp = document.getElementById("pensionContributionEmp");
	var christmasSavings = document.getElementById("christmasSavings");
	var otherDeduction = document.getElementById("otherDeduction");
	var otherDeductionName = document.getElementById("otherDeductionName");
	var otherDeduction2 = document.getElementById("otherDeduction2");
	var otherDeduction2Name = document.getElementById("otherDeduction2Name");
	var otherDeduction3 = document.getElementById("otherDeduction3");
	var otherDeduction3Name = document.getElementById("otherDeduction3Name");
	var pensionBeforeTax = document.getElementById("pensionBeforeTax");
	var companyLoan = document.getElementById("companyLoan");
	var studentLoan_th = document.getElementById("studentLoan_th");
	var studLoanRate = document.getElementById("studLoanRate");
	var studentLoanCheck = document.getElementById("studentLoanCheck");
	var summerSavings = document.getElementById("summerSavings");
	
	var higherTaxRate = document.getElementById("higherTaxRate");
	var higherTaxThreshold = document.getElementById("higherTaxThreshold");
	var additionalTaxRate = document.getElementById("additionalTaxRate");
	var additionalTaxThreshold = document.getElementById("additionalTaxThreshold");
	var addNIRate = document.getElementById("addNIRate");
	var addNIThreshold = document.getElementById("addNIThreshold");
	
	
	
if (XMLHttpRequest)
	{
		var xmlhttp = new XMLHttpRequest();
	}
		else if (ActiveXObject)
	{
		var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
else {return false;}
xmlhttp.onreadystatechange = function(){
	if (this.readyState == 4 && this.status ==200)
	{
		var response = JSON.parse(this.responseText);
		personalAllowance.value = response.personalAllowance;
		pensionContribution.options.selectedIndex = response.pensionContribution;
		pensionContributionEmp.options.selectedIndex = response.pensionContributionEmp;
		taxRate.value = response.taxRate;
		
		if(response.pensionBeforeTax == "true")
			{pensionBeforeTax.setAttribute("checked", "checked");}
		else if (response.pensionBeforeTax == "false")
			{pensionBeforeTax.removeAttribute("checked");}
		else{alert('Something went wrong with pension checkbox');}
		
		if(response.studentLoanCheck == "true")
			{studentLoanCheck.setAttribute("checked", "checked");}
		else if (response.studentLoanCheck == "false")
			{studentLoanCheck.removeAttribute("checked");}
		else{alert('Something went wrong with student checkbox');}
		
		NIRate.value = response.NIRate;
		NIthreshold.value = response.NIthreshold;
		union.value = response.union;
		christmasSavings.value = response.christmasSavings;
		summerSavings.value = response.summerSavings;
		companyLoan.value = response.companyLoan;
		studentLoan_th.value = response.studentLoan_th;
		studLoanRate.value = response.studLoanRate;
		otherDeduction.value = response.otherDeduction;
		otherDeductionName.value = response.otherDeductionName;
		otherDeduction2.value = response.otherDeduction2;
		otherDeduction2Name.value = response.otherDeduction2Name;
		otherDeduction3.value = response.otherDeduction3;
		otherDeduction3Name.value = response.otherDeduction3Name;
		
		higherTaxRate.value = response.higherTaxRate;
		higherTaxThreshold.value = response.higherTaxThreshold;
		additionalTaxRate.value = response.additionalTaxRate;
		additionalTaxThreshold.value = response.additionalTaxThreshold;
		addNIRate.value = response.addNIRate;
		addNIThreshold.value = response.addNIThreshold;
	}
	showHideDivs();
};
xmlhttp.open("POST", "javascript/ajax/deductionssettingsload.php", true);
xmlhttp.send();
}

function ajaxPost(){
	str = getFormValues();
	if (XMLHttpRequest)
		{
			var request = new XMLHttpRequest();
		}
			else if (ActiveXObject)
		{
			var request = new ActiveXObject("Microsoft.XMLHTTP");
		}
	else {return false;}
	
	var url = "javascript/ajax/deductionssettingssubmit.php";
	
	request.open("POST", url, true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.onreadystatechange = function(){
		if(request.readyState ==4 && request.status ==200){
			
			var response = JSON.parse(this.responseText);
			var submitSuccess = document.getElementById("submitSuccessDeductions");
			errorsArrayLength = Object.keys(response.errors).length;
			submitSuccess.innerHTML = " ";
			if (errorsArrayLength>0){
				submitSuccess.innerHTML = "";
				for (i=0; i<errorsArrayLength; i++)
				{
					submitSuccess.innerHTML += response.errors[i]+'<br>';
					submitSuccess.removeAttribute("class");
					submitSuccess.setAttribute("class", "col-sm-10 col-xs-10 responseDiv errorStyle");
				}
			}	
			else{
					submitSuccess.setAttribute("class", "col-sm-10 col-xs-10 responseDiv");
					submitSuccess.innerHTML = 'Deductions Updated!';
					setTimeout(function(){submitSuccess.innerHTML=" ";},1500);	
			}
		}
	}
	request.send(str);
	document.getElementById("submitSuccessDeductions").setAttribute("class", "col-sm-10 col-xs-10 responseDiv");
	document.getElementById("submitSuccessDeductions").innerHTML = "Updating...";
	
}


function showHideDivs()
{
	var hideStudentLoan = document.getElementById("hideStudentLoan");
	var studentLoanCheck = document.getElementById("studentLoanCheck").checked;
	
	if (studentLoanCheck == true)
	{
		hideStudentLoan.style.visibility = "hidden";
	}
	else if(studentLoanCheck == false){
		hideStudentLoan.style.visibility = "visible";
	}
	else{alert("something went wrong");}
}

function start (){
	
	var submitButton = document.getElementById("buttonSubmit");
	submitButton.onclick = ajaxPost; //jei ne
	
	loadindexes();
	
	var studentLoanCheck = document.getElementById("studentLoanCheck");
	studentLoanCheck.onchange = showHideDivs;
		
}
document.addEventListener("DOMContentLoaded",start,false);