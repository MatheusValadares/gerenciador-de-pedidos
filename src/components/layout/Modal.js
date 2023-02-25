import CardModal from "./CardModal";


function Modal(props) {

  return (<div className={props.show ? "modal" : "hide"}>
    <CardModal>{props.children}</CardModal>
  </div>)
}

export default Modal;