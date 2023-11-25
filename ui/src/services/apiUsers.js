import supabase from "./supabase";

export async function getUser(id) {
  const { data, error } = await supabase.from("users").select("*").eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Could not load notes");
  }

  return data;
}

export async function createEditNote(newNote, id) {
  let query = supabase.from("notes");

  // TODO: needs to be replaced by real values
  function getRandomArbitrary(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }
  const note = {
    ...newNote,
    user_id: "87c72612-f017-48ac-9834-97917c652e0d",
    location: `POINT(49.${getRandomArbitrary(430, 480)} 7.7${getRandomArbitrary(
      650,
      750
    )})`,
  };

  console.log(note.location);

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
