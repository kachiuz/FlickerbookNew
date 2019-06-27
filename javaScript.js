  
//GLOBAL VARIABLES------------------------------------------------------------------------------//

let timeSinceEpochOriginal = 1238198400000 //1491004800000;
							
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let insideBoxColor = "white";

// a counter for toggle, neccessary so that two weekly averages pie charts and sections would not appear at the same time, after loading data
let toggleCounter = 0;
//object to store data for google charts resize. gets filled in the loaddata function.
let resizeChartValues = {};
//chart colors
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

		let taxAmuntColor = '#ff3333';
		let NIAmountColor = '#ff4d4d';
		let unionColor = '#ff6666';
		let pensionColor = '#ff8080';
		let copanyLoanColor = '#ff9999';
		let studentLoanColor = '#ffb3b3';
		let otherDeductionColor = '#ffcccc';
		let otherDeduction2Color = '#ff1a1a';
		let otherDeduction3Color = '#ff0000';
		
		let travelDeductionColor = '#ffb399';
		let taxFreeDeduction1Color = '#ff9f80'
		let taxFreeDeduction2Color = '#ff8c66'
		let taxFreeDeduction3Color = '#ff794d'
		
		let netPayColor = '#69cc00';

		let unpaidBreaksColor = '#80bfff';

		let notSelectedColor = '#b3daff';
		let dayOffColor = '#c3c3a2';
		let halfInHalfOffColor = '#e6ffb3';
		let unpaidHolColor = '#e6ffe6';
		let dayInSickColor = '#ffcccc';
		let absenceColor = '#ccebff';

		let holidaysAvailableColor = '#00ff00';
		let holidaysBookedColor = '#00cc00';
		
		let paymentsColorArray = [dayInColor, dayInColor, holidayColor,sicknessColor, familyLeaveColor, bereavementColor]; 
		paymentsColorArray.push(compassionateColor, overtime1Color,overtime2Color);
		paymentsColorArray.push(holidayColor, holidayColor, holidayColor, saturdayColor, sundayColor);
		paymentsColorArray.push(sicknessColor, familyLeaveColor, bereavementColor, compassionateColor,  bankHolidayColor); 
		paymentsColorArray.push(bankHolidayBonusColor,backPayColor, pieceWorkColor, sicknessColor, familyLeaveColor, addPay1Color, addPay2Color);
		paymentsColorArray.push(addPay3Color, christmasColor, summerColor, familyLeaveColor, salaryColor, bonusColor, commissionsColor, taxAmuntColor);
		
		let deductionsColorArray = [taxAmuntColor, NIAmountColor, unionColor, pensionColor, christmasColor, summerColor, copanyLoanColor];
		deductionsColorArray.push(studentLoanColor, otherDeductionColor, otherDeduction2Color, otherDeduction3Color, travelDeductionColor);
		deductionsColorArray.push(taxFreeDeduction1Color, taxFreeDeduction2Color, taxFreeDeduction3Color, netPayColor);
//bank holiday arrays
//2017
let bankHolidayArray = [1483315200000, 1492128000000, 1492387200000, 1493596800000, 1496016000000, 1503878400000, 1514160000000, 1514246400000];
//2009
bankHolidayArray.push(1239321600000, 1239580800000, 1241395200000, 1243209600000, 1251676800000, 1261699200000, 1261785600000);

//2010
bankHolidayArray.push(1262304000000, 1270166400000, 1270425600000, 1272844800000);
bankHolidayArray.push(1275264000000, 1283126400000, 1293235200000, 1293321600000);
//2011
bankHolidayArray.push(1293840000000, 1303430400000, 1303689600000, 1304035200000);
bankHolidayArray.push(1304294400000, 1306713600000, 1314576000000, 1324771200000, 1324857600000);

//2012
bankHolidayArray.push(1325376000000, 1325462400000, 1333670400000, 1333929600000);
bankHolidayArray.push(1336348800000, 1338768000000, 1338854400000, 1346025600000, 1356393600000, 1356480000000);

//2013
bankHolidayArray.push(1356998400000, 1364515200000, 1364774400000, 1367798400000);
bankHolidayArray.push(1369612800000, 1377475200000, 1387929600000, 1388016000000);

//2014
bankHolidayArray.push(1388534400000, 1397779200000, 1398038400000, 1399248000000);
bankHolidayArray.push(1401062400000, 1408924800000, 1419465600000, 1419552000000);

//2015
bankHolidayArray.push(1420070400000, 1428019200000, 1428278400000, 1430697600000);
bankHolidayArray.push(1432512000000, 1440979200000, 1451001600000, 1451088000000, 1451260800000);

//2016
bankHolidayArray.push(1451606400000, 1458864000000, 1459123200000, 1462147200000);
bankHolidayArray.push(1464566400000, 1472428800000, 1482624000000, 1482710400000, 1482796800000);

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
/*let currentDate = new Date();
let currentTime = currentDate.getTime() 					//mseconds since epoch
let mSecondsInWeek = 604800000;
let taxPeriodNumber = Math.ceil((currentTime - timeSinceEpochOriginal)/mSecondsInWeek);*/
let taxPeriodNumber = 1;

//weekStart and unsHCheckCurrent will be arrays fiiled from back end
let weekStartArray = [];
let unsHCheck = [];
let taxPeriodLimit = 0;

