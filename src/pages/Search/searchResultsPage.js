import ContentBasePage from '@pages/contentBasePage';

export default class SearchResultsPage extends ContentBasePage {
  /**
   * Initializes a new instance of {@link SearchResultsPage}
   */
  constructor() {
    super();
    this.matchingResults = this.container.find('ul.product_list').child('li');
  }
}
