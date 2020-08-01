import React from "react";
import { connect } from "react-redux";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { toggleCartHidden } from "../../store/cart/cart.actions";
import { getTotalQuantityOfItemsInCart } from "../../store/cart/cart.utils";

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
    const { cartItems, cartDropDownHidden, toggleCartDropDown } = this.props;
    const numberOfCartItems = getTotalQuantityOfItemsInCart(cartItems);

    return (
      <div className="relative">
        <CartIcon
          numberOfCartItems={numberOfCartItems}
          handleClick={toggleCartDropDown}
        ></CartIcon>
        {cartDropDownHidden ? null : (
          <CartDropdown cartItems={cartItems}></CartDropdown>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.items,
  cartDropDownHidden: cart.hidden,
});

const mapDispatchToPros = (dispatch) => ({
  toggleCartDropDown: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToPros)(CartNavLink);
