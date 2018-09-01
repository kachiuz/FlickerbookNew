//GLOBAL VARIABLES------------------------------------------------------------------------------//

let timeSinceEpochOriginal = 1491004800000;
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//calculate current tax period NUMBER
let currentDate = new Date();
let currentTime = currentDate.getTime() 					//mseconds since epoch
let mSecondsInWeek = 604800000;
let taxPeriodNumber = Math.ceil((currentTime - timeSinceEpochOriginal)/mSecondsInWeek);

let weekStart = 0;
let unsHCheckCurrent = 1;
let timeSinceEpoch = timeSinceEpochOriginal + 604800000*(taxPeriodNumber-1)+weekStart*86400000
//END OF GLOBAL VAIRABLES------------------------------------------------------------------------//

const createFirstColumnElements = (taxPeriodNumber, timeSinceEpoch) => {

	let taxPeriodStart = (taxPeriodNumber-1)*7+weekStart;

	let timeSinceEpochInput = document.getElementById("timeSinceEpochInput");
	let timeSinceEpochInputValue = 1491004800000;
	timeSinceEpochInputValue = Number(timeSinceEpochInputValue);
	taxPeriodNumberN = Number(taxPeriodNumber); // pridedame weekstart
	timeSinceEpochInputValue += 604800000*(taxPeriodNumberN-1)+weekStart*86400000;
	timeSinceEpochInput.setAttribute("value",timeSinceEpochInputValue);


	//depending on a year, caption has to be changed
	if(taxPeriodNumber<=52 && taxPeriodNumber>0 ){
		tableCaptionTitle.innerHTML = "2017/2018 Tax Period " + taxPeriodNumber;
	}	else if (taxPeriodNumber<=104 && taxPeriodNumber>52 ){
		taxPeriodNumberNew = taxPeriodNumber - 52;
		if (taxPeriodNumberNew<10){taxPeriodNumberNew="0"+taxPeriodNumberNew;}
		tableCaptionTitle.innerHTML = "2018/2019 Tax Period " + taxPeriodNumberNew;
	}	else if (taxPeriodNumber<=156 && taxPeriodNumber>104 ){
		taxPeriodNumberNew = taxPeriodNumber - 104;
		if (taxPeriodNumberNew<10){taxPeriodNumberNew="0"+taxPeriodNumberNew;}
		tableCaptionTitle.innerHTML = "2019/2020 Tax Period " + taxPeriodNumberNew;
	}	else if (taxPeriodNumber<=208 && taxPeriodNumber>156 ){
		taxPeriodNumberNew = taxPeriodNumber - 156;
		if (taxPeriodNumberNew<10){taxPeriodNumberNew="0"+taxPeriodNumberNew;}
		tableCaptionTitle.innerHTML = "2020/2021 Tax Period " + taxPeriodNumberNew;
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
		//a loop that inserts day types into select input
		for(k=0; k<dayOptionsArray.length; k++)	{
			let dayOption = document.createElement("option");
			dayOption.setAttribute("class",dayOptionsColors[k]);
			let optionText = document.createTextNode(dayOptionsArray[k]);
			dayOption.appendChild(optionText);
			dayType.appendChild(dayOption);
		}
		tableRow.appendChild(tableData);
		//dayType.onchange = function (){changeSelectBackground(), calendarBackgroundChangeOnSelect(), hideHoursSelect(), bankHolidayFilter(timeSinceEpoch)};
		//dayType.onchange = test;

		//creating second column
		dateDiv = document.createElement("div");
		dateDiv.setAttribute("class", "col-sm-3 col-xs-4 dateDiv tableData tableDataRelative");
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
		let dayInSickText = document.createTextNode("Paid ");
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
		let sicknessText = document.createTextNode("Paid ");
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

		let familyLeaveText = document.createTextNode("Paid ");
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
		let enhancedHolidayText = document.createTextNode("Enhanced ");
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
		let bereavementButtonText = document.createTextNode("Paid ");
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
		let compassionateButtonText = document.createTextNode("Paid ");
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
		tableData2.setAttribute("class", "col-sm-4 col-xs-5 tableData tableDataRelative");
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
		notSelectedDiv.setAttribute("class","border-left-message absoluteDiv notSelectedColor notSelectedDiv");
		let notSelectedText = document.createTextNode("Select Day Type.");
		notSelectedDiv.appendChild(notSelectedText);
		tableData2.appendChild(notSelectedDiv);

		//not in use
		let holidayDiv = document.createElement("div");
		holidayDiv.setAttribute("id","holidayDiv"+taxPeriodStart);
		holidayDiv.setAttribute("class","border-left-message absoluteDiv holidayColor holidayDiv");
		let holidayText = document.createTextNode("Holiday Time!");
		holidayDiv.appendChild(holidayText);
		tableData2.appendChild(holidayDiv);

		let dayOffDiv = document.createElement("div");
		dayOffDiv.setAttribute("id","dayOffDiv"+taxPeriodStart);
		dayOffDiv.setAttribute("class","border-left-message absoluteDiv dayOffDiv dayOffColor");
		let dayOffText = document.createTextNode("Enjoy Your day off!");
		dayOffDiv.appendChild(dayOffText);
		tableData2.appendChild(dayOffDiv);

		let sicknessTextDiv = document.createElement("div");
		sicknessTextDiv.setAttribute("id","sicknessTextDiv"+taxPeriodStart);
		sicknessTextDiv.setAttribute("class","border-left-message absoluteDiv sicknessDiv sicknessColor");
		let sicknessTextDivText = document.createTextNode("Get well soon!");
		sicknessTextDiv.appendChild(sicknessTextDivText);
		tableData2.appendChild(sicknessTextDiv);

		let dayInSickTextDiv = document.createElement("div");
		dayInSickTextDiv.setAttribute("id","dayInSickTextDiv"+taxPeriodStart);
		dayInSickTextDiv.setAttribute("class","border-left-message absoluteDiv dayInSickDiv dayInSickColor");
		let dayInSickTextDivText = document.createTextNode("Get well soon!");
		dayInSickTextDiv.appendChild(dayInSickTextDivText);
		tableData2.appendChild(dayInSickTextDiv);

		let absenceDiv = document.createElement("div");
		absenceDiv.setAttribute("id","absenceDiv"+taxPeriodStart);
		absenceDiv.setAttribute("class","border-left-message absoluteDiv absenceDiv absenceColor");
		let absenceDivText = document.createTextNode("Time off work.");
		absenceDiv.appendChild(absenceDivText);
		tableData2.appendChild(absenceDiv);

		let familyLeaeveTextDiv = document.createElement("div");
		familyLeaeveTextDiv.setAttribute("id","familyLeaeveTextDiv"+taxPeriodStart);
		familyLeaeveTextDiv.setAttribute("class","border-left-message absoluteDiv familyLeaveDiv familyLeaveColor");
		let familyLeaeveTextDivText = document.createTextNode("Enjoy parenthood!");
		familyLeaeveTextDiv.appendChild(familyLeaeveTextDivText);
		tableData2.appendChild(familyLeaeveTextDiv);

		let bereavementDiv = document.createElement("div");
		bereavementDiv.setAttribute("id","bereavementDiv"+taxPeriodStart);
		bereavementDiv.setAttribute("class","border-left-message absoluteDiv bereavementDiv bereavementColor");
		let bereavementText = document.createTextNode("Condolences.");
		bereavementDiv.appendChild(bereavementText);
		tableData2.appendChild(bereavementDiv);

		let compassionateDiv = document.createElement("div");
		compassionateDiv.setAttribute("id","compassionateDiv"+taxPeriodStart);
		compassionateDiv.setAttribute("class","border-left-message absoluteDiv compassionateDiv compassionateColor");
		let compassionateText = document.createTextNode("Take Care!");
		compassionateDiv.appendChild(compassionateText);
		tableData2.appendChild(compassionateDiv);

		let unpaidHolDiv = document.createElement("div");
		unpaidHolDiv.setAttribute("id","unpaidHolDiv"+taxPeriodStart);
		unpaidHolDiv.setAttribute("class","border-left-message absoluteDiv unpaidHolDiv unpaidHolColor");
		let unpaidHolDivText = document.createTextNode("Enjoy Your time off");
		unpaidHolDiv.appendChild(unpaidHolDivText);
		tableData2.appendChild(unpaidHolDiv);

		tableRow.appendChild(tableData2);

		//create fourth column elements
		let noteDiv = document.createElement("div");
		noteDiv.setAttribute("class", "col-sm-2  hidden-xs tableData tableDataRelative noteDiv");

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

	//dayType.onchange = function (){changeSelectBackground(), calendarBackgroundChangeOnSelect(), hideHoursSelect(), bankHolidayFilter(timeSinceEpoch)};
	dayType.onchange = function (){changeSelectBackground(taxPeriodNumber),hideHoursSelect(taxPeriodNumber); }

	//endHours.onchange = function(){finishNextMorningBColor(weekStart);};
	sicknessButton.onchange = function (){hideHoursSelect(taxPeriodNumber);}
	dayInSickButton.onchange = function (){hideHoursSelect(taxPeriodNumber);}
	bereavementButton.onchange = function (){hideHoursSelect(taxPeriodNumber);}
	compassionateButton.onchange = function(){hideHoursSelect(taxPeriodNumber);}
	familyLeaveButton.onchange = function(){hideHoursSelect(taxPeriodNumber);}
	}
}

