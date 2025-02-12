import Thaimap from "./ThaiMap";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
const ThailandMap = () => {
  return (
    <div className="bg-red-400 w-[860px] h-[640px] overflow-hidden">
      <TransformWrapper>
        <TransformComponent>
          <Thaimap />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default ThailandMap;
