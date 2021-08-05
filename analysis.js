// Helpers

const isPair = (number) =>
{
	return number % 2 === 0;
};

const calculateAverageList = (list) =>
{
	try
	{
		const sumList = list.reduce(
			function (accumulatedValue = 0, newItem)
			{
				return accumulatedValue += newItem;
			}
		);

		const averageList = sumList / list.length;

		return averageList;
	}

	catch (error)
	{
		const averageList = 'Ingresa tu lista de elementos (numéricos) separados por comas o espacios';

		return averageList;
	}
};

// Calculadora de mediana

const MedianSalaries = (list) =>
{
	const middleListPosition = parseInt(list.length / 2);

	let ordererList;

	let medianList;

	if(isPair(list.length))
	{
		ordererList =  list.sort((a,b) => a - b);

		const middleListPreviousElement = ordererList[middleListPosition - 1];

		const middleListElement = ordererList[middleListPosition];

		medianList = calculateAverageList([middleListElement, middleListPreviousElement]);

		return medianList;
	}

	else
	{
		ordererList = list.sort((a,b) => a - b);

		medianList = ordererList[middleListPosition];

		return medianList;
	}
};

// Mediana general


const salariesCol = colombia.map(item =>{ return item.salary; });

const salariesColSorted = salariesCol.sort((a,b) => { return a - b });

const medianGeneralCol = MedianSalaries(salariesColSorted);

// Mediana Top 10%

const spliceStart = salariesColSorted.length * 90 / 100;
const spliceCount = salariesColSorted.length - spliceStart;

const salariesTop10Col = salariesColSorted.splice(spliceStart, spliceCount);

const medianTop10Col = MedianSalaries(salariesTop10Col);

// Mostrar

const paragraphGeneral = document.getElementById('MedianGeneral');

const pGeneral = 'La media general de salarios en Colombia es: ' + medianGeneralCol + ' Dolares';

paragraphGeneral.innerHTML = pGeneral;

const paragraphTop10 = document.getElementById('MedianTop10');

const pTop10 = 'La media del Top 10% de salarios en Colombia es: ' + medianTop10Col + ' Dolares';

paragraphTop10.innerHTML = pTop10;