function generateCalendar (taxPeriodNumber,timeSinceEpoch) {
	let calendarTable = document.getElementById("calendar");
	let calendarCaption = document.getElementById("calendarCaption");

	timeSinceEpochForDay = timeSinceEpoch;
	let mSecondsInWeek = 604800000;
	timeSinceEpoch -= mSecondsInWeek*3;

	let id = 0;
	for(tr=0;tr<7;tr++)	{
		//iterpiami dienu pavadinimai i kalendorius
		var dayName = document.getElementById("dayName"+tr);
		var startDay = new Date(timeSinceEpochForDay);
		var dy = startDay.getDay();
		dy = days[dy];
		dayName.innerHTML = dy;
		timeSinceEpochForDay += 86400000;

		var startDate = new Date(timeSinceEpoch);
		var mm = startDate.getMonth();
		mm = months[mm];
		var calendarRow = document.getElementById("calendarRow"+tr);

		//iterpiami menesiu pavadinimai i kalendoriu
		var monthDiv = document.createElement("div");
		monthDiv.setAttribute("class", "col-xs-calDN col-sm-calDN dayDiv monthDiv");
		monthDiv.setAttribute("id", "monthDiv"+tr);
		var monthName = document.createTextNode(mm);
		monthDiv.appendChild(monthName);
		calendarRow.appendChild(monthDiv);

		if (tr==3) {
			var currentWeekFilter = document.createElement("div");
			currentWeekFilter.setAttribute("class", "currentWeekFilter");
			calendarRow.appendChild(currentWeekFilter);
		}

		var startDatecalendarCaption = new Date(timeSinceEpoch-86400000*21);
		var yy = startDatecalendarCaption.getFullYear();
		calendarCaption.innerHTML = "Calendar "+yy;

		//cd = create div
		for(cd=0;cd<7;cd++) 	{
			//iterpiami dienu numeriai i kalendoriu
			var startDate = new Date(timeSinceEpoch);
			var dd = startDate.getDate();
			if (dd<10){dd="0"+dd;}
			var dayDiv = document.createElement("div");
			dayDiv.setAttribute("class", "col-xs-calD col-sm-calD dayDiv");
			dayDiv.setAttribute("id", "dayDiv"+id);
			var dayNumber = document.createTextNode(dd);
			dayDiv.appendChild(dayNumber);
			calendarRow.appendChild(dayDiv);

			//paryskiname esama diena kalendoriuje
			var currentDate = new Date();
			var currentTime = currentDate.getTime()

			if (currentTime>timeSinceEpoch && currentTime <(timeSinceEpoch + 86400000)) 	{
				dayDiv.setAttribute("class", "dayDiv currentDay");
			}	else 	{
				dayDiv.setAttribute("class", "dayDiv");
			}
			timeSinceEpoch += 86400000;

			id++;
		}
	}
	//bankHolidayFilter(timeSinceEpoch);
}

