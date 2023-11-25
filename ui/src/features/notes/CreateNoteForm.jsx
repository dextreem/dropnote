import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import Form from "../../components/Form";
import FormRow from "../../components/FormRow";
import Input from "../../components/Input";

import { useCreateNote } from "./useCreateNote";
import { useEditNote } from "./useEditNote";
import Button from "../../components/Button";

function CreateNoteForm({ noteToEdit = {}, onCloseModal }) {
  const { isCreating, createNote } = useCreateNote();
  const { isEditing, editNote } = useEditNote();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = noteToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    if (isEditSession) {
      editNote(
        {
          newNoteData: data,
          id: editId,
        },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    } else {
      createNote(data, {
        onSuccess: (data) => {
          reset();
          onCloseModal?.();
        },
      });
    }
  }

  function onError(errors) {
    console.error(errors);
    toast.error("Could not store the note! Please try again");
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Note Title" error={errors?.title?.message}>
        <Input
          type="text"
          id="title"
          disabled={isWorking}
          {...register("title", {
            required: "A note needs a title",
          })}
        />
      </FormRow>

      <FormRow label="Note Text" error={errors?.text?.message}>
        <Input type="text" id="text" disabled={isWorking} />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>

        <Button disabled={isWorking}>
          {isEditSession ? "Edit Note" : "Drop new Note"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateNoteForm;