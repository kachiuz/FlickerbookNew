<?php session_start();
if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( 'login_tools.php' ) ; load('landing.php') ; }
?>
<!DOCTYPE HTML>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="description" content="This is the main page, where payslips get generated.
	It shows current Tax Period payments, deductions and Year To Date information. ">
	<meta name="keywords" content="Work start time, work finish time, basic pay, basic hours, overtime, unsocial hours,
	shift work, hourly rate, bank holiday, clock in bonus, overtime calculator,
	statutory sick pay, SSP, statutory paternity pay, back pay, back pay calculator, shift
	calendar, work calendar, day in, day off, holiday, sick leave, sickness leave, Christmas savings, summer savings, piece Work,
	salary tracker, salary calculator, working hours tracker, holiday tracker, payslip generator, wage slip generator,
	payslip storage, work time tracker, Personal Allowance, Basic Tax rate, higher tax rate,
	deductions, Higher Taxable Income Threshold, Additional Tax Rate, Additional Taxable Income Threshold, National Insurance Rate,
	National Insurance Threshold, Pension, employee pension,employer pension, student loan, student loan threshold,
	student loan rate, loan, loan rate, Christmas savings, summer savings, company loan,
	National insurance calculator, tax calculator, net pay calculator, work hours calculator, statutory adoption pay, SAP, salary,
	commissions, bonus">
	<META NAME="ROBOTS" CONTENT="INDEX, FOLLOW">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
	<title>Flickerbook Main. Track your work hours, gross pay, net pay, holidays, tax and NI.</title>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link type="text/css" rel="stylesheet" href="style/style.css">
	<link type="text/css" rel="stylesheet" href="style/checkBoxStyle.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="javascript/javaScript.js"></script>
	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
