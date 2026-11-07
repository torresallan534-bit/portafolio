async function check() {
  const res = await fetch("https://portafolio-mu-nine-11.vercel.app/");
  const text = await res.text();
  console.log("Status:", res.status);
  console.log("HTML length:", text.length);
  console.log("sucursal-digital index:", text.indexOf("sucursal-digital"));
  console.log("Hacemos que tu restaurante index:", text.indexOf("Hacemos que tu restaurante"));
  console.log("Catálogo de Servicios index:", text.indexOf("Catálogo de Servicios"));
  console.log("PACK CARTA ABIERTA index:", text.indexOf("PACK CARTA ABIERTA"));
}
check();
