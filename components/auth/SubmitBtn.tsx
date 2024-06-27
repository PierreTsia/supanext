import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const SubmitBtn = ({ isLoading, children }) => {
  return (
    <Button disabled={isLoading} type="submit" className="w-full">
      {isLoading ? (
        <>
          {" "}
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait...
        </>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitBtn;
