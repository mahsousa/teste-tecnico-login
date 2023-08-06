class UserService {  

  async listUsers() {
    const response = await fetch('https://63a1c51eba35b96522e7a1b1.mockapi.io/vdm/Users');
    if (!response.ok) {
      throw new Error('Failed to fetch users.');
    }
    const data = await response.json();
    return data;
  }

  async getUserByID(id) {
    const response = await fetch(`https://63a1c51eba35b96522e7a1b1.mockapi.io/vdm/Users/${id}`);
    console.log(`https://63a1c51eba35b96522e7a1b1.mockapi.io/vdm/Users/${id}`, response);
    if (!response.ok) {
      throw new Error(`Failed to fetch user with ID ${id}.`);
    }
    const data = await response.json();
    return data;
  }
}

export default UserService;