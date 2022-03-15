import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  queryParams = {
    type: { refreshModel: true },
  };

  model({ type }) {
    console.log('Fetching model with param', type);
  }
}
