const precioCartera = 3500;
const precioMonedero = 700;
const precioEsmalte = 500;
const precioLabial = 200;
const precioCollar = 150;
const precioMochila = 500;

let total = 0;

let flag;

let opcionErrorArticulo = false;

do {
     let  articuloAComprar;
     if (!opcionErrorArticulo) {
   articuloAComprar = prompt(`Ingrese la opcion del artículo que quiere comprar 
  1. Cartera
  2. Monedero
  3. Esmalte
  4. Labial
  5. Collar
  6. Mochila
  7. Salir
`); 

 switch (articuloAComprar) {
    case "1":
        total = total + precioCartera;
        break;
        case "2":
        total = total + precioMonedero;
        break;
        case "3":
            total = total + precioEsmalte;
            break;
        case "4":
            total = total + precioLabial;
            break;
        case "5":
            total = total + precioCollar;
            break;
        case "6":
            total = total + precioMochila;
            break;
        case "7":
          break;
            default:
                opcionErrorArticulo = true;
                break;
 }

 if (opcionErrorArticulo){
  alert("Ingrese una opción válida");
  opcionErrorArticulo = false;
  flag = "Y";
  continue;
}
     } else {
      opcionErrorArticulo = false;
     }

console.log("articuloAComprar", articuloAComprar);

if (articuloAComprar == 7){
  break;
}

flag = prompt('Quiere pedir otro artículo Y/N?');  
console.log("flag", flag);
} while (flag != 'N');


console.log("total", total);

alert("Su total es " + total);
