const baseUrl = 'http://ws.audioscrobbler.com/2.0/';

function lastFmApiUrl(paramsObject) {
	const searchParams = new URLSearchParams();
	for (const key in paramsObject) {
		searchParams.append(key, paramsObject[key]);
	}
	if (!('api_key' in paramsObject)) {
		searchParams.append('api_key', process.env.REACT_APP_LAST_FM_API_KEY);
	}
	if (!('format' in paramsObject)) {
		searchParams.append('format', 'json');
	}
	return `${baseUrl}?${searchParams.toString()}`;
}

export default async function search(searchText) {
	const url = lastFmApiUrl({
		method: 'track.search',
		track: searchText
	});
	console.log(url);
	return await fetch(url).then(response => response.json()).then(({ results: { trackmatches: { track }} }) => track);
}
