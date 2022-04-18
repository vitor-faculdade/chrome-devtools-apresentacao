class PagesController {
  constructor() {
    this.pages = $('.page');
    this.currentPage = this.getCurrentPageFromLocalStorage() || 0;
    this.showCurrentPage();
    this.bindEvents();
  }

  getCurrentPageFromLocalStorage() {
    return localStorage.getItem('currentPage');
  }

  showCurrentPage() {
    this.pages.hide();
    this.pages.eq(this.currentPage).show();
  }

  bindEvents() {
    $('#btn-prev').click(() => this.prevPage());
    $('#btn-next').click(() => this.nextPageOrCloseWindow());
  }

  prevPage() {
    if (this.hasPreviousPage())
      this.goToPreviousPage();
  }

  hasPreviousPage() {
    return this.currentPage > 0;
  }

  goToPreviousPage() {
    this.currentPage--;
    this.updateOnLocalStorageAndShowCurrentPage();
  }

  nextPageOrCloseWindow() {
    if (this.hasNextPage())
      this.goToNextPage();
    else
      window.close();
  }

  hasNextPage() {
    return this.currentPage < this.pages.length - 1;
  }

  goToNextPage() {
    this.currentPage++;
    this.updateOnLocalStorageAndShowCurrentPage();
  }

  updateOnLocalStorageAndShowCurrentPage() {
    this.updateCurrentPageOnLocalStorage();
    this.showCurrentPage();
  }

  updateCurrentPageOnLocalStorage() {
    localStorage.setItem('currentPage', this.currentPage);
  }
}

$(() => {
  new PagesController();
});

