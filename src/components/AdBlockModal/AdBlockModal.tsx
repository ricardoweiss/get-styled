import React from 'react';
import Modal from '@/components/Modal/Modal';
import {Title, Subtitle, RefreshButton} from '@/components/AdBlockModal/AdBlockModal.styles';
import { ArrowClockwise } from '@phosphor-icons/react';
import {colors} from '@/styles/styleGuide';

const AdBlockModal: React.FC = () => {
  function refreshPage() {
    window.location.reload();
  }

  return (
    <Modal>
      <Title>AdBlock Detected!</Title>
      <Subtitle>Please remove the AdBlock before using the CSS Convertor</Subtitle>
      <RefreshButton onClick={refreshPage}>
        <ArrowClockwise
          size={32}
          style={{marginRight: '1rem'}}
          color={colors.white}
        />
        Refresh Page
      </RefreshButton>
    </Modal>
  );
};

export default AdBlockModal;
