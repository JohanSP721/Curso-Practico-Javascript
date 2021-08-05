const priceWithDiscount = (precio, descuento) =>
{
	const porcentajePagado = 100 - descuento;

	const precioConDescuento = (precio * porcentajePagado) / 100;

	return precioConDescuento;
};

const calculateDiscount = () =>
{
	const InputPrice = document.getElementById('InputPrice');
	const InputDiscount = document.getElementById('InputDiscount');

	const price = parseInt(InputPrice.value);
	const discount = parseInt(InputDiscount.value);

	const paragraph = document.getElementById('Discount');

	const verification = (price != 0 && discount != 0) && (price > 0 && discount > 0);

	const p = verification ? 'El precio con el descuento aplicado es: $' + priceWithDiscount(price, discount) : 'Ingresa valores numéricos mayores que 0 ';

	paragraph.innerHTML = p;
};
