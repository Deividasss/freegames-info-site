import { Form, Modal, Button, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const GamesInfo = (props) => {
    const [modal, setModal] = useState(false)
    const { games2 } = props

    const openModal = () => {
        setModal(true)
    }

    const hideModal = () => {
        setModal(false)
    }
    
    return (
        <>
           
            <Modal size="lg" show={modal} aria-labelledby="contained-modal-title-vcenter"
                centered>
                <div className="congModal">
                    <Button
                        type="button"
                        className="modalCloseBtn btn-close"
                        onClick={hideModal}
                        variant="none"
                    ></Button>
                    <Container className="nftEditMain">
                        <>
                            <div>
                                <h1 className="congradsText">{games2.title}</h1>
                                <h5>{games2.description}</h5>
                            </div>
                        </>
                    </Container>
                </div>
            </Modal>
        </>
    )
}

export default GamesInfo