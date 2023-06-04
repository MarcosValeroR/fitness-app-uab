import { getLocalData, setLocalData } from "./local-storage";
import Globals from "./globals";

const loadLocalData = async () => {
  console.log("Get local data");

  const users = await getLocalData("users");
  if (users && users.length) {
    Globals.users = users;
  }
};

const getUsers = () => {
  return Globals.users;
};

const storeUsers = async () => {
  await setLocalData("users", Globals.users);
};

const addUser = async (user) => {
  Globals.users.push({
    id: Math.max(...Globals.users.map((user) => user.id)) + 1,
    ...user,
  });

  await storeUsers();
  console.log("Registre realitzat correctament");
};
const addImgUser = async (idUser, newData) => {
  for (user in Globals.users) {
    if (Globals.users[user].id === idUser) {
      Globals.users[user].profileImage = newData;
    } else {
      console.log("User not found");
    }
  }
  await storeUsers();
};

const searchUser = (mail, passwd) => {
  for (user in Globals.users) {
    if (
      Globals.users[user].mail === mail &&
      Globals.users[user].passwd === passwd
    ) {
      console.log("User found");
      return Globals.users[user];
    }
  }
  return "User not found";
};

export { loadLocalData, getUsers, storeUsers, addUser, searchUser, addImgUser };
