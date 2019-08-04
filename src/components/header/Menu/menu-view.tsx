import React from 'react';
import PrimaryButton from '../../buttons/PrimaryButton';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./menu.module.scss";
import CartPreview from "./../cart-preview";

type Props = {
  showCart: boolean;
  cartPreviewClicked: () => void;
}

const View: React.FC<Props> = ({ showCart, cartPreviewClicked }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <a className="navbar-brand" href="#">Fälschung</a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Store Locator</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Returns Policy</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search Items" aria-label="Search" />
          <PrimaryButton>Search</PrimaryButton>
        </form>
      </div>


      <div>
        <button className={styles.shoppingBag} onClick={cartPreviewClicked}>
          <span className="fa-layers fa-fw fa-2x">
            <FontAwesomeIcon icon={faShoppingBag} />
            <span className="fa-layers-counter fa-layers-bottom-right">3</span>
          </span>
        </button>
        {showCart ? <CartPreview products={[]} /> : ''}
      </div>
    </nav>
  )
}

export default View;
