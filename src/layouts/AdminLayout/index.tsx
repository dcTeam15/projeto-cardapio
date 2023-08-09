import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const AdminLayout = () => {
    return(
        <>
            <div className="grid m-0 w-full">
                <div className="col-12 md:col-3 lg:col-2 hidden md:flex">
                    <Header />
                </div>
                <div className="col-12 md:col-9 lg:col-10">
                    <Outlet />
                </div>
            </div>

        </>
    );
}

export default AdminLayout;