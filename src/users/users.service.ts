export class UsersService {
  users: { id: number; name: string; age: number; gender: string }[] = [
    { id: 1, name: 'John', age: 20, gender: 'male' },
    { id: 2, name: 'Jane', age: 21, gender: 'female' },
    { id: 3, name: 'Jim', age: 22, gender: 'male' },
  ];

  getAllUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id) || 'User not found';
  }

  createUser(user: { name: string; age: number; gender: string }) {
    this.users.push({ id: this.users.length + 1, ...user });
  }
}
