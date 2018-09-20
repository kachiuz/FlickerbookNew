<!--<//?php session_start();
if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( 'login_tools.php' ) ; load() ; }
?>-->
<!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="A page where user has to provide Flickerbook with his payments details in order to get 
		payslips generated properly.">
		<meta name="keywords" content="Work start time, work finish time, basic pay, basic hours, overtime, unsocial hours, unsocial payments,
		shift work, hourly rate, unpaid breaks, extra pay for weekend, bank holiday, bank holiday pay, bank holiday bonus, clock in bonus, 
		statutory sick pay, SSP, statutory paternity pay, SPP, compassionate leave, bereavement leave, back pay, back pay calculator, shift
		calendar, work calendar, day in, day off, holiday, sick leave, sickness leave, Christmas savings, summer savings, piece Work,
		salary tracker, salary calculator, working hours tracker, holiday tracker, holiday counter, payslip generator, wageslip generator,
		payslip storage, work time tracker, hourly wage calculator, payments">
		<META NAME="ROBOTS" CONTENT="INDEX, FOLLOW">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<title>Flickerbook Payments Settings</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link type="text/css" rel="stylesheet" href="style/style.css">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<script src="https://canvasjs.com/assets/script/jquery.canvasjs.min.js"></script>
		<script type="text/javascript" src="javascript/paymentsettings.js"></script>
	</head>
	<body>
		<?php require ( 'includes/navigation.html')?>
<!---------------------------Payments Settings--------------------------------------------------------------------------------->
		<div class="container-fluid containerOther marginTopOther noPadding"> <!--start of container div-->
			<div class="row">
				<div class="col-sm-6 col-xs-12">
					<div class="col-sm-12 col-xs-12 noPadding boxTitle marginBetweenElements">Payments Settings</div>
					<div class="col-sm-12 col-xs-12 insideBox border-bottom-other">
						<div class="col-sm-12 col-xs-12 noPadding"><p>
							<p class="textIndent">In order for Flickerbook to work correctly, filling the form on this page about 
							your employment and payments is essential. Additionally you 
							can use an email address of someone, who has filled the form and enabled other to use it.</p>
						</div>
						<div class="col-sm-12 col-xs-12 noPadding">
							<div class="col-sm-12 col-xs-12">
								<input class="form-control" type="text" name="paymentSettingsEmail" id="paymentSettingsEmail" placeholder="Enter Email Address" value="" size="25" maxlength="50"></input>
							</div>
							<div class="col-sm-12 col-xs-12">
								<input type="submit" value="Load" id="paymentSettingsEmailButton" name="paymentSettingsEmailButton" class="btn btn-primary button width50">
							</div>
							<div class="col-sm-12 col-xs-12 responseDiv" id="paymentSettingsEmailDivResponse">
							</div><p></p>
						</div>
					</div>
				</div>
<!---------------------------Employment info--------------------------------------------------------------------------------->			
				<div class="col-sm-6 col-xs-12">
					<div class="col-sm-12 col-xs-12 boxTitle marginBetweenElements noPadding">
						<div class="col-sm-11 col-xs-11">Employment Info</div>
						<div class="col-sm-1 col-xs-1 noPadding">
							<span class="glyphicon glyphicon-info-sign text-align-right clickable" data-toggle="modal" data-target="#employmentInfoModal">
							</span>
							<div id="employmentInfoModal" class="modal fade" role="dialog">
							  <div class="modal-dialog">
								<div class="modal-content">
								  <div class="modal-header">
									<button type="button" class="close" data-dismiss="modal">&times;</button>
									<h4 class="modal-title">Employment Info</h4>
								  </div>
								  <div class="modal-body">
									<p class="textIndent">Employment data helps you keep a track of payments received while working for different
									employers. It is also important to select a <i>week start</i> value as it is used to generate 
									a calender. Depending on an employer they calculate wages starting from Saturday, Sunday or Monday</p>
								  </div>
								  <div class="modal-footer">
									<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
								  </div>
								</div>
							  </div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-xs-12 insideBox border-bottom-other noPadding"><p>
						<div class="col-sm-5 col-xs-6 noPadding">
							<label class="noPadding" for="employerName">Employer Name:</label>
						</div>
						<div class="col-sm-7 col-xs-6 noPadding">
							<input class="form-control" type="text" name="employerName" value="" size="20" maxlength="50" id="employerName" placeholder=" Enter Employer Name"></input>
						</div>
						<div class="col-sm-5 col-xs-6 noPadding">
							<label class="noPadding" for="jobTitle">Job Title:</label>
						</div>
						<div class="col-sm-7 col-xs-6 noPadding">
							<input class="form-control" type="text" name="jobTitle" value="" size="20" maxlength="50" id="jobTitle" placeholder=" Enter Job Title"></input>
						</div>
						<div class="col-sm-6 col-xs-7 noPadding">
							<label class="noPadding" for="shiftLength">Shift length in hours:</label>
						</div>
						<div class="col-sm-6 col-xs-5 noPadding">
							<select class="form-control" name="shiftLength" id="shiftLength">
								<option value="8" selected="selected">8</option>
								<option value="12">12</option>
							<select>
						</div>
						<div class="col-sm-6 col-xs-7 noPadding">
							<label class="noPadding" for="weekStart">Work week starts at:</label>
						</div>
						<div class="col-sm-6 col-xs-5 noPadding">
							<select class="form-control" name="weekStart" id="weekStart">
								<option value="0" selected="selected">Saturday</option>
								<option value="1">Sunday</option>
								<option value="2">Monday</option>
							<select>
						</div>
						
						<div class="col-sm-6 col-xs-7 noPadding">
							<label class="noPadding" for="shiftType">Type of shift:</label>
						</div>
						<div class="col-sm-6 col-xs-5 noPadding">
							<select class="form-control" name="shiftType" id="shiftType">
								<option value="Day" selected="selected">Day</option>
								<option value="Night">Night</option>
							<select><p></p>
						</div>
					</div>
				</div>
			</div>
