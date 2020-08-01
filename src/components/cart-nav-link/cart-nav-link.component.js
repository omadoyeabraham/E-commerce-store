import React from "react";
import { connect } from "react-redux";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { toggleCartHidden } from "../../store/cart/cart.actions";
import {
  selectCartItemsTotalQuantity,
  selectCartItems,
  selectCartState,
} from "../../store/cart/cart.selectors";

/**
 * Link in the navbar which shows the number of items in the cart
 *
 * @type container component
 */
class CartNavLink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCartDropDown: false,
    };
  }

  render() {
    const {
      cartItems,
      cartDropDownHidden,
      toggleCartDropDown,
      totalQuantityOfItemsInCart,
    } = this.props;

    return (
      <div className="relative">
        <CartIcon
          numberOfCartItems={totalQuantityOfItemsInCart}
          handleClick={toggleCartDropDown}
        ></CartIcon>
        {cartDropDownHidden ? null : (
          <CartDropdown cartItems={cartItems}></CartDropdown>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  cartDropDownHidden: selectCartState(state).hidden,
  totalQuantityOfItemsInCart: selectCartItemsTotalQuantity(state),
});

const mapDispatchToPros = (dispatch) => ({
  toggleCartDropDown: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToPros)(CartNavLink);
