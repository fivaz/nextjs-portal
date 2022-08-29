import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
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

          <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
            This is Modal Content!
          </Modal>
        <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
            This is Modal Content!2
        </Modal>
        </header>
      </div>
  );
}

export default Home
