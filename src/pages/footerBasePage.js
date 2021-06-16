import { Selector } from 'testcafe';

export default class FooterBasePage {
  /**
   * Initializes a new instance of {@link FooterBasePage}
   */
  constructor() {
    this.container = Selector('#footer');
    this.newsLetterBlock = this.container.find('#newsletter_block_left');
    this.socialBloc = this.container.find('#social_block');
  }
}
