import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => (
  <>
    < div className="not-found" >
      <div className='not-found-title'>
        <h1 className="oops">
          Oops!
        </h1>
        <h2>
          Página não encontrada
        </h2>
        <p className="back-home">
          <Link style={{textDecoration:'none'}} to="/">
            Voltar para Home
          </Link>
        </p>
      </div>
    </div >
  </>
);

export default PageNotFound;
