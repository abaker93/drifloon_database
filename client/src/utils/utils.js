export const formatDexNum = (num) => {
	num = String(num);
	while (num.length < 3) num = "0" + num;
	return num;
};

export const formatURL = (string) => {
	return string.toLowerCase().replaceAll(' ', '-');
}

export const totalStats = (...stats) => {
	return stats.reduce((sum, a) => sum + a, 0);
};