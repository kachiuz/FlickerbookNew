<!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Flickerbook is an on-line payslip generator, salary, payments, Tax, National insurance, work hours
		tracker and calculator.">
		<meta name="keywords" content="basic pay, basic hours, overtime, unsocial hours, unsocial payments,
		shift work, hourly rate, unpaid breaks, extra pay for weekend, bank holiday, bank holiday pay, bank holiday bonus, clock in bonus, 
		statutory sick pay, SSP, statutory paternity pay, SPP, compassionate leave, bereavement leave, back pay, back pay calculator, shift
		calendar, work calendar, day in, day off, holiday, sick leave, sickness leave, Christmas savings, summer savings, piece Work,
		salary tracker, salary calculator, working hours tracker, holiday tracker, holiday counter, payslip generator, wage slip generator,
		payslip storage, work time tracker, hourly wage calculator, payments, Personal Allowance, Basic Tax rate, higher tax rate, 
		payslip deductions, Higher Taxable Income Threshold, Additional Tax Rate, Additional Taxable Income Threshold, National Insurance Rate, 
		National Insurance Threshold, Pension, Pension Deductions, employee pension,employer pension, student loan, student loan threshold, 
		student loan rate, loan, loan rate, union, union deduction, Christmas savings deduction, summer savings deduction, company loan,
		National insurance calculator, tax calculator, net pay calculator, work hours calculator">
		<META NAME="ROBOTS" CONTENT="INDEX, FOLLOW">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<title>Flickerbook is an on-line payslip generator, salary, payments, Tax, National insurance, work hours tracker and calculator.</title>
		<link rel="icon" href="favicon.ico" type="image/x-icon" />
		<!--<script type="text/javascript" src="javascript/index.js"></script>-->
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
		<link type="text/css" rel="stylesheet" href="style/style.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
		<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.css" />
		<script src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js"></script>
		<script src='https://www.google.com/recaptcha/api.js'></script>
		<script>
			window.addEventListener("load", function(){
			window.cookieconsent.initialise({
			  "palette": {
				"popup": {
				  "background": "#edeff5",
				  "text": "#838391"
				},
				"button": {
				  "background": "#4b81e8"
				}
			  }
			})});
		</script>
	</head>
	<body>
		<?php require ( 'includes/navigationNotLoggedIn.html' ) ;?>
		<div class="container-fluid marginTopMain">
			<div class="row">
				<div class="col-sm-6 col-xs-12">
					<?php if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( 'includes/loginform.php') ;} ?>	
					<hr>
				
					<p class="textIndent">Flickerbook is an online payslip storage solution designed for those working on shifts. It enables 
					you to keep a track on your shift patterns, work hours, overtimes, payments, deduction, holidays and more.</p>
					<p class="textIndent">Flickerbook is an online payslip storage solution designed for those working on shifts. It enables 
					you to keep a track on your shift patterns, work hours, overtimes, payments, deduction, holidays and more. </p>
					<p class="textIndent">Flickerbook is free to join!</p>
					
				</div>
				<div class="col-sm-6 col-xs-12">
					<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
					  <ol class="carousel-indicators">
						<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
					  </ol>
					  <div class="carousel-inner">
						<div class="carousel-item active">
						  <img class="d-block w-100" src="pics2/mainTable.png" alt="First slide">
						</div>
						<div class="carousel-item">
						  <img class="d-block w-100" src="pics2/calendar.png" alt="Second slide">
						</div>
						<div class="carousel-item">
						  <img class="d-block w-100" src="pics2/payments.png" alt="Second slide">
						</div>
						<div class="carousel-item">
						  <img class="d-block w-100" src="pics2/deductions.png" alt="Third slide">
						</div>
						<div class="carousel-item">
						  <img class="d-block w-100" src="pics2/yearToDate.png" alt="Second slide">
						</div>
						<div class="carousel-item">
						  <img class="d-block w-100" src="pics2/holidays.png" alt="Second slide">
						</div>
					  </div>
					  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					  </a>
					  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					  </a>
					</div>
				</div>
			</div>
		</div>
			<?php require ( 'includes/footerBT4.html' ) ;?>
	</body>
</html>