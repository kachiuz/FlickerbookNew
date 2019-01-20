<!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<title>Flickerbook Register</title>
		<link type="text/css" rel="stylesheet" href="style/style.css">
		<link rel="icon" href="favicon.ico" type="image/x-icon" />
		<script type="text/javascript" src=""></script>
		<script src='https://www.google.com/recaptcha/api.js'></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
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
			<div class="d-none d-sm-block col-sm-3">
			</div>
				<div class="col-sm-6 col-xs-12">
				<h5>Recover password</h5>
		Enter the email address You registered with to recover your password.
	<form action="resetpassword.php" method="POST">	
	<input id="resetPasswordEmail" class="form-control" type="text" name="resetPasswordEmail" size="50" maxlength="255" placeHolder="Enter Your Email Address">
	
	<div class="g-recaptcha" data-size="normal" data-theme="light" data-sitekey="6Lf7NEQUAAAAAMOG_xJaUDZ-ELYkXNVXkGOCIugJ"></div>
	<input type="submit" value="Recover Password" class="btn btn-primary width50">
				<?php
				if ( $_SERVER[ 'REQUEST_METHOD' ] == 'POST' )
				{
					# Connect to the database.
					require ('../connect_db.php'); 

					# Initialize an error array.
					$errors = array();
					
					if(isset($_POST['g-recaptcha-response']) && $_POST['g-recaptcha-response'])
					{
						$secret = '6Lf7NEQUAAAAANzvtj2C2QznHt3SvFwzrJxyz4Py';
						$ip = $_SERVER['REMOTE_ADDR'];
						$captcha = $_POST['g-recaptcha-response'];
						$response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$captcha&remoteip=$ip");

						$arr = json_decode($response, TRUE);
						if(!$arr['success'])
						{
							$errors[] = 'Verification check failed.';
						}
					}
					else{$errors[] = 'Verification check failed.';}
					
					function test_input($data) {
					$data = trim($data);
					$data = stripslashes($data);
					$data = htmlspecialchars($data);
					return $data;
					}
					
					if ( empty( $errors ) ){
						if(!empty($_POST['resetPasswordEmail']))
						{
							$email = test_input($_POST['resetPasswordEmail']);
							$email = htmlentities(mysqli_real_escape_string( $dbc, trim( $_POST[ 'resetPasswordEmail' ] ) )) ;
							
							if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
								$errors[] = 'Please enter a valid email address';
							}
						}
						else{
							$errors[] = "Enter an Email Address!";
						}
					}
					
					if ( empty( $errors ) ){
						$checkQuery = "SELECT email FROM users WHERE email = '$email'";
						$check = mysqli_query($dbc, $checkQuery);
						$check2 = mysqli_num_rows($check);

						//if the name exists it gives an error
						if ($check2 == 0) {
							$errors[] = 'Sorry, we can not find your account details please try another email address.';
						}
						elseif($check2 == 1)
						{
							$email = $email; //whateva
						}	
						else{
							$errors[] = 'Sorry, we can not find your account details please try another email address.';
						}
					}

					if ( empty( $errors ) ){
						//create new random password
						$password = substr(md5(uniqid(rand(),1)),3,10);
						$pass = password_hash($password, PASSWORD_DEFAULT,['cost' => 12] ) ;
						
						
						//send email with new password
						$to = $email;
						$subject = 'Reseting your Flickerbook password' ;
						$message = "Hi,you or someone else have requested to change your Flickerbook password. 
						Your new password is:
						$password 
						Your password has been reset please login and change your password to something more memorable as soon as possible.
						Regards, Flickerbook."; ;
						$headers = 'From: noReply@flickerbook.co.uk' . PHP_EOL ;
						mail ( $to, $subject, $message, $headers ) ;
						
						$updteQuery = "UPDATE users SET pass='$pass' WHERE email = '$email'";
						$sql = mysqli_query($dbc, $updteQuery);
						mysqli_close($dbc);
						
						echo "<b style='color:green'>Success! Check your email to recover your password.</b><br>" ;
					}
					else 
					{
						echo '<p id="err_msg">The following error(s) occurred:<br>' ;
						foreach ( $errors as $msg )
						{ echo " - <b style='color:red'>$msg</b><br>" ; }
							echo 'Please try again.</p>';
							# Close database connection.
							mysqli_close( $dbc );
					}
				}
			?>
	</form>
	</div>
	</div>
		</div>
	<?php require ( 'includes/footerBT4.html' ) ;?>
</body>
</html>



