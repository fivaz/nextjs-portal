import type { NextPage } from 'next'
import {useState} from 'react';
import Modal from '../lib/Modal';

const Home: NextPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

  return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => setIsOpen(true)}>
            Click to Open Modal
          </button>
            <button onClick={() => setIsOpen2(true)}>
                Click to Open Modal2
            </button>

          <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
            This is Modal Content!
          </Modal>
        <Modal handleClose={() => setIsOpen2(false)} isOpen={isOpen2}>
            This is Modal Content!2
        </Modal>
        </header>
      </div>
  );
}

export default Home