//function that changes main table background colors and the visibility of its components
function changeSelectBackground(){
	let taxPeriodStart = (taxPeriodNumber-1)*7+weekStart;

	for(let b=0;b<7;b++)	{
		let index = document.getElementById("dayType"+taxPeriodStart).options.selectedIndex;

		let dayType = document.getElementById("dayType"+taxPeriodStart);				//select meniu, kuriame pasirenkamas dienos tipas
		let dateInput = document.getElementById("dateInput"+taxPeriodStart); 				//datos laukelis
		let noteInput = document.getElementById("noteInput"+taxPeriodStart);
		//let tableRow = document.getElementById("tableRow"+b);
		let dateDiv = document.getElementById("dateDiv"+b);							//div i kuri iterpiamas datos laukelis
		//var endTime = document.getElementById("endTime"+taxPeriodStart);					//div i kuri iterpiami valandu ir minuciu drop down meniu
		//console.log(tableRow);
		let startHours = document.getElementById("startHours"+taxPeriodStart);
		let startMinutes = document.getElementById("startMinutes"+taxPeriodStart);
		let endHours = document.getElementById("endHours"+taxPeriodStart);
		let endMinutes = document.getElementById("endMinutes"+taxPeriodStart);

		let notSelectedDiv = document.getElementById("notSelectedDiv"+taxPeriodStart);
		let holidayDiv = document.getElementById("holidayDiv"+taxPeriodStart);
		let sicknessDiv = document.getElementById("sicknessDiv"+taxPeriodStart);
		let dayOffDiv = document.getElementById("dayOffDiv"+taxPeriodStart);
		let absenceDiv = document.getElementById("absenceDiv"+taxPeriodStart);
		let familyLeaveDiv = document.getElementById("familyLeaveDiv"+taxPeriodStart);
		let bereavementDiv = document.getElementById("bereavementDiv"+taxPeriodStart);
		let dayInSickDiv = document.getElementById("dayInSickDiv"+taxPeriodStart);
		let enhancedHolidayDiv = document.getElementById("enhancedHolidayDiv"+taxPeriodStart)
		let unpaidHolDiv = document.getElementById("unpaidHolDiv"+taxPeriodStart);
		let bereavementButtonDiv = document.getElementById("bereavementButtonDiv"+taxPeriodStart);

		let sicknessTextDiv = document.getElementById("sicknessTextDiv"+taxPeriodStart);
		let dayInSickTextDiv = document.getElementById("dayInSickTextDiv"+taxPeriodStart);
		let familyLeaeveTextDiv = document.getElementById("familyLeaeveTextDiv"+taxPeriodStart);
		let compassionateDiv = document.getElementById("compassionateDiv"+taxPeriodStart);
		let compassionateButtonDiv = document.getElementById("compassionateButtonDiv"+taxPeriodStart);

		//using a classname method as it is easer to change the whole class name string then keep adding or removing additional classes
		switch (index){
			case 0: //not selected
				dayType.className="typeOfDaySelect notSelectedColor";
				dateInput.className="dateInput notSelectedColor";
				noteInput.className="noteInput notSelectedColor";
				dateDiv.className="col-sm-3 col-xs-4 dateDiv tableData tableDataRelative notSelectedColor";

				notSelectedDiv.style.visibility = "visible";
				holidayDiv.style.visibility = "hidden";
				unpaidHolDiv.style.visibility = "hidden";
				sicknessDiv.style.visibility = "hidden";
				dayOffDiv.style.visibility = "hidden";
				absenceDiv.style.visibility = "hidden";
				familyLeaveDiv.style.visibility = "hidden";
				bereavementDiv.style.visibility = "hidden";
				dayInSickDiv.style.visibility = "hidden";
				enhancedHolidayDiv.style.visibility = "hidden";
				bereavementButtonDiv.style.visibility = "hidden";
				sicknessTextDiv.style.visibility = "hidden";
				dayInSickTextDiv.style.visibility = "hidden";
				familyLeaeveTextDiv.style.visibility = "hidden";
				compassionateDiv.style.visibility = "hidden";
				compassionateButtonDiv.style.visibility = "hidden";

				startHours.style.visibility = "hidden";
				startMinutes.style.visibility = "hidden";
				endHours.style.visibility = "hidden";
				endMinutes.style.visibility = "hidden";
				break;
			case 1: //Day in
				dayType.className="typeOfDaySelect dayInColor";
				dateInput.className="dateInput dayInColor";
				noteInput.className="noteInput dayInColor";
				dateDiv.className="col-sm-3 col-xs-4 dateDiv tableData tableDataRelative dayInColor";

				notSelectedDiv.style.visibility = "hidden";
				holidayDiv.style.visibility = "hidden";
				unpaidHolDiv.style.visibility = "hidden";
				sicknessDiv.style.visibility = "hidden";
				dayOffDiv.style.visibility = "hidden";
				absenceDiv.style.visibility = "hidden";
				familyLeaveDiv.style.visibility = "hidden";
				bereavementDiv.style.visibility = "hidden";
				dayInSickDiv.style.visibility = "hidden";
				enhancedHolidayDiv.style.visibility = "hidden";
				bereavementButtonDiv.style.visibility = "hidden";
				sicknessTextDiv.style.visibility = "hidden";
				dayInSickTextDiv.style.visibility = "hidden";
				familyLeaeveTextDiv.style.visibility = "hidden";
				compassionateDiv.style.visibility = "hidden";
				compassionateButtonDiv.style.visibility = "hidden";

				startHours.style.visibility = "visible";
				startMinutes.style.visibility = "visible";
				endHours.style.visibility = "visible";
				endMinutes.style.visibility = "visible";
				break;
			case 2: //Day off
				dayType.className="typeOfDaySelect dayOffColor";
				dateInput.className="dateInput dayOffColor";
				noteInput.className="noteInput dayOffColor";
				dateDiv.className="col-sm-3 col-xs-4 dateDiv tableData tableDataRelative dayOffColor";

				notSelectedDiv.style.visibility = "hidden";
				holidayDiv.style.visibility = "hidden";
				unpaidHolDiv.style.visibility = "hidden";
				sicknessDiv.style.visibility = "hidden";
				dayOffDiv.style.visibility = "visible";
				absenceDiv.style.visibility = "hidden";
				familyLeaveDiv.style.visibility = "hidden";
				bereavementDiv.style.visibility = "hidden";
				dayInSickDiv.style.visibility = "hidden";
				enhancedHolidayDiv.style.visibility = "hidden";
				bereavementButtonDiv.style.visibility = "hidden";
				sicknessTextDiv.style.visibility = "hidden";
				dayInSickTextDiv.style.visibility = "hidden";
				familyLeaeveTextDiv.style.visibility = "hidden";
				compassionateDiv.style.visibility = "hidden";
				compassionateButtonDiv.style.visibility = "hidden";

				startHours.style.visibility = "hidden";
				startMinutes.style.visibility = "hidden";
				endHours.style.visibility = "hidden";
				endMinutes.style.visibility = "hidden";
				break;
			case 3: //holiday
				dayType.className="typeOfDaySelect holidayColor";
				dateInput.className="dateInput holidayColor";
				noteInput.className="noteInput holidayColor";
				dateDiv.className="col-sm-3 col-xs-4 dateDiv tableData tableDataRelative holidayColor";

				notSelectedDiv.style.visibility = "hidden";
				//show or hide holiday div depending if there are unsocial hours
				if (unsHCheckCurrent === 1) {
					holidayDiv.style.visibility = "hidden";
					startHours.style.visibility = "visible";
					startMinutes.style.visibility = "visible";
					endHours.style.visibility = "visible";
					endMinutes.style.visibility = "visible";
				} else {
					holidayDiv.style.visibility = "visible";
					startHours.style.visibility = "hidden";
					startMinutes.style.visibility = "hidden";
					endHours.style.visibility = "hidden";
					endMinutes.style.visibility = "hidden";
				}

				unpaidHolDiv.style.visibility = "hidden";
				sicknessDiv.style.visibility = "hidden";
				dayOffDiv.style.visibility = "hidden";
				absenceDiv.style.visibility = "hidden";
				familyLeaveDiv.style.visibility = "hidden";
				bereavementDiv.style.visibility = "hidden";
				dayInSickDiv.style.visibility = "hidden";
				enhancedHolidayDiv.style.visibility = "visible";
				enhancedHolidayDiv.setAttribute("class","absoluteDiv absoluteDivSick holidayDiv holidayColor");
				bereavementButtonDiv.style.visibility = "hidden";
				sicknessTextDiv.style.visibility = "hidden";
				dayInSickTextDiv.style.visibility = "hidden";
				familyLeaeveTextDiv.style.visibility = "hidden";
				compassionateDiv.style.visibility = "hidden";
				compassionateButtonDiv.style.visibility = "hidden";
				break;
			case 4: // Half holiday half in
				dayType.className="typeOfDaySelect halfInHalfOffColor";
				dateInput.className="dateInput halfInHalfOffColor";
				noteInput.className="noteInput halfInHalfOffColor";
				dateDiv.className="col-sm-3 col-xs-4 dateDiv tableData tableDataRelative halfInHalfOffColor";

				notSelectedDiv.style.visibility = "hidden";
				holidayDiv.style.visibility = "hidden";
				unpaidHolDiv.style.visibility = "hidden";
				sicknessDiv.style.visibility = "hidden";
				dayOffDiv.style.visibility = "hidden";
				absenceDiv.style.visibility = "hidden";
				familyLeaveDiv.style.visibility = "hidden";
				bereavementDiv.style.visibility = "hidden";
				dayInSickDiv.style.visibility = "hidden";
				familyLeaeveTextDiv.style.visibility = "hidden";
				compassionateDiv.style.visibility = "hidden";
				compassionateButtonDiv.style.visibility = "hidden";

				enhancedHolidayDiv.style.visibility = "visible";
				enhancedHolidayDiv.setAttribute("class","absoluteDiv absoluteDivSick holidayDiv halfInHalfOffColor");
				bereavementButtonDiv.style.visibility = "hidden";
				sicknessTextDiv.style.visibility = "hidden";
				dayInSickTextDiv.style.visibility = "hidden";

				startHours.style.visibility = "visible";
				startMinutes.style.visibility = "visible";
				endHours.style.visibility = "visible";
				endMinutes.style.visibility = "visible";
				break;
			case 5: // Unpaid holiday
				dayType.className="typeOfDaySelect unpaidHolColor";
				dateInput.className="dateInput unpaidHolColor";
				noteInput.className="noteInput unpaidHolColor";
				dateDiv.className="col-sm-3 col-xs-4 dateDiv tableData tableDataRelative unpaidHolColor";

				notSelectedDiv.style.visibility = "hidden";
				holidayDiv.style.visibility = "hidden";
				unpaidHolDiv.style.visibility = "visible";
				sicknessDiv.style.visibility = "hidden";
				dayOffDiv.style.visibility = "hidden";
				absenceDiv.style.visibility = "hidden";
				familyLeaveDiv.style.visibility = "hidden";
				bereavementDiv.style.visibility = "hidden";
				dayInSickDiv.style.visibility = "hidden";
				enhancedHolidayDiv.style.visibility = "hidden";
				bereavementButtonDiv.style.visibility = "hidden";
				sicknessTextDiv.style.visibility = "hidden";
				dayInSickTextDiv.style.visibility = "hidden";
				familyLeaeveTextDiv.style.visibility = "hidden";
				compassionateDiv.style.visibility = "hidden";
				compassionateButtonDiv.style.visibility = "hidden";

				startHours.style.visibility = "hidden";
				startMinutes.style.visibility = "hidden";
				endHours.style.visibility = "hidden";
				endMinutes.style.visibility = "hidden";
				break;
			case 6: //Day in / sick
				dayType.className="typeOfDaySelect dayInSickColor";
				dateInput.className="dateInput dayInSickColor";
				noteInput.className="noteInput dayInSickColor";
				dateDiv.className="col-sm-3 col-xs-4 dateDiv tableData tableDataRelative dayInSickColor";

				notSelectedDiv.style.visibility = "hidden";
				holidayDiv.style.visibility = "hidden";
				unpaidHolDiv.style.visibility = "hidden";
				sicknessDiv.style.visibility = "hidden";
				dayOffDiv.style.visibility = "hidden";
				absenceDiv.style.visibility = "hidden";
				familyLeaveDiv.style.visibility = "hidden";
				bereavementDiv.style.visibility = "hidden";
				dayInSickDiv.style.visibility = "visible";
				enhancedHolidayDiv.style.visibility = "hidden";
				bereavementButtonDiv.style.visibility = "hidden";
				sicknessTextDiv.style.visibility = "hidden";
				dayInSickTextDiv.style.visibility = "hidden";
				familyLeaeveTextDiv.style.visibility = "hidden";
				compassionateDiv.style.visibility = "hidden";
				compassionateButtonDiv.style.visibility = "hidden";

				startHours.style.visibility = "visible";
				startMinutes.style.visibility = "visible";
				endHours.style.visibility = "visible";
				endMinutes.style.visibility = "visible";
				break;
			case 7: //Sick leave
				dayType.className="typeOfDaySelect sicknessColor";
				dateInput.className="dateInput sicknessColor";
				noteInput.className="noteInput sicknessColor";
				dateDiv.className="col-sm-3 col-xs-4 dateDiv tableData tableDataRelative sicknessColor";

				notSelectedDiv.style.visibility = "hidden";
				holidayDiv.style.visibility = "hidden";
				unpaidHolDiv.style.visibility = "hidden";
				sicknessDiv.style.visibility = "visible";
				dayOffDiv.style.visibility = "hidden";
				absenceDiv.style.visibility = "hidden";
				familyLeaveDiv.style.visibility = "hidden";
				bereavementDiv.style.visibility = "hidden";
				dayInSickDiv.style.visibility = "hidden";
				enhancedHolidayDiv.style.visibility = "hidden";
				bereavementButtonDiv.style.visibility = "hidden";

				dayInSickTextDiv.style.visibility = "hidden";
				familyLeaeveTextDiv.style.visibility = "hidden";
				compassionateDiv.style.visibility = "hidden";
				compassionateButtonDiv.style.visibility = "hidden";
				break;
			case 8: //Absence
				dayType.className="typeOfDaySelect absenceColor";
				dateInput.className="dateInput absenceColor";
				noteInput.className="noteInput absenceColor";
				dateDiv.className="col-sm-3 col-xs-4 dateDiv tableData tableDataRelative absenceColor";

				notSelectedDiv.style.visibility = "hidden";
				holidayDiv.style.visibility = "hidden";
				unpaidHolDiv.style.visibility = "hidden";
				sicknessDiv.style.visibility = "hidden";
				dayOffDiv.style.visibility = "hidden";
				absenceDiv.style.visibility = "visible";
				familyLeaveDiv.style.visibility = "hidden";
				bereavementDiv.style.visibility = "hidden";
				dayInSickDiv.style.visibility = "hidden";
				enhancedHolidayDiv.style.visibility = "hidden";
				bereavementButtonDiv.style.visibility = "hidden";
				sicknessTextDiv.style.visibility = "hidden";
				dayInSickTextDiv.style.visibility = "hidden";
				familyLeaeveTextDiv.style.visibility = "hidden";
				compassionateDiv.style.visibility = "hidden";
				compassionateButtonDiv.style.visibility = "hidden";

				startHours.style.visibility = "hidden";
				startMinutes.style.visibility = "hidden";
				endHours.style.visibility = "hidden";
				endMinutes.style.visibility = "hidden";
				break;
			case 9: //Parental leave
				dayType.className="typeOfDaySelect familyLeaveColor";
				dateInput.className="dateInput familyLeaveColor";
				noteInput.className="noteInput familyLeaveColor";
				dateDiv.className="col-sm-3 col-xs-4 dateDiv tableData tableDataRelative familyLeaveColor";

				notSelectedDiv.style.visibility = "hidden";
				holidayDiv.style.visibility = "hidden";
				unpaidHolDiv.style.visibility = "hidden";
				sicknessDiv.style.visibility = "hidden";
				dayOffDiv.style.visibility = "hidden";
				absenceDiv.style.visibility = "hidden";
				familyLeaveDiv.style.visibility = "visible";
				bereavementDiv.style.visibility = "hidden";
				dayInSickDiv.style.visibility = "hidden";
				enhancedHolidayDiv.style.visibility = "hidden";
				bereavementButtonDiv.style.visibility = "hidden";
				sicknessTextDiv.style.visibility = "hidden";
				dayInSickTextDiv.style.visibility = "hidden";
				familyLeaeveTextDiv.style.visibility = "hidden";
				compassionateDiv.style.visibility = "hidden";
				compassionateButtonDiv.style.visibility = "hidden";
				break;
			case 10: //Bereavement
				dayType.className="typeOfDaySelect bereavementColor";
				dateInput.className="dateInput bereavementColor";
				noteInput.className="noteInput bereavementColor";
				dateDiv.className="col-sm-3 col-xs-4 dateDiv tableData tableDataRelative bereavementColor";

				notSelectedDiv.style.visibility = "hidden";
				holidayDiv.style.visibility = "hidden";
				unpaidHolDiv.style.visibility = "hidden";
				sicknessDiv.style.visibility = "hidden";
				dayOffDiv.style.visibility = "hidden";
				absenceDiv.style.visibility = "hidden";
				familyLeaveDiv.style.visibility = "hidden";
				bereavementDiv.style.visibility = "hidden";
				dayInSickDiv.style.visibility = "hidden";
				enhancedHolidayDiv.style.visibility = "hidden";
				bereavementButtonDiv.style.visibility = "visible";
				sicknessTextDiv.style.visibility = "hidden";
				dayInSickTextDiv.style.visibility = "hidden";
				familyLeaeveTextDiv.style.visibility = "hidden";
				compassionateDiv.style.visibility = "hidden";
				compassionateButtonDiv.style.visibility = "hidden";
				break;
			case 11: //Compassionate
				dayType.className="typeOfDaySelect compassionateColor";
				dateInput.className="dateInput compassionateColor";
				noteInput.className="noteInput compassionateColor";
				dateDiv.className="col-sm-3 col-xs-4 dateDiv tableData tableDataRelative compassionateColor";

				notSelectedDiv.style.visibility = "hidden";
				holidayDiv.style.visibility = "hidden";
				unpaidHolDiv.style.visibility = "hidden";
				sicknessDiv.style.visibility = "hidden";
				dayOffDiv.style.visibility = "hidden";
				absenceDiv.style.visibility = "hidden";
				familyLeaveDiv.style.visibility = "hidden";
				bereavementDiv.style.visibility = "hidden";
				dayInSickDiv.style.visibility = "hidden";
				enhancedHolidayDiv.style.visibility = "hidden";
				bereavementButtonDiv.style.visibility = "hidden";
				sicknessTextDiv.style.visibility = "hidden";
				dayInSickTextDiv.style.visibility = "hidden";
				familyLeaeveTextDiv.style.visibility = "hidden";
				compassionateDiv.style.visibility = "hidden";
				compassionateButtonDiv.style.visibility = "visible";
				break;
			default: // same as not selected
				dayType.className="typeOfDaySelect notSelectedColor";
				dateInput.className="dateInput notSelectedColor";
				noteInput.className="noteInput notSelectedColor";
				dateDiv.className="col-sm-3 col-xs-4 dateDiv tableData tableDataRelative notSelectedColor";

				notSelectedDiv.style.visibility = "visible";
				holidayDiv.style.visibility = "hidden";
				unpaidHolDiv.style.visibility = "hidden";
				sicknessDiv.style.visibility = "hidden";
				dayOffDiv.style.visibility = "hidden";
				absenceDiv.style.visibility = "hidden";
				familyLeaveDiv.style.visibility = "hidden";
				bereavementDiv.style.visibility = "hidden";
				dayInSickDiv.style.visibility = "hidden";
				enhancedHolidayDiv.style.visibility = "hidden";
				bereavementButtonDiv.style.visibility = "hidden";
				sicknessTextDiv.style.visibility = "hidden";
				dayInSickTextDiv.style.visibility = "hidden";
				familyLeaeveTextDiv.style.visibility = "hidden";
				compassionateDiv.style.visibility = "hidden";
				compassionateButtonDiv.style.visibility = "hidden";

				startHours.style.visibility = "hidden";
				startMinutes.style.visibility = "hidden";
				endHours.style.visibility = "hidden";
				endMinutes.style.visibility = "hidden";
		}
		taxPeriodStart++;
	}
	//finishNextMorningBColor (weekStart);
}

