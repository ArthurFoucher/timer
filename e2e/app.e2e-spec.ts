import { AppPage } from './app.po';

describe('md App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should load landing page', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Timer');
  });
});
