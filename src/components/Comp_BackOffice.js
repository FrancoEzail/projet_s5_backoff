import React from 'react';
function CompAddCulture() {
    return(
        <div className="card-form">
            <form method='get'>
                <div className="sub-title-form">
                    <h3>Ajouter un nouveau culture</h3>
                    <div className="circle2">
                        <span><i className="fas fa-circle"></i></span>
                        <span><i className="far fa-circle"></i></span>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-input">
                        <input type="text" placeholder="Nom de culture" name=""/>
                    </div>
                    <div className="form-input">
                        <input type="text" placeholder="Rendement en Kg/m2" name=""/>
                    </div>
                    <div className="form-input">
                        <input type="number" placeholder="Prix en $" name="" min="0"/>
                    </div>
                    <div className="form-input">
                        <input type="number" placeholder="Duree en min" name="" min="0"/>
                    </div>
                    <div className='sub-btn'>
                        <input type="submit" value="Ajouter" />
                        <div className='right-arrow-btn'>
                            <span><i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );   
}

function CompParcelleProprio() {
    return(
    <div className="filtre-box2">
        <div className='right-arrow'>
            <div className='table-title'>
                <h3>Parcelle par proprio</h3>
            </div>
            <span><i className="fas fa-arrow-right"></i></span>
        </div>
        <div className="limit-scroll-2">
        <table className="tableau_style">
            <thead>
                <tr>
                    <th>Proprio</th>
                    <th>Parcelle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Jean</td>
                    <td>P1</td>                               
                </tr>
                <tr>
                    <td>Jean</td>
                    <td>P1</td>                    
                </tr>
                <tr>
                    <td>Jean</td>
                    <td>P1</td>                    
                </tr>
            </tbody>
        </table>
        </div>  
    </div>
    );
}

function CompTerrainNonValid() {
    return(
    <div className="filtre-box2">
        <div className='right-arrow'>
            <div className='table-title'>
                <h3>Terrain en cours de validation</h3>
            </div>
            <span><i className="fas fa-arrow-right"></i></span>
        </div>
        <div className="limit-scroll-2">
        <table className="tableau_style">
            <thead>
                <tr>
                    <th>Proprio</th>
                    <th>Terrain</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Jean</td>
                    <td>P1</td>                               
                    <td><a href='#' className='valid-btn'>Valider</a></td>                               
                </tr>
            </tbody>
        </table>
        </div>  
    </div>
    );
}

function CompParcelleCulture() {
    return(
        <div className="filtre-box">
            <div className='right-arrow'>
                <div className='table-title'>
                    <h3>Liste parcelle par culture</h3>
                </div>
                <span><i className="fas fa-arrow-right"></i></span>
            </div>
            <div className="limit-scroll-1">
                <table className="tableau_style">
                    <thead>
                        <tr>
                            <th>Culture</th>
                            <th>Parcelle</th>
                            <th>Etat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Corn</td>
                            <td>P1</td>
                            <td>En cours</td>
                        </tr>
                        <tr>
                            <td>Corn</td>
                            <td>P1</td>
                            <td>En cours</td>
                        </tr>
                        <tr>
                            <td>Corn</td>
                            <td>P1</td>
                            <td>En cours</td>
                        </tr>
                    </tbody>
                </table>
            </div>  
        </div>
    );
}

export {CompAddCulture,CompParcelleProprio, CompTerrainNonValid,CompParcelleCulture};