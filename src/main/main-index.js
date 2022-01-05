import './main-style.scss';


function Main() {
  return(
    <div id="main">
      <section>
        <img src="http://via.placeholder.com/1920X500" alt="mainImage" />
      </section>
      <section className="innerContainer">
        <article id="new">
          <div className="textArea">
            <h1>New Arrival</h1>
            <p>WE THINK YOU'LL LOVE THESE</p>
          </div>
          <ul>
            <li><img src="http://via.placeholder.com/300X300" alt="newItem"/></li>
            <li><img src="http://via.placeholder.com/300X300" alt="newItem"/></li>
            <li><img src="http://via.placeholder.com/300X300" alt="newItem"/></li>
            <li><img src="http://via.placeholder.com/300X300" alt="newItem"/></li>
          </ul>
        </article>
        <article id="collections">
          <div className="textArea">
            <h1>Collections</h1>
            <p>DISCOVER THE ART OF THE EVERYDAY</p>
          </div>
          <div id="collectionArea">
            <div>
              <p>
                Loved and recognized worldwide. Botanic Garden is a classic floral pattern that is as fresh and exciting today as it was in 1972.
              </p>
            </div>
            <img src="http://via.placeholder.com/300X400" alt='collectionImage' />
            <div>
              <p>
              A true British classic, Botanic Garden was designed by the celebrated designer Susan Williams-Ellis in 1972. The mix and match floral motifs, inspired by 19th century botanical illustrations, bring a bit of the garden to your table.
              </p>
            </div>
          </div>
          <h3>BOTANIC GARDEN</h3>
        </article>
      </section>
    </div>
  )
}

export default Main;