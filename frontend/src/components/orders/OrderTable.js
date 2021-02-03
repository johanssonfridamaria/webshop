
import Order from './Order';

const OrderTable = ({ orders }) => {


  return (
    <table className="order-table">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Order no.</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total amount</th>
        </tr>
      </thead>
      <tbody>
        {
          orders && orders.map(order => (
            <Order order={order} key={order._id} />
          ))
        }
      </tbody>
    </table>
  )
}

export default OrderTable;
