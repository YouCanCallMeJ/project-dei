import Popup from 'reactjs-popup';
import "../styles/modal.css"

const Modal = () => (
  <Popup
  trigger={<button class="button"> Check DEI </button>}
    modal
    nested
  >
    {close => (
      <div class="modal">
        <button class="close" onClick={close}>
          &times;
        </button>
        <div class="header"> Modal Title </div>
        <div class="content">
          {' '}
          Have you ever considered the DEI questions?
          <br />
          <br />
          Diversity: The presence of differences within a given setting. In the workplace, that can mean differences in race, ethnicity, gender, gender identity, sexual orientation, age and socioeconomic class.
          <br />
          <br />
          Equity: The act of ensuring that processes and programs are impartial, fair and provide equal possible outcomes for every individual.
          <br />
          <br />
          Inclusion: The practice of ensuring that people feel a sense of belonging in the workplace. This means that every employee feels comfortable and supported by the organization when it comes to being their authentic selves.
        </div>
        <div class="actions">
          <Popup
            trigger={<button class="button"> Trigger </button>}
            position="top center"
            nested
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
          </Popup>
          <button
            class="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}
  </Popup>
);

export default Modal;