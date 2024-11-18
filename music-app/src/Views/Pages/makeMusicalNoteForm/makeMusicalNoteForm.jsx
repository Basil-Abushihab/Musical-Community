import { useNote } from "../../../Custom-Hooks/musicalNotesHooks/noteHooks";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";

export const NoteForm = () => {
  const [formData, setFormData] = useState(new FormData());
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const { note, makeMusicalNoteHandler } = useNote(formData);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    const newFormData = new FormData(formData);

    if (name === "files") {
      for (let i = 0; i < files.length; i++) {
        newFormData.append("files", files[i]);
      }
    } else {
      newFormData.set(name, value);
    }

    setFormData(newFormData);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        color="orange"
        className="text-white hover:bg-orange-600"
      >
        Create Musical Note
      </Button>
      <Dialog open={open} handler={handleOpen} size="xl">
        <form onSubmit={makeMusicalNoteHandler}>
          <DialogHeader className="text-2xl font-bold text-center text-white bg-orange-500 py-4">
            Create a New Musical Note
          </DialogHeader>
          <DialogBody divider className="grid gap-4 p-6">
            <Input
              type="text"
              label="Note Title"
              name="noteTitle"
              onChange={handleInputChange}
              required
              className="w-full"
            />
            <Textarea
              label="Note Description"
              name="noteDescription"
              onChange={handleInputChange}
              required
              className="w-full"
            />
            <Input
              type="number"
              label="Price ($)"
              name="price"
              onChange={handleInputChange}
              required
              className="w-full"
            />
            <Input
              type="file"
              label="Files"
              name="files"
              onChange={handleInputChange}
              multiple
              className="w-full"
            />
          </DialogBody>
          <DialogFooter className="flex justify-end space-x-2 p-4">
            <Button
              variant="outlined"
              color="orange"
              onClick={handleOpen}
              className="mr-1"
            >
              Cancel
            </Button>
            <Button type="submit" variant="gradient" color="orange">
              Create Note
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
};
