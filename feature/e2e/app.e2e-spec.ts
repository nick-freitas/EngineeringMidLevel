import {AdminPage} from './app.po';

describe('feature App', () => {
  let page: AdminPage;

  beforeEach(() => {
    page = new AdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rafr works!');
  });
});
