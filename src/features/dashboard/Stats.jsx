import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";

function Stats({ bookings, confirmedStays }) {
  const numBookings = bookings.length;
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const checkins = confirmedStays?.length || 0;
  const occupation = confirmedStays?.reduce(
    (acc, cur) => acc + cur.numNights,
    0
  );

  return (
    <>
      <Stat title="Booking" value={numBookings} color="blue" />
      <Stat title="Sales" value={formatCurrency(sales)} color="green" />
      <Stat title="Check ins" value={checkins} color="indigo" />
      <Stat title="Occupancy rate" value={occupation} color="yellow" />
    </>
  );
}

export default Stats;