<!-------------------------------------Basic Pay INFO----------------------------------->			
			<div class="row">
				<div class="col-sm-6 col-xs-12">
					<div class="col-sm-12 col-xs-12 boxTitle marginBetweenElements noPadding">
						<div class="col-sm-11 col-xs-11">Basic Pay</div>
						<div class="col-sm-1 col-xs-1 noPadding">
							<span class="glyphicon glyphicon-info-sign text-align-right clickable" data-toggle="modal" data-target="#basicPayModal">
							</span>
							<div id="basicPayModal" class="modal fade" role="dialog">
							  <div class="modal-dialog">
								<div class="modal-content">
								  <div class="modal-header">
									<button type="button" class="close" data-dismiss="modal">&times;</button>
									<h4 class="modal-title">Basic Pay Info</h4>
								  </div>
								  <div class="modal-body">
									<p class="textIndent">The most important field in this section is the hourly rate. Enter the amount 
									you are getting paid per hour. Also you are welcome to specify the amount of unpaid breaks and 
									their length in minutes.</p>
								</div>
								  <div class="modal-footer">
									<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
								  </div>
								</div>
							  </div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-xs-12 insideBox border-bottom-other noPadding"><p></p>
						<div class="col-sm-5 col-xs-6 noPadding">
							<label class="noPadding" for="hourlyRate">Hourly Rate</label>
						</div>
						<div class="col-sm-7 col-xs-6 noPadding">
							<input class="form-control" type="number" name="hourlyRate" value="" size="5" maxlength="6" id="hourlyRate" placeholder="Rate">
						</div>
						<div class="col-sm-5 col-xs-6 noPadding">
							<label class="noPadding" for="unpaidBreaks">Unpaid breaks:</label>
						</div>
						<div class="col-sm-7 col-xs-6 noPadding">
							<select class="form-control" name="unpaidBreaks" id="unpaidBreaks">
								<option value="0">All Paid</option>
								<option value="1" selected="selected">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							<select>
						</div>
						<div class="col-sm-8 col-xs-8 noPadding">
							<label class="noPadding" for="breakLength">Break length in minutes:</label>
						</div>
						<div class="col-sm-4 col-xs-4 noPadding">
							<select class="form-control" name="breakLength" id="breakLength"> <select><p></p>
						</div>						
					</div>
				</div>