</head>
<body>
	<?php require ( 'includes/navigation.html' ) ; ?>
	
		<!-- Modal For First Login-->
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
	  <div class="modal-dialog">
		<div class="modal-content">
		  <div class="modal-header login-modal-color">
			<h4 class="modal-title login-modal-title" id="loginModalLabel"><b>Welcome to Flickerbook!</b></h4>
		  </div>
		  <div class="modal-body">
			<p class="textIndent text-align-left">Hello there!</p>
			<p class="textIndent">Since is this the first time You logged in, here is a small brief out to assist You!</p>
			<p class="textIndent"><b><i>Tip 1:</b></i> The page you see after logging in is referred as the main page, where work hours are submitted and payslips get generated.
			You can always return to it by pressing on <span class="textShadowLogo">Flickerbook</span> logo.
			</p>
			<p class="textIndent"><b><i>Tip 2:</b></i> before you begin using Flickerbook, be sure to read our <i>User guide</i>. It will help you understand how Flickerbook works.</p>
			<p class="textIndent"><b><i>Tip 3:</b></i> fill the payments and deductions forms. This is essential for Flickerbook to work!</p>
			<p class="textIndent"><b><i>Tip 4:</b></i> take advantage of Flickerbooks Calendar Generator. Insert your shift pattern in to calendar in just a minute! 
			It is here to make Your life easier!</p>
			<p class="textIndent"><b><i>Tip 5:</b></i> Not all statistics and charts are shown in the main page by default. Go to <b><i>Display Settings</b></i> page and choose what to
			show.</p>
			<p class="textIndent"><b><i>Tip 6:</b></i> If you see this <span class="glyphicon glyphicon-info-sign clickable"></span> sign, click on it and helpful 
			information will be provided. </p>
			<p class="textIndent"><b><i>Tip 7:</b></i> Flip your device sidewards, if your device is large enough you can leave small notes next work hours.</p>
			<p class="textIndent">If you are ready to go, press <b><i>Got It!</b></i> </p>
			<p class="textIndent text-align-right">Thank You!</p>
		  </div>
		  <div class="modal-footer login-modal-color">
			<button type="button" class="btn btn-primary button boxShadow" data-dismiss="modal" id="loginModalButton">Got It!</button>
		  </div>
		</div>
	  </div>
	</div>
	
		<!-- Modal News-->
	<div class="modal fade" id="newsModal" tabindex="-1" role="dialog" aria-labelledby="newsModaLabel" aria-hidden="true">
	  <div class="modal-dialog">
		<div class="modal-content">
		  <div class="modal-header login-modal-color">
			<h4 class="modal-title login-modal-title" id="newsModaLabel"><b>Good news everyone!</b></h4>
		  </div>
		  <div class="modal-body">
			<p class="textIndent text-align-left">Hello there!</p>
			<p class="textIndent text-align-left">Some text here!</p>
			<p class="textIndent text-align-right">Thank You!</p>
		  </div>
		  <div class="modal-footer login-modal-color">
			<button type="button" class="btn btn-primary button boxShadow" data-dismiss="modal" id="newsModalButton">Got It!</button>
		  </div>
		</div>
	  </div>
	</div>
	<!-----------------------------TAX PERIOD NUMBER MENU LINE----------------------------------------------------->
	<div class="container taxPeriodNumberContainer">
		<div class="row boxShadow2" id="taxPeriodNumberMenu">
		
			<div class="col-md-12 col-sm-12 col-xs-12 text-align-center" id="tableCaption">
				<div class="col-md-4 col-sm-3 col-xs-hidden"></div>
					<div class="col-md-6 col-sm-6 col-xs-12 text-align-center noPadding">
						<div class="col-md-1 col-sm-1 col-xs-1 noPadding text-align-right">
							<span class="glyphicon glyphicon-triangle-left clickableNoColor textShadow" id="buttonLeft"></span>
							<span class="glyphicon glyphicon-triangle-left clickableNoColor textShadow hidden" id="buttonLeftFake"></span>
						</div>
						<div class="col-md-6 col-sm-10 col-xs-10 noPadding paddingSides2 paddingTopMenuTitle text-align-center">
							<span id="tableCaptionTitle">Tax Period</span>
						</div>
						<div class="col-md-1 col-sm-1 col-xs-1 noPadding text-align-left">
							<span class="glyphicon glyphicon-triangle-right clickableNoColor textShadow" id="buttonRight"></span>
							<span class="glyphicon glyphicon-triangle-right clickableNoColor textShadow hidden" id="buttonRightFake"></span>
						</div>
				</div>
			</div>
			
		</div>
	</div>
	<!-----------------------------SELECT PERIOD NUMBER MENU LINE----------------------------------------------------->
	<div class="container smallerContainer marginTop902">
		<div class="row" id="slectPeriodNumberMenu">
			<div class="col-md-3 xs-hidden"></div>
			<div class="col-md-6 col-sm-12 col-xs-12 marginBetweenElements marginBetweenElementsBottom">
				<div class="col-12 noPadding paddingSides1">
					<div class="col-md-5 col-sm-5 xs-hidden noPadding"></div>
					<div class="col-md-2 col-sm-2 col-xs-3 noPaddingFromSides">
						<select class="form-control larger" name="selectTaxPeriodYear" id="selectTaxPeriodYear">
							<option value="2009">2009</option>
							<option value="2010">2010</option>
							<option value="2011">2011</option>
							<option value="2012">2012</option>
							<option value="2013">2013</option>
							<option value="2014">2014</option>
							<option value="2015">2015</option>
							<option value="2016">2016</option>
							<option value="2017">2017</option>
							<option value="2018">2018</option>
							<option value="2019" selected>2019</option>
							<option value="2020">2020</option>
							<option value="2021">2021</option> 
						</select>
					</div>
					<div class="col-md-2 col-sm-2 col-xs-4 noPaddingFromSides">
						<select class="form-control larger noborderLeft" name="selectTaxPeriodMonth" id="selectTaxPeriodMonth">
							<option value="01">January</option>
							<option value="02">February</option>
							<option value="03">March</option>
							<option value="04">April</option>
							<option value="05">May</option> 
							<option value="06">June</option> 
							<option value="07">July</option> 
							<option value="08">August</option> 
							<option value="09">September</option> 
							<option value="10">October</option> 
							<option value="11">November</option> 
							<option value="12">December</option> 
						</select>
					</div>	
					<div class="col-md-1 col-sm-1 col-xs-2 noPaddingFromSides">
						<select class="form-control larger noborderLeft" name="selectTaxPeriodDay" id="selectTaxPeriodDay">
						</select>
					</div>	
					<div class="col-md-2 col-sm-2 col-xs-3 paddingSides1 paddindTopLoadButton">
							<button type="button" class="btn btn-primary button boxShadow" id="selectTaxPeriodButton">Load</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-------------------------------TABLE AND CALENDAR---------------------------------------------------------->
	<div class="container smallerContainer mainBackground marginBetweenElements2"> <!--start of container div-->
		<div class="row">
			<div class="col-md-3 hidden-xs"></div>
			<div class="col-md-6 col-sm-12 col-xs-12">
				<div class="col-sm-12 col-xs-12 noPadding paddingSides1">
					<div class="col-sm-12 col-xs-12 boxTitleNoBottomBorder textShadow  noPadding">
						<span id="tableCaption2"> Tax Period</span>
					</div>
					<div class="col-sm-12 col-xs-12 tableRowWithtopBorder tableCaption noPadding">
						<div class="col-sm-3 col-xs-4 text-align-left noPadding paddingSides1">Day Type</div>
						<div class="col-sm-2 col-xs-3">Date</div>
						<div class="col-sm-4 col-xs-5">Start/Finish</div>
						<div class="col-sm-3  hidden-xs">Notes</div>
					</div>
					<div class="col-12 noPadding boxShadow" id="loadImageMainTable">
						<img class="pic-sm pic-xs" src="pics2/EXfZ.gif" alt="Loading">
					</div>
					<div class="col-12 noPadding hidden boxShadow" id="loadMainTable">
						<div class="col-12 tableRow noPadding" id="tableRow0"> </div>
						<div class="col-12 tableRow noPadding" id="tableRow1"> </div>
						<div class="col-12 tableRow noPadding" id="tableRow2"> </div>
						<div class="col-12 tableRow noPadding" id="tableRow3"> </div>
						<div class="col-12 tableRow noPadding" id="tableRow4"> </div>
						<div class="col-12 tableRow noPadding" id="tableRow5"> </div>
						<div class="col-12 tableRow noPadding" id="tableRow6"> </div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-3 hidden-xs"></div>
			<div class="col-md-6 col-sm-12 col-xs-12">
			<div class="col-sm-12 col-xs-12 noPadding paddingSides1">
				
		<!---------------------------------------SAVINGS BUTTONS-------------------------------->
				<div class="col-12 marginBetweenElements marginBetweenElementsBottom noPadding hidden" id="paySavingsDiv">
					<div class="col-sm-6 col-xs-12 savingsButtons" id="payChristmasSavings"></div>
					<div class="col-sm-6 col-xs-12 savingsButtons" id="paySummerSavings"></div>
				</div>
		<!---------------------------------------GENERATE BUTTON-------------------------------->		
				<div class="col-sm-12 col-xs-12 marginBetweenElements marginBetweenElementsBottom noPadding">
					<div class="col-sm-9 col-xs-8 responseDiv" id="submitSuccessMain"></div>
					<div class="col-sm-3 col-xs-4">
						<button type="button" class="btn btn-primary button boxShadow" id="generateButton">Generate</button>
					</div>
				</div>
				</div>
			</div>
		</div>
		
			<!-----------------------------------CALENDAR-------------------------------------------->
		<div class="row">
			<div class="col-md-3 hidden-xs"></div>
			<div class="col-md-6 col-sm-12 col-xs-12">
				<div class="col-12 noPadding paddingSides1">
					<div class="col-12 boxTitleCalendar paddingBottom">
						<span class="glyphicon glyphicon-triangle-top clickableNoColor" id="buttonUp"></span>
						<span class="glyphicon glyphicon-fast-forward clickableNoColor rotate90" id="fastBackward"></span>
						<span class="glyphicon glyphicon-triangle-top clickableNoColor hidden" id="buttonUpFake"></span>
						<span class="glyphicon glyphicon-fast-forward clickableNoColor hidden rotate90" id="fastBackwardFake"></span>
						<span id="calendarCaption" class="textShadow">2019</span>
						<span class="glyphicon glyphicon-fast-backward clickableNoColor hidden rotate90" id="fastForwardFake"></span>
						<span class="glyphicon glyphicon-triangle-bottom clickableNoColor hidden" id="buttonDownFake"></span>
						<span class="glyphicon glyphicon-fast-backward clickableNoColor rotate90" id="fastForward"></span>
						<span class="glyphicon glyphicon-triangle-bottom clickableNoColor" id="buttonDown"></span>
					</div>
					<div class="col-12 tableRow noPadding" id="dayRow">
						<div class="col-xs-calDN col-sm-calDN calendarHeading">&nbsp </div>
						<div class="col-xs-calD col-sm-calD calendarHeading" id ="dayName0"></div>
						<div class="col-xs-calD col-sm-calD calendarHeading" id ="dayName1"></div>
						<div class="col-xs-calD col-sm-calD calendarHeading" id ="dayName2"></div>
						<div class="col-xs-calD col-sm-calD calendarHeading" id ="dayName3"></div>
						<div class="col-xs-calD col-sm-calD calendarHeading" id ="dayName4"></div>
						<div class="col-xs-calD col-sm-calD calendarHeading" id ="dayName5"></div>
						<div class="col-xs-calD col-sm-calD calendarHeading" id ="dayName6"></div>
					</div>
					<div class="col-12 boxShadow noPadding" id="loadImageCalendar">
						<img class="pic-sm pic-xs" src="pics2/EXfZ.gif" alt="Loading">
					</div>
					<div class="col-12 boxShadow noPadding hidden" id="loadCalendar">
						<div class="col-12 calendarRow noPadding clickable2" id="calendarRow0"></div>
						<div class="col-12 calendarRow noPadding clickable2" id="calendarRow1"></div>
						<div class="col-12 calendarRow noPadding clickable2" id="calendarRow2"></div>
						<div class="col-12 calendarRow noPadding currentWeek" id="calendarRow3">
							<div class="currentWeekFilter" id="test"></div>
						</div>
						<div class="col-12 calendarRow noPadding clickable2" id="calendarRow4"></div>
						<div class="col-12 calendarRow noPadding clickable2" id="calendarRow5"></div>
						<div class="col-12 calendarRow noPadding clickable2" id="calendarRow6"></div>
					</div>
					<!---------------------------------CALENDAR BUTTONS------------------------------------------------>
					<div class="col-12 marginBetweenElements text-align-center noPadding hidden">
						<div class="btn-group" role="group" aria-label="Basic example">
						  <button type="button" class="btn btn-primary button" data-toggle="modal" data-target="#3monthsCalendar">3 Months</button>
							<div id="3monthsCalendar" class="modal fade" role="dialog">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" class="close" data-dismiss="modal">&times;</button>
											<h4 class="modal-title">3 Months Calendar</h4>
										</div>
										<div class="modal-body" id="3monthsCalendarBody">
											<p>This function is under developement.</p>
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
										</div>
									</div>
								</div>
							</div>
						  <button type="button" class="btn btn-primary button" data-toggle="modal" data-target="#6monthsCalendar">6 Months</button>
							<div id="6monthsCalendar" class="modal fade" role="dialog">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" class="close" data-dismiss="modal">&times;</button>
											<h4 class="modal-title">6 Months Calendar</h4>
										</div>
										<div class="modal-body" id="6monthsCalendarBody">
											<p>This function is under developement.</p>
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
										</div>
									</div>
								</div>
							</div>
						  <button type="button" class="btn btn-primary button" data-toggle="modal" data-target="#12monthsCalendar">12 Months</button>
							<div id="12monthsCalendar" class="modal fade" role="dialog">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" class="close" data-dismiss="modal">&times;</button>
											<h4 class="modal-title">12 Months Calendar</h4>
										</div>
										<div class="modal-body" id="6monthsCalendarBody">
											<p>This function is under developement.</p>
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-----------------------------------------------------------PAYMENTS----------------------------------------------------------->
		<div class="row">
			<div class="col-md-3 hidden-xs"></div>
			<div class="col-md-6 col-sm-12 col-xs-12">
				<div class="col-12 noPadding paddingSides1">
					<div class="col-12 noPadding boxTitle marginBetweenElements textShadow">Payments</div>
					<div class="col-12 noPadding tableRow">
						<div class="col-sm-5 col-xs-4 noPadding paymentsHeading">Payments</div>
						<div class="col-sm-2 col-xs-2 noPadding paymentsHeading align-right">Units</div>
						<div class="col-sm-3 col-xs-3 noPadding paymentsHeading align-right">Rate</div>
						<div class="col-sm-2 col-xs-3 noPadding paymentsHeading align-right">£.pp&nbsp;</div>
						
					</div>
					<div class="col-sm-12 col-xs-12 noPadding insideBox landingTextPayments paddingSides2">
						<div class="col-sm-5 col-xs-4 noPadding" id="paymentsNamesDiv">Basic Hours</div>
						<div class="col-sm-2 col-xs-2 noPadding align-right" id="paymentsUnitsDiv">0</div>
						<div class="col-sm-3 col-xs-3 noPadding align-right" id="paymentsRateDiv">0</div>
						<div class="col-sm-2 col-xs-3 noPadding align-right" id="paymentsAmountDiv">0</div>
					</div>
					<div class="col-sm-12 col-xs-12 noPadding tableRow boxShadow">
						<div class="col-sm-9 col-xs-9 noPadding totalGrossPaymentsName">Total Gross Payments</div>
						<div class="col-sm-3 col-xs-3 noPadding" id="totalGrossPaymentsAmount"><span id="totalGrossPaymentsAmountText">0</span></div>
					</div>
					<div class="col-sm-12 col-xs-12 insideBoxColor noChartText hidden noPadding chartStyleNoTopBorder boxShadow" id="paymentsPieChartShowHide">
						<div id="paymentsPieChart" class="col-sm-12 col-xs-12 noChartText chartStyleNoBorder chartStyle"></div>
						<div id="paymentsPieChartNoPremium" class="col-sm-12 col-xs-12 noPremium hidden">
							<br>Charts Are Visible to Premium Members.<br><br>
						</div>
					</div>
				</div>
			</div>
		</div>
			<!-----------------------------------------------------DEDUCTIONS------------------------------------------>
		
		<div class="row">
			<div class="col-md-3 hidden-xs"></div>
			<div class="col-md-6 col-sm-12 col-xs-12">
				<div class="col-12 noPadding paddingSides1">
			
					<div class="col-sm-12 col-xs-12 boxShadow noPadding">
						<div class="col-sm-12 col-xs-12 noPadding boxTitle marginBetweenElements textShadow">Tax Free Deductions</div>
						<div class="col-sm-12 col-xs-12 noPadding insideBox">
							<div id="taxFreeDeductions landingTextPayments">
								<div class="col-sm-9 col-xs-8 noPadding landingTextPayments border-right"id="taxFreeDeductionsNamesDiv">None</div>
								<div class="col-sm-3 col-xs-4 noPadding landingTextPayments align-right" id="taxFreeDeductionsAmountDiv">0</div>
								<div class="col-sm-9 col-xs-8 noPadding landingTextPayments border-right hidden "id="taxFreePensionNameDiv">Pension</div>
								<div class="col-sm-3 col-xs-4 noPadding landingTextPayments hidden align-right" id="taxFreePensionAmountDiv">0</div>
								<div class="col-sm-9 col-xs-8 noPadding landingTextPayments border-right hidden "id="taxFreeTravelNamesDiv">Travel</div>
								<div class="col-sm-3 col-xs-4 noPadding landingTextPayments hidden align-right" id="taxFreeTravelAmountDiv">0</div>
								<div class="col-sm-9 col-xs-8 noPadding landingTextPayments border-right hidden "id="taxFreeDeduction1NamesDiv">Deduction 1</div>
								<div class="col-sm-3 col-xs-4 noPadding landingTextPayments hidden align-right" id="taxFreeDeduction1AmountDiv">0</div>
								<div class="col-sm-9 col-xs-8 noPadding landingTextPayments border-right hidden "id="taxFreeDeduction2NamesDiv">Deduction 2</div>
								<div class="col-sm-3 col-xs-4 noPadding landingTextPayments hidden align-right" id="taxFreeDeduction2AmountDiv">0</div>
								<div class="col-sm-9 col-xs-8 noPadding landingTextPayments border-right hidden "id="taxFreeDeduction3NamesDiv">Deduction 3</div>
								<div class="col-sm-3 col-xs-4 noPadding landingTextPayments hidden align-right" id="taxFreeDeduction3AmountDiv">0</div>
							</div>	
						</div>
						<div class="col-sm-12 col-xs-12 noPadding tableRow borderBottom">
							<div class="col-sm-9 col-xs-8 noPadding totalGrossPaymentsName border-right">Total Taxable Payments</div>
							<div class="col-sm-3 col-xs-4 noPadding" id="totalTaxablePaymentsAmount"><span id="totalTaxablePaymentsAmountText">0</span></div>
						</div>
					</div>
				
					<div class="col-sm-12 col-xs-12 noPadding boxShadow">
						<div class="col-sm-12 col-xs-12 noPadding boxTitle marginBetweenElements textShadow">Deductions</div>
						<div class="col-sm-12 col-xs-12 noPadding insideBox">
								<div class="col-sm-9 col-xs-8 noPadding border-right landingTextPayments"id="deductionsNamesDiv">TAX<br></div>
								<div class="col-sm-3 col-xs-4 noPadding align-right landingTextPayments" id="deductionsAmountDiv">0</div>
						</div>
						<div class="col-sm-12 col-xs-12 noPadding totaDeductionsRow">
								<div class="col-sm-9 col-xs-8 border-right noPadding landingTextPayments">Total Deductions</div>
								<div class="col-sm-3 col-xs-4 noPadding align-right landingTextPayments" id="totalDeductionsAmount">0</div>
						</div>
						<div class="col-sm-12 col-xs-12 noPadding netPayRow">
								<div class="col-sm-9 col-xs-8 border-right noPadding">Net Pay</div>
								<div class="col-sm-3 col-xs-4 noPadding" id="netPayAmount">0</div>
						</div>
						<div class="col-sm-12 col-xs-12 insideBoxColor noChartText hidden noPadding chartStyleNoTopBorder" id="deductionsPieChartShowHide">
							<div id="deductionsPieChart" class="col-sm-12 col-xs-12 noChartText chartStyleNoBorder chartStyle"></div>
							<div id="deductionsPieChartNoPremium" class="col-sm-12 col-xs-12 noPremium hidden"><br>
							Charts Are Visible to Premium Members.<br><br>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-----------------------------------------------------------Year To Date----------------------------------------------------------->
		<div class="row">
			<div class="col-md-3 hidden-xs"></div>
			<div class="col-md-6 col-sm-12 col-xs-12">
				<div class="col-sm-12 col-xs-12 noPadding paddingSides1">
					<div class="col-sm-12 col-xs-12 noPadding boxTitle marginBetweenElements textShadow">Year To Date</div>
					<div class="col-sm-12 col-xs-12 noPadding insideBox borderBottom boxShadow">
						<div class="col-sm-9 col-xs-8 noPadding landingTextPayments border-right" id="yearToDateNames">TAX</div>
						<div class="col-sm-3 col-xs-4 noPadding landingTextPayments align-right" id="yearToDateAmount">0</div>
					</div>
					<div class="col-sm-12 col-xs-12 insideBoxColor noChartText hidden noPadding chartStyleNoTopBorder boxShadow" id="YTDPieChartShowHide">
						<div id="yearToDatePieChart" class="col-sm-12 col-xs-12 noChartText chartStyleNoBorder chartStyle"></div>
						<div id="yearToDatePieChartNoPremium" class="col-sm-12 col-xs-12 noPremium hidden"><br>
							Charts Are Visible to Premium Members.<br><br>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-----------------------------------------------------------Yarly Estimates----------------------------------------------------------->
		<div class="row">
			<div class="col-md-3 hidden-xs"></div>
			<div class="col-md-6 col-sm-12 col-xs-12 hidden" id="yearlyEstimates">
				<div class="col-sm-12 col-xs-12 noPadding paddingSides1">
					<div class="col-sm-12 col-xs-12 noPadding boxTitle marginBetweenElements">
						<div class="col-sm-11 col-xs-10 noPadding textShadow" id="yearlyEstimatesTitle">Yearly Estimates</div>
						<div class="col-sm-1 col-xs-2 noPadding text-align-right">
							<span class="glyphicon glyphicon-info-sign clickable" data-toggle="modal" data-target="#yearlyEstimatesModal">
							</span>
							<div id="yearlyEstimatesModal" class="modal fade" role="dialog">
							  <div class="modal-dialog">
								<div class="modal-content">
								  <div class="modal-header">
									<button type="button" class="close" data-dismiss="modal">&times;</button>
									<h4 class="modal-title">Yearly Estimates Info</h4>
								  </div>
								  <div class="modal-body">
									<p class="textIndent">Yearly estimates are calculated based on Your weekly averages values. These values are multiplied
									by the number of tax periods per year, which is either 52 or 53 for weekly paid employees. 
									Estimates become more accurate, as the end of the Tax year draws closer.
									</p>
								  </div>
								  <div class="modal-footer">
									<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
								  </div>
								</div>
							  </div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-xs-12 noPadding insideBox borderBottom boxShadow">
						<div class="col-sm-9 col-xs-8 noPadding landingTextPayments border-right" id="yearlyEstimatesNames">TAX</div>
						<div class="col-sm-3 col-xs-4 noPadding landingTextPayments align-right" id="yearlyEstimatesAmount">0</div>
						<div class="col-sm-3 col-xs-4 noPadding align-right landingTextPayments hidden" id="yearlyEstimatesAmountHid"></div>
					</div>
					<div class="col-sm-12 col-xs-12 insideBoxColor noChartText hidden noPadding chartStyleNoTopBorder boxShadow" id="yearlyEstimatesPieChartShowHide">
						<div id="yearlytEstimatesPieChart" class="col-sm-12 col-xs-12 noChartText chartStyleNoBorder chartStyle"></div>
						<div id="yearlytEstimatesPieChartNoPremium" class="col-sm-12 col-xs-12 noPremium hidden"><br>
							Charts Are Visible to Premium Members.<br><br>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-----------------------------------------------------------Year To Date Pay Structure----------------------------------------------------------->
		<div class="row">
			<div class="col-md-3 hidden-xs"></div>
			<div class="col-md-6 col-sm-12 col-xs-12 hidden" id="payStructure">
				<div class="col-sm-12 col-xs-12 noPadding paddingSides1">
					<div class="col-sm-12 col-xs-12 noPadding boxTitle marginBetweenElements">
						<div class="col-sm-11 col-xs-10 noPadding textShadow">YTD Pay Structure</div>
						<div class="col-sm-1 col-xs-2 noPadding text-align-right">
							<span class="glyphicon glyphicon-info-sign clickable" data-toggle="modal" data-target="#yearToDatePayStructureModal">
							</span>
							<div id="yearToDatePayStructureModal" class="modal fade" role="dialog">
							  <div class="modal-dialog">
								<div class="modal-content">
								  <div class="modal-header">
									<button type="button" class="close" data-dismiss="modal">&times;</button>
									<h4 class="modal-title">Year To Date Pay Structure Info</h4>
								  </div>
								  <div class="modal-body">
											<p class="textIndent">This section demonstrate a percentage structure of your payments.</p>
											<p class="textIndent">Basic Pay consists of regular hourly pay and unsocial hours pay.</p>
											<p class="textIndent">Holiday payments consists of normal, enhanced and unsocial holiday payments.</p>
											<p class="textIndent">Sickness payments consists of hourly paid sickness leave, unsocial sickness hours and SSP.</p>
											<p class="textIndent">Overtime payments is a sum, received for doing all overtime rates.</p>
											<p class="textIndent">Paternity payments consists of paid paternity hours, unsocial paternity hours, SAP and SPP.</p>
											<p class="textIndent">Bank holiday payments consists of Bank Holiday hours and clock in bonuses.</p>
											<p class="textIndent">If you recieved payments, that do not fall in to nay of the above categorie, they will be summed to "other payments."</p>
								  </div>
								  <div class="modal-footer">
									<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
								  </div>
								</div>
							  </div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-xs-12 noPadding insideBox borderBottom boxShadow">
						<div class="col-sm-9 col-xs-8 noPadding border-right landingTextPayments" id="yearToDatePercentageNames">Basic Pay</div>
						<div class="col-sm-3 col-xs-4 noPadding align-right landingTextPayments" id="yearToDatePercentageAmount">0</div>
						<div class="col-sm-3 col-xs-4 noPadding align-right landingTextPayments hidden" id="yearToDatePercentageAmountHid"></div>
					</div>
					<div class="col-sm-12 col-xs-12 insideBoxColor noChartText hidden noPadding chartStyleNoTopBorder boxShadow" id="YTDPSPieChartShowHide">
						<div id="yearToDatePercentagePieChart" class="col-sm-12 col-xs-12 noChartText chartStyleNoBorder chartStyle"></div>
						<div id="yearToDatePercentagePieChartNoPremium" class="col-sm-12 col-xs-12 noPremium hidden"><br>
						Charts Are Visible to Premium Members.<br><br></div>
					</div>
				</div>
			</div>
		</div>
		<!-----------------------------------------------------------Year To Payments Totals----------------------------------------------------------->
		<div class="row">
			<div class="col-md-3 hidden-xs"></div>
			<div class="col-md-6 col-sm-12 col-xs-12 hidden" id="YTDPayments">
				<div class="col-sm-12 col-xs-12 noPadding paddingSides1">
					<div class="col-sm-12 col-xs-12 noPadding boxTitle marginBetweenElements">
						<div class="col-sm-11 col-xs-10 noPadding textShadow">Year To Date Payments</div>
						<div class="col-sm-1 col-xs-2 noPadding text-align-right">
							<!-- Trigger the modal with a button -->
							<span class="glyphicon glyphicon-info-sign clickable" data-toggle="modal" data-target="#yearToDatePaymentsTotalsModal">
							</span>
							<div id="yearToDatePaymentsTotalsModal" class="modal fade" role="dialog">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" class="close" data-dismiss="modal">&times;</button>
											<h4 class="modal-title">Year To Date Payments Info</h4>
										</div>
										<div class="modal-body">
											<p class="textIndent">All payments received during the Tax Year are displayed in this table.</p>
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-xs-12 noPadding  insideBox borderBottom boxShadow">
						<div class="col-sm-9 col-xs-8 noPadding landingTextPayments border-right" id="yearToDateNamesII">Basic Pay</div>
						<div class="col-sm-3 col-xs-4 noPadding landingTextPayments align-right" id="yearToDateAmountII">0</div>
						<div class="col-sm-3 col-xs-4 noPadding landingTextPayments align-right hidden" id="yearToDateAmountIIHid"></div>
					</div>
					<div class="col-sm-12 col-xs-12 insideBoxColor noChartText hidden noPadding chartStyleNoTopBorder boxShadow" id="yearToDateIIPieChartShowHide">
						<div id="yearToDateIIPieChart" class="col-sm-12 col-xs-12 noChartText chartStyleNoBorder chartStyle"></div>
						<div id="yearToDateIIPieChartNoPremium" class="col-sm-12 col-xs-12 noPremium hidden"><br>
						Charts Are Visible to Premium Members.<br><br></div>
					</div>
				</div>
			</div>
		</div>
			<!-----------------------------------------------------------Year To Date Hours Totals----------------------------------------------------------->
		<div class="row">
			<div class="col-md-3 hidden-xs"></div>
			<div class="col-md-6 col-sm-12 col-xs-12 hidden" id="YTDHours">
				<div class="col-sm-12 col-xs-12 noPadding paddingSides1">
					<div class="col-sm-12 col-xs-12 noPadding boxTitle marginBetweenElements">
						<div class="col-sm-11 col-xs-10 noPadding textShadow">Year To Date Hours</div>
						<div class="col-sm-1 col-xs-2 noPadding text-align-right">
							<span class="glyphicon glyphicon-info-sign clickable" data-toggle="modal" data-target="#yearToDateHoursTotalsModal">
							</span>
							<div id="yearToDateHoursTotalsModal" class="modal fade" role="dialog">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" class="close" data-dismiss="modal">&times;</button>
											<h4 class="modal-title">Year To Date Hours Info</h4>
										</div>
										<div class="modal-body">
											<p class="textIndent">This table displays total hours amounts done during the Tax Year.</p>
											<p class="textIndent">Total Paid Hours Spent At Work are equal to the sum of Total Basic Hours and Overtime Hours.</p>
											<p class="textIndent">Total Hours spent at work include hours you get paid for and unpaid breaks.</p>
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-xs-12 noPadding insideBox borderBottom boxShadow">
						<div class="col-sm-9 col-xs-8 noPadding landingTextPayments border-right" id="yearToDateNamesHours">Hours Spent At Work</div>
						<div class="col-sm-3 col-xs-4 noPadding landingTextPayments align-right" id="yearToDateAmountHours">0</div>
						<div class="col-sm-3 col-xs-4 noPadding landingTextPayments align-right hidden" id="yearToDateAmountHoursHid"></div>
					</div>
					<div class="col-sm-12 col-xs-12 insideBoxColor noChartText hidden noPadding chartStyleNoTopBorder boxShadow hidden" id="yearToDateHoursPieChartShowHide">
						<div id="yearToDateHoursPieChart" class="col-sm-12 col-xs-12 noChartText chartStyleNoBorder chartStyle"></div>
						<div id="yearToDateHoursPieChartNoPremium" class="col-sm-12 col-xs-12 noPremium hidden">
							<br>Charts Are Visible to Premium Members.<br><br>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-----------------------------------------------------------Year To Date Days Totals----------------------------------------------------------->
		<div class="row">
			<div class="col-md-3 hidden-xs"></div>
			<div class="col-md-6 col-sm-12 col-xs-12 hidden" id="YTDDays">
				<div class="col-sm-12 col-xs-12 noPadding paddingSides1">
					<div class="col-sm-12 col-xs-12 noPadding boxTitle marginBetweenElements">
						<div class="col-sm-11 col-xs-10 noPadding textShadow">Year To Date Days</div>
						<div class="col-sm-1 col-xs-2 noPadding text-align-right">
							<span class="glyphicon glyphicon-info-sign clickable" data-toggle="modal" data-target="#yearToDateDaysTotalsModal">
							</span>
							<div id="yearToDateDaysTotalsModal" class="modal fade" role="dialog">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" class="close" data-dismiss="modal">&times;</button>
											<h4 class="modal-title">Year To Date Days Info</h4>
										</div>
										<div class="modal-body">
											<p class="textIndent">Here You can find the number of days you worked or had day off's to date. Other type off days are displayed as well.</p>
											<p class="textIndent">Days since last sick is displayed for current date, which means that even if you skip forward or backward through
											your payslips, it's value does not change.</p>
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-xs-12 noPadding insideBox borderBottom boxShadow">
						<div class="col-sm-9 col-xs-8 noPadding landingTextPayments border-right" id="dayStatisticsNames">Days In</div>
						<div class="col-sm-3 col-xs-4 noPadding landingTextPayments align-right" id="dayStatisticsAmount">0</div>
						<div class="col-sm-3 col-xs-4 noPadding landingTextPayments align-right hidden" id="dayStatisticsAmountHid"></div>
					</div>
									
					<div class="col-sm-12 col-xs-12 insideBoxColor noChartText hidden noPadding chartStyleNoTopBorder boxShadow" id="daysPieChartShowHide">
						<div id="dayStatisticsPieChart" class="col-sm-12 col-xs-12 noChartText chartStyleNoBorder chartStyle"></div>
						<div id="dayStatisticsPieChartNoPremium" class="col-sm-12 col-xs-12 noPremium hidden">
							<br>Charts Are Visible to Premium Members.<br><br>
						</div>
					</div>
				</div>
			</div>
		</div>
	<!-----------------------------------------------------------Holidays----------------------------------------------------------->
		<div class="row">
			<div class="col-md-3 hidden-xs"></div>
			<div class="col-md-6 col-sm-12 col-xs-12 hidden" id="holidaysSection">
				<div class="col-sm-12 col-xs-12 noPadding paddingSides1">
					<div class="col-sm-12 col-xs-12 noPadding boxTitle marginBetweenElements">
						<div class="col-sm-11 col-xs-10 noPadding textShadow">Holidays</div>
						<div class="col-sm-1 col-xs-2 noPadding text-align-right">
							<span class="glyphicon glyphicon-info-sign clickable" data-toggle="modal" data-target="#holidayStatisticsModal">
							</span>
							<div id="holidayStatisticsModal" class="modal fade" role="dialog">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" class="close" data-dismiss="modal">&times;</button>
											<h4 class="modal-title">Holidays Info</h4>
										</div>
										<div class="modal-body">
											<p class="textIndent">This table displays holiday statistics such as booked, used, earned holiday days. It also shows how many days have passed
											since your last holidays and how many days left till your next one.</p>
											<p class="textIndent">Important! Holidays are shown on current date, so even if you skip forwards or backwards through your payslips, values in this section will not change!
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-xs-12 noPadding insideBox borderBottom boxShadow">
						<div class="col-sm-9 col-xs-8 noPadding landingTextPayments border-right" id="holidayStatisticsNames">Holidays Used</div>
						<div class="col-sm-3 col-xs-4 noPadding landingTextPayments align-right" id="holidayStatisticsAmount">0</div>
						<div class="col-sm-3 col-xs-4 noPadding landingTextPayments align-right hidden" id="holidayStatisticsAmountHid"></div>
					</div>				
					<div class="col-sm-12 col-xs-12 insideBoxColor noChartText hidden noPadding chartStyleNoTopBorder boxShadow" id="holidayPieChartShowHide">
						<div id="holidayStatisticsPieChart" class="col-sm-12 col-xs-12 noChartText chartStyleNoBorder chartStyle"></div>
						<div id="holidayStatisticsPieChartNoPremium" class="col-sm-12 col-xs-12 noPremium hidden">
							<br>Charts Are Visible to Premium Members.<br><br>
						</div>
					</div>
				</div>
			</div>
		</div>
