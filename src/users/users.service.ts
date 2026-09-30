export class UsersService {
  users: { id: number; name: string; email: string; gender: string }[] = [
    { id: 1, name: 'John', email: 'john@gmail.com', gender: 'male' },
    { id: 2, name: 'Jane', email: 'jane@gmail.com', gender: 'female' },
    { id: 3, name: 'Jim', email: 'jim@gmail.com', gender: 'male' },
  ];

  getAllUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id) || 'User not found';
  }

  createUser(user: { name: string; email: string; gender: string }) {
    this.users.push({ id: this.users.length + 1, ...user });
  }
}
