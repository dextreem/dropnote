import supabase from "./supabase";

export async function getUser(id) {
  const { data, error } = await supabase.from("users").select("*").eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Could not load notes");
  }

  return data;
}

export async function addUser(id, userName) {
  const { error } = await supabase
    .from("users")
    .insert({ id, user_name: userName });

  if (error) {
    console.error(error);
    throw new Error("User could not be created. Please try again");
  }
}
