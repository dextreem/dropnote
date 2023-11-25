import supabase from "./supabase";

export async function getNotes(location) {
  const { data, error } = await supabase.rpc("nearby_notes", location);

  if (error) {
    console.error(error);
    throw new Error("Could not load notes");
  }

  return data;
}