<!---------------------------Unsocial Hours--------------------------------------------------------------------------------->			
				<div class="col-sm-6 col-xs-12">
					<div class="col-sm-12 col-xs-12 boxTitle marginBetweenElements noPadding">
						<div class="col-sm-11 col-xs-11">Unsocial Hours and Pay</div>
						<div class="col-sm-1 col-xs-1 noPadding">
							<span class="glyphicon glyphicon-info-sign text-align-right clickable" data-toggle="modal" data-target="#unsInfoModal">
							</span>
							<div id="unsInfoModal" class="modal fade" role="dialog">
							  <div class="modal-dialog">
								<div class="modal-content">
								  <div class="modal-header">
									<button type="button" class="close" data-dismiss="modal">&times;</button>
									<h4 class="modal-title">Unsocial Hours and Pay Info</h4>
								  </div>
								  <div class="modal-body">
									<p class="textIndent">Some employers pay extra for working unsocial hours. In case unsocial bonus is paid and calculated separately,
									use this section to determine these hours and the amount earned. You are asked to provide the time when the unsocial 
									hours start and the time when they end. Also the field requiring the rate of the unsocial hours must be filled.
									In this case you must enter the difference between unsocial hour rate and the basic hour rate, you get paid for doing social hours,
									so for example if you get paid 8£ for doing social hour, and 10£ for the unsocial hour, you must enter a value of 2£
									(10£-8£ = 2£).</p>
								  </div>
								  <div class="modal-footer">
									<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
								  </div>
								</div>
							  </div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-xs-12 insideBox border-bottom-other noPadding"><p></p>
						<div class="col-sm-9 col-xs-11 noPadding">
							<label class="noPadding" for="unsociableHoursCheck">Are unsociable hours paid?</label>
						</div>
						<div class="col-sm-3 col-xs-1 noPadding">
							<input class="form-control" type="checkbox" name ="unsociableHoursCheck" id="unsociableHoursCheck">
						</div>
						<div class = "pos-relative">
							<div id="hideUnsocialHours" class="hide-input"></div>
							<div class="col-sm-7 col-xs-8 noPadding">
								<label class="noPadding" for="unsociableHourStart">Unsociable Hours start:</label>
							</div>
							<div class="col-sm-5 col-xs-4 noPadding">
								<select class="form-control" name="unsociableHourStart" id="unsociableHourStart">
									<option value="0">none</option>
									<option value="1">12</option>
									<option value="2">13</option>
									<option value="3">14</option>
									<option value="4">15</option>
									<option value="5">16</option>
									<option value="6" selected="selected">17</option>
									<option value="7">18</option>
									<option value="8">19</option>
									<option value="9">20</option>
									<option value="10">21</option>
									<option value="11">22</option>
									<option value="12">23</option>
								<select>
							</div>
							<div class="col-sm-7 col-xs-8 noPadding">
								<label class="noPadding" for="unsociableHourFinish">Unsociable Hours end:</label>
							</div>
							<div class="col-sm-5 col-xs-4 noPadding">
								<select class="form-control" name="unsociableHourFinish" id="unsociableHourFinish">
									<option value="0">none</option>
									<option value="1">0</option>
									<option value="2">1</option>
									<option value="3">2</option>
									<option value="4">3</option>
									<option value="5">4</option>
									<option value="6">5</option>
									<option value="7">6</option>
									<option value="8" selected="selected">7</option>
									<option value="9">8</option>
									<option value="10">9</option>
									<option value="11">10</option>
									<option value="12">11</option>
								<select>
							</div>
							<div class="col-sm-7 col-xs-8 noPadding">
								<label class="noPadding" for="unsociablePrem">Unsociable Hours Rate:</label>
							</div>
							<div class="col-sm-5 col-xs-4 noPadding">
								<input class="form-control" type="number" name="unsociablePrem" id="unsociablePrem" value="" size="6" maxlength="6" placeholder="Rate"><p></p>
							</div>
						</div>
					</div>
				</div>
			</div>
<!-------------------------------------Overtime Info----------------------------------->			
			<div class="row">
				<div class="col-sm-6 col-xs-12">
					<div class="col-sm-12 col-xs-12 boxTitle marginBetweenElements noPadding">
						<div class="col-sm-11 col-xs-11">Overtime Settings</div>
						<div class="col-sm-1 col-xs-1 noPadding">
							<span class="glyphicon glyphicon-info-sign text-align-right clickable" data-toggle="modal" data-target="#overtimePayModal">
							</span>
							<div id="overtimePayModal" class="modal fade" role="dialog">
							  <div class="modal-dialog">
								<div class="modal-content">
								  <div class="modal-header">
									<button type="button" class="close" data-dismiss="modal">&times;</button>
									<h4 class="modal-title">Overtime Info</h4>
								  </div>
								  <div class="modal-body">
									<p class="textIndent">If your employer pays extra for working more then 37.5 hours thick the check box and provide the necessary details below.
										In case you have just one overtime rate, the end time value should be entered bigger then the amount of actual hours worked 
										that week. You are welcome to enter which ever value you wish as long as it exceeds the amount of total hours worked. So to keep it safe
										enter a value of 168 (amount of total hours per week) or even 999. If you have a second overtime rate, then set the thresholds and apply
										the same rule for end time value as stated earlier.</p>
								</div>
								  <div class="modal-footer">
									<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
								  </div>
								</div>
							  </div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-xs-12 insideBox border-bottom-other noPadding"><p></p>
						<div class="col-sm-9 col-xs-11 noPadding">
							<label class="noPadding" for="overtimeCheck">Is Overtime paid?</label>
						</div>
						<div class="col-sm-3 col-xs-1 noPadding">
							<input class="form-control" type="checkbox" name ="overtimeCheck" id="overtimeCheck">
						</div>
						<div class = "pos-relative">
							<div id = "hideOvertimeCheckDiv" class="hide-input"></div>
							<div class="col-sm-6 col-xs-6 noPadding">
								<label class="noPadding" for="overtime1Start">Overtime 1 Start:</label>
							</div>
							<div class="col-sm-6 col-xs-6 noPadding">
								<input class="form-control" type="number" name="overtime1Start" id="overtime1Start" size="5" maxlength="7" placeholder="Hours">
							</div>
							<div class="col-sm-6 col-xs-6 noPadding">
								<label class="noPadding" for="overtime1Finish">Overtime 1 End:</label>
							</div>
							<div class="col-sm-6 col-xs-6 noPadding">
								<input class="form-control" type="number" name="overtime1Finish"  id="overtime1Finish" size="5" maxlength="7" placeholder="Hours">
							</div>
							<div class="col-sm-6 col-xs-6 noPadding">
								<label class="noPadding" for="overtime1rate">Overtime 1 Rate:</label>
							</div>
							<div class="col-sm-6 col-xs-6 noPadding">
								<input class="form-control" type="number" name="overtime1rate" id="overtime1rate"size="7" maxlength="7" placeholder="Rate">
							</div>	
							<div class="col-sm-9 col-xs-11 noPadding">
								<label class="noPadding" for="overtimeCheck2">Is there a second overtime rate?</label>
							</div>
							<div class="col-sm-3 col-xs-1 noPadding">
								<input class="form-control" type="checkbox" name ="overtimeCheck2" id="overtimeCheck2">
							</div>
						</div>	
						<div class = "pos-relative">
							<div id = "hideOvertimeCheckDiv2" class="hide-input"></div>
							<div class="col-sm-6 col-xs-6 noPadding">
								<label class="noPadding" for="overtime2start">Overtime 2 Start:</label>
							</div>
							<div class="col-sm-6 col-xs-6 noPadding">
								<input class="form-control" type="number" name="overtime2start" id="overtime2start" size="5" maxlength="7" placeholder="Hours">
							</div>
							<div class="col-sm-6 col-xs-6 noPadding">
								<label class="noPadding" for="overtime2Finish">Overtime 2 End:</label>
							</div>
							<div class="col-sm-6 col-xs-6 noPadding">
								<input class="form-control" type="number" name="overtime2Finish"  id="overtime2Finish" size="5" maxlength="7" placeholder="Hours">
							</div>
							<div class="col-sm-6 col-xs-6 noPadding">
								<label class="noPadding" for="overtime2rate">Overtime 2 Rate:</label>
							</div>
							<div class="col-sm-6 col-xs-6 noPadding">
								<input class="form-control" type="number" name="overtime2rate" id="overtime2rate"size="7" maxlength="7" placeholder="Rate"><p></p>
							</div>	
						</div>
					</div>
				</div>
