<?php
$taxPeriodLimit = 256;
$loadIndexesArray = array("taxPeriodLimit"=>$taxPeriodLimit);

$weekStartArrayAssociative = array();
$unsHCheckArrayAssociative = array();

for($i=0;$i<$taxPeriodLimit; $i++){
		$weekStartArrayAssociative += array('taxPeriodNr'.$i=>0);
    $unsHCheckArrayAssociative += array('taxPeriodNr'.$i=>1);
}

$weekStartArray = array();
for($i=0;$i<$taxPeriodLimit; $i++){
		$weekStartArray[] = $weekStartArrayAssociative['taxPeriodNr'.$i];
    $unsHCheckArray[] = $unsHCheckArrayAssociative['taxPeriodNr'.$i];
}

$loadIndexesArray += array ("weekStartArray"=>$weekStartArray);
$loadIndexesArray += array ("unsHCheckArray"=>$unsHCheckArray);

$jsonFile = json_encode($loadIndexesArray);
echo $jsonFile;
?>
