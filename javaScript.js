//GLOBAL VARIABLES------------------------------------------------------------------------------//

let timeSinceEpochOriginal = 1491004800000;
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let insideBoxColor = "#ffffcc";
//bank holiday arrays
//2017
let bankHolidayArray = [1492128000000, 1492387200000, 1493596800000, 1496016000000, 1503878400000, 1514160000000, 1514246400000];
//2018
bankHolidayArray.push(1514764800000, 1522368000000, 1522627200000, 1525651200000);
bankHolidayArray.push(1527465600000, 1535328000000, 1545696000000, 1545782400000);
//2019
bankHolidayArray.push(1546300800000, 1555632000000, 1555891200000, 1557100800000);
bankHolidayArray.push(1558915200000, 1566777600000, 1577232000000, 1577318400000);
//2020
bankHolidayArray.push(1577836800000, 1586476800000, 1586736000000, 1590364800000);
bankHolidayArray.push(1588550400000, 1598832000000, 1608854400000, 1608940800000, 1609113600000);
//2021
bankHolidayArray.push(1609459200000, 1617321600000, 1617580800000, 1620000000000, 1622419200000);
bankHolidayArray.push(1630281600000, 1640390400000, 1640476800000, 1640563200000, 1640649600000);

//calculate current tax period NUMBER
let currentDate = new Date();
let currentTime = currentDate.getTime() 					//mseconds since epoch
let mSecondsInWeek = 604800000;
let taxPeriodNumber = Math.ceil((currentTime - timeSinceEpochOriginal)/mSecondsInWeek);

//weekStart and unsHCheckCurrent will be arrays fiiled from back end
let weekStartArray = [];
let unsHCheck = [];

var timeSinceEpoch = timeSinceEpochOriginal + 604800000*(taxPeriodNumber-1)+0*86400000;
//END OF GLOBAL VAIRABLES------------------------------------------------------------------------//

