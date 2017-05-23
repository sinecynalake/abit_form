<!DOCTYPE html>
<html>

<head>
    <title>Hello</title>
</head>
<body>
<?php
    function checkFields(){
    $isOkayFilled = true;
    
        if (((isset($_POST['surname'])) && ($_POST['surname'] != '')) && ((isset($_POST['lastname'])) && ($_POST['lastname'] != '')) && ($_POST['sex'] != 'default') && ((isset($_POST['place_of_birth'])) && ($_POST['place_of_birth'] != '')) && ($_POST['citizenship'] != 'default') ) {
          if (checkNames()){
            echo "names are ok <br>";
          }
          else {
          $isOkayFilled = false; 
            echo "names - not ok <br>"; 
          }
        }
        else {
          $isOkayFilled = false;
        }  
        
        if (($_POST['document_type'] != 'default') && ((isset($_POST['series'])) && ($_POST['series'] != '')) && ((isset($_POST['pass_number'])) && ($_POST['pass_number'] != '')) && ((isset($_POST['pass_who_gave'])) && ($_POST['pass_who_gave'] != ''))) {
          echo "documents are okay <br>";
        }
        else {
          $isOkayFilled = false;
        } 
        
        if (($_POST['edu_country'] != 'default') && ((isset($_POST['edu_city'])) && ($_POST['edu_city'] != '')) && ((isset($_POST['edu_name'])) && ($_POST['edu_name'] != '')) && ($_POST['year_of_graduation'] != 'default') ) {
          echo "educational info is okay <br>" ;
        }
        else {
          $isOkayFilled = false;
        }
              
      if (($_POST['degree'] != 'default') && ($_POST['faculty'] != 'default') && ($_POST['edu_form'] != 'default') && ($_POST['types_finance'] != 'default') ) {
          echo "your choice is correct <br>";
        }
        else {
          $isOkayFilled = false;
        } 
        
        return $isOkayFilled;
 }
    
    
    function checkNames(){
    $name = $_POST['lastname'];
    $surname = $_POST['surname'];
    
    $name = trim($name);
    $name = stripslashes($name);
    
    $surname = trim($surname);
    $surname = stripslashes($surname);

    if ((mb_convert_case($name, MB_CASE_TITLE, "UTF-8") == $name) && (mb_convert_case($surname, MB_CASE_TITLE, "UTF-8") == $surname) ){
      return true;
    }
    else {
      return false;
    } 
}

    
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    if (checkFields()){
    echo "<h2>everything is fine! yay</h2>";
    
    $arr= $_POST; 
    $file = 'data.txt';
    $fp = fopen($file, 'w') or die('Could not open file!');  
    foreach ($arr as $key => $value) { 
      $toFile = "$key: $value \r\n";   
      fwrite($fp, "$toFile") or die('Could not write to file');  
      } 
    fclose($fp); 
    }
    else {
    echo "<h2>everything is wrong</h2>";
    }
  }
?>
</body>
</html>