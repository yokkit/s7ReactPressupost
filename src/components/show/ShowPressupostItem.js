import classes from "./ShowPressupostItem.module.css";

const ShowPressupostItem = (props) => {
  return (
    <div className={classes.itemStyle}>
      <div className={classes.totalStyle}>
        <p>
          Total
          <span className={classes.totalPrice}>
            {props.pressupost.total}&euro;
          </span>
        </p>
      </div>
      <div className={classes.titleStyle}>
        <hr className={classes.borderStyle} />
        <div>
          <div>Nombre: {props.pressupost.nomPressupost}</div>
          <div>Cliente: {props.pressupost.nomClient}</div>
        </div>
        <hr className={classes.borderStyle} />
      </div>
      <div className={classes.detailsStyle}>
        {props.pressupost.preuWeb ? (
          <div>
            <span>&#10003;</span> Una página web: {props.pressupost.preuWeb}
            &euro;
          </div>
        ) : (
          <div></div>
        )}
        {props.pressupost.numPaginas ? (
          <div className={classes.numsStyle}>
            <span>-</span> Número de páginas: {props.pressupost.numPaginas}
          </div>
        ) : (
          <div></div>
        )}
        {props.pressupost.numIdiomas ? (
          <div className={classes.numsStyle}>
            <span>-</span> Número de idiomas: {props.pressupost.numIdiomas}
          </div>
        ) : (
          <div></div>
        )}
        {props.pressupost.preuConsult ? (
          <div>
            <span>&#10003;</span> Una Consultoria SEO:{" "}
            {props.pressupost.preuConsult}&euro;
          </div>
        ) : (
          <div></div>
        )}
        {props.pressupost.preuAds ? (
          <div>
            <span>&#10003;</span> Una campaña de Google Ads:{" "}
            {props.pressupost.preuAds}&euro;
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ShowPressupostItem;
