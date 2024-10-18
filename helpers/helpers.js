export const shortenAddress = (str) => {
	// Check if the string is long enough to be shortened
	if (str.length <= 10) {
	  return str; // If the string is 10 characters or less, return it as is
	}
	
	// Extract first 5 and last 5 characters, then add ellipsis
	const firstFive = str.slice(0, 5);
	const lastFive = str.slice(-5);
  
	return `${firstFive} ... ${lastFive}`;
  }