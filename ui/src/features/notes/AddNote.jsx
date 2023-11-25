import { HiPlus } from "react-icons/hi2";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import CreateNoteForm from "./createNoteForm";

function AddNote() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="drop-note">
          <Button>
            <HiPlus /> Drop Note
          </Button>
        </Modal.Open>
        <Modal.Window name="drop-note">
          <CreateNoteForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddNote;
