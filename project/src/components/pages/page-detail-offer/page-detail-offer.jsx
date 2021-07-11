import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nearby } from '../../nearby/nearby';
import { Header } from '../../shared/header/header';
import { Property } from '../../property/property';
import { PageLoading } from '../page-loading/page-loading';

import { AppRoute } from '../../../const';
import { Selector } from '../../../store/selectors';
import { ActionServer } from '../../../server/actions';

function PageDetailOffer() {
  const [offerData, setOfferData] = useState(null);
  const history = useHistory();
  const { id } = useParams();

  const cityName = useSelector((state) => Selector.getCityName(state));

  const getDetailOffer = () => {
    ActionServer.fetchDetailOffer(id)
      .then(({ offer, nearby }) => setOfferData({ offer, nearby }))
      .catch((err) => history.push(AppRoute.NOT_FOUND));
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    getDetailOffer();

    return setOfferData(null);
  }, [id]);

  if (!offerData) {
    return (
      <PageLoading />
    );
  }

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <Property
          cityName={cityName}
          offers={offerData.nearby}
          offer={offerData.offer}
          id={id}
          handleFavoriteClick={getDetailOffer}
        />

        <div className="container">
          <Nearby offers={offerData.nearby}/>
        </div>
      </main>
    </div>
  );
}

export { PageDetailOffer };
