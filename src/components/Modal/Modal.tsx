import React from 'react';
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';
import Table from '../Table/Table';

type ModalProps = {
    isOpen: boolean,
    onCloseTable: any
}

const TableModal = ({ isOpen, onCloseTable }: ModalProps) => {
    return (
        <ModalTransition>
            {
                isOpen ?
                    <Modal onClose={onCloseTable} width="large">
                        <Table />
                    </Modal>
                    : null
            }
        </ModalTransition>
    )
}

export default TableModal;