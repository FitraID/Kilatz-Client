import DashboardIndex from "../../components/v1/dashboard-index";
import DashboardStock from "../../components/v1/dashboard-stock";

const DashBoard = () => {
  return (
    <>
      <div className="mx-5">
        <DashboardIndex />
        <DashboardStock />
      </div>
    </>
  );
};

export default DashBoard;