<!-----------------------------------------------------------Year To Date Weekly Averages----------------------------------------------------------->
		<div class="row">
			<div class="col-md-3 hidden-xs"></div>
			<div class="col-md-6 col-sm-12 col-xs-12 hidden"  id="weeklyAverages">
				<div class="col-sm-12 col-xs-12 noPadding paddingSides1">
					<div class="col-sm-12 col-xs-12 noPadding boxTitle marginBetweenElements">
						<div class="col-sm-11 col-xs-10 noPadding textShadow">YTD Weekly Averages</div>
						<div class="col-sm-1 col-xs-2 noPadding text-align-right">
							<span class="glyphicon glyphicon-info-sign clickable" data-toggle="modal" data-target="#YTDWeeklyAveragesModal">
							</span>
							<div id="YTDWeeklyAveragesModal" class="modal fade" role="dialog">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" class="close" data-dismiss="modal">&times;</button>
											<h4 class="modal-title">Year To Date Weekly Averages Info</h4>
										</div>
										<div class="modal-body">
											<p class="textIndent">In this section you can find out your average earnings and deductions per week during the Tax year.
											To calculate this Flickerbook uses the Total amounts earned or deducted and divide them by the number of a current Tax Period.
											For example, if you have worked 37.5 hours on tax period no. 1 and 41.5 hours on tax period  no 2,
											the result of average hours worked after second Tax period would be (37.5+41.5)/2 = 39.5.</p>
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-xs-12 noPadding insideBox borderBottom boxShadow">
						<div class="col-sm-9 col-xs-8 noPadding landingTextPayments border-right" id="weeklyAveragesNames">TAX</div>
						<div class="col-sm-3 col-xs-4 noPadding landingTextPayments align-right" id="weeklyAveragesAmount">0</div>
						<div class="col-sm-3 col-xs-4 noPadding landingTextPayments align-right hidden" id="weeklyAveragesAmountHid"></div>
						
						<div class="col-sm-12 col-xs-12 noPadding" id="weeklyAveragesPaymentsShowHide">
							<div class="col-sm-9 col-xs-8 noPadding landingTextPayments border-right" id="weeklyAveragesPaymentsNames">TAX</div>
							<div class="col-sm-3 col-xs-4 noPadding landingTextPayments align-right" id="weeklyAveragesPaymentsAmount">0</div>
							<div class="col-sm-3 col-xs-4 noPadding landingTextPayments align-right hidden" id="weeklyAveragesPaymentsAmountHid">0</div>
						</div>
						<div class="col-sm-12 col-xs-12 noPadding" id="weeklyAveragesHoursShowHide">
							<div class="col-sm-9 col-xs-8 noPadding landingTextPayments border-right" id="weeklyAveragesHoursNames">TAX</div>
							<div class="col-sm-3 col-xs-4 noPadding landingTextPayments align-right" id="weeklyAveragesHoursAmount">0</div>
							<div class="col-sm-3 col-xs-4 noPadding landingTextPayments align-right hidden" id="weeklyAveragesHoursAmountHid">0</div>
						</div>
						
					</div>
						<div class="col-sm-12 col-xs-12 insideBoxColor noChartText hidden noPadding chartStyleNoTopBorder boxShadow" id="weeklyAveragesPieChartShowHide">
							<div id="weeklyAveragesPieChart" class="col-sm-12 col-xs-12 noChartText chartStyleNoBorder chartStyle"></div>
							<div id="weeklyAveragesHoursPieChart" class="col-sm-12 col-xs-12 noChartText chartStyleNoBorder chartStyle"></div>
							<div id="weeklyAveragesPieChartNoPremium" class="col-sm-12 col-xs-12 noPremium hidden">
								<br>Charts Are Visible to Premium Members.<br><br>
							</div>
						</div>
				</div>
			</div>
		</div>
			<!-----------------------------------------------------------Year To Date Daily Averages----------------------------------------------------------->
		<div class="row">
			<div class="col-md-3 hidden-xs"></div>	
			<div class="col-md-6 col-sm-12 col-xs-12 hidden" id="dailyAverages">
				<div class="col-sm-12 col-xs-12 noPadding paddingSides1">
					<div class="col-sm-12 col-xs-12 noPadding boxTitle marginBetweenElements">
						<div class="col-sm-11 col-xs-10 noPadding textShadow">YTD Daily Averages</div>
						<div class="col-sm-1 col-xs-2 noPadding text-align-right">
							<span class="glyphicon glyphicon-info-sign clickable" data-toggle="modal" data-target="#YTDDailyAveragesModal">
							</span>
							<div id="YTDDailyAveragesModal" class="modal fade" role="dialog">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" class="close" data-dismiss="modal">&times;</button>
											<h4 class="modal-title">Year To Date Daily Averages Info</h4>
										</div>
										<div class="modal-body">
											<p class="textIndent">This table displays two types of daily averages statistics. </p>
											<p class="textIndent">The first one, shows daily averages for every day in:
											The more payments you have, that do not require you to work, like holiday, sick or paternity pay, the higher the values
											in this section will be.To simply put, it just takes all your Gross and  Net Pay and divides it by the number of Days In.
											Same rule applies to deductions.</p>
											<p class="textIndent">The second one, shows daily averages for all days associated with work, this includes holidays, unpaid holidays, sick, paternity and other
											leave days. The more leave days you have per year, the smaller average values will be calculated in this section.</p>
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-xs-12 noPadding insideBox borderBottom boxShadow">
						<div class="col-sm-9 col-xs-8 noPadding landingTextPayments border-right" id="dailyAveragesNames">Gross Pay For Day In</div>
						<div class="col-sm-3 col-xs-4 noPadding landingTextPayments align-right" id="dailyAveragesAmount">0</div>
						<div class="col-sm-3 col-xs-4 noPadding landingTextPayments align-right hidden" id="dailyAveragesAmountHid"></div>
					</div>
					<div id="dailyAveragesPieChart" class="col-sm-12 col-xs-12 noChartText chartStyleFullBorder hidden"></div>
					<div id="dailyAveragesPieChartNoPremium" class="col-sm-12 col-xs-12 noPremium hidden">
						<br>Charts Are Visible to Premium Members.<br><br>
					</div>
				</div>
			</div>
		</div> 
