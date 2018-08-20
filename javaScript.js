let timeSinceEpochOriginal = 1491004800000;
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const createFirstColumnElements = (taxPeriodNumber, timeSinceEpoch) =>{
	//weekStart = Number(weekStartArray[taxPeriodNumber]);
	weekStart = 0;
	let taxPeriodStart = (taxPeriodNumber-1)*7+weekStart;

	taxPeriodNumber = Number(taxPeriodNumber);

	let timeSinceEpochInput = document.getElementById("timeSinceEpochInput");
	let timeSinceEpochInputValue = 1491004800000;
	timeSinceEpochInputValue = Number(timeSinceEpochInputValue);
	taxPeriodNumberN = Number(taxPeriodNumber); // pridedame weekstart
	timeSinceEpochInputValue += 604800000*(taxPeriodNumberN-1)+weekStart*86400000;
	timeSinceEpochInput.setAttribute("value",timeSinceEpochInputValue);

	timeSinceEpoch = timeSinceEpochOriginal + 604800000*(taxPeriodNumber-1)+weekStart*86400000

	//depending on a year, caption has to be changed
	if(taxPeriodNumber<=52 && taxPeriodNumber>0 ){
		tableCaptionTitle.innerHTML = "2017/2018 Tax Period no. " + taxPeriodNumber;
	}	else if (taxPeriodNumber<=104 && taxPeriodNumber>52 ){
		taxPeriodNumberNew = taxPeriodNumber - 52;
		if (taxPeriodNumberNew<10){taxPeriodNumberNew="0"+taxPeriodNumberNew;}
		tableCaptionTitle.innerHTML = "2018/2019 Tax Period no. " + taxPeriodNumberNew;
	}	else if (taxPeriodNumber<=156 && taxPeriodNumber>104 ){
		taxPeriodNumberNew = taxPeriodNumber - 104;
		if (taxPeriodNumberNew<10){taxPeriodNumberNew="0"+taxPeriodNumberNew;}
		tableCaptionTitle.innerHTML = "2019/2020 Tax Period no. " + taxPeriodNumberNew;
	}	else if (taxPeriodNumber<=208 && taxPeriodNumber>156 ){
		taxPeriodNumberNew = taxPeriodNumber - 156;
		if (taxPeriodNumberNew<10){taxPeriodNumberNew="0"+taxPeriodNumberNew;}
		tableCaptionTitle.innerHTML = "2020/2021 Tax Period no. " + taxPeriodNumberNew;
	}	else {
		alert("Error!");
	}

	for (f=0;f<7;f++)	{
		//creating first column
		let tableRow = document.getElementById("tableRow"+f);
		let tableData = document.createElement("div");
		tableData.setAttribute("class", "col-sm-2 col-xs-3 tableData");

		let dayType = document.createElement("select");
		dayType.setAttribute("name", "dayType"+taxPeriodStart);
		dayType.setAttribute("id", "dayType"+taxPeriodStart);
		dayType.setAttribute("class", "typeOfDaySelect");
		tableData.appendChild(dayType);

		let dayOptionsArray =["Not Selected", "Day In", "Day Off", "Holiday", "Half In/Hol", "Unpaid Hol", "Day In/Sick", "Sickness", "Absence",  "Parental Leave", "Bereavement", "Compassionate" ];
		let dayOptionsColors = ["notSelectedColor", "dayInColor", "dayOffColor", "holidayColor", "halfInHalfOffColor", "unpaidHolColor", "dayInSickColor", "sicknessColor", "absenceColor", "familyLeaveColor","bereavementColor", "compassionateColor"];
		//a loop that inserts day types into select input
		for(k=0; k<dayOptionsArray.length; k++)	{
			let dayOption = document.createElement("option");
			dayOption.setAttribute("class",dayOptionsColors[k]);
			let optionText = document.createTextNode(dayOptionsArray[k]);
			dayOption.appendChild(optionText);
			dayType.appendChild(dayOption);
		}
		tableRow.appendChild(tableData);
		taxPeriodStart++;
		//dayType.onchange = function (){changeSelectBackground(), calendarBackgroundChangeOnSelect(), hideHoursSelect(), bankHolidayFilter(timeSinceEpoch)};
		//dayType.onchange = test;

		//creating second column
		  dateDiv = document.createElement("div");
		dateDiv.setAttribute("class", "col-sm-2 col-xs-4 dateDiv tableData tableDataRelative");
		dateDiv.setAttribute("id", "dateDiv"+f);

		let startDate = new Date(timeSinceEpoch);
		//let startDateShort = startDate.toDateString();			// formatting date		dn,mn dd yyyy
		let mm = startDate.getMonth();			// month index
		let MM = startDate.getMonth() +1;		//+1 since we start count from 0.
		let dd = startDate.getDate();			//day of the month number
		let dy = startDate.getDay();			// day name index
		let yy = startDate.getFullYear();

		if (dd<10){dd="0"+dd;}

		mm = months[mm]; // mothn names
		dy = days[dy];  // day names

		let formatedDate = dy + " " + mm + " " + dd;

		//hidden input is used to send date formatted for back end
		//regular date is displayed with weekdays named.
		let dateInput = document.createElement("div");
		dateInput.setAttribute("name","dateInput"+taxPeriodStart);
		dateInput.setAttribute("class","dateInput");
		dateInput.setAttribute("id","dateInput"+taxPeriodStart);
		dateInput.innerHTML = formatedDate;
		dateDiv.appendChild(dateInput);

		if (MM<10){MM="0"+MM;}
		let formatedDateHidden = yy + "-" + MM + "-" + dd;

		let dateInputHidden = document.createElement("input");
		dateInputHidden.setAttribute("type","text");
		dateInputHidden.setAttribute("name","dateInputHidden"+taxPeriodStart);
		dateInputHidden.setAttribute("class","dateInputHidden");
		dateInputHidden.setAttribute("id","dateInputHidden"+taxPeriodStart);
		dateInputHidden.setAttribute("value",formatedDateHidden);
		dateInputHidden.setAttribute("readonly","readonly");
		dateDiv.appendChild(dateInputHidden);

		let dayInSickDiv = document.createElement("div");
		dayInSickDiv.setAttribute("id","dayInSickDiv"+taxPeriodStart);
		dayInSickDiv.setAttribute("class","absoluteDiv absoluteDivSick dayInSickDiv dayInSickColor");
		let dayInSickText = document.createTextNode("Paid");
		dayInSickDiv.appendChild(dayInSickText);
		let dayInSickButton = document.createElement("input");
		dayInSickButton.setAttribute("id", "dayInSickButton"+taxPeriodStart);
		dayInSickButton.setAttribute("type", "checkbox");
		dayInSickButton.setAttribute("name", "dayInSick"+taxPeriodStart);
		dayInSickButton.setAttribute("value", "true");
		dayInSickDiv.appendChild(dayInSickButton);

		dateDiv.appendChild(dayInSickDiv);

		let sicknessDiv = document.createElement("div");
		sicknessDiv.setAttribute("id","sicknessDiv"+taxPeriodStart);
		sicknessDiv.setAttribute("class","absoluteDiv sicknessDiv sicknessColor");
		let sicknessText = document.createTextNode("Paid");
		sicknessDiv.appendChild(sicknessText);
		let sicknessButton = document.createElement("input");
		sicknessButton.setAttribute("id", "sicknessButton"+taxPeriodStart);
		sicknessButton.setAttribute("type", "checkbox");
		sicknessButton.setAttribute("name", "sickness"+taxPeriodStart);
		sicknessButton.setAttribute("value", "true");
		sicknessDiv.appendChild(sicknessButton);
		dateDiv.appendChild(sicknessDiv);

		let familyLeaveDiv = document.createElement("div");
		familyLeaveDiv.setAttribute("id","familyLeaveDiv"+taxPeriodStart);
		familyLeaveDiv.setAttribute("class","absoluteDiv familyLeaveDiv familyLeaveColor");

		let familyLeaveText = document.createTextNode("Paid");
		familyLeaveDiv.appendChild(familyLeaveText);
		let familyLeaveButton = document.createElement("input");
		familyLeaveButton.setAttribute("id", "familyLeaveButton"+taxPeriodStart);
		familyLeaveButton.setAttribute("type", "checkbox");
		familyLeaveButton.setAttribute("name", "familyLeave"+taxPeriodStart);
		familyLeaveButton.setAttribute("value", "true");
		familyLeaveDiv.appendChild(familyLeaveButton);
		dateDiv.appendChild(familyLeaveDiv);

		let enhancedHolidayDiv = document.createElement("div");
		enhancedHolidayDiv.setAttribute("id","enhancedHolidayDiv"+taxPeriodStart);
		enhancedHolidayDiv.setAttribute("class","absoluteDiv absoluteDivSick holidayDiv holidayColor");
		let enhancedHolidayText = document.createTextNode("Enhanced");
		enhancedHolidayDiv.appendChild(enhancedHolidayText);
		let enhancedHolidayButton = document.createElement("input");
		enhancedHolidayButton.setAttribute("id", "enhancedHolidayButton"+taxPeriodStart);
		enhancedHolidayButton.setAttribute("type", "checkbox");
		enhancedHolidayButton.setAttribute("name", "enhancedHoliday"+taxPeriodStart);
		enhancedHolidayButton.setAttribute("value", "true");
		enhancedHolidayDiv.appendChild(enhancedHolidayButton);
		dateDiv.appendChild(enhancedHolidayDiv);

		let bereavementButtonDiv = document.createElement("div");
		bereavementButtonDiv.setAttribute("id","bereavementButtonDiv"+taxPeriodStart);
		bereavementButtonDiv.setAttribute("class","absoluteDiv absoluteDivSick bereavementDiv bereavementColor");
		let bereavementButtonText = document.createTextNode("Paid");
		bereavementButtonDiv.appendChild(bereavementButtonText);
		let bereavementButton = document.createElement("input");
		bereavementButton.setAttribute("id", "bereavementButton"+taxPeriodStart);
		bereavementButton.setAttribute("type", "checkbox");
		bereavementButton.setAttribute("name", "bereavementButton"+taxPeriodStart);
		bereavementButton.setAttribute("value", "true");
		bereavementButtonDiv.appendChild(bereavementButton);
		dateDiv.appendChild(bereavementButtonDiv);

		let compassionateButtonDiv = document.createElement("div");
		compassionateButtonDiv.setAttribute("id","compassionateButtonDiv"+taxPeriodStart);
		compassionateButtonDiv.setAttribute("class","absoluteDiv absoluteDivSick compassionateDiv compassionateColor");
		let compassionateButtonText = document.createTextNode("Paid");
		compassionateButtonDiv.appendChild(compassionateButtonText);
		let compassionateButton = document.createElement("input");
		compassionateButton.setAttribute("id", "compassionateButton"+taxPeriodStart);
		compassionateButton.setAttribute("type", "checkbox");
		compassionateButton.setAttribute("name", "compassionateButton"+taxPeriodStart);
		compassionateButton.setAttribute("value", "true");
		compassionateButtonDiv.appendChild(compassionateButton);
		dateDiv.appendChild(compassionateButtonDiv);

		tableRow.appendChild(dateDiv);

		//creating third column elements
		let tableData2 = document.createElement("div");
		tableData2.setAttribute("class", "col-sm-3 col-xs-5 tableData tableDataRelative");
		let startHours = document.createElement("select");
		startHours.setAttribute("name", "startHours"+taxPeriodStart);
		startHours.setAttribute("id", "startHours"+taxPeriodStart);
		startHours.setAttribute("class", "hourMinuteSelect startTimeColor");

		let startHourOptionArray = [];
			for (sh=0;sh<=23;sh++)	{
				if (sh<10){sh="0"+sh;}
				startHourOptionArray[sh] = sh;
				let startHourOption = document.createElement("option");
				let startHour = document.createTextNode(startHourOptionArray[sh]);
				startHourOption.appendChild(startHour);						//option<---[text]
				startHours.appendChild(startHourOption);					//select<--[option]
			}
		tableData2.appendChild(startHours);

		let startMinutes = document.createElement("select");
		startMinutes.setAttribute("name", "startMinutes"+taxPeriodStart);
		startMinutes.setAttribute("id", "startMinutes"+taxPeriodStart);
		startMinutes.setAttribute("class", "hourMinuteSelect startTimeColor");
		let startMinuteOptionArray = [];
			for (sm=0;sm<=59;sm++)	{
				if (sm<10){sm="0"+sm;}
				startMinuteOptionArray[sm] = sm;
				let startMinuteOption = document.createElement("option");
				let startMinute = document.createTextNode(startMinuteOptionArray[sm]);
				startMinuteOption.appendChild(startMinute);					//option<--[text]
				startMinutes.appendChild(startMinuteOption);				//select<--[option]
			}
		tableData2.appendChild(startMinutes);

		let endHours = document.createElement("select");
		endHours.setAttribute("name", "endHours"+taxPeriodStart);
		endHours.setAttribute("id", "endHours"+taxPeriodStart);
		endHours.setAttribute("class", "hourMinuteSelect endTimeColor");
		let endHourOptionArray = [];
			for (eh=0;eh<=23;eh++)	{
				if (eh<10){eh="0"+eh;}
				endHourOptionArray[eh] = eh;
				let endHourOption = document.createElement("option");
				endHourOption.setAttribute("class", "endTimeColor");
				let endHour = document.createTextNode(endHourOptionArray[eh]);
				endHourOption.appendChild(endHour);							//option<--[text]
				endHours.appendChild(endHourOption);						//select<--[option]
			}
		let endHourNextMorning = [];
			for(nmh=0;nmh<=11;nmh++)	{
				if (nmh<10){nmh="0"+nmh;}
				endHourNextMorning[nmh] = nmh;
				let endHourOption = document.createElement("option");
				endHourOption.setAttribute("class","nextMorning");
				let endHour = document.createTextNode(endHourNextMorning[nmh]);
				endHourOption.appendChild(endHour);							//option<--[text]
				endHours.appendChild(endHourOption);						//select<--[option]
			}
		tableData2.appendChild(endHours);

		let endMinutes = document.createElement("select");
		endMinutes.setAttribute("name", "endMinutes"+taxPeriodStart);
		endMinutes.setAttribute("id", "endMinutes"+taxPeriodStart);
		endMinutes.setAttribute("class", "hourMinuteSelect endTimeColor");

		let endMinuteOptionArray = [];
		for (em=0;em<=59;em++) {
			if (em<10){em="0"+em;}
			endMinuteOptionArray[em] = em;
			let endMinuteOption = document.createElement("option");
			let endMinute = document.createTextNode(endMinuteOptionArray[em]);
			endMinuteOption.appendChild(endMinute);						//option<--[text]
			endMinutes.appendChild(endMinuteOption);					//select<--[option]
		}
		tableData2.appendChild(endMinutes);

		let notSelectedDiv = document.createElement("div");
		notSelectedDiv.setAttribute("id","notSelectedDiv"+taxPeriodStart);
		notSelectedDiv.setAttribute("class","absoluteDiv notSelectedColor notSelectedDiv");
		let notSelectedText = document.createTextNode("Select a Day Type.");
		notSelectedDiv.appendChild(notSelectedText);
		tableData2.appendChild(notSelectedDiv);

		//not in use
		let holidayDiv = document.createElement("div");
		holidayDiv.setAttribute("id","holidayDiv"+taxPeriodStart);
		holidayDiv.setAttribute("class","absoluteDiv holidayColor holidayDiv");
		let holidayText = document.createTextNode("Holiday Time!");
		holidayDiv.appendChild(holidayText);
		tableData2.appendChild(holidayDiv);

		let dayOffDiv = document.createElement("div");
		dayOffDiv.setAttribute("id","dayOffDiv"+taxPeriodStart);
		dayOffDiv.setAttribute("class","absoluteDiv dayOffDiv dayOffColor");
		let dayOffText = document.createTextNode("Enjoy Your Day Off!");
		dayOffDiv.appendChild(dayOffText);
		tableData2.appendChild(dayOffDiv);

		let sicknessTextDiv = document.createElement("div");
		sicknessTextDiv.setAttribute("id","sicknessTextDiv"+taxPeriodStart);
		sicknessTextDiv.setAttribute("class","absoluteDiv sicknessDiv sicknessColor");
		let sicknessTextDivText = document.createTextNode("Get well soon!");
		sicknessTextDiv.appendChild(sicknessTextDivText);
		tableData2.appendChild(sicknessTextDiv);

		let dayInSickTextDiv = document.createElement("div");
		dayInSickTextDiv.setAttribute("id","dayInSickTextDiv"+taxPeriodStart);
		dayInSickTextDiv.setAttribute("class","absoluteDiv dayInSickDiv dayInSickColor");
		let dayInSickTextDivText = document.createTextNode("Get well soon!");
		dayInSickTextDiv.appendChild(dayInSickTextDivText);
		tableData2.appendChild(dayInSickTextDiv);

		let absenceDiv = document.createElement("div");
		absenceDiv.setAttribute("id","absenceDiv"+taxPeriodStart);
		absenceDiv.setAttribute("class","absoluteDiv absenceDiv absenceColor");
		let absenceDivText = document.createTextNode("Hope It's Authorised!");
		absenceDiv.appendChild(absenceDivText);
		tableData2.appendChild(absenceDiv);

		let familyLeaeveTextDiv = document.createElement("div");
		familyLeaeveTextDiv.setAttribute("id","familyLeaeveTextDiv"+taxPeriodStart);
		familyLeaeveTextDiv.setAttribute("class","absoluteDiv familyLeaveDiv familyLeaveColor");
		let familyLeaeveTextDivText = document.createTextNode("Enjoy Being a Parent!");
		familyLeaeveTextDiv.appendChild(familyLeaeveTextDivText);
		tableData2.appendChild(familyLeaeveTextDiv);

		let bereavementDiv = document.createElement("div");
		bereavementDiv.setAttribute("id","bereavementDiv"+taxPeriodStart);
		bereavementDiv.setAttribute("class","absoluteDiv bereavementDiv bereavementColor");
		let bereavementText = document.createTextNode("Sincere Condolences.");
		bereavementDiv.appendChild(bereavementText);
		tableData2.appendChild(bereavementDiv);

		let compassionateDiv = document.createElement("div");
		compassionateDiv.setAttribute("id","compassionateDiv"+taxPeriodStart);
		compassionateDiv.setAttribute("class","absoluteDiv compassionateDiv compassionateColor");
		let compassionateText = document.createTextNode("Take Care!");
		compassionateDiv.appendChild(compassionateText);
		tableData2.appendChild(compassionateDiv);

		let unpaidHolDiv = document.createElement("div");
		unpaidHolDiv.setAttribute("id","unpaidHolDiv"+taxPeriodStart);
		unpaidHolDiv.setAttribute("class","absoluteDiv unpaidHolDiv unpaidHolColor");
		let unpaidHolDivText = document.createTextNode("Enjoy Your Time Off!");
		unpaidHolDiv.appendChild(unpaidHolDivText);
		tableData2.appendChild(unpaidHolDiv);

		tableRow.appendChild(tableData2);

		//create fourth column elements
		let noteDiv = document.createElement("div");
		noteDiv.setAttribute("class", "col-sm-5  hidden-xs tableData tableDataRelative noteDiv");

		let noteInput = document.createElement("input");
		noteInput.setAttribute("type","text");
		noteInput.setAttribute("name","noteInput"+taxPeriodStart);
		noteInput.setAttribute("class","noteInput");
		noteInput.setAttribute("id","noteInput"+taxPeriodStart);
		noteInput.setAttribute("size", "15");
		noteInput.setAttribute("maxlength", "50");

		noteDiv.appendChild(noteInput);
		tableRow.appendChild(noteDiv);
		timeSinceEpoch += 86400000 //pridedama viena diena
		taxPeriodStart++;
	//endHours.onchange = function(){finishNextMorningBColor(weekStart);};
	//sicknessButton.onchange = function (){hideHoursSelect();}
	//dayInSickButton.onchange = function (){hideHoursSelect();}
	//bereavementButton.onchange = function (){hideHoursSelect();}
	//compassionateButton.onchange = function(){hideHoursSelect();}
	//familyLeaveButton.onchange = function(){hideHoursSelect();}
	}
}
const start = () => {
	let taxPeriodNumber = 20;
	let timeSinceEpoch = 1491004800000;
	createFirstColumnElements(taxPeriodNumber, timeSinceEpoch);
}
document.addEventListener("DOMContentLoaded",start,false);
