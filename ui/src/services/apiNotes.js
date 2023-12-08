import { getCurrentUser } from "./apiAuth";
import supabase from "./supabase";

export async function getNotes(location) {
  const { data, error } = await supabase.rpc("nearby_notes", location);

  if (error) {
    console.error(error);
    throw new Error("Could not load notes");
  }

  return data;
}

async function getNoteUserID(id) {
  const userIDColumn = "user_id";
  const { data, error } = await supabase
    .from("notes")
    .select(userIDColumn)
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Could not get note by ID: " + id);
  }

  if (data.length === 0) {
    throw new Error("Could not find a note with ID " + id);
  } else if (data.length > 1) {
    throw new Error("More than on note found with ID" + id);
  }

  return data[0][userIDColumn];
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

export async function deleteNote(id) {
  const user = await getCurrentUser();
  const noteUserID = await getNoteUserID(id);

  if (user.id !== noteUserID) {
    console.log(
      `Note with ID ${id} does not belong to currently logged in user. Cannot delete!`
    );
    return;
  }

  const { error } = await supabase.from("notes").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Could not delete note with ID " + id);
  }
  console.log(`Node ${id} deleted.`);
}
