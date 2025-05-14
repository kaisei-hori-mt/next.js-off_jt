type User = {
	name: string;
	age: number;
};

const user1: User = {
	name: "Hanako",
	age: 25,
};

const fruits: string[] = ["りんご", "バナナ", "みかん"];

function getProfile(user: User) {
	return `${user.name} (${user.age}歳)`;
}
