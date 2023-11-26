import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabinzzzzz</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );

  //   const [showForm, setShowForm] = useState(false);
  //   return (
  //     <div>
  //       <Button onClick={() => setShowForm((show) => !show)}>
  //         {" "}
  //         Add new Cabin
  //       </Button>
  //       {showForm && (
  //         <Modal onClose={() => setShowForm(false)}>
  //           <CreateCabinForm onClose={() => setShowForm(false)} />
  //         </Modal>
  //       )}
  //     </div>
  //   );
}

export default AddCabin;