//if a "paid", button is checked, this function shows start-finish time dropdown menus, if it
//is uncheck, it hides them.
const hideHoursSelect = (taxPeriodNumber) => {
	let taxPeriodStart = (taxPeriodNumber-1)*7+weekStart;
	for(b=0;b<7;b++) {
		//day type value
		let index = document.getElementById("dayType"+taxPeriodStart).options.selectedIndex;
		//start and finish time values
		let startHours = document.getElementById("startHours"+taxPeriodStart);
		let startMinutes = document.getElementById("startMinutes"+taxPeriodStart);
		let endHours = document.getElementById("endHours"+taxPeriodStart);
		let endMinutes = document.getElementById("endMinutes"+taxPeriodStart);
		//text divs
		let bereavementDiv = document.getElementById("bereavementDiv"+taxPeriodStart);
		let sicknessTextDiv = document.getElementById("sicknessTextDiv"+taxPeriodStart);
		let dayInSickTextDiv = document.getElementById("dayInSickTextDiv"+taxPeriodStart);
		let familyLeaeveTextDiv = document.getElementById("familyLeaeveTextDiv"+taxPeriodStart);
		let compassionateDiv = document.getElementById("compassionateDiv"+taxPeriodStart);
		//radio button values: paid or not paid.
		let sicknessCheck = document.getElementById("sicknessButton"+taxPeriodStart).checked;
		let dayInSickCheck = document.getElementById("dayInSickButton"+taxPeriodStart).checked;
		let bereavementCheck = document.getElementById("bereavementButton"+taxPeriodStart).checked;
		let familyCheck = document.getElementById("familyLeaveButton"+taxPeriodStart).checked;
		let compassionateCheck = document.getElementById("compassionateButton"+taxPeriodStart).checked;

		switch (index){
			case 7:
			if (unsHCheckCurrent === 1){
				if (sicknessCheck === false) {
					startHours.style.visibility = "hidden";
					startMinutes.style.visibility = "hidden";
					endHours.style.visibility = "hidden";
					endMinutes.style.visibility = "hidden";
					sicknessTextDiv.style.visibility = "visible";
				} else if (sicknessCheck === true){
					startHours.style.visibility = "visible";
					startMinutes.style.visibility = "visible";
					endHours.style.visibility = "visible";
					endMinutes.style.visibility = "visible";
					sicknessTextDiv.style.visibility = "hidden";
				} else {
					alert("Error");
				}
			}
			break;
			case 9:
			if (unsHCheckCurrent === 1){
				if (familyCheck === false){
					startHours.style.visibility = "hidden";
					startMinutes.style.visibility = "hidden";
					endHours.style.visibility = "hidden";
					endMinutes.style.visibility = "hidden";
					familyLeaeveTextDiv.style.visibility = "visible";
				} else if (familyCheck === true){
					startHours.style.visibility = "visible";
					startMinutes.style.visibility = "visible";
					endHours.style.visibility = "visible";
					endMinutes.style.visibility = "visible";
					familyLeaeveTextDiv.style.visibility = "hidden";
				} else {
					alert("Error");
				}
			}
			break;
			case 10:
			if (unsHCheckCurrent === 1){
				if (bereavementCheck === false){
					startHours.style.visibility = "hidden";
					startMinutes.style.visibility = "hidden";
					endHours.style.visibility = "hidden";
					endMinutes.style.visibility = "hidden";
					bereavementDiv.style.visibility = "visible"
				} else if (bereavementCheck === true){
					startHours.style.visibility = "visible";
					startMinutes.style.visibility = "visible";
					endHours.style.visibility = "visible";
					endMinutes.style.visibility = "visible";
					bereavementDiv.style.visibility = "hidden"
				} else {
					alert("Error");
				}
			}
			break;
			case 11:
			if (unsHCheckCurrent === 1){
				if (compassionateCheck === false){
					startHours.style.visibility = "hidden";
					startMinutes.style.visibility = "hidden";
					endHours.style.visibility = "hidden";
					endMinutes.style.visibility = "hidden";
					compassionateDiv.style.visibility = "visible"
				} else if (compassionateCheck === true){
					startHours.style.visibility = "visible";
					startMinutes.style.visibility = "visible";
					endHours.style.visibility = "visible";
					endMinutes.style.visibility = "visible";
					compassionateDiv.style.visibility = "hidden"
				} else {
					alert("Error");
				}
			}
			break;
			default:
				startHours.style.visibility = "visible";
				startMinutes.style.visibility = "visible";
				endHours.style.visibility = "visible";
				endMinutes.style.visibility = "visible";
				sicknessTextDiv.style.visibility = "hidden";
				familyLeaeveTextDiv.style.visibility = "hidden";
				bereavementDiv.style.visibility = "hidden";
				compassionateDiv.style.visibility = "hidden";
			break;
		}
	taxPeriodStart++;
	}
};
const start = () => {
	createFirstColumnElements(taxPeriodNumber, timeSinceEpoch);
	generateCalendar (taxPeriodNumber,timeSinceEpoch);
}
document.addEventListener("DOMContentLoaded",start,false);
