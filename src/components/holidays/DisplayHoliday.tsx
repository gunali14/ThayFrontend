import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../login/AuthContext";

const DisplayHoliday = () => {
  const [data, setData] = useState<any[]>([]);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const navigate = useNavigate();
  const [baseUrl] = useState("https://thay-backend.vercel.app");
  const { roleName, token } = useAuth();
  const isAdmin = roleName === "admin";

  const getData = () => {
    fetch(`${baseUrl}/api/holiday`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch holidays");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const updateHoliday = (id: string) => {
    navigate(`/EditHoliday/${id}`);
  };

  const addHoliday = () => {
    navigate("/AddHoliday/");
  };

  const confirmDelete = (id: string) => {
    setDeleteId(id);
  };

  const cancelDelete = () => {
    setDeleteId(null);
  };

  const executeDelete = (id: string) => {
    fetch(`${baseUrl}/api/holiday/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete holiday");
        }
        getData();
        setDeleteId(null);
      })
      .catch((err) => {
        console.error("Error deleting holiday:", err.message);
      });
  };

  useEffect(() => {
    getData();
  }, [baseUrl, token]);

  return (
    <>
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-md-6 d-flex justify-content-end">
            {isAdmin && (
              <button className="btn btn-info mt-3 me-3" onClick={addHoliday}>
                Add Holiday
              </button>
            )}
            {isAdmin && (
              <Link to="/LeavePolicy" rel="noopener noreferrer">
                <button className="btn btn-info mt-3">Leave Policy</button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div style={{ minHeight: "100vh", padding: "20px", backgroundImage: 'linear-gradient(to right, lightblue, #ffffff)' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <table className="table table-hover table-bordered table-striped text-center rounded">
                <thead>
                  <tr>
                    <th>Sl.No</th>
                    <th>Holiday Name</th>
                    <th>Holiday Date</th>
                    <th>Holiday Day</th>
                    <th>Mandatory / Optional</th>
                    {isAdmin && <th>Actions</th>}
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  {data.map((d, index) => (
                    <tr key={d.holidayID}>
                      <td>{index + 1}</td>
                      <td>{d.holidayName}</td>
                      <td>{new Date(d.holidayDate).toLocaleDateString()}</td>
                      <td>{d.holidayDay}</td>
                      <td>{d.mandatoryOptionalHoliday}</td>
                      {isAdmin && (
                        <td className="d-flex justify-content-evenly">
                          <button
                            className="btn btn-success"
                            onClick={() => updateHoliday(d.holidayID)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => confirmDelete(d.holidayID)}
                          >
                            Delete
                          </button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {deleteId && (
        <div className="modal-background">
          <div className="modal-card">
            <div className="card-body">
              <p>Are you sure you want to delete this holiday?</p>
              <div className="d-flex justify-content-evenly">
                <button className="btn btn-danger" onClick={() => executeDelete(deleteId)}>
                  Yes
                </button>
                <button className="btn btn-secondary" onClick={cancelDelete}>
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <style>
        {`
            background-image: linear-gradient(to right, lightblue, #ffffff);
          }
        `}
      </style>
    </>
  );
};

export default DisplayHoliday;
