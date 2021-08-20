import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

const ModalComponent=(props)=>{


    return(
        <Modal show={props.show} onHide={props.closeModal} animation={true} centered>
        <Modal.Header closeButton>
          <Modal.Title>Detalles del Domicilio # {props.domicilio.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Valor Domicilio: ${props.domicilio.valor} <br></br>
                    Solicitante: {props.domicilio.nombreClienteOrigen} <br></br>
                    Direccion Solicitante:  {props.domicilio.direccionOrigen} <br></br>
                    Destinatario: {props.domicilio.nombreClienteDestino}<br></br>
                    Direccion Destinatario: {props.domicilio.direccionDestino} </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={props.closeModal}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>

    );
};
export default ModalComponent;