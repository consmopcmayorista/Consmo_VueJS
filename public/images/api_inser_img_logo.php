<?php
header("Access-Control-Allow-Origin: *");
  // include_once 'api_clientes_w.php';
 
 //$informacion=$_FILES;
  $nom_marca=$_POST['nom_logo'];
  //$informacion=$_FILES['name'][0];
     foreach($_FILES as $item){
          $file_ext = pathinfo($item['name'],PATHINFO_EXTENSION);
         
         $name="logo".".".$file_ext;
         $tmp_name= $item['tmp_name'];
     }
    $path="img/logo/";
   
   
    move_uploaded_file($tmp_name, $path.$name);
    $respuesta="ok";
 // $productos=array( $_post['formData']);
 $fecha=time();
 $url="https://consmopcmayorista.com/images/img/logo/".$name."?v=". $fecha;
 
 echo json_encode(array($name, $url, $respuesta));
    //$api = new ApiProductos();
    //$dominio = $_GET['dominio'];
    
   
     //echo $dominio;
   //$api->getAll_pos($dominio);
        
   
?>