<!---------------------------Holiday settings--------------------------------------------------------------------------------->			
				<div class="col-sm-6 col-xs-12">
					<div class="col-sm-12 col-xs-12 boxTitle marginBetweenElements noPadding">
						<div class="col-sm-11 col-xs-11">Holiday Settings</div>
						<div class="col-sm-1 col-xs-1 noPadding">
							<span class="glyphicon glyphicon-info-sign text-align-right clickable" data-toggle="modal" data-target="#holidayInfoModal">
							</span>
							<div id="holidayInfoModal" class="modal fade" role="dialog">
							  <div class="modal-dialog">
								<div class="modal-content">
								  <div class="modal-header">
									<button type="button" class="close" data-dismiss="modal">&times;</button>
									<h4 class="modal-title">Holiday Payments Info</h4>
								  </div>
								  <div class="modal-body">
									<p class="textIndent">Declare the start date of your holiday year, as it is different with each employer. The year in this date has to be changed 
										yearly in order for Flickerbook to accurately demonstrate the number of holidays used, booked or left unbooked. If you are getting paid 
										an enhanced rate for some of your annual leave, provide that rate. If you have a contracted number of annual leave days enter it
										in the <i>Eligable holiday days per year</i> field.</p>
								  </div>
								  <div class="modal-footer">
									<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
								  </div>
								</div>
							  </div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-xs-12 insideBox border-bottom-other noPadding"><p></p>
						<div class="col-sm-6 col-xs-6 noPadding">
							<label class="noPadding" for="holidayStartYear">Holiday Year Start</label>
						</div>
						<div class="col-sm-6 col-xs-6 noPadding">
							<div class="col-sm-4 col-xs-4 noPadding">
								<select class="form-control" name="holidayStartYear" id="holidayStartYear">
									<option value="2017">2017</option>
									<option value="2018">2018</option>
									<option value="2019">2019</option>
									<option value="2020">2020</option>
									<option value="2021">2021</option> 
								</select>
							</div>
							<div class="col-sm-4 col-xs-5 noPadding">
								<select class="form-control" name="holidayStartMonth" id="holidayStartMonth">
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
							<div class="col-sm-4 col-xs-3 noPadding">
								<select class="form-control" name="holidayStartDay" id="holidayStartDay"></select>
							</div>
						</div>
						<div class="col-sm-6 col-xs-7 noPadding">
							<label class="noPadding" for="enhancedHolidayPay">Enhanced holiday rate:</label>
						</div>
						<div class="col-sm-6 col-xs-5 noPadding">
							<input class="form-control" type="number" name="enhancedHolidayPay" id="enhancedHolidayPay" size="7" maxlength="7" placeholder="Rate">
						</div>
						<div class="col-sm-8 col-xs-9 noPadding">
							<label class="noPadding" for="holidaysPerYear">Eligible holiday days per year:</label>
						</div>
						<div class="col-sm-4 col-xs-3 noPadding">
							<input class="form-control" type="number" name="holidaysPerYear" id="holidaysPerYear" maxlength="2" size="5" placeholder="Days">
						</div>
						<div class="col-sm-9 col-xs-11 noPadding">
							<label class="noPadding" for="holidayOvertime">Holiday hours Adds to Overtime:</label>
						</div>
						<div class="col-sm-3 col-xs-1 noPadding">
							<input class="form-control" type="checkbox" name ="holidayOvertime" id="holidayOvertime"><p></p>
						</div>
					</div>
				</div>
			</div>
