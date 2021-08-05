const calculateAverageList = (list) =>
{
	try
	{
		const sumList = list.reduce((accumulatedValue = 0, newItem) =>
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

const isPair = (number) =>
{
	if(number % 2 === 0)
	{
		return true;
	}

	else
	{
		return false;
	}
};

const calculateMedianList = (list) =>
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


const calculateModeList = (list) =>
{
	let objectList = {};

	list.map(item =>
	{
		if(objectList[item])
		{
			objectList[item] += 1;
		}

		else
		{
			objectList[item] = 1;
		}
	});

	const arrayList = Object.entries(objectList).sort((a,b) =>
	{
		return a[1] -b[1];
	});

	objectList = {};

	arrayList.map(item =>
	{
		if(item[1] === arrayList[arrayList.length -1][1])
		{
			objectList[item[0]] = item[1];
		}
	})

	const mode = objectList;

	return mode;
};

const calculateAverage = () =>
{
	const InputList = document.getElementById('InputList');

	const listString = InputList.value;

	const list = listString.includes(',') ? listString.split(',') :
				 listString.includes(' ') ? listString.split(' ') :
				 listString.split('');

	const listInt = list.map(i => {return parseInt(i)});

	const paragraph = document.getElementById('Statistics');

	const average = calculateAverageList(listInt);

	const p = !isNaN(average) ? 'La media aritmética de los números ingresados es: ' + average :
			  typeof(average) === 'string' ? average :
			  'Introduce solo datos numéricos separados por comas (,) o espacios';

	paragraph.innerHTML = p;
};

const calculateMedian = () =>
{
	const InputList = document.getElementById('InputList');

	const listString = InputList.value;

	const list = listString.includes(',') ? listString.split(',') :
				 listString.includes(' ') ? listString.split(' ') :
				 listString.split('');

	const listInt = list.map(i => {return parseInt(i)});

	const paragraph = document.getElementById('Statistics');

	const median = calculateMedianList(listInt);

	const p = !isNaN(median) ? 'La mediana de los números ingresados es: ' + median :
			  listInt !== [] ? 'Ingresa tu lista de elementos (numéricos) separados por comas o espacios' :
			  'Introduce solo datos numéricos separados por comas (,) o espacios';

	paragraph.innerHTML = p;
};

const calculateMode = () =>
{
	const InputList = document.getElementById('InputList');

	const listString = InputList.value;

	const list = listString.includes(',') ? listString.split(',') :
				 listString.includes(' ') ? listString.split(' ') :
				 listString.split('');

	const paragraph = document.getElementById('Statistics');

	const mode = calculateModeList(list)

	let modes = '';

	const modeKeys = Object.keys(mode);

	for (let value in mode)
	{
		if ( value !== modeKeys[modeKeys.length - 2] && value !== modeKeys[modeKeys.length - 1]  )
		{
			modes += value + ' que se repite ' + mode[value] + ' veces, ';
		}

		else if ( value  === modeKeys[modeKeys.length - 2] )
		{
			modes += value + ' que se repite ' + mode[value] + ' veces y ';
		}

		else
		{
			modes += value + ' que se repite ' + mode[value] + ' veces ';
		}
	}

	const p = modeKeys.length === 1 ? 'La moda de la lista de elementos ingresados es: ' + modes :
	modeKeys.length === 0 ? 'Ingrese una lista de elementos' :
	'Las modas de la lista de elementos ingresados son: ' + modes;

	paragraph.innerHTML = p;
};
