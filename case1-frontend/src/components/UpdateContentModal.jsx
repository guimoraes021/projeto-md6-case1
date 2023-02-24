import { Modal, Button, Form } from 'react-bootstrap'
function UpdateContentModal(props) {
  return(
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={props.isModalOpen}>
        <Form onSubmit={(event) => {
          props.updateContent(event)
        }}>
        <Modal.Header closeButton onClick={props.handleClose}>
          <Modal.Title>Adicionar Filmes</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group controlId="titulo">
            <Form.Label>
              Nome
            </Form.Label>
            <Form.Control defaultValue={props.content.titulo} type="text" />
          </Form.Group>

          <Form.Group controlId="descricao">
            <Form.Label>
              Elenco
            </Form.Label>
            <Form.Control defaultValue={props.content.descricao} type="text" />
          </Form.Group>

          <Form.Group controlId="porcentagem">
            <Form.Label>
              Duração
            </Form.Label>
            <Form.Control defaultValue={props.content.porcentagem} type="text" />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>Close</Button>
          <Button variant="primary" type="submit">Salvar</Button>
        </Modal.Footer>
        </Form>
      </Modal >
    </div>
  )
}

export default UpdateContentModal