<!-----------------------------------------------------------Year To Date Hourly Averages----------------------------------------------------------->
		<div class="row">
			<div class="col-md-3 hidden-xs"></div>
			<div class="col-md-6 col-sm-12 col-xs-12 hidden"  id="hourlyAverages">
				<div class="col-sm-12 col-xs-12 noPadding paddingSides1">
					<div class="col-sm-12 col-xs-12 noPadding boxTitle marginBetweenElements">
						<div class="col-sm-11 col-xs-10 noPadding textShadow">YTD Hourly Averages</div>
						<div class="col-sm-1 col-xs-2 noPadding text-align-right">
							<span class="glyphicon glyphicon-info-sign clickable" data-toggle="modal" data-target="#YTDHourlyAveragesModal">
							</span>
							<div id="YTDHourlyAveragesModal" class="modal fade" role="dialog">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" class="close" data-dismiss="modal">&times;</button>
											<h4 class="modal-title">Year To Date Hourly Averages Info</h4>
										</div>
										<div class="modal-body">
											<p class="textIndent">This section displays three types of hourly averages.</p>
											<p class="textIndent">The first one shows hourly averages rates for All Paid Hours that you spent at work: only day in hours are
											used for calculation.<p>
											<p class="textIndent">The second one shows hourly averages rates for All Hours In: it includes unpaid breaks, so if you have
											unpaid breaks, this rate will be lower the the first one, if you do not, then it will be identical to the first rate.<p>
											<p class="textIndent">The third one shows hourly averages for All Paid hours, including holiday, sick, and paternity leave hours, so this rate
											will be the lowest of all three.<p>
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-xs-12 noPadding insideBox borderBottom boxShadow">
						<div class="col-sm-9 col-xs-8 noPadding landingTextPayments border-right" id="hourlyAveragesNames">Paid Hours Avr. Gross Pay</div>
						<div class="col-sm-3 col-xs-4 noPadding landingTextPayments align-right" id="hourlyAveragesAmount">0</div>
						<div class="col-sm-3 col-xs-4 noPadding landingTextPayments align-right hidden" id="hourlyAveragesAmountHid"></div>
					</div>
					<div id="hourlyAveragesPieChart" class="col-sm-12 col-xs-12 noChartText chartStyleFullBorder hidden"></div>
					<div id="hourlyAveragesPieChartNoPremium" class="col-sm-12 col-xs-12 noPremium hidden">
						<br>Charts Are Visible to Premium Members.<br><br>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-3 hidden-xs"></div>
				<!-----------------------------------------------------------Last 3 Months Weekly Averages----------------------------------------------------------->
			<div class="col-md-6 col-sm-12 col-xs-12 hidden" id="last3MonthsAverages">
				<div class="col-sm-12 col-xs-12 noPadding paddingSides1">
					<div class="col-sm-12 col-xs-12 noPadding boxTitle marginBetweenElements">
						<div class="col-sm-11 col-xs-10 noPadding textShadow">Last 3 Months Averages</div>
						<div class="col-sm-1 col-xs-2 noPadding text-align-right">
							<span class="glyphicon glyphicon-info-sign clickable" data-toggle="modal" data-target="#las12WeeksModal">
							</span>
							<div id="las12WeeksModal" class="modal fade" role="dialog">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" class="close" data-dismiss="modal">&times;</button>
											<h4 class="modal-title">Last 3 Months Averages Info</h4>
										</div>
										<div class="modal-body">
											<p class="textIndent">Shows the last 13 weeks average earnings and deductions. Values in this section are handy for those, who wish to apply for
											mortgage or a personal loan.</p>
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-xs-12 noPadding insideBox borderBottom boxShadow">
						<div class="col-sm-9 col-xs-8 noPadding border-right landingTextPayments" id="yearToDateLast12WeeksNames">TAX</div>
						<div class="col-sm-3 col-xs-4 noPadding align-right landingTextPayments" id="yearToDateLast12WeeksAmount">0</div>
						<div class="col-sm-3 col-xs-4 noPadding align-righ landingTextPaymentst hidden" id="yearToDateLast12WeeksAmountHid"></div>
					</div>
				
				
					<div class="col-sm-12 col-xs-12 insideBoxColor noChartText hidden noPadding chartStyleNoTopBorder boxShadow" id="last3MonthsPieChartShowHide">
						<div id="las3MonthsPieChart" class="col-sm-12 col-xs-12 chartStyleNoBorder chartStyle"></div>
						<div id="las3MonthsPieChartNoPremium" class="col-sm-12 col-xs-12 noPremium hidden">
							<br>Charts Are Visible to Premium Members.<br><br>
						</div>
					</div>
				</div>
			</div>
		</div>
