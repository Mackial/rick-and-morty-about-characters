const getHash = () => {
	return location.hash.slice(1).toLocaleLowerCase().split("/")[2] || "/";
};

export default getHash;
