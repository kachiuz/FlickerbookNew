<?php session_start();
if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( 'login_tools.php' ) ; load() ; }
?>
<!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="A page where user has to provide Flickerbook with his deductions details in order to get 
		payslips generated properly.">
		<meta name="keywords" content="salary tracker, salary calculator, working hours tracker, holiday tracker, holiday counter, payslip 
		generator, wage slip generator,	payslip storage, work time tracker, hourly wage calculator, payments,Personal Allowance, Basic Tax 
		rate, higher tax rate, payslip deductions, Higher Taxable Income Threshold, Additional Tax Rate, Additional Taxable Income Threshold,
		National Insurance Rate, National Insurance Threshold, Pension, Pension Deductions, employee pension,employer pension, student loan,
		student loan threshold, student loan rate, loan, loan rate, union, union deduction, Christmas savings deduction, summer savings 
		deduction, company loan.">
		<META NAME="ROBOTS" CONTENT="INDEX, FOLLOW">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<title>Flickerbook Deductions Settings, provide deductions info such as, National Insurance and Tax.</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link type="text/css" rel="stylesheet" href="style/style.css">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<script src="https://canvasjs.com/assets/script/jquery.canvasjs.min.js"></script>
		<script type="text/javascript" src="javascript/deductionsettings.js"></script>
	</head>
	<body>
		<?php require ( 'includes/navigation.html')?>
