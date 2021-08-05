const perimeterSquare = (lade) =>
{
	return lade * 4;
};

const areaSquare = (lade) =>
{
	return lade * lade;
};

const perimeterTriangle = (lade1, lade2, base) =>
{
	return lade1 + lade2 + base;
};

const areaTriangle = (base, altura) =>
{
	return (base * altura) / 2;
};

const diameterCircle =(radio) =>
{
	return radio * 2;
};

const perimeterCircle =(radio) =>
{
	const diámetro = diameterCircle(radio);

	const pi = Math.PI;

	return diámetro * pi;
};

const areaCircle = (radio) =>
{
	const pi = Math.PI;

	return pi * (radio * radio);
};

const calculatePerimeterSquare = () =>
{
	const inputLade = document.getElementById('InputLade');
	const lade = parseFloat(inputLade.value);

	const paragraph = document.getElementById('Square');

	const p = lade != 0 && lade > 0 ? 'El perímetro de un cuadrado con la medida de lade dado es: ' + perimeterSquare(lade) + 'cm' : 'Ingresa un valor numérico mayor que 0';

	paragraph.innerHTML = p;
};

const calculateAreaSquare = () =>
{
	const inputLade = document.getElementById('InputLade');
	const lade = parseFloat(inputLade.value);

	const paragraph = document.getElementById('Square');

	const p = lade != 0 && lade > 0 ? 'El area de un cuadrado con la medida de lade dado es: ' + areaSquare(lade) + 'cm²' : 'Ingresa un valor numérico mayor que 0';

	paragraph.innerHTML = p;
};

const calculatePerimeterTriangle = () =>
{
	const inputLade1 = document.getElementById('InputLade1');
	const inputLade2 = document.getElementById('InputLade2');
	const inputBase = document.getElementById('InputBase');

	const lade1 = parseFloat(inputLade1.value);
	const lade2 = parseFloat(inputLade2.value);
	const base = parseFloat(inputBase.value);

	const verification = (lade1 != 0 && lade2 != 0 && base != 0) && (lade1 > 0 && lade2 > 0 && base > 0);

	const paragraph = document.getElementById('Triangle');

	const p = verification ? 'El perímetro de un triangulo con las medidas dadas es: ' + perimeterTriangle(lade1, lade2, base) + 'cm' : 'Ingresa valores numéricos mayores que 0 ';

	paragraph.innerHTML = p;
};

const calculateAreaTriangle = () =>
{
	const inputLade1 = document.getElementById('InputLade1');
	const inputLade2 = document.getElementById('InputLade2');
	const inputBase = document.getElementById('InputBase');
	const InputHeight = document.getElementById('InputHeight');

	const lade1 = parseFloat(inputLade1.value);
	const lade2 = parseFloat(inputLade2.value);
	const base = parseFloat(inputBase.value);
	const height = parseFloat(InputHeight.value);

	const verification = (lade1 != 0 && lade2 != 0 && base != 0 && height != 0) &&
						 (lade1 > 0 && lade2 > 0 && base > 0 && height > 0);

	const paragraph = document.getElementById('Triangle');

	const p = verification ? 'El area de un triangulo con las medidas dadas es: ' + areaTriangle(base, height) + 'cm²' : 'Ingresa valores numéricos mayores que 0 ';

	paragraph.innerHTML = p;
};

const calculatePerimeterCircle = () =>
{
	const inputRadio = document.getElementById('InputRadio');

	const radio = parseFloat(inputRadio.value);

	const paragraph = document.getElementById('Circle');

	const p = radio != 0 && radio > 0 ? 'El perímetro de un circulo con la medida de radio dada es: ' + perimeterCircle(radio) + 'cm' : 'Ingresa un valor numérico mayor que 0 ';

	paragraph.innerHTML = p;
};

const calculateAreaCircle = () =>
{
	const inputRadio = document.getElementById('InputRadio');

	const radio = parseFloat(inputRadio.value);

	const paragraph = document.getElementById('Circle');

	const p = radio != 0 && radio > 0 ? 'El area de un circulo con la medida de radio dada es: ' + perimeterCircle(radio) + 'cm²' : 'Ingresa un valor numérico mayor que 0 ';

	paragraph.innerHTML = p;
};