<!-----------------------------------------------------------Last 10 Weeks Net Pay Chart----------------------------------------------------------->
		<div class="row">
			<div class="col-md-3 hidden-xs"></div>
			<div class="col-md-6 col-sm-12 col-xs-12 hidden" id="last10WeeksNetPayChartShowHide">
				<div class="col-sm-12 col-xs-12 noPadding paddingSides1">
					<div class="col-sm-12 col-xs-12 boxTitle textShadow marginBetweenElements">Last 10 Weeks Net Pay</div>
					<div id="columnChartNetPay" class="col-sm-12 col-xs-12 noChartText chartStyle chartStyleNoTopBorder boxShadow"></div>
					<div id="columnChartNetPayNoPremium"  class="col-sm-12 col-xs-12 noPremium hidden"><br>
						Charts Are Visible to Premium Members.<br><br></div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-3 hidden-xs"></div>
			<!-----------------------------------------------------------Last 10 Weeks Paid Hours----------------------------------------------------------->
			<div class="col-md-6 col-sm-12 col-xs-12 hidden" id="last10WeeksPaidHoursChartShowHide">
				<div class="col-sm-12 col-xs-12 noPadding paddingSides1">
					<div class="col-sm-12 col-xs-12 boxTitle textShadow marginBetweenElements">Last 10 Weeks Paid Hours</div>
					<div id="columnChartPaidHours" class="col-sm-12 col-xs-12 noChartText chartStyle chartStyleNoTopBorder boxShadow"></div>
					<div id="columnChartPaidHoursNoPremium"  class="col-sm-12 col-xs-12 noPremium hidden"><br>
					Charts Are Visible to Premium Members.<br><br></div>
				</div>
			</div>
		</div>
			<!----------------------------------------------------End of Charts and data----------------------------------------------------->
		<div class="row">
			<div class="col-md-3 hidden-xs"></div>
			<div class="col-md-6 col-sm-12 col-xs-12 paddingBottom">
				<div class="marginBetweenElements">
					<div class="col-sm-9 col-xs-8 responseDiv" id="submitSuccessMain2"></div>
					<div class="col-sm-3 col-xs-4 ">
						<button type="button" class="btn btn-primary button boxShadow" id="delete">Delete Payslip</button>
					</div>
				</div>
			</div>
		</div>
	</div><!--end of container-->
	<?php require ( 'includes/footerBT4.html' ) ; ?>
</body>
</html>
