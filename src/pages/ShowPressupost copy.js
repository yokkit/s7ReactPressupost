export default function ShowPressupost(props) {
  return (
    <div>
      {props.arrPressupost.map((pressupost) => (
        <div key={"_" + Math.random().toString(36).substr(2, 9)}>
          <div>
            <p>Total</p>
            <p>{pressupost.total}&euro;</p>
          </div>
          <div>Name: {pressupost.nomPressupost}</div>
          <div>Client: {pressupost.nomClient}</div>
          {pressupost.preuWeb ? (
            <div>Una página web: {pressupost.preuWeb}</div>
          ) : (
            <div></div>
          )}
          {pressupost.numPaginas ? (
            <div>Número de páginas: {pressupost.numPaginas}</div>
          ) : (
            <div></div>
          )}
          {pressupost.numIdiomas ? (
            <div>Número de idiomas: {pressupost.numIdiomas}</div>
          ) : (
            <div></div>
          )}
          {pressupost.preuConsult ? (
            <div>Una Consultoria SEO: {pressupost.preuConsult}</div>
          ) : (
            <div></div>
          )}
          {pressupost.preuAds ? (
            <div>Una campaña de Google Ads: {pressupost.preuAds}</div>
          ) : (
            <div></div>
          )}
        </div>
      ))}
    </div>
  );
}