<!---------------------------Bank Holiday settings--------------------------------------------------------------------------------->			
			<div class="row">
				<div class="col-sm-6 col-xs-12">
					<div class="col-sm-12 col-xs-12 boxTitle marginBetweenElements noPadding">
						<div class="col-sm-11 col-xs-11">Bank Holiday Pay</div>
						<div class="col-sm-1 col-xs-1 noPadding">
							<span class="glyphicon glyphicon-info-sign text-align-right clickable" data-toggle="modal" data-target="#bankHolidayPayModal">
							</span>
							<div id="bankHolidayPayModal" class="modal fade" role="dialog">
							  <div class="modal-dialog">
								<div class="modal-content">
								  <div class="modal-header">
									<button type="button" class="close" data-dismiss="modal">&times;</button>
									<h4 class="modal-title">Bank Holiday Info</h4>
								  </div>
								  <div class="modal-body">
									<p class="textIndent">If you get paid extra for working on bank holiday, fill this section. Depending on an employer, some pay double or triple pay
										on bank holiday so choose the value from a drop down menu that suits your contract. If you get paid a bonus just for clocking in
										provide that value. If you are required to work a certain amount of hours in order to claim that bonus enter that number of
										hours in the bottom field. </p>
								</div>
								  <div class="modal-footer">
									<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
								  </div>
								</div>
							  </div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-xs-12 insideBox border-bottom-other noPadding"><p></p>
						<div class="col-sm-6 col-xs-7 noPadding">
							<label class="noPadding" for="bankHolidayPay">Bank Holiday Pay:</label>
						</div>
						<div class="col-sm-6 col-xs-5 noPadding">
							<select class="form-control" name="bankHolidayPay" id="bankHolidayPay">
								<option value="0">0</option>
								<option value="1.5">1.5</option>
								<option value="2">2.0</option>
								<option value="2.5">2.5</option>
								<option value="3">3.0</option> 
							</select> 
						</div>
						<div class="col-sm-8 col-xs-9 noPadding">
							<label class="noPadding" for="clockInBonus">Bank Holiday Clock in Bonus:</label>
						</div>
						<div class="col-sm-4 col-xs-3 noPadding">
							<input type="number" class="form-control" name="clockInBonus" id="clockInBonus" size="5" maxlength="7" placeholder="Bonus">
						</div>
						<div class="col-sm-8 col-xs-9 noPadding">
							<label class="noPadding" for="holidayOvertime">Hours Required for Bonus:</label>
						</div>
						<div class="col-sm-4 col-xs-3 noPadding">
							<input type="number" class="form-control" name="clockInBonusHours" id="clockInBonusHours" size="5" maxlength="7" placeholder="Hours"><p></p>
						</div>
					</div>
				</div>
<!---------------------------Extra Weekend settings--------------------------------------------------------------------------------->			
				<div class="col-sm-6 col-xs-12">
					<div class="col-sm-12 col-xs-12 boxTitle marginBetweenElements noPadding">
						<div class="col-sm-11 col-xs-11">Weekends Extra Pay </div>
						<div class="col-sm-1 col-xs-1 noPadding">
							<span class="glyphicon glyphicon-info-sign text-align-right clickable" data-toggle="modal" data-target="#weekendsExtraInfoModal">
							</span>
							<div id="weekendsExtraInfoModal" class="modal fade" role="dialog">
							  <div class="modal-dialog">
								<div class="modal-content">
								  <div class="modal-header">
									<button type="button" class="close" data-dismiss="modal">&times;</button>
									<h4 class="modal-title">Holiday Payments Info</h4>
								  </div>
								  <div class="modal-body">
									<p class="textIndent">If your are getting paid extra for working on weekends, specify the ratio for each weekend day: Saturday and Sunday. For
										example 1.5 for Saturday and 2.0 for Sunday.</p>
								  </div>
								  <div class="modal-footer">
									<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
								  </div>
								</div>
							  </div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-xs-12 insideBox border-bottom-other noPadding"><p></p>
						<div class="col-sm-9 col-xs-11 noPadding">
							<label class="noPadding" for="weekendHoursCheck">Paid Extra for Working Weekends?</label>
						</div>
						<div class="col-sm-3 col-xs-1 noPadding">
							<input class="form-control" type="checkbox" name ="weekendHoursCheck" id="weekendHoursCheck">
						</div>
						<div class="pos-relative">
							<div id ="hideWeekendHours" class="hide-input"></div>
							<div class="col-sm-8 col-xs-8 noPadding">
								<label class="noPadding" for="extraRateSaturday">Extra Ratio for Saturday:</label>
							</div>
							<div class="col-sm-4 col-xs-4 noPadding">
								<input class="form-control" type="number" name="extraRateSaturday" id="extraRateSaturday" value="" placeholder="Rate" size="5" maxlength="5">
							</div>
							<div class="col-sm-8 col-xs-8 noPadding">
								<label class="noPadding" for="extraRateSunday">Extra Ratio for Sunday:</label>
							</div>
							<div class="col-sm-4 col-xs-4 noPadding">
								<input class="form-control" type="number" name="extraRateSunday" id="extraRateSunday" value="" placeholder="Rate"size="6" maxlength="5"><p></p>
							</div>
						</div>
					</div>
				</div>
			</div>
