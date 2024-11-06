function calcular(){
    let strp1 = document.getElementById("Producto1").value;
    let strp2 = document.getElementById("Producto2").value;
    let strp3 = document.getElementById("Producto3").value;
    let strp4 = document.getElementById("Producto4").value;
    let strp5 = document.getElementById("Producto5").value;
   // let strplb = document.getElementById("DescuentoLabel").value;

//validaciones no puede estar vacio y no puede ser negativo
    if (strp1 ===""){
        warning('El valor del producto 1 debe contener un valor');
    }else if (parseFloat(strp1)<0 ){
        warning("El valor del producto 1 no puede ser negativo");
    }else if (strp2 ===""){
        warning("El valor del producto 2 debe contener un valor");
    }else if (parseFloat(strp2)<0 ){
        warning("El valor del producto 2 no puede ser negativo");
    }else if (strp3 ===""){
        warning("El valor del producto 3 debe contener un valor");
    }else if (parseFloat(strp3)<0 ){
        warning("El valor del producto 3 no puede ser negativo");
    }else if (strp4 ===""){
        warning("El valor del producto 4 debe contener un valor");
    }else if (parseFloat(strp4)<0 ){
        warning("El valor del producto 4 no puede ser negativo");
    }else if (strp5 ===""){
        warning("El valor del producto 5 debe contener un valor");
    }else if (parseFloat(strp5)<0 ){
        warning("El valor del producto 5 no puede ser negativo");
    }else{

        //hechas las validaciones parseo a float
        let p1 = parseFloat(strp1);
        let p2 = parseFloat(strp2);
        let p3 = parseFloat(strp3);
        let p4 = parseFloat(strp4);
        let p5 = parseFloat(strp5);


        //comienzan los calculos
        let subtotal = p1 + p2 + p3 + p4 + p5;

        let descuento;
        let deslabel=0;

        if (subtotal <= 999.99)
        {
            descuento = 0;
            deslabel = 0;

        }else if (subtotal>=1000 && subtotal<= 4999.99){

            descuento = subtotal * 0.10;
            deslabel = 10;

        }else if (subtotal>=5000 && subtotal<= 8999.99){

            descuento = subtotal * 0.20;
            deslabel = 20;

        }else if (subtotal>=9000 && subtotal<= 12999.99){

            descuento = subtotal * 0.30;
            deslabel = 30;

        }else if (subtotal>=13000){

            descuento = subtotal * 0.40;
            deslabel = 40;

        }


        total = subtotal - descuento;

        document.getElementById("Subtotal").value = subtotal;
        document.getElementById("Descuento").value = descuento;
        document.getElementById("DescuentoLabel").value = deslabel;
        document.getElementById("Total").value = total;


    }


}


function limpiar(){

    document.getElementById("Producto1").value = "";
    document.getElementById("Producto2").value = "";
    document.getElementById("Producto3").value = "";
    document.getElementById("Producto4").value = "";
    document.getElementById("Producto5").value = "";
    document.getElementById("Subtotal").value = "";
    document.getElementById("Descuento").value = "";
    document.getElementById("Total").value = "";
    document.getElementById("DescuentoLabel").value = "";


}


function warning (mensaje){
    Swal.fire(mensaje);
}