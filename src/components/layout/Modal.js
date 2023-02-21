import CardModal from "./CardModal";


function Modal(props) {

  return (<div className="modal">
    <CardModal>{props.children}</CardModal>
  </div>)
}

export default Modal;