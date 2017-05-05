import { TableauAppPage } from './app.po';

describe('tableau-app App', function() {
  let page: TableauAppPage;

  beforeEach(() => {
    page = new TableauAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
