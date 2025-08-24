import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Unauthorized = () => {
  return (
    <div>
      <h1>You're unauthorized.</h1>
      <Button>
        <Link to="/">Home</Link>
      </Button>
    </div>
  );
};

export default Unauthorized;