const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const userRoles = new Map();

userRoles.set('Karla', 'SUDO');
userRoles.set('Julia', 'ADMIN');
userRoles.set('Manuella', 'ADMIN');
userRoles.set('Jair', 'USER');
userRoles.set('Rafael', 'USER');

console.log(getAdmins(userRoles));