//function that changes main table background colors and the visibility of its components
const changeSelectBackground =(taxPeriodNumber) => {
	let weekStart = weekStartArray[taxPeriodNumber];
	let taxPeriodStart = (taxPeriodNumber-1)*7+weekStart;
	for(let b=0;b<7;b++)	{
		let index = document.getElementById("dayType"+taxPeriodStart).options.selectedIndex;
		let dayType = document.getElementById("dayType"+taxPeriodStart);				//select meniu, where we select day type
		let dateInput = document.getElementById("dateInput"+taxPeriodStart); 				//date field
		let noteInput = document.getElementById("noteInput"+taxPeriodStart);
		let dateDiv = document.getElementById("dateDiv"+b);
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

		//using a classname method as it is easer to change the whole class name string
		//then keep adding or removing additional classes
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
				if (unsHCheck[taxPeriodNumber] === 1) {
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
	finishNextMorningBColor (taxPeriodNumber);
}

// a function that changes the colors of calendar day background depending on selection
//it also marks a current day on a calendar
const calendarBackgroundChangeOnSelect = (taxPeriodNumber) => {
	let weekStart = weekStartArray[taxPeriodNumber];
	let taxPeriodStart = (taxPeriodNumber-1)*7+weekStart;

	let currentDate = new Date();
	let currentTime = currentDate.getTime();
	let timeSinceEpochCurrentDay = timeSinceEpoch;
	for(let i=21;i<28;i++)	{
		let index = document.getElementById("dayType"+taxPeriodStart).options.selectedIndex;
		let dayDiv = document.getElementById("dayDiv"+i);
		switch(index){
			case 0:
				if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))	{
					dayDiv.setAttribute("class", "dayDiv notSelectedColor currentDay");
				}	else {
					dayDiv.className="dayDiv notSelectedColor";
				}
				break;
			case 1:
				if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))	{
					dayDiv.setAttribute("class", "dayDiv dayInColor currentDay");
				}	else {
					dayDiv.className="dayDiv dayInColor";
				}
				break;
			case 2:
				if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))	{
					dayDiv.setAttribute("class", "dayDiv dayOffColor currentDay");
				}	else {
					dayDiv.className="dayDiv dayOffColor";
				}
				break;
			case 3:
				if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))	{
					dayDiv.setAttribute("class", "dayDiv holidayColor currentDay");
				}	else {
					dayDiv.className="dayDiv holidayColor";
				}
				break;
			case 4:
				if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))	{
					dayDiv.setAttribute("class", "dayDiv halfInHalfOffColor currentDay");
				}	else {
					dayDiv.className="dayDiv halfInHalfOffColor";
				}
				break;
			case 5:
				if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))	{
					dayDiv.setAttribute("class", "dayDiv unpaidHolColor currentDay");
				}	else {
					dayDiv.className="dayDiv unpaidHolColor";
				}
				break;
			case 6:
				if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))	{
					dayDiv.setAttribute("class", "dayDiv dayInSickColor currentDay");
				}	else	{
					dayDiv.className="dayDiv dayInSickColor";
				}
				break;
			case 7:
				if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000)) {
					dayDiv.setAttribute("class", "dayDiv sicknessColor currentDay");
				}	else {
					dayDiv.className="dayDiv sicknessColor";
				}
				break;
			case 8:
				if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))	{
					dayDiv.setAttribute("class", "dayDiv absenceColor currentDay");
				}	else {
					dayDiv.className="dayDiv absenceColor";
				}
				break;
			case 9:
				if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))	{
					dayDiv.setAttribute("class", "dayDiv familyLeaveColor currentDay");
				}	else {
					dayDiv.className="dayDiv familyLeaveColor";
				}
				break;
			case 10:
				if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))	{
					dayDiv.setAttribute("class", "dayDiv bereavementColor currentDay");
				}	else {
					dayDiv.className="dayDiv bereavementColor";
				}
				break;
			case 11:
				if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))	{
					dayDiv.setAttribute("class", "dayDiv compassionateColor currentDay");
				}	else {
					dayDiv.className="dayDiv compassionateColor";
				}
				break;
			default:
				dayDiv.className = "dayDiv notSelectedColor";
		}
		taxPeriodStart++;
		timeSinceEpochCurrentDay += 86400000;
	}
}
//function that marks bank holiday inside main table
const markBankHoliday=(taxPeriodNumber) => {
	let weekStart = weekStartArray[taxPeriodNumber];
	let taxPeriodStart = (taxPeriodNumber-1)*7+weekStart;
	timeSinceEpochMBH = timeSinceEpochOriginal+(taxPeriodNumber-1)*604800000+weekStart*86400000;
	for(let b=0;b<7;b++) {
		let dateInput = document.getElementById("dateInput"+taxPeriodStart);
		for (let i=0; i<bankHolidayArray.length; i++)	{
			if ( timeSinceEpochMBH !== bankHolidayArray[i]) {continue;} dateInput.style.color = "red"; dateInput.style.fontWeight = "bold";
		}
		taxPeriodStart++;
		timeSinceEpochMBH+=86400000;
	}
}
//marks current day inside the main table
const markCurrentDay = (taxPeriodNumber) => {
	let weekStart = weekStartArray[taxPeriodNumber];
	let taxPeriodStart = (taxPeriodNumber-1)*7+weekStart;
	let currentDate = new Date();
	let currentYear = currentDate.getFullYear();
	let currentMonth = currentDate.getMonth()+1; //be 1 gaunasi invalid date
	let currentDay = currentDate.getDate();

	let currentDayYMD = currentYear+'/'+currentMonth+'/'+currentDay;
	let currentDateMidnight = new Date(currentDayYMD);
	let currentDateMidnightMilisecondsSinceEpoch = currentDateMidnight.getTime();

	for(let b=0;b<7;b++) {
		let dateInputHiddenValue = document.getElementById("dateInputHidden"+taxPeriodStart).value;
		let dateInput = document.getElementById("dateInput"+taxPeriodStart);
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
		let dayInSickDiv = document.getElementById("dayInSickDiv"+taxPeriodStart);
		let enhancedHolidayDiv = document.getElementById("enhancedHolidayDiv"+taxPeriodStart)
		let unpaidHolDiv = document.getElementById("unpaidHolDiv"+taxPeriodStart);
		let compassionateDiv = document.getElementById("compassionateDiv"+taxPeriodStart);

		let sicknessTextDiv = document.getElementById("sicknessTextDiv"+taxPeriodStart);
		let dayInSickTextDiv = document.getElementById("dayInSickTextDiv"+taxPeriodStart);
		let familyLeaeveTextDiv = document.getElementById("familyLeaeveTextDiv"+taxPeriodStart);
		let compassionateButtonDiv = document.getElementById("compassionateButtonDiv"+taxPeriodStart);

		//pchange date format, to make it work on ios
		let dateInputHiddenSplit =  dateInputHiddenValue.split("-");
		let dateInputHiddenFormatted = dateInputHiddenSplit[0]+'/'+dateInputHiddenSplit[1]+'/'+dateInputHiddenSplit[2];

		let submittedDate = new Date(dateInputHiddenFormatted);
		let miliseconds = submittedDate.getTime();
		if (miliseconds == currentDateMidnightMilisecondsSinceEpoch) {
			dateInput.className+=" currentDateInput";
			startHours.className +=" currentStartTime";
			startMinutes.className +=" currentStartTime";
			endHours.className +=" currentStartTime";
			endMinutes.className +=" currentStartTime";

			notSelectedDiv.className +=" currentDateInput";
			holidayDiv.className +=" currentDateInput";
			unpaidHolDiv.className +=" currentDateInput";
			sicknessDiv.className +=" currentDateInput";
			dayOffDiv.className +=" currentDateInput";
			absenceDiv.className +=" currentDateInput";
			familyLeaveDiv.className +=" currentDateInput";
			dayInSickDiv.className +=" currentDateInput";
			enhancedHolidayDiv.className +=" currentDateInput";
			sicknessTextDiv.className +=" currentDateInput";
			dayInSickTextDiv.className +=" currentDateInput";
			familyLeaeveTextDiv.className +=" currentDateInput";
			compassionateDiv.className +=" currentDateInput";
			compassionateButtonDiv.className +=" currentDateInput";
		}
		taxPeriodStart++
	}
	markBankHoliday(taxPeriodNumber);
}
//function that marks bank holidays inside calendar;
//later it will hve to be chnaged to accept more parameters for 3,6,12 month calendars creation!!!
const bankHolidayFilter = (timeSinceEpoch) => {
	let mSecondsInWeek = 604800000;
 	timeSinceEpoch = timeSinceEpoch - mSecondsInWeek*3;
	let id = 0;
	for (let st=0;st<7;st++) {
		for(let stt=0;stt<7;stt++) {
			dayDiv = document.getElementById("dayDiv"+id);
			if ( timeSinceEpoch === bankHolidayArray[0]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";} // april 14 2017
			else if(timeSinceEpoch === bankHolidayArray[1])	{dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	// april 17 2017
			else if(timeSinceEpoch === bankHolidayArray[2])	{dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	// may 1 2017
			else if(timeSinceEpoch === bankHolidayArray[3])	{dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	// may 29 2017
			else if(timeSinceEpoch === bankHolidayArray[4])	{dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	// august 28 2017
			else if(timeSinceEpoch === bankHolidayArray[5])	{dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	// december 25 2017
			else if(timeSinceEpoch === bankHolidayArray[6])	{dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	// december 26 2017
			else if(timeSinceEpoch === bankHolidayArray[7])	{dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	// January 01 2018
			else if(timeSinceEpoch === bankHolidayArray[8])	{dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	// March 30 2018
			else if(timeSinceEpoch === bankHolidayArray[9])	{dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[10]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[11]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[12]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[13]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[14]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[15]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[16]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[17]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[18]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[19]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[20]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[21]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[22]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[23]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[24]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[25]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[26]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[27]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[28]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[29]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[30]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[31]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[32]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[33]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[34]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[35]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[36]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[37]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[38]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[39]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[40]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[41]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else {dayDiv.style.color = "black";  dayDiv.style.fontWeight = "normal";}
			timeSinceEpoch+=86400000;
			id++;
		}
	}
}
//chnages the background of hours select, in case you finish next day then you started
const finishNextMorningBColor= (taxPeriodNumber) => {
	let weekStart = weekStartArray[taxPeriodNumber];
	let taxPeriodStart = (taxPeriodNumber-1)*7+weekStart;
	for(let b=0;b<7;b++) {
		let index = document.getElementById("endHours"+taxPeriodStart).options.selectedIndex;
		let endHours = document.getElementById("endHours"+taxPeriodStart);
		let endMinutes = document.getElementById("endMinutes"+taxPeriodStart);

		if (index>=24) {
			endHours.setAttribute("class", "hourMinuteSelect nextMorningSelect");
			endMinutes.setAttribute("class", "hourMinuteSelect nextMorningSelect");
		}	else {
			endHours.className="hourMinuteSelect endTimeColor";
			endMinutes.className="hourMinuteSelect endTimeColor";
		}
		taxPeriodStart++;
	}
	markCurrentDay (taxPeriodNumber); // if i do not add this functio hear, the green color of the current day dissapears after on change event
}
//if a "paid", button is checked, this function shows start-finish time dropdown menus, if it
//is uncheck, it hides them.
const hideHoursSelect = (taxPeriodNumber) => {
	let weekStart = weekStartArray[taxPeriodNumber];
	let unsHCheckCurrent = Number(unsHCheck[taxPeriodNumber]);
	let taxPeriodStart = (taxPeriodNumber-1)*7+weekStart;
	for(let b=0;b<7;b++) {
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
				}	else {
					startHours.style.visibility = "hidden";
					startMinutes.style.visibility = "hidden";
					endHours.style.visibility = "hidden";
					endMinutes.style.visibility = "hidden";

					sicknessTextDiv.style.visibility = "visible";
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
				}	else {
					startHours.style.visibility = "hidden";
					startMinutes.style.visibility = "hidden";
					endHours.style.visibility = "hidden";
					endMinutes.style.visibility = "hidden";
					familyLeaeveTextDiv.style.visibility = "visible";
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
				}	else {
					startHours.style.visibility = "hidden";
					startMinutes.style.visibility = "hidden";
					endHours.style.visibility = "hidden";
					endMinutes.style.visibility = "hidden";
					bereavementDiv.style.visibility = "visible";
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
				}	else {
					startHours.style.visibility = "hidden";
					startMinutes.style.visibility = "hidden";
					endHours.style.visibility = "hidden";
					endMinutes.style.visibility = "hidden";
					compassionateDiv.style.visibility = "visible";
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
		}
	taxPeriodStart++;
	}
};
//function that creates all main table elements
const createTableElements = (taxPeriodNumber, timeSinceEpoch) => {
	let weekStart = weekStartArray[taxPeriodNumber];
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

	for (let f=0;f<7;f++)	{
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
		for(let k=0; k<dayOptionsArray.length; k++)	{
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
			for(let nmh=0;nmh<=11;nmh++)	{
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
	dayType.onchange = function (){
		changeSelectBackground(taxPeriodNumber),calendarBackgroundChangeOnSelect(taxPeriodNumber),
		hideHoursSelect(taxPeriodNumber);
	 }
	endHours.onchange = function(){finishNextMorningBColor(taxPeriodNumber);};
	sicknessButton.onchange = function (){hideHoursSelect(taxPeriodNumber);}
	dayInSickButton.onchange = function (){hideHoursSelect(taxPeriodNumber);}
	bereavementButton.onchange = function (){hideHoursSelect(taxPeriodNumber);}
	compassionateButton.onchange = function(){hideHoursSelect(taxPeriodNumber);}
	familyLeaveButton.onchange = function(){hideHoursSelect(taxPeriodNumber);}
	}
	markCurrentDay (taxPeriodNumber);
}

const generateCalendar = (taxPeriodNumber,timeSinceEpoch) => {
	let calendarTable = document.getElementById("calendar");
	let calendarCaption = document.getElementById("calendarCaption");

	let timeSinceEpochForDay = timeSinceEpoch;
	let mSecondsInWeek = 604800000;
	timeSinceEpoch -= mSecondsInWeek*3;

	let id = 0;
	for(let tr=0;tr<7;tr++)	{
		//iterpiami dienu pavadinimai i kalendorius
		let dayName = document.getElementById("dayName"+tr);
		let startDay = new Date(timeSinceEpochForDay);
		let dy = startDay.getDay();
		dy = days[dy];
		dayName.innerHTML = dy;
		timeSinceEpochForDay += 86400000;

		let startDate = new Date(timeSinceEpoch);
		let mm = startDate.getMonth();
		mm = months[mm];
		let calendarRow = document.getElementById("calendarRow"+tr);

		//iterpiami menesiu pavadinimai i kalendoriu
		let monthDiv = document.createElement("div");
		monthDiv.setAttribute("class", "col-xs-calDN col-sm-calDN dayDiv monthDiv");
		monthDiv.setAttribute("id", "monthDiv"+tr);
		let monthName = document.createTextNode(mm);
		monthDiv.appendChild(monthName);
		calendarRow.appendChild(monthDiv);

		if (tr==3) {
			let currentWeekFilter = document.createElement("div");
			currentWeekFilter.setAttribute("class", "currentWeekFilter");
			calendarRow.appendChild(currentWeekFilter);
		}

		let startDatecalendarCaption = new Date(timeSinceEpoch-86400000*21);
		let yy = startDatecalendarCaption.getFullYear();
		calendarCaption.innerHTML = "Calendar "+yy;

		//cd = create div
		for(let cd=0;cd<7;cd++) 	{
			//iterpiami dienu numeriai i kalendoriu
			let startDate = new Date(timeSinceEpoch);
			let dd = startDate.getDate();
			if (dd<10){dd="0"+dd;}
			let dayDiv = document.createElement("div");
			dayDiv.setAttribute("class", "col-xs-calD col-sm-calD dayDiv");
			dayDiv.setAttribute("id", "dayDiv"+id);
			let dayNumber = document.createTextNode(dd);
			dayDiv.appendChild(dayNumber);
			calendarRow.appendChild(dayDiv);

			//paryskiname esama diena kalendoriuje
			let currentDate = new Date();
			let currentTime = currentDate.getTime()

			if (currentTime>timeSinceEpoch && currentTime <(timeSinceEpoch + 86400000)) 	{
				dayDiv.setAttribute("class", "dayDiv currentDay");
			}	else 	{
				dayDiv.setAttribute("class", "dayDiv");
			}
			timeSinceEpoch += 86400000;

			id++;
		}
	}
	//before calling function bankHolidayFilter we need to deduct 4 weeks worth of miliseconds
	//as they were added to timeSinceEpoch variable inside the for loop
	timeSinceEpoch -= mSecondsInWeek*4;
	bankHolidayFilter(timeSinceEpoch);
}
const createPayoutButtons = (taxPeriodNumber) => {
	let payChristmasSavings = document.getElementById("payChristmasSavings");

	payChristmasSavings.innerHTML = " "; //istriname esama elementa

	let payChristmasSavingsCheck = document.createElement("input");
	payChristmasSavingsCheck.setAttribute("type", "checkbox");
	payChristmasSavingsCheck.setAttribute("name", "payChristmasSavingsCheck"+taxPeriodNumber);
	payChristmasSavingsCheck.setAttribute("id", "payChristmasSavingsCheck"+taxPeriodNumber);
	payChristmasSavings.appendChild(payChristmasSavingsCheck);
	let payChristmasSavingsCheckText = document.createTextNode(" Pay Christmas Savings");
	payChristmasSavings.appendChild(payChristmasSavingsCheckText);

	let paySummerSavings = document.getElementById("paySummerSavings");
	paySummerSavings.innerHTML = " ";

	let paySummerSavingsCheck = document.createElement("input");
	paySummerSavingsCheck.setAttribute("type", "checkbox");
	paySummerSavingsCheck.setAttribute("name", "paySummerSavingsCheck"+taxPeriodNumber);
	paySummerSavingsCheck.setAttribute("id", "paySummerSavingsCheck"+taxPeriodNumber);
	paySummerSavings.appendChild(paySummerSavingsCheck);
	var paySummerSavingsCheckText = document.createTextNode(" Pay Summer Savings");
	paySummerSavings.appendChild(paySummerSavingsCheckText);
}
//a jquery function that trigger error modal after recieving apropriate values
const triggerErrorModal = (errors,val) => {
  val = val;

  let title = "Error occurred!";
  let bodyText = errors;
  if (val){
    $('#errorModal').modal('show');
    $('#errorModalLabel').text(title);
    $('#errorModalBody').html(bodyText);
  }
}

//----------------------FORM VALIDATION FUNCTIONS------------------------------------------------------//
//function that prevents from sending extra payments data in case user checks checkboxes
const deselectValuesValidateForm2 = (taxPeriodNumber) => {
	weekStart = Number(weekStartArray[taxPeriodNumber]);
	let taxPeriodStart = (taxPeriodNumber-1)*7+weekStart;
	for(let b=0;b<7;b++)	{
		let index = document.getElementById("dayType"+taxPeriodStart).options.selectedIndex;

		let startHours = document.getElementById("startHours"+taxPeriodStart);
		let startMinutes = document.getElementById("startMinutes"+taxPeriodStart);
		let endHours = document.getElementById("endHours"+taxPeriodStart);
		let endMinutes = document.getElementById("endMinutes"+taxPeriodStart);

		let sickness = document.getElementById("sicknessButton"+taxPeriodStart);
		let familyLeave = document.getElementById("familyLeaveButton"+taxPeriodStart);
		let dayInSick = document.getElementById("dayInSickButton"+taxPeriodStart);
		let bereavement = document.getElementById("bereavementButton"+taxPeriodStart);
		let compassionate = document.getElementById("compassionateButton"+taxPeriodStart);
		let enHoliday = document.getElementById("enhancedHolidayButton"+taxPeriodStart);

		//Sickness
		if (index === 7 && sickness.checked === false )	{
			startHours.options.selectedIndex = "0";
			startMinutes.options.selectedIndex = "0";
			endHours.options.selectedIndex = "0";
			endMinutes.options.selectedIndex = "0";
		}	else if (index === 9 && familyLeave.checked === false)	{ //family leave
			startHours.options.selectedIndex = "0";
			startMinutes.options.selectedIndex = "0";
			endHours.options.selectedIndex = "0";
			endMinutes.options.selectedIndex = "0";
		}	else if (index === 10 && bereavement.checked === false)	{	//bereavement Leave
			startHours.options.selectedIndex = "0";
			startMinutes.options.selectedIndex = "0";
			endHours.options.selectedIndex = "0";
			endMinutes.options.selectedIndex = "0";
		}	else if (index === 11 && compassionate.checked === false)	{	//compassionate Leave
			startHours.options.selectedIndex = "0";
			startMinutes.options.selectedIndex = "0";
			endHours.options.selectedIndex = "0";
			endMinutes.options.selectedIndex = "0";
		}
		taxPeriodStart++;
	}
	//once the values have been checked, send them to the server
	postData(taxPeriodNumber);
}

//another validation function
const deselectValuesValidateForm = (taxPeriodNumber) => {
	taxPeriodNumber += (counter+counter2);
	weekStart = Number(weekStartArray[taxPeriodNumber]);
	unsHCheckCurrent = Number(unsHCheck[taxPeriodNumber]);

	var taxPeriodStart = (taxPeriodNumber-1)*7+weekStart;
	for(let b=0;b<7;b++){
		let index = document.getElementById("dayType"+taxPeriodStart).options.selectedIndex;

		let startHours = document.getElementById("startHours"+taxPeriodStart);
		let startMinutes = document.getElementById("startMinutes"+taxPeriodStart);
		let endHours = document.getElementById("endHours"+taxPeriodStart);
		let endMinutes = document.getElementById("endMinutes"+taxPeriodStart);

		let sickness = document.getElementById("sicknessButton"+taxPeriodStart);
		let familyLeave = document.getElementById("familyLeaveButton"+taxPeriodStart);
		let dayInSick = document.getElementById("dayInSickButton"+taxPeriodStart);
		let bereavement = document.getElementById("bereavementButton"+taxPeriodStart);
		let compassionate = document.getElementById("compassionateButton"+taxPeriodStart);
		let enHoliday = document.getElementById("enhancedHolidayButton"+taxPeriodStart);
		//deselecting values
		if (index === 0) {			//Not Selected
			startHours.options.selectedIndex = "0";
			startMinutes.options.selectedIndex = "0";
			endHours.options.selectedIndex = "0";
			endMinutes.options.selectedIndex = "0";

			sickness.checked = false;
			familyLeave.checked = false;
			dayInSick.checked = false;
			bereavement.checked = false;
			compassionate.checked = false;
			enHoliday.checked = false;
		}	else if (index === 1)	{	//Day In
			sickness.checked = false;
			familyLeave.checked = false;
			dayInSick.checked = false;
			bereavement.checked = false;
			compassionate.checked = false;
			enHoliday.checked = false;
		}	else if (index === 2){		//Day Off
			startHours.options.selectedIndex = "0";
			startMinutes.options.selectedIndex = "0";
			endHours.options.selectedIndex = "0";
			endMinutes.options.selectedIndex = "0";

			sickness.checked = false;
			familyLeave.checked = false;
			dayInSick.checked = false;
			bereavement.checked = false;
			compassionate.checked = false;
			enHoliday.checked = false;
		}	else if (index === 3) {		//Holiday
				if (unsHCheckCurrent === 1)	{
					sickness.checked = false;
					dayInSick.checked = false;
					bereavement.checked = false;
					compassionate.checked = false;
					familyLeave.checked = false;
				}	else {
					//jei nera uns valandu nuimame indexus
					startHours.options.selectedIndex = "0";
					startMinutes.options.selectedIndex = "0";
					endHours.options.selectedIndex = "0";
					endMinutes.options.selectedIndex = "0";

					sickness.checked = false;
					dayInSick.checked = false;
					bereavement.checked = false;
					compassionate.checked = false;
					familyLeave.checked = false;
				}
		}	else if (index === 4){		//Half In/Holl
			sickness.checked = false;
			dayInSick.checked = false;
			bereavement.checked = false;
			compassionate.checked = false;
			familyLeave.checked = false;
		}	else if (index === 5) {		//unpaid hol
			startHours.options.selectedIndex = "0";
			startMinutes.options.selectedIndex = "0";
			endHours.options.selectedIndex = "0";
			endMinutes.options.selectedIndex = "0";

			sickness.checked = false;
			familyLeave.checked = false;
			dayInSick.checked = false;
			bereavement.checked = false;
			compassionate.checked = false;
			enHoliday.checked = false;
		}	else if (index === 6) {		//Day In / Sick
			sickness.checked = false;
			enHoliday.checked = false;
		}	else if (index === 7)	{	//Sickness
			familyLeave.checked = false;
			dayInSick.checked = false;
			bereavement.checked = false;
			compassionate.checked = false;
			enHoliday.checked = false;
		}	else if (index === 8)	{	//Abscence
			startHours.options.selectedIndex = "0";
			startMinutes.options.selectedIndex = "0";
			endHours.options.selectedIndex = "0";
			endMinutes.options.selectedIndex = "0";

			sickness.checked = false;
			familyLeave.checked = false;
			dayInSick.checked = false;
			bereavement.checked = false;
			compassionate.checked = false;
			enHoliday.checked = false;
		}	else if (index === 9){		//Family Leave
			sickness.checked = false;
			dayInSick.checked = false;
			bereavement.checked = false;
			compassionate.checked = false;
			enHoliday.checked = false;
		}	else if (index === 10){		//Bereavement
			sickness.checked = false;
			familyLeave.checked = false;
			dayInSick.checked = false;
			compassionate.checked = false;
			enHoliday.checked = false;
		}	else if (index === 11){		//Compassionate
			sickness.checked = false;
			familyLeave.checked = false;
			dayInSick.checked = false;
			bereavement.checked = false;
			enHoliday.checked = false;
		}
		// form validation
		let startHourIndex = document.getElementById("startHours"+taxPeriodStart).options.selectedIndex;
		let endHourIndex = document.getElementById("endHours"+taxPeriodStart).options.selectedIndex;

		let submitSuccess = document.getElementById("submitSuccessMain");
		if (startHourIndex>endHourIndex)	{
			let errorText = '<p class="textIndent">It appears that in one of the main table rows your provided ';
			errorText +='Start time is greater then Finish time.</p>';
			errorText +='<p class="textIndent">The improper Finish and start times are marked accordingly in the main table.</p>';
			errorText +='<p class="textIndent">In case you finish work the following morning, please select hour values';
			errorText +=' in the dropdown menu that appear below 23.</p>';
			errorText +='<p class="textIndent">Once you select hours properly, press Generate button again!</p>';
			errorText +='<p class="textIndent">Thank You!</p>';
			triggerErrorModal(errorText, true);
			submitSuccess.removeAttribute("class");
			submitSuccess.setAttribute("class", 'col-sm-10 col-xs-10 responseDiv errorStyle');
			submitSuccess.innerHTML = 'Error occurred!';
			endHours.setAttribute("class", "invalidForm hourMinuteSelect");
			endMinutes.setAttribute("class", "invalidForm hourMinuteSelect");
			return false;
		}	else {
			submitSuccess.removeAttribute("class");
			submitSuccess.setAttribute("class", "col-sm-10 col-xs-10 responseDiv");
		}
		taxPeriodStart++;
	}
	deselectValuesValidateForm2(taxPeriodNumber);
}
//-------------------------END OF FORM VALIDATION FUNCTIONS------------------------------------------//

//----------------------------GET FORM VALUES FUNCTION---------------------------------------------//
const getFormValues = (taxPeriodNumber)=>{
	let str = '';

	let timeSinceEpochValue = document.getElementById("timeSinceEpochInput").value;
	str += 'taxPeriodNumberName'+'='+taxPeriodNumber+'&'+'timeSinceEpoch'+'='+timeSinceEpochValue+'&';

	let payChristmasSavingsCheckName = "payChristmasSavingsCheck"+taxPeriodNumber;
	let payChristmasSavingsCheckValue = document.getElementById("payChristmasSavingsCheck"+taxPeriodNumber).checked;

	let paySummerSavingsCheckName = "paySummerSavingsCheck"+taxPeriodNumber;
	let paySummerSavingsCheckValue = document.getElementById("paySummerSavingsCheck"+taxPeriodNumber).checked;

	str += payChristmasSavingsCheckName+'='+payChristmasSavingsCheckValue+'&'+paySummerSavingsCheckName+'='+paySummerSavingsCheckValue+'&';

	let taxPeriodStart = (taxPeriodNumber-1)*7+weekStart;
	let submitSuccess = document.getElementById("submitSuccessMain");
	for(let b=0;b<7;b++)	{
		//day type
		let dayTypeName = "dayType"+taxPeriodStart
		let dayTypeValue = document.getElementById("dayType"+taxPeriodStart).options.selectedIndex;
		//start time
		let startHoursName = "startHours"+taxPeriodStart;
		let startHoursValue = document.getElementById("startHours"+taxPeriodStart).value;
		let startMinutesName = "startMinutes"+taxPeriodStart;
		let startMinutesValue = document.getElementById("startMinutes"+taxPeriodStart).value;
		//end time
		let endHoursName = "endHours"+taxPeriodStart;
		let endHoursValue = document.getElementById("endHours"+taxPeriodStart).options.selectedIndex;//imame ne value o index, del naktines pamainaos valandu skaiciavimo
		let endMinutesName = "endMinutes"+taxPeriodStart;
		let endMinutesValue = document.getElementById("endMinutes"+taxPeriodStart).value;
		//sicknes
		let sicknessButton = "sicknessButton"+taxPeriodStart;
		let sicknessButtonValue = document.getElementById("sicknessButton"+taxPeriodStart).checked;
		//day in sickness
		let dayInSickButton = "dayInSickButton"+taxPeriodStart;
		let dayInSickButtonValue = document.getElementById("dayInSickButton"+taxPeriodStart).checked;
		let bereavementButton = "bereavementButton"+taxPeriodStart;
		let bereavementButtonValue = document.getElementById("bereavementButton"+taxPeriodStart).checked;
		let compassionateButton = "compassionateButton"+taxPeriodStart;
		let compassionateButtonValue = document.getElementById("compassionateButton"+taxPeriodStart).checked;
		//enhanced holidays
		let enHolButon = "enHolButon"+taxPeriodStart;
		let enHolButonValue = document.getElementById("enhancedHolidayButton"+taxPeriodStart).checked;
		//note values
		let noteInput = "noteInput"+taxPeriodStart;
		let noteInputValue = document.getElementById("noteInput"+taxPeriodStart).value;
		//family leave
		let familyLeaveButton = "familyLeaveButton"+taxPeriodStart;
		let familyLeaveButtonValue = document.getElementById("familyLeaveButton"+taxPeriodStart).checked;
		// date values
		let dateInputHidden ='dateInputHidden' +taxPeriodStart;
		let dateInputHiddenValue = document.getElementById("dateInputHidden"+taxPeriodStart).value;
		//----------------------------------------------------------date checker--------------
		let flickerbookStartDate = new Date("2017-03-31");
		let flickerbookEndDate = new Date("2021-03-29");
		let submmitedDate = new Date(dateInputHiddenValue);
			if( submmitedDate < flickerbookStartDate || submmitedDate>flickerbookEndDate )	{
				submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
				submitSuccess.innerHTML += 'Submitted Date Not allowed, check your devices date settings.<br>';
				submitSuccess.removeAttribute("class");
				submitSuccess.setAttribute("class", "submitErrorMain");
				return false;
			}	else{
				//submitSuccess.removeAttribute("class");
				//submitSuccess.setAttribute("class", "submitSuccessMain");
		}
			//---------------------------------------------------------------------------------------

		str += dateInputHidden+'='+dateInputHiddenValue+'&'+dayTypeName+'='+dayTypeValue+'&'+startHoursName+'='+startHoursValue+'&'+startMinutesName+'='+startMinutesValue+'&'+endHoursName+'='+endHoursValue+'&'+endMinutesName+'='+endMinutesValue+'&'+sicknessButton+'='+sicknessButtonValue+'&'+enHolButon+'='+enHolButonValue+'&'+dayInSickButton+'='+dayInSickButtonValue+'&'+noteInput+'='+noteInputValue+'&'+familyLeaveButton+'='+familyLeaveButtonValue+'&'+bereavementButton+'='+bereavementButtonValue+'&'+compassionateButton+'='+compassionateButtonValue+'&';

		taxPeriodStart++
	}
	//taxPeriodNumber checker
	if (taxPeriodNumber <0 || taxPeriodNumber>156)	{
		submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
		submitSuccess.innerHTML += 'Tax Period no. not allowed, check your date settings on your device.<br>';
		submitSuccess.removeAttribute("class");
		submitSuccess.setAttribute("class", "submitErrorMain");
		return false;
	}	else {
		//submitSuccess.removeAttribute("class");
		//submitSuccess.setAttribute("class", "submitSuccessMain");
		return str;
	}
}
//-----------------------------------------------------------------------------------------------------------//
const loadResponseData = (response, taxPeriodNumber, largerObject = false) => {
	//this function will need an additional parameter, depending from where it is called
	//if it is called from load indexes function, the response object will be larger, as more data needs to be loaded,
	//but if its called from postdata, then that object will not have additional parameters and that my cause errors.
	//destructuring object
	let {summerSavingsPaymentCollected, christmasSavingsPaymentCollected, saturdayHours, NISum} = response;
	let {sundayHours, saturdayExtraPay, sundayExtraPay, saturdayExtraRate, sundayExtraRate} = response;
	let {basicHoursPay, unsocial_prem, unsocial_prem_hol, unsocial_prem_sick, unsocial_prem_family } = response;
	let {OT1Pay, OT2Pay, enhancedHolidayPay, holidayPay, sicknessPay, familyPay, bankHolidayHoursPay} = response;
	let {bankHolidayClockInBonus, payBack, additionalPayment, christmasSavingsPayment, totalGrossPayments} = response;
	let {taxAmount, NIAmount, pensionAmount, unionDeduction, christmasSavingsDeduction, totalDeductions} = response;
	let {otherDeduction, netPay, unsocial_prem_rate, hourlyRate, overtime1_rate, otherDeductionName, enhancedHolidayRate} = response;
	let {additionalPaymentName, overtime2_rate, unsocial_prem_units, basic_hours, unsocial_prem_hol_units} = response;
	let {unsocial_prem_sick_units, unsocial_prem_family_units, overtime1_units, overtime2_units, holiday_units} = response;
	let {enhanced_holiday_units, sick_units, family_units, bhol_units, unsocial_prem_bereavement, ber_units} = response;
	let {bereavementPay, uns_ber_units, unsocial_prem_compassionate, comp_units, compassionatePay, uns_comp_units} = response;
	let {pensionBeforeTax, pensionRate, pensionRateEmp, pensionAmountEmp, companyLoan, studentLoanDeduction} = response;
	let {summerSavingsDeduction, summerSavingsPayment, SSP} = response;
	let {SPP, bHolPayTimes, additionalPayment2, additionalPayment2Name, additionalPayment3, SAP, salary, bonus} = response;
	let {additionalPayment3Name, otherDeduction2, otherDeduction2Name, otherDeduction3, otherDeduction3Name, taxSum} = response;
	let {commissions, pieceWork, part_sick, part_pater, part_ber, part_comp, union_deSum, pensionSum, other_de} = response;
	let {chris_savSum, netPaySum, pensionEmpSum, companyLoanSum, studentLoanDeductionSum, summer_savSum, add_deSum2} = response;
	let {add_deSum3, gross_paySum, basicPaySum, ot1_paySum, ot2_paySum, hol_paySum, enhol_paySum, bhol_paySum} = response;
	let {bhol_bonusSum, sick_paySum, fam_paySum, ber_paySum, comp_paySum, basicHoursSum, ot1_unitsSum, ot2_unitsSum} = response;
	let {hol_unitsSum, enhol_unitsSum, bhol_unitsSum, sick_unitsSum, fam_unitsSum, ber_unitsSum, comp_unitsSum} = response;
	let {saturdayHoursSum, sundayHoursSum, uns_premSum, uns_prem_unSum, uns_holSum, uns_hol_unSum, uns_sickSum} = response;
	let {uns_sick_unSum, uns_familySum, uns_family_unSum, uns_berSum, uns_ber_unSum, uns_compSum, uns_comp_unSum} = response;
	let {SSP_Sum, SPP_Sum, pieceWorkSum, paybackSum, sundayExtraPaySum, saturdayExtraPaySum, add_pay2Sum, add_pay3Sum} = response;
	let {add_paySum, SAPSum, salarySum, bonusSum, commissionsSum, daysNotOff, totalHours, taxSumLast12Weeks, } = response;
	let {NISumLast12Weeks, union_deSumLast12Weeks, pensionSumLast12Weeks, chris_savSumLast12Weeks, overtimePercentage} = response;
	let {other_deLast12Weeks, netPaySumLast12Weeks, pensionEmpSumLast12Weeks, companyLoanSumLast12Weeks} = response;
	let {studentLoanDeductionSumLast12Weeks, summer_savSumLast12Weeks, add_deSum2Last12Weeks, add_deSum3Last12Weeks} = response;
	let {gross_paySumLast12Weeks, holidaysPercentage, bankHolidayPercentge, sicknessPercentage, parentalPercentage} = response;
	let {otherPercentage, basicPaymentsPercentage, dailyNetPay, dailytaxSum, dailyNISum, dailyHoursAtWork, dailyPaidHours} = response;
	let {dailyGrossPay, dailyGrossPayAllDays, dailyNetPayAllDays, dailytaxSumAllDays, dailyNISumAllDays} = response;
	let {dailyHoursAtWorkAllDays, dailyPaidHoursAllDays, hourlyGrossPay, hourlyNetPay, hourlytaxSum, hourlyNISum } = response;
	let {hourlyGrossPayTotalH, hourlyNetPayTotalH, hourlytaxSumTotalH, hourlyNISumTotalH, hourlyGrossPayAllH} = response;
	let {hourlyNetPayAllH, hourlytaxSumAllH, hourlyNISumAllH, holidaysEarned, totalHolidaysUsed, totalHolidaysBooked} = response;
	let {holidaysNotUsed, daysSinceLastHoliday, nextFullHoliday, daysSinceLastSick, errors} = response;
	let {daySum0, daySum1, daySum2, daySum3, daySum4, daySum5, daySum6, daySum7, daySum8, daySum9, daySum10, daySum11} = response;
	let {last10NetPayArray, last10DeductionsArray, last10WorkingHoursArray, last10SickHoursArray, last10AllHolidayHoursArray } = response;
	let {last10FamHoursArray, last10BerHoursArray, last10CompHoursArray, premium} = response;
	// these two values ar assigned to a different name variable, as the buttons already have these names
	let paySummerSavingsCheckRes = response.paySummerSavingsCheck;
	let payChristmasSavingsCheckRes = response.payChristmasSavingsCheck;

	//since some of the values from object are string elements, i need to convert them to number
	//some small calculation will need to be done on the fron end, and also to keep the results in two or sometimes
	//4 digit long on the decimals (f.e 4.20 instead of 4.2), as it looks better
	//pain in the a** I know :(

	hourlyRate = Number(hourlyRate);										unsocial_prem_rate = Number(unsocial_prem_rate);
	overtime1_rate = Number(overtime1_rate);						overtime2_rate = Number(overtime2_rate);
	enhancedHolidayRate = Number(enhancedHolidayRate);	part_sick = Number(part_sick);
	part_pater = Number(part_pater);										part_ber = Number(part_ber);
	part_comp = Number(part_comp);											basicHoursUnits = Number(basic_hours);
	unsocial_prem_units = Number(unsocial_prem_units);	unsocial_prem_hol_units = Number(unsocial_prem_hol_units);
	union_deSum = Number(union_deSum);									unsocial_prem_sick_units = Number(unsocial_prem_sick_units);
	gross_paySum = Number(gross_paySum);								unsocial_prem_family_units = Number(unsocial_prem_family_units);
	uns_ber_units = Number(uns_ber_units);							uns_comp_units = Number(uns_comp_units);
	overtime1_units = Number(overtime1_units);					overtime2_units = Number(overtime2_units);
	sundayExtraRate = Number(sundayExtraRate);					enhanced_holiday_units = Number(enhanced_holiday_units);
	holiday_units = Number(holiday_units);							sick_units = Number(sick_units);
	family_units =Number(family_units);									ber_units =Number(ber_units);
	comp_units =Number(comp_units);											bhol_units = Number(bhol_units);
	basicHoursPay = Number(basicHoursPay);							unsocial_prem = Number(unsocial_prem);
	unsocial_prem_hol = Number(unsocial_prem_hol);			unsocial_prem_sick = Number(unsocial_prem_sick);
	unsocial_prem_family = Number(unsocial_prem_family);unsocial_prem_bereavement = Number(unsocial_prem_bereavement);
	pensionEmpSum = Number(pensionEmpSum);							unsocial_prem_compassionate = Number(unsocial_prem_compassionate);
	OT1Pay = Number(OT1Pay);														OT2Pay = Number(OT2Pay);
	enhancedHolidayPay = Number(enhancedHolidayPay);		holidayPay = Number(holidayPay);
	sicknessPay = Number(sicknessPay);									familyPay = Number(familyPay);
	bereavementPay = Number(bereavementPay);						compassionatePay = Number(compassionatePay);
	bHolPayTimes = Number(bHolPayTimes);								bankHolidayHoursPay = Number(bankHolidayHoursPay);
	commissions = Number(commissions);									bankHolidayClockInBonus = Number(bankHolidayClockInBonus);
	payBack = Number(payBack);													pieceWork = Number(pieceWork);
	SSP = Number(SSP);																	SPP = Number(SPP);
	additionalPayment = Number(additionalPayment);			additionalPayment2 = Number(additionalPayment2);
	additionalPayment3 = Number(additionalPayment3);		christmasSavingsPayment = Number(christmasSavingsPayment);
	unionDeduction = Number(unionDeduction);						summerSavingsPayment = Number(summerSavingsPayment);
	pensionBeforeTax = Number(pensionBeforeTax);				pensionAmount = Number(pensionAmount);
	pensionRate = Number(pensionRate);									saturdayHours = Number(saturdayHours);
	sundayHours = Number(sundayHours);									saturdayExtraPay = Number(saturdayExtraPay);
	sundayExtraPay = Number(sundayExtraPay);						saturdayExtraRate = Number(saturdayExtraRate);
	sicknessPercentage = Number(sicknessPercentage);		overtimePercentage = Number(overtimePercentage);
	parentalPercentage = Number(parentalPercentage);		otherPercentage = Number(otherPercentage);
	bankHolidayPercentge = Number(bankHolidayPercentge);holidaysEarned = Number(holidaysEarned);
	NISumLast12Weeks = Number(holidaysEarned);					union_deSumLast12Weeks = Number(union_deSumLast12Weeks);
	salary = Number(salary);														pensionSumLast12Weeks = Number(pensionSumLast12Weeks);
	bonus = Number(bonus);															chris_savSumLast12Weeks  = Number(chris_savSumLast12Weeks);
	SAP = Number(SAP);																	summer_savSumLast12Weeks = Number(summer_savSumLast12Weeks);
	other_deLast12Weeks = Number(other_deLast12Weeks);	add_deSum2Last12Weeks = Number(add_deSum2Last12Weeks);
	NISum = Number(NISum);															add_deSum3Last12Weeks = Number(add_deSum3Last12Weeks);
	netPaySumLast12Weeks = Number(netPaySumLast12Weeks);gross_paySumLast12Weeks = Number(gross_paySumLast12Weeks);
	taxSum = Number(taxSum);														pensionEmpSumLast12Weeks = Number(pensionEmpSumLast12Weeks);
	pensionSum = Number(pensionSum);										companyLoanSumLast12Weeks = Number(companyLoanSumLast12Weeks);
	netPaySum = Number(netPaySum);											studentLoanDeductionSumLast12Weeks = Number(studentLoanDeductionSumLast12Weeks);
	holidaysPercentage = Number(holidaysPercentage);		taxSumLast12Weeks = Number(taxSumLast12Weeks);
	basicPaySum = Number(basicPaySum);									basicHoursSum = Number(basicHoursSum);
	ot1_paySum = Number(ot1_paySum);										ot1_unitsSum = Number(ot1_unitsSum);
	ot2_paySum = Number(ot2_paySum);										ot2_unitsSum = Number(ot2_unitsSum);
	hol_unitsSum = Number(hol_unitsSum);								hol_paySum = Number(hol_paySum);
	enhol_unitsSum = Number(enhol_unitsSum);						enhol_paySum = Number(enhol_paySum);
	bhol_unitsSum = Number(bhol_unitsSum);							bhol_paySum = Number(bhol_paySum);
	bhol_bonusSum = Number(bhol_bonusSum);							sick_paySum = Number(sick_paySum);
	sick_unitsSum = Number(sick_unitsSum);							fam_unitsSum = Number(fam_unitsSum);
	fam_paySum = Number(fam_paySum);										ber_unitsSum = Number(ber_unitsSum);
	ber_paySum = Number(ber_paySum);										comp_unitsSum = Number(comp_unitsSum);
	comp_paySum = Number(comp_paySum);									uns_premSum = Number(uns_premSum);
	uns_prem_unSum = Number(uns_prem_unSum);						uns_holSum = Number(uns_holSum);
	uns_hol_unSum = Number(uns_hol_unSum);							uns_sickSum = Number(uns_sickSum);
	uns_sick_unSum = Number(uns_sick_unSum);						uns_familySum = Number(uns_familySum);
	uns_family_unSum = Number(uns_family_unSum);				uns_berSum = Number(uns_berSum);
	uns_ber_unSum = Number(uns_ber_unSum);							uns_compSum = Number(uns_compSum);
	uns_comp_unSum = Number(uns_comp_unSum);						SPP_Sum = Number(SPP_Sum);
	SSP_Sum = Number(SSP_Sum);													totalHours = Number(totalHours);
	pieceWorkSum = Number(pieceWorkSum);								paybackSum = Number(paybackSum);
	add_paySum = Number(add_paySum);										add_pay2Sum = Number(add_pay2Sum);
	add_pay3Sum = Number(add_pay3Sum);									saturdayExtraPaySum = Number(saturdayExtraPaySum);
	sundayExtraPaySum = Number(sundayExtraPaySum);			saturdayHoursSum = Number(saturdayHoursSum);
	sundayHoursSum = Number(sundayHoursSum);						SAPSum = Number(SAPSum);
	salarySum = Number(salarySum);											bonusSum = Number(bonusSum);
	hourlyGrossPay = Number(hourlyGrossPay);						hourlyNetPay = Number(hourlyNetPay);
	hourlytaxSum  = Number(hourlytaxSum);								hourlyNISum  = Number(hourlyNISum);
	hourlyGrossPayTotalH = Number(hourlyGrossPayTotalH);hourlyNetPayTotalH = Number(hourlyNetPayTotalH);
	hourlytaxSumTotalH  = Number(hourlytaxSumTotalH);		hourlyNISumTotalH  = Number(hourlyNISumTotalH);
	hourlyGrossPayAllH = Number(hourlyGrossPayAllH);		hourlyNetPayAllH = Number(hourlyNetPayAllH);
	hourlytaxSumAllH  = Number(hourlytaxSumAllH);				hourlyNISumAllH  = Number(hourlyNISumAllH);
	taxAmount = Number(taxAmount);											studentLoanDeduction = Number(studentLoanDeduction);
	christmasSavingsDeduction = Number(christmasSavingsDeduction);
	summerSavingsDeduction = Number(summerSavingsDeduction);
	companyLoan = Number(companyLoan);									otherDeduction = Number(otherDeduction);
	otherDeduction2 = Number(otherDeduction2);					otherDeduction3 = Number(otherDeduction3);
	companyLoanSum = Number(companyLoanSum);						studentLoanDeductionSum = Number(studentLoanDeductionSum);
	other_de = Number(other_de);												add_deSum2 = Number(add_deSum2);
	add_deSum3 = Number(add_deSum3);										summer_savSum = Number(summer_savSum);
	chris_savSum = Number(chris_savSum);								commissionsSum = Number(commissionsSum);
	totalGrossPayments = Number(totalGrossPayments);		NIAmount = Number(NIAmount);
	totalDeductions = Number(totalDeductions);					netPay = Number(netPay);

	//get all elements from the dom that will be used to load data into them
	//payments table
	let paymentsAmountDiv = document.getElementById("paymentsAmountDiv");
	let paymentsNamesDiv = document.getElementById("paymentsNamesDiv");
	let paymentsUnitsDiv = document.getElementById("paymentsUnitsDiv");
	let paymentsRateDiv = document.getElementById("paymentsRateDiv");
	let totalGrossPaymentsAmountDiv = document.getElementById("totalGrossPaymentsAmount");
	//deductions table
	let deductionsAmountDiv = document.getElementById("deductionsAmountDiv");
	let deductionsNamesDiv = document.getElementById("deductionsNamesDiv");
	let totalDeductionsDiv = document.getElementById("totalDeductionsAmount");
	let netPayAmountDiv = document.getElementById("netPayAmount");
	//savings buttons
	let payChristmasSavings = document.getElementById("payChristmasSavings");
	let paySummerSavings = document.getElementById("paySummerSavings");
	let paySavingsDiv = document.getElementById("paySavingsDiv");
	//var calendar = document.getElementById("calendar");
	//var generateButton = document.getElementById("form");
	//year to date
	let yearToDateAmount = document.getElementById("yearToDateAmount");
	let yearToDateNames = document.getElementById("yearToDateNames");
	//year to date structure
	let yearToDatePercentageAmount = document.getElementById("yearToDatePercentageAmount");
	let yearToDatePercentageAmountHid = document.getElementById("yearToDatePercentageAmountHid");
	let yearToDatePercentageNames = document.getElementById("yearToDatePercentageNames");
	//holiday
	let holidayStatisticsAmount = document.getElementById("holidayStatisticsAmount");
	let holidayStatisticsNames = document.getElementById("holidayStatisticsNames");
	//last 3 months
	let yearToDateLast12WeeksAmount = document.getElementById("yearToDateLast12WeeksAmount");
	let yearToDateLast12WeeksNames = document.getElementById("yearToDateLast12WeeksNames");
	let yearToDateLast12WeeksAmountHid = document.getElementById("yearToDateLast12WeeksAmountHid");
	//year to date totals
	let yearToDateAmountII = document.getElementById("yearToDateAmountII");
	let yearToDateNamesII = document.getElementById("yearToDateNamesII");
	let yearToDateAmountIIHid = document.getElementById("yearToDateAmountIIHid");
	//year to date hours
	let yearToDateAmountHours = document.getElementById("yearToDateAmountHours");
	let yearToDateNamesHours = document.getElementById("yearToDateNamesHours");
	let yearToDateAmountHoursHid = document.getElementById("yearToDateAmountHoursHid");
	//weeklyAverages amounts
	let weeklyAveragesAmount = document.getElementById("weeklyAveragesAmount");
	let weeklyAveragesNames = document.getElementById("weeklyAveragesNames");
	let weeklyAveragesAmountHid = document.getElementById("weeklyAveragesAmountHid");
	//year to date days
	let dayStatisticsAmount = document.getElementById("dayStatisticsAmount");
	let dayStatisticsNames = document.getElementById("dayStatisticsNames");
	let dayStatisticsAmountHid = document.getElementById("dayStatisticsAmountHid");
	//daylyaverages amounts
	let dailyAveragesAmount = document.getElementById("dailyAveragesAmount");
	let dailyAveragesNames = document.getElementById("dailyAveragesNames");
	let dailyAveragesAmountHid = document.getElementById("dailyAveragesAmountHid");
	//hourly averages
	let hourlyAveragesAmount = document.getElementById("hourlyAveragesAmount");
	let hourlyAveragesAmountHid = document.getElementById("hourlyAveragesAmountHid");
	let hourlyAveragesNames = document.getElementById("hourlyAveragesNames");

  //----------------------------fill elements with data-------------------//
	//payments values
	paymentsAmountDiv.innerHTML = basicHoursPay.toFixed(2);
	if (unsocial_prem>0) {paymentsAmountDiv.innerHTML += '<br>'+unsocial_prem.toFixed(2);}
	if (unsocial_prem_hol>0) {paymentsAmountDiv.innerHTML += '<br>'+unsocial_prem_hol.toFixed(2);}
	if (unsocial_prem_sick>0) {paymentsAmountDiv.innerHTML += '<br>'+unsocial_prem_sick.toFixed(2);}
	if (unsocial_prem_family>0) {paymentsAmountDiv.innerHTML += '<br>'+unsocial_prem_family.toFixed(2);}
	if (unsocial_prem_bereavement>0) {paymentsAmountDiv.innerHTML += '<br>'+unsocial_prem_bereavement.toFixed(2);}
	if (unsocial_prem_compassionate>0) {paymentsAmountDiv.innerHTML += '<br>'+unsocial_prem_compassionate.toFixed(2);}
	if (OT1Pay>0) {paymentsAmountDiv.innerHTML += '<br>'+OT1Pay.toFixed(2);}
	if (OT2Pay>0) {paymentsAmountDiv.innerHTML += '<br>'+OT2Pay.toFixed(2);}
	if (enhancedHolidayPay>0) {paymentsAmountDiv.innerHTML += '<br>'+enhancedHolidayPay.toFixed(2);}
	if (holidayPay>0) {paymentsAmountDiv.innerHTML += '<br>'+holidayPay.toFixed(2);}
	if (saturdayExtraPay>0) {paymentsAmountDiv.innerHTML += '<br>'+saturdayExtraPay.toFixed(2);}
	if (sundayExtraPay>0) {paymentsAmountDiv.innerHTML += '<br>'+sundayExtraPay.toFixed(2);}
	if (sicknessPay>0) {paymentsAmountDiv.innerHTML += '<br>'+sicknessPay.toFixed(2);}
	if (familyPay>0) {paymentsAmountDiv.innerHTML += '<br>'+familyPay.toFixed(2);}
	if (bereavementPay>0) {paymentsAmountDiv.innerHTML += '<br>'+bereavementPay.toFixed(2);}
	if (compassionatePay>0) {paymentsAmountDiv.innerHTML += '<br>'+compassionatePay.toFixed(2);}
	if (bankHolidayHoursPay>0) {paymentsAmountDiv.innerHTML += '<br>'+bankHolidayHoursPay.toFixed(2);}
	if (bankHolidayClockInBonus>0) {paymentsAmountDiv.innerHTML += '<br>'+bankHolidayClockInBonus.toFixed(2);}
	if (payBack>0) {paymentsAmountDiv.innerHTML += '<br>'+payBack.toFixed(2);}
	if (pieceWork>0) {paymentsAmountDiv.innerHTML += '<br>'+pieceWork.toFixed(2);}
	if (SSP>0) {paymentsAmountDiv.innerHTML += '<br>'+SSP.toFixed(2);}
	if (SPP>0) {paymentsAmountDiv.innerHTML += '<br>'+SPP.toFixed(2);}
	if (SAP>0) {paymentsAmountDiv.innerHTML += '<br>'+SAP.toFixed(2);}
	if (salary>0) {paymentsAmountDiv.innerHTML += '<br>'+salary.toFixed(2);}
	if (bonus>0) {paymentsAmountDiv.innerHTML += '<br>'+bonus.toFixed(2);}
	if (commissions>0) {paymentsAmountDiv.innerHTML += '<br>'+commissions.toFixed(2);}
	if (additionalPayment>0) {paymentsAmountDiv.innerHTML += '<br>'+additionalPayment.toFixed(2);}
	if (additionalPayment2>0) {paymentsAmountDiv.innerHTML += '<br>'+additionalPayment2.toFixed(2);}
	if (additionalPayment3>0) {paymentsAmountDiv.innerHTML += '<br>'+additionalPayment3.toFixed(2);}
	if (christmasSavingsPayment>0) {paymentsAmountDiv.innerHTML += '<br>'+christmasSavingsPayment.toFixed(2);}
	if (summerSavingsPayment>0) {paymentsAmountDiv.innerHTML += '<br>'+summerSavingsPayment.toFixed(2);}
	if (pensionAmount>0 && pensionBeforeTax === 1){paymentsAmountDiv.innerHTML += '<br>- '+pensionAmount.toFixed(2);}
	paymentsNamesDiv.innerHTML = 'Basic Hours';
	if (unsocial_prem>0) {paymentsNamesDiv.innerHTML += '<br>Unsoc Prem';}
	if (unsocial_prem_hol>0) {paymentsNamesDiv.innerHTML += '<br>Unsoc Prem H';}
	if (unsocial_prem_sick>0) {paymentsNamesDiv.innerHTML += '<br>Unsoc Prem S';}
	if (unsocial_prem_family>0) {paymentsNamesDiv.innerHTML += '<br>Unsoc Prem P';}
	if (unsocial_prem_bereavement>0) {paymentsNamesDiv.innerHTML += '<br>Unsoc Prem B';}
	if (unsocial_prem_compassionate>0) {paymentsNamesDiv.innerHTML += '<br>Unsoc Prem C';}
	if (OT1Pay>0) {paymentsNamesDiv.innerHTML += '<br>Overtime 1';}
	if (OT2Pay>0) {paymentsNamesDiv.innerHTML += '<br>Overtime 2';}
	if (enhancedHolidayPay>0) {paymentsNamesDiv.innerHTML += '<br>En. Hol';}
	if (holidayPay>0) {paymentsNamesDiv.innerHTML += '<br>Holiday';}
	if (saturdayExtraPay>0) {paymentsNamesDiv.innerHTML += '<br>Saturday B';}
	if (sundayExtraPay>0) {paymentsNamesDiv.innerHTML += '<br>Sunday B';}
	if (sicknessPay>0) {paymentsNamesDiv.innerHTML += '<br>Sick Pay';}
	if (familyPay>0) {paymentsNamesDiv.innerHTML += '<br>Parental Pay';}
	if (bereavementPay>0) {paymentsNamesDiv.innerHTML += '<br>Bereavement';}
	if (compassionatePay>0) {paymentsNamesDiv.innerHTML += '<br>Compassionate';}
	if (bankHolidayHoursPay>0) {paymentsNamesDiv.innerHTML += '<br>B. Hol';}
	if (bankHolidayClockInBonus>0) {paymentsNamesDiv.innerHTML += '<br>B. Hol Bonus';}
	if (payBack>0) {paymentsNamesDiv.innerHTML += '<br> Back Pay';}
	if (pieceWork>0) {paymentsNamesDiv.innerHTML += '<br> Piece Work';}
	if (SSP>0) {paymentsNamesDiv.innerHTML += '<br> SSP';}
	if (SPP>0) {paymentsNamesDiv.innerHTML += '<br> SPP';}
	if (SAP>0) {paymentsNamesDiv.innerHTML += '<br> SAP';}
	if (salary>0) {paymentsNamesDiv.innerHTML += '<br> Salary';}
	if (bonus>0) {paymentsNamesDiv.innerHTML += '<br> Bonus';}
	if (commissions>0) {paymentsNamesDiv.innerHTML += '<br> Commissions';}
	if (additionalPayment>0) {paymentsNamesDiv.innerHTML += '<br>'+additionalPaymentName;}
	if (additionalPayment2>0) {paymentsNamesDiv.innerHTML += '<br>'+additionalPayment2Name;}
	if (additionalPayment3>0) {paymentsNamesDiv.innerHTML += '<br>'+additionalPayment3Name;}
	if (christmasSavingsPayment>0) {paymentsNamesDiv.innerHTML += '<br> Chris. Sav';}
	if (summerSavingsPayment>0) {paymentsNamesDiv.innerHTML += '<br> Summer Sav.';}
	if (pensionAmount>0 && pensionBeforeTax === 1){paymentsNamesDiv.innerHTML += '<br> Pension';}
	//payments units
	paymentsUnitsDiv.innerHTML = basicHoursUnits.toFixed(2);
	if (unsocial_prem>0) {paymentsUnitsDiv.innerHTML += '<br>'+unsocial_prem_units.toFixed(2);}
	if (unsocial_prem_hol>0) {paymentsUnitsDiv.innerHTML += '<br>'+unsocial_prem_hol_units.toFixed(2);}
	if (unsocial_prem_sick>0) {paymentsUnitsDiv.innerHTML += '<br>'+unsocial_prem_sick_units.toFixed(2);}
	if (unsocial_prem_family>0) {paymentsUnitsDiv.innerHTML += '<br>'+unsocial_prem_family_units.toFixed(2);}
	if (unsocial_prem_bereavement>0) {paymentsUnitsDiv.innerHTML += '<br>'+uns_ber_units.toFixed(2);}
	if (unsocial_prem_compassionate>0) {paymentsUnitsDiv.innerHTML += '<br>'+uns_comp_units.toFixed(2);}
	if (OT1Pay>0) {paymentsUnitsDiv.innerHTML += '<br>'+overtime1_units.toFixed(2);}
	if (OT2Pay>0) {paymentsUnitsDiv.innerHTML += '<br>'+overtime2_units.toFixed(2);}
	if (enhancedHolidayPay>0) {paymentsUnitsDiv.innerHTML += '<br>'+enhanced_holiday_units.toFixed(2);}
	if (holidayPay>0) {paymentsUnitsDiv.innerHTML += '<br>'+holiday_units.toFixed(2);}
	if (saturdayExtraPay>0) {paymentsUnitsDiv.innerHTML += '<br>'+saturdayHours.toFixed(2);}
	if (sundayExtraPay>0) {paymentsUnitsDiv.innerHTML += '<br>'+sundayHours.toFixed(2);}
	if (sicknessPay>0) {paymentsUnitsDiv.innerHTML += '<br>'+sick_units.toFixed(2);}
	if (familyPay>0) {paymentsUnitsDiv.innerHTML += '<br>'+family_units.toFixed(2);}
	if (bereavementPay>0) {paymentsUnitsDiv.innerHTML += '<br>'+ber_units.toFixed(2);}
	if (compassionatePay>0) {paymentsUnitsDiv.innerHTML += '<br>'+comp_units.toFixed(2);}
	if (bankHolidayHoursPay>0) {paymentsUnitsDiv.innerHTML += '<br>'+bhol_units.toFixed(2);}
	if (bankHolidayClockInBonus>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
	if (payBack>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
	if (pieceWork>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
	if (SSP>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
	if (SPP>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
	if (SAP>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
	if (salary>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
	if (bonus>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
	if (commissions>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
	if (additionalPayment>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
	if (additionalPayment2>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
	if (additionalPayment3>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
	if (christmasSavingsPayment>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
	if (summerSavingsPayment>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
	if (pensionAmount>0 && pensionBeforeTax === 1){paymentsUnitsDiv.innerHTML += '<br>-';}
	//payments rates
	paymentsRateDiv.innerHTML = hourlyRate.toFixed(4);
	if (unsocial_prem>0){paymentsRateDiv.innerHTML += '<br>'+unsocial_prem_rate.toFixed(4);}
	if (unsocial_prem_hol>0){paymentsRateDiv.innerHTML += '<br>'+unsocial_prem_rate.toFixed(4);}
	if (unsocial_prem_sick>0){paymentsRateDiv.innerHTML += '<br>'+(unsocial_prem_rate*part_sick).toFixed(4);}
	if (unsocial_prem_family>0){paymentsRateDiv.innerHTML += '<br>'+(unsocial_prem_rate*part_pater).toFixed(4);}
	if (unsocial_prem_bereavement>0){paymentsRateDiv.innerHTML += '<br>'+(unsocial_prem_rate*part_ber).toFixed(4);}
	if (unsocial_prem_compassionate>0){paymentsRateDiv.innerHTML += '<br>'+(unsocial_prem_rate*part_comp).toFixed(4);}
	if (OT1Pay>0){paymentsRateDiv.innerHTML += '<br>'+overtime1_rate.toFixed(4);}
	if (OT2Pay>0){paymentsRateDiv.innerHTML += '<br>'+overtime2_rate.toFixed(4);}
	if (enhancedHolidayPay>0) {paymentsRateDiv.innerHTML += '<br>'+enhancedHolidayRate;}
	if (holidayPay>0) {paymentsRateDiv.innerHTML += '<br>'+hourlyRate.toFixed(4);}
	if (saturdayExtraPay>0) {paymentsRateDiv.innerHTML += '<br>*'+saturdayExtraRate.toFixed(4);}
	if (sundayExtraPay>0) {paymentsRateDiv.innerHTML += '<br>*'+sundayExtraRate.toFixed(4);}
	if (sicknessPay>0) {paymentsRateDiv.innerHTML += '<br>'+(hourlyRate*part_sick).toFixed(4);}
	if (familyPay>0) {paymentsRateDiv.innerHTML += '<br>'+(hourlyRate*part_pater).toFixed(4);}
	if (bereavementPay>0) {paymentsRateDiv.innerHTML += '<br>'+(hourlyRate*part_ber).toFixed(4);}
	if (compassionatePay>0) {paymentsRateDiv.innerHTML += '<br>'+(hourlyRate*part_comp).toFixed(4);}
	if (bankHolidayHoursPay>0) {paymentsRateDiv.innerHTML += '<br>'+(hourlyRate*(bHolPayTimes-1)).toFixed(4);}
	if (bankHolidayClockInBonus>0) {paymentsRateDiv.innerHTML += '<br> ';}
	if (payBack>0) {paymentsRateDiv.innerHTML += '<br> ';}
	if (pieceWork>0) {paymentsRateDiv.innerHTML += '<br> ';}
	if (SSP>0) {paymentsRateDiv.innerHTML += '<br> ';}
	if (SPP>0) {paymentsRateDiv.innerHTML += '<br> ';}
	if (SAP>0) {paymentsRateDiv.innerHTML += '<br> ';}
	if (salary>0) {paymentsRateDiv.innerHTML += '<br> ';}
	if (bonus>0) {paymentsRateDiv.innerHTML += '<br> ';}
	if (commissions>0) {paymentsRateDiv.innerHTML += '<br> ';}
	if (additionalPayment>0) {paymentsRateDiv.innerHTML += '<br> ';}
	if (additionalPayment2>0) {paymentsRateDiv.innerHTML += '<br> ';}
	if (additionalPayment3>0) {paymentsRateDiv.innerHTML += '<br> ';}
	if (christmasSavingsPayment>0) {paymentsRateDiv.innerHTML += '<br> ';}
	if (summerSavingsPayment>0) {paymentsRateDiv.innerHTML += '<br> ';}
	if ((pensionAmount>0) && (pensionBeforeTax === 1)){paymentsRateDiv.innerHTML += '<br> '+pensionRate.toFixed(2)+'%';}
	//total gross payments
	totalGrossPaymentsAmountDiv.innerHTML = totalGrossPayments.toFixed(2);
	//---------deductions table-------------------------------------//
	deductionsAmountDiv.innerHTML = taxAmount.toFixed(2);
	deductionsAmountDiv.innerHTML += '<br>'+NIAmount.toFixed(2);
	if (pensionAmount>0  && pensionBeforeTax === 0){deductionsAmountDiv.innerHTML += '<br>'+pensionAmount.toFixed(2);}
	if (unionDeduction>0){deductionsAmountDiv.innerHTML += '<br>'+unionDeduction.toFixed(2);}
	if (christmasSavingsDeduction>0){deductionsAmountDiv.innerHTML += '<br>'+christmasSavingsDeduction.toFixed(2);}
	if (summerSavingsDeduction>0){deductionsAmountDiv.innerHTML += '<br>'+summerSavingsDeduction.toFixed(2);}
	if (otherDeduction>0){deductionsAmountDiv.innerHTML += '<br>'+otherDeduction.toFixed(2);}
	if (otherDeduction2>0){deductionsAmountDiv.innerHTML += '<br>'+otherDeduction2.toFixed(2);}
	if (otherDeduction3>0){deductionsAmountDiv.innerHTML += '<br>'+otherDeduction3.toFixed(2);}
	if (companyLoan>0){deductionsAmountDiv.innerHTML += '<br>'+companyLoan.toFixed(2);}
	if (studentLoanDeduction>0){deductionsAmountDiv.innerHTML += '<br>'+studentLoanDeduction.toFixed(2);}
	//deductions names
	deductionsNamesDiv.innerHTML = 'TAX';
	deductionsNamesDiv.innerHTML += '<br>National Insurance';
	if (pensionAmount>0  && pensionBeforeTax === 0)deductionsNamesDiv.innerHTML += '<br>Pension '+pensionRate.toFixed(2)+'%';
	if (unionDeduction>0)deductionsNamesDiv.innerHTML += '<br>Union';
	if (christmasSavingsDeduction>0)deductionsNamesDiv.innerHTML += '<br>Christmas sav.';
	if (summerSavingsDeduction>0)deductionsNamesDiv.innerHTML += '<br>Summer sav.';
	if (otherDeduction>0)deductionsNamesDiv.innerHTML += '<br>' + otherDeductionName;
	if (otherDeduction2>0)deductionsNamesDiv.innerHTML += '<br>' + otherDeduction2Name;
	if (otherDeduction3>0)deductionsNamesDiv.innerHTML += '<br>' + otherDeduction3Name;
	if (companyLoan>0)deductionsNamesDiv.innerHTML += '<br>Loan Deduction';
	if (studentLoanDeduction>0)deductionsNamesDiv.innerHTML += '<br>Student Loan';
	//total deductions
	totalDeductionsDiv.innerHTML = totalDeductions.toFixed(2);
	//net Pay
	netPayAmountDiv.innerHTML = netPay.toFixed(2);
	//year to date table
	yearToDateAmount.innerHTML = taxSum.toFixed(2)+' £<br>'+NISum.toFixed(2)+' £<hr>';
	if (union_deSum>0){yearToDateAmount.innerHTML+= union_deSum.toFixed(2)+' £<br>';}
	if (companyLoanSum >0){yearToDateAmount.innerHTML+= companyLoanSum.toFixed(2)+' £<br>';}
	if (studentLoanDeductionSum >0){yearToDateAmount.innerHTML+= studentLoanDeductionSum.toFixed(2)+' £<br>';}
	if (christmasSavingsPaymentCollected>0) {yearToDateAmount.innerHTML+= chris_savSum.toFixed(2)+' £<br>';}
	if (christmasSavingsPaymentCollected>chris_savSum) {yearToDateAmount.innerHTML+= christmasSavingsPaymentCollected.toFixed(2)+' £<br>';}
	if (summerSavingsPaymentCollected>0) {yearToDateAmount.innerHTML+= summer_savSum.toFixed(2)+' £<br>';}
	if (summerSavingsPaymentCollected>summer_savSum) {yearToDateAmount.innerHTML+= summerSavingsPaymentCollected.toFixed(2)+'<br>';}
	if (other_de>0) {yearToDateAmount.innerHTML+= other_de.toFixed(2)+' £<br>';}
	if (add_deSum2>0) {yearToDateAmount.innerHTML+= add_deSum2.toFixed(2)+' £<br>';}
	if (add_deSum3>0) {yearToDateAmount.innerHTML+= add_deSum3.toFixed(2)+' £<br>';}
	if (companyLoanSum >0 || studentLoanDeductionSum>0 || union_deSum >0 || chris_savSum>0 ||
	christmasSavingsPaymentCollected>chris_savSum||other_de>0||summerSavingsPaymentCollected>summer_savSum||
	add_deSum2>0||add_deSum3>0){yearToDateAmount.innerHTML+= '<hr>';}
	if (pensionSum>0) {yearToDateAmount.innerHTML+= pensionSum.toFixed(2)+' £<br>';}
	if (pensionEmpSum >0) {yearToDateAmount.innerHTML+= pensionEmpSum.toFixed(2) +' £<br>';}
	let totalPension = pensionSum + pensionEmpSum;
	if (totalPension>0){yearToDateAmount.innerHTML+= totalPension.toFixed(2)+' £<hr>';}
	yearToDateAmount.innerHTML+= netPaySum.toFixed(2)+' £<br>';
	yearToDateAmount.innerHTML+= '<b>'+gross_paySum.toFixed(2)+' £</b>';
	//year to date names
	yearToDateNames.innerHTML = 'Tax<br> National Insurance<hr>' ;
	if (union_deSum>0){yearToDateNames.innerHTML+= 'Union<br>';}
	if (companyLoanSum>0){yearToDateNames.innerHTML+= 'Loan Deduction<br>';}
	if (studentLoanDeductionSum>0){yearToDateNames.innerHTML+= 'Student Loan<br>';}
	if (christmasSavingsPaymentCollected>0){yearToDateNames.innerHTML+= 'Christmas Deductions<br>';}
	if (christmasSavingsPaymentCollected>chris_savSum){yearToDateNames.innerHTML+= 'Christmas Total Ded.<br>';}
	if (summerSavingsPaymentCollected>0){yearToDateNames.innerHTML+= 'Summer Deductions<br>';}
	if (summerSavingsPaymentCollected>summer_savSum){yearToDateNames.innerHTML+= 'Summer Total Ded.<br>';}
	if (other_de>0){yearToDateNames.innerHTML+= otherDeductionName+'<br>';}
	if (add_deSum2>0){yearToDateNames.innerHTML+= otherDeduction2Name+'<br>';}
	if (add_deSum3>0){yearToDateNames.innerHTML+= otherDeduction3Name+'<br>';}
	if (companyLoanSum >0 || studentLoanDeductionSum>0 || union_deSum >0 || christmasSavingsPaymentCollected>0||
	other_de>0||summerSavingsPaymentCollected>summer_savSum ||add_deSum2>0||add_deSum3>0){yearToDateNames.innerHTML+= '<hr>';}
	if (pensionSum>0){yearToDateNames.innerHTML+= 'Employee Pension<br>';}
	if (pensionEmpSum>0){yearToDateNames.innerHTML+= 'Employer Pension<br>';}
	if (totalPension>0){yearToDateNames.innerHTML+= 'Total Pension<hr>';}
	yearToDateNames.innerHTML+= 'Total Net Pay<br>';
	yearToDateNames.innerHTML+= 'Total Gross Pay<br>';
	//pay structure table
	//percentage amounts
	yearToDatePercentageAmount.innerHTML= basicPaymentsPercentage.toFixed(2)+' %<br>';
	if (holidaysPercentage>0){yearToDatePercentageAmount.innerHTML+= holidaysPercentage.toFixed(2)+' %<br>';}
	if (sicknessPercentage>0){yearToDatePercentageAmount.innerHTML+= sicknessPercentage.toFixed(2)+' %<br>';}
	if (overtimePercentage>0){yearToDatePercentageAmount.innerHTML+= overtimePercentage.toFixed(2)+' %<br>';}
	if (parentalPercentage>0){yearToDatePercentageAmount.innerHTML+= parentalPercentage.toFixed(2)+' %<br>';}
	if (otherPercentage>0){yearToDatePercentageAmount.innerHTML+= otherPercentage.toFixed(2)+' %<br>';}
	if (bankHolidayPercentge>0){yearToDatePercentageAmount.innerHTML+= bankHolidayPercentge.toFixed(2)+' %<br>';}
	//percentage amounts hidden
	yearToDatePercentageAmountHid.innerHTML= 'Premium<br>';
	if (holidaysPercentage>0){yearToDatePercentageAmountHid.innerHTML+= 'Premium<br>';}
	if (sicknessPercentage>0){yearToDatePercentageAmountHid.innerHTML+= 'Premium<br>';}
	if (overtimePercentage>0){yearToDatePercentageAmountHid.innerHTML+='Premium<br>';}
	if (parentalPercentage>0){yearToDatePercentageAmountHid.innerHTML+= 'Premium<br>';}
	if (otherPercentage>0){yearToDatePercentageAmountHid.innerHTML+= 'Premium<br>';}
	if (bankHolidayPercentge>0){yearToDatePercentageAmountHid.innerHTML+= 'Premium<br>';}
	// percentage names
	yearToDatePercentageNames.innerHTML= 'Basic Pay <br>';
	if (holidaysPercentage>0){yearToDatePercentageNames.innerHTML+= 'Holiday Payments<br>';}
	if (sicknessPercentage>0){yearToDatePercentageNames.innerHTML+= 'Sickness Payments<br>';}
	if (overtimePercentage>0){yearToDatePercentageNames.innerHTML+= 'Overtime Payments<br>';}
	if (parentalPercentage>0){yearToDatePercentageNames.innerHTML+= 'Paternity Payments<br>';}
	if (otherPercentage>0){yearToDatePercentageNames.innerHTML+= 'Other Payments<br>';}
	if (bankHolidayPercentge>0){yearToDatePercentageNames.innerHTML+= 'Bank Holiday Payments<br>';}
	//total payments table
	let totalPaidHours = ot1_unitsSum + ot2_unitsSum + basicHoursSum;
	let unpaidBreaksLength = totalHours - totalPaidHours;
	//year to date II amounts
	yearToDateAmountII.innerHTML = basicPaySum.toFixed(2)+' £<br>';
	if (salarySum>0){yearToDateAmountII.innerHTML+= salarySum.toFixed(2)+' £<br>';}
	if (uns_premSum>0){yearToDateAmountII.innerHTML+= uns_premSum.toFixed(2)+' £<br>';}
	if (ot1_paySum>0){yearToDateAmountII.innerHTML+= ot1_paySum.toFixed(2)+' £<br>';}
	if (ot2_paySum>0){yearToDateAmountII.innerHTML+= ot2_paySum.toFixed(2)+' £<br>';}
	if (hol_paySum>0 || enhol_paySum>0 || bhol_paySum>0 || bhol_bonusSum>0 ||uns_holSum>0){yearToDateAmountII.innerHTML+= '<hr>';}
	if (hol_paySum>0){yearToDateAmountII.innerHTML+= hol_paySum.toFixed(2)+' £<br>';}
	if (enhol_paySum>0){yearToDateAmountII.innerHTML+= enhol_paySum.toFixed(2)+' £<br>';}
	if (uns_holSum>0){yearToDateAmountII.innerHTML+= uns_holSum.toFixed(2)+' £<br>';}
	if (bhol_paySum>0){yearToDateAmountII.innerHTML+= bhol_paySum.toFixed(2)+' £<br>';}
	if (bhol_bonusSum>0){yearToDateAmountII.innerHTML+= bhol_bonusSum.toFixed(2)+' £<br>';}
	if (sundayExtraPaySum >0 || saturdayExtraPaySum>0){yearToDateAmountII.innerHTML+= '<hr>';}
	if (saturdayExtraPaySum>0){yearToDateAmountII.innerHTML+= saturdayExtraPaySum.toFixed(2)+' £<br>';}
	if (sundayExtraPaySum>0){yearToDateAmountII.innerHTML+= sundayExtraPaySum.toFixed(2)+' £<br>';}
	if (sick_paySum >0 || uns_sickSum>0 ||SSP_Sum>0){yearToDateAmountII.innerHTML+= '<hr>';}
	if (sick_paySum>0){yearToDateAmountII.innerHTML+= sick_paySum.toFixed(2)+' £<br>';}
	if (uns_sickSum>0){yearToDateAmountII.innerHTML+= uns_sickSum.toFixed(2)+' £<br>';}
	if (SSP_Sum>0){yearToDateAmountII.innerHTML+= SSP_Sum.toFixed(2)+' £<br>';}
	if (fam_paySum >0 || uns_familySum>0 ||SPP_Sum>0 || SAPSum>0){yearToDateAmountII.innerHTML+= '<hr>';}
	if (fam_paySum>0){yearToDateAmountII.innerHTML+= fam_paySum.toFixed(2)+' £<br>';}
	if (uns_familySum>0){yearToDateAmountII.innerHTML+= uns_familySum.toFixed(2)+' £<br>';}
	if (SPP_Sum>0){yearToDateAmountII.innerHTML+= SPP_Sum.toFixed(2)+' £<br>';}
	if (SAPSum>0){yearToDateAmountII.innerHTML+= SAPSum.toFixed(2)+' £<br>';}
	if (ber_paySum >0 || uns_berSum>0 ||comp_paySum>0 || uns_compSum>0){yearToDateAmountII.innerHTML+= '<hr>';}
	if (ber_paySum>0){yearToDateAmountII.innerHTML+= ber_paySum.toFixed(2)+' £<br>';}
	if (uns_berSum>0){yearToDateAmountII.innerHTML+= uns_berSum.toFixed(2)+' £<br>';}
	if (comp_paySum>0){yearToDateAmountII.innerHTML+= comp_paySum.toFixed(2)+' £<br>';}
	if (uns_compSum>0){yearToDateAmountII.innerHTML+= uns_compSum.toFixed(2)+' £<br>';}
	if (pieceWorkSum >0 ||bonusSum>0|| commissionsSum>0 || paybackSum>0){yearToDateAmountII.innerHTML+= '<hr>';}
	if (pieceWorkSum>0){yearToDateAmountII.innerHTML += pieceWorkSum.toFixed(2)+' £<br>';}
	if (paybackSum>0){yearToDateAmountII.innerHTML += paybackSum.toFixed(2)+' £<br>';}
	if (bonusSum>0){yearToDateAmountII.innerHTML += bonusSum.toFixed(2)+' £<br>';}
	if (commissionsSum>0){yearToDateAmountII.innerHTML += commissionsSum.toFixed(2)+' £<br>';}
	if (add_paySum >0 || add_pay2Sum>0 ||add_pay3Sum>0){yearToDateAmountII.innerHTML+= '<hr>';}
	if (add_paySum>0){yearToDateAmountII.innerHTML += add_paySum.toFixed(2)+' £<br>';}
	if (add_pay2Sum>0){yearToDateAmountII.innerHTML += add_pay2Sum.toFixed(2)+' £<br>';}
	if (add_pay3Sum>0){yearToDateAmountII.innerHTML += add_pay3Sum.toFixed(2)+' £<br>';}
	//year to date amounts hidden
	yearToDateAmountIIHid.innerHTML = 'Premium<br>';
	if (salarySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
	if (uns_premSum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
	if (ot1_paySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
	if (ot2_paySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
	if (hol_paySum>0 || enhol_paySum>0 || bhol_paySum>0 || bhol_bonusSum>0 ||uns_holSum>0){yearToDateAmountIIHid.innerHTML+= '<hr>';}
	if (hol_paySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
	if (enhol_paySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
	if (uns_holSum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
	if (bhol_paySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
	if (bhol_bonusSum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
	if (sundayExtraPaySum >0 || saturdayExtraPaySum>0){yearToDateAmountIIHid.innerHTML+= '<hr>';}
	if (saturdayExtraPaySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
	if (sundayExtraPaySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
	if (sick_paySum >0 || uns_sickSum>0 ||SSP_Sum>0){yearToDateAmountIIHid.innerHTML+= '<hr>';}
	if (sick_paySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
	if (uns_sickSum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
	if (SSP_Sum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
	if (fam_paySum >0 || uns_familySum>0 ||SPP_Sum>0 || SAPSum>0){yearToDateAmountIIHid.innerHTML+= '<hr>';}
	if (fam_paySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
	if (uns_familySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
	if (SPP_Sum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
	if (SAPSum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
	if (ber_paySum >0 || uns_berSum>0 ||comp_paySum>0 || uns_compSum>0){yearToDateAmountIIHid.innerHTML+= '<hr>';}
	if (ber_paySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
	if (uns_berSum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
	if (comp_paySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
	if (uns_compSum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
	if (pieceWorkSum >0 ||bonusSum>0|| commissionsSum>0 || paybackSum>0){yearToDateAmountIIHid.innerHTML+= '<hr>';}
	if (pieceWorkSum>0){yearToDateAmountIIHid.innerHTML += 'Premium<br>';}
	if (paybackSum>0){yearToDateAmountIIHid.innerHTML += 'Premium<br>';}
	if (bonusSum>0){yearToDateAmountIIHid.innerHTML += 'Premium<br>';}
	if (commissionsSum>0){yearToDateAmountIIHid.innerHTML += 'Premium<br>';}
	if (add_paySum >0 || add_pay2Sum>0 ||add_pay3Sum>0){yearToDateAmountIIHid.innerHTML+= '<hr>';}
	if (add_paySum>0){yearToDateAmountIIHid.innerHTML += 'Premium<br>';}
	if (add_pay2Sum>0){yearToDateAmountIIHid.innerHTML += 'Premium<br>';}
	if (add_pay3Sum>0){yearToDateAmountIIHid.innerHTML += 'Premium<br>';}
	//year to date II names
	yearToDateNamesII.innerHTML = 'Basic Pay<br>';
	if (salarySum>0){yearToDateNamesII.innerHTML+= 'Salary Pay<br>';}
	if (uns_premSum>0){yearToDateNamesII.innerHTML+= 'Unsocial Basic Pay<br>';}
	if (ot1_paySum>0){yearToDateNamesII.innerHTML+= 'Overtime 1 Pay<br>';}
	if (ot2_paySum>0){yearToDateNamesII.innerHTML+= 'Overtime 2 Pay<br>';}
	if (hol_paySum>0 || enhol_paySum>0 || bhol_paySum>0 || bhol_bonusSum>0 ||uns_holSum>0){yearToDateNamesII.innerHTML+= '<hr>';}
	if (hol_paySum>0){yearToDateNamesII.innerHTML+= 'Holiday Pay<br>';}
	if (enhol_paySum>0){yearToDateNamesII.innerHTML+= 'Enhanced Holiday Pay<br>';}
	if (uns_holSum>0){yearToDateNamesII.innerHTML+= 'Unsocial Holiday Pay<br>';}
	if (bhol_paySum>0){yearToDateNamesII.innerHTML+= 'Bank Holiday Pay<br>';}
	if (bhol_bonusSum>0){yearToDateNamesII.innerHTML+= 'Bank Holiday Bonuses<br>';}
	if (sundayExtraPaySum >0 || saturdayExtraPaySum>0){yearToDateNamesII.innerHTML+= '<hr>';}
	if (saturdayExtraPaySum>0){yearToDateNamesII.innerHTML+= 'Saturday Bonuses<br>';}
	if (sundayExtraPaySum>0){yearToDateNamesII.innerHTML+= 'Sunday Bonuses<br>';}
	if (sick_paySum >0 || uns_sickSum>0 ||SSP_Sum>0){yearToDateNamesII.innerHTML+= '<hr>';}
	if (sick_paySum>0){yearToDateNamesII.innerHTML+= 'Sickness Pay<br>';}
	if (uns_sickSum>0){yearToDateNamesII.innerHTML+= 'Unsocial Sickness Pay<br>';}
	if (SSP_Sum>0){yearToDateNamesII.innerHTML+= 'SSP Pay<br>';}
	if (fam_paySum >0 || uns_familySum>0 ||SPP_Sum>0 || SAPSum>0){yearToDateNamesII.innerHTML+= '<hr>';}
	if (fam_paySum>0){yearToDateNamesII.innerHTML+= 'Parental Pay<br>';}
	if (uns_familySum>0){yearToDateNamesII.innerHTML+= 'Unsocial Parental Pay<br>';}
	if (SPP_Sum>0){yearToDateNamesII.innerHTML+= 'SPP Pay<br>';}
	if (SAPSum>0){yearToDateNamesII.innerHTML+= 'SAP Pay<br>';}
	if (ber_paySum >0 || uns_berSum>0 ||comp_paySum>0 || uns_compSum>0){yearToDateNamesII.innerHTML+= '<hr>';}
	if (ber_paySum>0){yearToDateNamesII.innerHTML+= 'Bereavement Pay<br>';}
	if (uns_berSum>0){yearToDateNamesII.innerHTML+= 'Unsocial Bereavement Pay<br>';}
	if (comp_paySum>0){yearToDateNamesII.innerHTML+= 'Compassionate Pay<br>';}
	if (uns_compSum>0){yearToDateNamesII.innerHTML+= 'Unsocial Compass. Pay<br>';}
	if (pieceWorkSum >0 ||bonusSum>0|| commissionsSum>0|| paybackSum>0){yearToDateNamesII.innerHTML+= '<hr>';}
	if (pieceWorkSum>0){yearToDateNamesII.innerHTML += 'Piece Work Pay<br>';}
	if (paybackSum>0){yearToDateNamesII.innerHTML += 'Back Pays<br>';}
	if (bonusSum>0){yearToDateNamesII.innerHTML += 'Bonuses Pay<br>';}
	if (commissionsSum>0){yearToDateNamesII.innerHTML += 'Commissions Pay<br>';}
	if (add_paySum >0 || add_pay2Sum>0 ||add_pay3Sum>0){yearToDateNamesII.innerHTML+= '<hr>';}
	if (add_paySum>0){yearToDateNamesII.innerHTML += 'Add. Pay 1<br>';}
	if (add_pay2Sum>0){yearToDateNamesII.innerHTML += 'Add. Pay 2<br>';}
	if (add_pay3Sum>0){yearToDateNamesII.innerHTML += 'Add. Pay 3<br>';}
	//hours table
	//hours amounts
	yearToDateAmountHours.innerHTML= totalHours.toFixed(2)+' h<br>';
	if (totalPaidHours>0){yearToDateAmountHours.innerHTML+= totalPaidHours.toFixed(2)+' h<br>';}
	if (unpaidBreaksLength>0){yearToDateAmountHours.innerHTML+= unpaidBreaksLength.toFixed(2)+' h<br>';}

	if (basicHoursSum >0 || uns_prem_unSum>0 || ot1_unitsSum>0|| ot2_unitsSum>0){yearToDateAmountHours.innerHTML+= '<hr>';}
	yearToDateAmountHours.innerHTML+= basicHoursSum.toFixed(2)+' h<br>';
	if (uns_prem_unSum>0){yearToDateAmountHours.innerHTML+= uns_prem_unSum.toFixed(2)+' h<br>';}
	if (ot1_unitsSum>0){yearToDateAmountHours.innerHTML+= ot1_unitsSum.toFixed(2)+' h<br>';}
	if (ot2_unitsSum>0){yearToDateAmountHours.innerHTML+= ot2_unitsSum.toFixed(2)+' h<br>';}

	if (hol_unitsSum >0 || enhol_unitsSum>0 || uns_hol_unSum>0|| bhol_unitsSum>0){yearToDateAmountHours.innerHTML+= '<hr>';}
	if (hol_unitsSum>0){yearToDateAmountHours.innerHTML+= hol_unitsSum.toFixed(2)+' h<br>';}
	if (enhol_unitsSum>0){yearToDateAmountHours.innerHTML+= enhol_unitsSum.toFixed(2)+' h<br>';}
	if (uns_hol_unSum>0){yearToDateAmountHours.innerHTML+= uns_hol_unSum.toFixed(2)+' h<br>';}
	if (bhol_unitsSum>0){yearToDateAmountHours.innerHTML+= bhol_unitsSum.toFixed(2)+' h<br>';}

	if (saturdayHoursSum >0 || sundayHoursSum>0){yearToDateAmountHours.innerHTML+= '<hr>';}
	if (saturdayHoursSum>0){yearToDateAmountHours.innerHTML+= saturdayHoursSum.toFixed(2)+' h<br>';}
	if (sundayHoursSum>0){yearToDateAmountHours.innerHTML+= sundayHoursSum.toFixed(2)+' h<br>';}

	if (uns_sick_unSum >0 || sick_unitsSum>0 || uns_family_unSum>0|| fam_unitsSum>0){yearToDateAmountHours.innerHTML+= '<hr>';}
	if (uns_sick_unSum>0){yearToDateAmountHours.innerHTML+= uns_sick_unSum.toFixed(2)+' h<br>';}
	if (sick_unitsSum>0){yearToDateAmountHours.innerHTML+= sick_unitsSum.toFixed(2)+' h<br>';}
	if (uns_family_unSum>0){yearToDateAmountHours.innerHTML+= uns_family_unSum.toFixed(2)+' h<br>';}
	if (fam_unitsSum>0){yearToDateAmountHours.innerHTML+= fam_unitsSum.toFixed(2)+' h<br>';}

	if (uns_ber_unSum >0 || ber_unitsSum>0 || comp_unitsSum>0|| uns_comp_unSum>0){yearToDateAmountHours.innerHTML+= '<hr>';}
	if (uns_ber_unSum>0){yearToDateAmountHours.innerHTML+= uns_ber_unSum.toFixed(2)+' h<br>';}
	if (ber_unitsSum>0){yearToDateAmountHours.innerHTML+= ber_unitsSum.toFixed(2)+' h<br>';}
	if (uns_comp_unSum>0){yearToDateAmountHours.innerHTML+= uns_comp_unSum.toFixed(2)+' h<br>';}
	if (comp_unitsSum>0){yearToDateAmountHours.innerHTML+= comp_unitsSum.toFixed(2)+' h<br>';}

	yearToDateNamesHours.innerHTML= 'Hours Spent At Work<br>';
	if (totalPaidHours>0){yearToDateNamesHours.innerHTML+= 'Paid Hours Spent At Work<br>';}
	if (unpaidBreaksLength>0){yearToDateNamesHours.innerHTML+= 'Unpaid Break Hours<br>';}

	if (basicHoursSum >0 || uns_prem_unSum>0 || ot1_unitsSum>0|| ot2_unitsSum>0){yearToDateNamesHours.innerHTML+= '<hr>';}
	yearToDateNamesHours.innerHTML+= 'Basic Hours <br>';
	if (uns_prem_unSum>0){yearToDateNamesHours.innerHTML+= 'Unsocial Basic Hours<br>';}
	if (ot1_unitsSum>0){yearToDateNamesHours.innerHTML+= 'Overtime 1 Hours<br>';}
	if (ot2_unitsSum>0){yearToDateNamesHours.innerHTML+= 'Overtime 2 Hours<br>';}

	if (hol_unitsSum >0 || enhol_unitsSum>0 || uns_hol_unSum>0|| bhol_unitsSum>0){yearToDateNamesHours.innerHTML+= '<hr>';}
	if (hol_unitsSum>0){yearToDateNamesHours.innerHTML+= 'Holiday Hours<br>';}
	if (enhol_unitsSum>0){yearToDateNamesHours.innerHTML+= 'Enhanced Holiday Hours<br>';}
	if (uns_hol_unSum>0){yearToDateNamesHours.innerHTML+= 'Unsocial Holiday Hours<br>';}
	if (bhol_unitsSum>0){yearToDateNamesHours.innerHTML+= 'Bank Holiday Hours<br>';}

	if (saturdayHoursSum >0 || sundayHoursSum>0){yearToDateNamesHours.innerHTML+= '<hr>';}
	if (saturdayHoursSum>0){yearToDateNamesHours.innerHTML+= 'Saturday Hours<br>';}
	if (sundayHoursSum>0){yearToDateNamesHours.innerHTML+= 'Sunday Hours<br>';}

	if (uns_sick_unSum >0 || sick_unitsSum>0 || uns_family_unSum>0|| fam_unitsSum>0){yearToDateNamesHours.innerHTML+= '<hr>';}
	if (uns_sick_unSum>0){yearToDateNamesHours.innerHTML+= 'Unsocial Sickness Hours<br>';}
	if (sick_unitsSum>0){yearToDateNamesHours.innerHTML+= 'Paid Sickness Hours<br>';}
	if (uns_family_unSum>0){yearToDateNamesHours.innerHTML+= 'Unsocial Parental Hours<br>';}
	if (fam_unitsSum>0){yearToDateNamesHours.innerHTML+= 'Parental Leave Hours<br>';}

	if (uns_ber_unSum >0 || ber_unitsSum>0 || comp_unitsSum>0|| uns_comp_unSum>0){yearToDateNamesHours.innerHTML+= '<hr>';}
	if (uns_ber_unSum>0){yearToDateNamesHours.innerHTML+= 'Unsocial Bereav. Hours<br>';}
	if (ber_unitsSum>0){yearToDateNamesHours.innerHTML+= 'Bereavement Leave Hours<br>';}
	if (uns_comp_unSum>0){yearToDateNamesHours.innerHTML+= 'Unsocial Compass. Hours<br>';}
	if (comp_unitsSum>0){yearToDateNamesHours.innerHTML+= 'Compassionate Hours<br>';}

	yearToDateAmountHoursHid.innerHTML= 'Premium<br>';
	if (totalPaidHours>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
	if (unpaidBreaksLength>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}

	if (basicHoursSum >0 || uns_prem_unSum>0 || ot1_unitsSum>0|| ot2_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= '<hr>';}
	yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';
	if (uns_prem_unSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
	if (ot1_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
	if (ot2_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}

	if (hol_unitsSum >0 || enhol_unitsSum>0 || uns_hol_unSum>0|| bhol_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= '<hr>';}
	if (hol_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
	if (enhol_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
	if (uns_hol_unSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
	if (bhol_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}

	if (saturdayHoursSum >0 || sundayHoursSum>0){yearToDateAmountHoursHid.innerHTML+= '<hr>';}
	if (saturdayHoursSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
	if (sundayHoursSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}

	if (uns_sick_unSum >0 || sick_unitsSum>0 || uns_family_unSum>0|| fam_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= '<hr>';}
	if (uns_sick_unSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
	if (sick_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
	if (uns_family_unSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
	if (fam_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}

	if (uns_ber_unSum >0 || ber_unitsSum>0 || comp_unitsSum>0|| uns_comp_unSum>0){yearToDateAmountHoursHid.innerHTML+= '<hr>';}
	if (uns_ber_unSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
	if (ber_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
	if (uns_comp_unSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
	if (comp_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
	//holidays table
	//sort out wheather use day or days words.
	holidayStatisticsAmount.innerHTML= totalHolidaysUsed;
	if (totalHolidaysUsed==1){
		holidayStatisticsAmount.innerHTML+= ' day<br>';
	}	else {
		holidayStatisticsAmount.innerHTML+= ' days<br>';
	}
	if (totalHolidaysBooked>0)	{
		holidayStatisticsAmount.innerHTML+= totalHolidaysBooked;
		if (totalHolidaysBooked<=1){
			holidayStatisticsAmount.innerHTML+= ' day<br>';
		}	else {
			holidayStatisticsAmount.innerHTML+= ' days<br>';
		}
	}
	if (holidaysNotUsed>0)	{
		holidayStatisticsAmount.innerHTML+= holidaysNotUsed;
		if (holidaysNotUsed<=1){
			holidayStatisticsAmount.innerHTML+= ' day<br>';
		}	else {
			holidayStatisticsAmount.innerHTML+= ' days<br>';
		}
	}
	if (holidaysEarned>0)	{
		holidayStatisticsAmount.innerHTML+= holidaysEarned.toFixed(2);
		if (holidaysEarned<=1){
			holidayStatisticsAmount.innerHTML+= ' day<br>';
		}	else {
			holidayStatisticsAmount.innerHTML+= ' days<br>';
		}
	}
	if (nextFullHoliday === "Holiday!")	{
		holidayStatisticsAmount.innerHTML+= '<span class="green">'+nextFullHoliday+'</span><br>';
	}	else if (nextFullHoliday>0)	{
		holidayStatisticsAmount.innerHTML+= nextFullHoliday;
		if (nextFullHoliday<=1){
			holidayStatisticsAmount.innerHTML+= ' day<br>';
		}	else {
			holidayStatisticsAmount.innerHTML+= ' days<br>';
		}
	}
	if (daysSinceLastHoliday === "Holiday!")	{
		holidayStatisticsAmount.innerHTML+= '<span class="green">'+daysSinceLastHoliday+'</span><br>';
	}	else if (daysSinceLastHoliday>0) {
		holidayStatisticsAmount.innerHTML+= daysSinceLastHoliday;
		if (daysSinceLastHoliday<=1){
			holidayStatisticsAmount.innerHTML+= ' day<br>';
		}	else {
			holidayStatisticsAmount.innerHTML+= ' days<br>';
		}
	}
	holidayStatisticsNames.innerHTML= 'Holidays Used:<br>';
	if (totalHolidaysBooked>0){holidayStatisticsNames.innerHTML+= 'Holidays Booked:<br>';}
	if (holidaysNotUsed>0){holidayStatisticsNames.innerHTML+= 'Holidays Available:<br>';}
	if (holidaysEarned>0){holidayStatisticsNames.innerHTML+= 'Holidays Earned:<br>';}
	if (nextFullHoliday>0 || nextFullHoliday === "Holiday!"){holidayStatisticsNames.innerHTML+= 'Days Till Next Holiday:<br>';}
	if (daysSinceLastHoliday>0 || daysSinceLastHoliday === "Holiday!"){holidayStatisticsNames.innerHTML+= 'Days Since Last Holiday:<br>';}

	//last 13 weeks totals
	taxSumLast12Weeks =  taxSumLast12Weeks/13;
	NISumLast12Weeks =  NISumLast12Weeks/13;
	union_deSumLast12Weeks =  union_deSumLast12Weeks/13;
	pensionSumLast12WeeksChart =  pensionSumLast12WeeksChart/13;
	chris_savSumLast12Weeks =  chris_savSumLast12Weeks/13;
	summer_savSumLast12Weeks =  summer_savSumLast12Weeks/13;
	companyLoanSumLast12Weeks =  companyLoanSumLast12Weeks/13;
	studentLoanDeductionSumLast12Weeks =  studentLoanDeductionSumLast12Weeks/13;
	other_deLast12Weeks =  other_deLast12Weeks/13;
	add_deSum2Last12Weeks =  add_deSum2Last12Weeks/13;
	add_deSum3Last12Weeks =  add_deSum3Last12Weeks/13;
	netPaySumLast12Weeks =  netPaySumLast12Weeks/13;
	gross_paySumLast12Weeks = gross_paySumLast12Weeks/13;
	//last 13 weeks amounts
	yearToDateLast12WeeksAmount.innerHTML = taxSumLast12Weeks.toFixed(2)+' £<br>'+NISumLast12Weeks.toFixed(2)+' £<hr>';
	if (union_deSumLast12Weeks>0){yearToDateLast12WeeksAmount.innerHTML+= union_deSumLast12Weeks.toFixed(2)+' £<br>';}
	if (companyLoanSumLast12Weeks >0){yearToDateLast12WeeksAmount.innerHTML+= companyLoanSumLast12Weeks.toFixed(2)+' £<br>';}
	if (studentLoanDeductionSumLast12Weeks >0){yearToDateLast12WeeksAmount.innerHTML+= studentLoanDeductionSumLast12Weeks.toFixed(2)+' £<br>';}
	if (chris_savSumLast12Weeks>0) {yearToDateLast12WeeksAmount.innerHTML+= chris_savSumLast12Weeks.toFixed(2)+' £<br>';}
	if (summer_savSumLast12Weeks>0) {yearToDateLast12WeeksAmount.innerHTML+= summer_savSumLast12Weeks.toFixed(2)+' £<br>';}

	if (other_deLast12Weeks>0) {yearToDateLast12WeeksAmount.innerHTML+= other_deLast12Weeks.toFixed(2)+' £<br>';}
	if (add_deSum2Last12Weeks>0) {yearToDateLast12WeeksAmount.innerHTML+= add_deSum2Last12Weeks.toFixed(2)+' £<br>';}
	if (add_deSum3Last12Weeks>0) {yearToDateLast12WeeksAmount.innerHTML+= add_deSum3Last12Weeks.toFixed(2)+' £<br>';}
	if (companyLoanSumLast12Weeks >0 || studentLoanDeductionSumLast12Weeks>0 || union_deSumLast12Weeks >0 || chris_savSumLast12Weeks>0 || other_deLast12Weeks>0||add_deSum2Last12Weeks>0 ||add_deSum3Last12Weeks>0){yearToDateLast12WeeksAmount.innerHTML+= '<hr>';}
	if (pensionSumLast12Weeks>0) {yearToDateLast12WeeksAmount.innerHTML+= pensionSumLast12Weeks.toFixed(2)+' £<br>';}
	if (pensionEmpSumLast12Weeks >0) {yearToDateLast12WeeksAmount.innerHTML+= pensionEmpSumLast12Weeks.toFixed(2) +' £<br>';}
	var totalPensionLast12Weeks = pensionSumLast12Weeks + pensionEmpSumLast12Weeks;
	if (totalPensionLast12Weeks>0){yearToDateLast12WeeksAmount.innerHTML+= totalPensionLast12Weeks.toFixed(2)+' £<hr>';}

	yearToDateLast12WeeksAmount.innerHTML+= netPaySumLast12Weeks.toFixed(2)+' £<br>';
	yearToDateLast12WeeksAmount.innerHTML+= '<b>'+gross_paySumLast12Weeks.toFixed(2)+' £</b>';

	//last 13 weeks names
	yearToDateLast12WeeksNames.innerHTML = 'Tax<br> National Insurance<hr>' ;
	if (union_deSumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Union<br>';}
	if (companyLoanSumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Loan Deduction<br>';}
	if (studentLoanDeductionSumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Student Loan<br>';}
	if (chris_savSumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Christmas Deductions<br>';}
	if (summer_savSumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Summer Deductions<br>';}

	if (other_deLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= otherDeductionName+'<br>';}
	if (add_deSum2Last12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= otherDeduction2Name+'<br>';}
	if (add_deSum3Last12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= otherDeduction3Name+'<br>';}
	if (companyLoanSumLast12Weeks >0 || studentLoanDeductionSumLast12Weeks>0 || union_deSumLast12Weeks >0 ||
	summer_savSumLast12Weeks>0||other_deLast12Weeks>0||summer_savSumLast12Weeks>0 ||add_deSum2Last12Weeks>0||
	add_deSum3Last12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= '<hr>';}
	if (pensionSumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Employee Pension<br>';}
	if (pensionEmpSumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Employer Pension<br>';}
	if (totalPensionLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Pension<hr>';}

	yearToDateLast12WeeksNames.innerHTML+= 'Net Pay<br>';
	yearToDateLast12WeeksNames.innerHTML+= 'Gross Pay<br>';
	//last 13 weeks amounts hidden
	yearToDateLast12WeeksAmountHid.innerHTML = 'Premium<br>Premium<hr>';
	if (union_deSumLast12Weeks>0){yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
	if (companyLoanSumLast12Weeks >0){yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
	if (studentLoanDeductionSumLast12Weeks >0){yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
	if (chris_savSumLast12Weeks>0) {yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
	if (summer_savSumLast12Weeks>0) {yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
	if (other_deLast12Weeks>0) {yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
	if (add_deSum2Last12Weeks>0) {yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
	if (add_deSum3Last12Weeks>0) {yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
	if (companyLoanSumLast12Weeks >0 || studentLoanDeductionSumLast12Weeks>0 || union_deSumLast12Weeks >0 ||
	chris_savSumLast12Weeks>0 || other_deLast12Weeks>0||add_deSum2Last12Weeks>0 ||
	add_deSum3Last12Weeks>0){yearToDateLast12WeeksAmountHid.innerHTML+= '<hr>';}
	if (pensionSumLast12Weeks>0) {yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
	if (pensionEmpSumLast12Weeks >0) {yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
	var totalPensionLast12Weeks = pensionSumLast12Weeks + pensionEmpSumLast12Weeks;
	if (totalPensionLast12Weeks>0){yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<hr>';}

	yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';
	yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';
	//--------------weeklyAverages div--------------------------//
	//determine current Tax period number
	if(taxPeriodNumber>0 && taxPeriodNumber<=52)	{
		taxPeriodNumberNew = taxPeriodNumber;
	}	else if (taxPeriodNumber>52 && taxPeriodNumber<=104)	{
		taxPeriodNumberNew = taxPeriodNumber -52;
	}	else if (taxPeriodNumber>104 && taxPeriodNumber<=156)	{
			taxPeriodNumberNew = taxPeriodNumber -104;
	}	else if (taxPeriodNumber>156 && taxPeriodNumber<=204)	{
		taxPeriodNumberNew = taxPeriodNumber -156;
	}	else {

	}
	let averageTax = taxSum / taxPeriodNumberNew;
	let averageNI = NISum / taxPeriodNumberNew;
	let averageGrossPay = gross_paySum / taxPeriodNumberNew;
	let averageNetPay = netPaySum / taxPeriodNumberNew;
	let averageBasicHoursPay = basicPaySum / taxPeriodNumberNew;
	let averageBasicHours = basicHoursSum / taxPeriodNumberNew ;
	let averageUnsocialPrem = uns_premSum / taxPeriodNumberNew;
	let averageUnsocialHours = uns_prem_unSum / taxPeriodNumberNew;
	let averageOvertimeHours = (ot1_unitsSum + ot2_unitsSum) / taxPeriodNumberNew; //sudeti overtime 1 ir overtime 2 hours
	let averageOvertimePay = (ot1_paySum + ot2_paySum) / taxPeriodNumberNew;; // sudeti overtime1 ir overtime 2 pay

	//weeklyAverages amounts
	weeklyAveragesAmount.innerHTML= averageTax.toFixed(2)+' £<br>';
	if (averageNI>0){weeklyAveragesAmount.innerHTML+= averageNI.toFixed(2)+' £<br>';}
	if (averageGrossPay>0){weeklyAveragesAmount.innerHTML+= averageGrossPay.toFixed(2)+' £<br>';}
	if (averageNetPay>0){weeklyAveragesAmount.innerHTML+= averageNetPay.toFixed(2)+' £<br>';}
	if (averageTax >0 || NISum>0 || averageGrossPay>0 || averageNetPay>0){weeklyAveragesAmount.innerHTML+= '<hr>';}
	if (averageBasicHoursPay>0){weeklyAveragesAmount.innerHTML+= averageBasicHoursPay.toFixed(2)+' £<br>';}
	if (averageBasicHours>0){weeklyAveragesAmount.innerHTML+= averageBasicHours.toFixed(2)+' h<br>';}
	if (averageUnsocialPrem>0){weeklyAveragesAmount.innerHTML+= averageUnsocialPrem.toFixed(2)+' £<br>';}
	if (averageUnsocialHours>0){weeklyAveragesAmount.innerHTML+= averageUnsocialHours.toFixed(2)+' h<br>';}
	if (averageOvertimePay>0){weeklyAveragesAmount.innerHTML+= averageOvertimePay.toFixed(2)+' £<br>';}
	if (averageOvertimeHours>0){weeklyAveragesAmount.innerHTML+= averageOvertimeHours.toFixed(2)+' h<br>';}
	//weeklyAverages names
	weeklyAveragesNames.innerHTML= 'Tax<br>';
	if (NISum>0){weeklyAveragesNames.innerHTML+= 'NI<br>';}
	if (averageGrossPay>0){weeklyAveragesNames.innerHTML+= 'Gross Pay<br>';}
	if (averageNetPay>0){weeklyAveragesNames.innerHTML+= 'Net Pay<br>';}
	if (averageTax >0 || NISum>0 || averageGrossPay>0 || averageNetPay>0){weeklyAveragesNames.innerHTML+= '<hr>';}
	if (averageBasicHoursPay>0){weeklyAveragesNames.innerHTML+= 'Basic Pay<br>';}
	if (averageBasicHours>0){weeklyAveragesNames.innerHTML+= 'Basic Hours<br>';}
	if (averageUnsocialPrem>0){weeklyAveragesNames.innerHTML+= 'Unsocial Basic Pay<br>';}
	if (averageUnsocialHours>0){weeklyAveragesNames.innerHTML+= 'Unsocial Basic Hours<br>';}
	if (averageOvertimePay>0){weeklyAveragesNames.innerHTML+= 'Overtime Pay<br>';}
	if (averageOvertimeHours>0){weeklyAveragesNames.innerHTML+= 'Overtime Hours<br>';}
	//weeklyAverages amounts hidden
	weeklyAveragesAmountHid.innerHTML= 'Premium<br>';
	if (averageNI>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (averageGrossPay>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (averageNetPay>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (averageTax >0 || NISum>0 || averageGrossPay>0 || averageNetPay>0){weeklyAveragesAmountHid.innerHTML+= '<hr>';}
	if (averageBasicHoursPay>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (averageBasicHours>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (averageUnsocialPrem>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (averageUnsocialHours>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (averageOvertimePay>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (averageOvertimeHours>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	//days amounts
	//rename daysinsumNR to day names
	let daysNotSelected = Number(daySum0);
	let daysIn = Number(daySum1);
	let daysOff = Number(daySum2);
	let daysHoliday = Number(daySum3);
	let daysHalfInHalfHol = Number(daySum4);
	let daysUnpaidHoliday = Number(daySum5);
	let daysInSick = Number(daySum6);
	let daysSickness = Number(daySum7);
	let daysAbsence = Number(daySum8);
	let daysParental = Number(daySum9);
	let daysBereavement = Number(daySum10);
	let daysCompassionate = Number(daySum11);
	dayStatisticsAmount.innerHTML= daysIn.toFixed(0);
	if (daysIn<=1){
		dayStatisticsAmount.innerHTML+= ' day<br>';
	}	else {
		dayStatisticsAmount.innerHTML+= ' days<br>';
	}

	if (daysOff>0){
		dayStatisticsAmount.innerHTML+= daysOff.toFixed(0);
		if (daysOff<=1){
			dayStatisticsAmount.innerHTML+= ' day<br>';
		}	else {
			dayStatisticsAmount.innerHTML+= ' days<br>';
		}
	}
	if (daysHoliday>0)	{
		dayStatisticsAmount.innerHTML+= daysHoliday.toFixed(0);
		if (daysHoliday<=1){
			dayStatisticsAmount.innerHTML+= ' day<br>';
		}	else {
			dayStatisticsAmount.innerHTML+= ' days<br>';
		}
	}
	if (daysHalfInHalfHol>0) {
		dayStatisticsAmount.innerHTML+= daysHalfInHalfHol.toFixed(0);
		if (daysHalfInHalfHol<=1){
			dayStatisticsAmount.innerHTML+= ' day<br>';
		}	else {
			dayStatisticsAmount.innerHTML+= ' days<br>';
		}
	}
	if (daysUnpaidHoliday>0) {
		dayStatisticsAmount.innerHTML+= daysUnpaidHoliday.toFixed(0);
		if (daysUnpaidHoliday<=1){
			dayStatisticsAmount.innerHTML+= ' day<br>';
		}	else {
			dayStatisticsAmount.innerHTML+= ' days<br>';
		}
	}
	if (daysInSick>0)	{
		dayStatisticsAmount.innerHTML+= daysInSick.toFixed(0);
		if (daysInSick<=1){
			dayStatisticsAmount.innerHTML+= ' day<br>';
		} else {
			dayStatisticsAmount.innerHTML+= ' days<br>';
		}
	}
	if (daysSickness>0)	{
		dayStatisticsAmount.innerHTML+= daysSickness.toFixed(0);
		if (daysSickness<=1){
			dayStatisticsAmount.innerHTML+= ' day<br>';
		}	else {
			dayStatisticsAmount.innerHTML+= ' days<br>';
		}
	}
	if (daysAbsence>0){
		dayStatisticsAmount.innerHTML+= daysAbsence.toFixed(0);
		if (daysAbsence<=1){
			dayStatisticsAmount.innerHTML+= ' day<br>';
		}	else {
			dayStatisticsAmount.innerHTML+= ' days<br>';
		}
	}
	if (daysParental>0)	{
		dayStatisticsAmount.innerHTML+= daysParental.toFixed(0);
		if (daysParental<=1){
			dayStatisticsAmount.innerHTML+= ' day<br>';
		}	else {
			dayStatisticsAmount.innerHTML+= ' days<br>';
		}
	}
	if (daysBereavement>0)	{
		dayStatisticsAmount.innerHTML+= daysBereavement.toFixed(0);
		if (daysBereavement<=1){
			dayStatisticsAmount.innerHTML+= ' day<br>';
		}	else {
			dayStatisticsAmount.innerHTML+= ' days<br>';
		}
	}

	if (daysCompassionate>0)	{
		dayStatisticsAmount.innerHTML+= daysCompassionate.toFixed(0);
		if (daysCompassionate<=1){
			dayStatisticsAmount.innerHTML+= ' day<br>';
		}	else {
			dayStatisticsAmount.innerHTML+= ' days<br>';
		}
	}
	if (daysNotSelected>0){
		dayStatisticsAmount.innerHTML+= daysNotSelected.toFixed(0);
		if (daysNotSelected<=1){
			dayStatisticsAmount.innerHTML+= ' day<br>';
		}	else {
			dayStatisticsAmount.innerHTML+= ' days<br>';
		}
	}
	if (daysSinceLastSick>0 || daysSinceLastSick==="Today" ){dayStatisticsAmount.innerHTML+= '<hr>';}
	if (daysSinceLastSick ==="Today")	{
		dayStatisticsAmount.innerHTML+= '<span class="red">'+daysSinceLastSick+'.</span>';
	}	else if (daysSinceLastSick>0)	{
		dayStatisticsAmount.innerHTML+= daysSinceLastSick;
		if (daysSinceLastSick<=1){
			dayStatisticsAmount.innerHTML+= ' day<br>';
		}	else {
			dayStatisticsAmount.innerHTML+= ' days<br>';
		}
	}

	// days names
	dayStatisticsNames.innerHTML= 'Days In<br>';
	if (daysOff>0){dayStatisticsNames.innerHTML+= 'Days Off<br>';}
	if (daysHoliday>0){dayStatisticsNames.innerHTML+= 'Holidays<br>';}
	if (daysHalfInHalfHol>0){dayStatisticsNames.innerHTML+= 'Half Days In/Half Holidays<br>';}
	if (daysUnpaidHoliday>0){dayStatisticsNames.innerHTML+= 'Unpaid Holidays<br>';}
	if (daysInSick>0){dayStatisticsNames.innerHTML+= 'Days In/Sickness<br>';}
	if (daysSickness>0){dayStatisticsNames.innerHTML+= 'Days On Sick<br>';}
	if (daysAbsence>0){dayStatisticsNames.innerHTML+= 'Days On Absence<br>';}
	if (daysParental>0){dayStatisticsNames.innerHTML+= 'Parental Leave Days<br>';}
	if (daysBereavement>0){dayStatisticsNames.innerHTML+= 'Bereavement Leave Days<br>';}
	if (daysCompassionate>0){dayStatisticsNames.innerHTML+= 'Compassionate Days<br>';}
	if (daysNotSelected>0){dayStatisticsNames.innerHTML+= 'Days Not Defined<br>';}
	if (daysSinceLastSick>0 || daysSinceLastSick==="Today" ){dayStatisticsNames.innerHTML+= '<hr>';}
	if (daysSinceLastSick>0 || daysSinceLastSick==="Today" ){dayStatisticsNames.innerHTML+= 'Days Since Last Sick<br>';}

	//days amounts hidden
	dayStatisticsAmountHid.innerHTML= 'Premium<br>';
	if (daysOff>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
	if (daysHoliday>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
	if (daysHalfInHalfHol>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
	if (daysUnpaidHoliday>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
	if (daysInSick>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
	if (daysSickness>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
	if (daysAbsence>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
	if (daysParental>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
	if (daysBereavement>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
	if (daysCompassionate>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
	if (daysNotSelected>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
	if (daysSinceLastSick>0 || daysSinceLastSick==="Today" ){dayStatisticsAmountHid.innerHTML+= '<hr>';}
	if (daysSinceLastSick>0 || daysSinceLastSick==="Today" ){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
	//daily averages table
	//daylyaverages amounts
	dailyAveragesAmount.innerHTML= +dailyGrossPay.toFixed(2)+' £<br>';
	if (dailyNetPay>0){dailyAveragesAmount.innerHTML+= dailyNetPay.toFixed(2)+' £<br>';}
	if (dailytaxSum>0){dailyAveragesAmount.innerHTML+= dailytaxSum.toFixed(2)+' £<br>';}
	if (dailyNISum>0){dailyAveragesAmount.innerHTML+= dailyNISum.toFixed(2)+' £<br>';}
	if (dailyHoursAtWork>0){dailyAveragesAmount.innerHTML+= dailyHoursAtWork.toFixed(2)+' h<br>';}
	if (dailyPaidHours>0){dailyAveragesAmount.innerHTML+= dailyPaidHours.toFixed(2)+' h<br>';}

	dailyAveragesAmount.innerHTML+= '<hr>'+dailyGrossPayAllDays.toFixed(2)+' £<br>';
	if (dailyNetPayAllDays>0){dailyAveragesAmount.innerHTML+= dailyNetPayAllDays.toFixed(2)+' £<br>';}
	if (dailytaxSumAllDays>0){dailyAveragesAmount.innerHTML+= dailytaxSumAllDays.toFixed(2)+' £<br>';}
	if (dailyNISumAllDays>0){dailyAveragesAmount.innerHTML+= dailyNISumAllDays.toFixed(2)+' £<br>';}
	if (dailyHoursAtWorkAllDays>0){dailyAveragesAmount.innerHTML+= dailyHoursAtWorkAllDays.toFixed(2)+' h<br>';}
	if (dailyPaidHoursAllDays>0){dailyAveragesAmount.innerHTML+= dailyPaidHoursAllDays.toFixed(2)+' h<br>';}

	//daylyaverages amounts hidden
	dailyAveragesAmountHid.innerHTML= 'Premium<br>';
	if (dailyNetPay>0){dailyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (dailytaxSum>0){dailyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (dailyNISum>0){dailyAveragesAmountHid.innerHTML+='Premium<br>';}
	if (dailyHoursAtWork>0){dailyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (dailyPaidHours>0){dailyAveragesAmountHid.innerHTML+= 'Premium<br>';}

	dailyAveragesAmountHid.innerHTML+= '<hr>Premium<br>';
	if (dailyNetPayAllDays>0){dailyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (dailytaxSumAllDays>0){dailyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (dailyNISumAllDays>0){dailyAveragesAmountHid.innerHTML+='Premium<br>';}
	if (dailyHoursAtWorkAllDays>0){dailyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (dailyPaidHoursAllDays>0){dailyAveragesAmountHid.innerHTML+= 'Premium<br>';}

	// daylyaverages names
	dailyAveragesNames.innerHTML= 'Gross Pay For Day In<br>';
	if (dailyNetPay>0){dailyAveragesNames.innerHTML+= 'Net Pay For Day In<br>';}
	if (dailytaxSum>0){dailyAveragesNames.innerHTML+= 'TAX For Day In<br>';}
	if (dailyNISum>0){dailyAveragesNames.innerHTML+= 'NI For Day In<br>';}
	if (dailyHoursAtWork>0){dailyAveragesNames.innerHTML+= 'Hours Worked Per Day<br>';}
	if (dailyPaidHours>0){dailyAveragesNames.innerHTML+= 'Paid Hours Per Day<br>';}

	dailyAveragesNames.innerHTML+= '<hr>Gross Pay For All Days<br>';
	if (dailyNetPayAllDays>0){dailyAveragesNames.innerHTML+= 'Net Pay For All Days<br>';}
	if (dailytaxSumAllDays>0){dailyAveragesNames.innerHTML+= 'TAX For All Days<br>';}
	if (dailyNISumAllDays>0){dailyAveragesNames.innerHTML+= 'NI For All Days <br>';}
	if (dailyHoursAtWorkAllDays>0){dailyAveragesNames.innerHTML+= 'Hours Worked All Days<br>';}
	if (dailyPaidHoursAllDays>0){dailyAveragesNames.innerHTML+= 'Paid Hours All Days <br>';}
	//hourly averages table
	//hourly averages amounts
	hourlyAveragesAmount.innerHTML= hourlyGrossPay.toFixed(2)+' £<br>';
	if (hourlyNetPay>0){hourlyAveragesAmount.innerHTML+= hourlyNetPay.toFixed(2)+' £<br>';}
	if (hourlytaxSum>0){hourlyAveragesAmount.innerHTML+= hourlytaxSum.toFixed(2)+' £<br>';}
	if (hourlyNISum>0){hourlyAveragesAmount.innerHTML+= hourlyNISum.toFixed(2)+' £<br>';}

	hourlyAveragesAmount.innerHTML+='<hr>';
	hourlyAveragesAmount.innerHTML+= hourlyGrossPayTotalH .toFixed(2)+' £<br>';
	if (hourlyNetPayTotalH >0){hourlyAveragesAmount.innerHTML+= hourlyNetPayTotalH.toFixed(2)+' £<br>';}
	if (hourlytaxSumTotalH >0){hourlyAveragesAmount.innerHTML+= hourlytaxSumTotalH.toFixed(2)+' £<br>';}
	if (hourlyNISumTotalH >0){hourlyAveragesAmount.innerHTML+= hourlyNISumTotalH.toFixed(2)+' £<br>';}

	hourlyAveragesAmount.innerHTML+='<hr>';
	hourlyAveragesAmount.innerHTML+= hourlyGrossPayAllH .toFixed(2)+' £<br>';
	if (hourlyNetPayAllH >0){hourlyAveragesAmount.innerHTML+= hourlyNetPayAllH.toFixed(2)+' £<br>';}
	if (hourlytaxSumAllH >0){hourlyAveragesAmount.innerHTML+= hourlytaxSumAllH.toFixed(2)+' £<br>';}
	if (hourlyNISumAllH >0){hourlyAveragesAmount.innerHTML+= hourlyNISumAllH.toFixed(2)+' £<br>';}

	//hourly averages amounts hidden
	hourlyAveragesAmountHid.innerHTML= 'Premium<br>';
	if (hourlyNetPay>0){hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (hourlytaxSum>0){hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (hourlyNISum>0){hourlyAveragesAmountHid.innerHTML+='Premium<br>';}

	hourlyAveragesAmountHid.innerHTML+='<hr>';
	hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';
	if (hourlyNetPayTotalH >0){hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (hourlytaxSumTotalH >0){hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (hourlyNISumTotalH >0){hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';}

	hourlyAveragesAmountHid.innerHTML+='<hr>';
	hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';
	if (hourlyNetPayAllH >0){hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (hourlytaxSumAllH >0){hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (hourlyNISumAllH >0){hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';}

	// hourly averages names
	hourlyAveragesNames.innerHTML= 'Paid Hours Avr. Gross Pay<br>';
	if (hourlyNetPay>0){hourlyAveragesNames.innerHTML+= 'Paid Hours Avr. Net Pay<br>';}
	if (hourlytaxSum>0){hourlyAveragesNames.innerHTML+= 'Paid Hours Avr. TAX<br>';}
	if (hourlyNISum>0){hourlyAveragesNames.innerHTML+= 'Paid Hours Avr. NI<br>';}

	hourlyAveragesNames.innerHTML+='<hr>';
	hourlyAveragesNames.innerHTML+= 'Work Hours Avr. Gross Pay<br>';
	if (hourlyNetPayTotalH >0){hourlyAveragesNames.innerHTML+= 'Work Hours Avr. Net Pay<br>';}
	if (hourlytaxSumTotalH >0){hourlyAveragesNames.innerHTML+= 'Work Hours Avr. TAX<br>';}
	if (hourlyNISumTotalH >0){hourlyAveragesNames.innerHTML+= 'Work Hours Avr. NI<br>';}

	hourlyAveragesNames.innerHTML+='<hr>';
	hourlyAveragesNames.innerHTML+= 'All Hours Avr. Gross Pay<br>';
	if (hourlyNetPayAllH >0){hourlyAveragesNames.innerHTML+= 'All Hours Avr. Net Pay<br>';}
	if (hourlytaxSumAllH >0){hourlyAveragesNames.innerHTML+= 'All Hours Avr. TAX<br>';}
	if (hourlyNISumAllH >0){hourlyAveragesNames.innerHTML+= 'All Hours Avr. NI<br>';}

	//christmas and summer saving buttons values.
	//either show or hide paysavings div
	if (summerSavingsPaymentCollected > 0 || christmasSavingsPaymentCollected >0 || payChristmasSavingsCheckRes == "true"||
	 paySummerSavingsCheckRes=="true"){
		 	paySavingsDiv.removeAttribute("class");
				paySavingsDiv.setAttribute("class", "col-sm-12 col-xs-12 marginBetweenElements marginBetweenElementsBottom noPadding");
	}	else {
		  paySavingsDiv.setAttribute("class", "col-sm-12 col-xs-12 marginBetweenElements marginBetweenElementsBottom noPadding hidden");
	}

		//1 hide both buttons (the most likely one)
		if (summerSavingsPaymentCollected<=0 && paySummerSavingsCheckRes == "false" && christmasSavingsPaymentCollected<=0
		 && payChristmasSavingsCheckRes == "false")	{
			paySummerSavings.style.display = "none";
			payChristmasSavings.style.display = "none";
		}
		//2 show both button
		else if (summerSavingsPaymentCollected>0 && paySummerSavingsCheckRes == "true" && christmasSavingsPaymentCollected >0
		&& payChristmasSavingsCheckRes == "false")	{
			payChristmasSavings.style.display = "initial";
			paySummerSavings.style.display = "initial";
		}
		//3 showsummer savings button
		else if (summerSavingsPaymentCollected>0 && paySummerSavingsCheckRes == "true" && christmasSavingsPaymentCollected<=0
		&& payChristmasSavingsCheckRes == "false")	{
			paySummerSavings.style.display = "initial";
			payChristmasSavings.style.display = "none";
		}
		//4 show both buttons
		else if (summerSavingsPaymentCollected>0 && paySummerSavingsCheckRes == "true" && christmasSavingsPaymentCollected<=0
		&& payChristmasSavingsCheckRes == "true")		{
			payChristmasSavings.style.display = "initial";
			paySummerSavings.style.display = "initial";
		}
		//5 show both buttons
		else if (summerSavingsPaymentCollected>0 && paySummerSavingsCheckRes == "false" && christmasSavingsPaymentCollected<=0
		&& payChristmasSavingsCheckRes == "true")	{
			payChristmasSavings.style.display = "initial";
			paySummerSavings.style.display = "initial";
		}
		//6 show both buttons
		else if (summerSavingsPaymentCollected>0 && paySummerSavingsCheckRes == "true" && christmasSavingsPaymentCollected>0 &&
		payChristmasSavingsCheckRes == "true")	{
			payChristmasSavings.style.display = "initial";
			paySummerSavings.style.display = "initial";
		}
		//7 show both buttons
		else if (summerSavingsPaymentCollected>0 && paySummerSavingsCheckRes == "false" && christmasSavingsPaymentCollected>0
		&& payChristmasSavingsCheckRes == "true")		{
			payChristmasSavings.style.display = "initial";
			paySummerSavings.style.display = "initial";
		}
		//8 show summer savings button
		else if (summerSavingsPaymentCollected>0 && paySummerSavingsCheckRes == "false" && christmasSavingsPaymentCollected<=0
		&& payChristmasSavingsCheckRes == "false")	{
			paySummerSavings.style.display = "initial";
			payChristmasSavings.style.display = "none";
		}
		//9 rodome christmas savings mygtuka
		else if (summerSavingsPaymentCollected<=0 && paySummerSavingsCheckRes == "false" && christmasSavingsPaymentCollected>0 &&
		payChristmasSavingsCheckRes == "false")	{
			paySummerSavings.style.display = "none";
			payChristmasSavings.style.display = "initial";
		}
		//10 show both buttons
		else if (summerSavingsPaymentCollected<=0 && paySummerSavingsCheckRes == "true" && christmasSavingsPaymentCollected >0
		&& payChristmasSavingsCheckRes == "false")	{
			payChristmasSavings.style.display = "initial";
			paySummerSavings.style.display = "initial";
		}
		//11 show summer savings button
		else if (summerSavingsPaymentCollected<=0 && paySummerSavingsCheckRes == "true" && christmasSavingsPaymentCollected<=0
		&& payChristmasSavingsCheckRes == "false")	{
			paySummerSavings.style.display = "initial";
			payChristmasSavings.style.display = "none";
		}
		//12 show both buttons
		else if (summerSavingsPaymentCollected<=0 && paySummerSavingsCheckRes == "true" && christmasSavingsPaymentCollected<=0
		&& payChristmasSavingsCheckRes == "true")	{
			payChristmasSavings.style.display = "initial";
			paySummerSavings.style.display = "initial";
		}
		//13 show christmas savings button
		else if (summerSavingsPaymentCollected<=0 && paySummerSavingsCheckRes == "false" && christmasSavingsPaymentCollected<=0
		&& payChristmasSavingsCheckRes == "true")	{
			paySummerSavings.style.display = "none";
			payChristmasSavings.style.display = "initial";
		}
		//14 show both buttons
		else if (summerSavingsPaymentCollected<=0 && paySummerSavingsCheckRes == "true" && christmasSavingsPaymentCollected>0
		 && payChristmasSavingsCheckRes == "true")	{
			payChristmasSavings.style.display = "initial";
			paySummerSavings.style.display = "initial";
		}
		//15 show christmas savings button
		else if (summerSavingsPaymentCollected<=0 && paySummerSavingsCheckRes == "false" && christmasSavingsPaymentCollected>0
		&& payChristmasSavingsCheckRes == "true")		{
			paySummerSavings.style.display = "none";
			payChristmasSavings.style.display = "initial";
		}
		//16 show both buttons
		else if (summerSavingsPaymentCollected>0 && paySummerSavingsCheckRes == "false" && christmasSavingsPaymentCollected>0
		&& payChristmasSavingsCheckRes == "false")	{
			payChristmasSavings.style.display = "initial";
			paySummerSavings.style.display = "initial";
		}
		// hide both buttons
		else	{
			paySummerSavings.style.display = "none";
			payChristmasSavings.style.display = "none";
		}


		if(payChristmasSavingsCheckRes == "true")
			{
			document.getElementById("payChristmasSavingsCheck"+taxPeriodNumber).setAttribute("checked", "checked")
			}
		else if (payChristmasSavingsCheckRes == "false")
			{
			document.getElementById("payChristmasSavingsCheck"+taxPeriodNumber).removeAttribute("checked");
			}
		else{
			alert('Something wrong with Christmas payout checkbox!');
			}

		if(paySummerSavingsCheckRes == "true")
			{
			document.getElementById("paySummerSavingsCheck"+taxPeriodNumber).setAttribute("checked", "checked")
			}
		else if (paySummerSavingsCheckRes == "false")
			{
			document.getElementById("paySummerSavingsCheck"+taxPeriodNumber).removeAttribute("checked");
			}
		else{
			alert('Something wrong with Summer payout checkbox!');
			}
	//CanvaJs color arrays-------------------------------------------------------------//
	//must be a bit darker color tone then in the css file, otherwise the pie chart looks blurry
	let dayInColor = '#e6e600';
	let holidayColor = '#009900';
	let sicknessColor = '#ff9999';
	let familyLeaveColor = '#ffa64d';
	let bereavementColor = '#000033';
	let compassionateColor = '#ffce99';
	let overtime1Color = '#cccc00';
	let overtime2Color = '#b3b300';
	let saturdayColor = '#df80ff';
	let sundayColor = '#d966ff';
	let bankHolidayColor = '#00ff55';
	let bankHolidayBonusColor = '#00cc44';
	let backPayColor = '#e69900';
	let pieceWorkColor = '#ffd633';
	let addPay1Color = '#ffb380';
	let addPay2Color = '#ffa366';
	let addPay3Color = '#ff944d';
	let christmasColor = '#ff6633';
	let summerColor = '#ff8c66';
	let salaryColor = '#ffff00';
	let bonusColor = '#cc9900';
	let commissionsColor = '#ff8080';

	let paymentsColorArray = [dayInColor, dayInColor, holidayColor, holidayColor, holidayColor,sicknessColor, sicknessColor];
	paymentsColorArray.push(familyLeaveColor,familyLeaveColor, bereavementColor, bereavementColor, compassionateColor,compassionateColor);
	paymentsColorArray.push(overtime1Color,overtime2Color, saturdayColor, sundayColor, bankHolidayColor, bankHolidayBonusColor);
	paymentsColorArray.push(backPayColor, pieceWorkColor, sicknessColor, familyLeaveColor, addPay1Color, addPay2Color);
	paymentsColorArray.push(addPay3Color, christmasColor, summerColor, familyLeaveColor, salaryColor, bonusColor, commissionsColor);
	CanvasJS.addColorSet('paymentsColors', paymentsColorArray);

	let taxAmuntColor = '#ff3333';
	let NIAmountColor = '#ff4d4d';
	let unionColor = '#ff6666';
	let pensionColor = '#ff8080';
	let copanyLoanColor = '#ff9999';
	let studentLoanColor = '#ffb3b3';
	let otherDeductionColor = '#ffcccc';
	let otherDeduction2Color = '#ff1a1a';
	let otherDeduction3Color = '#ff0000';
	let netPayColor = '#69cc00';

	let deductionsColorArray = [taxAmuntColor, NIAmountColor, unionColor, pensionColor, christmasColor, summerColor, copanyLoanColor];
	deductionsColorArray.push(studentLoanColor, otherDeductionColor, otherDeduction2Color, otherDeduction3Color, netPayColor);
	CanvasJS.addColorSet('deductionsColors', deductionsColorArray);

	let otherColor = backPayColor;
	let payStructureColorsArray = [dayInColor, holidayColor, sicknessColor, overtime1Color, bankHolidayColor, familyLeaveColor, otherColor];
	CanvasJS.addColorSet('payStructureColors', payStructureColorsArray);

	let unpaidBreaksColor = '#80bfff';
	let totalHoursColorsArray = [dayInColor, unpaidBreaksColor, overtime1Color, overtime2Color, holidayColor, holidayColor];
	totalHoursColorsArray.push(sicknessColor, familyLeaveColor, bereavementColor, compassionateColor);
	CanvasJS.addColorSet('totalHoursColors', totalHoursColorsArray);

	let notSelectedColor = '#b3daff';
	let dayOffColor = '#c3c3a2';
	let halfInHalfOffColor = '#e6ffb3';
	let unpaidHolColor = '#e6ffe6';
	let dayInSickColor = '#ffcccc';
	let absenceColor = '#ccebff';
	let totalDaysColorsArray = [dayInColor, notSelectedColor, dayOffColor, holidayColor, halfInHalfOffColor, unpaidHolColor];
	totalDaysColorsArray.push(dayInSickColor, sicknessColor, absenceColor, familyLeaveColor, bereavementColor, compassionateColor);
	CanvasJS.addColorSet('totalDaysColors', totalDaysColorsArray);

	let holidaysAvailableColor = '#00ff00';
	let holidaysBookedColor = '#00cc00';
	let holidaychartColorsArray = [holidayColor, holidaysBookedColor, holidaysAvailableColor];
	CanvasJS.addColorSet('holidayChartColors', holidaychartColorsArray);

	let last10NetPayColorsArray = [netPayColor, taxAmuntColor];
	CanvasJS.addColorSet('last10NetPayColors', last10NetPayColorsArray);

	let last10WorkHoursPayColorsArray = [dayInColor, holidayColor, sicknessColor, familyLeaveColor, bereavementColor, compassionateColor];
	CanvasJS.addColorSet('last10WorkHoursPayColors', last10WorkHoursPayColorsArray);
	//last 10 weeks net pay chart
	//check if we need to draw a chart;
	if(last10NetPayArray[9]>0||last10DeductionsArray[9]>0||
	last10NetPayArray[8]>0||last10DeductionsArray[8]>0||
	last10NetPayArray[7]>0||last10DeductionsArray[7]>0||
	last10NetPayArray[6]>0||last10DeductionsArray[6]>0||
	last10NetPayArray[5]>0||last10DeductionsArray[5]>0||
	last10NetPayArray[4]>0||last10DeductionsArray[4]>0||
	last10NetPayArray[3]>0||last10DeductionsArray[3]>0||
	last10NetPayArray[2]>0||last10DeductionsArray[2]>0||
	last10NetPayArray[1]>0||last10DeductionsArray[1]>0||
	last10NetPayArray[0]>0||last10DeductionsArray[0]>0){
		var Last10WeeksNetPaysChart = new CanvasJS.Chart("columnChartNetPay", {
		animationEnabled: true,
		exportEnabled: true,
		backgroundColor: insideBoxColor,
		colorSet: 'last10NetPayColors',
		title:{
			text: "Last 10 Weeks Net Pay and Deductions",
		},
		data: [{
			type: "stackedColumn",
			name: "Net Pay",
			showInLegend: true,
			dataPoints: [
				{ y: Number(last10NetPayArray[0]), x: taxPeriodNumberNew},
				{ y: Number(last10NetPayArray[1]), x: taxPeriodNumberNew-1},
				{ y: Number(last10NetPayArray[2]), x: taxPeriodNumberNew-2},
				{ y: Number(last10NetPayArray[3]), x: taxPeriodNumberNew-3},
				{ y: Number(last10NetPayArray[4]), x: taxPeriodNumberNew-4},
				{ y: Number(last10NetPayArray[5]), x: taxPeriodNumberNew-5},
				{ y: Number(last10NetPayArray[6]), x: taxPeriodNumberNew-6},
				{ y: Number(last10NetPayArray[7]), x: taxPeriodNumberNew-7},
				{ y: Number(last10NetPayArray[8]), x: taxPeriodNumberNew-8},
				{ y: Number(last10NetPayArray[9]), x: taxPeriodNumberNew-9}
			]
			},
			{
				type: "stackedColumn",
				name: "Deductions",
				showInLegend: true,
				dataPoints: [
					{ y: Number(last10DeductionsArray[0]), x: taxPeriodNumberNew },
					{ y: Number(last10DeductionsArray[1]), x: taxPeriodNumberNew-1},
					{ y: Number(last10DeductionsArray[2]), x: taxPeriodNumberNew-2},
					{ y: Number(last10DeductionsArray[3]), x: taxPeriodNumberNew-3},
					{ y: Number(last10DeductionsArray[4]), x: taxPeriodNumberNew-4},
					{ y: Number(last10DeductionsArray[5]), x: taxPeriodNumberNew-5},
					{ y: Number(last10DeductionsArray[6]), x: taxPeriodNumberNew-6},
					{ y: Number(last10DeductionsArray[7]), x: taxPeriodNumberNew-7},
					{ y: Number(last10DeductionsArray[8]), x: taxPeriodNumberNew-8},
					{ y: Number(last10DeductionsArray[9]), x: taxPeriodNumberNew-9}
				]
			}]
	});
	Last10WeeksNetPaysChart.render();
} else{
	document.getElementById('columnChartNetPay').innerHTML = "<span class='noChartText'><br><br>No Data Provided<br>For Chart.</span>";
	}
	//last 10 weeks hours chart
	let last10weeksHoursSum = 0;
	for (let i=0;i<10;i++) {
		last10weeksHoursSum += Number(last10WorkingHoursArray[i]);
		last10weeksHoursSum += Number(last10AllHolidayHoursArray[i]);
		last10weeksHoursSum += Number(last10SickHoursArray[i]);
		last10weeksHoursSum += Number(last10FamHoursArray[i]);
		last10weeksHoursSum += Number(last10BerHoursArray[i]);
		last10weeksHoursSum += Number(last10CompHoursArray[i]);
	}
	if(last10weeksHoursSum>0){
		var Last10WeeksPaidHoursChart = new CanvasJS.Chart("columnChartPaidHours", {
			nimationEnabled: true,
			exportEnabled: true,
			backgroundColor: insideBoxColor,
			colorSet: 'last10WorkHoursPayColors',
			title:{
				text: "Last 10 Weeks Paid Hours Chart",
			},
			data: [{
				type: "stackedColumn",
				name: "Work",
				showInLegend: true,
				dataPoints: [
					{ y: Number(last10WorkingHoursArray[0]), x: taxPeriodNumberNew},
					{ y: Number(last10WorkingHoursArray[1]), x: taxPeriodNumberNew-1},
					{ y: Number(last10WorkingHoursArray[2]), x: taxPeriodNumberNew-2},
					{ y: Number(last10WorkingHoursArray[3]), x: taxPeriodNumberNew-3},
					{ y: Number(last10WorkingHoursArray[4]), x: taxPeriodNumberNew-4},
					{ y: Number(last10WorkingHoursArray[5]), x: taxPeriodNumberNew-5},
					{ y: Number(last10WorkingHoursArray[6]), x: taxPeriodNumberNew-6},
					{ y: Number(last10WorkingHoursArray[7]), x: taxPeriodNumberNew-7},
					{ y: Number(last10WorkingHoursArray[8]), x: taxPeriodNumberNew-8},
					{ y: Number(last10WorkingHoursArray[9]), x: taxPeriodNumberNew-9}
				]
			},
			{
				type: "stackedColumn",
				name: "Holiday",
				showInLegend: true,
				dataPoints: [
					{ y: Number(last10AllHolidayHoursArray[0]), x: taxPeriodNumberNew},
					{ y: Number(last10AllHolidayHoursArray[1]), x: taxPeriodNumberNew-1},
					{ y: Number(last10AllHolidayHoursArray[2]), x: taxPeriodNumberNew-2},
					{ y: Number(last10AllHolidayHoursArray[3]), x: taxPeriodNumberNew-3},
					{ y: Number(last10AllHolidayHoursArray[4]), x: taxPeriodNumberNew-4},
					{ y: Number(last10AllHolidayHoursArray[5]), x: taxPeriodNumberNew-5},
					{ y: Number(last10AllHolidayHoursArray[6]), x: taxPeriodNumberNew-6},
					{ y: Number(last10AllHolidayHoursArray[7]), x: taxPeriodNumberNew-7},
					{ y: Number(last10AllHolidayHoursArray[8]), x: taxPeriodNumberNew-8},
					{ y: Number(last10AllHolidayHoursArray[9]), x: taxPeriodNumberNew-9}
					]
				},
			{
				type: "stackedColumn",
				name: "Sick",
				showInLegend: true,
				dataPoints: [
					{ y: Number(last10SickHoursArray[0]), x: taxPeriodNumberNew},
					{ y: Number(last10SickHoursArray[1]), x: taxPeriodNumberNew-1},
					{ y: Number(last10SickHoursArray[2]), x: taxPeriodNumberNew-2},
					{ y: Number(last10SickHoursArray[3]), x: taxPeriodNumberNew-3},
					{ y: Number(last10SickHoursArray[4]), x: taxPeriodNumberNew-4},
					{ y: Number(last10SickHoursArray[5]), x: taxPeriodNumberNew-5},
					{ y: Number(last10SickHoursArray[6]), x: taxPeriodNumberNew-6},
					{ y: Number(last10SickHoursArray[7]), x: taxPeriodNumberNew-7},
					{ y: Number(last10SickHoursArray[8]), x: taxPeriodNumberNew-8},
					{ y: Number(last10SickHoursArray[9]), x: taxPeriodNumberNew-9}
					]
				},
				{
				type: "stackedColumn",
				name: "Paternity",
				showInLegend: true,
				dataPoints: [
					{ y: Number(last10FamHoursArray[0]), x: taxPeriodNumberNew},
					{ y: Number(last10FamHoursArray[1]), x: taxPeriodNumberNew-1},
					{ y: Number(last10FamHoursArray[2]), x: taxPeriodNumberNew-2},
					{ y: Number(last10FamHoursArray[3]), x: taxPeriodNumberNew-3},
					{ y: Number(last10FamHoursArray[4]), x: taxPeriodNumberNew-4},
					{ y: Number(last10FamHoursArray[5]), x: taxPeriodNumberNew-5},
					{ y: Number(last10FamHoursArray[6]), x: taxPeriodNumberNew-6},
					{ y: Number(last10FamHoursArray[7]), x: taxPeriodNumberNew-7},
					{ y: Number(last10FamHoursArray[8]), x: taxPeriodNumberNew-8},
					{ y: Number(last10FamHoursArray[9]), x: taxPeriodNumberNew-9}
				]
			},
			{
				type: "stackedColumn",
				name: "Work",
				showInLegend: false,
				dataPoints: [
					{ y: Number(last10BerHoursArray[0]), x: taxPeriodNumberNew},
					{ y: Number(last10BerHoursArray[1]), x: taxPeriodNumberNew-1},
					{ y: Number(last10BerHoursArray[2]), x: taxPeriodNumberNew-2},
					{ y: Number(last10BerHoursArray[3]), x: taxPeriodNumberNew-3},
					{ y: Number(last10BerHoursArray[4]), x: taxPeriodNumberNew-4},
					{ y: Number(last10BerHoursArray[5]), x: taxPeriodNumberNew-5},
					{ y: Number(last10BerHoursArray[6]), x: taxPeriodNumberNew-6},
					{ y: Number(last10BerHoursArray[7]), x: taxPeriodNumberNew-7},
					{ y: Number(last10BerHoursArray[8]), x: taxPeriodNumberNew-8},
					{ y: Number(last10BerHoursArray[9]), x: taxPeriodNumberNew-9}
				]
			},
			{
				type: "stackedColumn",
				name: "Holiday",
				showInLegend: false,
				dataPoints: [
					{ y: Number(last10CompHoursArray[0]), x: taxPeriodNumberNew },
					{ y: Number(last10CompHoursArray[1]), x: taxPeriodNumberNew-1},
					{ y: Number(last10CompHoursArray[2]), x: taxPeriodNumberNew-2},
					{ y: Number(last10CompHoursArray[3]), x: taxPeriodNumberNew-3},
					{ y: Number(last10CompHoursArray[4]), x: taxPeriodNumberNew-4},
					{ y: Number(last10CompHoursArray[5]), x: taxPeriodNumberNew-5},
					{ y: Number(last10CompHoursArray[6]), x: taxPeriodNumberNew-6},
					{ y: Number(last10CompHoursArray[7]), x: taxPeriodNumberNew-7},
					{ y: Number(last10CompHoursArray[8]), x: taxPeriodNumberNew-8},
					{ y: Number(last10CompHoursArray[9]), x: taxPeriodNumberNew-9}
				]
			}]
		});
		Last10WeeksPaidHoursChart.render();
	} else {
		document.getElementById('columnChartPaidHours').innerHTML = "<span class='noChartText'><br><br>No Data Provided<br>For Chart.</span>";
	}

	//other charts
	//paymentsCharts
	if (basicHoursPay >0||unsocial_prem>0||unsocial_prem_hol>0||unsocial_prem_sick>0||unsocial_prem_family>0||
	unsocial_prem_bereavement>0||unsocial_prem_compassionate>0||OT1Pay>0||OT2Pay>0||enhancedHolidayPay>0||holidayPay>0||
	saturdayExtraPay>0||sundayExtraPay>0||sicknessPay>0||familyPay>0||bereavementPay>0||compassionatePay>0||bankHolidayHoursPay>0||
	bankHolidayClockInBonus>0||payBack>0||pieceWork>0||SSP>0||SPP>0||additionalPayment>0||additionalPayment2>0||additionalPayment3>0||
	christmasSavingsPayment>0||summerSavingsPayment>0||SAP>0||salary>0||bonus>0||commissions>0)	{
		var paymentsPieChart = new CanvasJS.Chart("paymentsPieChart", {
		animationEnabled: true,
		exportEnabled: true,
		backgroundColor: insideBoxColor,
		colorSet: 'paymentsColors',
		title: {
			text: "Payments Pie Chart"
		},
		data: [{
			type: "pie",
			startAngle: 240,
			indexLabelFormatter: function(e) {
		 	if (e.dataPoint.y === 0)
			 	return "";
		 	else
			 return CanvasJS.formatNumber(e.dataPoint.label)+" "+CanvasJS.formatNumber(e.percent) + "%";
	 },
			indexLabel: "{label} {y}",
			dataPoints: [
				{y: basicHoursPay, label: "Basic Pay", exploded: true},
				{y: unsocial_prem, label: "Uns. Premium"},
				{y: enhancedHolidayPay, label: "Enhanced Holiday Pay"},
				{y: holidayPay, label: "Holiday Pay"},
				{y: unsocial_prem_hol, label: "Uns Prem. Holidays"},
				{y: sicknessPay, label: "Sickness Pay"},
				{y: unsocial_prem_sick, label: "Uns Prem. Sickness"},
				{y: familyPay, label: "Paternity Pay"},
				{y: unsocial_prem_family, label: "Uns Prem. Paternity"},
				{y: bereavementPay, label: "Bereavement Pay"},
				{y: unsocial_prem_bereavement, label: "Uns Prem. Bereav."},
				{y: compassionatePay, label: "Compassionate Pay"},
				{y: unsocial_prem_compassionate, label: "Uns Prem. Compass."},
				{y: OT1Pay, label: "Overtime 1 Pay"},
				{y: OT2Pay, label: "Overtime 2 Pay"},
				{y: saturdayExtraPay, label: "Saturday Extra Pay"},
				{y: sundayExtraPay, label: "Sunday Extra Pay"},
				{y: bankHolidayHoursPay, label: "Bank Holiday Pay"},
				{y: bankHolidayClockInBonus, label: "Bank Holiday Bonus"},
				{y: payBack, label: "Back Pay"},
				{y: pieceWork, label: "Piece Work"},
				{y: SSP, label: "SSP"},
				{y: SPP, label: "SPP"},
				{y: additionalPayment, label: "Add. Payment 1"},
				{y: additionalPayment2, label: "Add. Payment 2"},
				{y: additionalPayment3, label: "Add. Payment 3"},
				{y: christmasSavingsPayment, label: "Christmas Sav. Payment"},
				{y: summerSavingsPayment, label: "Summer Sav. Payment"},
				{y: SAP, label: "SAP"},
				{y: salary, label: "Salary"},
				{y: bonus, label: "Bonus"},
				{y: commissions, label: "Commissions"}
			]
		}]
	});
	paymentsPieChart.render();
	} else {
		document.getElementById("paymentsPieChart").innerHTML = "<span class='noChartText'><br><br>No Data Provided<br>For Chart.</span>";
	}

	//if peniosn is not a salary sacrifise, show it in deductions chart
	if (pensionBeforeTax ===0) {
		var pensionAmountChart = pensionAmount;
		var pensionSumChart = pensionSum;
		var pensionSumLast12WeeksChart = pensionSumLast12Weeks;
	} else {
		var pensionAmountChart = 0;
		var pensionSumChart = 0;
		var pensionSumLast12WeeksChart = 0;
	}
	//deductions chart
	if (christmasSavingsDeduction<0){christmasSavingsDeduction = 0;}
	if (summerSavingsDeduction<0){summerSavingsDeduction = 0;}
	if (taxAmount>0||NIAmount>0||unionDeduction>0||pensionAmountChart>0||christmasSavingsDeduction>0||summerSavingsDeduction>0||
		companyLoan>0||studentLoanDeduction>0||otherDeduction>0||otherDeduction2>0||otherDeduction3>0||netPay>0){
		var deductionsPieChart = new CanvasJS.Chart("deductionsPieChart", {
		animationEnabled: true,
		exportEnabled: true,
		backgroundColor: insideBoxColor,
		colorSet: 'deductionsColors',
		title: {
			text: "Deductions Pie Chart"
		},
		data: [{
			type: "pie",
			startAngle: 240,
			indexLabelFormatter: function(f) {
				if (f.dataPoint.y === 0)
					return "";
				else
				 return CanvasJS.formatNumber(f.dataPoint.label)+" "+CanvasJS.formatNumber(f.percent) +"%";
	 		},
			indexLabel: "{label} {y}",
			dataPoints: [
				{y: taxAmount, label: "Tax"},
				{y: NIAmount, label: "NI"},
				{y: unionDeduction, label: "Union"},
				{y: pensionAmountChart, label: "Pension"},
				{y: christmasSavingsDeduction, label: "Christmas Savings"},
				{y: summerSavingsDeduction, label: "Summer Savings."},
				{y: companyLoan, label: "Company Loan"},
				{y: studentLoanDeduction, label: "Student Loan"},
				{y: otherDeduction, label: otherDeductionName},
				{y: otherDeduction2, label: otherDeduction2Name},
				{y: otherDeduction3, label: otherDeduction3Name},
				{y: netPay, label: "Net Pay",  exploded: true}
			]
		}]
	});
	deductionsPieChart.render();
	} else {
		document.getElementById("deductionsPieChart").innerHTML = "<span class='noChartText'><br><br>No Data Provided<br>For Chart.</span>";
	}
	//yearToDate chart
	if(taxSum>0||NISum>0||union_deSum>0||pensionSumChart>0||chris_savSum>0||summer_savSum>0||companyLoanSum>0||
	studentLoanDeductionSum>0||other_de>0||add_deSum2>0||add_deSum3>0||netPaySum>0){
		var yearToDatePieChart = new CanvasJS.Chart("yearToDatePieChart", {
		animationEnabled: true,
		exportEnabled: true,
		backgroundColor: insideBoxColor,
		colorSet: 'deductionsColors',
		title: {
			text: "Year To Date Pie Chart"
		},
		data: [{
			type: "pie",
			startAngle: 240,
			indexLabelFormatter: function(f) {
				if (f.dataPoint.y === 0)
					return "";
				else
				 return CanvasJS.formatNumber(f.dataPoint.label)+" "+CanvasJS.formatNumber(f.percent) +"%";
	 		},
			indexLabel: "{label} {y}",
			dataPoints: [
				{y: taxSum, label: "Tax"},
				{y: NISum, label: "NI"},
				{y: union_deSum, label: "Union"},
				{y: pensionSumChart, label: "Pension"},
				{y: chris_savSum , label: "Christmas Savings"},
				{y: summer_savSum , label: "Summer Savings."},
				{y: companyLoanSum , label: "Company Loan"},
				{y: studentLoanDeductionSum, label: "Student Loan"},
				{y: other_de , label: 'Add. Deduction'},
				{y: add_deSum2, label: 'Add. Deduction 2'},
				{y: add_deSum3, label: 'Add. Deduction 3'},
				{y: netPaySum , label: "Net Pay",  exploded: true}
			]
		}]
	});
	yearToDatePieChart.render();
	} else {
		document.getElementById("yearToDatePieChart").innerHTML = "<span class='noChartText'><br><br>No Data Provided<br>For Chart.</span>";
	}
	//Year to date Percentage chart
	if (basicPaymentsPercentage>0||holidaysPercentage>0||sicknessPercentage>0||overtimePercentage>0||bankHolidayPercentge>0||
	parentalPercentage>0||otherPercentage>0){
		var yearToDatePercentagePieChart = new CanvasJS.Chart("yearToDatePercentagePieChart", {
		animationEnabled: true,
		exportEnabled: true,
		backgroundColor: insideBoxColor,
		colorSet: 'payStructureColors',
		title: {
			text: "Year To Date Pay Structure"
		},
		data: [{
			type: "pie",
			startAngle: 240,
			indexLabelFormatter: function(f) {
				if (f.dataPoint.y === 0)
					return "";
				else
				 return CanvasJS.formatNumber(f.dataPoint.label)+" "+CanvasJS.formatNumber(f.percent) +"%";
			},
			indexLabel: "{label} {y}",
			dataPoints: [
				{y: basicPaymentsPercentage, label: "Basic Payments", exploded: true,},
				{y: holidaysPercentage, label: "Holiday Payments"},
				{y: sicknessPercentage, label: "Sick Payments"},
				{y: overtimePercentage, label: "Overtime Payments"},
				{y: bankHolidayPercentge, label: "Bank Holiday Payments"},
				{y: parentalPercentage, label: "Paternity Payments"},
				{y: otherPercentage, label: "Other Payments"}
			]
		}]
	});
	yearToDatePercentagePieChart.render();
	} else {
		document.getElementById("yearToDatePercentagePieChart").innerHTML = "<span class='noChartText'><br><br>No Data Provided<br>For Chart.</span>";
	}
	if (basicHoursPay >0||unsocial_prem>0||unsocial_prem_hol>0||unsocial_prem_sick>0||unsocial_prem_family>0||
	unsocial_prem_bereavement>0||unsocial_prem_compassionate>0||OT1Pay>0||OT2Pay>0||enhancedHolidayPay>0||holidayPay>0||
	saturdayExtraPay>0||sundayExtraPay>0||sicknessPay>0||familyPay>0||bereavementPay>0||compassionatePay>0||bankHolidayHoursPay>0||
	bankHolidayClockInBonus>0||payBack>0||pieceWork>0||SSP>0||SPP>0||additionalPayment>0||additionalPayment2>0||additionalPayment3>0||
	christmasSavingsPayment>0||summerSavingsPayment>0||SAP>0||salary>0||bonus>0||commissions>0)	{
		var yearToDateIIPieChart = new CanvasJS.Chart("yearToDateIIPieChart", {
		animationEnabled: true,
		exportEnabled: true,
		backgroundColor: insideBoxColor,
		colorSet: 'paymentsColors',
		title: {
			text: "Total Payments Pie Chart"
		},
		data: [{
			type: "pie",
			startAngle: 240,
			indexLabelFormatter: function(e) {
		 	if (e.dataPoint.y === 0)
			 	return "";
		 	else
			 return CanvasJS.formatNumber(e.dataPoint.label)+" "+CanvasJS.formatNumber(e.percent) + "%";
	 },
			indexLabel: "{label} {y}",
			dataPoints: [
				{y: basicPaySum, label: "Basic Pay", exploded: true},
				{y: unsocial_prem, label: "Uns. Premium"},
				{y: enhol_paySum, label: "Enhanced Holiday Pay"},
				{y: hol_paySum, label: "Holiday Pay"},
				{y: uns_holSum, label: "Uns Prem. Holidays"},
				{y: sick_paySum, label: "Sickness Pay"},
				{y: uns_sickSum, label: "Uns Prem. Sickness"},
				{y: fam_paySum, label: "Paternity Pay"},
				{y: uns_familySum, label: "Uns Prem. Paternity"},
				{y: ber_paySum, label: "Bereavement Pay"},
				{y: uns_berSum, label: "Uns Prem. Bereav."},
				{y: comp_paySum, label: "Compassionate Pay"},
				{y: uns_compSum, label: "Uns Prem. Compass."},
				{y: ot1_paySum, label: "Overtime 1 Pay"},
				{y: ot2_paySum, label: "Overtime 2 Pay"},
				{y: saturdayExtraPaySum, label: "Saturday Extra Pay"},
				{y: sundayExtraPaySum, label: "Sunday Extra Pay"},
				{y: bhol_paySum, label: "Bank Holiday Pay"},
				{y: bhol_bonusSum, label: "Bank Holiday Bonus"},
				{y: paybackSum, label: "Back Pay"},
				{y: pieceWorkSum , label: "Piece Work"},
				{y: SPP_Sum , label: "SSP"},
				{y: SSP_Sum , label: "SPP"},
				{y: add_paySum , label: "Add. Payment 1"},
				{y: add_pay2Sum , label: "Add. Payment 2"},
				{y: add_pay3Sum , label: "Add. Payment 3"},
				{y: chris_savSum, label: "Christmas Sav. Payment"},
				{y: summer_savSum, label: "Summer Sav. Payment"},
				{y: SAPSum , label: "SAP"},
				{y: salarySum , label: "Salary"},
				{y: bonusSum , label: "Bonus"},
				{y: commissionsSum , label: "Commissions"}
			]
		}]
	});
	yearToDateIIPieChart.render();
	} else {
		document.getElementById("yearToDateIIPieChart").innerHTML = "<span class='noChartText'><br><br>No Data Provided<br>For Chart.</span>";
	}
	//Year to date Hours chart
	if(basicHoursSum>0||ot1_unitsSum>0||ot2_unitsSum>0||uns_prem_unSum>0||uns_hol_unSum>0||uns_sick_unSum>0||uns_family_unSum>0||
	uns_ber_unSum>0||uns_comp_unSum>0||enhol_unitsSum>0||hol_unitsSum>0||sick_unitsSum>0||fam_unitsSum>0||ber_unitsSum>0||
	comp_unitsSum>0){
		var yearToDateHoursPieChart = new CanvasJS.Chart("yearToDateHoursPieChart", {
		animationEnabled: true,
		exportEnabled: true,
		backgroundColor: insideBoxColor,
		colorSet: 'totalHoursColors',
		title: {
			text: "Year To Date Hours Chart"
		},
		data: [{
			type: "pie",
			startAngle: 240,
			indexLabelFormatter: function(f) {
				if (f.dataPoint.y === 0)
					return "";
				else
				 return CanvasJS.formatNumber(f.dataPoint.label)+" "+CanvasJS.formatNumber(f.percent) +"%";
			},
			indexLabel: "{label} {y}",
			dataPoints: [
				{y: basicHoursSum, label: "Hours at Work", exploded: true,},
				{y: totalHours-totalPaidHours, label: "Unpaid Breaks"},
				{y: ot1_unitsSum, label: "Overtime 1 Hours"},
				{y: ot2_unitsSum, label: "Overtime 2 Hours"},
				{y: enhol_unitsSum, label: "Enhanced Holiday Hours"},
				{y: hol_unitsSum, label: "Holiday Hours"},
				{y: sick_unitsSum, label: "Sickness Hours"},
				{y: fam_unitsSum, label: "Paternity Hours"},
				{y: ber_unitsSum, label: "Bereavement Hours"},
				{y: comp_unitsSum, label: "Compasionate Hours"}
			]
		}]
	});
	yearToDateHoursPieChart.render();
	} else {
		document.getElementById("yearToDateHoursPieChart").innerHTML = "<span class='noChartText'><br><br>No Data Provided<br>For Chart.</span>";
	}
	//Year to date Days chart
	if(daysNotSelected>0||daysIn>0||daysOff>0||daysHoliday>0||daysHalfInHalfHol>0||daysUnpaidHoliday>0||daysInSick>0||
	daysSickness>0||daysAbsence>0||daysParental>0||daysBereavement>0||daysCompassionate>0){
		var dayStatisticsPieChart = new CanvasJS.Chart("dayStatisticsPieChart", {
		animationEnabled: true,
		exportEnabled: true,
		backgroundColor: insideBoxColor,
		colorSet: 'totalDaysColors',
		title: {
			text: "Year To Date Days Chart"
		},
		data: [{
			type: "pie",
			startAngle: 240,
			indexLabelFormatter: function(f) {
				if (f.dataPoint.y === 0)
					return "";
				else
				 return CanvasJS.formatNumber(f.dataPoint.label)+" "+CanvasJS.formatNumber(f.percent) +"%";
			},
			indexLabel: "{label} {y}",
			dataPoints: [
				{y: daysIn, label: "Days In", exploded: true,},
				{y: daysNotSelected, label: "Not Defined"},
				{y: daysOff, label: "Days Off"},
				{y: daysHoliday, label: "Holidays"},
				{y: daysHalfInHalfHol, label: "Half In/Hals Off"},
				{y: daysUnpaidHoliday, label: "Unpaid Holiday"},
				{y: daysInSick, label: "Day In/Sick"},
				{y: daysSickness, label: "Sickness"},
				{y: daysAbsence, label: "Absence"},
				{y: daysParental, label: "Paternal"},
				{y: daysBereavement, label: "Bereavement"},
				{y: daysCompassionate, label: "Compassionate"}
			]
		}]
	});
	dayStatisticsPieChart.render();
	} else {
		document.getElementById("dayStatisticsPieChart").innerHTML = "<span class='noChartText'><br><br>No Data Provided<br>For Chart.</span>";
	}
	//Year to date holidays chart
	if(totalHolidaysUsed>0||totalHolidaysBooked>0||holidaysNotUsed>0){
		var holidayStatisticsPieChart = new CanvasJS.Chart("holidayStatisticsPieChart", {
		animationEnabled: true,
		exportEnabled: true,
		backgroundColor: insideBoxColor,
		colorSet: 'holidayChartColors',
		title: {
			text: "Year To Date Holidays"
		},
		data: [{
			type: "pie",
			startAngle: 240,
			indexLabelFormatter: function(f) {
				if (f.dataPoint.y === 0)
					return "";
				else
				 return CanvasJS.formatNumber(f.dataPoint.label)+" "+CanvasJS.formatNumber(f.percent) +"%";
			},
			indexLabel: "{label} {y}",
			dataPoints: [
				{y: totalHolidaysUsed, label: "Holidays Used", exploded: true,},
				{y: totalHolidaysBooked, label: "Holidays Booked"},
				{y: holidaysNotUsed, label: "Holidays Available"}
			]
		}]
	});
	holidayStatisticsPieChart.render();
	} else {
		document.getElementById("holidayStatisticsPieChart").innerHTML = "<span class='noChartText'><br><br>No Data Provided<br>For Chart.</span>";
	}
	//last 3 months average chart
	taxSumLast12Weeks =  Number(taxSumLast12Weeks.toFixed(2));
	NISumLast12Weeks =  Number(NISumLast12Weeks.toFixed(2));
	union_deSumLast12Weeks =  Number(union_deSumLast12Weeks.toFixed(2));
	pensionSumLast12WeeksChart =  Number(pensionSumLast12WeeksChart.toFixed(2));
	chris_savSumLast12Weeks =  Number(chris_savSumLast12Weeks.toFixed(2));
	summer_savSumLast12Weeks =  Number(summer_savSumLast12Weeks.toFixed(2));
	companyLoanSumLast12Weeks =  Number(companyLoanSumLast12Weeks.toFixed(2));
	studentLoanDeductionSumLast12Weeks =  Number(studentLoanDeductionSumLast12Weeks.toFixed(2));
	other_deLast12Weeks =  Number(other_deLast12Weeks.toFixed(2));
	add_deSum2Last12Weeks =  Number(add_deSum2Last12Weeks.toFixed(2));
	add_deSum3Last12Weeks =  Number(add_deSum3Last12Weeks.toFixed(2));
	netPaySumLast12Weeks =  Number(netPaySumLast12Weeks.toFixed(2));
	if(taxSum>0||NISum>0||union_deSum>0||pensionSumChart>0||chris_savSum>0||summer_savSum>0||companyLoanSum>0||
	studentLoanDeductionSum>0||other_de>0||add_deSum2>0||add_deSum3>0||netPaySum>0){
		var las3MonthsPieChart = new CanvasJS.Chart("las3MonthsPieChart", {
		animationEnabled: true,
		exportEnabled: true,
		backgroundColor: insideBoxColor,
		colorSet: 'deductionsColors',
		title: {
			text: "Last 3 Months Averages"
		},
		data: [{
			type: "pie",
			startAngle: 240,
			indexLabelFormatter: function(f) {
				if (f.dataPoint.y === 0)
					return "";
				else
				 return CanvasJS.formatNumber(f.dataPoint.label)+" "+CanvasJS.formatNumber(f.percent) +"%";
	 		},
			indexLabel: "{label} {y}",
			dataPoints: [
				{y: taxSumLast12Weeks, label: "Tax"},
				{y: NISumLast12Weeks, label: "NI"},
				{y: union_deSumLast12Weeks, label: "Union"},
				{y: pensionSumLast12WeeksChart, label: "Pension"},
				{y: chris_savSumLast12Weeks , label: "Christmas Savings"},
				{y: summer_savSumLast12Weeks , label: "Summer Savings."},
				{y: companyLoanSumLast12Weeks , label: "Company Loan"},
				{y: studentLoanDeductionSumLast12Weeks, label: "Student Loan"},
				{y: other_deLast12Weeks , label: 'Add. Deduction'},
				{y: add_deSum2Last12Weeks, label: 'Add. Deduction 2'},
				{y: add_deSum3Last12Weeks, label: 'Add. Deduction 3'},
				{y: netPaySumLast12Weeks , label: "Net Pay",  exploded: true}
			]
		}]
	});
	las3MonthsPieChart.render();
	} else {
		document.getElementById("las3MonthsPieChart").innerHTML = "<span class='noChartText'><br><br>No Data Provided<br>For Chart.</span>";
	}
	//if the repsonse object is recieved via loadData function, it is neccessary to load
	//main table indexes and calendar day colors
	if (largerObject === true){
		let weekStart = weekStartArray[taxPeriodNumber];
		let taxPeriodStart = (taxPeriodNumber-1)*7+weekStart;
		//further object destructuring
		let {dayType, startHour, startMinute, endHour, endMinute, note, dayTypeArrayCalendar} = response;
		let {sickButton, familyLeaveButton, dayInSickButton, bereavementButton, compassionateButton, enHolButton} = response;
		for ( let i = 0 ; i < 7 ; i++ )	{
			document.getElementById("dayType"+taxPeriodStart).options.selectedIndex = dayType[i];
			document.getElementById("startHours"+taxPeriodStart).options.selectedIndex =startHour[i];
			document.getElementById("startMinutes"+taxPeriodStart).options.selectedIndex = startMinute[i];
			document.getElementById("endHours"+taxPeriodStart).options.selectedIndex = endHour[i];
			document.getElementById("endMinutes"+taxPeriodStart).options.selectedIndex = endMinute[i];

			//SICKNESS button values
			let sicknessButtonValue = sickButton[i];

			if(sicknessButtonValue == "true"){
				document.getElementById("sicknessButton"+taxPeriodStart).setAttribute("checked", "checked")
			}	else if (sicknessButtonValue == "false")	{
				document.getElementById("sicknessButton"+taxPeriodStart).removeAttribute("checked");
			}	else {
				alert('Something went wrong with the sick pay calculation!');
			}

			//FAMILY button values
			let familyLeaveButtonValue = familyLeaveButton[i];
			if(familyLeaveButtonValue == "true") {
				document.getElementById("familyLeaveButton"+taxPeriodStart).setAttribute("checked", "checked")
			}	else if (familyLeaveButtonValue == "false")	{
				document.getElementById("familyLeaveButton"+taxPeriodStart).removeAttribute("checked");
			}	else {
				alert('Something went wrong with parental pay calculation!');
			}

			//Day in sicknes button values
			var dayInSickButtonValue = dayInSickButton[i];
			if(dayInSickButtonValue == "true"){
				document.getElementById("dayInSickButton"+taxPeriodStart).setAttribute("checked", "checked")
			}	else if (dayInSickButtonValue == "false")	{
				document.getElementById("dayInSickButton"+taxPeriodStart).removeAttribute("checked")
			}	else{
				alert('Something went wrong with the day in/sick pay calculation!');
			}

			//Bereavement button values
			let bereveamentButtonValue = bereavementButton[i];
			if(bereveamentButtonValue == "true") {
				document.getElementById("bereavementButton"+taxPeriodStart).setAttribute("checked", "checked")
			}	else if (bereveamentButtonValue == "false")	{
				document.getElementById("bereavementButton"+taxPeriodStart).removeAttribute("checked");
			}	else {
				alert('Something went wrong with the bereavement pay calculation!');
			}

			//COMPASSIONATE button values
			let compassionateButtonValue = compassionateButton[i];
			if(compassionateButtonValue == "true") {
				document.getElementById("compassionateButton"+taxPeriodStart).setAttribute("checked", "checked")
			}	else if (compassionateButtonValue == "false")	{
				document.getElementById("compassionateButton"+taxPeriodStart).removeAttribute("checked");
			}	else{
				alert('Something went wrong with the compassionate pay calculation!');
			}

			//enhanced Holiday input values
			let enhancedHolidayButtonValue = enHolButton[i];
			if(enhancedHolidayButtonValue == "true")	{
				document.getElementById("enhancedHolidayButton"+taxPeriodStart).setAttribute("checked", "checked");
			}	else if (enhancedHolidayButtonValue == "false")		{
				document.getElementById("enhancedHolidayButton"+taxPeriodStart).removeAttribute("checked");
			}	else {
				alert('Something went wrong with enhanced holiday calculations!');
			}

			//note input values
			document.getElementById("noteInput"+taxPeriodStart).value = note[i];
			taxPeriodStart++;
		}
		let currentDate = new Date();
		let currentTime = currentDate.getTime()
		let timeSinceEpochCurrentDay = timeSinceEpoch-(21*86400000);
		let taxPeriodNumberCalendar = taxPeriodNumber- 3;
		let taxPeriodStartCalendar = (taxPeriodNumberCalendar-1)*7+weekStart;
		for ( bg = 0; bg < 49 ; bg++ )
			{
				dayDiv = document.getElementById("dayDiv"+bg);
				backgroundIndex = response.dayTypeArrayCalendar[bg];
				backgroundIndex = Number(backgroundIndex);
				//NEED TO CHANGE THIS BRANCHING TO SWITCH
				if (backgroundIndex === 0)	{
					if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))	{
						dayDiv.setAttribute("class", "dayDiv notSelectedColor currentDay");
					}	else{
						dayDiv.className="dayDiv notSelectedColor";
					}
				}	else if (backgroundIndex === 1) {
					if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))	{
						dayDiv.setAttribute("class", "dayDiv dayInColor currentDay");
					}	else {
						dayDiv.className="dayDiv dayInColor";
					}
				}
				else if (backgroundIndex === 2)
				{
					if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
					{dayDiv.setAttribute("class", "dayDiv dayOffColor currentDay");}
					else
					{dayDiv.className="dayDiv dayOffColor";}
				}
				else if (backgroundIndex === 3)
				{
					if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
					{dayDiv.setAttribute("class", "dayDiv holidayColor currentDay");}
					else
					{dayDiv.className="dayDiv holidayColor";}
				}
				else if (backgroundIndex === 4)
				{
					if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
					{dayDiv.setAttribute("class", "dayDiv unpaidHolColor currentDay");}
					else
					{dayDiv.className="dayDiv unpaidHolColor";}
				}
				else if (backgroundIndex === 5)
				{
					if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
					{dayDiv.setAttribute("class", "dayDiv halfInHalfOffColor currentDay");}
					else
					{dayDiv.className="dayDiv halfInHalfOffColor";}
				}
				else if (backgroundIndex === 6)
				{
					if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
					{dayDiv.setAttribute("class", "dayDiv dayInSickColor currentDay");}
					else
					{dayDiv.className="dayDiv dayInSickColor";}
				}
				else if (backgroundIndex === 7)
				{
					if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
					{dayDiv.setAttribute("class", "dayDiv sicknessColor currentDay");}
					else
					{dayDiv.className="dayDiv sicknessColor";}
				}
				else if (backgroundIndex === 8)
				{
					if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
					{dayDiv.setAttribute("class", "dayDiv absenceColor currentDay");}
					else
					{dayDiv.className="dayDiv absenceColor";}
				}
				else if (backgroundIndex === 9)
				{
					if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
					{dayDiv.setAttribute("class", "dayDiv familyLeaveColor currentDay");}
					else
					{dayDiv.className="dayDiv familyLeaveColor";}
				}
				else if (backgroundIndex === 10)
				{
					if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
					{dayDiv.setAttribute("class", "dayDiv bereavementColor currentDay");}
					else
					{dayDiv.className="dayDiv bereavementColor";}
				}
				else if (backgroundIndex === 11)
				{
					if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
					{dayDiv.setAttribute("class", "dayDiv compassionateColor currentDay");}
					else
					{dayDiv.className="dayDiv compassionateColor";}
				}
				else  {dayDiv.className="dayDiv notSelectedColor";}
				//id++;
				taxPeriodStartCalendar++;
				timeSinceEpochCurrentDay += 86400000
			}
		changeSelectBackground(taxPeriodNumber);
		finishNextMorningBColor(taxPeriodNumber);
		//bankHolidayFilter(taxPeriodNumber);
		hideHoursSelect(taxPeriodNumber);
	}
}
//counter is used to keep a track of how many time a function has been called.
var counter = 0;
const increaseTaxPeriod = (taxPeriodNumber) => {
	counter++;
	taxPeriodNumber += (counter+counter2);
	weekStart = Number(weekStartArray[taxPeriodNumber]);
	let timeSinceEpoch = timeSinceEpochOriginal + 604800000*(taxPeriodNumber-2)+weekStart*86400000;
	modTimeSinceEpoch = timeSinceEpoch +604800000;
	if (taxPeriodNumber === 1)	{
		$("#buttonLeft").addClass("hidden");
		$("#buttonLeftFake").removeClass("hidden");
		$("#buttonUp").addClass("hidden");
		$("#buttonUpFake").removeClass("hidden");
		$("#fastBackward").addClass("hidden");
		$("#fastBackwardFake").removeClass("hidden");
	}	else if (taxPeriodNumber === 78)	{
		$("#buttonRight").addClass("hidden");
		$("#buttonRightFake").removeClass("hidden");
		$("#buttonDown").addClass("hidden");
		$("#buttonDownFake").removeClass("hidden");
		$("#fastForward").addClass("hidden");
		$("#fastForwardFake").removeClass("hidden");
	}	else if (taxPeriodNumber>1 && taxPeriodNumber<78)	{
		$("#buttonLeft").removeClass("hidden");
		$("#buttonLeftFake").addClass("hidden");
		$("#buttonRight").removeClass("hidden");
		$("#buttonRightFake").addClass("hidden");
		$("#buttonUp").removeClass("hidden");
		$("#buttonUpFake").addClass("hidden");
		$("#buttonDown").removeClass("hidden");
		$("#buttonDownFake").addClass("hidden");
		$("#fastBackward").removeClass("hidden");
		$("#fastBackwardFake").addClass("hidden");
		$("#fastForward").removeClass("hidden");
		$("#fastForwardFake").addClass("hidden");
	} else	{
		$("#buttonLeft").addClass("hidden");
		$("#buttonLeftFake").removeClass("hidden");
		$("#buttonRight").addClass("hidden");
		$("#buttonRightFake").removeClass("hidden");
		$("#buttonUp").addClass("hidden");
		$("#buttonUpFake").removeClass("hidden");
		$("#buttonDown").addClass("hidden");
		$("#buttonDownFake").removeClass("hidden");
		$("#fastBackward").addClass("hidden");
		$("#fastBackwardFake").removeClass("hidden");
		$("#fastForward").addClass("hidden");
		$("#fastForwardFake").removeClass("hidden");
	}
	//clear main table and calendar
	for (let f=0;f<7;f++)	{
		let tableRow = document.getElementById("tableRow"+f).innerHTML = " ";
		var calendarRow = document.getElementById("calendarRow"+f).innerHTML = " ";
	}

	createTableElements(taxPeriodNumber, modTimeSinceEpoch);
	createPayoutButtons(taxPeriodNumber);
	generateCalendar (taxPeriodNumber,modTimeSinceEpoch);
	loadData(taxPeriodNumber);
}
var counter2 = 0;
const decreaseTaxPeriod = (taxPeriodNumber)=>{
	counter2--;
	taxPeriodNumber+=(counter+ counter2);
	weekStart = Number(weekStartArray[taxPeriodNumber]);
	let timeSinceEpoch = timeSinceEpochOriginal + 604800000*(taxPeriodNumber)+weekStart*86400000;

			modTimeSinceEpoch = timeSinceEpoch -604800000;
			// if tax period is 1, hide the backward buttons and show the fake backword buttons
			if (taxPeriodNumber === 1)	{
				$("#buttonLeft").addClass("hidden");
				$("#buttonLeftFake").removeClass("hidden");
				$("#buttonUp").addClass("hidden");
				$("#buttonUpFake").removeClass("hidden");
				$("#fastBackward").addClass("hidden");
				$("#fastBackwardFake").removeClass("hidden");
			}	else if (taxPeriodNumber === 208)	{ //show original values
				$("#buttonRight").addClass("hidden");
				$("#buttonRightFake").removeClass("hidden");
				$("#buttonDown").addClass("hidden");
				$("#buttonDownFake").removeClass("hidden");
				$("#fastForward").addClass("hidden");
				$("#fastForwardFake").removeClass("hidden");
			}	else if (taxPeriodNumber>1 && taxPeriodNumber<208)	{ //hide forward buttos
				$("#buttonLeft").removeClass("hidden");
				$("#buttonLeftFake").addClass("hidden");
				$("#buttonRight").removeClass("hidden");
				$("#buttonRightFake").addClass("hidden");
				$("#buttonUp").removeClass("hidden");
				$("#buttonUpFake").addClass("hidden");
				$("#buttonDown").removeClass("hidden");
				$("#buttonDownFake").addClass("hidden");
				$("#fastBackward").removeClass("hidden");
				$("#fastBackwardFake").addClass("hidden");
				$("#fastForward").removeClass("hidden");
				$("#fastForwardFake").addClass("hidden");
			} else	{ //in any other scenario show fake buttons and hide buttons with functions
				$("#buttonLeft").addClass("hidden");
				$("#buttonLeftFake").removeClass("hidden");
				$("#buttonRight").addClass("hidden");
				$("#buttonRightFake").removeClass("hidden");
				$("#buttonUp").addClass("hidden");
				$("#buttonUpFake").removeClass("hidden");
				$("#buttonDown").addClass("hidden");
				$("#buttonDownFake").removeClass("hidden");
				$("#fastBackward").addClass("hidden");
				$("#fastBackwardFake").removeClass("hidden");
				$("#fastForward").addClass("hidden");
				$("#fastForwardFake").removeClass("hidden");
			}

			for (let f=0;f<7;f++)	{
				let tableRow = document.getElementById("tableRow"+f).innerHTML = " ";
				let calendarRow = document.getElementById("calendarRow"+f).innerHTML = " ";
			}

			createTableElements(taxPeriodNumber, modTimeSinceEpoch);
			createPayoutButtons(taxPeriodNumber);
			generateCalendar (taxPeriodNumber,modTimeSinceEpoch);
			loadData(taxPeriodNumber);
}

const postData = (taxPeriodNumber) => {
	str = getFormValues(taxPeriodNumber);
	if (XMLHttpRequest)	{
			request = new XMLHttpRequest();
		}	else if (ActiveXObject)	{
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}	else {return false;}
	var url = "javascript/ajax/submitForm.php";
	request.open("POST", url, true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.onreadystatechange = function(){
		if(request.readyState ==4 && request.status ==200){
			let response = JSON.parse(this.responseText);
			let submitSuccessMain = document.getElementById("submitSuccessMain");
			errorsArrayLength = Object.keys(response.errors).length;
			submitSuccessMain.innerHTML = " ";
			if (errorsArrayLength>0){
				let allErrors = "";
				for (i=0; i<errorsArrayLength; i++)		{
					submitSuccessMain.setAttribute("class", "col-sm-10 col-xs-10 responseDiv errorStyle");
					allErrors += response.errors[i]+'<br>';
				}
				triggerErrorModal(allErrors, true);
			}	else {
					submitSuccessMain.setAttribute("class", "col-sm-10 col-xs-10 responseDiv");
					submitSuccessMain.innerHTML = 'Payslip Generated!';
					setTimeout(function(){submitSuccessMain.innerHTML=" ";},1500);
					loadResponseData(response, taxPeriodNumber);
			}
		}
	}
	request.send(str);
	document.getElementById("submitSuccessMain").setAttribute("class", "col-sm-10 col-xs-10 responseDiv");
	document.getElementById("submitSuccessMain").innerHTML = "Generating payslip...";
}
const loadData = (taxPeriodNumber) => {
	if (XMLHttpRequest)	{
			request = new XMLHttpRequest();
		}	else if (ActiveXObject)	{
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}	else {return false;}
	let url = "javascript/ajax/loadindexes.php";
	request.open("POST", url, true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.send("taxPeriodNumber="+taxPeriodNumber);
	request.onreadystatechange = function(){
		if(request.readyState ==4 && request.status ==200){
			let response = JSON.parse(this.responseText);
			loadResponseData(response, taxPeriodNumber, true);
			}
		}
}
const start = () => {
	//pick data from backend
	fetch('data.php')
	.then(function(response) {
	return response.json();
	})
	.then(function(myJson) {
		let taxPeriodLimit = myJson.taxPeriodLimit;
		//fill the arrays of weekstart and unsHCheck
		for (let a=0; a<taxPeriodLimit; a++){ //a<66 turi sutapti su backend faile esanciau apribojimu
			let weekStartAr = myJson.weekStartArray[a];
			weekStartArray[a]= weekStartAr;

			let unsHCheckArray = myJson.unsHCheckArray[a];
			unsHCheck[a] = unsHCheckArray;
	}

	//when we fetch the data from the server start creating elements
	//in is neccessary to update the value of timesince epoch including the weekstart variable
	timeSinceEpoch = timeSinceEpochOriginal + 604800000*(taxPeriodNumber-1)+weekStartArray[taxPeriodNumber]*86400000;
	createTableElements(taxPeriodNumber, timeSinceEpoch);
	generateCalendar (taxPeriodNumber,timeSinceEpoch);
	createPayoutButtons(taxPeriodNumber);

	let generateButton = document.getElementById("generateButton");
	generateButton.onclick = function () {deselectValuesValidateForm(taxPeriodNumber);}


	//call the function that loads data fro the server.
	loadData(taxPeriodNumber);
	let buttonRight = document.getElementById("buttonRight");
	let downButton = document.getElementById("buttonDown");

	//has to be wrapped inside a function, otherwise fings get messy :(
	buttonRight.onclick =  function () {increaseTaxPeriod(taxPeriodNumber);};
	downButton.onclick = function () {increaseTaxPeriod(taxPeriodNumber);};

	let buttonLeft = document.getElementById("buttonLeft");
	let upButton = document.getElementById("buttonUp");
	buttonLeft.onclick = function () {decreaseTaxPeriod(taxPeriodNumber);};
	upButton.onclick = function () {decreaseTaxPeriod(taxPeriodNumber);};
	})
}



//this function is neccessary for popovers to work
$(function () {
  $('[data-toggle="popover"]').popover()
})
$('.popover-dismiss').popover({
  trigger: 'focus'
})
document.addEventListener("DOMContentLoaded",start,false);