<!---------------------------Deductions Settings--------------------------------------------------------------------------------->	
		<div class="container-fluid containerOther marginTopOther noPadding">
			<div class="row">
				<div class="col-sm-6 col-xs-12">
					<div class="col-sm-12 col-xs-12 boxTitle marginBetweenElements noPadding">Deductions Settings</div>
					<div class="col-sm-12 col-xs-12 insideBox border-bottom-other noPadding">
						<p class="textIndent">Answer the questions about your deductions below.</p> 
						<p class="textIndent">If you are not sure what your deductions settings are (TAX and NI), default
						values are provided. If this is the first time, you are using this page, you must press <b>Update</b> button at the bottom,
						otherwise deductions wont be calculated properly.</p>
						<p></p>
					</div>	
				</div>
				<div class="col-sm-6 col-xs-12">
					<div class="col-sm-12 col-xs-12 boxTitle marginBetweenElements noPadding">
						<div class="col-sm-11 col-xs-11">TAX</div>
						<div class="col-sm-1 col-xs-1 noPadding">
							<span class="glyphicon glyphicon-info-sign text-align-right clickable" data-toggle="modal" data-target="#taxInfoModal">
							</span>
							<div id="taxInfoModal" class="modal fade" role="dialog">
							  <div class="modal-dialog">
								<div class="modal-content">
								  <div class="modal-header">
									<button type="button" class="close" data-dismiss="modal">&times;</button>
									<h4 class="modal-title">Tax Info</h4>
								  </div>
								  <div class="modal-body">
									<p class="textIndent">If you earn less the the Personal Allowance per year, you do not have to pay any taxes. If your <b>taxable</b> income is
									32,000£ or lower, you will have to pay the basic Tax rate, which now is 20%.<p>
									<p class="textIndent"> Personal allowances, basic tax rate and taxable income thresholds are provided in the table below.</p>
									<table class="table hidden-xs visible-sm-up">
										<thead>
										  <tr>
											<th>Tax Year</th>
											<th>Personal Allowance</th>
											<th>Basic Rate</th>
											<th>Taxable Income</th>
										  </tr>
										</thead>
									  <tr>
										<td>2017/2018</td>
										<td>11500</td>
										<td>20%</td>
										<td>£0-32,000</td>
									  </tr>
									  <tr>
										<td>2018/2019</td>
										<td>11850</td>
										<td>20%</td>
										<td>£0-34,500</td>
									  </tr>
									</table>
									<table class="table-bordered visible-xs">
										<thead>
										  <tr>
											<th>Tax Year</th>
											<th>Personal Allowance</th>
											<th>Basic Rate</th>
											<th>Taxable Income</th>
										  </tr>
										</thead>
									  <tr>
										<td>2017/2018</td>
										<td>11500</td>
										<td>20%</td>
										<td>£0-32,000</td>
									  </tr>
									  <tr>
										<td>2018/2019</td>
										<td>11850</td>
										<td>20%</td>
										<td>£0-34,500</td>
									  </tr>
									</table>
									<p class="textIndent"> If however your earnings exceed the basic tax rate threshold, additional tax rates will be applied. Their values
									are shown in the table below.</p>
									<table class="table-bordered visible-xs">
										<thead>
										  <tr>
											<th>Tax Year</th>
											<th>Higher Rate</th>
											<th>Taxable Income</th>
											<th>Add Rate</th>
											<th>Taxable Income</th>
										  </tr>
										 </thead>
									  <tr>
										<td>2017/2018</td>
										<td>40%</td>
										<td>£32,001-150,000</td>
										<td>45%</td>
										<td>>£150,000</td>
									  </tr>
									  <tr>
										<td>2018/2019</td>
										<td>40%</td>
										<td>£34,501-150,000</td>
										<td>45%</td>
										<td>>£150,000</td>
									  </tr>
									</table>
									<table class="table hidden-xs visible-sm-up">
										<thead>
										  <tr>
											<th>Tax Year</th>
											<th>Higher Rate</th>
											<th>Taxable Income</th>
											<th>Add Rate</th>
											<th>Taxable Income</th>
										  </tr>
										 </thead>
									  <tr>
										<td>2017/2018</td>
										<td>40%</td>
										<td>£32,001-150,000</td>
										<td>45%</td>
										<td>>£150,000</td>
									  </tr>
									  <tr>
										<td>2018/2019</td>
										<td>40%</td>
										<td>£34,501-150,000</td>
										<td>45%</td>
										<td>>£150,000</td>
									  </tr>
									</table>
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
							<label class="noPadding" for="personalAllowance">Personal Allowance: </label>
						</div>
						<div class="col-sm-6 col-xs-6 noPadding">
							<input class="form-control" type="number" name="personalAllowance" id="personalAllowance" value="11500" size="5" maxlength="5" placeholder="Value">
						</div>
						<div class="col-sm-6 col-xs-6 noPadding">
							<label class="noPadding" for="taxRate">Basic Tax Rate:</label>
						</div>
						<div class="col-sm-6 col-xs-6 noPadding">
							<input class="form-control" type="number" name="taxRate" id="taxRate" value="20" size="3" maxlength="2" placeholder="Rate">
						</div>
						<div class="col-sm-6 col-xs-6 noPadding">
							<label class="noPadding" for="higherTaxRate">Higher Tax Rate:</label>
						</div>
						<div class="col-sm-6 col-xs-6 noPadding">
							<input class="form-control" type="number" name="higherTaxRate" id="higherTaxRate" value="40" size="3" maxlength="2" placeholder="Rate">
						</div>
						<div class="col-sm-9 col-xs-9 noPadding">
							<label class="noPadding" for="higherTaxThreshold">Higher Income Tax Threshold:</label>
						</div>
						<div class="col-sm-3 col-xs-3 noPadding">
							<input class="form-control" type="number" name="higherTaxThreshold" id="higherTaxThreshold" value="32000" size="5" maxlength="5" placeholder="Value">
						</div>
						<div class="col-sm-6 col-xs-6 noPadding">
							<label class="noPadding" for="additionalTaxRate">Additional Tax Rate:</label>
						</div>
						<div class="col-sm-6 col-xs-6 noPadding">
							<input class="form-control"  type="number" name="additionalTaxRate" id="additionalTaxRate" value="45" size="3" maxlength="2" placeholder="Rate">
						</div>
						<div class="col-sm-9 col-xs-9 noPadding">
							<label class="noPadding" for="additionalTaxThreshold">Add. Tax Income Threshold: </label>
						</div>
						<div class="col-sm-3 col-xs-3 noPadding">
							<input class="form-control" type="number" name="additionalTaxThreshold" id="additionalTaxThreshold" value="150000" size="6" maxlength="6" placeholder="Value">
							<p></p>
						</div>
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-sm-6 col-xs-12">
					<div class="col-sm-12 col-xs-12 boxTitle marginBetweenElements noPadding">
						<div class="col-sm-11 col-xs-11">National Insurance </div>
						<div class="col-sm-1 col-xs-1 noPadding">
							<span class="glyphicon glyphicon-info-sign text-align-right clickable" data-toggle="modal" data-target="#NIInfoModal">
							</span>
							<div id="NIInfoModal" class="modal fade" role="dialog">
							  <div class="modal-dialog">
								<div class="modal-content">
								  <div class="modal-header">
									<button type="button" class="close" data-dismiss="modal">&times;</button>
									<h4 class="modal-title">National Insurance Info</h4>
								  </div>
								  <div class="modal-body">
									<p class="textIndent">The table below provides National insurance rates and weekly thresholds. If you earn less the the threshold, you
											don't pay any national insurance.
										<table class="table">
											<thead>
											  <tr>
												<th>Tax Year</th>
												<th>NI Rate</th>
												<th>NI Threshold</th>
											  </tr>
											 </thead>
										  <tr>
											<td>2017/2018</td>
											<td>12%</td>
											<td>157£</td>
										  </tr>
										  <tr>
											<td>2018/2019</td>
											<td>12%</td>
											<td>162£</td>
										  </tr>
										</table>
										<p class="textIndent">More information about TAX and NI can be found on the
										<a href="https://www.gov.uk/government/publications/tax-and-tax-credit-rates-and-thresholds-for-2017-18/tax-and-tax-credit-rates-and-thresholds-for-2017-18">
										gov.uk</a> web page.
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
							<label class="noPadding" for="NIRate">NI Rate:</label>
						</div>
						<div class="col-sm-6 col-xs-6 noPadding">
							<input class="form-control" type="number" name="NIRate" id="NIRate" value="12" size="3" maxlength="2" placeholder="Rate">
						</div>
						<div class="col-sm-6 col-xs-6 noPadding">
							<label class="noPadding" for="NIthreshold">NI Threshold:</label>
						</div>
						<div class="col-sm-6 col-xs-6 noPadding">
							<input class="form-control" type="number" name="NIthreshold" id="NIthreshold" value="157" size="3" maxlength="4" placeholder="Value">
						</div>
						<div class="col-sm-6 col-xs-6 noPadding">
							<label class="noPadding" for="addNIRate">Additional NI Rate:</label>
						</div>
						<div class="col-sm-6 col-xs-6 noPadding">
							<input class="form-control" type="number" name="addNIRate" id="addNIRate" value="2" size="3" maxlength="2" placeholder="Rate">
						</div>
						<div class="col-sm-6 col-xs-7 noPadding">
							<label class="noPadding" for="addNIThreshold">Additional NI Threshold:</label>
						</div>
						<div class="col-sm-6 col-xs-5 noPadding">
							<input class="form-control" type="number" name="addNIThreshold" id="addNIThreshold" value="866" size="3" maxlength="4" placeholder="Value">
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-xs-12">
					<div class="col-sm-12 col-xs-12 boxTitle marginBetweenElements noPadding">
						<div class="col-sm-11 col-xs-11">Pension Contributions</div>
						<div class="col-sm-1 col-xs-1 noPadding">
							<span class="glyphicon glyphicon-info-sign text-align-right clickable" data-toggle="modal" data-target="#pensionInfoModal">
							</span>
							<div id="pensionInfoModal" class="modal fade" role="dialog">
							  <div class="modal-dialog">
								<div class="modal-content">
								  <div class="modal-header">
									<button type="button" class="close" data-dismiss="modal">&times;</button>
									<h4 class="modal-title">Pension Contribution Info</h4>
								  </div>
								  <div class="modal-body">
									<p class="textIndent">If you are enrolled in a pension scheme, select the % that gets deducted from your salary in the drop down menu. If your employer
									contributes to the pension plan as well, pick the % value in the drop down menu. If your pension is deducted from your salary before
									TAX and NI (salary sacrifice) check the appropriate checkbox. </p>
									<p class="textIndent"> More information about salary sacrifice can be found on
									<a href="https://www.moneyadviceservice.org.uk/en/articles/salary-sacrifice-schemes">moneyadviceservice.org.uk</a> webpage.
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
							<label class="noPadding" for="pensionBeforeTax">Is pension deducted before taxes?</label>
						</div>
						<div class="col-sm-3 col-xs-1 noPadding">
							<input class="form-control" type="checkbox" id="pensionBeforeTax" checked>
						</div>
						<div class="col-sm-6 col-xs-7 noPadding">
							<label class="noPadding" for="pensionContribution">Employee Pension %:</label>
						</div>
						<div class="col-sm-6 col-xs-5 noPadding">
							<select class="form-control" name="pensionContribution" id="pensionContribution">
								<option value="none">none</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
							<select>
						</div>
						<div class="col-sm-6 col-xs-7 noPadding">
							<label class="noPadding" for="pensionContributionEmp">Employer Pension %:</label>
						</div>
						<div class="col-sm-6 col-xs-5 noPadding">
							<select class="form-control" name="pensionContributionEmp" id="pensionContributionEmp">
								<option value="none">none</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
							<select>
						</div>
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-sm-6 col-xs-12">
					<div class="col-sm-12 col-xs-12 boxTitle marginBetweenElements noPadding">
						<div class="col-sm-11 col-xs-11">Savings Loans Union</div>
						<div class="col-sm-1 col-xs-1 noPadding">
							<span class="glyphicon glyphicon-info-sign text-align-right clickable" data-toggle="modal" data-target="#SLUInfoModal">
							</span>
							<div id="SLUInfoModal" class="modal fade" role="dialog">
							  <div class="modal-dialog">
								<div class="modal-content">
								  <div class="modal-header">
									<button type="button" class="close" data-dismiss="modal">&times;</button>
									<h4 class="modal-title">Savings Loans Union</h4>
								  </div>
								  <div class="modal-body">
									<p class="textIndent">If you participate in any savings schemes provided by your employer, like summer
									or Christmas savings schemes, provide the amount that gets deducted every week from your salary. If 
									you pay your Union membership fee directly from you salary, provide the deduction amount.</p>
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
							<label class="noPadding" for="union">Union:</label>
						</div>
						<div class="col-sm-6 col-xs-6 noPadding">
							<input class="form-control" type="number" name="union" id="union" value="" size="7" placeholder="Amount">
						</div>
						<div class="col-sm-6 col-xs-6 noPadding">
							<label class="noPadding" for="christmasSavings">Christmas Savings:</label>
						</div>
						<div class="col-sm-6 col-xs-6 noPadding">
							<input class="form-control" type="number" name="christmasSavings" id="christmasSavings" value="" size="12" maxlength="7" placeholder="Enter Amount">
						</div>
						<div class="col-sm-6 col-xs-6 noPadding">
							<label class="noPadding" for="summerSavings">Summer Savings:</label>
						</div>
						<div class="col-sm-6 col-xs-6 noPadding">
							<input class="form-control" type="number" name="summerSavings" id="summerSavings" value="" size="12" maxlength="7" placeholder="Enter Amount">
						</div>
						<div class="col-sm-6 col-xs-6 noPadding">
							<label class="noPadding" for="companyLoan">Company Loan:</label>
						</div>
						<div class="col-sm-6 col-xs-6 noPadding">
							<input class="form-control" type="number" name="companyLoan" id="companyLoan" value="" size="12" maxlength="7" placeholder="Enter Amount">
							<p></p>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-xs-12">
					<div class="col-sm-12 col-xs-12 boxTitle marginBetweenElements noPadding">
						<div class="col-sm-11 col-xs-11">Student Loan</div>
						<div class="col-sm-1 col-xs-1 noPadding">
							<span class="glyphicon glyphicon-info-sign text-align-right clickable" data-toggle="modal" data-target="#otherInfoModal">
							</span>
							<div id="otherInfoModal" class="modal fade" role="dialog">
							  <div class="modal-dialog">
								<div class="modal-content">
								  <div class="modal-header">
									<button type="button" class="close" data-dismiss="modal">&times;</button>
									<h4 class="modal-title">Student Loan Info</h4>
								  </div>
								  <div class="modal-body">
									<p class="textIndent">If You are repaying student loan, you have to provide Your student loan threshold and loan rate %.</p>
									<p class="textIndent">More information about student loan can be found
									<a href="https://studentcalculator.org/more-info/cash-course/paying-for-uni/repaying-your-loan">
									studentloancalculator.org</a> web page.
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
							<label class="noPadding" for="studentLoanCheck">Repaying Student Loan?:</label>
						</div>
						<div class="col-sm-3 col-xs-1 noPadding">
							<input class="form-control" type="checkbox" name ="studentLoanCheck" id="studentLoanCheck">
						</div>
						<div class = "pos-relative">
							<div id="hideStudentLoan"></div>
							<div class="col-sm-6 col-xs-8 noPadding">
								<label class="noPadding" for="studentLoan_th">Student Loan Threshold:</label>
							</div>
							<div class="col-sm-6 col-xs-4 noPadding">
								 <input class="form-control" type="number" name="studentLoan_th" id="studentLoan_th" value="" size="15" maxlength="7" placeholder="Weekly Threshold">
							</div>
							<div class="col-sm-6 col-xs-8 noPadding">
								<label class="noPadding" for="studLoanRate">Student Loan Rate %:</label>
							</div>
							<div class="col-sm-6 col-xs-4 noPadding">
								<input class="form-control" type="number" name="studLoanRate" id="studLoanRate" value="" size="11" maxlength="7" placeholder="Loan Rate">
								<p></p>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-sm-6 col-xs-12">
					<div class="col-sm-12 col-xs-12 boxTitle marginBetweenElements noPadding">
						<div class="col-sm-11 col-xs-11">Additional Deductions</div>
						<div class="col-sm-1 col-xs-1 noPadding">
							<span class="glyphicon glyphicon-info-sign text-align-right clickable" data-toggle="modal" data-target="#otherDeductionsInfoModal">
							</span>
							<div id="otherDeductionsInfoModal" class="modal fade" role="dialog">
							  <div class="modal-dialog">
								<div class="modal-content">
								  <div class="modal-header">
									<button type="button" class="close" data-dismiss="modal">&times;</button>
									<h4 class="modal-title">Additional Deductions Info</h4>
								  </div>
								  <div class="modal-body">
									<p class="textIndent">In case you have deductions, that are not defined above, use this section to add these deductions to your payslips. Simply just provide
										the name of the deduction and it's amount. </p>
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
						<div class="col-sm-6 col-xs-8 noPadding">
							<label class="noPadding" for="otherDeductionName">Add. Deduction Name:</label>
						</div>
						<div class="col-sm-6 col-xs-4 noPadding">
							<input class="form-control" type="text" name="otherDeductionName" id="otherDeductionName" value="" size="11" maxlength="20" placeholder="Enter Name">
						</div>
						<div class="col-sm-6 col-xs-8 noPadding">
							<label class="noPadding" for="otherDeduction">Add. Deduction Amount:</label>
						</div>
						<div class="col-sm-6 col-xs-4 noPadding">
							<input type="number" class="form-control"name="otherDeduction" id="otherDeduction" value="" size="11" maxlength="7" placeholder="Enter Amount">
						</div>
						<div class="col-sm-6 col-xs-8 noPadding">
							<label class="noPadding" for="otherDeduction2Name">Add. Deduction Name:</label>
						</div>
						<div class="col-sm-6 col-xs-4 noPadding">
							<input class="form-control" type="text" name="otherDeduction2Name" id="otherDeduction2Name" value="" size="11" maxlength="20" placeholder="Enter Name">
						</div>
						<div class="col-sm-6 col-xs-8 noPadding">
							<label class="noPadding" for="otherDeduction2">Add. Deduction Amount:</label>
						</div>
						<div class="col-sm-6 col-xs-4 noPadding">
							<input type="number" class="form-control"name="otherDeduction2" id="otherDeduction2" value="" size="11" maxlength="7" placeholder="Enter Amount">
						</div>
						<div class="col-sm-6 col-xs-8 noPadding">
							<label class="noPadding" for="otherDeduction3Name">Add. Deduction Name:</label>
						</div>
						<div class="col-sm-6 col-xs-4 noPadding">
							<input class="form-control" type="text" name="otherDeduction3Name" id="otherDeduction3Name" value="" size="11" maxlength="20" placeholder="Enter Name">
						</div>
						<div class="col-sm-6 col-xs-8 noPadding">
							<label class="noPadding" for="otherDeduction3">Add. Deduction Amount:</label>
						</div>
						<div class="col-sm-6 col-xs-4 noPadding">
							<input type="number" class="form-control"name="otherDeduction3" id="otherDeduction3" value="" size="11" maxlength="7" placeholder="Enter Amount">
							<p></p>
						</div>
					</div>
				</div>
			</div>
			
			<div class="clearfix visible-sm"></div>
			<div class="col-sm-12 col-xs-12 noPadding marginBetweenElements">
				<div class="col-sm-10 col-xs-10 responseDiv" id="submitSuccessDeductions"></div>
				<div class="col-sm-2 col-xs-2">
					<button type="button" class="btn btn-primary button" id="buttonSubmit">Update</button>
				</div>
			</div>
		</div>
		


		<?php require ( 'includes/footer.html' ) ; ?>
	</body>
</html>