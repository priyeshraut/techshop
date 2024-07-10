import useFirstComponentAndMoveToTop from "../hooks/useFirstComponentAndMoveToTop";
import Help from "./HelpCenterPage/Help";
import MoveToTop from "./MoveToTop";

const HelpCenter = () => {
    const {firstComponentRef, topLinkRef} = useFirstComponentAndMoveToTop(); 
    return (
        <main ref={firstComponentRef}>
            <Help />
            <MoveToTop ref={topLinkRef} />
        </main>
    )
}

export default HelpCenter;