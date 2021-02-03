
import OrderTableItem from './OrderTableItem';

const OrderTable = ({ orders }) => {


  return (
    <div className="myorders-container">
      <table className="myorders__table">
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
              <OrderTableItem order={order} key={order._id} />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default OrderTable;
