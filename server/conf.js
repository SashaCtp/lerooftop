const HTTPS = false; // False = HTTP, True = HTTPS
const HOSTNAME = 'localhost';
const PORT = 3000;

const getBaseUrl = () => {
    let protocol = HTTPS ? 'https' : 'http';
	return `${protocol}://${HOSTNAME}:${PORT}/`;
}

export { HTTPS, HOSTNAME, PORT, getBaseUrl }