<!---------------------------Sickness And Paternity Leaves--------------------------------------------------------------------------------->				
			<div class="row">
				<div class="col-sm-6 col-xs-12">
					<div class="col-sm-12 col-xs-12 boxTitle marginBetweenElements noPadding">
						<div class="col-sm-11 col-xs-11">Sickness And Paternity Leaves</div>
						<div class="col-sm-1 col-xs-1 noPadding">
							<span class="glyphicon glyphicon-info-sign text-align-right clickable" data-toggle="modal" data-target="#sicknessPayModal">
							</span>
							<div id="sicknessPayModal" class="modal fade" role="dialog">
							  <div class="modal-dialog">
								<div class="modal-content">
								  <div class="modal-header">
									<button type="button" class="close" data-dismiss="modal">&times;</button>
									<h4 class="modal-title">Sickness And Paternity Leaves Info</h4>
								  </div>
								  <div class="modal-body">
									<p class="textIndent">Each employer has a different sickness, bereavement or compassionate leave policies. You can get £89.35 
										per week Statutory Sick Pay (SSP) if you’re too ill to work. You can’t get less than the statutory amount. 
										You can get more if your company has a sick pay scheme. In case your employer has one, you can provide details about it by
										filling this section. For example if you get paid 80% sickness pay of your regular pay, select that value in the drop
										down menu.</p>
										<p class="textIndent">More information about Statutory Sick Pay can be found on
										<a href="https://www.gov.uk/statutory-sick-pay">gov.uk</a> web page.</p>
								</div>
								  <div class="modal-footer">
									<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
								  </div>
								</div>
							  </div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-xs-12 insideBox border-bottom-other noPadding"><p></p>
						<div class="col-sm-6 col-xs-7 noPadding">
							<label class="noPadding" for="SSP">Statutory Sick Pay:</label>
						</div>
						<div class="col-sm-6 col-xs-5 noPadding">
							<input class="form-control" type="number" name="SSP" id="SSP" value="" size="12" maxlength="7" placeholder="Enter £89.35 ">
						</div>
						<div class="col-sm-8 col-xs-9 noPadding">
							<label class="noPadding" for="partialSickPay">Partially Paid Sick Leave:</label>
						</div>
						<div class="col-sm-4 col-xs-3 noPadding">
							<select class="form-control" name="partialSickPay" id="partialSickPay"></select>
						</div>
						<div class="col-sm-9 col-xs-11 noPadding">
							<label class="noPadding" for="sickOvertime">Sickness Hours Adds to Overtime:</label>
						</div>
						<div class="col-sm-3 col-xs-1 noPadding">
							<input class="form-control" type="checkbox" name ="sickOvertime" id="sickOvertime" checked="checked">
						</div>
						<div class="col-sm-6 col-xs-7 noPadding">
							<label class="noPadding" for="SPP">Statutory Paternity Pay:</label>
						</div>
						<div class="col-sm-6 col-xs-5 noPadding">
							<input class="form-control" type="number" name="SPP" id="SPP"  value="" size="12" maxlength="7" placeholder="Enter £140.98">
						</div>
						<div class="col-sm-6 col-xs-7 noPadding">
							<label class="noPadding" for="SAP">Statutory Adoption Pay:</label>
						</div>
						<div class="col-sm-6 col-xs-5 noPadding">
							<input class="form-control" type="number" name="SAP" id="SAP" value="" size="12" maxlength="7" placeholder="Enter £140.98">
						</div>
						<div class="col-sm-8 col-xs-9 noPadding">
							<label class="noPadding" for="partialPaternityPay">Partially Paid Paternal Leave:</label>
						</div>
						<div class="col-sm-4 col-xs-3 noPadding">
							<select class="form-control" name="partialPaternityPay" id="partialPaternityPay"></select>
						</div>
						<div class="col-sm-9 col-xs-11 noPadding">
							<label class="noPadding" for="paternityOvertime">Sickness Hours Adds to Overtime:</label>
						</div>
						<div class="col-sm-3 col-xs-1 noPadding">
							<input class="form-control" type="checkbox" name ="paternityOvertime" id="paternityOvertime" checked="checked"><p></p>
						</div>
					</div>
				</div>
