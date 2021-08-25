import { useState } from 'react';
import * as s from './styles';
import { Button } from '../../styles/common.styles';
import Navbar from '../../components/Navbar';
import Modal from '../../components/Modal';
import AdList from '../../components/AdList';
import { useCarAdContext } from '../../contexts/CarAdContext';
import AgreeTOS from '../../components/AgreeTOS';
import AdDetails from '../../components/AdDetails';
import ImageSelect from '../../components/ImageSelect';
import AdConfirmation from '../../components/AdConfirmation';
import { ICarAd } from '../../interfaces';

function App() {
  const [ads, setAds] = useState<ICarAd[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { carAdState, carAdDispatch } = useCarAdContext();

  return (
    <s.App>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          {carAdState.currPage === 0 ? (
            <AgreeTOS setIsModalOpen={setIsModalOpen} />
          ) : carAdState.currPage === 1 ? (
            <AdDetails />
          ) : carAdState.currPage === 2 ? (
            <ImageSelect />
          ) : (
            carAdState.currPage === 3 && (
              <AdConfirmation
                ads={ads}
                setAds={setAds}
                setIsModalOpen={setIsModalOpen}
              />
            )
          )}
        </Modal>
      )}
      <s.Body>
        <Navbar setIsModalOpen={setIsModalOpen} />
        <s.Content>
          {ads.length > 0 ? (
            <AdList ads={ads} />
          ) : (
            <>
              <h2>No cars are currently for sale.</h2>
              <Button onClick={() => setIsModalOpen(true)}>Sell my car</Button>
            </>
          )}
        </s.Content>
      </s.Body>
    </s.App>
  );
}

export default App;
