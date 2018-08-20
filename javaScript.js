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

	//keiciame antraste priklausomai nuo tax year.
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
		tableData.setAttribute("class", "col-sm-3 col-xs-3 tableData");

		let dayType = document.createElement("select");
		dayType.setAttribute("name", "dayType"+taxPeriodStart);
		dayType.setAttribute("id", "dayType"+taxPeriodStart);
		dayType.setAttribute("class", "typeOfDaySelect");
		tableData.appendChild(dayType);

		let dayOptionsArray =["Not Selected", "Day In", "Day Off", "Holiday", "Half In/Hol", "Unpaid Hol", "Day In/Sick", "Sickness", "Absence",  "Parental Leave", "Bereavement", "Compassionate" ];
		let dayOptionsColors = ["notSelectedColor", "dayInColor", "dayOffColor", "holidayColor", "halfInHalfOffColor", "unpaidHolColor", "dayInSickColor", "sicknessColor", "absenceColor", "familyLeaveColor","bereavementColor", "compassionateColor"];
		//sukuriamas ciklas, kuris i select elementa sutalpina visus galimus pasirinktinu dienu variantus
		for(k=0; k<dayOptionsArray.length; k++)	{
			//sukuriamas option elementas su value atributu ir verte
			let dayOption = document.createElement("option");
			//parenkamos spalvos dropdown meniu, kurios yra tokios pat kaip ir select elemento.
			dayOption.setAttribute("class",dayOptionsColors[k]);
			//sukuriamas textas, kurio verte paimama is dayOptionsArray masyvo
			let optionText = document.createTextNode(dayOptionsArray[k]);
			//tekstas iterpiamas i option elementa, o pastaris i select elementa
			dayOption.appendChild(optionText);
			dayType.appendChild(dayOption);
		}
		tableRow.appendChild(tableData);
		taxPeriodStart++;
		//dayType.onchange = function (){changeSelectBackground(), calendarBackgroundChangeOnSelect(), hideHoursSelect(), bankHolidayFilter(timeSinceEpoch)};
		//dayType.onchange = test;

		//creating second column
		var dateDiv = document.createElement("div");
		dateDiv.setAttribute("class", "col-sm-2 col-xs-4 dateDiv tableData tableDataRelative");
		dateDiv.setAttribute("id", "dateDiv"+f);

		var startDate = new Date(timeSinceEpoch);
		//var startDateShort = startDate.toDateString();			// suformatuojama data		dn,mn dd yyyy
		var mm = startDate.getMonth();			// month index
		var MM = startDate.getMonth() +1;		//+1 nes skaiciuojama nuo 0.
		var dd = startDate.getDate();			//day of the month number
		var dy = startDate.getDay();			// day name index
		var yy = startDate.getFullYear();

		if (dd<10){dd="0"+dd;}

		mm = months[mm]; // mothn names
		dy = days[dy];  // day names

		var formatedDate = dy + " " + mm + " " + dd;

		//hidden input is used to send date formatted for back end
		//regular date is displayed with weekdays named.
		var dateInput = document.createElement("div");
		dateInput.setAttribute("name","dateInput"+taxPeriodStart);
		dateInput.setAttribute("class","dateInput");
		dateInput.setAttribute("id","dateInput"+taxPeriodStart);
		dateInput.innerHTML = formatedDate;
		dateDiv.appendChild(dateInput);

		//pridedame 0 menesio priekyje jei maziau uz 10.
		if (MM<10){MM="0"+MM;}
		var formatedDateHidden = yy + "-" + MM + "-" + dd; // siuntimui i serveri

		var dateInputHidden = document.createElement("input");
		dateInputHidden.setAttribute("type","text");
		dateInputHidden.setAttribute("name","dateInputHidden"+taxPeriodStart);
		dateInputHidden.setAttribute("class","dateInputHidden");
		dateInputHidden.setAttribute("id","dateInputHidden"+taxPeriodStart);
		dateInputHidden.setAttribute("value",formatedDateHidden);
		dateInputHidden.setAttribute("readonly","readonly");
		dateDiv.appendChild(dateInputHidden);

		var dayInSickDiv = document.createElement("div");
		dayInSickDiv.setAttribute("id","dayInSickDiv"+taxPeriodStart);
		dayInSickDiv.setAttribute("class","absoluteDiv absoluteDivSick dayInSickDiv dayInSickColor");
		var dayInSickText = document.createTextNode("Paid");
		dayInSickDiv.appendChild(dayInSickText);
		var dayInSickButton = document.createElement("input");
		dayInSickButton.setAttribute("id", "dayInSickButton"+taxPeriodStart);
		dayInSickButton.setAttribute("type", "checkbox");
		dayInSickButton.setAttribute("name", "dayInSick"+taxPeriodStart);
		dayInSickButton.setAttribute("value", "true");
		dayInSickDiv.appendChild(dayInSickButton);

		dateDiv.appendChild(dayInSickDiv);

		var sicknessDiv = document.createElement("div");
		sicknessDiv.setAttribute("id","sicknessDiv"+taxPeriodStart);
		sicknessDiv.setAttribute("class","absoluteDiv sicknessDiv sicknessColor");
		var sicknessText = document.createTextNode("Paid");
		sicknessDiv.appendChild(sicknessText);
		var sicknessButton = document.createElement("input");
		sicknessButton.setAttribute("id", "sicknessButton"+taxPeriodStart);
		sicknessButton.setAttribute("type", "checkbox");
		sicknessButton.setAttribute("name", "sickness"+taxPeriodStart);
		sicknessButton.setAttribute("value", "true");
		sicknessDiv.appendChild(sicknessButton);
		dateDiv.appendChild(sicknessDiv);

		var familyLeaveDiv = document.createElement("div");
		familyLeaveDiv.setAttribute("id","familyLeaveDiv"+taxPeriodStart);
		familyLeaveDiv.setAttribute("class","absoluteDiv familyLeaveDiv familyLeaveColor");

		var familyLeaveText = document.createTextNode("Paid");
		familyLeaveDiv.appendChild(familyLeaveText);
		var familyLeaveButton = document.createElement("input");
		familyLeaveButton.setAttribute("id", "familyLeaveButton"+taxPeriodStart);
		familyLeaveButton.setAttribute("type", "checkbox");
		familyLeaveButton.setAttribute("name", "familyLeave"+taxPeriodStart);
		familyLeaveButton.setAttribute("value", "true");
		familyLeaveDiv.appendChild(familyLeaveButton);
		dateDiv.appendChild(familyLeaveDiv);

		var enhancedHolidayDiv = document.createElement("div");
		enhancedHolidayDiv.setAttribute("id","enhancedHolidayDiv"+taxPeriodStart);
		enhancedHolidayDiv.setAttribute("class","absoluteDiv absoluteDivSick holidayDiv holidayColor");
		var enhancedHolidayText = document.createTextNode("Enhanced");
		enhancedHolidayDiv.appendChild(enhancedHolidayText);
		var enhancedHolidayButton = document.createElement("input");
		enhancedHolidayButton.setAttribute("id", "enhancedHolidayButton"+taxPeriodStart);
		enhancedHolidayButton.setAttribute("type", "checkbox");
		enhancedHolidayButton.setAttribute("name", "enhancedHoliday"+taxPeriodStart);
		enhancedHolidayButton.setAttribute("value", "true");
		enhancedHolidayDiv.appendChild(enhancedHolidayButton);
		dateDiv.appendChild(enhancedHolidayDiv);

		var bereavementButtonDiv = document.createElement("div");
		bereavementButtonDiv.setAttribute("id","bereavementButtonDiv"+taxPeriodStart);
		bereavementButtonDiv.setAttribute("class","absoluteDiv absoluteDivSick bereavementDiv bereavementColor");
		var bereavementButtonText = document.createTextNode("Paid");
		bereavementButtonDiv.appendChild(bereavementButtonText);
		var bereavementButton = document.createElement("input");
		bereavementButton.setAttribute("id", "bereavementButton"+taxPeriodStart);
		bereavementButton.setAttribute("type", "checkbox");
		bereavementButton.setAttribute("name", "bereavementButton"+taxPeriodStart);
		bereavementButton.setAttribute("value", "true");
		bereavementButtonDiv.appendChild(bereavementButton);
		dateDiv.appendChild(bereavementButtonDiv);

		var compassionateButtonDiv = document.createElement("div");
		compassionateButtonDiv.setAttribute("id","compassionateButtonDiv"+taxPeriodStart);
		compassionateButtonDiv.setAttribute("class","absoluteDiv absoluteDivSick compassionateDiv compassionateColor");
		var compassionateButtonText = document.createTextNode("Paid");
		compassionateButtonDiv.appendChild(compassionateButtonText);
		var compassionateButton = document.createElement("input");
		compassionateButton.setAttribute("id", "compassionateButton"+taxPeriodStart);
		compassionateButton.setAttribute("type", "checkbox");
		compassionateButton.setAttribute("name", "compassionateButton"+taxPeriodStart);
		compassionateButton.setAttribute("value", "true");
		compassionateButtonDiv.appendChild(compassionateButton);
		dateDiv.appendChild(compassionateButtonDiv);

		tableRow.appendChild(dateDiv);

		//creating third column elements
		var tableData2 = document.createElement("div");
		tableData2.setAttribute("class", "col-sm-3 col-xs-5 tableData tableDataRelative");
		var startHours = document.createElement("select");
		startHours.setAttribute("name", "startHours"+taxPeriodStart);
		startHours.setAttribute("id", "startHours"+taxPeriodStart);
		startHours.setAttribute("class", "hourMinuteSelect startTimeColor");

		var startHourOptionArray = [];
			for (sh=0;sh<=23;sh++)	{
				if (sh<10){sh="0"+sh;} //iterpiamas nulis priekyje, jei valanda yra mazesne uz 10
				startHourOptionArray[sh] = sh; // pildomas valandu masyvas
				var startHourOption = document.createElement("option");
				var startHour = document.createTextNode(startHourOptionArray[sh]);
				startHourOption.appendChild(startHour);						//option<---[text]
				startHours.appendChild(startHourOption);					//select<--[option]
			}
		tableData2.appendChild(startHours);

		var startMinutes = document.createElement("select");
		startMinutes.setAttribute("name", "startMinutes"+taxPeriodStart);
		startMinutes.setAttribute("id", "startMinutes"+taxPeriodStart);
		startMinutes.setAttribute("class", "hourMinuteSelect startTimeColor");
		var startMinuteOptionArray = [];
			for (sm=0;sm<=59;sm++)	{
				if (sm<10){sm="0"+sm;} //iterpiamas nulis priekyje, jei valanda yra mazesne uz 10
				startMinuteOptionArray[sm] = sm; // pildomas minuciu masyvas
				var startMinuteOption = document.createElement("option");
				var startMinute = document.createTextNode(startMinuteOptionArray[sm]);
				startMinuteOption.appendChild(startMinute);					//option<--[text]
				startMinutes.appendChild(startMinuteOption);				//select<--[option]
			}
		tableData2.appendChild(startMinutes);

		var endHours = document.createElement("select");
		endHours.setAttribute("name", "endHours"+taxPeriodStart);
		endHours.setAttribute("id", "endHours"+taxPeriodStart);
		endHours.setAttribute("class", "hourMinuteSelect endTimeColor");
		var endHourOptionArray = [];
			for (eh=0;eh<=23;eh++)	{
				if (eh<10){eh="0"+eh;} //iterpiamas nulis priekyje, jei valanda yra mazesne uz 10
				endHourOptionArray[eh] = eh; // pildomas valandu masyvas
				var endHourOption = document.createElement("option");
				endHourOption.setAttribute("class", "endTimeColor");
				var endHour = document.createTextNode(endHourOptionArray[eh]);
				endHourOption.appendChild(endHour);							//option<--[text]
				endHours.appendChild(endHourOption);						//select<--[option]
			}
		var endHourNextMorning = [];
			for(nmh=0;nmh<=11;nmh++)	{
				if (nmh<10){nmh="0"+nmh;}
				endHourNextMorning[nmh] = nmh;
				var endHourOption = document.createElement("option");
				endHourOption.setAttribute("class","nextMorning");
				var endHour = document.createTextNode(endHourNextMorning[nmh]);
				endHourOption.appendChild(endHour);							//option<--[text]
				endHours.appendChild(endHourOption);						//select<--[option]
			}
		tableData2.appendChild(endHours);

		var endMinutes = document.createElement("select");
		endMinutes.setAttribute("name", "endMinutes"+taxPeriodStart);
		endMinutes.setAttribute("id", "endMinutes"+taxPeriodStart);
		endMinutes.setAttribute("class", "hourMinuteSelect endTimeColor");

		var endMinuteOptionArray = [];
		for (em=0;em<=59;em++) {
			if (em<10){em="0"+em;} //iterpiamas nulis priekyje, jei valanda yra mazesne uz 10
			endMinuteOptionArray[em] = em; // pildomas masyvas
			var endMinuteOption = document.createElement("option");
			var endMinute = document.createTextNode(endMinuteOptionArray[em]);
			endMinuteOption.appendChild(endMinute);						//option<--[text]
			endMinutes.appendChild(endMinuteOption);					//select<--[option]
		}
		tableData2.appendChild(endMinutes);

		var notSelectedDiv = document.createElement("div");
		notSelectedDiv.setAttribute("id","notSelectedDiv"+taxPeriodStart);
		notSelectedDiv.setAttribute("class","absoluteDiv notSelectedColor notSelectedDiv");
		var notSelectedText = document.createTextNode("Select a Day Type.");
		notSelectedDiv.appendChild(notSelectedText);
		tableData2.appendChild(notSelectedDiv);

		//nenaudojamas
		var holidayDiv = document.createElement("div");
		holidayDiv.setAttribute("id","holidayDiv"+taxPeriodStart);
		holidayDiv.setAttribute("class","absoluteDiv holidayColor holidayDiv");
		var holidayText = document.createTextNode("Holiday Time!");
		holidayDiv.appendChild(holidayText);
		tableData2.appendChild(holidayDiv);

		var dayOffDiv = document.createElement("div");
		dayOffDiv.setAttribute("id","dayOffDiv"+taxPeriodStart);
		dayOffDiv.setAttribute("class","absoluteDiv dayOffDiv dayOffColor");
		var dayOffText = document.createTextNode("Enjoy Your Day Off!");
		dayOffDiv.appendChild(dayOffText);
		tableData2.appendChild(dayOffDiv);

		var sicknessTextDiv = document.createElement("div");
		sicknessTextDiv.setAttribute("id","sicknessTextDiv"+taxPeriodStart);
		sicknessTextDiv.setAttribute("class","absoluteDiv sicknessDiv sicknessColor");
		var sicknessTextDivText = document.createTextNode("Get well soon!");
		sicknessTextDiv.appendChild(sicknessTextDivText);
		tableData2.appendChild(sicknessTextDiv);

		var dayInSickTextDiv = document.createElement("div");
		dayInSickTextDiv.setAttribute("id","dayInSickTextDiv"+taxPeriodStart);
		dayInSickTextDiv.setAttribute("class","absoluteDiv dayInSickDiv dayInSickColor");
		var dayInSickTextDivText = document.createTextNode("Get well soon!");
		dayInSickTextDiv.appendChild(dayInSickTextDivText);
		tableData2.appendChild(dayInSickTextDiv);

		var absenceDiv = document.createElement("div");
		absenceDiv.setAttribute("id","absenceDiv"+taxPeriodStart);
		absenceDiv.setAttribute("class","absoluteDiv absenceDiv absenceColor");
		var absenceDivText = document.createTextNode("Hope It's Authorised!");
		absenceDiv.appendChild(absenceDivText);
		tableData2.appendChild(absenceDiv);

		var familyLeaeveTextDiv = document.createElement("div");
		familyLeaeveTextDiv.setAttribute("id","familyLeaeveTextDiv"+taxPeriodStart);
		familyLeaeveTextDiv.setAttribute("class","absoluteDiv familyLeaveDiv familyLeaveColor");
		var familyLeaeveTextDivText = document.createTextNode("Enjoy Being a Parent!");
		familyLeaeveTextDiv.appendChild(familyLeaeveTextDivText);
		tableData2.appendChild(familyLeaeveTextDiv);

		var bereavementDiv = document.createElement("div");
		bereavementDiv.setAttribute("id","bereavementDiv"+taxPeriodStart);
		bereavementDiv.setAttribute("class","absoluteDiv bereavementDiv bereavementColor");
		var bereavementText = document.createTextNode("Sincere Condolences.");
		bereavementDiv.appendChild(bereavementText);
		tableData2.appendChild(bereavementDiv);

		var compassionateDiv = document.createElement("div");
		compassionateDiv.setAttribute("id","compassionateDiv"+taxPeriodStart);
		compassionateDiv.setAttribute("class","absoluteDiv compassionateDiv compassionateColor");
		var compassionateText = document.createTextNode("Take Care!");
		compassionateDiv.appendChild(compassionateText);
		tableData2.appendChild(compassionateDiv);

		var unpaidHolDiv = document.createElement("div");
		unpaidHolDiv.setAttribute("id","unpaidHolDiv"+taxPeriodStart);
		unpaidHolDiv.setAttribute("class","absoluteDiv unpaidHolDiv unpaidHolColor");
		var unpaidHolDivText = document.createTextNode("Enjoy Your Time Off!");
		unpaidHolDiv.appendChild(unpaidHolDivText);
		tableData2.appendChild(unpaidHolDiv);

		tableRow.appendChild(tableData2);

		//create fourth column elements
		var noteDiv = document.createElement("div");
		noteDiv.setAttribute("class", "col-sm-4  hidden-xs tableData tableDataRelative noteDiv");

		var noteInput = document.createElement("input");
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
