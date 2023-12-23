import { HiCheck, HiXMark } from "react-icons/hi2";

function PlanFeature({ feature }) {
  return (
    <li>
      <span>{feature.included ? <HiCheck /> : <HiXMark />}</span>{" "}
      {feature.feature}
    </li>
  );
}

export default PlanFeature;