let timeSinceEpoch = timeSinceEpochOriginal + 604800000*(taxPeriodNumber-1)+0*86400000;
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
//it also leaves a current day mark on a calendar
//the actual marking of current day happens inside loadResponseData function.
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
			else if(timeSinceEpoch === bankHolidayArray[42]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[43]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[44]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[45]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[46]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[47]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[48]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[49]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[50]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[51]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[52]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[53]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[54]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[55]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[56]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[57]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[58]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[59]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[60]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[61]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[62]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[63]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[64]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[65]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[66]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[67]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[68]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[69]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[70]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[71]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[72]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[73]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[74]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[75]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[76]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[77]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[78]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[79]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[80]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[81]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[82]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[83]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[84]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[85]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[86]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[87]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[88]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[89]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[90]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[91]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[92]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[93]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[94]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[95]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[96]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[97]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[98]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[99]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[100]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[101]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[102]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[103]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[104]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[105]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[106]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[107]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[108]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[109]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			
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
	let unsHCheckCurrent = unsHCheck[taxPeriodNumber];
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

	let tableCaptionTitle = document.getElementById("tableCaptionTitle");
	let tableCaption2 = document.getElementById("tableCaption2");
	let yearlyEstimatesTitle = document.getElementById("yearlyEstimatesTitle")
	//depending on a year, caption has to be changed
	if(taxPeriodNumber<=52	 && taxPeriodNumber>=1 ){
		taxPeriodNumberNew = taxPeriodNumber;
		if (taxPeriodNumber<10){taxPeriodNumberNew="0"+taxPeriodNumberNew;}
		tableCaptionTitle.innerHTML = "2009/2010 Tax Period " + taxPeriodNumberNew;
		tableCaption2.innerHTML = "2009/2010 Tax Period " + taxPeriodNumberNew;
		yearlyEstimatesTitle.innerHTML = "2009/2010 Estimates";
	}	else if (taxPeriodNumber<=104 && taxPeriodNumber>52	 ){
		taxPeriodNumberNew = taxPeriodNumber - 52;
		if (taxPeriodNumberNew<10){taxPeriodNumberNew="0"+taxPeriodNumberNew;}
		tableCaptionTitle.innerHTML = "2010/2011 Tax Period " + taxPeriodNumberNew;
		tableCaption2.innerHTML = "2010/2011 Tax Period " + taxPeriodNumberNew;
		yearlyEstimatesTitle.innerHTML = "2010/2011 Estimates";
	}	else if (taxPeriodNumber<=156 && taxPeriodNumber>104 ){
		taxPeriodNumberNew = taxPeriodNumber - 104;
		if (taxPeriodNumberNew<10){taxPeriodNumberNew="0"+taxPeriodNumberNew;}
		tableCaptionTitle.innerHTML = "2011/2012 Tax Period " + taxPeriodNumberNew;
		tableCaption2.innerHTML = "2011/2012 Tax Period " + taxPeriodNumberNew;
		yearlyEstimatesTitle.innerHTML = "2011/2012 Estimates";
	}	else if (taxPeriodNumber<=209 && taxPeriodNumber>156 ){
		taxPeriodNumberNew = taxPeriodNumber - 156;
		if (taxPeriodNumberNew<10){taxPeriodNumberNew="0"+taxPeriodNumberNew;}
		tableCaptionTitle.innerHTML = "2012/2013 Tax Period " + taxPeriodNumberNew;
		tableCaption2.innerHTML = "2012/2013 Tax Period " + taxPeriodNumberNew;
		yearlyEstimatesTitle.innerHTML = "2012/2013 Estimates";
	}	else if (taxPeriodNumber<=261 && taxPeriodNumber>209 ){
		taxPeriodNumberNew = taxPeriodNumber - 209;
		if (taxPeriodNumberNew<10){taxPeriodNumberNew="0"+taxPeriodNumberNew;}
		tableCaptionTitle.innerHTML = "2013/2014 Tax Period " + taxPeriodNumberNew;
		tableCaption2.innerHTML = "2013/2014 Tax Period " + taxPeriodNumberNew;
		yearlyEstimatesTitle.innerHTML = "2013/2014 Estimates";
	}	else if (taxPeriodNumber<=313 && taxPeriodNumber>261 ){
		taxPeriodNumberNew = taxPeriodNumber - 261;
		if (taxPeriodNumberNew<10){taxPeriodNumberNew="0"+taxPeriodNumberNew;}
		tableCaptionTitle.innerHTML = "2014/2015 Tax Period " + taxPeriodNumberNew;
		tableCaption2.innerHTML = "2014/2015 Tax Period " + taxPeriodNumberNew;
		yearlyEstimatesTitle.innerHTML = "2014/2015 Estimates";
	}	else if (taxPeriodNumber<=365 && taxPeriodNumber>313 ){
		taxPeriodNumberNew = taxPeriodNumber - 313;
		if (taxPeriodNumberNew<10){taxPeriodNumberNew="0"+taxPeriodNumberNew;}
		tableCaptionTitle.innerHTML = "2015/2016 Tax Period " + taxPeriodNumberNew;
		tableCaption2.innerHTML = "2015/2016 Tax Period " + taxPeriodNumberNew;
		yearlyEstimatesTitle.innerHTML = "2015/2016 Estimates";
	}	else if (taxPeriodNumber<=417 && taxPeriodNumber>365 ){
		taxPeriodNumberNew = taxPeriodNumber - 365;
		if (taxPeriodNumberNew<10){taxPeriodNumberNew="0"+taxPeriodNumberNew;}
		tableCaptionTitle.innerHTML = "2016/2017 Tax Period " + taxPeriodNumberNew;
		tableCaption2.innerHTML = "2016/2017 Tax Period " + taxPeriodNumberNew;
		yearlyEstimatesTitle.innerHTML = "2016/2017 Estimates";
	}	else if (taxPeriodNumber<=469 && taxPeriodNumber>417 ){
		taxPeriodNumberNew = taxPeriodNumber - 417;
		if (taxPeriodNumberNew<10){taxPeriodNumberNew="0"+taxPeriodNumberNew;}
		tableCaptionTitle.innerHTML = "2017/2018 Tax Period " + taxPeriodNumberNew;
		tableCaption2.innerHTML = "2017/2018 Tax Period " + taxPeriodNumberNew;
		yearlyEstimatesTitle.innerHTML = "2017/2018 Estimates";
	}	else if (taxPeriodNumber<=522 && taxPeriodNumber>469 ){
		taxPeriodNumberNew = taxPeriodNumber - 469;
		if (taxPeriodNumberNew<10){taxPeriodNumberNew="0"+taxPeriodNumberNew;}
		tableCaptionTitle.innerHTML = "2018/2019 Tax Period " + taxPeriodNumberNew;
		tableCaption2.innerHTML = "2018/2019 Tax Period " + taxPeriodNumberNew;
		yearlyEstimatesTitle.innerHTML = "2018/2019 Estimates";
	}	else if (taxPeriodNumber<=574 && taxPeriodNumber>522 ){
		taxPeriodNumberNew = taxPeriodNumber - 522;
		if (taxPeriodNumberNew<10){taxPeriodNumberNew="0"+taxPeriodNumberNew;}
		tableCaptionTitle.innerHTML = "2019/2020 Tax Period " + taxPeriodNumberNew;
		tableCaption2.innerHTML = "2019/2020 Tax Period " + taxPeriodNumberNew;
		yearlyEstimatesTitle.innerHTML = "2019/2020 Estimates";
	}	else if (taxPeriodNumber<=taxPeriodLimit && taxPeriodNumber>574 ){
		taxPeriodNumberNew = taxPeriodNumber - 574;
		if (taxPeriodNumberNew<10){taxPeriodNumberNew="0"+taxPeriodNumberNew;}
		tableCaptionTitle.innerHTML = "2020/2021 Tax Period " + taxPeriodNumberNew;
		tableCaption2.innerHTML = "2020/2021 Tax Period " + taxPeriodNumberNew;
		yearlyEstimatesTitle.innerHTML = "2020/2021 Estimates";
	}	else {
		taxPeriodNumberNew = taxPeriodNumber;
	}
	
	for (let f=0;f<7;f++)	{
		//creating first column
		let tableRow = document.getElementById("tableRow"+f);
		let tableData = document.createElement("div");
		tableData.setAttribute("class", "col-sm-2 col-xs-3 tableData");

		let dayType = document.createElement("select");
		dayType.setAttribute("name", "dayType"+taxPeriodStart);
		dayType.setAttribute("id", "dayType"+taxPeriodStart);
		dayType.setAttribute("class", "typeOfDaySelect");
		tableData.appendChild(dayType);

		let dayOptionsArray =["↓ Select", "Day In", "Day Off", "Holiday", "Half In/Hol", "Unpaid Hol", "Day In/Sick", "Sickness", "Absence",  "Parental Leave", "Bereavement", "Compassionate" ];
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
		let dayInSickLabel = document.createElement("label");
		dayInSickLabel.appendChild(dayInSickText);
		let dayInSickButton = document.createElement("input");
		dayInSickButton.setAttribute("id", "dayInSickButton"+taxPeriodStart);
		dayInSickButton.setAttribute("type", "checkbox");
		dayInSickButton.setAttribute("name", "dayInSick"+taxPeriodStart);
		dayInSickButton.setAttribute("value", "true");
		dayInSickLabel.appendChild(dayInSickButton);
		dayInSickDiv.appendChild(dayInSickLabel);

		dateDiv.appendChild(dayInSickDiv);

		let sicknessDiv = document.createElement("div");
		sicknessDiv.setAttribute("id","sicknessDiv"+taxPeriodStart);
		sicknessDiv.setAttribute("class","absoluteDiv sicknessDiv sicknessColor");
		
		let sicknessLabel = document.createElement("label");
		let sicknessText = document.createTextNode("Paid ");
		sicknessLabel.appendChild(sicknessText);
		
		let sicknessButton = document.createElement("input");
		sicknessButton.setAttribute("id", "sicknessButton"+taxPeriodStart);
		sicknessButton.setAttribute("type", "checkbox");
		sicknessButton.setAttribute("name", "sickness"+taxPeriodStart);
		sicknessButton.setAttribute("value", "true");
		sicknessLabel.appendChild(sicknessButton);
		sicknessDiv.appendChild(sicknessLabel);
		dateDiv.appendChild(sicknessDiv);

		let familyLeaveDiv = document.createElement("div");
		familyLeaveDiv.setAttribute("id","familyLeaveDiv"+taxPeriodStart);
		familyLeaveDiv.setAttribute("class","absoluteDiv familyLeaveDiv familyLeaveColor");

		let familyLeaveLabel = document.createElement("label");
		let familyLeaveText = document.createTextNode("Paid ");
		familyLeaveLabel.appendChild(familyLeaveText);
		let familyLeaveButton = document.createElement("input");
		familyLeaveButton.setAttribute("id", "familyLeaveButton"+taxPeriodStart);
		familyLeaveButton.setAttribute("type", "checkbox");
		familyLeaveButton.setAttribute("name", "familyLeave"+taxPeriodStart);
		familyLeaveButton.setAttribute("value", "true");
		familyLeaveLabel.appendChild(familyLeaveButton);
		familyLeaveDiv.appendChild(familyLeaveLabel);
		dateDiv.appendChild(familyLeaveDiv);

		let enhancedHolidayDiv = document.createElement("div");
		enhancedHolidayDiv.setAttribute("id","enhancedHolidayDiv"+taxPeriodStart);
		enhancedHolidayDiv.setAttribute("class","absoluteDiv absoluteDivSick holidayDiv holidayColor");
		let enhancedHolidayLabel = document.createElement("label");
		let enhancedHolidayText = document.createTextNode("Enhanced ");
		enhancedHolidayLabel.appendChild(enhancedHolidayText);
		let enhancedHolidayButton = document.createElement("input");
		enhancedHolidayButton.setAttribute("id", "enhancedHolidayButton"+taxPeriodStart);
		enhancedHolidayButton.setAttribute("type", "checkbox");
		enhancedHolidayButton.setAttribute("name", "enhancedHoliday"+taxPeriodStart);
		enhancedHolidayButton.setAttribute("value", "true");
		enhancedHolidayLabel.appendChild(enhancedHolidayButton);
		enhancedHolidayDiv.appendChild(enhancedHolidayLabel);
		dateDiv.appendChild(enhancedHolidayDiv);

		let bereavementButtonDiv = document.createElement("div");
		bereavementButtonDiv.setAttribute("id","bereavementButtonDiv"+taxPeriodStart);
		bereavementButtonDiv.setAttribute("class","absoluteDiv absoluteDivSick bereavementDiv bereavementColor");
		let bereavementLabel = document.createElement("label");
		let bereavementButtonText = document.createTextNode("Paid ");
		bereavementLabel.appendChild(bereavementButtonText);
		let bereavementButton = document.createElement("input");
		bereavementButton.setAttribute("id", "bereavementButton"+taxPeriodStart);
		bereavementButton.setAttribute("type", "checkbox");
		bereavementButton.setAttribute("name", "bereavementButton"+taxPeriodStart);
		bereavementButton.setAttribute("value", "true");
		bereavementLabel.appendChild(bereavementButton);
		bereavementButtonDiv.appendChild(bereavementLabel);
		dateDiv.appendChild(bereavementButtonDiv);

		let compassionateButtonDiv = document.createElement("div");
		compassionateButtonDiv.setAttribute("id","compassionateButtonDiv"+taxPeriodStart);
		compassionateButtonDiv.setAttribute("class","absoluteDiv absoluteDivSick compassionateDiv compassionateColor");
		let compassionateButtonText = document.createTextNode("Paid ");
		let compassionateLabel = document.createElement("label");
		compassionateLabel.appendChild(compassionateButtonText);
		let compassionateButton = document.createElement("input");
		compassionateButton.setAttribute("id", "compassionateButton"+taxPeriodStart);
		compassionateButton.setAttribute("type", "checkbox");
		compassionateButton.setAttribute("name", "compassionateButton"+taxPeriodStart);
		compassionateButton.setAttribute("value", "true");
		compassionateLabel.appendChild(compassionateButton);
		compassionateButtonDiv.appendChild(compassionateLabel);
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
		let notSelectedText = document.createTextNode("Select Day Type");
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
		let dayOffText = document.createTextNode("Enjoy Your Day!");
		dayOffDiv.appendChild(dayOffText);
		tableData2.appendChild(dayOffDiv);

		let sicknessTextDiv = document.createElement("div");
		sicknessTextDiv.setAttribute("id","sicknessTextDiv"+taxPeriodStart);
		sicknessTextDiv.setAttribute("class","border-left-message absoluteDiv sicknessDiv sicknessColor");
		let sicknessTextDivText = document.createTextNode("Get Well Soon!");
		sicknessTextDiv.appendChild(sicknessTextDivText);
		tableData2.appendChild(sicknessTextDiv);

		let dayInSickTextDiv = document.createElement("div");
		dayInSickTextDiv.setAttribute("id","dayInSickTextDiv"+taxPeriodStart);
		dayInSickTextDiv.setAttribute("class","border-left-message absoluteDiv dayInSickDiv dayInSickColor");
		let dayInSickTextDivText = document.createTextNode("Get Well Soon!");
		dayInSickTextDiv.appendChild(dayInSickTextDivText);
		tableData2.appendChild(dayInSickTextDiv);

		let absenceDiv = document.createElement("div");
		absenceDiv.setAttribute("id","absenceDiv"+taxPeriodStart);
		absenceDiv.setAttribute("class","border-left-message absoluteDiv absenceDiv absenceColor");
		let absenceDivText = document.createTextNode("Time Off Work.");
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
		let unpaidHolDivText = document.createTextNode("Enjoy Your Time!");
		unpaidHolDiv.appendChild(unpaidHolDivText);
		tableData2.appendChild(unpaidHolDiv);

		tableRow.appendChild(tableData2);

		//create fourth column elements
		let noteDiv = document.createElement("div");
		noteDiv.setAttribute("class", "col-sm-3  hidden-xs tableData tableDataRelative noteDiv");

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
		//add day names to calendar
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

		//add month names to calendar
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
		calendarCaption.innerHTML = yy;

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

	payChristmasSavings.innerHTML = " ";

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
//---------------------------------FORWARD BACKWARD FUNCTIONS------------------------------------------//
//counter is used to keep a track of how many time all function has been called.
let counter = 0;
//this function gets called from 4 different functions(increase, decrease, fastincrease, fastdecsres),
// and either shows or hides controls buttons depending on results
const showHideForwardBackwardControls = (taxPeriodNumberNew, modTimeSinceEpoch) => {
	if (taxPeriodNumberNew<1)	{
		taxPeriodNumberNew = 1;
		let weekStart = weekStartArray[taxPeriodNumberNew];
		modTimeSinceEpoch = timeSinceEpochOriginal+weekStart*86400000;
		$("#buttonLeft").addClass("hidden");
		$("#buttonLeftFake").removeClass("hidden");
		$("#buttonUp").addClass("hidden");
		$("#buttonUpFake").removeClass("hidden");
		$("#fastBackward").addClass("hidden");
		$("#fastBackwardFake").removeClass("hidden");
		//must reset the value of counter 3, otherwise if skipping through payslips forward, it will drag the values back by
		//the number it went beyond taxPeriodNumber
		counter = 1-taxPeriodNumber;
	}	else if (taxPeriodNumberNew>=1 && taxPeriodNumberNew<taxPeriodLimit)	{
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
	} else if (taxPeriodNumberNew => taxPeriodLimit-1){

		taxPeriodNumberNew = taxPeriodLimit-1;
		let weekStart = weekStartArray[taxPeriodNumberNew];
		modTimeSinceEpoch = timeSinceEpochOriginal + 604800000*(taxPeriodNumberNew-1)+weekStart*86400000;
		$("#buttonRight").addClass("hidden");
		$("#buttonRightFake").removeClass("hidden");
		$("#buttonDown").addClass("hidden");
		$("#buttonDownFake").removeClass("hidden");
		$("#fastForward").addClass("hidden");
		$("#fastForwardFake").removeClass("hidden");
		counter = taxPeriodLimit-taxPeriodNumber;
	} else {
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
	//clear the main table and calendar
	for (let f=0;f<7;f++)	{
		let tableRow = document.getElementById("tableRow"+f).innerHTML = " ";
		let calendarRow = document.getElementById("calendarRow"+f).innerHTML = " ";
	}
	createTableElements(taxPeriodNumberNew, modTimeSinceEpoch);
	createPayoutButtons(taxPeriodNumberNew);
	generateCalendar (taxPeriodNumberNew,modTimeSinceEpoch);
	loadData(taxPeriodNumberNew);
}
const increaseTaxPeriod = (taxPeriodNumber) => {
	counter++;
	taxPeriodNumberNew = taxPeriodNumber + counter;
	let weekStart = weekStartArray[taxPeriodNumberNew];
	let modTimeSinceEpoch = timeSinceEpochOriginal + 604800000*(taxPeriodNumberNew-1)+weekStart*86400000;
	showHideForwardBackwardControls(taxPeriodNumberNew, modTimeSinceEpoch);
}
const decreaseTaxPeriod = (taxPeriodNumber)=>{
	counter--;
	let taxPeriodNumberNew = taxPeriodNumber + counter;
	let weekStart = weekStartArray[taxPeriodNumberNew];
	let modTimeSinceEpoch = timeSinceEpochOriginal + 604800000*(taxPeriodNumberNew-1)+weekStart*86400000;
	showHideForwardBackwardControls(taxPeriodNumberNew, modTimeSinceEpoch);
}
const fastDecreaseTaxPeriod = (taxPeriodNumber) => {
	counter-= 6;
	let taxPeriodNumberNew = taxPeriodNumber + counter;
	let weekStart = weekStartArray[taxPeriodNumberNew-6];
	let modTimeSinceEpoch = timeSinceEpochOriginal + 604800000*(taxPeriodNumberNew-1)+weekStart*86400000;
	showHideForwardBackwardControls(taxPeriodNumberNew, modTimeSinceEpoch);
}
const fastIcreaseTaxPeriod = (taxPeriodNumber) => {
	counter+= 6;
	let taxPeriodNumberNew = taxPeriodNumber + counter;
	let weekStart = weekStartArray[taxPeriodNumberNew+6];
	let modTimeSinceEpoch = timeSinceEpochOriginal + 604800000*(taxPeriodNumberNew-1)+weekStart*86400000;
	showHideForwardBackwardControls(taxPeriodNumberNew, modTimeSinceEpoch);
}

//----------------------FORM VALIDATION FUNCTIONS------------------------------------------------------//
//function that prevents from sending extra payments data in case user checks checkboxes
const deselectValuesValidateForm2 = (taxPeriodNumber) => {
	weekStart = weekStartArray[taxPeriodNumber];
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
	taxPeriodNumber += counter;
	weekStart = weekStartArray[taxPeriodNumber];
	unsHCheckCurrent = unsHCheck[taxPeriodNumber];

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
		// form validation
		var startHourIndex = document.getElementById("startHours"+taxPeriodStart).options.selectedIndex;
		var endHourIndex = document.getElementById("endHours"+taxPeriodStart).options.selectedIndex;

		var submitSuccess = document.getElementById("submitSuccessMain");
		if (startHourIndex>endHourIndex)
		{
			submitSuccess.removeAttribute("class");
			submitSuccess.setAttribute("class", 'col-sm-9 col-xs-8 responseDiv errorStyle');
			submitSuccess.innerHTML = 'Start time can not be greater then finish time!';
			
			//alert("Start time can not be greater then finish time!");
			endHours.setAttribute("class", "invalidForm hourMinuteSelect");
			endMinutes.setAttribute("class", "invalidForm hourMinuteSelect");		
			return false;
		}
		else{
			submitSuccess.removeAttribute("class");
			submitSuccess.setAttribute("class", "col-sm-9 col-xs-8 responseDiv");
		}
		taxPeriodStart++;
	}
	deselectValuesValidateForm2(taxPeriodNumber);
}
//-------------------------END OF FORM VALIDATION FUNCTIONS------------------------------------------//

//----------------------------GET FORM VALUES FUNCTION---------------------------------------------//
const getFormValues = (taxPeriodNumber)=>{
	weekStart = weekStartArray[taxPeriodNumber];
	let timeSinceEpochValue = timeSinceEpochOriginal + 604800000*(taxPeriodNumber-1)+weekStart*86400000;
	let str = '';
	str += 'taxPeriodNumberName'+'='+taxPeriodNumber+'&'+'timeSinceEpoch='+timeSinceEpochValue+'&'+'counter='+counter+'&';
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
		let flickerbookStartDate = new Date("2009-03-28");
		let flickerbookEndDate = new Date("2021-03-29");
		let submmitedDate = new Date(dateInputHiddenValue);
			if( submmitedDate < flickerbookStartDate || submmitedDate>flickerbookEndDate )	{
				
				submitSuccess.removeAttribute("class");
				submitSuccess.setAttribute("class", 'col-sm-9 col-xs-8 responseDiv errorStyle');
				submitSuccess.innerHTML = 'Submitted Date Not Allowed!';
			
				return false;
			} else {
				submitSuccess.removeAttribute("class");
				submitSuccess.setAttribute("class", "col-sm-9 col-xs-8 responseDiv");
		}
			//---------------------------------------------------------------------------------------

		str += dateInputHidden+'='+dateInputHiddenValue+'&'+dayTypeName+'='+dayTypeValue+'&'+startHoursName+'='+startHoursValue+'&'+startMinutesName+'='+startMinutesValue+'&'+endHoursName+'='+endHoursValue+'&'+endMinutesName+'='+endMinutesValue+'&'+sicknessButton+'='+sicknessButtonValue+'&'+enHolButon+'='+enHolButonValue+'&'+dayInSickButton+'='+dayInSickButtonValue+'&'+noteInput+'='+noteInputValue+'&'+familyLeaveButton+'='+familyLeaveButtonValue+'&'+bereavementButton+'='+bereavementButtonValue+'&'+compassionateButton+'='+compassionateButtonValue+'&';

		taxPeriodStart++
	}
	//taxPeriodNumber checker
	if (taxPeriodNumber <0 || taxPeriodNumber>taxPeriodLimit)	{
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
	let {summerSavingsPaymentCollected, christmasSavingsPaymentCollected, saturdayHours, NISum, taxPeriodQuantityFull} = response;
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
	let {summerSavingsDeduction, summerSavingsPayment, SSP, holidayPayment} = response;
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
	let {add_paySum, SAPSum, salarySum, bonusSum, commissionsSum, daysNotOff, totalHours, taxSumLast12Weeks, holidayPaySum} = response;
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
	let {last10FamHoursArray, last10BerHoursArray, last10CompHoursArray, premium, taxablePayments} = response;
	let {taxFreeDeduction1, taxFreeDeduction2, taxFreeDeduction3, travelDeduction} = response;
	let {taxFreeDeduction1Name, taxFreeDeduction2Name, taxFreeDeduction3Name, travelDeductionSum} = response;
	let {taxFreeDeduction1Sum, taxFreeDeduction2Sum, taxFreeDeduction3Sum, taxablePaySum} = response;
	
	let {taxablePaySumLast12Weeks, travelDeductionSumLast12Weeks, taxFreeDeduction1SumLast12Weeks} = response;
	let {taxFreeDeduction2SumLast12Weeks, taxFreeDeduction3SumLast12Weeks} = response;
	// these two values ar assigned to a different name variable, as the buttons already have these names
	let paySummerSavingsCheckRes = response.paySummerSavingsCheck;
	let payChristmasSavingsCheckRes = response.payChristmasSavingsCheck;
	
	let {paymentsPieChartVis, deductionsPieChartVis, yearToDatePieChartVis} = response;
	//vis for visibility
	let {payStructurePieChartVis, daysPieChartVis, holidaysPieChartVis} = response;
	let {last3MonthsPieChartVis, last10WeeksNetChartVis, last10WeeksPaidHoursChartVis} = response;
	let {hourlyAveragesVis, dailyAveragesVis, weeklyAveragesVis} = response;
	let {payStructureVis, YTDPaymentsVis, YTDHoursVis, yearlyEstimatesVis, yearlyEstimatesPieChartVis} = response;
	let {YTDDaysVis, holidaysSectionVis, last3MonthsAveragesVis, firstLogin, newsModal} = response;
	let {weeklyAveragesPieChartVis, yearToDateIIPieChartVis, yearToDateHoursPieChartVis} = response;
	
	//missing hours and payments
	let {missBasicHours, missUnsocHours, missOT1Hours, missOT2Hours, missHolidayHours, missBHolHours, missBHolBonus, missSatHours} = response;
	let {missSunHours, missSicknessHours, missPaternityHours, missBerHours, missCompHours, missBasicPay, missUnsocPay, missOT1Pay} = response;
	let {missOT2Pay, missHolidayPay, missBHolPay, missSatPay, missSunPay, missSicknessPay, missPaternityPay, missBerPay} = response;
	let {missCompPay, missUnsocHolHours, missUnsocSickHours, missUnsocPaterntityHours, missUnsocBerHours, missUnsocCompHours, missUnsocHolPay} = response;
	let {missUnsocSickPay, missUnsocPaterntityPay, missUnsocBerPay, missUnsocCompPay, missEnHolidayHours, missEnHolidayPay} = response;
	
	//if a user logs in for first time show him this modal
	firstLogin = Number(firstLogin);
	if (firstLogin === 0) {
		$('#myModal').modal('show');
	} else {	
		$('#myModal').modal('hide');
	}
	
	//jei pirmas login sito nerodome
	newsModal = Number(newsModal);
	if (newsModal === 0 && firstLogin === 1) {
		$('#newsModal').modal('show');
	} else {	
		$('#newsModal').modal('hide');
	}

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
	NISumLast12Weeks = Number(NISumLast12Weeks);					union_deSumLast12Weeks = Number(union_deSumLast12Weeks);
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
	holidayPayment = Number(holidayPayment);		holidayPaySum = Number(holidayPaySum);
	taxFreeDeduction1 = Number(taxFreeDeduction1);							taxFreeDeduction2 = Number(taxFreeDeduction2);
	taxFreeDeduction3 = Number(taxFreeDeduction3);							travelDeduction = Number(travelDeduction);
	taxablePayments = Number(taxablePayments);					taxFreeDeduction1Sum = Number(taxFreeDeduction1Sum);
	taxFreeDeduction2Sum = Number(taxFreeDeduction2Sum);	taxFreeDeduction3Sum = Number(taxFreeDeduction3Sum);
	travelDeductionSum = Number(travelDeductionSum);		taxablePaySum = Number(taxablePaySum);
	taxablePaySumLast12Weeks = Number(taxablePaySumLast12Weeks);		travelDeductionSumLast12Weeks = Number(travelDeductionSumLast12Weeks);
	taxFreeDeduction1SumLast12Weeks = Number(taxFreeDeduction1SumLast12Weeks);
	taxFreeDeduction2SumLast12Weeks = Number(taxFreeDeduction2SumLast12Weeks);
	taxFreeDeduction3SumLast12Weeks = Number(taxFreeDeduction3SumLast12Weeks);
	
	
	missBasicHours = Number(missBasicHours);				missUnsocHours = Number(missUnsocHours);
	missOT1Hours = Number(missOT1Hours);					missOT2Hours = Number(missOT2Hours);			missHolidayHours = Number(missHolidayHours);
	missBHolHours = Number(missBHolHours);					missBHolBonus = Number(missBHolBonus);			missSatHours = Number(missSatHours);
	missSunHours = Number(missSunHours);					missSicknessHours = Number(missSicknessHours);
	missPaternityHours = Number(missPaternityHours);		missBerHours = Number(missBerHours);			missCompHours = Number(missCompHours);

	missBasicPay = Number(missBasicPay);					missUnsocPay = Number(missUnsocPay);			missOT1Pay = Number(missOT1Pay);
	missOT2Pay = Number(missOT2Pay);						missHolidayPay = Number(missHolidayPay);		missBHolPay = Number(missBHolPay);
	missSatPay = Number(missSatPay);						missSunPay = Number(missSunPay);				missSicknessPay = Number(missSicknessPay);
	missPaternityPay = Number(missPaternityPay);			missBerPay = Number(missBerPay);				missCompPay = Number(missCompPay);

	missUnsocHolHours = Number(missUnsocHolHours);			missUnsocSickHours = Number(missUnsocSickHours);
	missUnsocPaterntityHours = Number(missUnsocPaterntityHours);											missUnsocBerHours = Number(missUnsocBerHours);
	missUnsocCompHours = Number(missUnsocCompHours);		missUnsocHolPay = Number(missUnsocHolPay);		missUnsocSickPay = Number(missUnsocSickPay);
	missUnsocPaterntityPay = Number(missUnsocPaterntityPay);												missUnsocBerPay = Number(missUnsocBerPay);
	missUnsocCompPay = Number(missUnsocCompPay);			missEnHolidayHours = Number(missEnHolidayHours);	missEnHolidayPay = Number(missEnHolidayPay);	
		
	paymentsPieChartVis = Number(paymentsPieChartVis); 		taxPeriodQuantityFull = Number(taxPeriodQuantityFull);
	if (paymentsPieChartVis === 0){
		$('#paymentsPieChartShowHide').addClass("hidden");
	}
	else if(paymentsPieChartVis === 1) {
		$('#paymentsPieChartShowHide').removeClass("hidden");
	}
	else{alert("Pie Chart Error")}
	
	deductionsPieChartVis = Number(deductionsPieChartVis);

	if (deductionsPieChartVis === 0){
		$('#deductionsPieChartShowHide').addClass("hidden");
	}
	else if(deductionsPieChartVis === 1) {
		$('#deductionsPieChartShowHide').removeClass("hidden");
	}
	else{}
	
	yearToDatePieChartVis = Number(yearToDatePieChartVis);

	if (yearToDatePieChartVis === 0){
		$('#YTDPieChartShowHide').addClass("hidden");
	}
	else if(yearToDatePieChartVis === 1) {
		$('#YTDPieChartShowHide').removeClass("hidden");
	}
	else{}
	
	payStructurePieChartVis = Number(payStructurePieChartVis);

	if (payStructurePieChartVis === 0){
		$('#YTDPSPieChartShowHide').addClass("hidden");
	}
	else if(payStructurePieChartVis === 1) {
		$('#YTDPSPieChartShowHide').removeClass("hidden");
	}
	else{}
	
	yearToDateIIPieChartVis = Number(yearToDateIIPieChartVis);

	if (yearToDateIIPieChartVis === 0){
		$('#yearToDateIIPieChartShowHide').addClass("hidden");
	}
	else if(yearToDateIIPieChartVis === 1) {
		$('#yearToDateIIPieChartShowHide').removeClass("hidden");
	}
	else{}
	
	yearToDateHoursPieChartVis = Number(yearToDateHoursPieChartVis);

	if (yearToDateHoursPieChartVis === 0){
		$('#yearToDateHoursPieChartShowHide').addClass("hidden");
	}
	else if(yearToDateHoursPieChartVis === 1) {
		$('#yearToDateHoursPieChartShowHide').removeClass("hidden");
	}
	else{}
	
	weeklyAveragesPieChartVis = Number(weeklyAveragesPieChartVis);
		if (weeklyAveragesPieChartVis === 0){
		$('#weeklyAveragesPieChartShowHide').addClass("hidden");
	}
	else if(weeklyAveragesPieChartVis === 1) {
		$('#weeklyAveragesPieChartShowHide').removeClass("hidden");
	}
	else{}
	
	daysPieChartVis = Number(daysPieChartVis);

	if (daysPieChartVis === 0){
		$('#daysPieChartShowHide').addClass("hidden");
	}
	else if(daysPieChartVis === 1) {
		$('#daysPieChartShowHide').removeClass("hidden");
	}
	else{}
	
	holidaysPieChartVis = Number(holidaysPieChartVis);

	if (holidaysPieChartVis === 0){
		$('#holidayPieChartShowHide').addClass("hidden");
	}
	else if(holidaysPieChartVis === 1) {
		$('#holidayPieChartShowHide').removeClass("hidden");
	}
	else{}
	
	
	last3MonthsPieChartVis = Number(last3MonthsPieChartVis);

	if (last3MonthsPieChartVis === 0){
		$('#last3MonthsPieChartShowHide').addClass("hidden");
	}
	else if(last3MonthsPieChartVis === 1) {
		$('#last3MonthsPieChartShowHide').removeClass("hidden");
	}
	else{}
	
	
	last10WeeksNetChartVis = Number(last10WeeksNetChartVis);

	if (last10WeeksNetChartVis === 0){
		$('#last10WeeksNetPayChartShowHide').addClass("hidden");
	}
	else if(last10WeeksNetChartVis === 1) {
		$('#last10WeeksNetPayChartShowHide').removeClass("hidden");
	}
	else{}
	
	last10WeeksPaidHoursChartVis = Number(last10WeeksPaidHoursChartVis);

	if (last10WeeksPaidHoursChartVis === 0){
		$('#last10WeeksPaidHoursChartShowHide').addClass("hidden");
	}
	else if(last10WeeksPaidHoursChartVis === 1) {
		$('#last10WeeksPaidHoursChartShowHide').removeClass("hidden");
	}
	else{}
	
	dailyAveragesVis = Number(dailyAveragesVis);

	if (dailyAveragesVis === 0){
		$('#dailyAverages').addClass("hidden");
	}
	else if(dailyAveragesVis === 1) {
		$('#dailyAverages').removeClass("hidden");
	}
	else{}
	
	weeklyAveragesVis = Number(weeklyAveragesVis);

	if (weeklyAveragesVis === 0){
		$('#weeklyAverages').addClass("hidden");
	}
	else if(weeklyAveragesVis === 1) {
		$('#weeklyAverages').removeClass("hidden");
	}
	else{}
	
	hourlyAveragesVis = Number(hourlyAveragesVis);
	if (hourlyAveragesVis === 0){
		$('#hourlyAverages').addClass("hidden");
	}
	else if(hourlyAveragesVis === 1) {
		$('#hourlyAverages').removeClass("hidden");
	}
	else{}
	
	//let {payStructureVis, YTDPaymentsVis, YTDHoursVis} = response;
	//let {YTDDaysVis, holidaysSectionVis, last3MonthsAveragesVis} = response;

	payStructureVis = Number(payStructureVis);
	if (payStructureVis === 0){
		$('#payStructure').addClass("hidden");
	}
	else if(payStructureVis === 1) {
		$('#payStructure').removeClass("hidden");
	}
	else{}
	
	YTDPaymentsVis = Number(YTDPaymentsVis);
	if (YTDPaymentsVis === 0){
		$('#YTDPayments').addClass("hidden");
	}
	else if(YTDPaymentsVis === 1) {
		$('#YTDPayments').removeClass("hidden");
	}
	else{}

	YTDHoursVis = Number(YTDHoursVis);
	if (YTDHoursVis === 0){
		$('#YTDHours').addClass("hidden");
	}
	else if(YTDHoursVis === 1) {
		$('#YTDHours').removeClass("hidden");
	}
	else{}

	YTDDaysVis = Number(YTDDaysVis);
	if (YTDDaysVis === 0){
		$('#YTDDays').addClass("hidden");
	}
	else if(YTDDaysVis === 1) {
		$('#YTDDays').removeClass("hidden");
	}
	else{}

	holidaysSectionVis = Number(holidaysSectionVis);
	if (holidaysSectionVis === 0){
		$('#holidaysSection').addClass("hidden");
	}
	else if(holidaysSectionVis === 1) {
		$('#holidaysSection').removeClass("hidden");
	}
	else{}

	last3MonthsAveragesVis = Number(last3MonthsAveragesVis);
	if (last3MonthsAveragesVis === 0){
		$('#last3MonthsAverages').addClass("hidden");
	}
	else if(last3MonthsAveragesVis === 1) {
		$('#last3MonthsAverages').removeClass("hidden");
	}
	else{}
	

	yearlyEstimatesVis = Number(yearlyEstimatesVis);

	if (yearlyEstimatesVis === 0){
		$('#yearlyEstimates').addClass("hidden");
	}
	else if(yearlyEstimatesVis === 1) {yearlyEstimatesVis
		$('#yearlyEstimates').removeClass("hidden");
	}
	else{}
	
	yearlyEstimatesPieChartVis = Number(yearlyEstimatesPieChartVis);
		if (yearlyEstimatesPieChartVis === 0){
		$('#yearlyEstimatesPieChartShowHide').addClass("hidden");
	}
	else if(yearlyEstimatesPieChartVis === 1) {
		$('#yearlyEstimatesPieChartShowHide').removeClass("hidden");
	}
	else{}

	//get all elements from the dom that will be used to load data into them
	//payments table
	let paymentsAmountDiv = document.getElementById("paymentsAmountDiv");
	let paymentsNamesDiv = document.getElementById("paymentsNamesDiv");
	let paymentsUnitsDiv = document.getElementById("paymentsUnitsDiv");
	let paymentsRateDiv = document.getElementById("paymentsRateDiv");
	let totalGrossPaymentsAmountDiv = document.getElementById("totalGrossPaymentsAmountText");
	
	
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
	
	// yearly estimates
	let yearlyEstimatesNames = document.getElementById("yearlyEstimatesNames");
	let yearlyEstimatesAmount = document.getElementById("yearlyEstimatesAmount");
	let yearlyEstimatesAmountHid = document.getElementById("yearlyEstimatesAmountHid");
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
	
	let weeklyAveragesHoursNames  = document.getElementById("weeklyAveragesHoursNames");
	let weeklyAveragesHoursAmount  = document.getElementById("weeklyAveragesHoursAmount");
	let weeklyAveragesHoursAmountHid  = document.getElementById("weeklyAveragesHoursAmountHid");
	
	let weeklyAveragesPaymentsNames  = document.getElementById("weeklyAveragesPaymentsNames");
	let weeklyAveragesPaymentsAmount  = document.getElementById("weeklyAveragesPaymentsAmount");
	let weeklyAveragesPaymentsAmountHid  = document.getElementById("weeklyAveragesPaymentsAmountHid");
	
	
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
	if (holidayPayment>0) {paymentsAmountDiv.innerHTML += '<br>'+holidayPayment.toFixed(2);}
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
	if (additionalPayment !== 0) {paymentsAmountDiv.innerHTML += '<br>'+additionalPayment.toFixed(2);}
	if (additionalPayment2 !== 0) {paymentsAmountDiv.innerHTML += '<br>'+additionalPayment2.toFixed(2);}
	if (additionalPayment3 !== 0) {paymentsAmountDiv.innerHTML += '<br>'+additionalPayment3.toFixed(2);}
	if (christmasSavingsPayment>0) {paymentsAmountDiv.innerHTML += '<br>'+christmasSavingsPayment.toFixed(2);}
	if (summerSavingsPayment>0) {paymentsAmountDiv.innerHTML += '<br>'+summerSavingsPayment.toFixed(2);}
	if (pensionAmount>0 && pensionBeforeTax === 1){paymentsAmountDiv.innerHTML += '<br>- '+pensionAmount.toFixed(2);}
	
	//-------------missing payments amounts ----------------------------------//
	
	if (missBasicPay!==0 || missUnsocPay!==0 || missUnsocHolPay!==0 || missUnsocSickPay!==0 ||missUnsocPaterntityPay!==0 || missUnsocBerPay!==0 || missUnsocCompPay!==0
	||	missOT1Pay!==0 || missOT2Pay!==0 ||missEnHolidayPay!==0 || missHolidayPay!==0 ||missBHolPay!==0 || missBHolBonus!==0 || missSatPay!==0 || missSunPay!==0 ||
	missSicknessPay!==0 ||missPaternityPay!==0 ||missBerPay!==0 ||missCompPay!==0){paymentsAmountDiv.innerHTML += '<hr>';}
	if (missBasicPay !== 0) {paymentsAmountDiv.innerHTML += missBasicPay.toFixed(2)+'<br>';}
	if (missUnsocPay !== 0) {paymentsAmountDiv.innerHTML += missUnsocPay.toFixed(2)+'<br>';}
	if (missUnsocHolPay !== 0) {paymentsAmountDiv.innerHTML += missUnsocHolPay.toFixed(2)+'<br>';}
	if (missUnsocSickPay !== 0) {paymentsAmountDiv.innerHTML += missUnsocSickPay.toFixed(2)+'<br>';}
	if (missUnsocPaterntityPay !== 0) {paymentsAmountDiv.innerHTML += missUnsocPaterntityPay.toFixed(2)+'<br>';}
	if (missUnsocBerPay !== 0) {paymentsAmountDiv.innerHTML += missUnsocBerPay.toFixed(2)+'<br>';}
	if (missUnsocCompPay !== 0) {paymentsAmountDiv.innerHTML += missUnsocCompPay.toFixed(2)+'<br>';}
	if (missOT1Pay !== 0) {paymentsAmountDiv.innerHTML += missOT1Pay.toFixed(2)+'<br>';}
	if (missOT2Pay !== 0) {paymentsAmountDiv.innerHTML += missOT2Pay.toFixed(2)+'<br>';}
	if (missEnHolidayPay !== 0) {paymentsAmountDiv.innerHTML += missEnHolidayPay.toFixed(2)+'<br>';}
	if (missHolidayPay !== 0) {paymentsAmountDiv.innerHTML += missHolidayPay.toFixed(2)+'<br>';}
	if (missBHolPay !== 0) {paymentsAmountDiv.innerHTML += missBHolPay.toFixed(2)+'<br>';}
	if (missBHolBonus !== 0) {paymentsAmountDiv.innerHTML += missBHolBonus.toFixed(2)+'<br>';}
	if (missSatPay !== 0) {paymentsAmountDiv.innerHTML += missSatPay.toFixed(2)+'<br>';}
	if (missSunPay !== 0) {paymentsAmountDiv.innerHTML += missSunPay.toFixed(2)+'<br>';}
	if (missSicknessPay !== 0) {paymentsAmountDiv.innerHTML += missSicknessPay.toFixed(2)+'<br>';}
	if (missPaternityPay !== 0) {paymentsAmountDiv.innerHTML += missPaternityPay.toFixed(2)+'<br>';}
	if (missBerPay !== 0) {paymentsAmountDiv.innerHTML += missBerPay.toFixed(2)+'<br>';}
	if (missCompPay !== 0) {paymentsAmountDiv.innerHTML += missCompPay.toFixed(2)+'<br>';}
	
	//payments Names
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
	if (holidayPayment>0) {paymentsNamesDiv.innerHTML += '<br>Holiday Pay 2';}
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
	if (additionalPayment !==0) {paymentsNamesDiv.innerHTML += '<br>'+additionalPaymentName;}
	if (additionalPayment2 !==0) {paymentsNamesDiv.innerHTML += '<br>'+additionalPayment2Name;}
	if (additionalPayment3 !==0) {paymentsNamesDiv.innerHTML += '<br>'+additionalPayment3Name;}
	if (christmasSavingsPayment>0) {paymentsNamesDiv.innerHTML += '<br> Chris. Sav';}
	if (summerSavingsPayment>0) {paymentsNamesDiv.innerHTML += '<br> Summer Sav.';}
	if (pensionAmount>0 && pensionBeforeTax === 1){paymentsNamesDiv.innerHTML += '<br> Pension';}
	
	//-------------missing payments Names ----------------------------------//
	
	if (missBasicPay!==0 || missUnsocPay!==0 || missUnsocHolPay!==0 || missUnsocSickPay!==0 ||missUnsocPaterntityPay!==0 || missUnsocBerPay!==0 || missUnsocCompPay!==0
	||	missOT1Pay!==0 || missOT2Pay!==0 ||missEnHolidayPay!==0 || missHolidayPay!==0 ||missBHolPay!==0 || missBHolBonus!==0 || missSatPay!==0 || missSunPay!==0 ||
	missSicknessPay!==0 ||missPaternityPay!==0 ||missBerPay!==0 ||missCompPay!==0){paymentsNamesDiv.innerHTML += '<hr>';}
	if (missBasicPay !== 0) {paymentsNamesDiv.innerHTML += 'Basic Hours<br>';}
	if (missUnsocPay !== 0) {paymentsNamesDiv.innerHTML += 'Unsoc Prem<br> ';}
	if (missUnsocHolPay !== 0) {paymentsNamesDiv.innerHTML += 'Unsoc Prem H<br>';}
	if (missUnsocSickPay !== 0) {paymentsNamesDiv.innerHTML += 'Unsoc Prem S<br>';}
	if (missUnsocPaterntityPay !== 0) {paymentsNamesDiv.innerHTML += 'Unsoc Prem P<br>';}
	if (missUnsocBerPay !== 0) {paymentsNamesDiv.innerHTML += 'Unsoc Prem B<br>';}
	if (missUnsocCompPay !== 0) {paymentsNamesDiv.innerHTML += 'Unsoc Prem C<br>';}
	if (missOT1Pay !== 0) {paymentsNamesDiv.innerHTML += 'Overtime 1<br>';}
	if (missOT2Pay !== 0) {paymentsNamesDiv.innerHTML += 'Overtime 2<br>';}
	if (missEnHolidayPay !== 0) {paymentsNamesDiv.innerHTML += 'En. Holiday<br>';}
	if (missHolidayPay !== 0) {paymentsNamesDiv.innerHTML += 'Holiday<br>';}
	if (missBHolPay !== 0) {paymentsNamesDiv.innerHTML += 'B. Hol<br>';}
	if (missBHolBonus !== 0) {paymentsNamesDiv.innerHTML += 'B. Hol Bonus<br>';}
	if (missSatPay !== 0) {paymentsNamesDiv.innerHTML += 'Saturday B<br>';}
	if (missSunPay !== 0) {paymentsNamesDiv.innerHTML += 'Sunday B<br>';}
	if (missSicknessPay !== 0) {paymentsNamesDiv.innerHTML += 'Sickness Pay<br>';}
	if (missPaternityPay !== 0) {paymentsNamesDiv.innerHTML += 'Parental Pay<br>';}
	if (missBerPay !== 0) {paymentsNamesDiv.innerHTML += 'Bereavement<br>';}
	if (missCompPay !== 0) {paymentsNamesDiv.innerHTML += 'Compassionate<br>';}
			
	
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
	if (holidayPayment>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
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
	if (additionalPayment !==0) {paymentsUnitsDiv.innerHTML += '<br>-';}
	if (additionalPayment2 !==0) {paymentsUnitsDiv.innerHTML += '<br>-';}
	if (additionalPayment3 !==0) {paymentsUnitsDiv.innerHTML += '<br>-';}
	if (christmasSavingsPayment>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
	if (summerSavingsPayment>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
	if (pensionAmount>0 && pensionBeforeTax === 1){paymentsUnitsDiv.innerHTML += '<br>-';}
	
	//------------missing payments units ----------------------//
	if (missBasicPay!==0 || missUnsocPay!==0 || missUnsocHolPay!==0 || missUnsocSickPay!==0 ||missUnsocPaterntityPay!==0 || missUnsocBerPay!==0 || missUnsocCompPay!==0
	||	missOT1Pay!==0 || missOT2Pay!==0 ||missEnHolidayPay!==0 || missHolidayPay!==0 ||missBHolPay!==0 || missBHolBonus!==0 || missSatPay!==0 || missSunPay!==0 ||
	missSicknessPay!==0 ||missPaternityPay!==0 ||missBerPay!==0 ||missCompPay!==0){paymentsUnitsDiv.innerHTML += '<hr>';}
	if (missBasicPay !== 0) {paymentsUnitsDiv.innerHTML += missBasicHours.toFixed(2)+'<br>';}
	if (missUnsocPay !== 0) {paymentsUnitsDiv.innerHTML += missUnsocHours.toFixed(2)+'<br>';}
	if (missUnsocHolPay !== 0) {paymentsUnitsDiv.innerHTML += missUnsocHolHours.toFixed(2)+'<br>';}
	if (missUnsocSickPay !== 0) {paymentsUnitsDiv.innerHTML += missUnsocSickHours.toFixed(2)+'<br>';}
	if (missUnsocPaterntityPay !== 0) {paymentsUnitsDiv.innerHTML += missUnsocPaterntityHours.toFixed(1)+'<br>';}
	if (missUnsocBerPay !== 0) {paymentsUnitsDiv.innerHTML += missUnsocBerHours.toFixed(2)+'<br>';}
	if (missUnsocCompPay !== 0) {paymentsUnitsDiv.innerHTML += missUnsocCompHours.toFixed(2)+'<br>';}
	if (missOT1Pay !== 0) {paymentsUnitsDiv.innerHTML += missOT1Hours.toFixed(2)+'<br>';}
	if (missOT2Pay !== 0) {paymentsUnitsDiv.innerHTML += missOT2Hours.toFixed(2)+'<br>';}
	if (missEnHolidayPay !== 0) {paymentsUnitsDiv.innerHTML += missEnHolidayHours.toFixed(2)+'<br>';}
	if (missHolidayPay !== 0) {paymentsUnitsDiv.innerHTML += missHolidayHours.toFixed(2)+'<br>';}
	if (missBHolPay !== 0) {paymentsUnitsDiv.innerHTML += missBHolHours.toFixed(2)+'<br>';}
	if (missBHolBonus !== 0) {paymentsUnitsDiv.innerHTML += '-<br>';}
	if (missSatPay !== 0) {paymentsUnitsDiv.innerHTML += missSatHours.toFixed(2)+'<br>';}
	if (missSunPay !== 0) {paymentsUnitsDiv.innerHTML += missSunHours.toFixed(2)+'<br>';}
	if (missSicknessPay !== 0) {paymentsUnitsDiv.innerHTML += missSicknessHours.toFixed(2)+'<br>';}
	if (missPaternityPay !== 0) {paymentsUnitsDiv.innerHTML += missPaternityHours.toFixed(2)+'<br>';}
	if (missBerPay !== 0) {paymentsUnitsDiv.innerHTML += missBerHours.toFixed(2)+'<br>';}
	if (missCompPay !== 0) {paymentsUnitsDiv.innerHTML += missCompHours.toFixed(2)+'<br>';}
	
	
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
	if (holidayPayment>0) {paymentsRateDiv.innerHTML += '<br>-';}
	if (saturdayExtraPay>0) {paymentsRateDiv.innerHTML += '<br>*'+saturdayExtraRate.toFixed(4);}
	if (sundayExtraPay>0) {paymentsRateDiv.innerHTML += '<br>*'+sundayExtraRate.toFixed(4);}
	if (sicknessPay>0) {paymentsRateDiv.innerHTML += '<br>'+(hourlyRate*part_sick).toFixed(4);}
	if (familyPay>0) {paymentsRateDiv.innerHTML += '<br>'+(hourlyRate*part_pater).toFixed(4);}
	if (bereavementPay>0) {paymentsRateDiv.innerHTML += '<br>'+(hourlyRate*part_ber).toFixed(4);}
	if (compassionatePay>0) {paymentsRateDiv.innerHTML += '<br>'+(hourlyRate*part_comp).toFixed(4);}
	if (bankHolidayHoursPay>0) {paymentsRateDiv.innerHTML += '<br>'+(hourlyRate*(bHolPayTimes-1)).toFixed(4);}
	if (bankHolidayClockInBonus>0) {paymentsRateDiv.innerHTML += '<br>-';}
	if (payBack>0) {paymentsRateDiv.innerHTML += '<br>-';}
	if (pieceWork>0) {paymentsRateDiv.innerHTML += '<br>-';}
	if (SSP>0) {paymentsRateDiv.innerHTML += '<br>-';}
	if (SPP>0) {paymentsRateDiv.innerHTML += '<br>-';}
	if (SAP>0) {paymentsRateDiv.innerHTML += '<br>-';}
	if (salary>0) {paymentsRateDiv.innerHTML += '<br>-';}
	if (bonus>0) {paymentsRateDiv.innerHTML += '<br>-';}
	if (commissions>0) {paymentsRateDiv.innerHTML += '<br>-';}
	if (additionalPayment !==0) {paymentsRateDiv.innerHTML += '<br>-';}
	if (additionalPayment2 !==0) {paymentsRateDiv.innerHTML += '<br>-';}
	if (additionalPayment3 !==0) {paymentsRateDiv.innerHTML += '<br>-';}
	if (christmasSavingsPayment>0) {paymentsRateDiv.innerHTML += '<br>-';}
	if (summerSavingsPayment>0) {paymentsRateDiv.innerHTML += '<br>-';}
	if ((pensionAmount>0) && (pensionBeforeTax === 1)){paymentsRateDiv.innerHTML += '<br> '+pensionRate.toFixed(2)+'%';}
	
	//------------missing payments rates ----------------------//
	if (missBasicPay!==0 || missUnsocPay!==0 || missUnsocHolPay!==0 || missUnsocSickPay!==0 ||missUnsocPaterntityPay!==0 || missUnsocBerPay!==0 || missUnsocCompPay!==0
	||	missOT1Pay!==0 || missOT2Pay!==0 ||missEnHolidayPay!==0 || missHolidayPay!==0 ||missBHolPay!==0 || missBHolBonus!==0 || missSatPay!==0 || missSunPay!==0 ||
	missSicknessPay!==0 ||missPaternityPay!==0 ||missBerPay!==0 ||missCompPay!==0){paymentsRateDiv.innerHTML += '<hr>';}
	if (missBasicPay !== 0) {paymentsRateDiv.innerHTML += hourlyRate.toFixed(4)+'<br>';}
	if (missUnsocPay !== 0) {paymentsRateDiv.innerHTML += unsocial_prem_rate.toFixed(4)+'<br>';}
	if (missUnsocHolPay !== 0) {paymentsRateDiv.innerHTML += unsocial_prem_rate.toFixed(4)+'<br>';}
	if (missUnsocSickPay !== 0) {paymentsRateDiv.innerHTML += (unsocial_prem_rate*part_sick).toFixed(4)+'<br>';}
	if (missUnsocPaterntityPay !== 0) {paymentsRateDiv.innerHTML += (unsocial_prem_rate*part_pater).toFixed(4)+'<br>';}
	if (missUnsocBerPay !== 0) {paymentsRateDiv.innerHTML += (unsocial_prem_rate*part_ber).toFixed(4)+'<br>';}
	if (missUnsocCompPay !== 0) {paymentsRateDiv.innerHTML += (unsocial_prem_rate*part_comp).toFixed(4)+'<br>';}
	if (missOT1Pay !== 0) {paymentsRateDiv.innerHTML += overtime1_rate.toFixed(4)+'<br>';}
	if (missOT2Pay !== 0) {paymentsRateDiv.innerHTML += overtime2_rate.toFixed(4)+'<br>';}
	if (missEnHolidayPay !== 0) {paymentsRateDiv.innerHTML += enhancedHolidayRate.toFixed(4)+'<br>';}
	if (missHolidayPay !== 0) {paymentsRateDiv.innerHTML += hourlyRate.toFixed(4)+'<br>';}
	if (missBHolPay !== 0) {paymentsRateDiv.innerHTML += (hourlyRate*(bHolPayTimes-1)).toFixed(4)+'<br>';}
	if (missBHolBonus !== 0) {paymentsRateDiv.innerHTML += '-<br>';}
	if (missSatPay !== 0) {paymentsRateDiv.innerHTML += saturdayExtraRate.toFixed(4)+'<br>';}
	if (missSunPay !== 0) {paymentsRateDiv.innerHTML += sundayExtraRate.toFixed(4)+'<br>';}
	if (missSicknessPay !== 0) {paymentsRateDiv.innerHTML += (hourlyRate*part_sick).toFixed(4)+'<br>';}
	if (missPaternityPay !== 0) {paymentsRateDiv.innerHTML += (hourlyRate*part_pater).toFixed(4)+'<br>';}
	if (missBerPay !== 0) {paymentsRateDiv.innerHTML += (hourlyRate*part_ber).toFixed(4)+'<br>';}
	if (missCompPay !== 0) {paymentsRateDiv.innerHTML += (hourlyRate*part_comp).toFixed(4)+'<br>';}
	//total gross payments
	totalGrossPaymentsAmountDiv.innerHTML = totalGrossPayments.toFixed(2);
	
	
	// TAX FREE deductions table;
	//tax free deductions
	let taxFreeDeductionsNamesDiv = document.getElementById("taxFreeDeductionsNamesDiv");
	let taxFreeDeductionsAmountDiv = document.getElementById("taxFreeDeductionsAmountDiv");
	
	let taxFreePensionNameDiv = document.getElementById("taxFreePensionNameDiv");
	let taxFreePensionAmountDiv = document.getElementById("taxFreePensionAmountDiv");
	let taxFreeTravelNamesDiv = document.getElementById("taxFreeTravelNamesDiv");
	let taxFreeTravelAmountDiv = document.getElementById("taxFreeTravelAmountDiv");
	let taxFreeDeduction1NamesDiv = document.getElementById("taxFreeDeduction1NamesDiv");
	let taxFreeDeduction1AmountDiv = document.getElementById("taxFreeDeduction1AmountDiv");
	let taxFreeDeduction2NamesDiv = document.getElementById("taxFreeDeduction2NamesDiv");
	let taxFreeDeduction2AmountDiv = document.getElementById("taxFreeDeduction2AmountDiv");
	let taxFreeDeduction3NamesDiv = document.getElementById("taxFreeDeduction3NamesDiv");
	let taxFreeDeduction3AmountDiv = document.getElementById("taxFreeDeduction3AmountDiv");
	
	
	
	
	
	
	let totalTaxablePaymentsAmountText = document.getElementById("totalTaxablePaymentsAmountText");
	
	//names
	if (pensionBeforeTax === 1 && travelDeduction === 0 && taxFreeDeduction1 === 0 && taxFreeDeduction2 === 0 && taxFreeDeduction3 === 0){
		$('#taxFreeDeductionsNamesDiv').removeClass("hidden");
		$('#taxFreeDeductionsAmountDiv').removeClass("hidden");
		
		$('#taxFreePensionAmountDiv').addClass("hidden");
		$('#taxFreePensionNameDiv').addClass("hidden");
		$('#taxFreeTravelAmountDiv').addClass("hidden");
		$('#taxFreeTravelNamesDiv').addClass("hidden");
		
		$('#taxFreeDeduction1AmountDiv').addClass("hidden");
		$('#taxFreeDeduction1NamesDiv').addClass("hidden");
		$('#taxFreeDeduction2AmountDiv').addClass("hidden");
		$('#taxFreeDeduction2NamesDiv').addClass("hidden");
		$('#taxFreeDeduction3AmountDiv').addClass("hidden");
		$('#taxFreeDeduction3NamesDiv').addClass("hidden");
	
	} else if (pensionBeforeTax === 0 && pensionAmount === 0 && travelDeduction === 0 && taxFreeDeduction1 === 0 && taxFreeDeduction2 === 0 && taxFreeDeduction3 === 0){
		$('#taxFreeDeductionsNamesDiv').removeClass("hidden");
		$('#taxFreeDeductionsAmountDiv').removeClass("hidden");
		
		$('#taxFreePensionAmountDiv').addClass("hidden");
		$('#taxFreePensionNameDiv').addClass("hidden");
		$('#taxFreeTravelAmountDiv').addClass("hidden");
		$('#taxFreeTravelNamesDiv').addClass("hidden");
		
		$('#taxFreeDeduction1AmountDiv').addClass("hidden");
		$('#taxFreeDeduction1NamesDiv').addClass("hidden");
		$('#taxFreeDeduction2AmountDiv').addClass("hidden");
		$('#taxFreeDeduction2NamesDiv').addClass("hidden");
		$('#taxFreeDeduction3AmountDiv').addClass("hidden");
		$('#taxFreeDeduction3NamesDiv').addClass("hidden");
	
	} else {
		$('#taxFreeDeductionsNamesDiv').addClass("hidden");
		$('#taxFreeDeductionsAmountDiv').addClass("hidden");
	
		if (pensionAmount>0  && pensionBeforeTax === 0){
			taxFreePensionAmountDiv.innerHTML = pensionAmount.toFixed(2);
			$('#taxFreePensionAmountDiv').removeClass("hidden");
			$('#taxFreePensionNameDiv').removeClass("hidden");
		} else {
			taxFreePensionAmountDiv.innerHTML = '0';
			$('#taxFreePensionAmountDiv').addClass("hidden");
			$('#taxFreePensionNameDiv').addClass("hidden");
		}
		
		if (travelDeduction>0){
			//taxFreeTravelNamesDiv.innerHTML = 'Travel';
			taxFreeTravelAmountDiv.innerHTML = travelDeduction.toFixed(2);
			$('#taxFreeTravelAmountDiv').removeClass("hidden");
			$('#taxFreeTravelNamesDiv').removeClass("hidden");
		} else {
			//taxFreeTravelNamesDiv.innerHTML = '';
			taxFreeTravelAmountDiv.innerHTML = '0';
			$('#taxFreeTravelAmountDiv').addClass("hidden");
			$('#taxFreeTravelNamesDiv').addClass("hidden");
		}
		
		if (taxFreeDeduction1>0){
			taxFreeDeduction1NamesDiv.innerHTML = taxFreeDeduction1Name;
			taxFreeDeduction1AmountDiv.innerHTML = taxFreeDeduction1.toFixed(2);
			$('#taxFreeDeduction1AmountDiv').removeClass("hidden");
			$('#taxFreeDeduction1NamesDiv').removeClass("hidden");
		} else {
			taxFreeDeduction1NamesDiv.innerHTML = '';
			taxFreeDeduction1AmountDiv.innerHTML = '0';
			$('#taxFreeDeduction1AmountDiv').addClass("hidden");
			$('#taxFreeDeduction1NamesDiv').addClass("hidden");
		}
		
		if (taxFreeDeduction2>0){
			taxFreeDeduction2NamesDiv.innerHTML = taxFreeDeduction2Name;
			taxFreeDeduction2AmountDiv.innerHTML = taxFreeDeduction2.toFixed(2);
			$('#taxFreeDeduction2AmountDiv').removeClass("hidden");
			$('#taxFreeDeduction2NamesDiv').removeClass("hidden");
		} else {
			taxFreeDeduction2NamesDiv.innerHTML = '';
			taxFreeDeduction2AmountDiv.innerHTML = '0';
			$('#taxFreeDeduction2AmountDiv').addClass("hidden");
			$('#taxFreeDeduction2NamesDiv').addClass("hidden");
		}
		
		if (taxFreeDeduction3>0){
			taxFreeDeduction3NamesDiv.innerHTML = taxFreeDeduction3Name;
			taxFreeDeduction3AmountDiv.innerHTML = taxFreeDeduction3.toFixed(2);
			$('#taxFreeDeduction3AmountDiv').removeClass("hidden");
			$('#taxFreeDeduction3NamesDiv').removeClass("hidden");
		} else {
			taxFreeDeduction3NamesDiv.innerHTML = '';
			taxFreeDeduction3AmountDiv.innerHTML = '0';
			$('#taxFreeDeduction3AmountDiv').addClass("hidden");
			$('#taxFreeDeduction3NamesDiv').addClass("hidden");
		}
	}	
	//total taxable payments
	totalTaxablePaymentsAmountText.innerHTML = taxablePayments.toFixed(2);
	
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
	
	if (travelDeduction>0)deductionsAmountDiv.innerHTML += '<br>'+ travelDeduction.toFixed(2);
	if (taxFreeDeduction1>0)deductionsAmountDiv.innerHTML += '<br>' + taxFreeDeduction1.toFixed(2);
	if (taxFreeDeduction2>0)deductionsAmountDiv.innerHTML += '<br>' + taxFreeDeduction2.toFixed(2);
	if (taxFreeDeduction3>0)deductionsAmountDiv.innerHTML += '<br>' + taxFreeDeduction3.toFixed(2);
	
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
	if (travelDeduction>0)deductionsNamesDiv.innerHTML += '<br>Travel';
	if (taxFreeDeduction1>0)deductionsNamesDiv.innerHTML += '<br>' + taxFreeDeduction1Name;
	if (taxFreeDeduction2>0)deductionsNamesDiv.innerHTML += '<br>' + taxFreeDeduction2Name;
	if (taxFreeDeduction3>0)deductionsNamesDiv.innerHTML += '<br>' + taxFreeDeduction3Name;
	
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
	
	if (travelDeductionSum>0){yearToDateAmount.innerHTML+= travelDeductionSum.toFixed(2)+' £<br>';}
	if (taxFreeDeduction1Sum>0){yearToDateAmount.innerHTML+= taxFreeDeduction1Sum.toFixed(2)+' £<br>';}
	if (taxFreeDeduction2Sum>0){yearToDateAmount.innerHTML+= taxFreeDeduction2Sum.toFixed(2)+' £<br>';}
	if (taxFreeDeduction3Sum>0){yearToDateAmount.innerHTML+= taxFreeDeduction3Sum.toFixed(2)+' £<br>';}
	if (travelDeductionSum >0 || taxFreeDeduction1Sum>0 || taxFreeDeduction2Sum>0 || taxFreeDeduction3Sum>0) {
		yearToDateAmount.innerHTML+= '<hr>';}
	
	yearToDateAmount.innerHTML+= netPaySum.toFixed(2)+' £<br>';
	yearToDateAmount.innerHTML+= taxablePaySum.toFixed(2)+' £<br>';
	yearToDateAmount.innerHTML+= '<b>'+gross_paySum.toFixed(2)+' £</b>';
	//year to date names
	yearToDateNames.innerHTML = 'TAX<br> National Insurance<hr>' ;
	if (union_deSum>0){yearToDateNames.innerHTML+= 'Union<br>';}
	if (companyLoanSum>0){yearToDateNames.innerHTML+= 'Loan Deduction<br>';}
	if (studentLoanDeductionSum>0){yearToDateNames.innerHTML+= 'Student Loan<br>';}
	if (christmasSavingsPaymentCollected>0){yearToDateNames.innerHTML+= 'Christmas Deductions<br>';}
	if (christmasSavingsPaymentCollected>chris_savSum){yearToDateNames.innerHTML+= 'Christmas Total Ded.<br>';}
	if (summerSavingsPaymentCollected>0){yearToDateNames.innerHTML+= 'Summer Deductions<br>';}
	if (summerSavingsPaymentCollected>summer_savSum){yearToDateNames.innerHTML+= 'Summer Total Ded.<br>';}
	if (other_de>0){yearToDateNames.innerHTML+= 'Add Ded. 1<br>';}
	if (add_deSum2>0){yearToDateNames.innerHTML+= 'Add Ded. 2<br>';}
	if (add_deSum3>0){yearToDateNames.innerHTML+= 'Add Ded. 3<br>';}
	if (companyLoanSum >0 || studentLoanDeductionSum>0 || union_deSum >0 || christmasSavingsPaymentCollected>0||
	other_de>0||summerSavingsPaymentCollected>summer_savSum ||add_deSum2>0||add_deSum3>0){yearToDateNames.innerHTML+= '<hr>';}
	if (pensionSum>0){yearToDateNames.innerHTML+= 'Employee Pension<br>';}
	if (pensionEmpSum>0){yearToDateNames.innerHTML+= 'Employer Pension<br>';}
	if (totalPension>0){yearToDateNames.innerHTML+= 'Total Pension<hr>';}
	
	if (travelDeductionSum>0){yearToDateNames.innerHTML+= 'Travel<br>';}
	if (taxFreeDeduction1Sum>0){yearToDateNames.innerHTML+= 'Tax Free Ded. 1<br>';}
	if (taxFreeDeduction2Sum>0){yearToDateNames.innerHTML+= 'Tax Free Ded. 2<br>';} 
	if (taxFreeDeduction3Sum>0){yearToDateNames.innerHTML+= 'Tax Free Ded. 3<br>';}
	if (travelDeductionSum >0 || taxFreeDeduction1Sum>0 || taxFreeDeduction2Sum>0 || taxFreeDeduction3Sum>0) {
		yearToDateNames.innerHTML+= '<hr>';}
	yearToDateNames.innerHTML+= 'Total Net Pay<br>';
	yearToDateNames.innerHTML+= 'Total Taxable Pay<br>';
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
	if (holidayPaySum > 0 || hol_paySum>0 || enhol_paySum>0 || bhol_paySum>0 || bhol_bonusSum>0 ||uns_holSum>0){yearToDateAmountII.innerHTML+= '<hr>';}
	if (hol_paySum>0){yearToDateAmountII.innerHTML+= hol_paySum.toFixed(2)+' £<br>';}
	if (holidayPaySum>0){yearToDateAmountII.innerHTML+= holidayPaySum.toFixed(2)+' £<br>';}
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
	if (holidayPaySum >0 || hol_paySum>0 || enhol_paySum>0 || bhol_paySum>0 || bhol_bonusSum>0 ||uns_holSum>0){yearToDateAmountIIHid.innerHTML+= '<hr>';}
	if (hol_paySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
	if (holidayPaySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
	
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
	if (holidayPaySum>0|| hol_paySum>0 || enhol_paySum>0 || bhol_paySum>0 || bhol_bonusSum>0 ||uns_holSum>0){yearToDateNamesII.innerHTML+= '<hr>';}
	if (hol_paySum>0){yearToDateNamesII.innerHTML+= 'Holiday Pay<br>';}
	if (holidayPaySum>0){yearToDateNamesII.innerHTML+= 'Holiday Pay 2<br>';}
	
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
	holidayStatisticsNames.innerHTML= 'Holidays Used<br>';
	if (totalHolidaysBooked>0){holidayStatisticsNames.innerHTML+= 'Holidays Booked<br>';}
	if (holidaysNotUsed>0){holidayStatisticsNames.innerHTML+= 'Holidays Available<br>';}
	if (holidaysEarned>0){holidayStatisticsNames.innerHTML+= 'Holidays Earned<br>';}
	if (nextFullHoliday>0 || nextFullHoliday === "Holiday!"){holidayStatisticsNames.innerHTML+= 'Days Till Next Holiday<br>';}
	if (daysSinceLastHoliday>0 || daysSinceLastHoliday === "Holiday!"){holidayStatisticsNames.innerHTML+= 'Days Since Last Holiday<br>';}

	//last 13 weeks totals
	taxSumLast12Weeks =  taxSumLast12Weeks/13;
	NISumLast12Weeks =  NISumLast12Weeks/13;
	union_deSumLast12Weeks =  union_deSumLast12Weeks/13;
	pensionSumLast12WeeksChart =  pensionSumLast12Weeks/13;
	pensionEmpSumLast12Weeks = pensionEmpSumLast12Weeks/13;
	chris_savSumLast12Weeks =  chris_savSumLast12Weeks/13;
	summer_savSumLast12Weeks =  summer_savSumLast12Weeks/13;
	companyLoanSumLast12Weeks =  companyLoanSumLast12Weeks/13;
	studentLoanDeductionSumLast12Weeks =  studentLoanDeductionSumLast12Weeks/13;
	other_deLast12Weeks =  other_deLast12Weeks/13;
	add_deSum2Last12Weeks =  add_deSum2Last12Weeks/13;
	add_deSum3Last12Weeks =  add_deSum3Last12Weeks/13;
	netPaySumLast12Weeks =  netPaySumLast12Weeks/13;
	gross_paySumLast12Weeks = gross_paySumLast12Weeks/13;
	
	taxablePaySumLast12Weeks = taxablePaySumLast12Weeks/13;		
	travelDeductionSumLast12Weeks = travelDeductionSumLast12Weeks/13;
	taxFreeDeduction1SumLast12Weeks = taxFreeDeduction1SumLast12Weeks/13;
	taxFreeDeduction2SumLast12Weeks = taxFreeDeduction2SumLast12Weeks/13;
	taxFreeDeduction3SumLast12Weeks = taxFreeDeduction3SumLast12Weeks/13;
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
	if (pensionSumLast12WeeksChart>0) {yearToDateLast12WeeksAmount.innerHTML+= pensionSumLast12WeeksChart.toFixed(2)+' £<br>';}
	if (pensionEmpSumLast12Weeks >0) {yearToDateLast12WeeksAmount.innerHTML+= pensionEmpSumLast12Weeks.toFixed(2) +' £<br>';}
	var totalPensionLast12Weeks = pensionSumLast12WeeksChart + pensionEmpSumLast12Weeks;
	if (totalPensionLast12Weeks>0){yearToDateLast12WeeksAmount.innerHTML+= totalPensionLast12Weeks.toFixed(2)+' £<hr>';}
	
	if (travelDeductionSumLast12Weeks>0){yearToDateLast12WeeksAmount.innerHTML+= travelDeductionSumLast12Weeks.toFixed(2)+' £<br>';}
	if (taxFreeDeduction1SumLast12Weeks>0){yearToDateLast12WeeksAmount.innerHTML+= taxFreeDeduction1SumLast12Weeks.toFixed(2)+' £<br>';}
	if (taxFreeDeduction2SumLast12Weeks>0){yearToDateLast12WeeksAmount.innerHTML+= taxFreeDeduction2SumLast12Weeks.toFixed(2)+' £<br>';}
	if (taxFreeDeduction3SumLast12Weeks>0){yearToDateLast12WeeksAmount.innerHTML+= taxFreeDeduction3SumLast12Weeks.toFixed(2)+' £<br>';}
	if (travelDeductionSumLast12Weeks >0 || taxFreeDeduction1SumLast12Weeks>0 || taxFreeDeduction2SumLast12Weeks >0 || taxFreeDeduction3SumLast12Weeks>0) {
		yearToDateLast12WeeksAmount.innerHTML+= '<hr>';}
	
	yearToDateLast12WeeksAmount.innerHTML+= netPaySumLast12Weeks.toFixed(2)+' £<br>';
	yearToDateLast12WeeksAmount.innerHTML+= taxablePaySumLast12Weeks.toFixed(2)+' £<br>';
	yearToDateLast12WeeksAmount.innerHTML+= '<b>'+gross_paySumLast12Weeks.toFixed(2)+' £</b>';

	//last 13 weeks names
	yearToDateLast12WeeksNames.innerHTML = 'TAX<br> National Insurance<hr>' ;
	if (union_deSumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Union<br>';}
	if (companyLoanSumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Loan Deduction<br>';}
	if (studentLoanDeductionSumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Student Loan<br>';}
	if (chris_savSumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Christmas Deductions<br>';}
	if (summer_savSumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Summer Deductions<br>';}

	if (other_deLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Add Ded. 1<br>';}
	if (add_deSum2Last12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Add Ded. 2 <br>';}
	if (add_deSum3Last12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Add Ded. 3<br>';}
	if (companyLoanSumLast12Weeks >0 || studentLoanDeductionSumLast12Weeks>0 || union_deSumLast12Weeks >0 ||
	summer_savSumLast12Weeks>0||other_deLast12Weeks>0||summer_savSumLast12Weeks>0 ||add_deSum2Last12Weeks>0||
	add_deSum3Last12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= '<hr>';}
	if (pensionSumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Employee Pension<br>';}
	if (pensionEmpSumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Employer Pension<br>';}
	if (totalPensionLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Pension<hr>';}
	
	if (travelDeductionSumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Travel <br>';}
	if (taxFreeDeduction1SumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Tax Free Ded. 1<br>';}
	if (taxFreeDeduction2SumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Tax Free Ded. 2<br>';}
	if (taxFreeDeduction3SumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Tax Free Ded. 3<br>';}
	if (travelDeductionSumLast12Weeks >0 || taxFreeDeduction1SumLast12Weeks>0 || taxFreeDeduction2SumLast12Weeks >0 || taxFreeDeduction3SumLast12Weeks>0) {
		yearToDateLast12WeeksNames.innerHTML+= '<hr>';}

	yearToDateLast12WeeksNames.innerHTML+= 'Net Pay<br>';
	yearToDateLast12WeeksNames.innerHTML+= 'Taxable Pay<br>';
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
	
	if (travelDeductionSumLast12Weeks>0){yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
	if (taxFreeDeduction1SumLast12Weeks>0){yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
	if (taxFreeDeduction2SumLast12Weeks>0){yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
	if (taxFreeDeduction3SumLast12Weeks>0){yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
	if (travelDeductionSumLast12Weeks >0 || taxFreeDeduction1SumLast12Weeks>0 || taxFreeDeduction2SumLast12Weeks >0 || taxFreeDeduction3SumLast12Weeks>0) {
		yearToDateLast12WeeksAmountHid.innerHTML+= '<hr>';}

	yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';
	yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';
	yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';
	//--------------weeklyAverages div--------------------------//
	//determine current Tax period number: nustatomas kitoje funcijoje, kur generuojamas table caption
	
	let averageTax = taxSum / taxPeriodNumberNew;
	let averageNI = NISum / taxPeriodNumberNew;
	let averagePension = pensionSum/taxPeriodNumberNew;
	let averagePensionEmp = pensionEmpSum/taxPeriodNumberNew;
	let averageGrossPay = gross_paySum / taxPeriodNumberNew;
	let avergetaxablePay = taxablePaySum / taxPeriodNumberNew;
	let averageNetPay = netPaySum / taxPeriodNumberNew;
	let otherDeductionsAverages = averageGrossPay - averageNetPay - averageTax - averageNI;
	let averageBasicHoursPay = basicPaySum / taxPeriodNumberNew;
	let averageBasicHours = basicHoursSum / taxPeriodNumberNew ;
	let averageUnsocialPrem = uns_premSum / taxPeriodNumberNew;
	let averageUnsocialHours = uns_prem_unSum / taxPeriodNumberNew;
	let averageOvertimeHours = (ot1_unitsSum + ot2_unitsSum) / taxPeriodNumberNew; //sudeti overtime 1 ir overtime 2 hours
	let averageOvertimePay = (ot1_paySum + ot2_paySum) / taxPeriodNumberNew;; // sudeti overtime1 ir overtime 2 pay
	
	let averageHolidayHours = (enhol_unitsSum +hol_unitsSum) / taxPeriodNumberNew;
	let averageHolidayPay = (enhol_paySum + hol_paySum + uns_holSum) / taxPeriodNumberNew;
	let averageSicknessHours = sick_unitsSum/taxPeriodNumberNew;
	let averageSicknessPay = (uns_sickSum + sick_paySum) / taxPeriodNumberNew;
	
	let averagePaternityHours = fam_unitsSum/taxPeriodNumberNew;
	let averagePaternityPay = (uns_familySum + fam_paySum) / taxPeriodNumberNew;
	
	let averageBereveamentHours = ber_unitsSum/taxPeriodNumberNew;
	let averageBerevemeantPay = (uns_berSum + ber_paySum) / taxPeriodNumberNew;
	
	let averageCompassionateHours = comp_unitsSum/taxPeriodNumberNew;
	let averageCompassionatePay = (uns_compSum + comp_paySum) / taxPeriodNumberNew;
	let averageOtherPayments = gross_paySum - basicPaySum - uns_premSum - ot1_paySum - ot2_paySum - enhol_paySum - hol_paySum - uns_holSum - uns_sickSum - sick_paySum;
		averageOtherPayments -= uns_familySum - fam_paySum - uns_berSum - ber_paySum - uns_compSum - comp_paySum;
		averageOtherPayments = averageOtherPayments/ taxPeriodNumberNew;
		
	let averageUnpaidBreaksLength = unpaidBreaksLength / taxPeriodNumberNew;

	//weeklyAverages amounts Main
	weeklyAveragesAmount.innerHTML= averageTax.toFixed(2)+' £<br>';
	if (averageNI>0){weeklyAveragesAmount.innerHTML+= averageNI.toFixed(2)+' £<br>';}
	if (averagePension>0){weeklyAveragesAmount.innerHTML+= averagePension.toFixed(2)+' £<br>';}
	if (otherDeductionsAverages>0){weeklyAveragesAmount.innerHTML+= otherDeductionsAverages.toFixed(2)+' £<br>';}
	if (avergetaxablePay >0 || averageGrossPay >0 || averageNetPay>0){weeklyAveragesAmount.innerHTML+= '<hr>';}
	if (avergetaxablePay>0){weeklyAveragesAmount.innerHTML+= avergetaxablePay.toFixed(2)+' £<br>';}
	if (averageGrossPay>0){weeklyAveragesAmount.innerHTML+= averageGrossPay.toFixed(2)+' £<br>';}
	if (averageNetPay>0){weeklyAveragesAmount.innerHTML+= averageNetPay.toFixed(2)+' £<br>';}
	if (averageBasicHoursPay >0 || averageBasicHours >0 || averageUnsocialPrem>0 || averageUnsocialHours>0 || averageOvertimePay>0
	|| averageOvertimeHours> 0){weeklyAveragesAmount.innerHTML+= '<hr>';}
	
	//weeklyAverages names Main
	weeklyAveragesNames.innerHTML= 'TAX<br>';
	if (averageNI>0){weeklyAveragesNames.innerHTML+= 'NI<br>';}
	if (averagePension>0){weeklyAveragesNames.innerHTML+= 'Pension<br>';}
	if (otherDeductionsAverages>0){weeklyAveragesNames.innerHTML+= 'Other Deductions<br>';}
	
	if (avergetaxablePay >0 || averageGrossPay >0 || averageNetPay>0){weeklyAveragesNames.innerHTML+= '<hr>';}
	if (avergetaxablePay>0){weeklyAveragesNames.innerHTML+= 'Taxable Pay<br>';}
	if (averageGrossPay>0){weeklyAveragesNames.innerHTML+= 'Gross Pay<br>';}
	if (averageNetPay>0){weeklyAveragesNames.innerHTML+= 'Net Pay<br>';}
	if (averageBasicHoursPay >0 || averageBasicHours >0 || averageUnsocialPrem>0 || averageUnsocialHours>0 || averageOvertimePay>0
	|| averageOvertimeHours> 0){weeklyAveragesNames.innerHTML+= '<hr>';}
	
	// weekly averages amounts payments
	weeklyAveragesPaymentsAmount.innerHTML = "";
	if (averageBasicHoursPay>0){weeklyAveragesPaymentsAmount.innerHTML+= averageBasicHoursPay.toFixed(2)+' £<br>';}
	if (averageUnsocialPrem>0){weeklyAveragesPaymentsAmount.innerHTML+= averageUnsocialPrem.toFixed(2)+' £<br>';}
	if (averageOvertimePay>0){weeklyAveragesPaymentsAmount.innerHTML+= averageOvertimePay.toFixed(2)+' £<br>';}
	
	if (averageHolidayPay>0){weeklyAveragesPaymentsAmount.innerHTML+= averageHolidayPay.toFixed(2)+' £<br>';}
	if (averageSicknessPay>0){weeklyAveragesPaymentsAmount.innerHTML+= averageSicknessPay.toFixed(2)+' £<br>';}
	if (averagePaternityPay>0){weeklyAveragesPaymentsAmount.innerHTML+= averagePaternityPay.toFixed(2)+' £<br>';}
	if (averageBerevemeantPay>0){weeklyAveragesPaymentsAmount.innerHTML+= averageBerevemeantPay.toFixed(2)+' £<br>';}
	if (averageCompassionatePay>0){weeklyAveragesPaymentsAmount.innerHTML+= averageCompassionatePay.toFixed(2)+' £<br>';}
	if (averageOtherPayments>0){weeklyAveragesPaymentsAmount.innerHTML+= averageOtherPayments.toFixed(2)+' £<br>';}
	
	
	// weekly averages amounts hours
	weeklyAveragesHoursAmount.innerHTML = "";
	if (averageBasicHours>0){weeklyAveragesHoursAmount.innerHTML+= averageBasicHours.toFixed(2)+' h<br>';}
	if (averageUnsocialHours>0){weeklyAveragesHoursAmount.innerHTML+= averageUnsocialHours.toFixed(2)+' h<br>';}
	if (averageOvertimeHours>0){weeklyAveragesHoursAmount.innerHTML+= averageOvertimeHours.toFixed(2)+' h<br>';}
	
	if (averageHolidayHours>0){weeklyAveragesHoursAmount.innerHTML+= averageHolidayHours.toFixed(2)+' h<br>';}
	if (averageSicknessHours>0){weeklyAveragesHoursAmount.innerHTML+= averageSicknessHours.toFixed(2)+' h<br>';}
	if (averagePaternityHours>0){weeklyAveragesHoursAmount.innerHTML+= averagePaternityHours.toFixed(2)+' h<br>';}
	if (averageBereveamentHours>0){weeklyAveragesHoursAmount.innerHTML+= averageBereveamentHours.toFixed(2)+' h<br>';}
	if (averageCompassionateHours>0){weeklyAveragesHoursAmount.innerHTML+= averageCompassionateHours.toFixed(2)+' h<br>';}
	
	if (averageUnpaidBreaksLength>0){weeklyAveragesHoursAmount.innerHTML+= averageUnpaidBreaksLength.toFixed(2)+' h<br>';}
	
	
	
	//weekly averages payments names payments
	weeklyAveragesPaymentsNames.innerHTML = "";
	if (averageBasicHoursPay>0){weeklyAveragesPaymentsNames.innerHTML+= 'Basic Pay<br>';}
	if (averageUnsocialPrem>0){weeklyAveragesPaymentsNames.innerHTML+= 'Unsocial Basic Pay<br>';}
	if (averageOvertimePay>0){weeklyAveragesPaymentsNames.innerHTML+= 'Overtime Pay<br>';}
	
	if (averageHolidayPay>0){weeklyAveragesPaymentsNames.innerHTML+= ' Holiday Pay<br>';}
	if (averageSicknessPay>0){weeklyAveragesPaymentsNames.innerHTML+= 'Sickness Pay<br>';}
	
	if (averagePaternityPay>0){weeklyAveragesPaymentsNames.innerHTML+= 'Paternity Pay<br>';}
	if (averageBerevemeantPay>0){weeklyAveragesPaymentsNames.innerHTML+= 'Bereavement Pay<br>';}
	if (averageCompassionatePay>0){weeklyAveragesPaymentsNames.innerHTML+= 'Compassionate Pay<br>';}
	if (averageOtherPayments>0){weeklyAveragesPaymentsNames.innerHTML+= 'Other Payments<br>';}
	
	//weekly averages payments names hours
	weeklyAveragesHoursNames.innerHTML = "";
	if (averageBasicHours>0){weeklyAveragesHoursNames.innerHTML+= 'Basic Hours<br>';}
	if (averageUnsocialHours>0){weeklyAveragesHoursNames.innerHTML+= 'Unsocial Basic Hours<br>';}
	if (averageOvertimeHours>0){weeklyAveragesHoursNames.innerHTML+= 'Overtime Hours<br>';}
	
	if (averageHolidayHours>0){weeklyAveragesHoursNames.innerHTML+= 'Holiday Hours<br>';}
	if (averageSicknessHours>0){weeklyAveragesHoursNames.innerHTML+= 'Sickness Hours<br>';}
	
	if (averagePaternityHours>0){weeklyAveragesHoursNames.innerHTML+= 'Paternity Hours<br>';}
	if (averageBereveamentHours>0){weeklyAveragesHoursNames.innerHTML+= 'Bereavement Hours<br>';}
	if (averageCompassionateHours>0){weeklyAveragesHoursNames.innerHTML+= 'Compassionate Hours<br>';}
	if (averageUnpaidBreaksLength>0){weeklyAveragesHoursNames.innerHTML+= 'Unpaid Breaks<br>';}
	
	
	
	//weeklyAverages amounts hidden
	/*weeklyAveragesAmountHid.innerHTML= 'Premium<br>';
	if (averageNI>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (averagePension>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (otherDeductionsAverages>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	
	if (avergetaxablePay >0 || averageGrossPay >0 || averageNetPay>0){weeklyAveragesAmountHid.innerHTML+= '<hr>';}
	if (avergetaxablePay>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (averageGrossPay>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (averageNetPay>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (averageBasicHoursPay >0 || averageBasicHours >0 || averageUnsocialPrem>0 || averageUnsocialHours>0 || averageOvertimePay>0
	|| averageOvertimeHours> 0){weeklyAveragesAmountHid.innerHTML+= '<hr>';}
	if (averageBasicHoursPay>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (averageBasicHours>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (averageUnsocialPrem>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (averageUnsocialHours>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (averageOvertimePay>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (averageOvertimeHours>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	
	if (averageHolidayHours >0 || averageHolidayPay >0 || averageSicknessHours>0 || averageSicknessPay>0){weeklyAveragesAmountHid.innerHTML+= '<hr>';}
	if (averageHolidayPay>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (averageHolidayHours>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (averageSicknessPay>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (averageSicknessHours>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	
	
	if (averagePaternityHours >0 || averagePaternityPay >0 || averageBereveamentHours>0 || averageBerevemeantPay>0 ||
	averageCompassionateHours >0 || averageCompassionatePay>0){weeklyAveragesAmountHid.innerHTML+= '<hr>';}
	if (averagePaternityPay>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (averagePaternityHours>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (averageBerevemeantPay>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (averageBereveamentHours>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (averageCompassionatePay>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (averageCompassionateHours>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
	if (averageOtherPayments >0){weeklyAveragesAmountHid.innerHTML+= '<hr>';}
	if (averageOtherPayments>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}*/
	
	let estimatedTax = averageTax * taxPeriodQuantityFull;
	let estimatedNI = averageNI * taxPeriodQuantityFull;
	let estimatedOtherDeductions = Number(otherDeductionsAverages)  * Number(taxPeriodQuantityFull);
		estimatedOtherDeductions = Number(estimatedOtherDeductions);
	let estimatedPension = averagePension  * taxPeriodQuantityFull;
	let estimatedPensionEmp = averagePensionEmp * taxPeriodQuantityFull;
	let estimatedTotalPension = estimatedPension +estimatedPensionEmp;
	
	let estimatedGrossPay = averageGrossPay  * taxPeriodQuantityFull;
	let estimatedTaxablePay = avergetaxablePay  * taxPeriodQuantityFull;
	let estimatedNetPay = averageNetPay  * taxPeriodQuantityFull;
		
	//yearly estimates amount
	yearlyEstimatesAmount.innerHTML= estimatedTax.toFixed(2)+' £<br>';
	if (estimatedNI>0){yearlyEstimatesAmount.innerHTML+= estimatedNI.toFixed(2)+' £<br>';}
	if (estimatedOtherDeductions>0){yearlyEstimatesAmount.innerHTML+= estimatedOtherDeductions.toFixed(2)+' £<br>';}
	
	if (estimatedPension >0 || estimatedPensionEmp >0 || estimatedTotalPension>0){yearlyEstimatesAmount.innerHTML+= '<hr>';}
	if (estimatedPension>0){yearlyEstimatesAmount.innerHTML+= estimatedPension.toFixed(2)+' £<br>';}
	if (estimatedPensionEmp>0){yearlyEstimatesAmount.innerHTML+= estimatedPensionEmp.toFixed(2)+' £<br>';}
	if (estimatedTotalPension>0){yearlyEstimatesAmount.innerHTML+= estimatedTotalPension.toFixed(2)+' £<br>';}
	
	if (estimatedGrossPay >0 || estimatedTaxablePay >0 || estimatedNetPay>0){yearlyEstimatesAmount.innerHTML+= '<hr>';}
	if (estimatedNetPay>0){yearlyEstimatesAmount.innerHTML+= estimatedNetPay.toFixed(2)+' £<br>';}
	if (estimatedTaxablePay>0){yearlyEstimatesAmount.innerHTML+= estimatedTaxablePay.toFixed(2)+' £<br>';}
	if (estimatedGrossPay>0){yearlyEstimatesAmount.innerHTML+= estimatedGrossPay.toFixed(2)+' £<br>';}
	
	
	//yearly estimates Names
	yearlyEstimatesNames.innerHTML= 'TAX<br>';;
	if (estimatedNI>0){yearlyEstimatesNames.innerHTML+= 'National Insurance<br>';}
	if (estimatedOtherDeductions>0){yearlyEstimatesNames.innerHTML+= 'Other Deductions<br>';}
	
	if (estimatedPension >0 || estimatedPensionEmp >0 || estimatedTotalPension>0){yearlyEstimatesNames.innerHTML+= '<hr>';}
	if (estimatedPension>0){yearlyEstimatesNames.innerHTML+= 'Employee Pension<br>';}
	if (estimatedPensionEmp>0){yearlyEstimatesNames.innerHTML+= 'Employer Pension<br>';}
	if (estimatedTotalPension>0){yearlyEstimatesNames.innerHTML+= 'Total Pension<br>';}
	
	if (estimatedGrossPay >0 || estimatedTaxablePay >0 || estimatedNetPay>0){yearlyEstimatesNames.innerHTML+= '<hr>';}
	if (estimatedNetPay>0){yearlyEstimatesNames.innerHTML+= 'Net Pay<br>';}
	if (estimatedTaxablePay>0){yearlyEstimatesNames.innerHTML+= 'Taxable Pay<br>';}
	if (estimatedGrossPay>0){yearlyEstimatesNames.innerHTML+= 'Gross Pay<br>';}
	

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
			document.getElementById("payChristmasSavingsCheck"+taxPeriodNumber).setAttribute("checked", "checked");
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
			document.getElementById("paySummerSavingsCheck"+taxPeriodNumber).setAttribute("checked", "checked");
			}
		else if (paySummerSavingsCheckRes == "false")
			{
			document.getElementById("paySummerSavingsCheck"+taxPeriodNumber).removeAttribute("checked");
			}
		else{
			alert('Something wrong with Summer payout checkbox!');
			}
	
	///// gooooooooooogle char4ts////////////////////////////
	
			
		//if peniosn is not a salary sacrifise, show it in deductions chart
				if (pensionBeforeTax ===0)
				{
					var pensionAmountChart = pensionAmount;
					var pensionSumChart = pensionSum;
					var pensionSumLast12WeeksChart = pensionSumLast12Weeks;
				}
				{
					var pensionAmountChart = 0;
					var pensionSumChart = 0;
					var pensionSumLast12WeeksChart = 0;
				}
				//jei deductions udeta tik varnele yra isaugojama minus 1 verte db, ir ja reikia panaikinti
				if (studentLoanDeduction === -1) {studentLoanDeduction = 0;}
	
	google.charts.load('current', {'packages':['corechart']});

			//holidays chart
			resizeChartValues.totalHolidaysUsed = totalHolidaysUsed; 
			resizeChartValues.totalHolidaysBooked = totalHolidaysBooked; 
			resizeChartValues.holidaysNotUsed = holidaysNotUsed; 
			resizeChartValues.holidaysPieChartVis = holidaysPieChartVis;
			
			if (holidaysPieChartVis === 1){
				if(totalHolidaysUsed>0||totalHolidaysBooked>0||holidaysNotUsed>0){
					google.charts.setOnLoadCallback(drawChartHolidays);
					function drawChartHolidays() {

					var data = google.visualization.arrayToDataTable([
						['Type', 'Days'],
						['Used', totalHolidaysUsed],
						['Booked', totalHolidaysBooked],
						['Available', holidaysNotUsed],
						]);

						var options = {
						backgroundColor: insideBoxColor,
						title: 'Holidays Pie Chart',
						slices: {  0: {offset: 0.1},
									1: {offset: 0.1},
									2: {offset: 0.1},
							},
						colors: [holidayColor, holidaysBookedColor, holidaysAvailableColor],
						is3D: true,
						};

						var chart = new google.visualization.PieChart(document.getElementById('holidayStatisticsPieChart'));

						chart.draw(data, options);
					}
				}else{
					document.getElementById('holidayStatisticsPieChart').innerHTML = "<br><br>No Data Provided<br>For Chart.";
				}
			}
			
			//hours chart
			//days chart
			resizeChartValues.yearToDateHoursPieChartVis = yearToDateHoursPieChartVis; 
			resizeChartValues.basicHoursSum = basicHoursSum;  
			resizeChartValues.ot1_unitsSum = ot1_unitsSum;
			resizeChartValues.ot2_unitsSum = ot2_unitsSum; 
			resizeChartValues.enhol_unitsSum = enhol_unitsSum; 
			resizeChartValues.hol_unitsSum = hol_unitsSum; 
			resizeChartValues.sick_unitsSum = sick_unitsSum;
			resizeChartValues.fam_unitsSum = fam_unitsSum;
			resizeChartValues.ber_unitsSum = ber_unitsSum;
			resizeChartValues.comp_unitsSum = comp_unitsSum; 
			resizeChartValues.unpaidBreaksLength = unpaidBreaksLength;
			
			if (yearToDateHoursPieChartVis === 1){
				if(basicHoursSum>0||ot1_unitsSum>0||ot2_unitsSum>0||enhol_unitsSum>0||hol_unitsSum>0||sick_unitsSum>0||fam_unitsSum>0||
				ber_unitsSum>0||comp_unitsSum>0){
					google.charts.setOnLoadCallback(drawChartDays);
					function drawChartDays() {

					var data = google.visualization.arrayToDataTable([
						['Type', 'Hours'],
						['Unpaid Breaks', unpaidBreaksLength],
						['Basic Hours', basicHoursSum],
						['Overtime 1', ot1_unitsSum],
						['Overtime 2', ot2_unitsSum],
						['Holiday', hol_unitsSum],
						['En. Holiday', enhol_unitsSum],
						['Sickness', sick_unitsSum],
						['Paternity', fam_unitsSum],
						['Bereavement', ber_unitsSum],
						['Compassionate', comp_unitsSum],
						]);

						var options = {
						backgroundColor: insideBoxColor,
						title: 'Hours Chart',
						slices: {  1: {offset: 0.2},
							},
						colors: [unpaidBreaksColor, dayInColor, overtime1Color, overtime2Color, holidayColor, holidayColor, sicknessColor, familyLeaveColor, bereavementColor, compassionateColor],
						is3D: true,
						};

						var chart = new google.visualization.PieChart(document.getElementById('yearToDateHoursPieChart'));

						chart.draw(data, options);
					}
				}
				else{
					document.getElementById('yearToDateHoursPieChart').innerHTML = "<br><br>No Data Provided<br>For Chart.";
				}
			}	
			
			
			
			
			//days chart
			resizeChartValues.daysPieChartVis = daysPieChartVis; 
			resizeChartValues.daysNotSelected = daysNotSelected; 
			resizeChartValues.daysIn = daysIn; 
			resizeChartValues.daysOff = daysOff;
			resizeChartValues.daysHoliday = daysHoliday; 
			resizeChartValues.daysHalfInHalfHol = daysHalfInHalfHol; 
			resizeChartValues.daysUnpaidHoliday = daysUnpaidHoliday; 
			resizeChartValues.daysInSick = daysInSick;
			resizeChartValues.daysSickness = daysSickness; 
			resizeChartValues.daysAbsence = daysAbsence; 
			resizeChartValues.daysParental = daysParental; 
			resizeChartValues.daysBereavement = daysBereavement;
			resizeChartValues.daysCompassionate = daysCompassionate;
			
			if (daysPieChartVis === 1){
				if(daysNotSelected>0||daysIn>0||daysOff>0||daysHoliday>0||daysHalfInHalfHol>0||daysUnpaidHoliday>0||daysInSick>0||
				daysSickness>0||daysAbsence>0||daysParental>0||daysBereavement>0||daysCompassionate>0){
					google.charts.setOnLoadCallback(drawChartDays);
					function drawChartDays() {

					var data = google.visualization.arrayToDataTable([
						['Type', 'Days'],
						['Not Defined', daysNotSelected],
						['Days In', daysIn],
						['Days Off', daysOff],
						['Holidays', daysHoliday],
						['Half In/Hals Off', daysHalfInHalfHol],
						['Unpaid Holiday', daysUnpaidHoliday],
						['Day In/Sick', daysInSick],
						['Sickness', daysSickness],
						['Absence', daysAbsence],
						['Paternal', daysParental],
						['Bereavement', daysBereavement],
						['Compassionate', daysCompassionate],
						]);

						var options = {
						backgroundColor: insideBoxColor,
						title: 'Days Statistics',
						slices: {  1: {offset: 0.2},
							},
						colors: [notSelectedColor, dayInColor, dayOffColor, holidayColor, halfInHalfOffColor, unpaidHolColor, dayInSickColor, sicknessColor, absenceColor, familyLeaveColor, bereavementColor, compassionateColor],
						is3D: true,
						};

						var chart = new google.visualization.PieChart(document.getElementById('dayStatisticsPieChart'));

						chart.draw(data, options);
					}
				}
				else{
					document.getElementById('dayStatisticsPieChart').innerHTML = "<br><br>No Data Provided<br>For Chart.";
				}
			}	
			
			//payments chart
			//resizeChartValues.taxReturn = taxReturn; 
			
			resizeChartValues.paymentsPieChartVis = paymentsPieChartVis; 
			
			if (paymentsPieChartVis === 1){
				if (totalGrossPayments >0) {
				
					//var deletechart = document.getElementById('paymentsPieChart').innerHTML = " ";
					//add missing payments to regural payments
					basicHoursPay += missBasicPay;
					unsocial_prem += missUnsocPay;
					unsocial_prem_hol += missUnsocHolPay;
					unsocial_prem_sick += missUnsocSickPay;
					unsocial_prem_family += missUnsocPaterntityPay;
					unsocial_prem_bereavement += missUnsocBerPay;
					unsocial_prem_compassionate += missUnsocCompPay;
					OT1Pay += missOT1Pay;
					OT2Pay += missOT2Pay;
					enhancedHolidayPay += missEnHolidayPay;
					holidayPay += missHolidayPay;
					saturdayExtraPay += missSatPay;
					sundayExtraPay += missSunPay;
					sicknessPay += missSicknessPay;
					familyPay += missPaternityPay;
					bereavementPay += missBerPay;
					compassionatePay += missCompPay;
					bankHolidayHoursPay += missBHolPay;
					bankHolidayClockInBonus += missBHolBonus;		
					
					//remove negative values
					if (basicHoursPay <0){basicHoursPay = 0;}
					if (unsocial_prem <0){unsocial_prem = 0;}
					if (unsocial_prem_hol <0){unsocial_prem_hol = 0;}
					if (unsocial_prem_sick <0){unsocial_prem_sick = 0;}
					if (unsocial_prem_family <0){unsocial_prem_family = 0;}
					if (unsocial_prem_bereavement <0){unsocial_prem_bereavement = 0;}
					if (unsocial_prem_compassionate <0){unsocial_prem_compassionate = 0;}
					if (OT1Pay <0){OT1Pay = 0;}
					if (OT2Pay <0){OT2Pay = 0;}
					if (enhancedHolidayPay <0){enhancedHolidayPay = 0;}
					if (holidayPay <0){holidayPay = 0;}
					if (saturdayExtraPay <0){saturdayExtraPay = 0;}
					if (sundayExtraPay <0){sundayExtraPay = 0;}
					if (sicknessPay <0){sicknessPay = 0;}
					if (familyPay <0){familyPay = 0;}
					if (bereavementPay <0){bereavementPay = 0;}
					if (compassionatePay <0){compassionatePay = 0;}
					if (bankHolidayHoursPay <0){bankHolidayHoursPay = 0;}
					if (bankHolidayClockInBonus <0){bankHolidayClockInBonus = 0;}
					
					if (holidayPayment <0){holidayPayment = 0;}
					if (payBack <0){payBack = 0;}
					if (pieceWork <0){pieceWork = 0;}
					if (SSP <0){SSP = 0;}
					if (SPP <0){SPP = 0;}
					if (SAP <0){SAP = 0;}
					if (salary <0){salary = 0;}
					if (bonus <0){bonus = 0;}
					if (commissions <0){commissions = 0;}
					
					let taxReturn = 0;
					if (additionalPayment < 0){additionalPayment = 0;}
					if (additionalPayment2 < 0){additionalPayment2 = 0;}
					if (additionalPayment3 < 0){additionalPayment3 = 0;}
					if (taxAmount < 0 ) {taxReturn = -taxAmount};
					
					resizeChartValues.additionalPayment = additionalPayment; 
					resizeChartValues.additionalPayment2 = additionalPayment2; 
					resizeChartValues.additionalPayment3 = additionalPayment3;
					resizeChartValues.taxAmount = taxAmount; 
					resizeChartValues.basicHoursPay = basicHoursPay; 
					resizeChartValues.unsocial_prem = unsocial_prem; 
					resizeChartValues.unsocial_prem_hol = unsocial_prem_hol;
					resizeChartValues.unsocial_prem_sick = unsocial_prem_sick; 
					resizeChartValues.unsocial_prem_family = unsocial_prem_family; 
					resizeChartValues.unsocial_prem_bereavement = unsocial_prem_bereavement; 
					resizeChartValues.unsocial_prem_compassionate = unsocial_prem_compassionate;
					resizeChartValues.OT1Pay = OT1Pay;
					resizeChartValues.OT2Pay = OT2Pay; 
					resizeChartValues.enhancedHolidayPay = enhancedHolidayPay; 
					resizeChartValues.holidayPay = holidayPay; 
					resizeChartValues.holidayPayment = holidayPayment;
					resizeChartValues.saturdayExtraPay = saturdayExtraPay; 
					resizeChartValues.sundayExtraPay = sundayExtraPay; 
					resizeChartValues.sicknessPay = sicknessPay; 
					resizeChartValues.familyPay = familyPay;
					resizeChartValues.bereavementPay = bereavementPay; 
					resizeChartValues.compassionatePay = compassionatePay; 
					resizeChartValues.bankHolidayHoursPay = bankHolidayHoursPay; 
					resizeChartValues.bankHolidayClockInBonus = bankHolidayClockInBonus;
					resizeChartValues.payBack = payBack;
					resizeChartValues.pieceWork = pieceWork; 
					resizeChartValues.SSP = SSP; 
					resizeChartValues.SPP = SPP; 
					resizeChartValues.christmasSavingsPayment = christmasSavingsPayment;
					resizeChartValues.summerSavingsPayment = summerSavingsPayment; 
					resizeChartValues.SAP = SAP; 
					resizeChartValues.salary = salary; 
					resizeChartValues.bonus = bonus;
					resizeChartValues.commissions = commissions; 
					resizeChartValues.totalGrossPayments = totalGrossPayments;
					
					
					if (basicHoursPay >0||unsocial_prem>0||unsocial_prem_hol>0||unsocial_prem_sick>0||unsocial_prem_family>0||
					unsocial_prem_bereavement>0||unsocial_prem_compassionate>0||OT1Pay>0||OT2Pay>0||enhancedHolidayPay>0||holidayPay>0||holidayPayment>0||
					saturdayExtraPay>0||sundayExtraPay>0||sicknessPay>0||familyPay>0||bereavementPay>0||compassionatePay>0||bankHolidayHoursPay>0||
					bankHolidayClockInBonus>0||payBack>0||pieceWork>0||SSP>0||SPP>0||additionalPayment>0||additionalPayment2>0||additionalPayment3>0||
					christmasSavingsPayment>0||summerSavingsPayment>0||SAP>0||salary>0||bonus>0||commissions>0)
					{
						google.charts.setOnLoadCallback(drawChartPayments);
						function drawChartPayments() {

						var data = google.visualization.arrayToDataTable([
							['Type', 'Payments'],
							['Basic Pay', basicHoursPay],
							['Uns. Premium', unsocial_prem],
							['Uns Prem. Holidays', unsocial_prem_hol],
							['Uns Prem. Sickness', unsocial_prem_sick],
							['Uns Prem. Paternity', unsocial_prem_family],
							['Uns Prem. Bereav.', unsocial_prem_bereavement],
							['Uns Prem. Compass.', unsocial_prem_compassionate],
							['Overtime 1 Pay', OT1Pay],
							['Overtime 2 Pay', OT2Pay],
							['Enhanced Holiday Pay', enhancedHolidayPay],
							['Holiday Pay', holidayPay],
							['Holiday Pay', holidayPayment],
							['Saturday Extra Pay', saturdayExtraPay],
							['Sunday Extra Pay', sundayExtraPay],
							['Sickness Pay', sicknessPay],
							['Paternity Pay', familyPay],
							['Bereavement Pay', bereavementPay],
							['Compassionate Pay', compassionatePay],
							['Bank Holiday Pay', bankHolidayHoursPay],
							['Bank Holiday Bonus', bankHolidayClockInBonus],
							['Back Pay', payBack],
							['Piece Work', pieceWork],
							['SSP', SSP],
							['SPP', SPP],
							['Add. Payment 1', additionalPayment],
							['Add. Payment 2', additionalPayment2],
							['Add. Payment 3', additionalPayment3],
							['Christmas Sav. Payment', christmasSavingsPayment],
							['Summer Sav. Payment', summerSavingsPayment],
							['SAP', SAP],
							['Salary', salary],
							['Bonus', bonus],
							['Commissions', commissions],
							['Tax Return', taxReturn],
							]);

							var options = {
							backgroundColor: insideBoxColor,
							colors: paymentsColorArray,
							slices: {  0: {offset: 0.2},
									10: {offset: 0.1},
									9: {offset: 0.1},
									13: {offset: 0.1},
									14: {offset: 0.1},
									15: {offset: 0.1},
									16: {offset: 0.1},
								},
							title: 'Payments Pie Chart',
							is3D: true,
							};

							var chart = new google.visualization.PieChart(document.getElementById('paymentsPieChart'));

							chart.draw(data, options);
						}
					}
					else{
						 document.getElementById("paymentsPieChart").innerHTML = "<br><br>No Data Provided<br>For Chart.";
					}
				}else{
						 document.getElementById("paymentsPieChart").innerHTML = "<br><br>No Chart For<br>Negative Values.";
					}	
			}
			
			//deductions chart
			
			
			if (deductionsPieChartVis === 1){
				resizeChartValues.deductionsPieChartVis = deductionsPieChartVis; 
				resizeChartValues.NIAmount = NIAmount; 
				resizeChartValues.unionDeduction = unionDeduction;
				resizeChartValues.taxAmount = taxAmount; 
				resizeChartValues.pensionAmountChart = pensionAmountChart; 
				resizeChartValues.companyLoan = companyLoan; 
				resizeChartValues.studentLoanDeduction = studentLoanDeduction;
				resizeChartValues.otherDeduction = otherDeduction; 
				resizeChartValues.otherDeduction2 = otherDeduction2; 
				resizeChartValues.otherDeduction3 = otherDeduction3; 
				resizeChartValues.taxFreeDeduction1 = taxFreeDeduction1;
				resizeChartValues.travelDeduction = travelDeduction;
				resizeChartValues.taxFreeDeduction2 = taxFreeDeduction2; 
				resizeChartValues.taxFreeDeduction1 = taxFreeDeduction1;
				resizeChartValues.taxFreeDeduction3 = taxFreeDeduction3;
				resizeChartValues.netPay = netPay;
				resizeChartValues.otherDeductionName = otherDeductionName; 
				resizeChartValues.otherDeduction2Name = otherDeduction2Name;
				resizeChartValues.otherDeduction3Name = otherDeduction3Name;
				resizeChartValues.taxFreeDeduction1Name = taxFreeDeduction1Name; 
				resizeChartValues.taxFreeDeduction2Name = taxFreeDeduction2Name;
				resizeChartValues.taxFreeDeduction3Name = taxFreeDeduction3Name;
				//no negative values for chart
				if (taxAmount < 0 ){taxAmount = 0;}
				
				if (christmasSavingsDeduction<0){christmasSavingsDeduction = 0;}
				if (summerSavingsDeduction<0){summerSavingsDeduction = 0;}
				if (taxAmount>0||NIAmount>0||unionDeduction>0||pensionAmountChart>0||christmasSavingsDeduction>0||summerSavingsDeduction>0||
				companyLoan>0||studentLoanDeduction>0||otherDeduction>0||otherDeduction2>0||otherDeduction3>0||netPay>0 || travelDeduction>0 ||
				taxFreeDeduction1>0 || taxFreeDeduction2 >0 || taxFreeDeduction3 >0){
					google.charts.setOnLoadCallback(drawChartDeductions);
					function drawChartDeductions() {
					var data = google.visualization.arrayToDataTable([
						['Type', 'Chart'],
						['Tax', taxAmount],
						['NI', NIAmount],
						['Union', unionDeduction],
						['Pension', pensionAmountChart],
						['Christmas savings', christmasSavingsDeduction],
						['Summer savings.', summerSavingsDeduction],
						['Company Loan', companyLoan],
						['Student Loan', studentLoanDeduction],
						[otherDeductionName, otherDeduction],
						[otherDeduction2Name, otherDeduction2],
						[otherDeduction3Name, otherDeduction3],
						['Travel', travelDeductionSum ],
						[taxFreeDeduction1Name, taxFreeDeduction1],
						[taxFreeDeduction2Name, taxFreeDeduction2],
						[taxFreeDeduction3Name, taxFreeDeduction3],
						['Net Pay', netPay],
						]);

						var options = {
						backgroundColor: insideBoxColor,
						colors: deductionsColorArray,
						slices: {  15: {offset: 0.2},
							},
						title: 'Deductions Pie Chart',
						is3D: true,
						};

						var chart = new google.visualization.PieChart(document.getElementById('deductionsPieChart'));

						chart.draw(data, options);
					}
				}
				else{
					document.getElementById('deductionsPieChart').innerHTML = "<br><br>No Data Provided<br>For Chart.";
				}
			}

			//Year to date chart
			
			
			if (yearToDatePieChartVis === 1){
				resizeChartValues.yearToDatePieChartVis = yearToDatePieChartVis; 
				resizeChartValues.taxSum = taxSum; 
				resizeChartValues.NISum = NISum;
				resizeChartValues.union_deSum = union_deSum; 
				resizeChartValues.pensionSumChart = pensionSumChart; 
				resizeChartValues.chris_savSum = chris_savSum; 
				resizeChartValues.summer_savSum = summer_savSum;
				resizeChartValues.companyLoanSum = companyLoanSum; 
				resizeChartValues.studentLoanDeductionSum = studentLoanDeductionSum; 
				resizeChartValues.other_de = other_de; 
				resizeChartValues.add_deSum2 = add_deSum2;
				resizeChartValues.add_deSum3 = add_deSum3;
				resizeChartValues.netPaySum = netPaySum; 
				resizeChartValues.travelDeductionSum = travelDeductionSum;
				resizeChartValues.taxFreeDeduction1Sum = taxFreeDeduction1Sum;
				resizeChartValues.taxFreeDeduction2Sum = taxFreeDeduction2Sum;
				resizeChartValues.taxFreeDeduction3Sum = taxFreeDeduction3Sum; 
				
				
				if(taxSum>0||NISum>0||union_deSum>0||pensionSumChart>0||chris_savSum>0||summer_savSum>0||companyLoanSum>0||
				studentLoanDeductionSum>0||other_de>0||add_deSum2>0||add_deSum3>0||netPaySum>0 || travelDeductionSum>0 ||
				taxFreeDeduction1Sum>0 || taxFreeDeduction2Sum >0 || taxFreeDeduction3Sum >0){
					google.charts.setOnLoadCallback(drawChartYearToDate);
					function drawChartYearToDate() {
					var data = google.visualization.arrayToDataTable([
						['Type', 'Chart'],
						['Tax', taxSum ],
						['NI', NISum ],
						['Union', union_deSum],
						['Pension', pensionSumChart],
						['Christmas savings', chris_savSum ],
						['Summeer savings.', summer_savSum ],
						['Company Loan', companyLoanSum ],
						['Student Loan', studentLoanDeductionSum],
						['Add. Deduction', other_de ],
						['Add. Deduction 2', add_deSum2 ],
						['Add. Deduction 3', add_deSum3 ],
						['Travel', travelDeductionSum ],
						['Tax Free Ded. 1', taxFreeDeduction1Sum ],
						['Tax Free Ded. 2', taxFreeDeduction2Sum ],
						['Tax Free Ded. 3', taxFreeDeduction3Sum ],
						['Net Pay', netPaySum ],
						]);

						var options = {
						backgroundColor: insideBoxColor,
						colors: deductionsColorArray,
						slices: {  15: {offset: 0.2},
							},
						title: 'Year To Date Pie Chart',
						is3D: true,
						};

						var chart = new google.visualization.PieChart(document.getElementById('yearToDatePieChart'));

						chart.draw(data, options);
					}
				}
				else{
					document.getElementById('yearToDatePieChart').innerHTML = "<br><br>No Data Provided<br>For Chart.";
				}
			}


			//Year to date Percentage chart
						
			if (payStructurePieChartVis === 1){
				resizeChartValues.payStructurePieChartVis = payStructurePieChartVis; 
				resizeChartValues.basicPaymentsPercentage = basicPaymentsPercentage; 
				resizeChartValues.holidaysPercentage = holidaysPercentage;
				resizeChartValues.sicknessPercentage = sicknessPercentage; 
				resizeChartValues.overtimePercentage = overtimePercentage; 
				resizeChartValues.bankHolidayPercentge = bankHolidayPercentge; 
				resizeChartValues.parentalPercentage = parentalPercentage;
				resizeChartValues.otherPercentage = otherPercentage;
				
				if (basicPaymentsPercentage>0||holidaysPercentage>0||sicknessPercentage>0||overtimePercentage>0||bankHolidayPercentge>0||
				parentalPercentage>0||otherPercentage>0){
					google.charts.setOnLoadCallback(drawChartYearToDatePercentages);
					function drawChartYearToDatePercentages() {
					var data = google.visualization.arrayToDataTable([
						['Name', 'Value'],
						['Basic Payments', basicPaymentsPercentage],
						['Holiday Payments', holidaysPercentage],
						['Sick Payments', sicknessPercentage],
						['Overtime Payments', overtimePercentage],
						['Bank Holiday Payments', bankHolidayPercentge],
						['Paternity Payments', parentalPercentage],
						['Other Payments', otherPercentage],
						]);

						var options = {
						slices: {  0: {offset: 0.2},
							},
						backgroundColor: insideBoxColor,
						title: 'Year To Date Percentage Pie Chart',
						is3D: true,
						colors: ['#e6e600', '#d5ff80', '#ff9999', '#cccc00', '#88cc00', '#ffcc99', '#c299ff'],
						};

						var chart = new google.visualization.PieChart(document.getElementById('yearToDatePercentagePieChart'));

						chart.draw(data, options);
					}
				}
				else
				{
					document.getElementById('yearToDatePercentagePieChart').innerHTML = "<br><br>No Data Provided<br>For Chart.";
				}
			}
			
			
			//payments chart
			//resizeChartValues.taxReturn = taxReturn; 
			
			 
			
			
			if (yearToDateIIPieChartVis === 1){
				resizeChartValues.add_paySum = add_paySum; 
				resizeChartValues.add_pay2Sum = add_pay2Sum; 
				resizeChartValues.add_pay3Sum = add_pay3Sum;
				resizeChartValues.taxSum = taxSum; 
				resizeChartValues.basicPaySum = basicPaySum; 
				resizeChartValues.uns_premSum = uns_premSum; 
				resizeChartValues.uns_holSum = uns_holSum;
				resizeChartValues.uns_sickSum = uns_sickSum; 
				resizeChartValues.uns_familySum = uns_familySum; 
				resizeChartValues.uns_berSum = uns_berSum; 
				resizeChartValues.uns_compSum = uns_compSum;
				resizeChartValues.ot1_paySum = ot1_paySum;
				resizeChartValues.ot2_paySum = ot2_paySum; 
				resizeChartValues.enhol_paySum = enhol_paySum; 
				resizeChartValues.hol_paySum = hol_paySum; 
				resizeChartValues.holidayPaySum = holidayPaySum;
				resizeChartValues.saturdayExtraPaySum = saturdayExtraPaySum; 
				resizeChartValues.sundayExtraPaySum = sundayExtraPaySum; 
				resizeChartValues.sick_paySum = sick_paySum; 
				resizeChartValues.fam_paySum = fam_paySum;
				resizeChartValues.ber_paySum = ber_paySum; 
				resizeChartValues.comp_paySum = comp_paySum; 
				resizeChartValues.bhol_paySum = bhol_paySum; 
				resizeChartValues.bhol_bonusSum = bhol_bonusSum;
				resizeChartValues.paybackSum = paybackSum;
				resizeChartValues.pieceWorkSum = pieceWorkSum; 
				resizeChartValues.SSP_Sum = SSP_Sum; 
				resizeChartValues.SPP_Sum = SPP_Sum; 
				resizeChartValues.chris_savSum = chris_savSum;
				resizeChartValues.summer_savSum = summer_savSum; 
				resizeChartValues.SAPSum = SAPSum; 
				resizeChartValues.salarySum = salarySum; 
				resizeChartValues.bonusSum = bonusSum;
				resizeChartValues.commissionsSum = commissionsSum; 
				resizeChartValues.yearToDateIIPieChartVis = yearToDateIIPieChartVis;
				//var deletechart = document.getElementById('paymentsPieChart').innerHTML = " ";
				//remove negative values
				let taxReturnSum = 0;
				if (add_paySum < 0){add_paySum = 0};
				if (add_pay2Sum < 0){add_pay2Sum = 0};
				if (add_pay3Sum < 0){add_pay3Sum = 0};
				if (taxReturnSum < 0 ) {taxReturnSum = -taxSum};
				if (basicPaySum >0||uns_premSum>0||uns_holSum>0||uns_sickSum>0||uns_familySum>0||
				uns_berSum>0||uns_compSum>0||ot1_paySum>0||ot2_paySum>0||enhol_paySum>0||hol_paySum>0||holidayPaySum>0||
				saturdayExtraPaySum>0||sundayExtraPaySum>0||sick_paySum>0||fam_paySum>0||ber_paySum>0||comp_paySum>0||bhol_paySum>0||
				bhol_bonusSum>0||paybackSum>0||pieceWorkSum>0||SSP_Sum>0||SPP_Sum>0||add_pay2Sum>0||add_paySum>0||add_pay3Sum>0||
				chris_savSum>0||summer_savSum>0||SAPSum>0||salarySum>0||bonusSum>0||commissionsSum>0)
				{
					google.charts.setOnLoadCallback(drawChartPayments);
					function drawChartPayments() {

					var data = google.visualization.arrayToDataTable([
						['Type', 'Payments'],
						['Basic Pay', basicPaySum],
						['Uns. Premium', uns_premSum],
						['Uns Prem. Holidays', uns_holSum],
						['Uns Prem. Sickness', uns_sickSum],
						['Uns Prem. Paternity', uns_familySum],
						['Uns Prem. Bereav.', uns_berSum],
						['Uns Prem. Compass.', uns_compSum],
						['Overtime 1 Pay', ot1_paySum],
						['Overtime 2 Pay', ot2_paySum],
						['Enhanced Holiday Pay', enhol_paySum],
						['Holiday Pay', hol_paySum],
						['Holiday Pay', holidayPaySum],
						['Saturday Extra Pay', saturdayExtraPaySum],
						['Sunday Extra Pay', sundayExtraPaySum],
						['Sickness Pay', sick_paySum],
						['Paternity Pay', fam_paySum],
						['Bereavement Pay', ber_paySum],
						['Compassionate Pay', comp_paySum],
						['Bank Holiday Pay', bhol_paySum],
						['Bank Holiday Bonus', bhol_bonusSum],
						['Back Pay', paybackSum],
						['Piece Work', pieceWorkSum],
						['SSP', SSP_Sum],
						['SPP', SPP_Sum],
						['Add. Payment 1', add_paySum],
						['Add. Payment 2', add_pay2Sum],
						['Add. Payment 3', add_pay3Sum],
						['Christmas Sav. Payment', chris_savSum],
						['Summer Sav. Payment', summer_savSum],
						['SAP', SAPSum],
						['Salary', salarySum],
						['Bonus', bonusSum],
						['Commissions', commissionsSum],
						['Tax Return', taxReturnSum],
						]);

						var options = {
						backgroundColor: insideBoxColor,
						colors: paymentsColorArray,
						slices: {  0: {offset: 0.2},
								10: {offset: 0.1},
								9: {offset: 0.1},
								13: {offset: 0.1},
								14: {offset: 0.1},
								15: {offset: 0.1},
								16: {offset: 0.1},
							},
						title: 'YTD Payments Pie Chart',
						is3D: true,
						};

						var chart = new google.visualization.PieChart(document.getElementById('yearToDateIIPieChart'));

						chart.draw(data, options);
					}
				}
				else{
					 document.getElementById("yearToDateIIPieChart").innerHTML = "<br><br>No Data Provided<br>For Chart.";
				}
			}
			
			
			
			if (weeklyAveragesPieChartVis === 1){
				resizeChartValues.averageTax  = averageTax ; 
				resizeChartValues.averageNI = averageNI; 
				resizeChartValues.averagePension  = averagePension ;
				resizeChartValues.otherDeductionsAverages  = otherDeductionsAverages ; 
				
				resizeChartValues.averageGrossPay  = averageGrossPay ; 
				resizeChartValues.avergetaxablePay  = avergetaxablePay ; 
				resizeChartValues.averageNetPay  = averageNetPay ;
				
				resizeChartValues.averageBasicHoursPay  = averageBasicHoursPay ;
				resizeChartValues.averageBasicHours  = averageBasicHours ; 
				resizeChartValues.averageUnsocialPrem  = averageUnsocialPrem ; 
				resizeChartValues.averageUnsocialHours  = averageUnsocialHours ; 
				resizeChartValues.averageOvertimeHours  = averageOvertimeHours ;
				resizeChartValues.averageOvertimePay  = averageOvertimePay ; 
				resizeChartValues.averageHolidayHours  = averageHolidayHours ; 
				resizeChartValues.averageHolidayPay  = averageHolidayPay ; 
				resizeChartValues.averageSicknessHours  = averageSicknessHours ;
				resizeChartValues.averageSicknessPay  = averageSicknessPay ; 
				resizeChartValues.averagePaternityHours  = averagePaternityHours ;
				
				resizeChartValues.averagePaternityPay  = averagePaternityPay ; 
				resizeChartValues.averageBereveamentHours  = averageBereveamentHours ; 
				resizeChartValues.averageBerevemeantPay  = averageBerevemeantPay ; 
				resizeChartValues.averageCompassionateHours  = averageCompassionateHours ; 
				resizeChartValues.averageCompassionatePay  = averageCompassionatePay ; 
				resizeChartValues.averageOtherPayments  = averageOtherPayments ; 
				
				resizeChartValues.weeklyAveragesPieChartVis = weeklyAveragesPieChartVis; 
				resizeChartValues.averageUnpaidBreaksLength = averageUnpaidBreaksLength;  
				
				//var deletechart = document.getElementById('paymentsPieChart').innerHTML = " ";
				//remove negative values
				if (averageTax < 0 ) {averageTax = -taxAmount};
				if (averageTax >0||averageNI>0||averagePension >0||otherDeductionsAverages  > 0|| averageBasicHoursPay >0 || averageUnsocialPrem >0|| averageOvertimePay >0||
				averageHolidayPay >0||averageSicknessPay >0|| averagePaternityPay >0|| averageBerevemeantPay >0||averageCompassionatePay >0|| averageOtherPayments >0)
				{
					google.charts.setOnLoadCallback(drawChartPayments);
					function drawChartPayments() {

					var data = google.visualization.arrayToDataTable([
						['Type', 'Value'],
						['TAX', averageTax],
						['NI', averageNI],
						['Pension', averagePension],
						['Other Deductions', otherDeductionsAverages],
						['Basic Pay', averageBasicHoursPay],
						['Unsocial Pay', averageUnsocialPrem],
						['Overtime Pay', averageOvertimePay],
						['Holiday Pay', averageHolidayPay],
						['Sickness Pay', averageSicknessPay],
						['Paternity Pay', averagePaternityPay],
						['Bereavement Pay', averageBerevemeantPay],
						['Compassionate Pay', averageCompassionatePay],
						['Other Payments', averageOtherPayments],
						]);

						var options = {
						backgroundColor: insideBoxColor,
						colors: [taxAmuntColor, NIAmountColor, unionColor, pensionColor, dayInColor, overtime1Color, overtime2Color, holidayColor, sicknessColor, familyLeaveColor, bereavementColor, compassionateColor, addPay1Color],
						slices: {  0: {offset: 0.2},
								1: {offset: 0.2},
								2: {offset: 0.2},
								3: {offset: 0.2},
							},
						title: 'YTD Weekly Averages Pie Chart',
						is3D: true,
						};

						var chart = new google.visualization.PieChart(document.getElementById('weeklyAveragesPieChart'));

						chart.draw(data, options);
					}
				}
				else{
					 document.getElementById("weeklyAveragesPieChart").innerHTML = "<br><br>No Data Provided<br>For Chart.";
				}
			}
						
			if (weeklyAveragesPieChartVis === 1){
				
				//var deletechart = document.getElementById('paymentsPieChart').innerHTML = " ";
				//remove negative values
				if (averageBasicHours >0||averageOvertimeHours>0||averageHolidayHours >0||averageSicknessHours  > 0|| averagePaternityHours >0 || 
				averageBereveamentHours >0|| averageCompassionateHours >0|| averageUnpaidBreaksLength >0)
				{
					google.charts.setOnLoadCallback(drawChartPayments);
					function drawChartPayments() {

					var data = google.visualization.arrayToDataTable([
						['Name', 'Value'],
						['Basic Hours', averageBasicHours],
						['Overtime Hours', averageOvertimeHours],
						['Holiday Hours', averageHolidayHours],
						['Sickness Hours', averageSicknessHours],
						['Paternity Hours', averagePaternityHours],
						['Bereavement Hours', averageBereveamentHours],
						['Compassionate Hours', averageCompassionateHours],
						['Unpaid Breaks', averageUnpaidBreaksLength],
						]);

						var options = {
						backgroundColor: insideBoxColor,
						colors: [dayInColor, overtime1Color, holidayColor, sicknessColor, familyLeaveColor, bereavementColor, compassionateColor, unpaidBreaksColor],
						slices: {  0: {offset: 0.2},
							},
						title: 'YTD Weekly Averages Pie Chart',
						is3D: true,
						};

						var chart = new google.visualization.PieChart(document.getElementById('weeklyAveragesHoursPieChart'));

						chart.draw(data, options);
					}
				}
				else{
					 document.getElementById("weeklyAveragesHoursPieChart").innerHTML = "<br><br>No Data Provided<br>For Chart.";
				}
			}
				



			//yearly estimates pie chart
			if (yearlyEstimatesPieChartVis === 1){
				resizeChartValues.estimatedNI = estimatedNI; 
				resizeChartValues.estimatedTax = estimatedTax; 
				resizeChartValues.estimatedOtherDeductions = estimatedOtherDeductions;
				resizeChartValues.estimatedPension = estimatedPension; 
				resizeChartValues.estimatedNetPay = estimatedNetPay; 
				resizeChartValues.yearlyEstimatesPieChartVis = yearlyEstimatesPieChartVis;
				
				
				//var deletechart = document.getElementById('paymentsPieChart').innerHTML = " ";
				//remove negative values
				if (estimatedTax <0 ) {estimatedTax = -estimatedTax};
				if (estimatedTax >0||estimatedNI>0||estimatedOtherDeductions>0||estimatedPension> 0|| estimatedNetPay>0)
				{
					google.charts.setOnLoadCallback(drawChartPayments);
					function drawChartPayments() {

					var data = google.visualization.arrayToDataTable([
						['Type', 'Value'],
						['TAX', estimatedTax],
						['NI', estimatedNI],
						['Pension', estimatedPension],
						['Other Deductions', estimatedOtherDeductions],
						['Net Pay', estimatedNetPay],
						]);

						var options = {
						backgroundColor: insideBoxColor,
						colors: [taxAmuntColor, NIAmountColor, unionColor, pensionColor, netPayColor],
						slices: {  0: {offset: 0.2},
								1: {offset: 0.2},
								2: {offset: 0.2},
								3: {offset: 0.2},
							},
						title: 'Yearly Estimates',
						is3D: true,
						};

						var chart = new google.visualization.PieChart(document.getElementById('yearlytEstimatesPieChart'));

						chart.draw(data, options);
					}
				}
				else{
					 document.getElementById("yearlytEstimatesPieChart").innerHTML = "<br><br>No Data Provided<br>For Chart.";
				}
			}
				
			//last 13 weeks averages
			
			
			if (last3MonthsPieChartVis === 1){
				resizeChartValues.last3MonthsPieChartVis = last3MonthsPieChartVis; 
				resizeChartValues.chris_savSumLast12Weeks = chris_savSumLast12Weeks; 
				resizeChartValues.summer_savSumLast12Weeks = summer_savSumLast12Weeks;
				resizeChartValues.taxSumLast12Weeks = taxSumLast12Weeks; 
				resizeChartValues.NISumLast12Weeks = NISumLast12Weeks; 
				resizeChartValues.union_deSumLast12Weeks = union_deSumLast12Weeks; 
				resizeChartValues.pensionSumLast12WeeksChart = pensionSumLast12WeeksChart;
				resizeChartValues.companyLoanSumLast12Weeks = companyLoanSumLast12Weeks; 
				resizeChartValues.studentLoanDeductionSumLast12Weeks = studentLoanDeductionSumLast12Weeks; 
				resizeChartValues.other_deLast12Weeks = other_deLast12Weeks; 
				resizeChartValues.add_deSum2Last12Weeks = add_deSum2Last12Weeks;
				resizeChartValues.add_deSum3Last12Weeks = add_deSum3Last12Weeks;
				resizeChartValues.netPaySumLast12Weeks = netPaySumLast12Weeks; 
				resizeChartValues.travelDeductionSumLast12Weeks = travelDeductionSumLast12Weeks;
				resizeChartValues.taxFreeDeduction1SumLast12Weeks = taxFreeDeduction1SumLast12Weeks;
				resizeChartValues.taxFreeDeduction2SumLast12Weeks = taxFreeDeduction2SumLast12Weeks;
				resizeChartValues.taxFreeDeduction3SumLast12Weeks = taxFreeDeduction3SumLast12Weeks; 
				
				if (chris_savSumLast12Weeks<0){chris_savSumLast12Weeks = 0;}
				if (summer_savSumLast12Weeks<0){summer_savSumLast12Weeks = 0;}
				if(taxSumLast12Weeks>0||NISumLast12Weeks>0||union_deSumLast12Weeks>0||pensionSumLast12WeeksChart>0||chris_savSumLast12Weeks>0||
				summer_savSumLast12Weeks>0||companyLoanSumLast12Weeks>0||studentLoanDeductionSumLast12Weeks>0||other_deLast12Weeks>0||
				add_deSum2Last12Weeks>0||add_deSum3Last12Weeks>0||netPaySumLast12Weeks>0 || travelDeductionSumLast12Weeks>0 || taxFreeDeduction1SumLast12Weeks>0 || 
				taxFreeDeduction2SumLast12Weeks>0|| taxFreeDeduction3SumLast12Weeks>0){
					google.charts.setOnLoadCallback(drawChartLast3Months);
					function drawChartLast3Months() {
					var data = google.visualization.arrayToDataTable([
						['Type', 'Chart'],
						['Tax', taxSumLast12Weeks],
						['NI', NISumLast12Weeks],
						['Union', union_deSumLast12Weeks],
						['Pension', pensionSumLast12WeeksChart],
						['Christmas savings', chris_savSumLast12Weeks],
						['Summer savings.', summer_savSumLast12Weeks],
						['Company Loan', companyLoanSumLast12Weeks],
						['Student Loan', studentLoanDeductionSumLast12Weeks],
						['Add. Deduction', other_deLast12Weeks],
						['Add. Deduction 2', add_deSum2Last12Weeks],
						['Add. Deduction 3', add_deSum3Last12Weeks],
						['Travel', travelDeductionSumLast12Weeks ],
						['Tax Free Ded. 1', taxFreeDeduction1SumLast12Weeks ],
						['Tax Free Ded. 2', taxFreeDeduction2SumLast12Weeks ],
						['Tax Free Ded. 3', taxFreeDeduction3SumLast12Weeks ],
						['Net Pay', netPaySumLast12Weeks],
						]);

						var options = {
						animation: {startup: true, duration: 1000},	
						backgroundColor: insideBoxColor,
						colors: deductionsColorArray,
						slices: {  15: {offset: 0.2},
							},
						title: 'Last 3 Months Averages Pie Chart',
						is3D: true,
						};

						var chart = new google.visualization.PieChart(document.getElementById('las3MonthsPieChart'));

						chart.draw(data, options);
					}
				}
				else{
					document.getElementById('las3MonthsPieChart').innerHTML = "<br><br>No Data Provided<br>For Chart.";
				}
			}
				
			//paid hours chart
			//add values to object 
			
		
			if (last10WeeksNetChartVis === 1){
				resizeChartValues.last10WeeksNetChartVis = last10WeeksNetChartVis;
				resizeChartValues.last10NetPayArray = response.last10NetPayArray;
				resizeChartValues.last10DeductionsArray = response.last10DeductionsArray;
				
				if(Number(response.last10NetPayArray[9])>0||Number(response.last10DeductionsArray[9])>0||
				Number(response.last10NetPayArray[8])>0||Number(response.last10DeductionsArray[8])>0||
				Number(response.last10NetPayArray[7])>0||Number(response.last10DeductionsArray[7])>0||
				Number(response.last10NetPayArray[6])>0||Number(response.last10DeductionsArray[6])>0||
				Number(response.last10NetPayArray[5])>0||Number(response.last10DeductionsArray[5])>0||
				Number(response.last10NetPayArray[4])>0||Number(response.last10DeductionsArray[4])>0||
				Number(response.last10NetPayArray[3])>0||Number(response.last10DeductionsArray[3])>0||
				Number(response.last10NetPayArray[2])>0||Number(response.last10DeductionsArray[2])>0||
				Number(response.last10NetPayArray[1])>0||Number(response.last10DeductionsArray[1])>0||
				Number(response.last10NetPayArray[0])>0||Number(response.last10DeductionsArray[0])>0){
					google.charts.setOnLoadCallback(drawChartColumnPaidHours);
					function drawChartColumnPaidHours() {

					var data = google.visualization.arrayToDataTable([

						['TAX Period Nr.', 'Net Pay', 'Deductions' ],
						["10", Number(response.last10NetPayArray[9]), Number(response.last10DeductionsArray[9])],
						["9", Number(response.last10NetPayArray[8]), Number(response.last10DeductionsArray[8])],
						["8", Number(response.last10NetPayArray[7]), Number(response.last10DeductionsArray[7])],
						["7", Number(response.last10NetPayArray[6]), Number(response.last10DeductionsArray[6])],
						["6", Number(response.last10NetPayArray[5]), Number(response.last10DeductionsArray[5])],
						["5", Number(response.last10NetPayArray[4]), Number(response.last10DeductionsArray[4])],
						["4", Number(response.last10NetPayArray[3]), Number(response.last10DeductionsArray[3])],
						["3", Number(response.last10NetPayArray[2]), Number(response.last10DeductionsArray[2])],
						["2", Number(response.last10NetPayArray[1]), Number(response.last10DeductionsArray[1])],
						["Current", Number(response.last10NetPayArray[0]), Number(response.last10DeductionsArray[0])],
						]);

						var options = {
						legend: {position: 'none'},
						animation: {startup: true, duration: 1000},	
						bar: {groupWidth: '95%'},
						colors: [netPayColor, taxAmuntColor],
						backgroundColor: insideBoxColor,
						title: 'Last 10 Weeks Net Pay and Deductions Chart',
						isStacked: true,
						};

						var chart = new google.visualization.ColumnChart(document.getElementById('columnChartNetPay'));
						chart.draw(data, options);
					}
				}
				else{
					document.getElementById('columnChartNetPay').innerHTML = "<br><br>No Data Provided<br>For Chart.";
				}
			}

			//paid hours chart
			
			//susumuojame visas valandas patikrinti ar reikia braizyti grafika
			if (last10WeeksPaidHoursChartVis === 1){
				resizeChartValues.last10WeeksPaidHoursChartVis = last10WeeksPaidHoursChartVis;
				resizeChartValues.last10WorkingHoursArray = response.last10WorkingHoursArray;
				resizeChartValues.last10AllHolidayHoursArray = response.last10AllHolidayHoursArray;
				resizeChartValues.last10SickHoursArray = response.last10SickHoursArray;
				resizeChartValues.last10FamHoursArray = response.last10FamHoursArray;
				resizeChartValues.last10BerHoursArray = response.last10BerHoursArray;
				resizeChartValues.last10CompHoursArray = response.last10CompHoursArray;
				
				var last10weeksHoursSum = 0;
				for (i=0;i<10;i++)
				{
					last10weeksHoursSum += Number(response.last10WorkingHoursArray[i]);
					last10weeksHoursSum += Number(response.last10AllHolidayHoursArray[i]);
					last10weeksHoursSum += Number(response.last10SickHoursArray[i]);
					last10weeksHoursSum += Number(response.last10FamHoursArray[i]);
					last10weeksHoursSum += Number(response.last10BerHoursArray[i]);
					last10weeksHoursSum += Number(response.last10CompHoursArray[i]);
				}

				if(last10weeksHoursSum>0){
					google.charts.setOnLoadCallback(drawChartColumn);
					function drawChartColumn() {

					var data = google.visualization.arrayToDataTable([

						['TAX Period Nr.', 'Working Hours', 'Holiday Hours', 'Sickness Hours', 'Parental Hours', 'Bereavement Hours', 'Compassionate Hours' ],
						["10", Number(response.last10WorkingHoursArray[9]), Number(response.last10AllHolidayHoursArray[9]), Number(response.last10SickHoursArray[9]), Number(response.last10FamHoursArray[9]), Number(response.last10BerHoursArray[9]), Number(response.last10CompHoursArray[9])],
						["9", Number(response.last10WorkingHoursArray[8]), Number(response.last10AllHolidayHoursArray[8]), Number(response.last10SickHoursArray[8]), Number(response.last10FamHoursArray[8]), Number(response.last10BerHoursArray[8]), Number(response.last10CompHoursArray[8])],
						["8", Number(response.last10WorkingHoursArray[7]), Number(response.last10AllHolidayHoursArray[7]), Number(response.last10SickHoursArray[7]), Number(response.last10FamHoursArray[7]), Number(response.last10BerHoursArray[7]), Number(response.last10CompHoursArray[7])],
						["7", Number(response.last10WorkingHoursArray[6]), Number(response.last10AllHolidayHoursArray[6]), Number(response.last10SickHoursArray[6]), Number(response.last10FamHoursArray[6]), Number(response.last10BerHoursArray[6]), Number(response.last10CompHoursArray[6])],
						["6", Number(response.last10WorkingHoursArray[5]), Number(response.last10AllHolidayHoursArray[5]), Number(response.last10SickHoursArray[5]), Number(response.last10FamHoursArray[5]), Number(response.last10BerHoursArray[5]), Number(response.last10CompHoursArray[5])],
						["5", Number(response.last10WorkingHoursArray[4]), Number(response.last10AllHolidayHoursArray[4]), Number(response.last10SickHoursArray[4]), Number(response.last10FamHoursArray[4]), Number(response.last10BerHoursArray[4]), Number(response.last10CompHoursArray[4])],
						["4", Number(response.last10WorkingHoursArray[3]), Number(response.last10AllHolidayHoursArray[3]), Number(response.last10SickHoursArray[3]), Number(response.last10FamHoursArray[3]), Number(response.last10BerHoursArray[3]), Number(response.last10CompHoursArray[3])],
						["3", Number(response.last10WorkingHoursArray[2]), Number(response.last10AllHolidayHoursArray[2]), Number(response.last10SickHoursArray[2]), Number(response.last10FamHoursArray[2]), Number(response.last10BerHoursArray[2]), Number(response.last10CompHoursArray[2])],
						["2", Number(response.last10WorkingHoursArray[1]), Number(response.last10AllHolidayHoursArray[1]), Number(response.last10SickHoursArray[1]), Number(response.last10FamHoursArray[1]), Number(response.last10BerHoursArray[1]), Number(response.last10CompHoursArray[1])],
						["Current", Number(response.last10WorkingHoursArray[0]), Number(response.last10AllHolidayHoursArray[0]), Number(response.last10SickHoursArray[0]), Number(response.last10FamHoursArray[0]), Number(response.last10BerHoursArray[0]), Number(response.last10CompHoursArray[0])],
						]);

						var options = {
						animation: {startup: true, duration: 1000},	
						bar: {groupWidth: '95%'},
						legend: {position: 'none'},
						backgroundColor: insideBoxColor,
						title: 'Last 10 Weeks Paid Hours Chart',
						colors: ['#e6e600', '#d5ff80','#ff9999','#ffcc99', '#4d4d4d', '#ffe6cc'],
						isStacked: true,
						};

						var chart = new google.visualization.ColumnChart(document.getElementById('columnChartPaidHours'));
						chart.draw(data, options);
					}
				}
				else{
					document.getElementById('columnChartPaidHours').innerHTML = "<br><br>No Data Provided<br>For Chart.";
				}
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
		let timeSinceEpochCurrentDay = timeSinceEpochOriginal + 604800000*(taxPeriodNumber-4)+weekStart*86400000;
		let taxPeriodNumberCalendar = taxPeriodNumber- 3;
		let taxPeriodStartCalendar = (taxPeriodNumberCalendar-1)*7+weekStart;
		for ( bg = 0; bg < 49 ; bg++ )
			{
				dayDiv = document.getElementById("dayDiv"+bg);
				backgroundIndex = response.dayTypeArrayCalendar[bg];
				backgroundIndex = Number(backgroundIndex);
				//NEED TO CHANGE THIS BRANCHING TO SWITCH
				switch (backgroundIndex){
					case 0:
						if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))	{
							dayDiv.setAttribute("class", "dayDiv notSelectedColor currentDay");
						}	else{
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
						if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
						{dayDiv.setAttribute("class", "dayDiv dayOffColor currentDay");}
						else
						{dayDiv.className="dayDiv dayOffColor";}
						break;
					case 3:
						if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
						{dayDiv.setAttribute("class", "dayDiv holidayColor currentDay");}
						else
						{dayDiv.className="dayDiv holidayColor";}
						break;
					case 4:
						if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
						{dayDiv.setAttribute("class", "dayDiv unpaidHolColor currentDay");}
						else
						{dayDiv.className="dayDiv unpaidHolColor";}
						break;
					case 5:
						if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
						{dayDiv.setAttribute("class", "dayDiv halfInHalfOffColor currentDay");}
						else
						{dayDiv.className="dayDiv halfInHalfOffColor";}
						break;
					case 6:
						if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
						{dayDiv.setAttribute("class", "dayDiv dayInSickColor currentDay");}
						else
						{dayDiv.className="dayDiv dayInSickColor";}
						break;
					case 7:
						if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
						{dayDiv.setAttribute("class", "dayDiv sicknessColor currentDay");}
						else
						{dayDiv.className="dayDiv sicknessColor";}
						break;
					case 8:
						if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
						{dayDiv.setAttribute("class", "dayDiv absenceColor currentDay");}
						else
						{dayDiv.className="dayDiv absenceColor";}
						break;
					case 9:
						if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
						{dayDiv.setAttribute("class", "dayDiv familyLeaveColor currentDay");}
						else
						{dayDiv.className="dayDiv familyLeaveColor";}
						break;
					case 10:
						if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
						{dayDiv.setAttribute("class", "dayDiv bereavementColor currentDay");}
						else
						{dayDiv.className="dayDiv bereavementColor";}
						break;
					case 11:
						if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
						{dayDiv.setAttribute("class", "dayDiv compassionateColor currentDay");}
						else
						{dayDiv.className="dayDiv compassionateColor";}
						break;
					default:
						if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))	{
							dayDiv.setAttribute("class", "dayDiv notSelectedColor currentDay");
						}	else{
							dayDiv.className="dayDiv notSelectedColor";
						}
				}
				taxPeriodStartCalendar++;
				timeSinceEpochCurrentDay += 86400000
			}
		changeSelectBackground(taxPeriodNumber);
		finishNextMorningBColor(taxPeriodNumber);
		//bankHolidayFilter(taxPeriodNumber);
		hideHoursSelect(taxPeriodNumber);
	}
}

const postData = (taxPeriodNumber) => {
	str = getFormValues(taxPeriodNumber);
	if (XMLHttpRequest)	{
			request = new XMLHttpRequest();
		}	else if (ActiveXObject)	{
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}	else {return false;}
	let url = "javascript/ajax/submitForm.php";
	let submitSuccessMain = $("#submitSuccessMain");
	request.open("POST", url, true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.onreadystatechange = function(){
		if(request.readyState ==4 && request.status ==200){
			let response = JSON.parse(this.responseText);
			errorsArrayLength = Object.keys(response.errors).length;
			//submitSuccessMain.innerHTML = " ";
			if (errorsArrayLength>0){
				for (i=0; i<errorsArrayLength; i++)		{
					let errorText = "";
					errorText += response.errors[i];
					
					submitSuccessMain.html(errorText);
					submitSuccessMain.addClass("errorStyle");
				}
			}	else {
					submitSuccessMain.removeClass("errorStyle");
					submitSuccessMain.text('Payslip Generated!');
					//submitSuccessMain.innerHTML = 'Payslip Generated!';
					setTimeout(function(){submitSuccessMain.text(" ");},1500);	
					loadResponseData(response, taxPeriodNumber);
					$("#paymentsPieChart").fadeIn(1000);
					$("#deductionsPieChart").fadeIn(1000);
					$("#yearToDatePieChart").fadeIn(1000);
					$("#yearToDatePercentagePieChart").fadeIn(1000);
					$("#dayStatisticsPieChart").fadeIn(1000);
					$("#las3MonthsPieChart").fadeIn(1000);
					$("#yearToDateHoursPieChart").fadeIn(1000);
					$("#yearToDateIIPieChart").fadeIn(1000);
					$("#yearlytEstimatesPieChart").fadeIn(1000);
					$("#paymentsUnitsDiv").fadeIn(1000);
					$("#paymentsRateDiv").fadeIn(1000);
					$("#paymentsAmountDiv").fadeIn(1000);
					//$("#paymentsNamesDiv").fadeIn(1000);
					$("#totalGrossPaymentsAmountText").fadeIn(1000);
					$("#taxFreeDeductions").fadeIn(1000);
					$("#totalTaxablePaymentsAmountText").fadeIn(1000);
					$("#deductionsAmountDiv").fadeIn(1000);
					$("#totalDeductionsAmount").fadeIn(1000);
					$("#netPayAmount").fadeIn(1000);
					$("#yearToDateAmount").fadeIn(1000);
					$("#yearToDatePercentageAmount").fadeIn(1000);
					$("#yearToDateAmountII").fadeIn(1000);
					$("#yearToDateAmountHours").fadeIn(1000);
					$("#dayStatisticsAmount").fadeIn(1000);
					$("#weeklyAveragesAmount").fadeIn(1000);
					$("#dailyAveragesAmount").fadeIn(1000);
					$("#hourlyAveragesAmount").fadeIn(1000);
					$("#yearToDateLast12WeeksAmount").fadeIn(1000);
					$("#yearlyEstimatesAmount").fadeIn(1000);
					
					if(toggleCounter %2 === 0){
						$("#weeklyAveragesPaymentsAmount").fadeIn(1000);
						$("#weeklyAveragesPieChart").fadeIn(1000);
					}else { 
						$("#weeklyAveragesHoursAmount").fadeIn(1000);
						$("#weeklyAveragesHoursPieChart").fadeIn(1000);
					}
			}
		}
	}
	request.send(str);
	submitSuccessMain.removeClass("errorStyle");
	submitSuccessMain.text('Generating Payslip...');
	$("#paymentsPieChart").fadeOut();
	$("#deductionsPieChart").fadeOut();
	$("#yearToDatePieChart").fadeOut();
	$("#yearToDatePercentagePieChart").fadeOut();
	$("#dayStatisticsPieChart").fadeOut();
	$("#las3MonthsPieChart").fadeOut();
	$("#yearToDateHoursPieChart").fadeOut();
	$("#yearToDateIIPieChart").fadeOut();
	$("#yearlytEstimatesPieChart").fadeOut();
	
	$("#paymentsUnitsDiv").fadeOut(0);
	$("#paymentsRateDiv").fadeOut(0);
	$("#paymentsAmountDiv").fadeOut(0);
	//$("#paymentsNamesDiv").fadeOut(100);
	$("#totalGrossPaymentsAmountText").fadeOut(0);
	$("#taxFreeDeductions").fadeOut(0);
	$("#totalTaxablePaymentsAmountText").fadeOut(0);
	$("#deductionsAmountDiv").fadeOut(0);
	$("#totalDeductionsAmount").fadeOut(0);
	$("#netPayAmount").fadeOut(0);
	$("#yearToDateAmount").fadeOut(0);
	$("#yearToDatePercentageAmount").fadeOut(0);
	$("#yearToDateAmountII").fadeOut(0);
	$("#yearToDateAmountHours").fadeOut(0);
	$("#dayStatisticsAmount").fadeOut(0);
	$("#weeklyAveragesAmount").fadeOut(0);
	$("#dailyAveragesAmount").fadeOut(0);
	$("#hourlyAveragesAmount").fadeOut(0);
	$("#yearToDateLast12WeeksAmount").fadeOut(0);
	$("#yearlyEstimatesAmount").fadeOut(0);
	
	if(toggleCounter %2 === 0){
		$("#weeklyAveragesPaymentsAmount").fadeOut(0);
		$("#weeklyAveragesPieChart").fadeOut();
	}else { 
		$("#weeklyAveragesHoursAmount").fadeOut(0);
		$("#weeklyAveragesHoursPieChart").fadeOut();
	}
	
	//document.getElementById("submitSuccessMain").innerHTML = "Generating payslip...";
}


const loadData = (taxPeriodNumber) => {
	
	let loadImageMainTable = document.getElementById("loadImageMainTable");
	let loadMainTable = document.getElementById("loadMainTable");
	let loadImageCalendar = document.getElementById("loadImageCalendar");
	let loadCalendar = document.getElementById("loadCalendar");
	
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
			loadImageMainTable.setAttribute("class", "col-sm-12 col-xs-12 boxShadow noPadding hidden");
			loadMainTable.setAttribute("class", "col-sm-12 col-xs-12 boxShadow noPadding");
			loadImageCalendar.setAttribute("class", "col-sm-12 col-xs-12 boxShadow noPadding hidden");
			loadCalendar.setAttribute("class", "col-sm-12 col-xs-12 boxShadow noPadding");
			$("#paymentsPieChart").fadeIn(1000);
			$("#deductionsPieChart").fadeIn(1000);
			$("#yearToDatePieChart").fadeIn(1000);
			$("#yearToDatePercentagePieChart").fadeIn(1000);
			$("#dayStatisticsPieChart").fadeIn(1000);
			$("#las3MonthsPieChart").fadeIn(1000);
			$("#yearToDateHoursPieChart").fadeIn(1000);
			$("#yearToDateIIPieChart").fadeIn(1000);
			$("#yearlytEstimatesPieChart").fadeIn(1000);
			$("#paymentsUnitsDiv").fadeIn(1000);
			$("#paymentsRateDiv").fadeIn(1000);
			$("#paymentsAmountDiv").fadeIn(1000);
			//$("#paymentsNamesDiv").fadeIn(1000);
			$("#totalGrossPaymentsAmountText").fadeIn(1000);
			$("#taxFreeDeductions").fadeIn(1000);
			$("#totalTaxablePaymentsAmountText").fadeIn(1000);
			$("#deductionsAmountDiv").fadeIn(1000);
			$("#totalDeductionsAmount").fadeIn(1000);
			$("#netPayAmount").fadeIn(1000);
			$("#yearToDateAmount").fadeIn(1000);
			$("#yearToDatePercentageAmount").fadeIn(1000);
			$("#yearToDateAmountII").fadeIn(1000);
			$("#yearToDateAmountHours").fadeIn(1000);
			$("#dayStatisticsAmount").fadeIn(1000);
			$("#weeklyAveragesAmount").fadeIn(1000);
			$("#dailyAveragesAmount").fadeIn(1000);
			$("#hourlyAveragesAmount").fadeIn(1000);
			$("#yearToDateLast12WeeksAmount").fadeIn(1000);
			$("#yearlyEstimatesAmount").fadeIn(1000);
			
			
			if(toggleCounter % 2 === 0){
				$("#weeklyAveragesPaymentsAmount").fadeIn(1000);
				$("#weeklyAveragesPieChart").fadeIn(1000);
			}else { 
				$("#weeklyAveragesHoursAmount").fadeIn(1000);
				$("#weeklyAveragesHoursPieChart").fadeIn(1000);
			}
		}
	}
	loadImageMainTable.setAttribute("class", "col-sm-12 col-xs-12 boxShadow noPadding");
	loadMainTable.setAttribute("class", "col-sm-12 col-xs-12 boxShadow noPadding hidden");
	loadImageCalendar.setAttribute("class", "col-sm-12 col-xs-12 boxShadow noPadding");
	loadCalendar.setAttribute("class", "col-sm-12 col-xs-12 boxShadow noPadding hidden");
	$("#paymentsPieChart").fadeOut();
	$("#deductionsPieChart").fadeOut();
	$("#yearToDatePieChart").fadeOut();
	$("#yearToDatePercentagePieChart").fadeOut();
	$("#dayStatisticsPieChart").fadeOut();
	$("#las3MonthsPieChart").fadeOut();
	$("#yearToDateHoursPieChart").fadeOut();
	$("#yearToDateIIPieChart").fadeOut();
	$("#yearlytEstimatesPieChart").fadeOut();
	
	$("#paymentsUnitsDiv").fadeOut(0);
	$("#paymentsRateDiv").fadeOut(0);
	$("#paymentsAmountDiv").fadeOut(0);
	//$("#paymentsNamesDiv").fadeOut(100);
	$("#totalGrossPaymentsAmountText").fadeOut(0);
	$("#taxFreeDeductions").fadeOut(0);
	$("#totalTaxablePaymentsAmountText").fadeOut(0);
	$("#deductionsAmountDiv").fadeOut(0);
	$("#totalDeductionsAmount").fadeOut(0);
	$("#netPayAmount").fadeOut(0);
	$("#yearToDateAmount").fadeOut(0);
	$("#yearToDatePercentageAmount").fadeOut(0);
	$("#yearToDateAmountII").fadeOut(0);
	$("#yearToDateAmountHours").fadeOut(0);
	$("#dayStatisticsAmount").fadeOut(0);
	$("#weeklyAveragesAmount").fadeOut(0);
	$("#dailyAveragesAmount").fadeOut(0);
	$("#hourlyAveragesAmount").fadeOut(0);
	$("#yearToDateLast12WeeksAmount").fadeOut(0);
	$("#yearlyEstimatesAmount").fadeOut(0);
	
	
	if(toggleCounter %2 === 0){
		$("#weeklyAveragesPaymentsAmount").fadeOut(0);
		$("#weeklyAveragesPieChart").fadeOut();
	}else { 
		$("#weeklyAveragesHoursAmount").fadeOut(0);
		$("#weeklyAveragesHoursPieChart").fadeOut();
	}
	//document.getElementById("paymentsUnitsDiv").innerHTML =" - ";
	
}


const deleteTaxPeriod = (taxPeriodNumber) => {
	taxPeriodNumber += counter;
	if (XMLHttpRequest)	{
			request = new XMLHttpRequest();
		}	else if (ActiveXObject)	{
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}	else {
			return false;
		}
	let url = "javascript/ajax/deletetaxperiod.php";
	request.open("POST", url, true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.onreadystatechange = function(){
		if(request.readyState ==4 && request.status ==200){
			let submitSuccess = document.getElementById("submitSuccessMain2");
			submitSuccess.innerHTML = 'Payslip Deleted!';
			setTimeout(function(){submitSuccess.innerHTML=" ";},1500);
			loadData(taxPeriodNumber);
		}
	}
	request.send( "taxPeriodNumber="+taxPeriodNumber);
	document.getElementById("submitSuccessMain2").innerHTML = "Deleting...";
}

//pick data from backend
function callWeekStart() {
	let url = 'javascript/ajax/weekstart2.php';
	let promiseObj = new Promise(function(resolve, reject){
	if (XMLHttpRequest)	{
		 request = new XMLHttpRequest();
	 }	else if (ActiveXObject)	{
		 request = new ActiveXObject("Microsoft.XMLHTTP");
	 }	else {return false;}
	  request.open("POST", url, true);
	  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	  request.send();
	  request.onreadystatechange = function(){
	  if (request.readyState === 4){
		 if (request.status === 200){
			let response = JSON.parse(this.responseText);
			resolve(response);
		 } else {
			reject(request.status);
		 }
	  } else {
	  }
   }
 });
 return promiseObj;
}
//SELECT TAX PRIOD FUNCTIONS
const generateStartDay =() =>{
	let selectTaxPeriodDay = document.getElementById("selectTaxPeriodDay");
	for(i=1;i<32;i++)
	{
		let dayOption = document.createElement("option");
		if (i<10){i="0"+i;}
		let textday = document.createTextNode(i);
		
		dayOption.appendChild(textday);						//option<---[text]
		selectTaxPeriodDay.appendChild(dayOption);
	}
	
}
function loadSelectTaxPeriod(){
	
	let selectTaxPeriodYear = document.getElementById("selectTaxPeriodYear");
	let selectTaxPeriodYearValue = Number(selectTaxPeriodYear.options[selectTaxPeriodYear.selectedIndex].value);
	let selectTaxPeriodMonth = document.getElementById("selectTaxPeriodMonth");
	let selectTaxPeriodMonthValue = selectTaxPeriodMonth.options[selectTaxPeriodMonth.selectedIndex].value;	
	let selectTaxPeriodDay = document.getElementById("selectTaxPeriodDay");
	let selectTaxPeriodDayValue = selectTaxPeriodDay.options[selectTaxPeriodDay.selectedIndex].value;
	
	let taxPeriodDate = selectTaxPeriodYearValue+'-'+selectTaxPeriodMonthValue+'-'+selectTaxPeriodDayValue;
	
	let taxPeriodDateString = 'taxPeriodDate='+taxPeriodDate+'&';
	
	if (XMLHttpRequest)
		{
			request = new XMLHttpRequest();
		}
			else if (ActiveXObject)
		{
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}
	else {return false;}
	let url = "javascript/ajax/loadSelectTaxPeriod.php";
	let submitSuccess = $("#submitSuccessMain");
	request.open("POST", url, true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.onreadystatechange = function(){
		if(request.readyState ==4 && request.status ==200){
			
			var response = JSON.parse(this.responseText);
					
			errorsArrayLength = Object.keys(response.errors).length;
			//submitSuccessBP.text(" ");
			if (errorsArrayLength>0){
				for (i=0; i<errorsArrayLength; i++)
				{
					submitSuccess.addClass("errorStyle");
					let errorText = "";
					errorText += response.errors[i];
					if (errorText === "Invalid date format!") {
						$('#selectTaxPeriodYear').addClass("invalidForm");
						$('#selectTaxPeriodMonth').addClass("invalidForm");
						$('#selectTaxPeriodDay').addClass("invalidForm");
					}
					else if (errorText === 'Start date is not set!'){
						$('#selectTaxPeriodYear').addClass("invalidForm");
						$('#selectTaxPeriodMonth').addClass("invalidForm");
						$('#selectTaxPeriodDay').addClass("invalidForm");
					}
					else if (errorText === 'Date Is Not Allowed!'){
					$('#selectTaxPeriodYear').addClass("invalidForm");
					$('#selectTaxPeriodMonth').addClass("invalidForm");
					$('#selectTaxPeriodDay').addClass("invalidForm");
					}
					else{
						$('#selectTaxPeriodYear').removeClass("invalidForm");
						$('#selectTaxPeriodMonth').removeClass("invalidForm");
						$('#selectTaxPeriodDay').removeClass("invalidForm");
					}
					errorText += '<br>';
					submitSuccess.html(errorText);
				}
			}	
			else{
					$('#selectTaxPeriodYear').removeClass("invalidForm");
					$('#selectTaxPeriodMonth').removeClass("invalidForm");
					$('#selectTaxPeriodDay').removeClass("invalidForm");
					taxPeriodNumber = response.taxPeriodNumber;
					
					timeSinceEpoch = timeSinceEpochOriginal + 604800000*(taxPeriodNumber-1)+weekStartArray[taxPeriodNumber]*86400000;
					
					for (let f=0;f<7;f++)	{
						let tableRow = document.getElementById("tableRow"+f).innerHTML = " ";
						let calendarRow = document.getElementById("calendarRow"+f).innerHTML = " ";
					}
					counter = 0; //need to reset this value
					createTableElements(taxPeriodNumber, timeSinceEpoch);
					generateCalendar (taxPeriodNumber,timeSinceEpoch);
					createPayoutButtons(taxPeriodNumber);
					
					loadData(taxPeriodNumber);
					submitSuccess.removeClass("errorStyle");
					submitSuccess.text('Loaded!');
					setTimeout(function(){submitSuccess.text(" ");},1500);
			}
		}
	}
	request.send(taxPeriodDateString);
	//document.getElementById("closeError").setAttribute("class", "errorTitleHide");
	submitSuccess.removeClass("errorStyle");
	submitSuccess.text("Loading...");
}

const redrawChartsOnResize = () => {
	google.charts.load('current', {'packages':['corechart']});
	
	if (resizeChartValues.holidaysPieChartVis === 1){
		if(resizeChartValues.totalHolidaysUsed>0||resizeChartValues.totalHolidaysBooked>0||resizeChartValues.holidaysNotUsed>0){
			google.charts.setOnLoadCallback(drawChartHolidays);
			function drawChartHolidays() {

			var data = google.visualization.arrayToDataTable([
				['Type', 'Days'],
				['Used', resizeChartValues.totalHolidaysUsed],
				['Booked', resizeChartValues.totalHolidaysBooked],
				['Available', resizeChartValues.holidaysNotUsed],
				]);

				var options = {
				backgroundColor: insideBoxColor,
				title: 'Holidays Pie Chart',
				slices: {  0: {offset: 0.1},
							1: {offset: 0.1},
							2: {offset: 0.1},
					},
				colors: [holidayColor, holidaysBookedColor, holidaysAvailableColor],
				is3D: true,
				};

				var chart = new google.visualization.PieChart(document.getElementById('holidayStatisticsPieChart'));

				chart.draw(data, options);
			}
		}else{
			document.getElementById('holidayStatisticsPieChart').innerHTML = "<br><br>No Data Provided<br>For Chart.";
		}
	}
	if (resizeChartValues.daysPieChartVis === 1){
		if(resizeChartValues.daysNotSelected>0||resizeChartValues.daysIn>0||resizeChartValues.daysOff>0||resizeChartValues.daysHoliday>0||
		resizeChartValues.daysHalfInHalfHol>0||resizeChartValues.daysUnpaidHoliday>0||resizeChartValues.daysInSick>0||
		resizeChartValues.daysSickness>0||resizeChartValues.daysAbsence>0||resizeChartValues.daysParental>0||resizeChartValues.daysBereavement>0||
		resizeChartValues.daysCompassionate>0){
			google.charts.setOnLoadCallback(drawChartDays);
			function drawChartDays() {

			var data = google.visualization.arrayToDataTable([
				['Type', 'Days'],
				['Not Defined', resizeChartValues.daysNotSelected],
				['Days In', resizeChartValues.daysIn],
				['Days Off', resizeChartValues.daysOff],
				['Holidays', resizeChartValues.daysHoliday],
				['Half In/Hals Off', resizeChartValues.daysHalfInHalfHol],
				['Unpaid Holiday', resizeChartValues.daysUnpaidHoliday],
				['Day In/Sick', resizeChartValues.daysInSick],
				['Sickness', resizeChartValues.daysSickness],
				['Absence', resizeChartValues.daysAbsence],
				['Paternal', resizeChartValues.daysParental],
				['Bereavement', resizeChartValues.daysBereavement],
				['Compassionate', resizeChartValues.daysCompassionate],
				]);

				var options = {
				backgroundColor: insideBoxColor,
				title: 'Days Statistics',
				slices: {  1: {offset: 0.2},
					},
				colors: [notSelectedColor, dayInColor, dayOffColor, holidayColor, halfInHalfOffColor, unpaidHolColor, dayInSickColor, sicknessColor, absenceColor, familyLeaveColor, bereavementColor, compassionateColor],
				is3D: true,
				};

				var chart = new google.visualization.PieChart(document.getElementById('dayStatisticsPieChart'));

				chart.draw(data, options);
			}
		}
		else{
			document.getElementById('dayStatisticsPieChart').innerHTML = "<br><br>No Data Provided<br>For Chart.";
		}
	}	
	if (resizeChartValues.paymentsPieChartVis === 1){
		if (resizeChartValues.totalGrossPayments >0) {
			//var deletechart = document.getElementById('paymentsPieChart').innerHTML = " ";
			//remove negative values for chart
			taxReturn = 0;
			if (resizeChartValues.additionalPayment < 0){resizeChartValues.additionalPayment = 0};
			if (resizeChartValues.additionalPayment2 < 0){resizeChartValues.additionalPayment2 = 0};
			if (resizeChartValues.additionalPayment3 < 0){resizeChartValues.additionalPayment3 = 0};
			if (resizeChartValues.taxAmount < 0 ) {taxReturn = -resizeChartValues.taxAmount};
			if (resizeChartValues.basicHoursPay >0||resizeChartValues.unsocial_prem>0||resizeChartValues.unsocial_prem_hol>0||resizeChartValues.unsocial_prem_sick>0||
			resizeChartValues.unsocial_prem_family>0|| resizeChartValues.unsocial_prem_bereavement>0||resizeChartValues.unsocial_prem_compassionate>0||
			resizeChartValues.OT1Pay>0||resizeChartValues.OT2Pay>0||resizeChartValues.enhancedHolidayPay>0||resizeChartValues.holidayPay>0||
			resizeChartValues.holidayPayment>0||resizeChartValues.saturdayExtraPay>0||resizeChartValues.sundayExtraPay>0||resizeChartValues.sicknessPay>0||
			resizeChartValues.familyPay>0||resizeChartValues.bereavementPay>0||resizeChartValues.compassionatePay>0||resizeChartValues.bankHolidayHoursPay>0||
			resizeChartValues.bankHolidayClockInBonus>0||resizeChartValues.payBack>0||resizeChartValues.pieceWork>0||resizeChartValues.SSP>0||resizeChartValues.SPP>0||
			resizeChartValues.additionalPayment>0||resizeChartValues.additionalPayment2>0||resizeChartValues.additionalPayment3>0||resizeChartValues.christmasSavingsPayment>0||
			resizeChartValues.summerSavingsPayment>0||resizeChartValues.SAP>0||resizeChartValues.salary>0||resizeChartValues.bonus>0||resizeChartValues.commissions>0)
			{
				google.charts.setOnLoadCallback(drawChartPayments);
				function drawChartPayments() {

				var data = google.visualization.arrayToDataTable([
					['Type', 'Payments'],
					['Basic Pay', resizeChartValues.basicHoursPay],
					['Uns. Premium', resizeChartValues.unsocial_prem],
					['Uns Prem. Holidays', resizeChartValues.unsocial_prem_hol],
					['Uns Prem. Sickness', resizeChartValues.unsocial_prem_sick],
					['Uns Prem. Paternity', resizeChartValues.unsocial_prem_family],
					['Uns Prem. Bereav.', resizeChartValues.unsocial_prem_bereavement],
					['Uns Prem. Compass.', resizeChartValues.unsocial_prem_compassionate],
					['Overtime 1 Pay', resizeChartValues.OT1Pay],
					['Overtime 2 Pay', resizeChartValues.OT2Pay],
					['Enhanced Holiday Pay', resizeChartValues.enhancedHolidayPay],
					['Holiday Pay', resizeChartValues.holidayPay],
					['Holiday Pay', resizeChartValues.holidayPayment],
					['Saturday Extra Pay', resizeChartValues.saturdayExtraPay],
					['Sunday Extra Pay', resizeChartValues.sundayExtraPay],
					['Sickness Pay', resizeChartValues.sicknessPay],
					['Paternity Pay', resizeChartValues.familyPay],
					['Bereavement Pay', resizeChartValues.bereavementPay],
					['Compassionate Pay', resizeChartValues.compassionatePay],
					['Bank Holiday Pay', resizeChartValues.bankHolidayHoursPay],
					['Bank Holiday Bonus', resizeChartValues.bankHolidayClockInBonus],
					['Back Pay', resizeChartValues.payBack],
					['Piece Work', resizeChartValues.pieceWork],
					['SSP', resizeChartValues.SSP],
					['SPP', resizeChartValues.SPP],
					['Add. Payment 1', resizeChartValues.additionalPayment],
					['Add. Payment 2', resizeChartValues.additionalPayment2],
					['Add. Payment 3', resizeChartValues.additionalPayment3],
					['Christmas Sav. Payment', resizeChartValues.christmasSavingsPayment],
					['Summer Sav. Payment', resizeChartValues.summerSavingsPayment],
					['SAP', resizeChartValues.SAP],
					['Salary', resizeChartValues.salary],
					['Bonus', resizeChartValues.bonus],
					['Commissions', resizeChartValues.commissions],
					['Tax Return', taxReturn],
					]);

					var options = {
					backgroundColor: insideBoxColor,
					colors: paymentsColorArray,
					slices: {  0: {offset: 0.2},
							10: {offset: 0.1},
							9: {offset: 0.1},
							13: {offset: 0.1},
							14: {offset: 0.1},
							15: {offset: 0.1},
							16: {offset: 0.1},
						},
					title: 'Payments Pie Chart',
					is3D: true,
					};

					var chart = new google.visualization.PieChart(document.getElementById('paymentsPieChart'));

					chart.draw(data, options);
				}
			}
			else{
				 document.getElementById("paymentsPieChart").innerHTML = "<br><br>No Data Provided<br>For Chart.";
			}
		}else{
				 document.getElementById("paymentsPieChart").innerHTML = "<br><br>No Chart For<br>Negative Values.";
		}
	}
	
	if (resizeChartValues.deductionsPieChartVis === 1){
		
		//no negative values for chart
		if (resizeChartValues.taxAmount < 0 ){resizeChartValues.taxAmount = 0;}
		
		if (resizeChartValues.christmasSavingsDeduction<0){resizeChartValues.christmasSavingsDeduction = 0;}
		if (resizeChartValues.summerSavingsDeduction<0){resizeChartValues.summerSavingsDeduction = 0;}
		if (resizeChartValues.taxAmount>0||resizeChartValues.NIAmount>0||resizeChartValues.unionDeduction>0||resizeChartValues.pensionAmountChart>0||
		resizeChartValues.christmasSavingsDeduction>0||resizeChartValues.summerSavingsDeduction>0||resizeChartValues.companyLoan>0||
		resizeChartValues.studentLoanDeduction>0||resizeChartValues.otherDeduction>0||resizeChartValues.otherDeduction2>0||resizeChartValues.otherDeduction3>0||
		resizeChartValues.netPay>0 || resizeChartValues.travelDeduction>0 ||resizeChartValues.taxFreeDeduction1>0 || resizeChartValues.taxFreeDeduction2 >0 || 
		resizeChartValues.taxFreeDeduction3 >0){
			google.charts.setOnLoadCallback(drawChartDeductions);
			function drawChartDeductions() {
			var data = google.visualization.arrayToDataTable([
				['Type', 'Chart'],
				['Tax', resizeChartValues.taxAmount],
				['NI', resizeChartValues.NIAmount],
				['Union', resizeChartValues.unionDeduction],
				['Pension', resizeChartValues.pensionAmountChart],
				['Christmas savings', resizeChartValues.christmasSavingsDeduction],
				['Summer savings.', resizeChartValues.summerSavingsDeduction],
				['Company Loan', resizeChartValues.companyLoan],
				['Student Loan', resizeChartValues.studentLoanDeduction],
				[resizeChartValues.otherDeductionName, resizeChartValues.otherDeduction],
				[resizeChartValues.otherDeduction2Name, resizeChartValues.otherDeduction2],
				[resizeChartValues.otherDeduction3Name, resizeChartValues.otherDeduction3],
				['Travel', resizeChartValues.travelDeductionSum ],
				[resizeChartValues.taxFreeDeduction1Name, resizeChartValues.taxFreeDeduction1],
				[resizeChartValues.taxFreeDeduction2Name, resizeChartValues.taxFreeDeduction2],
				[resizeChartValues.taxFreeDeduction3Name, resizeChartValues.taxFreeDeduction3],
				['Net Pay', resizeChartValues.netPay],
				]);

				var options = {
				backgroundColor: insideBoxColor,
				colors: deductionsColorArray,
				slices: {  15: {offset: 0.2},
					},
				title: 'Deductions Pie Chart',
				is3D: true,
				};

				var chart = new google.visualization.PieChart(document.getElementById('deductionsPieChart'));

				chart.draw(data, options);
			}
		}
		else{
			document.getElementById('deductionsPieChart').innerHTML = "<br><br>No Data Provided<br>For Chart.";
		}
	}
	if (resizeChartValues.yearToDatePieChartVis === 1){
		if(resizeChartValues.taxSum>0||resizeChartValues.NISum>0||resizeChartValues.union_deSum>0||resizeChartValues.pensionSumChart>0||resizeChartValues.chris_savSum>0||
		resizeChartValues.summer_savSum>0||resizeChartValues.companyLoanSum>0||resizeChartValues.studentLoanDeductionSum>0||resizeChartValues.other_de>0||
		resizeChartValues.resizeChartValues.add_deSum2>0||resizeChartValues.add_deSum3>0||resizeChartValues.netPaySum>0 || resizeChartValues.travelDeductionSum>0 ||
		resizeChartValues.taxFreeDeduction1Sum>0 || resizeChartValues.taxFreeDeduction2Sum >0 || resizeChartValues.taxFreeDeduction3Sum >0){
			google.charts.setOnLoadCallback(drawChartYearToDate);
			function drawChartYearToDate() {
			var data = google.visualization.arrayToDataTable([
				['Type', 'Chart'],
				['Tax', resizeChartValues.taxSum ],
				['NI', resizeChartValues.NISum ],
				['Union', resizeChartValues.union_deSum],
				['Pension', resizeChartValues.pensionSumChart],
				['Christmas savings', resizeChartValues.chris_savSum ],
				['Summeer savings.', resizeChartValues.summer_savSum ],
				['Company Loan', resizeChartValues.companyLoanSum ],
				['Student Loan', resizeChartValues.studentLoanDeductionSum],
				['Add. Deduction', resizeChartValues.other_de ],
				['Add. Deduction 2', resizeChartValues.add_deSum2 ],
				['Add. Deduction 3', resizeChartValues.add_deSum3 ],
				['Travel', resizeChartValues.travelDeductionSum ],
				['Tax Free Ded. 1', resizeChartValues.taxFreeDeduction1Sum ],
				['Tax Free Ded. 2', resizeChartValues.taxFreeDeduction2Sum ],
				['Tax Free Ded. 3', resizeChartValues.taxFreeDeduction3Sum ],
				['Net Pay', resizeChartValues.netPaySum ],
				]);

				var options = {
				backgroundColor: insideBoxColor,
				colors: deductionsColorArray,
				slices: {  15: {offset: 0.2},
					},
				title: 'Year To Date Pie Chart',
				is3D: true,
				};

				var chart = new google.visualization.PieChart(document.getElementById('yearToDatePieChart'));

				chart.draw(data, options);
			}
		}
		else{
			document.getElementById('yearToDatePieChart').innerHTML = "<br><br>No Data Provided<br>For Chart.";
		}
	}
	
	if (resizeChartValues.payStructurePieChartVis === 1){
		if (resizeChartValues.basicPaymentsPercentage>0||resizeChartValues.holidaysPercentage>0||resizeChartValues.sicknessPercentage>0||
		resizeChartValues.overtimePercentage>0||resizeChartValues.bankHolidayPercentge>0||resizeChartValues.parentalPercentage>0||
		resizeChartValues.otherPercentage>0){
			google.charts.setOnLoadCallback(drawChartYearToDatePercentages);
			function drawChartYearToDatePercentages() {
			var data = google.visualization.arrayToDataTable([
				['Name', 'Value'],
				['Basic Payments', resizeChartValues.basicPaymentsPercentage],
				['Holiday Payments', resizeChartValues.holidaysPercentage],
				['Sick Payments', resizeChartValues.sicknessPercentage],
				['Overtime Payments', resizeChartValues.overtimePercentage],
				['Bank Holiday Payments', resizeChartValues.bankHolidayPercentge],
				['Paternity Payments', resizeChartValues.parentalPercentage],
				['Other Payments', resizeChartValues.otherPercentage],
				]);

				var options = {
				slices: {  0: {offset: 0.2},
					},
				backgroundColor: insideBoxColor,
				title: 'Year To Date Percentage Pie Chart',
				is3D: true,
				colors: ['#e6e600', '#d5ff80', '#ff9999', '#cccc00', '#88cc00', '#ffcc99', '#c299ff'],
				};

				var chart = new google.visualization.PieChart(document.getElementById('yearToDatePercentagePieChart'));

				chart.draw(data, options);
			}
		}
		else
		{
			document.getElementById('yearToDatePercentagePieChart').innerHTML = "<br><br>No Data Provided<br>For Chart.";
		}
	}
	
	if (resizeChartValues.yearToDateIIPieChartVis === 1){
				
				//var deletechart = document.getElementById('paymentsPieChart').innerHTML = " ";
				//remove negative values
				let taxReturnSum = 0;
				if (resizeChartValues.add_paySum < 0){resizeChartValues.add_paySum = 0};
				if (resizeChartValues.add_pay2Sum < 0){resizeChartValues.add_pay2Sum = 0};
				if (resizeChartValues.add_pay3Sum < 0){resizeChartValues.add_pay3Sum = 0};
				if (resizeChartValues.taxReturnSum < 0 ) {taxReturnSum - resizeChartValues.taxSum};
				if (resizeChartValues.basicPaySum >0||resizeChartValues.uns_premSum>0||resizeChartValues.uns_holSum>0||resizeChartValues.uns_sickSum>0||
				resizeChartValues.uns_familySum>0|| resizeChartValues.uns_berSum>0||resizeChartValues.uns_compSum>0||resizeChartValues.ot1_paySum>0||
				resizeChartValues.ot2_paySum>0||resizeChartValues.enhol_paySum>0||resizeChartValues.hol_paySum>0||resizeChartValues.holidayPaySum>0||
				resizeChartValues.saturdayExtraPaySum>0||resizeChartValues.sundayExtraPaySum>0||resizeChartValues.sick_paySum>0||resizeChartValues.fam_paySum>0||
				resizeChartValues.ber_paySum>0||resizeChartValues.comp_paySum>0||resizeChartValues.bhol_paySum>0|| resizeChartValues.bhol_bonusSum>0||
				resizeChartValues.paybackSum>0||resizeChartValues.pieceWorkSum>0||resizeChartValues.SSP_Sum>0||resizeChartValues.SPP_Sum>0||
				resizeChartValues.add_pay2Sum>0||resizeChartValues.add_paySum>0||resizeChartValues.add_pay3Sum>0|| resizeChartValues.chris_savSum>0||
				resizeChartValues.summer_savSum>0||resizeChartValues.SAPSum>0||resizeChartValues.salarySum>0||resizeChartValues.bonusSum>0||resizeChartValues.commissionsSum>0)
				{
					google.charts.setOnLoadCallback(drawChartPayments);
					function drawChartPayments() {

					var data = google.visualization.arrayToDataTable([
						['Type', 'Payments'],
						['Basic Pay', resizeChartValues.basicPaySum],
						['Uns. Premium', resizeChartValues.uns_premSum],
						['Uns Prem. Holidays', resizeChartValues.uns_holSum],
						['Uns Prem. Sickness', resizeChartValues.uns_sickSum],
						['Uns Prem. Paternity', resizeChartValues.uns_familySum],
						['Uns Prem. Bereav.', resizeChartValues.uns_berSum],
						['Uns Prem. Compass.', resizeChartValues.uns_compSum],
						['Overtime 1 Pay', resizeChartValues.ot1_paySum],
						['Overtime 2 Pay', resizeChartValues.ot2_paySum],
						['Enhanced Holiday Pay', resizeChartValues.enhol_paySum],
						['Holiday Pay', resizeChartValues.hol_paySum],
						['Holiday Pay', resizeChartValues.holidayPaySum],
						['Saturday Extra Pay', resizeChartValues.saturdayExtraPaySum],
						['Sunday Extra Pay', resizeChartValues.sundayExtraPaySum],
						['Sickness Pay', resizeChartValues.sick_paySum],
						['Paternity Pay', resizeChartValues.fam_paySum],
						['Bereavement Pay', resizeChartValues.ber_paySum],
						['Compassionate Pay', resizeChartValues.comp_paySum],
						['Bank Holiday Pay', resizeChartValues.bhol_paySum],
						['Bank Holiday Bonus', resizeChartValues.bhol_bonusSum],
						['Back Pay', resizeChartValues.paybackSum],
						['Piece Work', resizeChartValues.pieceWorkSum],
						['SSP', resizeChartValues.SSP_Sum],
						['SPP', resizeChartValues.SPP_Sum],
						['Add. Payment 1', resizeChartValues.add_paySum],
						['Add. Payment 2', resizeChartValues.add_pay2Sum],
						['Add. Payment 3', resizeChartValues.add_pay3Sum],
						['Christmas Sav. Payment', resizeChartValues.chris_savSum],
						['Summer Sav. Payment', resizeChartValues.summer_savSum],
						['SAP', resizeChartValues.SAPSum],
						['Salary', resizeChartValues.salarySum],
						['Bonus', resizeChartValues.bonusSum],
						['Commissions', resizeChartValues.commissionsSum],
						['Tax Return', taxReturnSum],
						]);

						var options = {
						backgroundColor: insideBoxColor,
						colors: paymentsColorArray,
						slices: {  0: {offset: 0.2},
								10: {offset: 0.1},
								9: {offset: 0.1},
								13: {offset: 0.1},
								14: {offset: 0.1},
								15: {offset: 0.1},
								16: {offset: 0.1},
							},
						title: 'YTD Payments Pie Chart',
						is3D: true,
						};

						var chart = new google.visualization.PieChart(document.getElementById('yearToDateIIPieChart'));

						chart.draw(data, options);
					}
				}
				else{
					 document.getElementById("yearToDateIIPieChart").innerHTML = "<br><br>No Data Provided<br>For Chart.";
				}
			}
	
	if (resizeChartValues.yearToDateHoursPieChartVis === 1){
				if(resizeChartValues.basicHoursSum>0||resizeChartValues.ot1_unitsSum>0||resizeChartValues.ot2_unitsSum>0||resizeChartValues.enhol_unitsSum>0||
				resizeChartValues.hol_unitsSum>0||resizeChartValues.sick_unitsSum>0||resizeChartValues.fam_unitsSum>0||
				resizeChartValues.ber_unitsSum>0||resizeChartValues.comp_unitsSum>0){
					google.charts.setOnLoadCallback(drawChartDays);
					function drawChartDays() {

					var data = google.visualization.arrayToDataTable([
						['Type', 'Hours'],
						['Unpaid Breaks', resizeChartValues.unpaidBreaksLength],
						['Basic Hours', resizeChartValues.basicHoursSum],
						['Overtime 1', resizeChartValues.ot1_unitsSum],
						['Overtime 2', resizeChartValues.ot2_unitsSum],
						['Holiday', resizeChartValues.hol_unitsSum],
						['En. Holiday', resizeChartValues.enhol_unitsSum],
						['Sickness', resizeChartValues.sick_unitsSum],
						['Paternity', resizeChartValues.fam_unitsSum],
						['Bereavement', resizeChartValues.ber_unitsSum],
						['Compassionate', resizeChartValues.comp_unitsSum],
						]);

						var options = {
						backgroundColor: insideBoxColor,
						title: 'Hours Chart',
						slices: {  1: {offset: 0.2},
							},
						colors: [unpaidBreaksColor, dayInColor, overtime1Color, overtime2Color, holidayColor, holidayColor, sicknessColor, familyLeaveColor, bereavementColor, compassionateColor],
						is3D: true,
						};

						var chart = new google.visualization.PieChart(document.getElementById('yearToDateHoursPieChart'));

						chart.draw(data, options);
					}
				}
				else{
					document.getElementById('yearToDateHoursPieChart').innerHTML = "<br><br>No Data Provided<br>For Chart.";
				}
			}

		if (resizeChartValues.weeklyAveragesPieChartVis === 1){
				
				//var deletechart = document.getElementById('paymentsPieChart').innerHTML = " ";
				//remove negative values
				if (resizeChartValues.averageTax < 0 ) {resizeChartValues.averageTax = -resizeChartValues.taxAmount};
				if (resizeChartValues.averageTax >0||resizeChartValues.averageNI>0||resizeChartValues.averagePension >0||resizeChartValues.otherDeductionsAverages  > 0||
				resizeChartValues.averageBasicHoursPay >0 || resizeChartValues.averageUnsocialPrem >0|| resizeChartValues.averageOvertimePay >0||
				resizeChartValues.averageHolidayPay >0||resizeChartValues.averageSicknessPay >0|| resizeChartValues.averagePaternityPay >0|| 
				resizeChartValues.averageBerevemeantPay >0||resizeChartValues.averageCompassionatePay >0|| resizeChartValues.averageOtherPayments >0)
				{
					google.charts.setOnLoadCallback(drawChartPayments);
					function drawChartPayments() {

					var data = google.visualization.arrayToDataTable([
						['Type', 'Value'],
						['TAX', resizeChartValues.averageTax],
						['NI', resizeChartValues.averageNI],
						['Pension', resizeChartValues.averagePension],
						['Other Deductions', resizeChartValues.otherDeductionsAverages],
						['Basic Pay', resizeChartValues.averageBasicHoursPay],
						['Unsocial Pay', resizeChartValues.averageUnsocialPrem],
						['Overtime Pay', resizeChartValues.averageOvertimePay],
						['Holiday Pay', resizeChartValues.averageHolidayPay],
						['Sickness Pay', resizeChartValues.averageSicknessPay],
						['Paternity Pay', resizeChartValues.averagePaternityPay],
						['Bereavement Pay', resizeChartValues.averageBerevemeantPay],
						['Compassionate Pay', resizeChartValues.averageCompassionatePay],
						['Other Payments', resizeChartValues.averageOtherPayments],
						]);

						var options = {
						backgroundColor: insideBoxColor,
						colors: [taxAmuntColor, NIAmountColor, unionColor, pensionColor, dayInColor, overtime1Color, overtime2Color, holidayColor, sicknessColor, familyLeaveColor, bereavementColor, compassionateColor, addPay1Color],
						slices: {  0: {offset: 0.2},
								1: {offset: 0.2},
								2: {offset: 0.2},
								3: {offset: 0.2},
							},
						title: 'YTD Weekly Averages Pie Chart',
						is3D: true,
						};

						var chart = new google.visualization.PieChart(document.getElementById('weeklyAveragesPieChart'));

						chart.draw(data, options);
					}
				}
				else{
					 document.getElementById("weeklyAveragesPieChart").innerHTML = "<br><br>No Data Provided<br>For Chart.";
				}
			}
						
			if (resizeChartValues.weeklyAveragesPieChartVis === 1){
				
				//var deletechart = document.getElementById('paymentsPieChart').innerHTML = " ";
				//remove negative values
				if (resizeChartValues.averageBasicHours >0||resizeChartValues.averageOvertimeHours>0||resizeChartValues.averageHolidayHours >0||
				resizeChartValues.averageSicknessHours  > 0|| resizeChartValues.averagePaternityHours >0 || 
				resizeChartValues.averageBereveamentHours >0|| resizeChartValues.averageCompassionateHours >0|| resizeChartValues.averageUnpaidBreaksLength >0)
				{
					google.charts.setOnLoadCallback(drawChartPayments);
					function drawChartPayments() {

					var data = google.visualization.arrayToDataTable([
						['Name', 'Value'],
						['Basic Hours', resizeChartValues.averageBasicHours],
						['Overtime Hours', resizeChartValues.averageOvertimeHours],
						['Holiday Hours', resizeChartValues.averageHolidayHours],
						['Sickness Hours', resizeChartValues.averageSicknessHours],
						['Paternity Hours', resizeChartValues.averagePaternityHours],
						['Bereavement Hours', resizeChartValues.averageBereveamentHours],
						['Compassionate Hours', resizeChartValues.averageCompassionateHours],
						['Unpaid Breaks', resizeChartValues.averageUnpaidBreaksLength],
						]);

						var options = {
						backgroundColor: insideBoxColor,
						colors: [dayInColor, overtime1Color, holidayColor, sicknessColor, familyLeaveColor, bereavementColor, compassionateColor, unpaidBreaksColor],
						slices: {  0: {offset: 0.2},
							},
						title: 'YTD Weekly Averages Pie Chart',
						is3D: true,
						};

						var chart = new google.visualization.PieChart(document.getElementById('weeklyAveragesHoursPieChart'));

						chart.draw(data, options);
					}
				}
				else{
					 document.getElementById("weeklyAveragesHoursPieChart").innerHTML = "<br><br>No Data Provided<br>For Chart.";
				}
			}
				
	//yearly estimates pie chart
			if (resizeChartValues.yearlyEstimatesPieChartVis === 1){				
				//var deletechart = document.getElementById('paymentsPieChart').innerHTML = " ";
				//remove negative values
				if (resizeChartValues.estimatedTax <0 ) {resizeChartValues.estimatedTax = -resizeChartValues.estimatedTax};
				if (resizeChartValues.estimatedTax >0||resizeChartValues.estimatedNI>0||resizeChartValues.estimatedOtherDeductions>0||resizeChartValues.estimatedPension> 0|| 
				resizeChartValues.estimatedNetPay>0)
				{
					google.charts.setOnLoadCallback(drawChartPayments);
					function drawChartPayments() {

					var data = google.visualization.arrayToDataTable([
						['Type', 'Value'],
						['TAX', resizeChartValues.estimatedTax],
						['NI', resizeChartValues.estimatedNI],
						['Pension', resizeChartValues.estimatedPension],
						['Other Deductions', resizeChartValues.estimatedOtherDeductions],
						['Net Pay', resizeChartValues.estimatedNetPay],
						]);

						var options = {
						backgroundColor: insideBoxColor,
						colors: [taxAmuntColor, NIAmountColor, unionColor, pensionColor, netPayColor],
						slices: {  0: {offset: 0.2},
								1: {offset: 0.2},
								2: {offset: 0.2},
								3: {offset: 0.2},
							},
						title: 'Yearly Estimates',
						is3D: true,
						};

						var chart = new google.visualization.PieChart(document.getElementById('yearlytEstimatesPieChart'));

						chart.draw(data, options);
					}
				}
				else{
					 document.getElementById("yearlytEstimatesPieChart").innerHTML = "<br><br>No Data Provided<br>For Chart.";
				}
			}
	
	if (resizeChartValues.last3MonthsPieChartVis === 1){
		if (resizeChartValues.chris_savSumLast12Weeks<0){resizeChartValues.chris_savSumLast12Weeks = 0;}
		if (resizeChartValues.summer_savSumLast12Weeks<0){resizeChartValues.summer_savSumLast12Weeks = 0;}
		if(resizeChartValues.taxSumLast12Weeks>0||resizeChartValues.NISumLast12Weeks>0||resizeChartValues.union_deSumLast12Weeks>0||
		resizeChartValues.pensionSumLast12WeeksChart>0||resizeChartValues.chris_savSumLast12Weeks>0||resizeChartValues.summer_savSumLast12Weeks>0||
		resizeChartValues.companyLoanSumLast12Weeks>0||resizeChartValues.studentLoanDeductionSumLast12Weeks>0||other_deLast12Weeks>0||
		resizeChartValues.add_deSum2Last12Weeks>0||resizeChartValues.add_deSum3Last12Weeks>0||resizeChartValues.netPaySumLast12Weeks>0 || 
		resizeChartValues.travelDeductionSumLast12Weeks>0 || resizeChartValues.taxFreeDeduction1SumLast12Weeks>0 || 
		resizeChartValues.taxFreeDeduction2SumLast12Weeks>0|| resizeChartValues.taxFreeDeduction3SumLast12Weeks>0){
			google.charts.setOnLoadCallback(drawChartLast3Months);
			function drawChartLast3Months() {
			var data = google.visualization.arrayToDataTable([
				['Type', 'Chart'],
				['Tax', resizeChartValues.taxSumLast12Weeks],
				['NI', resizeChartValues.NISumLast12Weeks],
				['Union', resizeChartValues.union_deSumLast12Weeks],
				['Pension', resizeChartValues.pensionSumLast12WeeksChart],
				['Christmas savings', resizeChartValues.chris_savSumLast12Weeks],
				['Summer savings.', resizeChartValues.summer_savSumLast12Weeks],
				['Company Loan', resizeChartValues.companyLoanSumLast12Weeks],
				['Student Loan', resizeChartValues.studentLoanDeductionSumLast12Weeks],
				['Add. Deduction', resizeChartValues.other_deLast12Weeks],
				['Add. Deduction 2', resizeChartValues.add_deSum2Last12Weeks],
				['Add. Deduction 3', resizeChartValues.add_deSum3Last12Weeks],
				['Travel', resizeChartValues.travelDeductionSumLast12Weeks ],
				['Tax Free Ded. 1', resizeChartValues.taxFreeDeduction1SumLast12Weeks ],
				['Tax Free Ded. 2', resizeChartValues.taxFreeDeduction2SumLast12Weeks ],
				['Tax Free Ded. 3', resizeChartValues.taxFreeDeduction3SumLast12Weeks ],
				['Net Pay', resizeChartValues.netPaySumLast12Weeks],
				]);

				var options = {
				//animation: {startup: true, duration: 1000},	
				backgroundColor: insideBoxColor,
				colors: deductionsColorArray,
				slices: {  15: {offset: 0.2},
					},
				title: 'Last 3 Months Averages Pie Chart',
				is3D: true,
				};

				var chart = new google.visualization.PieChart(document.getElementById('las3MonthsPieChart'));

				chart.draw(data, options);
			}
		}
		else{
			document.getElementById('las3MonthsPieChart').innerHTML = "<br><br>No Data Provided<br>For Chart.";
		}
	}
	//document.getElementById('columnChartNetPay').innerHTML = "";
	if (resizeChartValues.last10WeeksNetChartVis === 1){
		
		if(Number(resizeChartValues.last10NetPayArray[9])>0||Number(resizeChartValues.last10DeductionsArray[9])>0||
		Number(resizeChartValues.last10NetPayArray[8])>0||Number(resizeChartValues.last10DeductionsArray[8])>0||
		Number(resizeChartValues.last10NetPayArray[7])>0||Number(resizeChartValues.last10DeductionsArray[7])>0||
		Number(resizeChartValues.last10NetPayArray[6])>0||Number(resizeChartValues.last10DeductionsArray[6])>0||
		Number(resizeChartValues.last10NetPayArray[5])>0||Number(resizeChartValues.last10DeductionsArray[5])>0||
		Number(resizeChartValues.last10NetPayArray[4])>0||Number(resizeChartValues.last10DeductionsArray[4])>0||
		Number(resizeChartValues.last10NetPayArray[3])>0||Number(resizeChartValues.last10DeductionsArray[3])>0||
		Number(resizeChartValues.last10NetPayArray[2])>0||Number(resizeChartValues.last10DeductionsArray[2])>0||
		Number(resizeChartValues.last10NetPayArray[1])>0||Number(resizeChartValues.last10DeductionsArray[1])>0||
		Number(resizeChartValues.last10NetPayArray[0])>0||Number(resizeChartValues.last10DeductionsArray[0])>0){
			google.charts.setOnLoadCallback(drawChartColumnPaidHours);
			function drawChartColumnPaidHours() {

			var data = google.visualization.arrayToDataTable([

				['TAX Period Nr.', 'Net Pay', 'Deductions' ],
				["10", Number(resizeChartValues.last10NetPayArray[9]), Number(resizeChartValues.last10DeductionsArray[9])],
				["9", Number(resizeChartValues.last10NetPayArray[8]), Number(resizeChartValues.last10DeductionsArray[8])],
				["8", Number(resizeChartValues.last10NetPayArray[7]), Number(resizeChartValues.last10DeductionsArray[7])],
				["7", Number(resizeChartValues.last10NetPayArray[6]), Number(resizeChartValues.last10DeductionsArray[6])],
				["6", Number(resizeChartValues.last10NetPayArray[5]), Number(resizeChartValues.last10DeductionsArray[5])],
				["5", Number(resizeChartValues.last10NetPayArray[4]), Number(resizeChartValues.last10DeductionsArray[4])],
				["4", Number(resizeChartValues.last10NetPayArray[3]), Number(resizeChartValues.last10DeductionsArray[3])],
				["3", Number(resizeChartValues.last10NetPayArray[2]), Number(resizeChartValues.last10DeductionsArray[2])],
				["2", Number(resizeChartValues.last10NetPayArray[1]), Number(resizeChartValues.last10DeductionsArray[1])],
				["Current", Number(resizeChartValues.last10NetPayArray[0]), Number(resizeChartValues.last10DeductionsArray[0])],
				]);

				var options = {
				legend: {position: 'none'},
				animation: {startup: true, duration: 1000},	
				bar: {groupWidth: '95%'},
				colors: [netPayColor, taxAmuntColor],
				backgroundColor: insideBoxColor,
				title: 'Last 10 Weeks Net Pay and Deductions Chart',
				isStacked: true,
				};

				var chart = new google.visualization.ColumnChart(document.getElementById('columnChartNetPay'));
				chart.draw(data, options);
			}
		}
		else{
			document.getElementById('columnChartNetPay').innerHTML = "<br><br>No Data Provided<br>For Chart.";
		}
	}
	
	if (resizeChartValues.last10WeeksPaidHoursChartVis === 1){
		var last10weeksHoursSum = 0;
		for (i=0;i<10;i++)
		{
			last10weeksHoursSum += Number(resizeChartValues.last10WorkingHoursArray[i]);
			last10weeksHoursSum += Number(resizeChartValues.last10AllHolidayHoursArray[i]);
			last10weeksHoursSum += Number(resizeChartValues.last10SickHoursArray[i]);
			last10weeksHoursSum += Number(resizeChartValues.last10FamHoursArray[i]);
			last10weeksHoursSum += Number(resizeChartValues.last10BerHoursArray[i]);
			last10weeksHoursSum += Number(resizeChartValues.last10CompHoursArray[i]);
		}

		if(last10weeksHoursSum>0){
			google.charts.setOnLoadCallback(drawChartColumn);
			function drawChartColumn() {

			var data = google.visualization.arrayToDataTable([

				['TAX Period Nr.', 'Working Hours', 'Holiday Hours', 'Sickness Hours', 'Parental Hours', 'Bereavement Hours', 'Compassionate Hours' ],
				["10", Number(resizeChartValues.last10WorkingHoursArray[9]), Number(resizeChartValues.last10AllHolidayHoursArray[9]), Number(resizeChartValues.last10SickHoursArray[9]), Number(resizeChartValues.last10FamHoursArray[9]), Number(resizeChartValues.last10BerHoursArray[9]), Number(resizeChartValues.last10CompHoursArray[9])],
				["9", Number(resizeChartValues.last10WorkingHoursArray[8]), Number(resizeChartValues.last10AllHolidayHoursArray[8]), Number(resizeChartValues.last10SickHoursArray[8]), Number(resizeChartValues.last10FamHoursArray[8]), Number(resizeChartValues.last10BerHoursArray[8]), Number(resizeChartValues.last10CompHoursArray[8])],
				["8", Number(resizeChartValues.last10WorkingHoursArray[7]), Number(resizeChartValues.last10AllHolidayHoursArray[7]), Number(resizeChartValues.last10SickHoursArray[7]), Number(resizeChartValues.last10FamHoursArray[7]), Number(resizeChartValues.last10BerHoursArray[7]), Number(resizeChartValues.last10CompHoursArray[7])],
				["7", Number(resizeChartValues.last10WorkingHoursArray[6]), Number(resizeChartValues.last10AllHolidayHoursArray[6]), Number(resizeChartValues.last10SickHoursArray[6]), Number(resizeChartValues.last10FamHoursArray[6]), Number(resizeChartValues.last10BerHoursArray[6]), Number(resizeChartValues.last10CompHoursArray[6])],
				["6", Number(resizeChartValues.last10WorkingHoursArray[5]), Number(resizeChartValues.last10AllHolidayHoursArray[5]), Number(resizeChartValues.last10SickHoursArray[5]), Number(resizeChartValues.last10FamHoursArray[5]), Number(resizeChartValues.last10BerHoursArray[5]), Number(resizeChartValues.last10CompHoursArray[5])],
				["5", Number(resizeChartValues.last10WorkingHoursArray[4]), Number(resizeChartValues.last10AllHolidayHoursArray[4]), Number(resizeChartValues.last10SickHoursArray[4]), Number(resizeChartValues.last10FamHoursArray[4]), Number(resizeChartValues.last10BerHoursArray[4]), Number(resizeChartValues.last10CompHoursArray[4])],
				["4", Number(resizeChartValues.last10WorkingHoursArray[3]), Number(resizeChartValues.last10AllHolidayHoursArray[3]), Number(resizeChartValues.last10SickHoursArray[3]), Number(resizeChartValues.last10FamHoursArray[3]), Number(resizeChartValues.last10BerHoursArray[3]), Number(resizeChartValues.last10CompHoursArray[3])],
				["3", Number(resizeChartValues.last10WorkingHoursArray[2]), Number(resizeChartValues.last10AllHolidayHoursArray[2]), Number(resizeChartValues.last10SickHoursArray[2]), Number(resizeChartValues.last10FamHoursArray[2]), Number(resizeChartValues.last10BerHoursArray[2]), Number(resizeChartValues.last10CompHoursArray[2])],
				["2", Number(resizeChartValues.last10WorkingHoursArray[1]), Number(resizeChartValues.last10AllHolidayHoursArray[1]), Number(resizeChartValues.last10SickHoursArray[1]), Number(resizeChartValues.last10FamHoursArray[1]), Number(resizeChartValues.last10BerHoursArray[1]), Number(resizeChartValues.last10CompHoursArray[1])],
				["Current", Number(resizeChartValues.last10WorkingHoursArray[0]), Number(resizeChartValues.last10AllHolidayHoursArray[0]), Number(resizeChartValues.last10SickHoursArray[0]), Number(resizeChartValues.last10FamHoursArray[0]), Number(resizeChartValues.last10BerHoursArray[0]), Number(resizeChartValues.last10CompHoursArray[0])],
				]);

				var options = {
				legend: {position: 'none'},
				animation: {startup: true, duration: 1000},	
				bar: {groupWidth: '95%'},
					
				backgroundColor: insideBoxColor,
				title: 'Last 10 Weeks Paid Hours Chart',
				colors: ['#e6e600', '#d5ff80','#ff9999','#ffcc99', '#4d4d4d', '#ffe6cc'],
				isStacked: true,
				};

				var chart = new google.visualization.ColumnChart(document.getElementById('columnChartPaidHours'));
				chart.draw(data, options);
			}
		}
		else{
			document.getElementById('columnChartPaidHours').innerHTML = "<br><br>No Data Provided<br>For Chart.";
		}
	}

	
}

// function to update first login value
const firstLoginPost =() => {
	let firstLogin = 1;
	let str = 'firstLogin='+firstLogin+'&';
	if (XMLHttpRequest)
		{
			request = new XMLHttpRequest();
		}
			else if (ActiveXObject)
		{
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}
	else {return false;}
	let url = "javascript/ajax/modals/firstLoginSubmit.php";
	request.open("POST", url, true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.onreadystatechange = function(){
		if(request.readyState ==4 && request.status ==200){
				//nothing needs to be done here
		}
	}
	request.send(str);
}

const newsModalPost =() => {
	//leave same variable name
	let newsModal = 1;
	let str = 'newsModal='+newsModal+'&';
	if (XMLHttpRequest)
		{
			request = new XMLHttpRequest();
		}
			else if (ActiveXObject)
		{
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}
	else {return false;}
	let url = "javascript/ajax/modals/newsModalSubmit.php";
	request.open("POST", url, true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.onreadystatechange = function(){
		if(request.readyState ==4 && request.status ==200){
				//nothing needs to be done here
		}
	}
	request.send(str);
}
//function to show current date on the select menus
const showCurrentDateValues = () => {
	let date = new Date();
	let currentMonth = date.getMonth();
	let currentDay = date.getDate()-1;
	
	let selectTaxPeriodMonth = document.getElementById("selectTaxPeriodMonth");
	let selectTaxPeriodDay = document.getElementById("selectTaxPeriodDay");
	
	selectTaxPeriodMonth.options.selectedIndex = currentMonth;
	selectTaxPeriodDay.options.selectedIndex = currentDay;
}
//rowValue is either negative or positive, depending on where it is clicked. f.e row 0 has -3, row six has 3, row 3 has 0.
const loadPayslipFromCalendar = (taxPeriodNumber, rowValue) => {
	counter += rowValue;
	let taxPeriodNumberNew = taxPeriodNumber + counter;
	//clear the main table and calendar
	for (let f=0;f<7;f++)	{
		let tableRow = document.getElementById("tableRow"+f).innerHTML = " ";
		let calendarRow = document.getElementById("calendarRow"+f).innerHTML = " ";
	}
	
	let weekStart = weekStartArray[taxPeriodNumberNew];
	let modTimeSinceEpoch = timeSinceEpochOriginal + 604800000*(taxPeriodNumberNew-1)+weekStart*86400000;
	
	createTableElements(taxPeriodNumberNew, modTimeSinceEpoch);
	createPayoutButtons(taxPeriodNumberNew);
	generateCalendar (taxPeriodNumberNew,modTimeSinceEpoch);
	loadData(taxPeriodNumberNew);	
}

const toggleWeeklyAverages = () => {
	
	$("#weeklyAveragesHoursShowHide").fadeIn(1000);
	$("#weeklyAveragesPaymentsShowHide").fadeOut(0);
	
	$("#weeklyAveragesHoursPieChart").fadeIn(1000);
	$("#weeklyAveragesPieChart").fadeOut(0);
	
	toggleCounter++;

}
const toggleWeeklyAverages2 = () => {
	$("#weeklyAveragesHoursShowHide").fadeOut(0);
	$("#weeklyAveragesPaymentsShowHide").fadeIn(1000);
	
	$("#weeklyAveragesPieChart").fadeIn(1000);
	$("#weeklyAveragesHoursPieChart").fadeOut(0);
	
	toggleCounter++;
	
}
const start = () => {
	$("#navBar").removeClass("boxShadow2");
	callWeekStart().then(function(myJson) {
		
		let sessionIsSet = myJson.sessionIsSet;
		
		if (sessionIsSet === false){
			window.location = "landing.php";
		} else {

			taxPeriodLimit = myJson.taxPeriodLimit;
			taxPeriodNumber = myJson.taxPeriodNumberCurrent;
			//fill the arrays of weekstart and unsHCheck
			for (let a=0; a<taxPeriodLimit; a++){
				let weekStartAr = myJson.weekStartArray[a];
				weekStartArray[a]= Number(weekStartAr);

				let unsHCheckArray = myJson.unsHCheckArray[a];
				unsHCheck[a] = Number(unsHCheckArray);
			}
		
			//when we fetch the data from the server start creating elements
			//in is neccessary to update the value of timesince epoch including the weekstart variable
			timeSinceEpoch = timeSinceEpochOriginal + 604800000*(taxPeriodNumber-1)+weekStartArray[taxPeriodNumber]*86400000;
			createTableElements(taxPeriodNumber, timeSinceEpoch);
			generateCalendar (taxPeriodNumber,timeSinceEpoch);
			createPayoutButtons(taxPeriodNumber);
			generateStartDay();
			showCurrentDateValues();
			
			let selectTaxPeriodButton = document.getElementById("selectTaxPeriodButton");
			selectTaxPeriodButton.onclick = function () {loadSelectTaxPeriod();}
			
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

			let fastBackward = document.getElementById("fastBackward");
			fastBackward.onclick = function () {fastDecreaseTaxPeriod(taxPeriodNumber);};

			let fastForward = document.getElementById("fastForward");
			fastForward.onclick = function () {fastIcreaseTaxPeriod(taxPeriodNumber);};

			let deleteTaxPeriodButton = document.getElementById("delete");
			deleteTaxPeriodButton.onclick = function(){deleteTaxPeriod(taxPeriodNumber);}
			
			let loginModalButton = document.getElementById("loginModalButton");
			loginModalButton.onclick = firstLoginPost;
			
			let newsModalButton = document.getElementById("newsModalButton");
			newsModalButton.onclick = newsModalPost;
			
			let calendarRow0 = document.getElementById("calendarRow0").onclick = function(){loadPayslipFromCalendar(taxPeriodNumber, -3);}
			let calendarRow1 = document.getElementById("calendarRow1").onclick = function(){loadPayslipFromCalendar(taxPeriodNumber, -2);}
			let calendarRow2 = document.getElementById("calendarRow2").onclick = function(){loadPayslipFromCalendar(taxPeriodNumber, -1);}
			let calendarRow4 = document.getElementById("calendarRow4").onclick = function(){loadPayslipFromCalendar(taxPeriodNumber, 1);}
			let calendarRow5 = document.getElementById("calendarRow5").onclick = function(){loadPayslipFromCalendar(taxPeriodNumber, 2);}
			let calendarRow6 = document.getElementById("calendarRow6").onclick = function(){loadPayslipFromCalendar(taxPeriodNumber, 3);}
				
			document.getElementsByTagName("BODY")[0].onresize = function() {redrawChartsOnResize()};
			
			$("#weeklyAveragesHoursShowHide").fadeOut(0);
			$("#weeklyAveragesHoursPieChart").fadeOut(0);
			document.getElementById("weeklyAveragesPaymentsShowHide").onclick = function(){toggleWeeklyAverages();}
			document.getElementById("weeklyAveragesHoursShowHide").onclick = function(){toggleWeeklyAverages2();}
		}
	})
}

//this function is neccessary for popovers to work
/*$(function () {
  $('[data-toggle="popover"]').popover()
})
$('.popover-dismiss').popover({
  trigger: 'focus'
})*/


document.addEventListener("DOMContentLoaded",start,false);
//document.addEventListener("onresize", redrawChartsOnResize);
