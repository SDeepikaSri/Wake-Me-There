import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h2 className="text-5xl font-bold">
        Wake Me There
      </h2>

      <p className="mt-4 text-slate-400">
        Never miss your destination again.
      </p>

      <div className="mt-8">
        <Button
          onClick={() =>
            navigate("/create-alarm")
          }
        >
          Create Alarm
        </Button>
      </div>
    </div>
  );
}

export default Home;