total_compras= document.querySelector(".total");
let productos= [];
let total_contador = 0;
let total_precio= 0;
let contador_productos=0;
let fragmento = document.createElement("P");
fragmento.classList.add("contador_productos");
fragmento.innerHTML=`${total_precio}`;
total_compras.appendChild(fragmento);


/*AGREGAR AL CARRITO*/

function addp(producto,precio){

    if (productos.includes(producto) && (productos[(productos.indexOf(producto)+1)]>0)){
        let nuevo=document.querySelector(`.p_${productos.indexOf(producto)}`);
        productos[(productos.indexOf(producto)+1)]++;
        let cantidad=productos[productos.indexOf(producto)+1];
        nuevo.innerHTML=`<span class=producto_en_lista>${producto} x<span class=destacado>${cantidad}</span> $<span class=destacado>${precio * (cantidad)}</span><span class="botones_del"><button class="boton_restar destacado" onclick="restarProducto('${producto}','${precio}');" >-</button><button class="boton_quitar destacado" onclick="eliminarProducto('${producto}','${precio}');">x</button></span></span>`;
    }

    else if(productos.includes(producto) && (productos[(productos.indexOf(producto)+1)]==0)){
        let nuevo = document.createElement("DIV");
        nuevo.classList.add(`p_${productos.indexOf(producto)}`);
        productos[(productos.indexOf(producto)+1)]++;
        nuevo.innerHTML=`<span class=producto_en_lista>${producto} x<span class=destacado>1</span> $<span class=destacado>${precio} </span><span class="botones_del"><button class="boton_restar destacado" onclick="restarProducto('${producto}','${precio}');">-</button><button class="boton_quitar destacado" onclick="eliminarProducto('${producto}','${precio}');">x</button></span></span>`;
        document.querySelector(".lista_compras").appendChild(nuevo);
        console.log(productos[(productos.indexOf(producto)+1)]);

    }

    else{
        let nuevo = document.createElement("DIV");
        nuevo.classList.add(`p_${contador_productos}`);
        contador_productos=contador_productos+2;
        nuevo.innerHTML=`<span class=producto_en_lista>${producto} x<span class=destacado>1</span> $<span class=destacado>${precio} </span><span class="botones_del"><button class="boton_restar destacado" onclick="restarProducto('${producto}','${precio}');">-</button><button class="boton_quitar destacado" onclick="eliminarProducto('${producto}','${precio}');">x</button></span></span>`;
        document.querySelector(".lista_compras").appendChild(nuevo);
        productos.push(producto);
        productos.push(1);
    }

    total_contador= total_contador + 1;
    total_precio= total_precio + precio;
    document.querySelector(".total").innerHTML = total_contador;
    document.querySelector(".total").style.textAlign ="center";
    document.querySelector(".precio_total").innerHTML = total_precio;
}


/*RESTAR PRODUCTOS*/ 
function restarProducto (producto,precio) {
    if(productos[(productos.indexOf(producto)+1)]>1){
        productos[(productos.indexOf(producto)+1)]--;
        let cantidad = productos[(productos.indexOf(producto)+1)];
        total_contador= total_contador - 1;
        total_precio= total_precio - precio;
        document.querySelector(".total").innerHTML = total_contador;
        document.querySelector(".total").style.textAlign ="center";
        document.querySelector(".precio_total").innerHTML = total_precio;
        document.querySelector(`.p_${productos.indexOf(producto)}`).innerHTML=`<span class=producto_en_lista>${producto} x<span class=destacado>${cantidad}</span> $<span class=destacado>${precio * (cantidad)}</span><span class="botones_del"><button class="boton_restar destacado" onclick="restarProducto('${producto}','${precio}');">-</button><button class="boton_quitar destacado" onclick="eliminarProducto('${producto}','${precio}');">x</button></span></span>`;
    }

    else{
        eliminarProducto(producto,precio);
    }
}

/*ELIMINAR PRODUCTO DE LA LISTA*/

function eliminarProducto(producto,precio){
    let cantidad = productos[(productos.indexOf(producto)+1)];
    productos[(productos.indexOf(producto)+1)]=0;
    console.log(productos[(productos.indexOf(producto)+1)]);
    total_precio = total_precio - (precio*cantidad);
    total_contador= total_contador - cantidad;
    document.querySelector(".total").innerHTML = total_contador;
    document.querySelector(".total").style.textAlign ="center";
    document.querySelector(".precio_total").innerHTML = total_precio;
    document.querySelector(`.p_${productos.indexOf(producto)}`).remove();
}


/*MOSTRAR PRODUCTOS*/

let mostrando = false;

function mostrarProductos(){
    if(mostrando){
        mostrando=false;
        document.querySelector(".lista_compras").style.display= "none";
        document.querySelector(".carrito").style.filter="brightness(100%)";
    }

    else{
        mostrando=true;
        document.querySelector(".lista_compras").style.display= "block";
        document.querySelector(".carrito").style.filter="brightness(180%)";
    }
}
