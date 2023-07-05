import { memo } from "react";
import Card from "../ui/Card";

function ShimmerCards() {
  return (
    <>
      <Card>
        <div className="shimmer-placeholder">
          <div className="shimmer-line" />
          <div className="shimmer-line" />
          <div className="shimmer-line" />
          <div className="shimmer-line" />
        </div>
      </Card>
    </>
  );
}

export default memo(ShimmerCards);
