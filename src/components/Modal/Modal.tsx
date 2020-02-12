import React from 'react';
import Button from '@atlaskit/button';
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';
import Table from '../Table/Table';
import  {greenButton} from '../../styles/styles';

interface State {
  isOpen: boolean;
}
export default class TableModal extends React.PureComponent<{}, State> {
  state: State = { isOpen: false };

  open = () => this.setState({ isOpen: true });

  close = () => this.setState({ isOpen: false });

  secondaryAction = ({ target }: any) => console.log(target.innerText);

  render() {
    const { isOpen } = this.state;
    const actions = [
      { text: 'Close', onClick: this.close }
    ];

    return (
      <div>
        <Button onClick={this.open} css={greenButton}>Open Modal</Button>

        <ModalTransition>
          {isOpen && (
            <Modal actions={actions} onClose={this.close} heading="Data table" width="x-large">
              <Table />
            </Modal>
          )}
        </ModalTransition>
      </div>
    );
  }
}