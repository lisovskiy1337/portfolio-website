import { useCallback, useEffect, useState } from "react";

interface SliderHookOptions {
  ref: React.RefObject<HTMLElement>;
  tabIndex: number;
}

const useSlider = ({ ref, tabIndex }: SliderHookOptions) => {
  const [sliderInfo, setSliderInfo] = useState<{ width: number; left: number }>(
    { width: 0, left: 0 }
  );

  const moveSlider = useCallback(() => {
    const refCur = ref.current;
    const container = refCur?.children;
    if (container) {
      setSliderInfo((prevState) => ({
        ...prevState,
        width: container[tabIndex].getBoundingClientRect().width,
        left:
          container[tabIndex].getBoundingClientRect().left -
          refCur.getBoundingClientRect().left,
      }));
    }
  }, [tabIndex, ref]);

  useEffect(() => {
    moveSlider();
    window.addEventListener("resize", moveSlider);
    return () => window.removeEventListener("resize", moveSlider);
  }, [moveSlider]);

  return sliderInfo;
};

export default useSlider;
