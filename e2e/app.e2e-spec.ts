import { Assin2ses2Page } from './app.po';

describe('assin2ses2 App', () => {
  let page: Assin2ses2Page;

  beforeEach(() => {
    page = new Assin2ses2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
