import { Button, Card, CardActions, CardContent, CardHeader, Modal } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
};

function RemoveModal(props: { open: boolean, closeModal: () => any, removeItem: () => any }) {
    return (
        <Modal
            keepMounted open={props.open}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            className="modal__remove"
        >
            <Card variant="outlined" sx={style}>
                <CardHeader title="Remove contact" />

                <CardContent>
                    Are you sure you want to remove the contact?
                </CardContent>

                <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Button variant="outlined" onClick={props.closeModal}>Cancel</Button>
                    <Button variant="contained" color="error" onClick={props.removeItem}>Remove</Button>
                </CardActions>
            </Card>
        </Modal>
    );
}

export default RemoveModal;