<!---------------------------Compassionate Bereavement--------------------------------------------------------------------------------->			
				<div class="col-sm-6 col-xs-12">
					<div class="col-sm-12 col-xs-12 boxTitle marginBetweenElements noPadding">
						<div class="col-sm-11 col-xs-11">Compassionate, Bereavement</div>
						<div class="col-sm-1 col-xs-1 noPadding">
							<span class="glyphicon glyphicon-info-sign text-align-right clickable" data-toggle="modal" data-target="#compBerInfoModal">
							</span>
							<div id="compBerInfoModal" class="modal fade" role="dialog">
							  <div class="modal-dialog">
								<div class="modal-content">
								  <div class="modal-header">
									<button type="button" class="close" data-dismiss="modal">&times;</button>
									<h4 class="modal-title">Compassionate, Bereavement Info</h4>
								  </div>
								  <div class="modal-body">
									<p class="textIndent">Provide Compassionate and Bereavement Leave details. If you don't get paid fully for your compassionate or 
									bereavement leave  select appropriate value from the drop down menu (for example 80 for 80% pay).</p>
									<p class="textIndent">More information about Statutory Paternity Pay can be found on
									<a href="https://www.gov.uk/employers-paternity-pay-leave">gov.uk</a> web page.</p>
								  </div>
								  <div class="modal-footer">
									<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
								  </div>
								</div>
							  </div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-xs-12 insideBox border-bottom-other noPadding"><p></p>
						<div class="col-sm-9 col-xs-10 noPadding">
							<label class="noPadding" for="partialBereavementPay">Partially Paid Bereavement:</label>
						</div>
						<div class="col-sm-3 col-xs-2 noPadding">
							<select class="form-control" name="partialBereavementPay" id="partialBereavementPay"></select>
						</div>
						<div class="col-sm-9 col-xs-11 noPadding">
							<label class="noPadding" for="bereavementOvertime">They Count Towards Overtime:</label>
						</div>
						<div class="col-sm-3 col-xs-1 noPadding">
							<input class="form-control" type="checkbox" name ="bereavementOvertime" id="bereavementOvertime">
						</div>
						<div class="col-sm-9 col-xs-10 noPadding">
							<label class="noPadding" for="partialCompassionatePay">Partially Paid Compassionate:</label>
						</div>
						<div class="col-sm-3 col-xs-2 noPadding">
							<select class="form-control" name="partialCompassionatePay" id="partialCompassionatePay"></select>
						</div>
						<div class="col-sm-9 col-xs-11 noPadding">
							<label class="noPadding" for="compOvertime">They Count Towards Overtime:</label>
						</div>
						<div class="col-sm-3 col-xs-1 noPadding">
							<input class="form-control" type="checkbox" name ="compOvertime" id="compOvertime">
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-6 col-xs-12">
					<div class="col-sm-12 col-xs-12 boxTitle marginBetweenElements noPadding">
						<div class="col-sm-11 col-xs-11">Other Payments</div>
						<div class="col-sm-1 col-xs-1 noPadding">
							<span class="glyphicon glyphicon-info-sign text-align-right clickable" data-toggle="modal" data-target="#otherInfoModal">
							</span>
							<div id="otherInfoModal" class="modal fade" role="dialog">
							  <div class="modal-dialog">
								<div class="modal-content">
								  <div class="modal-header">
									<button type="button" class="close" data-dismiss="modal">&times;</button>
									<h4 class="modal-title">Other Payments Info</h4>
								  </div>
								  <div class="modal-body">
									<p class="textIndent">In this section you can provide other payments such as salary, commissions, piece work or other bonuses.</p>
									<p>Back Pay is the amount calculated for a retroactive pay increase. This can be done in the <i>Back Pay Calculator</i> menu section.
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
					<div class="col-sm-12 col-xs-12 insideBox border-bottom-other noPadding"><p></p>
						<div class="col-sm-6 col-xs-6 noPadding">
							<label class="noPadding" for="salary">Salary:</label>
						</div>
						<div class="col-sm-6 col-xs-6 noPadding">
							<input class="form-control" type="number" name="salary" id="salary" value="" size="12" maxlength="7" placeholder="Enter Amount">
						</div>
						<div class="col-sm-6 col-xs-6 noPadding">
							<label class="noPadding" for="bonus">Bonus:</label>
						</div>
						<div class="col-sm-6 col-xs-6 noPadding">
							<input class="form-control" type="number" name="bonus" id="bonus" value="" size="12" maxlength="7" placeholder="Enter Amount">
						</div>
						<div class="col-sm-6 col-xs-6 noPadding">
							<label class="noPadding" for="commissions">Commissions:</label>
						</div>
						<div class="col-sm-6 col-xs-6 noPadding">
							<input class="form-control" type="number" name="commissions" id="commissions" value="" size="12" maxlength="7" placeholder="Enter Amount">
						</div>
						<div class="col-sm-6 col-xs-6 noPadding">
							<label class="noPadding" for="pieceWork">Piece Work:</label>
						</div>
						<div class="col-sm-6 col-xs-6 noPadding">
							<input class="form-control" type="number" name="pieceWork" id="pieceWork" value="" size="12" maxlength="7" placeholder="Enter Amount">
						</div>
						<div class="col-sm-6 col-xs-6 noPadding">
							<label class="noPadding" for="payback">Back Pay Amount: </label>
						</div>
						<div class="col-sm-6 col-xs-6 noPadding">
							<input class="form-control" type="number" name="payback" id="payback" value="" size="12" maxlength="7" placeholder="Enter Amount"><p></p>
						</div>
					</div>
				</div>
