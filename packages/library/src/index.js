import { buildEngine } from 'microgine';

export default buildEngine('library', function setupLibraryRoutes() {
  this.route('library', function () {
    this.route('books');
    this.route('book', { path: ':bookId' }, function () {
      this.route('edit');
      this.route('delete');
    });
  });
});
