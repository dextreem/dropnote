import supabase from "./supabase";

export async function getUser(id) {
  const { data, error } = await supabase.from("users").select("*").eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Could not load notes");
  }

  return data;
}