<!---------------------------Other payments--------------------------------------------------------------------------------->			
				<div class="col-sm-6 col-xs-12">
					<div class="col-sm-12 col-xs-12 boxTitle marginBetweenElements noPadding">
						<div class="col-sm-11 col-xs-11">Additional Payments</div>
						<div class="col-sm-1 col-xs-1 noPadding">
							<span class="glyphicon glyphicon-info-sign text-align-right clickable" data-toggle="modal" data-target="#additionalInfoModal">
							</span>
							<div id="additionalInfoModal" class="modal fade" role="dialog">
							  <div class="modal-dialog">
								<div class="modal-content">
								  <div class="modal-header">
									<button type="button" class="close" data-dismiss="modal">&times;</button>
									<h4 class="modal-title">Additional Payments Info</h4>
								  </div>
								  <div class="modal-body">
									<p class="textIndent">If there are still some payments or bonuses you receive as part of your contract 
									that are not covered in any above section you can add them to your wages here, by stating the additional
									payment names and their values.</p>
								  </div>
								  <div class="modal-footer">
									<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
								  </div>
								</div>
							  </div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-xs-12 insideBox border-bottom-other noPadding"><p></p>
						<div class="col-sm-6 col-xs-7 noPadding">
							<label class="noPadding" for="additionalPaymentName">Add. Payment Name: </label>
						</div>
						<div class="col-sm-6 col-xs-5 noPadding">
							<input class="form-control" type="text" name="additionalPaymentName" id="additionalPaymentName" value="" size="12" maxlength="20" placeholder="Enter Name">
						</div>
						<div class="col-sm-6 col-xs-7 noPadding">
							<label class="noPadding" for="additionalPayment">Add. Payment Amount:</label>
						</div>
						<div class="col-sm-6 col-xs-5 noPadding">
							<input class="form-control" type="number" name="additionalPayment" id="additionalPayment" value="" size="12" maxlength="7" placeholder="Enter Amount">
						</div>
						
						<div class="col-sm-6 col-xs-7 noPadding">
							<label class="noPadding" for="additionalPayment2Name">Add. Payment Name: </label>
						</div>
						<div class="col-sm-6 col-xs-5 noPadding">
							<input class="form-control" type="text" name="additionalPayment2Name" id="additionalPayment2Name" value="" size="12" maxlength="20" placeholder="Enter Name">
						</div>
						<div class="col-sm-6 col-xs-7 noPadding">
							<label class="noPadding" for="additionalPayment2">Add. Payment Amount:</label>
						</div>
						<div class="col-sm-6 col-xs-5 noPadding">
							<input class="form-control" type="number" name="additionalPayment2" id="additionalPayment2" value="" size="12" maxlength="7" placeholder="Enter Amount">
						</div>
						
						<div class="col-sm-6 col-xs-7 noPadding">
							<label class="noPadding" for="additionalPayment3Name">Add. Payment Name: </label>
						</div>
						<div class="col-sm-6 col-xs-5 noPadding">
							<input class="form-control" type="text" name="additionalPayment3Name" id="additionalPayment3Name" value="" size="12" maxlength="20" placeholder="Enter Name">
						</div>
						<div class="col-sm-6 col-xs-7 noPadding">
							<label class="noPadding" for="additionalPayment3">Add. Payment Amount:</label>
						</div>
						<div class="col-sm-6 col-xs-5 noPadding">
							<input class="form-control" type="number" name="additionalPayment3" id="additionalPayment3" value="" size="12" maxlength="7" placeholder="Enter Amount"><p></p>
						</div>
					</div>
				</div>
			</div>
			
			<div class="clearfix visible-sm"></div>
				<div class="col-sm-12 col-xs-12 noPadding marginBetweenElements">
					<div class="col-sm-10 col-xs-10 responseDiv" id="submitSuccessPayments"></div>
					<div class="col-sm-2 col-xs-2">
						<button type="button" class="btn btn-primary button" id="buttonSubmit">Update</button>
					</div>
				</div>
		</div>
		
		<?php require ( 'includes/footer.html' ) ; ?>
	</body>
</html>