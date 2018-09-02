//GLOBAL VARIABLES------------------------------------------------------------------------------//

let timeSinceEpochOriginal = 1491004800000;
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

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
const start = () => {
	//pick data from backend
	fetch('data.php')
	.then(function(response) {
	return response.json();
	})
	.then(function(myJson) {
		let taxPeriodLimit = myJson.taxPeriodLimit;
		console.log(myJson);
		//fill the arrays of weekstart and unsHCheck
		for (let a=0; a<taxPeriodLimit; a++){ //a<66 turi sutapti su backend faile esanciau apribojimu
			let weekStartAr = myJson.weekStartArray[a];
			weekStartArray[a]= weekStartAr;

			let unsHCheckArray = myJson.unsHCheckArray[a];
			unsHCheck[a] = unsHCheckArray;
	}

	//when we fetch the data from the server start creating elements
	timeSinceEpoch = timeSinceEpochOriginal + 604800000*(taxPeriodNumber-1)+weekStartArray[taxPeriodNumber]*86400000;
	createTableElements(taxPeriodNumber, timeSinceEpoch);
	generateCalendar (taxPeriodNumber,timeSinceEpoch);
	})
}
document.addEventListener("DOMContentLoaded",start,false);
