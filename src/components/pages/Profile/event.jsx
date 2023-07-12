import { useState } from "react";
const [edit, setEdit] = useState(false);
export function handleEditProfile() {
  setEdit(true);
}
console.log(edit);
