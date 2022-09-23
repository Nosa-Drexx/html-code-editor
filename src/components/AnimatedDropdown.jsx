import { useEffect } from "react";
import { useSelector } from "react-redux";
import { gsap } from "gsap";

function AnimatedDropdown() {
  const liveAction = useSelector((state) => state.codes.liveAction);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.5 } });
    tl.to(".animated-dropdown", {
      y: 57,
      ease: "elastic.out(1.2, 0.4)",
    });
    tl.to(
      ".animated-dropdown",
      {
        y: -50,
      },
      "+=1"
    );
  }, [liveAction]);

  return (
    <>
      {liveAction ? (
        <div className="animated-dropdown green">
          <div>
            <i className="fa-sharp fa-solid fa-circle-check a-green"></i>
            <span>Sync Action on</span>
          </div>
        </div>
      ) : (
        <div className="animated-dropdown red">
          <div>
            <i className="fa-sharp fa-solid fa-circle-xmark a-red"></i>
            <span>Sync Action off</span>
          </div>
        </div>
      )}
    </>
  );
}

export default AnimatedDropdown;
