import supabase from "./supabase";

export async function getNotes() {
  const { data, error } = await supabase.rpc("nearby_notes", {
    lat: 49.444,
    long: 7.7692,
  });

  if (error) {
    console.error(error);
    throw new Error("Could not load notes");
  }

  return data;
}
