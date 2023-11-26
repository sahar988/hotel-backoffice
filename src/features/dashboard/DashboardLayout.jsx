import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import useCabins from "../cabins/useCabins";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading: bookingLoading, bookings } = useRecentBookings();
  const {
    isLoading: stayLoading,
    // stays,
    confirmedStays,
    numDays,
  } = useRecentStays();
  confirmedStays;
  const { isLoading: cabinLoading, cabins } = useCabins();

  if (bookingLoading || stayLoading || cabinLoading) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        cabinCount={cabins?.length}
        confirmedStays={confirmedStays}
        numDays={numDays}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays || []} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
