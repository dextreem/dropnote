import supabase from "./supabase";

export async function getNotes(location) {
  const { data, error } = await supabase.rpc("nearby_notes", location);

  if (error) {
    console.error(error);
    throw new Error("Could not load notes");
  }

  return data;
}

export async function createEditNote(newNote, id) {
  let query = supabase.from("notes");

  const note = {
    ...newNote,
    user_id: "87c72612-f017-48ac-9834-97917c652e0d",
  };

  // Either insert for new or update for edit
  if (!id) query = query.insert([note]);
  else query = query.update([note]).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Note could not be created. Please try again");
  }

  return data;
}
