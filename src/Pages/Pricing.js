import React from "react";
import Header from "../Componentes/Header"
import Descripton from "../Componentes/Description"
import Cards from '../Componentes/Cards'
import dataPricing from '../utils/mocks/dataPricing'
import Footer from '../Componentes/Footer'




function Pricing() {

  return(
  <>
   <Header
   companyName = "Bio Inteligente KDBD"
   navBar = {
       [
           {
               name: "Facebook",
               url: "http://facebook.com"
           },
           {
               name: "Twitter",
               url: "http://twitter.com"
           },
           {
               name: "Instagram",
               url: "http//instagram.com"
           },
           
           {
            name: "Youtube",
            url: "http//youtube.com"
        },
       ]
   }
   />
   <Descripton
   title = "Precios"
   description = "Los mejores precios del mercado" />
   
   <Cards
   data = {dataPricing} />
 
   <Footer/>
   </>
    )
}

export default Pricing;