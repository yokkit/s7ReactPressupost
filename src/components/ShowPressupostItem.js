const ShowPressupostItem = (props) =>{
    return (
        <div>
          <div>
            <p>Total</p>
            <p>{props.pressupost.total}&euro;</p>
          </div>
          <div>Name: {props.pressupost.nomPressupost}</div>
          <div>Client: {props.pressupost.nomClient}</div>
          {props.pressupost.preuWeb ? (
            <div>Una página web: {props.pressupost.preuWeb}</div>
          ) : (
            <div></div>
          )}
          {props.pressupost.numPaginas ? (
            <div>Número de páginas: {props.pressupost.numPaginas}</div>
          ) : (
            <div></div>
          )}
          {props.pressupost.numIdiomas ? (
            <div>Número de idiomas: {props.pressupost.numIdiomas}</div>
          ) : (
            <div></div>
          )}
          {props.pressupost.preuConsult ? (
            <div>Una Consultoria SEO: {props.pressupost.preuConsult}</div>
          ) : (
            <div></div>
          )}
          {props.pressupost.preuAds ? (
            <div>Una campaña de Google Ads: {props.pressupost.preuAds}</div>
          ) : (
            <div></div>
          )}
        </div>
        )
    }

export default ShowPressupostItem;