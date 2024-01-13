import ContentAdmin from "./layout/Content";
import MenuSide from "./layout/MenuSide";

export default function AdminPage() {
    return <div>
        <div className="grid grid-cols-5 gap-4">
            <div className="col-span-1 z-10"><MenuSide></MenuSide></div>
            <div className="col-span-4"><ContentAdmin></ContentAdmin></div>
        </div>
    </div>
}