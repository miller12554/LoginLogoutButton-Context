import { createContext } from "react";

export const UsersContext = createContext([
  {
    name: 'John Doe',
    pass: '12344'
  },
  {
    name: 'Jane Doe',
    pass: '29292'
  }
]);

