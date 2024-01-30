import Header from "../components/Comp_Header";
import  {CompAddCulture,CompParcelleProprio, CompTerrainNonValid,CompParcelleCulture} from "../components/Comp_BackOffice";
function BackOffice() {
    return(
        <>
            <Header />
            <div className="container-back">
                <div className="left-section-2">
                   <CompAddCulture />
                </div>
                <div className="center-section-2">
                   <CompParcelleProprio />
                   <CompTerrainNonValid />
                   <CompParcelleCulture />
                </div>
            </div>
        </>
    );
}
export default BackOffice;